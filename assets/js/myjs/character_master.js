$(document).ready(function() {
	var table_name = "character_master";
   
   $(document).on("change",".people",function(e){
	   e.preventDefault();
	   var people_type =  $(".people option:selected").text();
	   if(people_type == 'Artist'){
		   $('#person_char').html('Character*');
	   }else if(people_type == 'Production' || people_type == 'Episodic'){
		   $('#person_char').html('Designation*');
	   }
   });
/*---------insert data into area_master start-----------------*/
    $(document).on("submit","#charectermaster_form",function(e){
			e.preventDefault();
            var projectid = $('#project').val();
			var name = $('#name').val();
           var people= $('#people').val();

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
                        projectid:projectid,
                        name:name,
                        people:people,
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
						
					}
					else{
						errorTost("Data Cannot Save");
					}
					form_clear();		//call function clear role_master form
						show_master();	//call function show role_master table
						$('.closehideshow').trigger('click');
                }
            });
			
    });
    $(document).on('click','.closehideshow',function(){
        form_clear();
        });

function form_clear(){


    $('#project').val('').trigger('change');
     $('#people').val('').trigger('change');
    $('#save_update').val('');
    $('#name').val('');
       

}
    
    
    show_master();
    $(document).on('click','.edit_data',function(){
		var id1 = $(this).attr('id');
		
		var st = $(this).attr('name');		
		var proid = $('#projectid_'+id1).html();
		var name = $('#name_'+id1).html();
        var people = $('#people_'+id1).html();
        var people_type = $('#peopletype_'+id1).html();
		
		if(people_type == 'Artist'){
		   $('#person_char').html('Character*');
	   }else if(people_type == 'Production' || people_type == 'Episodic'){
		   $('#person_char').html('Designation*');
	   }
       
			$('#date').val(date);
			if(st=="1"){
				$('#status').bootstrapToggle('on');
			}
			else{
				$('#status').bootstrapToggle('off');				
			}

			$('#save_update').val(id1);
             $('#project').val(proid).trigger('change');
             $('#people').val(people).trigger('change');
			 $('#name').val(name);
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
            url  : baseurl+"settings/get_master_where",
            async : false,
            data : {table_name:table_name,
                   where:'1',
            },
            dataType : 'json',
            success : function(data){
            var html = '';
                html += '<table id="myTable" class="table table-striped">'+
                        '<thead>'+
						'<tr>'+
                            '<th colspan="7" >'+
										'<div class="col-sm-3" ><div class="form-group"><label class="control-label">Project</label> &nbsp;'+
										'<select class="form-control input-sm project_name1" id="project1" name="project1" style="width: 200px !important;">'+
										'</select></div></div>'+
										
										'<div class="col-sm-3" ><div class="form-group"><label class="control-label">People Type</label> &nbsp;'+
										'<select class="form-control input-sm peopletype1" id="peopletype1" name="peopletype1" style="width: 200px !important;">'+
										'</select></div></div>'+
							'</th>'+
							
                  '</tr>'+
				   '<tr>'+
                        '<th style="display:none">Project Id</th>'+
                        '<th style="display:none">People Id</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Project Name</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">Designation/Character</th>'+
                        '<th style="white-space:nowrap;text-align:left;padding:10px 10px;">People Type</th>'+
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
                        '<td id="projectid_'+data[i].id+'" style="display:none">'+data[i].projectid+'</td>'+
                        '<td id="projectname_'+data[i].id+'">'+data[i].projectname+'</td>'+
                        '<td id="name_'+data[i].id+'">'+data[i].name+'</td>'+
                        '<td id="people_'+data[i].id+'" style="display:none">'+data[i].peopletype+'</td>'+
                        '<td id="peopletype_'+data[i].id+'">'+data[i].peoplename+'</td>'+
                       '<td >'+status+'</td>'+
                        '<td><button  class="edit_data btn btn-sm  btn-xs  btn-primary" id="'+data[i].id+'" name="'+data[i].status+'" ><i class="fa fa-edit"></i></button>'+
                        '</tr>';
                }
                
                html += '</tbody></table>';
                $('#show_master').html(html);
				$('#myTable').DataTable({});
				 getMasterSelect("peopletype_master",".peopletype1"," status = '1' ");
				getMasterSelect("project_master",".project_name1"," status = '1' ");
				
				$('.peopletype1').on( 'change', function () {
						var table = $('#myTable').DataTable();
						var regExSearch = this.value;
						table.column(3).search(regExSearch, true, false).draw();
				});

				$('.project_name1').on( 'change', function () {
						var table = $('#myTable').DataTable();
						var regExSearch = this.value;
						table.column(0).search(regExSearch, true, false).draw();
				});
            }

        });
    }
	
$('.peopletype1').on( 'change', function () {
		var table = $('#myTable').DataTable();
		var regExSearch = this.value;
		table.column(3).search(regExSearch, true, false).draw();
});

$('.project_name1').on( 'change', function () {
		var table = $('#myTable').DataTable();
		var regExSearch = this.value;
		table.column(0).search(regExSearch, true, false).draw();
});
	
	 getMasterSelect("peopletype_master",".peopletype1"," status = '1' ");
	 getMasterSelect("project_master",".project_name1"," status = '1' ");
		  function getMasterSelect(table_name,selecter,where){
	
	 		$.ajax({
                type : "POST",
				url  : baseurl+"settings/get_master_where",
				data:{table_name:table_name,
						where:where,},
                dataType : "JSON",
                async : false,
                success: function(data){
						console.log(data);
					html = '';
					var name = '';
//					if(table_name=="victim_age"){
//					html += '<option selected  value="" >Select Victim Age</option>';
//						}else{
					html += '<option selected  value="" >Select</option>';
//						}
					for(i=0; i<data.length; i++){
					var id = '';
							name = data[i].name;								
							id = data[i].id;
					//alert(name);	
	                html += '<option value="'+id+'">'+name+'</option>';
		            }
		            $(selecter).html(html);
	            }
            });
}
    
});