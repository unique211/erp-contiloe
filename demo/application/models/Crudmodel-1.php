<?php
class Crudmodel extends CI_Model{
	
	    function data_insert($data,$table){
			if($table=="people_master" || $table=="project_master" || $table=="suppiler_master" || $table=="artist_schedule" || $table=="actualschedual" ||$table=="monthy_budget"){
			$result = $this->db->insert($table,$data);
			return $this->db->insert_id();
				
			}else{
				$result = $this->db->insert($table,$data);
				return $result;
			}
			
		}

	    function data_update($data,$table,$colum,$id){
						$this->db->where($colum,$id);
						
				
			$result = $this->db->update($table,$data);
			return $result;
		}
		
	    function data_get($table){
			if($table == 'vendor_registration'){
					$this->db->order_by('regdate','desc');
			}
			
			$hasil=$this->db->get($table);
			return $hasil->result();
		}
	    function data_get_where($table,$where){
			$sql="";
			if($where!=""){
					if($table == 'project_master'){
						$this->db->where('project_master.status','1');	
					}else if($table == 'location_master')
					{
						$this->db->where('location_master.status','1');	
					}else if($table == 'expenses_master')
					{
						$this->db->where('expenses_master.status','1');	
					}/*else if($table=="character_master"){
						$this->db->where('character_master.status','1');	
					}*/else if($table=="service_master"){
						$this->db->where('service_master.status','1');	
					}
					

					else{
							//$this->db->where($where);	
					}
    								
			}
			if($table == 'character_master'){
				if($where=='1'){
			$this->db->select('character_master.*,project_master.name as projectname,peopletype_master.name as peoplename');    
				$this->db->from('character_master');
				$this->db->join('project_master', 'project_master.id = character_master.projectid');
				$this->db->join('peopletype_master', 'peopletype_master.id = character_master.peopletype');
			
				$hasil=$this->db->get();
			}else{
				$this->db->select('character_master.*');
				$this->db->where($where);					
				$this->db->from('character_master');
				$this->db->order_by('character_master.name','asc');
				$hasil=$this->db->get();
			}

			}
			else if($table == 'project_master'){
				
				$this->db->select('project_master.*');    
				$this->db->from('project_master');
				$this->db->order_by('project_master.name','asc');
				$hasil=$this->db->get();

			}else if($table=="location_master")
			{
				$this->db->select('location_master.*');    
				$this->db->from('location_master');
				$hasil=$this->db->get();
			}else if($table == 'people_master'){
				if($where=='1'){
				$this->db->select('people_master.*,peopletype_master.name as peopletype');    
				$this->db->from('people_master');
				$this->db->join('peopletype_master', 'peopletype_master.id = people_master.ptypeid');
				//$this->db->join('lis_artist', 'lis_artist.pid = people_master.id');
				//$this->db->join('character_master', 'character_master.id = lis_artist.role_id');
				//$this->db->join('project_master', 'project_master.id = lis_artist.proid');
				$hasil=$this->db->get();
				//$q=$this->db->last_query(); */
				}else{
					$this->db->select('people_master.*');    
					$this->db->from('people_master');
					$this->db->where($where);
					$this->db->order_by('people_master.name','asc');
					$hasil=$this->db->get();
				}
			}else if($table == 'lis_artist'){
				$this->db->select('lis_artist.*,character_master.name as charectername,people_master.name as peoplename');    
				$this->db->from('lis_artist');
				$this->db->join('character_master', 'character_master.id = lis_artist.role_id');
				$this->db->join('people_master', 'people_master.id = lis_artist.pid');
				$this->db->where($where);
				$hasil=$this->db->get();
			}else if($table == 'document_master'){
				$this->db->select('document_master .*');    
				$this->db->from('document_master');
				$this->db->where($where);	
			
				$hasil=$this->db->get();
			}else if($table == 'projectdocument'){
				$this->db->select('projectdocument .*');    
				$this->db->from('projectdocument');
				$this->db->where($where);	
				$hasil=$this->db->get();
			}else if($table == 'service_master'){
				$this->db->select('service_master .*');    
				$this->db->from('service_master');
				$hasil=$this->db->get();
			}else if($table == 'currentmaterial_master'){
				$this->db->select('currentmaterial_master .*,expenses_master.name as sevicename,project_master.name as projectname,expenses_subaccount.name as subaccountname');    
				$this->db->from('currentmaterial_master');
				$this->db->join('expenses_master', 'expenses_master.id = currentmaterial_master.serviceid');
				$this->db->join('project_master', 'project_master.id = currentmaterial_master.proid');
				$this->db->join('expenses_subaccount', 'expenses_subaccount.id = currentmaterial_master.subaccountid');
				$this->db->where($where);	
				$hasil=$this->db->get();
			}else if($table == 'suppilerdocument'){
				$this->db->select('suppilerdocument .*');    
				$this->db->from('suppilerdocument');
				$this->db->where($where);	
			
				$hasil=$this->db->get();
			}else if($table == 'artist_schedule'){
				if($where='1'){
				$this->db->select('artist_schedule .*,project_master.name as projectname,location_master.name as locationname');    
				$this->db->from('artist_schedule');
				$this->db->join('location_master', 'location_master.id = artist_schedule.locationid');
				$this->db->join('project_master', 'project_master.id = artist_schedule.projectid');
				//$this->db->where($where);	
				$hasil=$this->db->get();}
			}else if($table == 'scenewisedetails'){
				$this->db->select('scenewisedetails .*');    
				$this->db->from('scenewisedetails');
				$this->db->where($where);	
			$hasil=$this->db->get();
			}else if($table == 'callsheet'){
				$this->db->select('callsheet .*,people_master.name as peoplename,character_master.name as charectername,peopletype_master.name as peopletypename');    
				$this->db->from('callsheet');
				$this->db->join('people_master', 'people_master.id = callsheet.peopleid');
				$this->db->join('peopletype_master', 'peopletype_master.id = callsheet.peopletypeid');
				$this->db->join('character_master', 'character_master.id = callsheet.characterid');
				$this->db->where($where);	
			$hasil=$this->db->get();
			
			}else if($table=="plannedexpenses"){
				$this->db->select('plannedexpenses .*,expenses_subaccount.name as subaccount,unitofmeasurement.name as unitname,unitofmeasurement.id as unitid,expenses_master.name as expensename');    
				$this->db->from('plannedexpenses');
				$this->db->join('expenses_subaccount', 'expenses_subaccount.id = plannedexpenses.subaccountid');
				$this->db->join('expenses_master', 'expenses_master.id = plannedexpenses.expensiveid');
				$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
				$this->db->where($where);	
			$hasil=$this->db->get();
			}else if($table=="actualschedual"){
				$this->db->select('actualschedual .*,project_master.name as projectname');    
				$this->db->from('actualschedual');
				$this->db->join('project_master', 'project_master.id = actualschedual.projectid');
				//$this->db->where($where);	
			$hasil=$this->db->get();
			}else if($table=="peopleattdance"){
				$this->db->select('peopleattdance.*,character_master.name as charectre,people_master.name as peoplename,peopletype_master.name as peopletype');    
				$this->db->from('peopleattdance');
				$this->db->join('peopletype_master', 'peopletype_master.id = peopleattdance.peopletypeid');
				$this->db->join('character_master', 'character_master.id = peopleattdance.charecterid');
				$this->db->join('people_master', 'people_master.id = peopleattdance.peopleid');
				$this->db->where($where);
				$hasil=$this->db->get();
			}else if($table=="actualexpense"){
				$this->db->select('actualexpense.*,expenses_master.name as expenname,unitofmeasurement.name as unitname,expenses_subaccount.name as subaccname');    
				$this->db->from('actualexpense');
				$this->db->join('expenses_master', 'expenses_master.id = actualexpense.expenseid');
				$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
				$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
		//		$this->db->join('plannedexpenses', 'plannedexpenses.id = actualexpense.expenseid');
				$this->db->where($where);
				$hasil=$this->db->get();
			
			}else if($table=="expenses_subaccount"){
				$this->db->select('expenses_subaccount.*,expenses_master.name as expensesname');    
				$this->db->from('expenses_subaccount');
				$this->db->join('expenses_master', 'expenses_master.id = expenses_subaccount.expensesid');
				//$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
		//		$this->db->join('plannedexpenses', 'plannedexpenses.id = actualexpense.expenseid');
				$this->db->where($where);
				$hasil=$this->db->get();
			
			}
			else{
				if($table=="suppiler_master"){
					$this->db->order_by('companyname','asc');
					$hasil=$this->db->get($table);
				}else if($table=="expenses_master"){
					$this->db->order_by('expenses_master.name','asc');
					$hasil=$this->db->get($table);
				}else if($table=="peopletype_master"){
					$this->db->order_by('peopletype_master.name','asc');
					$hasil=$this->db->get($table);
				}else if($table=="expensesgroup"){
					$this->db->order_by('expensesgroup.name','asc');
					$hasil=$this->db->get($table);
				}else{
				$hasil=$this->db->get($table);
				}
			}
			//file_put_contents('./log_'.date("j.n.Y").'.txt', $where), FILE_APPEND);
			// return $sql;
			//return $q;
			return $hasil->result();
			//echo $where.'='.$sql;
		}
	    function get_count($table){
			$hasil=$this->db->get($table);
			return $hasil->num_rows();
		}
	    function get_count_where($table,$where){
			if($where!=""){
    					$this->db->where($where);				
			}
			$hasil=$this->db->get($table);
			return $hasil->num_rows();
		}
		
