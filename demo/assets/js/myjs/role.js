$(document).ready(function() {
	var table_name = "role_master";

/*---------insert data into area_master start-----------------*/
    $(document).on("submit","#vendors_form",function(e){
			e.preventDefault();

			var name = $('#vendor_category').val();
			var date = $('#date').val();

			var tdateAr = date.split('/');
			date = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0].slice();

			var id = $('#save_update').val();
			var status = 0;
				if ($('#status').is(":checked")){
					status = 1; 
				}
				
			$.ajax({
                type : "POST",
				url  : baseurl+"settings/save_settings",
                dataType : "JSON",
		        async : false,
                data : {
						id:id,
						name:name,
						date:date,
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
/*---------insert data into area_master end-----------------*/


/*---------get data into area_master start-----------------*/

	show_master();	//call function show data table
		
	
		//	function show data table
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
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Role Name</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Current Status</th>'+
                          //  '<th style="white-space:nowrap;text-align:left;padding:10px 10px;display:none;">Creation Date</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Action</th>'+
                            '</tr>'+
                            '</thead>'+
                            '<tbody>';

				for(i=0; i<data.length; i++){
					var sr = i+1;
					var status = "";
					var date = "";
					if(data[i].date!="0000-00-00"){

						var tdateAr = data[i].date.split('-');
						date = tdateAr[2] + '/' + tdateAr[1] + '/' + tdateAr[0].slice();
						
					}

					if(data[i].status==1){
						status = '<button  class="btn btn-sm  btn-xs  btn-success"  >Active</button>';	
					}
					else{
						status = '<button  class="btn btn-sm  btn-xs  btn-danger"  >Inactive</button>';	
					}
	                html += '<tr>'+
	                        '<td id="name_'+data[i].id+'">'+data[i].name+'</td>'+
	                        '<td >'+status+'</td>'+
	                       // '<td style="display:none;" id="date_'+data[i].id+'" >'+date+'</td>'+
							'<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="'+data[i].id+'" name="'+data[i].status+'" ><i class="fa fa-edit"></i></button>'+
							'</tr>';
		            }
					
					html += '</tbody></table>';
		            $('#show_master').html(html);
	    $('#myTable').DataTable({});
		        }

		    });
		}
		
/*---------get data into area_master end-----------------*/

  	$(document).on('click','.closehideshow',function(){
			form_clear();
		    });

	function form_clear(){
	
	var date = new Date();
		date = date.toString('dd/MM/yyyy');
		$("#date").val(date);
		$('#vendor_category').val('');
		$('#save_update').val('');
		$('#status').bootstrapToggle('on');
    
	}
	
	
/*---------get  role_master  start-----------------*/

  	$(document).on('click','.edit_data',function(){
		var id1 = $(this).attr('id');
		
		var st = $(this).attr('name');		
		var name = $('#name_'+id1).html();
		var date = $('#date_'+id1).html();

			$('#vendor_category').val(name);
			$('#date').val(date);
			if(st=="1"){
				$('#status').bootstrapToggle('on');
			}
			else{
				$('#status').bootstrapToggle('off');				
			}

			$('#save_update').val(id1);
			
			$('.btnhideshow').trigger('click');

        });
	
/*---------get  area_master  end-----------------*/
/*---------delete  area_master  start-----------------*/

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
	
/*---------delete  area_master  end-----------------*/

	
});