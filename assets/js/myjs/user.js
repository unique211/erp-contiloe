$(document).ready(function() {
	
	   $(document).on("blur","#cpassword",function(e){
			e.preventDefault();
			var msg = '';
			var p =$('#password').val();
			var cp =$('#cpassword').val();
				if(p != cp){
					msg = 'confirm does not match';
				$('#submitbtn').attr('disabled','disabled');
				}
				else{
					msg = '';
				$('#submitbtn').removeAttr('disabled');
				}
				$('#cpass_error').html(msg);
            });
	
	 getMasterSelect("project_master",".project_name"," status = '1' ");
	
	$(document).on("change",".project_name",function(e){
    e.preventDefault();
        var id=$(this).val();
		var html='';
       if(id == 'All'){
		  //  html += '<option selected disabled value="" >Select</option>';
            html += '<option value="All" selected>All</option>';
			 $('.phase_name').html(html);
	   }else{
        getMasterSelect("phase_master",'.phase_name'," status = 1 and projectid ="+id+" ");
	   }
});
	get_roletype();
function get_roletype(){
	
	 		$.ajax({
                type : "POST",
				url  : baseurl+"user/get_role",
                dataType : "JSON",
                success: function(data){
					html = '';
					html += '<option selected disabled value="">Select</option>';
					for(i=0; i<data.length; i++){
	                html += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
		            }
		            $('#user_type').html(html);
	            }
            });
}
	
/*---------insert data into area_master start-----------------*/
    $(document).on("submit","#master_form",function(e){
			e.preventDefault();
			var user_name = $('#user_name').val();
			var user_id = $('#user_id').val();
			var email = $('#email').val();
			var phone = $('#phone').val();
			var mobile = $('#mobile').val();
			var user_type = $('#user_type').val();
			var password = $('#password').val();
			var doj = $('#doj').val();
			
			
		var tdateAr = doj.split('/');
		var doj = tdateAr[2] + '-' + tdateAr[1] + '-' + tdateAr[0].slice();
		
			var id = $('#save_update').val();
			
			$.ajax({
                type : "POST",
				url  : baseurl+"user/save_master",
                dataType : "JSON",
		        async : false,
                data : {id:id,
						user_name:user_name,
						user_id:user_id,
						email:email,
						phone:phone,
						mobile:mobile,
						user_type:user_type,
						password:password,
						doj:doj,
						
						
						},
                success: function(data){
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
	

	show_master();	//call function show area_master table
		
	
		//	function show area_master table
		function show_master(){
		    $.ajax({
		        type  : 'POST',
				url  : baseurl+"user/get_master",
		        async : false,
		        dataType : 'json',
		        success : function(data){
var master_name = '';
				var html = '';
					html += '<table id="myTable" class="table table-striped" style="width:100%;" >'+
                            '<thead>'+
                            '<tr>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >#</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >User Name</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >User id</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Email id</th>'+
                            '<th style="white-space:nowrap;display:none" >Role</th>'+
                            '<th style="white-space:nowrap;display:none" >Role</th>'+
                            '<th style="white-space:nowrap;display:none" >Role</th>'+
                            '<th style="white-space:nowrap;display:none" >Role</th>'+
                           
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Role</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Date of Joining</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Action</th>'+
                            '</tr>'+
                            '</thead>'+
                            '<tbody>';

				for(i=0; i<data.length; i++){
					
					var date = new Date(data[i].doj);
					var date = date.toString('dd/MM/yyyy');
					
					var sr = i+1;
	                html += '<tr>'+
	                  		'<td  style="white-space:nowrap;">'+sr+'</td>'+
	                        '<td  style="white-space:nowrap;" id="user_name_'+data[i].id+'">'+data[i].user_name+'</td>'+
	                        '<td  style="white-space:nowrap;" id="user_id_'+data[i].id+'">'+data[i].user_id+'</td>'+
	                        '<td  style="white-space:nowrap;" id="email_'+data[i].id+'">'+data[i].email+'</td>'+
	                        '<td  style="white-space:nowrap;display:none;" id="phone_'+data[i].id+'">'+data[i].phone+'</td>'+
	                        '<td  style="white-space:nowrap;display:none;" id="mobile_'+data[i].id+'">'+data[i].mobile+'</td>'+
	                        '<td  style="white-space:nowrap;display:none;" id="password_'+data[i].id+'">'+data[i].password+'</td>'+
	                       
	                        '<td  style="white-space:nowrap;display:none;" id="role_'+data[i].id+'">'+data[i].role+'</td>'+
	                        '<td  style="white-space:nowrap;" id="role_name'+data[i].id+'">'+data[i].role_name+'</td>'+
	                        '<td  style="white-space:nowrap;" id="doj_'+data[i].id+'">'+date+'</td>'+
							'<td  style="white-space:nowrap;"><button  class="edit_data btn btn-sm btn-primary" value="'+data[i].status+'"  id="'+data[i].id+'"  ><i class="fa fa-edit"></i></button>'+
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
				$('#user_name').val('');
				$('#user_id').val('');
				$('#email').val('');
				$('#phone').val('');
				$('#mobile').val('');
               $('#user_type').val('').trigger('change');
				$('#password').val('');
				$('#cpassword').val('');
				
				$('#cpass_error').html('');
				
				var date = new Date();
        date = date.toString('dd/MM/yyyy');
        
       $("#doj").val(date);
    }
	
	
/*---------get  role_master  start-----------------*/

  	$(document).on('click','.edit_data',function(){
		var id1 = $(this).attr('id');		
		var user_name = $('#user_name_'+id1).html();
		var user_id = $('#user_id_'+id1).html();
		var email = $('#email_'+id1).html();
		var phone = $('#phone_'+id1).html();
		var mobile = $('#mobile_'+id1).html();
		var password = $('#password_'+id1).html();
		var role = $('#role_'+id1).html();
		var doj = $('#doj_'+id1).html();
		
		var date = new Date(doj);
		var date = date.toString('dd-MM-yyyy');

		
		
				$('#user_name').val(user_name);
				$('#user_id').val(user_id);
				$('#email').val(email);
				$('#phone').val(phone);
				$('#mobile').val(mobile);
				$('#password').val(password);
				$('#cpassword').val(password);
				$('#doj').val(doj);
				$('#user_type').val(role).trigger('change');
			

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
				url  : baseurl+"user/delete_master",
                dataType : "JSON",
                data : { id:id1	},
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
function getMasterSelect(table_name,selecter,where){
        var colum;
                 $.ajax({
                    type : "POST",
                    url  : baseurl+"settings/get_master_where",
                    data:{table_name:table_name,
                            where:where,},
                    dataType : "JSON",
                    async : false,
                    success: function(data){
    
                        html = '';
    
                       // html += '<option selected disabled value="" >Select</option>';
                        html += '<option value="All" selected>All</option>';
    
                        for(i=0; i<data.length; i++){
                        var id = '';
                                name = data[i].name;								
                                id = data[i].id;
                               
                            
                        html += '<option value="'+id+'">'+name+'</option>';
                        }
                        $(selecter).html(html);
                    }
                });
    }
	
});