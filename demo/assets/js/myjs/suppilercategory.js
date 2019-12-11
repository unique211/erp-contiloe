$(document).ready(function() {
	var table_name = "suppiler_category";
    //alert('hi');
/*---------insert data into area_master start-----------------*/
    $(document).on("submit","#supplier_form",function(e){
			e.preventDefault();
         
			var description = $('#description').val();
          

			var id = $('#save_update').val();
			var status = 0;
				if ($('#status').is(":checked")){
					status = 1; 
				}
				alert(status);
			$.ajax({
                type : "POST",
				url  : baseurl+"settings/save_settings",
                dataType : "JSON",
		        async : false,
                data : {
                        id:id,
                        description:description,
                        status:status,
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
        show_master();
function form_clear(){


   
    $('#save_update').val('');
    $('#description').val('');
       

}
$(document).on('click','.edit_data',function(){
    var id1 = $(this).attr('id');
    
    var st = $(this).attr('name');		
   
    var name = $('#name_'+id1).html();
    
        //$('#vendor_category').val(name);
        $('#date').val(date);
        if(st=="1"){
            $('#status').bootstrapToggle('on');
        }
        else{
            $('#status').bootstrapToggle('off');				
        }

        $('#save_update').val(id1);
       

         $('#description').val(name);
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
        url  : baseurl+"settings/get_master",
        async : false,
        data : {table_name:table_name,
                },
        dataType : 'json',
        success : function(data){
        var html = '';
            html += '<table id="myTable" class="table table-striped">'+
                    '<thead>'+
                    '<tr>'+
                    '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Description</th>'+
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
                 
                    '<td id="name_'+data[i].id+'">'+data[i].description+'</td>'+
                   
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