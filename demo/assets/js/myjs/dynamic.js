$(document).ready(function() {
  
  getMasterSelect("project_master",".project_name"," status = '1' ");
  getMasterSelect("peopletype_master",".people"," status = '1' ");
  getMasterSelect("character_master",".roledata"," status = '1' and peopletype='1' ");
  getMasterSelect("character_master",".role1"," status = '1' and peopletype='2' ");
  getMasterSelect("character_master",".role2"," status = '1' and peopletype='3' ");
  getMasterSelect("people_master",".person_name"," status = '1' and ptypeid='1' ");
  getMasterSelect("people_master",".person_name1"," status = '1' and ptypeid='2' ");
  getMasterSelect("people_master",".person_name2"," status = '1' and ptypeid='3' ");
  getMasterSelect("service_master",".service"," status = '1'");
	getMasterSelect("location_master",".location"," status = '1'");
	getMasterSelect("unitofmeasurement",".unit"," status = '1'");
	getMasterSelect("expenses_master",".expense_type"," status = '1'");
	getMasterSelect("expensesgroup",".expensegroup"," status = '1'");
	getMasterSelect("peopletype_master",".peopletype"," status = '1' ");
//	getMasterSelect("expenses_subaccount",".expensubacc"," status = '1'");
	getMasterSelect("project_master",".project"," status = '1' ");
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
					html += '<option selected disabled value="" >Select</option>';
//						}
					for(i=0; i<data.length; i++){
						var id = '';
						
						name = data[i].name;								
							id = data[i].id;
					//alert(name);
					if(table_name=="peopletype_master"){	
									html += '<option value="'+id+'" name="'+name+'">'+name+'</option>';
								}else{
									html += '<option value="'+id+'" >'+name+'</option>';
								}
		            }
		            $(selecter).html(html);
	            }
            });
}
	

	
});