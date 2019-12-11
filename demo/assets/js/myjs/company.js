$(document).ready(function() {
/*---------insert data into area_master start-----------------*/
    $(document).on("submit","#master_form",function(e){
			e.preventDefault();
			var company_name = $('#company_name').val();
			var address = $('#address').val();
			var email = $('#email').val();
			var phone = $('#phone').val();
			var gst = $('#gst').val();
			var pan = $('#pan').val();
			var bank_name = $('#bank_name').val();
			var branch_name = $('#branch_name').val();
			var ac_no = $('#ac_no').val();
			var ifsc = $('#ifsc').val();
			var id = $('#save_update').val();
			$.ajax({
                type : "POST",
				url  : baseurl+"company/save_master",
                dataType : "JSON",
		        async : false,
                data : {id:id,
						company_name:company_name,
						address:address,
						email:email,
						phone:phone,
						gst:gst,
						pan:pan,
						bank_name:bank_name,
						branch_name:branch_name,
						ac_no:ac_no,
						ifsc:ifsc,
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
			

	show_master();	//call function show area_master table
		
	
		//	function show area_master table
		function show_master(){
		    $.ajax({
		        type  : 'POST',
				url  : baseurl+"company/get_master",
		        async : false,
		        dataType : 'json',
		        success : function(data){
var master_name = '';
				var html = '';
					html += '<table id="myTable" class="table table-striped">'+
                            '<thead>'+
                            '<tr>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" ># </th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Company Name</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;"  >Address</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Email id</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Phone No.</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px; " >GST No.</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >PAN No.</th>'+
							'<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Bank Name</th>'+
							'<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Branch Name</th>'+
							'<th style="white-space:nowrap;text-align:left;padding:10px 10px;">A/C No.</th>'+
							'<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Ifsc Code</th>'+
                            '<th style="white-space:nowrap;text-align:left;padding:10px 10px;" >Action</th>'+
                            '</tr>'+
                            '</thead>'+
                            '<tbody>';

				for(i=0; i<data.length; i++){
					var sr = i+1;
	                html += '<tr>'+
	                  		'<td  style="white-space:nowrap;">'+sr+'</td>'+
	                        '<td  style="white-space:nowrap;" id="company_name_'+data[i].id+'">'+data[i].company_name+'</td>'+
	                        '<td  style="white-space:nowrap; " id="address_'+data[i].id+'">'+data[i].address+'</td>'+
	                        '<td  style="white-space:nowrap;" id="email_'+data[i].id+'">'+data[i].email+'</td>'+
	                        '<td  style="white-space:nowrap;" id="phone_'+data[i].id+'">'+data[i].phone+'</td>'+
	                        '<td  style="white-space:nowrap; " id="gst_'+data[i].id+'">'+data[i].gst+'</td>'+
	                        '<td  style="white-space:nowrap;" id="pan_'+data[i].id+'">'+data[i].pan+'</td>'+
							'<td  style="white-space:nowrap;" id="bank_'+data[i].id+'">'+data[i].bank+'</td>'+
							'<td  style="white-space:nowrap;" id="branch_'+data[i].id+'">'+data[i].branch+'</td>'+
							'<td  style="white-space:nowrap;" id="ac_no_'+data[i].id+'">'+data[i].ac_no+'</td>'+
							'<td  style="white-space:nowrap;" id="ifsc_'+data[i].id+'">'+data[i].ifsc+'</td>'+
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
				$('#company_name').val('');
				$('#address').val('');
				$('#email').val('');
				$('#phone').val('');
				$('#gst').val('');
				$('#pan').val('');
				$('#bank_name').val('');
				$('#branch_name').val('');
				$('#ac_no').val('');
				$('#ifsc').val('');
				$('#save_update').val('');
    }
	
	
/*---------get  role_master  start-----------------*/

  	$(document).on('click','.edit_data',function(){
		var id1 = $(this).attr('id');		
		var company_name = $('#company_name_'+id1).html();
		var address = $('#address_'+id1).html();
		var email = $('#email_'+id1).html();
		var phone = $('#phone_'+id1).html();
		var gst = $('#gst_'+id1).html();
		var pan = $('#pan_'+id1).html();
		var bank = $('#bank_'+id1).html();
		var branch = $('#branch_'+id1).html();
		var ac_no = $('#ac_no_'+id1).html();
		var ifsc = $('#ifsc_'+id1).html();
//		var st = $('#status_'+id1).html();

				$('#company_name').val(company_name);
				$('#address').val(address);
				$('#email').val(email);
				$('#phone').val(phone);
				$('#gst').val(gst);
				$('#pan').val(pan);
				$('#bank_name').val(bank);
				$('#branch_name').val(branch);
				$('#ac_no').val(ac_no);
				$('#ifsc').val(ifsc);
			

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
				url  : baseurl+"company/delete_master",
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

	
});