	    function get_insertid($table,$id){
					$this->db->select_max($id);
			$hasil=$this->db->get($table);
			return $hasil->row()->$id;
		}
	    function get_insertid_new($table,$id){
			$query =" SHOW TABLE STATUS LIKE '$table' ";
			$hasil=$this->db->query($query);
			return $hasil->row()->Auto_increment;
		}
		
	    function data_delete($table,$colum,$id){
				if($table=="project_master"){
					$this->db->select('*'); 
					$this->db->from('artist_schedule');
					$this->db->where('projectid',$id);
					$query = $this->db->get();
					
					if ($query->num_rows() > 0) {
						return '500';
					}else{
						$this->db->where($colum,$id);
						$result = $this->db->delete($table);
						return $result;
					}
				}else{
						$this->db->where($colum,$id);
						$result = $this->db->delete($table);
						return $result;
				}
		}
		function data_get_chdata($table_name,$pid,$proid){
			$this->db->select('character_master.name');    
				$this->db->from('character_master');
				$this->db->join('lis_artist','lis_artist.role_id = character_master.id');
				$this->db->where('lis_artist.type','artist');
				$this->db->where('lis_artist.pid',$pid);
				$this->db->where('lis_artist.proid',$proid);	
				$hasil=$this->db->get();
				return $hasil->result();
		}
		function data_delete1($table,$type,$id){
			$this->db->where('proid',$id);
			$this->db->where('type',$type);
			$result = $this->db->delete($table);
return $result;
}		
function data_get_where1($table,$where){
	if($table == 'project_master'){
				
		$this->db->select('project_master.*');    
		$this->db->from('project_master');
		$this->db->where($where);
		$hasil=$this->db->get();
		return $hasil->result();
}

}

function data_get_artist($table,$where){
if($table == 'lis_artist'){
				
		$this->db->select('lis_artist.*,people_master.name as artist');    
		$this->db->from('lis_artist');
		$this->db->join('people_master', 'people_master.id = lis_artist.pid');
		$this->db->where($where);
		$hasil=$this->db->get();
		return $hasil->result();
}

}
function data_get_aritistdata($table,$where,$project){
/*	$this->db->select('character_master.*');    
	$this->db->from('character_master');
	$this->db->join('project_master', 'project_master.id = character_master.projectid');
	$this->db->join('peopletype_master', 'peopletype_master.id = character_master.peopletype');
	$this->db->where($where);
	$this->db->where('projectid',$project);
	$this->db->order_by('character_master.name','asc');
	$hasil=$this->db->get();
	return $hasil->result();*/

	$this->db->select('character_master.*');    
	$this->db->from('character_master');
	//$this->db->join('project_master', 'project_master.id = character_master.projectid');
	$this->db->join('peopletype_master', 'peopletype_master.id = character_master.peopletype');
	$this->db->join('lis_artist', 'lis_artist.role_id = character_master.id');
	$this->db->where($where);
	$this->db->where('lis_artist.proid',$project);
	$this->db->order_by('character_master.name','asc');
	$hasil=$this->db->get();
	return $hasil->result();



}function data_get_listaritst($table_name,$where){
	$this->db->select('lis_artist.*,people_master.name as peoplename');    
	$this->db->from('lis_artist');
	$this->db->join('project_master', 'project_master.id = lis_artist.proid');
	$this->db->join('character_master', 'character_master.id = lis_artist.role_id');
	$this->db->join('people_master', 'people_master.id = lis_artist.pid');
	$this->db->where($where);
	$this->db->order_by('peoplename','asc');
//	$this->db->where('leavingdate >',date('Y-m-d'));
	$hasil=$this->db->get();
 // return $this->db->last_query();
	return $hasil->result();
}
function datagetexpensesdata($table){
	$this->db->select('expenses_master.*,unitofmeasurement.name as unitname,expenses_subaccount.name as subaccname,expenses_subaccount.id as subaccid');    
	$this->db->from('expenses_master');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->join('expenses_subaccount', 'expenses_subaccount.expensesid = expenses_master.id');
	$hasil=$this->db->get();
	return $hasil->result();
}function getactualdata($table,$date,$project,$unit){
	$aid=0;
	$this->db->select('artist_schedule.id');    
		$this->db->from('artist_schedule');
		$this->db->where('date',$date);
		$this->db->where('projectid',$project);
		$this->db->where('unit',$unit);
		$hasil=$this->db->get();
		$count=	$hasil->num_rows();
		if($count>0){
		$res5 = $hasil->result_array();
		$aid=$res5[0]['id'];}else{
			$aid=0;
		}
	
	if($aid>0){
	if($table=="artist_schedule"){
		$this->db->select('artist_schedule.*,location_master.name as location');    
		$this->db->from('artist_schedule');
		$this->db->join('location_master', 'location_master.id = artist_schedule.locationid');
		$this->db->where('artist_schedule.id',$aid);
		$hasil=$this->db->get();
		return $hasil->result();
	}else if($table=="callsheet"){
		$this->db->select('callsheet.*,character_master.name as charectre,people_master.name as peoplename,peopletype_master.name as peopletype');    
		$this->db->from('callsheet');
		$this->db->join('character_master', 'character_master.id = callsheet.characterid');
		$this->db->join('people_master', 'people_master.id = callsheet.peopleid');
		$this->db->join('peopletype_master', 'peopletype_master.id = callsheet.peopletypeid');
		$this->db->where('aid',$aid);
		$hasil=$this->db->get();
		return $hasil->result();
	
	}else if($table=="scenewisedetails"){
	/*	$this->db->select('scenewisedetails.*');    
		$this->db->from('scenewisedetails');
		$this->db->where('asid',$aid);
		$hasil=$this->db->get();
		return $hasil->result();*/
		$result=array();
		$producu=array();
		$charecter=array();
		$aid1[]=array();
		$this->db->select('scenewisedetails.name');    
		$this->db->from('scenewisedetails');
		$this->db->where('asid',$aid);
		$hasil=$this->db->get();
		$res5 = $hasil->result_array();
		
		foreach($hasil->result_array() as $chadata){
			$aid1=$chadata['name'];
 
		

		
		
		$this->db->select('character_master.name');    
		$this->db->from('character_master');
		$this->db->where_in('id',$aid1);
		$hasil2=$this->db->get();
		foreach($hasil2->result_array() as $charectername){
			$charecter[]=" ".$charectername['name']." ";
		
		}
	//	return $charecter;
			//return $charecter;
		//	return $hasil2->result();
		$this->db->select('scenewisedetails.*');    
		$this->db->from('scenewisedetails');
		$this->db->join('character_master', 'character_master.id = scenewisedetails.name');
		$this->db->where('asid',$aid);
		$this->db->where_in('scenewisedetails.name',$aid1);
		$hasil1=$this->db->get();
		$row2 =$hasil1->result_array();
	
				foreach ($row2 as $actualdata) {
					$charecterdata=array();
					$scenno=$actualdata['screenno'];
					$charecterdata=$actualdata['name'];
					$description=$actualdata['description'];
					$effect=$actualdata['effect'];
					$sublocation=$actualdata['sublocation'];
					$charecterid=$actualdata['name'];
					$planfotage=$actualdata['planfotage'];
				

					
					array_push($producu,$scenno,$description,$effect,$sublocation,$charecterid,$charecter,$planfotage);
					
				}
			
				$result[]= array(
					'scenno'=>$scenno,
					'description'=>$description,
					'effect'=>$effect,
					'sublocation'=>$sublocation,
					'charecterid'=>$charecterid,
					'charectername'=>$charecter,
					'planfotage'=>$planfotage,
				
					
						
					 );
				
		}
	
		return $result;
		




	}else if($table=="plannedexpenses"){
		$this->db->select('plannedexpenses.*,expenses_master.name as expenname,expenses_master.unit,unitofmeasurement.name as unitname,expenses_subaccount.name as subaccname');    
		$this->db->from('plannedexpenses');
		$this->db->join('expenses_subaccount', 'expenses_subaccount.id = plannedexpenses.subaccountid');//last changes
		$this->db->join('expenses_master', 'expenses_master.id = plannedexpenses.expensiveid');
		$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
		$this->db->where('aid',$aid);
		$hasil=$this->db->get();
		return $hasil->result();
	}
}else{
	return '100';
}
	
}
function datagetex_master($table_name){
	$this->db->select('expenses_master.*,expensesgroup.name as expengroup,unitofmeasurement.name as unitname');    
	$this->db->from('expenses_master');
	$this->db->join('expensesgroup', 'expensesgroup.id = expenses_master.exgroupid');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$hasil=$this->db->get();
	return $hasil->result();
}function get_actualscenedata($table,$where){
	$producu=array();
	$charecter=array();

	$aid=array();
	$charea="";

		//return $charecterdata;
	//	return $hasil2->result();
	$this->db->select('actualscenedetails.*');    
	$this->db->from('actualscenedetails');
//	$this->db->join('character_master', 'character_master.id = actualscenedetails.charecterid');
	$this->db->where($where);
//	$this->db->where_in('charecterid',$aid);
	$hasil1=$this->db->get();
  $row2 =$hasil1->result_array();
			foreach ($row2 as $actualdata) {
				$charecterdata=array();
				$charecterid=$actualdata['charecterid'];
				$scenno=$actualdata['scenno'];
				$description=$actualdata['description'];
				$effect=$actualdata['effect'];
				$sublocation=$actualdata['sublocation'];
				$charecterid=$actualdata['charecterid'];
				$planfotage=$actualdata['planfotage'];
				$actualfotage=$actualdata['actualfotage'];
				$remark=$actualdata['remark'];

			//	echo $charecterid."<br>";
				$charecterid=str_replace("'", " ", $charecterid);
				$charecterid1=	trim($charecterid,"'");
			//	echo "cherecter".$charecterid1;
				$this->db->select('character_master.name');    
				$this->db->from('character_master');
			//	$this->db->where_in('id',$charecterid1);
					$this->db->where("id IN (".$charecterid1.")",NULL, false);
				$hasil2=$this->db->get();
			//	$query=$this->db->last_query();
			//	echo "query".$query;
			// echo json_encode($hasil2->result())."<br>";
				$res6 = $hasil2->result_array();
			//	echo count($res6)."<br>";
				//$aid=$res5[0]['charecterid'];
			
				foreach($hasil2->result_array() as $charectername){
				//	echo $charectername['name'];
					$charecter=" ".$charectername['name']." ";
					array_push($charecterdata,$charecter);
						
					
				}	
			
				//echo $charecterdata;
		//		print_r($charecterdata);
			//	array_push($producu,$scenno,$description,$effect,$sublocation,$charecterid,$charecterdata,$planfotage,$actualfotage,$remark,$charecterdata);
				$result[]= array(
          'scenno'=>$scenno,
					'description'=>$description,
					'effect'=>$effect,
					'sublocation'=>$sublocation,
					'charecterid'=>$charecterid,
					'charectername'=>$charecterdata,
					'planfotage'=>$planfotage,
					'actualfotage'=>$actualfotage,
					'remark'=>$remark,
					
            
					 );
					
				//	array_empty($charecterdata); []="";
			//	empty	($charecterdata);
			}
		
		return $result;	
	
}function get_extra_hour($table_name,$where){
	$this->db->select('people_master.official_working_hour');    
	$this->db->from('people_master');
	$this->db->where($where);
	$hasil1=$this->db->get();
	return $hasil1->result();
}function getproductionstaff($table,$where){
	$this->db->select('lis_artist.*,character_master.name as charectername,people_master.name as peoplename');    
	$this->db->from('lis_artist');
	$this->db->join('character_master', 'character_master.id = lis_artist.role_id');
	$this->db->join('people_master', 'people_master.id = lis_artist.pid');
	$this->db->where($where);
	$this->db->where('type','production');
	$hasil1=$this->db->get();
	return $hasil1->result();
}function getsum_episodic($table,$where){
	$this->db->select('sum(rate) as episodicplan');    
	$this->db->from('lis_artist');
	$this->db->where($where);
	$this->db->where('type','episodic');
	$hasil1=$this->db->get();
	return $hasil1->result();
}function get_monthdata($table,$where){
	$this->db->select('monthy_budget.*,project_master.name as projectname');    
	$this->db->from('monthy_budget');
	$this->db->join('project_master', 'project_master.id = monthy_budget.projectid');
	$hasil1=$this->db->get();
	return $hasil1->result();
}function get_montheditdata($table,$where){
	$this->db->select('monthy_budget.*');    
	$this->db->from('monthy_budget');
	$this->db->where($where);
	$hasil1=$this->db->get();
	return $hasil1->result();
}function get_productbudget($table,$where){
	$this->db->select('production_staff_budget.*,people_master.name as peoplename,character_master.name as charectername');    
	$this->db->from('production_staff_budget');
	$this->db->join('people_master', 'people_master.id = production_staff_budget.peopleid');
	$this->db->join('character_master', 'character_master.id = production_staff_budget.roleid');
	$this->db->where($where);
	$hasil1=$this->db->get();
	return $hasil1->result();
}	function get_editexpebud($table,$where){
	$this->db->select('expensesbudget.*,expenses_master.name as expensename,unitofmeasurement.name as unitname');    
	$this->db->from('expensesbudget');
	$this->db->join('expenses_master', 'expenses_master.id = expensesbudget.expensesid');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->where($where);
	$this->db->order_by('expensename','asc');
	$hasil1=$this->db->get();
	return $hasil1->result();
}function get_plann_artistname($table,$where){
	$producu=array();
	$charectername=array();
	$charecter=array();
	$aid=array();
	$aritistname=array();
	$this->db->select('scenewisedetails.name');    
	$this->db->from('scenewisedetails');
	$this->db->where($where);
	$hasil=$this->db->get();
	$res5 = $hasil->result_array();
// return $res5;
$aritistname=$res5[0]['name'];

$aritistname= explode(",", $aritistname);
//return $aritistname;
	foreach($aritistname as $res5){
	//	$charecter[]=$charectername['name'];
		//$aid[]=$res5['name'];
	
	
	//return $aid;
//$aid=split(",", $aid);
	//	$id=explode(",",$aid); 
	
	$this->db->select('character_master.name');    
	$this->db->from('character_master');
	$this->db->where('id',$res5);
	$hasil2=$this->db->get();
	
//	$res6 = $hasil2->result_array();
	//$aid=$res5[0]['charecterid'];
	foreach($hasil2->result_array() as $charecternm){
		$charecter=$charecternm['name'];
	
	}
	array_push($charectername,$charecter);
}

//return $charectername;

		//return $charecter;
	//	return $hasil2->result();
	$this->db->select('scenewisedetails.*');    
	$this->db->from('scenewisedetails');
	//$this->db->join('character_master', 'character_master.id = scenewisedetails.name');
	$this->db->where($where);
	//$this->db->where_in('charecterid',$aid);
	$hasil1=$this->db->get();
  $row2 =$hasil1->result_array();
			foreach ($row2 as $actualdata) {
				$charecterdata=array();
			//	$charecterid=$actualdata['name'];
				$scenno=$actualdata['screenno'];
				$description=$actualdata['description'];
				$effect=$actualdata['effect'];
				$sublocation=$actualdata['sublocation'];
				$charecterid=$actualdata['name'];
				$planfotage=$actualdata['planfotage'];
	
			
		
				$this->db->select('character_master.name');    
				$this->db->from('character_master');
		$this->db->where("id IN (".$charecterid.")",NULL, false);
				$hasil2=$this->db->get();
				$query=$this->db->last_query();
		
				$res6 = $hasil2->result_array();
		
				foreach($hasil2->result_array() as $charectername){
				//	echo $charectername['name'];
					$charecter=" ".$charectername['name']." ";
					array_push($charecterdata,$charecter);
						
					
				}


				array_push($producu,$scenno,$description,$effect,$sublocation,$charecterid,$charectername,$planfotage);
				$result[]= array(
          'screenno'=>$scenno,
					'description'=>$description,
					'effect'=>$effect,
					'sublocation'=>$sublocation,
					'name'=>$charecterid,
					'charectername'=>$charecterdata,
					'planfotage'=>$planfotage,
				);
			}
		return $result;	
}
function get_checknameexist($table,$name,$id){
				if($id ==''){
			$this->db->select('*'); 
				$this->db->from($table);
				$this->db->where('name', $name);
				$query = $this->db->get();
				if ($query->num_rows() == 0) {
				
	
					}else {
						return '404';
					}
				}
}
function get_monthlydata($table,$where){
	$this->db->select('monthly_expense.*,expenses_master.name as expensename,expenses_subaccount.name as expenaccname');    
	$this->db->from('monthly_expense');
	$this->db->join('expenses_master', 'expenses_master.id = monthly_expense.expensesid');
	$this->db->join('expenses_subaccount', 'expenses_subaccount.id = monthly_expense.subaccid');
	$this->db->where($where);
	$hasil1=$this->db->get();
	return $hasil1->result();
}
function aristdatacheck($table,$date,$project,$unitno){
	$this->db->select('*'); 
	$this->db->from($table);
	$this->db->where('date', $date);
	$this->db->where('projectid', $project);
	if($table=="actualschedual"){
		$this->db->where('unitno', $unitno);
	}else{
	$this->db->where('unit', $unitno);
	}
	$query = $this->db->get();
	if ($query->num_rows() == 0) {
		return true;

		}else {
			return '404';
		}
}function budgetdatacheck($table,$project,$month,$year){
	$this->db->select('*'); 
	$this->db->from($table);
	$this->db->where('projectid', $project);
	$this->db->where('month', $month);
	$this->db->where('year', $year);
	$query = $this->db->get();
	if ($query->num_rows() == 0) {
		return true;

		}else {
			return '404';
		}
}function get_unitdata($table,$where){
	$this->db->select('*,unitofmeasurement.name as unitname'); 
	$this->db->from($table);
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->where($where);
	$query = $this->db->get();
	return $query->result();
}function getaritistdata($table,$project){
	$this->db->select('*,character_master.name as charectername,people_master.name as peoplename'); 
	$this->db->from($table);
	$this->db->join('character_master', 'character_master.id = lis_artist.role_id');
	$this->db->join('people_master', 'people_master.id = lis_artist.pid');
	$this->db->where('proid',$project);
	$this->db->where('lis_artist.type','production');
	$query = $this->db->get();
	return $query->result();
}function getdeletedata($table_name,$id,$date,$proid,$unit){
	

		
				$this->db->select('*'); 
				$this->db->from('actualschedual');
				$this->db->where('date',$date);
				$this->db->where('projectid',$proid);
				$this->db->where('unitno',$unit);
				$query = $this->db->get();
				
				if ($query->num_rows() > 0) {
					return '500';
				}else{
					$data=$this->Crudmodel->data_delete('callsheet',"aid",$id);
					$data=$this->Crudmodel->data_delete('scenewisedetails',"asid",$id);
					$data=$this->Crudmodel->data_delete('plannedexpenses',"aid",$id);
					$this->db->where('aid',$id);
					$this->db->delete('callsheet');
					$this->db->where('asid',$id);
					$this->db->delete('scenewisedetails');
					$this->db->where('aid',$id);
					$this->db->delete('plannedexpenses');
					$this->db->where('id',$id);
					$result=$this->db->delete('artist_schedule');
					return $result;
				}
			
	

}
function getexpense_data($table,$where){
	$this->db->select('*'); 
	$this->db->from($table);
	$this->db->where($where);
	$query = $this->db->get();
	return $query->result();
}
function get_data_exunit($table,$where){
	$this->db->select('expenses_master.*,unitofmeasurement.name as unitname'); 
	$this->db->from('expenses_master');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->where($where);
	$query = $this->db->get();
	return $query->result();
}function get_check_supplier($table,$project,$supplier,$expensac,$expensesubac){
$this->db->select('currentmaterial_master.*'); 
$this->db->from('currentmaterial_master');
$this->db->where('proid',$project);
$this->db->where('sid',$supplier);
$this->db->where('serviceid',$expensac);
$this->db->where('subaccountid',$expensesubac);
$query = $this->db->get();
return $query->result();
}
function budgetdatagetexpensesdata($table){
	$this->db->select('expenses_master.*,unitofmeasurement.name as unitname');    
	$this->db->from('expenses_master');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->order_by('expenses_master.name','asc');
//	$this->db->join('expenses_subaccount', 'expenses_subaccount.expensesid = expenses_master.id');
	$hasil=$this->db->get();
	return $hasil->result();
}
}
?>