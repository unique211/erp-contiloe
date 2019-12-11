$(document).ready(function() {
	var table_name = "expenses_master";
   //alert('hi every one');
/*---------insert data into area_master start-----------------*/
    $(document).on("submit","#expenses_form",function(e){
			e.preventDefault();
            var code = $('#code').val();
            var name = $('#name').val();
            var unit = $('#unit').val();
            var expensegroup = $('#expensegroup').val();
          
       // alert('hi');
			var id = $('#save_update').val();
			var status = 0;
				if ($('#status').is(":checked")){
					status = 1; 
				}
				//alert(code+""+name);
			$.ajax({
                type : "POST",
				url  : baseurl+"settings/save_settings",
                dataType : "JSON",
		        async : false,
                data : {
                        id:id,
                        code:code,
                        name:name,
                        status:status,
                        expensegroup:expensegroup,
                        unit:unit,
						table_name:table_name,
						},
                success: function(data){
					console.log(data);
					if(data==true){
						if(id!=""){
							successTost("Data Update Successfully");							
						}else{
						successTost("Data Save Successfully");							
						}
						form_clear();		//call function clear role_master form
						show_master();	//call function show role_master table
						$('.closehideshow').trigger('click');
					}
					else{
						errorTost("Data Cannot Save");
					}
                }
            });
			
    });
    $(document).on('click','.closehideshow',function(){
        form_clear();
        });

function form_clear(){


    $('#code').val('');
    $('#save_update').val('');
    $('#name').val('');
    $('#unit').val('').trigger('change');  
    $('#expensegroup').val('').trigger('change');  

}
show_master();
$(document).on('click','.edit_data',function(){
    var id1 = $(this).attr('id');
    
    var st = $(this).attr('name');		
    var code = $('#code_'+id1).html();
    var name = $('#name_'+id1).html();
    var groupid= $('#groupid_'+id1).html();
    var unit= $('#unit_'+id1).html();
        //$('#vendor_category').val(name);
       // $('#date').val(date);
        if(st=="1"){
            $('#status').bootstrapToggle('on');
        }
        else{
            $('#status').bootstrapToggle('off');				
        }

         $('#code').val(code);
      
       $('#save_update').val(id1);
         $('#name').val(name);
         $('#unit').val(unit);
         $('#expensegroup').val(groupid).trigger('change');
       // $('#date').val();
        $('.btnhideshow').trigger('click');

    });
    $(document).on('click','.delete_data',function(){
        var id1 = $("#save_update").val();
        if(id1 != ""){
    swal({
            title: "Are you sure to delete ?",
            text: "You will not be able to recover this Data !!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it !!",
            closeOnConfirm: false
        },
        function(){	

                $.ajax({
                type : "POST",
                url  : baseurl+"settings/delete_master",
                dataType : "JSON",
                data : { id:id1,
                         table_name:table_name,	},
                success: function(data){
                if(data == true){
                        swal("Deleted !!", "Hey, your Data has been deleted !!", "success");
                        $('.closehideshow').trigger('click');
                        show_master();	//call function show all product					
                    
                    }
                    else{
                    errorTost("Data Delete Failed");
                    }
    
                }
            });
            return false;
            
        });
            
        }

       });
function show_master(){
    $.ajax({
        type  : 'POST',
        url  : baseurl+"settings/get_data_exmaster",
        async : false,
        data : {table_name:table_name,
                },
        dataType : 'json',
        success : function(data){
        var html = '';
            html += '<table id="myTable" class="table table-striped">'+
                    '<thead>'+
                    '<tr>'+
                   
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Expense Account</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Code</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">Groupid</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Group Name</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">Unit</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">UOM</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Status</th>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody>';

        for(i=0; i<data.length; i++){
            var sr = i+1;
            var status = "";
            

            if(data[i].status==1){
                status = '<button  class="btn btn-sm  btn-xs  btn-success"  >Active</button>';	
            }
            else{
                status = '<button  class="btn btn-sm  btn-xs  btn-danger"  >Inactive</button>';	
            }
            html += '<tr>'+
                    
                    '<td id="name_'+data[i].id+'">'+data[i].name+'</td>'+
                    '<td id="code_'+data[i].id+'">'+data[i].code+'</td>'+
                    '<td  style="display:none;"  id="groupid_'+data[i].id+'">'+data[i].exgroupid+'</td>'+
                    '<td id="groupname_'+data[i].id+'">'+data[i].expengroup+'</td>'+
                    '<td  style="display:none;" id="unit_'+data[i].id+'">'+data[i].unit+'</td>'+
                    '<td id="unitname_'+data[i].id+'">'+data[i].unitname+'</td>'+
                   '<td >'+status+'</td>'+
                    '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="'+data[i].id+'" name="'+data[i].status+'" ><i class="fa fa-edit"></i></button>'+
                    '</tr>';
            }
            
            html += '</tbody></table>';
            $('#show_master').html(html);
$('#myTable').DataTable({});
        }

    });
}
});