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
				$this->db->order_by('people_master.name','asc');
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
					$this->db->order_by('date','desc');	
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
				$this->db->select('peopleattdance.*,character_master.name as charectre,people_master.name as peoplename,peopletype_master.name as peopletype,people_master.official_working_hour');    
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
	//$this->db->distinct();
	$this->db->select('character_master.*'); 
	$this->db->distinct();   
	$this->db->from('character_master');
	//$this->db->join('project_master', 'project_master.id = character_master.projectid');
	$this->db->join('peopletype_master', 'peopletype_master.id = character_master.peopletype');
	$this->db->join('lis_artist', 'lis_artist.role_id = character_master.id');
	$this->db->where($where);
	$this->db->where('lis_artist.proid',$project);
	$this->db->order_by('character_master.name','asc');
	//$this->db->order_by('character_master.name','asc');
	$hasil=$this->db->get();
	return $hasil->result();



}function data_get_listaritst($table_name,$where){

	//$this->db->select(DISTINCT('people_master.id'));
//	$this->db->distinct('people_master.name');
	$this->db->select('lis_artist.*,people_master.name as peoplename');   

	$this->db->from('lis_artist');
	$this->db->join('project_master', 'project_master.id = lis_artist.proid');
	$this->db->join('character_master', 'character_master.id = lis_artist.role_id');
	$this->db->join('people_master', 'people_master.id = lis_artist.pid');
	$this->db->where($where);
	$this->db->order_by('peoplename','asc');
//	$this->db->where('leavingdate >',date('Y-m-d'));
$this->db->group_by('people_master.id');
	$hasil=$this->db->get();
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
		$this->db->select('callsheet.*,character_master.name as charectre,people_master.name as peoplename,peopletype_master.name as peopletype,people_master.official_working_hour');    
		$this->db->from('callsheet');
		$this->db->join('character_master', 'character_master.id = callsheet.characterid');
		$this->db->join('people_master', 'people_master.id = callsheet.peopleid');
		$this->db->join('peopletype_master', 'peopletype_master.id = callsheet.peopletypeid');
		$this->db->where('aid',$aid);
		$hasil=$this->db->get();
		return $hasil->result();
	
	}else if($table=="scenewisedetails"){
	
		$producu=array();
		$charectername=array();
		$charecter=array();
	//	$aid=array();
		$aritistname=array();
	
		$this->db->select('scenewisedetails.*');    
		$this->db->from('scenewisedetails');
		//$this->db->join('character_master', 'character_master.id = scenewisedetails.name');
		$this->db->where('asid',$aid);
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
					$sceneremark=$actualdata['sceneremark'];
				
			    	if($charecterid>0){
					$this->db->select('character_master.name');    
					$this->db->from('character_master');
			$this->db->where("id IN (".$charecterid.")",NULL, false);
					$hasil2=$this->db->get();
				//	$query=$this->db->last_query();
			
					$res6 = $hasil2->result_array();
			
					foreach($hasil2->result_array() as $charectername){
					//	echo $charectername['name'];
						$charecter=" ".$charectername['name']." ";
						array_push($charecterdata,$charecter);
							
						
					}
			    	}
	
	
					array_push($producu,$scenno,$description,$effect,$sublocation,$charecterid,$charectername,$planfotage,$sceneremark);
					$result[]= array(
						'scenno'=>$scenno,
						'description'=>$description,
						'effect'=>$effect,
						'sublocation'=>$sublocation,
						'charecterid'=>$charecterid,
						'charectername'=>$charecterdata,
						'planfotage'=>$planfotage,
						//'sceneremark'=>$sceneremark,
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
        if($charecterid > 0){
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
				$sceneremark=$actualdata['sceneremark'];
			
		
				if($charecterid !=""){
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
			}else{
				array_push($charecterdata,'');
			}


				array_push($producu,$scenno,$description,$effect,$sublocation,$charecterid,$charectername,$planfotage,$sceneremark);
				$result[]= array(
          'screenno'=>$scenno,
					'description'=>$description,
					'effect'=>$effect,
					'sublocation'=>$sublocation,
					'name'=>$charecterid,
					'charectername'=>$charecterdata,
					'planfotage'=>$planfotage,
					'sceneremark'=>$sceneremark,
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
function getex_subac($table_name,$exid){
			$this->db->select('expenses_subaccount.*'); 
			$this->db->from('expenses_subaccount');
			$this->db->where('expensesid',$exid);
			$query = $this->db->get();
			return $query->result();
}
function getex_uom($table,$id){
	$this->db->select('expenses_master.*,unitofmeasurement.name as unitname'); 
	$this->db->from('expenses_master');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->where('expenses_master.id',$id);
	$query = $this->db->get();
	return $query->result();
}
function checkexistdata($month,$year){
	$this->db->select('monthy_budget.*'); 
	$this->db->from('monthy_budget');
	$this->db->where('month',$month);
	$this->db->where('year',$year);
	$query = $this->db->get();
	$count=$query->num_rows();
	if($count==0){
		return '400';
	}else{
		return '10';
	}
}
public function getallreport($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth){
	$unitshoot1=0;
	$unitshoot2=0;
	$unitshoot3=0;
	$footage1=0;
	$footage2=0;
	$footage3=0;
	$perday=array();
	$monthunit1=0;
	$monthunit2=0;
	$monthunit3=0;
$episodicsum=0;
	$unit1fotage=array();
	$unit2fotage=array();
	$unit3fotage=array();
	$result=array();
	$episoccost=0;
	$productionbudget=0;
	$adminstaff=0;
$actualproduction=0;

$month=array();
$startDate = new DateTime($fromdate);
$endDate = new DateTime($todate);

$dateInterval = new DateInterval('P1M');
$datePeriod   = new DatePeriod($startDate, $dateInterval, $endDate);



$monthCount = 0;

foreach ($datePeriod as $date) {
   // echo "{$date->format('F')} ({$date->format('Y-m')})<br \>";
		$mont="{$date->format('F')}";
		array_push($month,$mont);
		$monthCount++;
}
if(($frommonth==$tomonth) && ($toyear==$fromyear)){
	array_push($month,$tomonth);
}

//RAVI
	//$month = $tomonth;
//RAVI
	$this->db->select('sum(planfotage1) as unit1shoot,sum(planfotage2) as unit2shoot,sum(planfotage3) as unit3shoot,sum(min1)as footage1,sum(min2)as footage2,sum(min3)as footage3,sum(artistunit1) as monthunit1,sum(artistunit2)as monthunit2,sum(artistunit3) as monthunit3,(episoictotal) as episodicsum,punittotal,asunittotal'); 
	$this->db->from('monthy_budget');
	$this->db->where_in('month', $month);
//	$this->db->where('month <=', $tomonth);
	$this->db->where('year >=', $fromyear);
	$this->db->where('year <=', $toyear);
	$this->db->where("projectid",$project);
	$query = $this->db->get();
	foreach($query->result_array() as $res){
		$unitshoot1=$res['unit1shoot'];
		$unitshoot2=$res['unit2shoot'];
		$unitshoot3=$res['unit3shoot'];
		$footage1=$res['footage1'];
		$footage2=$res['footage2'];
		$footage3=$res['footage3'];
		$monthunit1=$res['monthunit1'];
		$monthunit2=$res['monthunit2'];
		$monthunit3=$res['monthunit3'];
		$episodicsum=$res['episodicsum'];
		$productionbudget=$res['punittotal'];
		$adminstaff=$res['asunittotal'];
	}
	$this->db->select('count(*) as count'); 
	$this->db->from('actualschedual');
	$this->db->where('date >=', $fromdate);
	$this->db->where('date <=', $todate);
	$this->db->where("projectid",$project);
	$this->db->group_by("actualschedual.unitno");

$query2 = $this->db->get();

	foreach($query2->result_array() as $res3){
			$perday1=$res3['count'];
			array_push($perday,$perday1);
	}
		$this->db->select('actualscenedetails.actualfotage,actualschedual.unitno'); 
		$this->db->from('actualscenedetails');
		$this->db->join('actualschedual', 'actualschedual.id = actualscenedetails.aid');
		$this->db->where('date >=', $fromdate);
		$this->db->where('date <=', $todate);
		$this->db->where("actualschedual.projectid",$project);
		$this->db->where("actualscenedetails.actualfotage !=",'');
		$query2 = $this->db->get();
	foreach($query2->result_array() as $res4){
		$unitno=$res4['unitno'];
		if($unitno=='1'){
			$unit1fotage1=$res4['actualfotage'];
			array_push($unit1fotage,$unit1fotage1);
		}else if($unitno=='2'){
			$unit2fotage2=$res4['actualfotage'];
			array_push($unit2fotage,$unit2fotage2);
		}else if($unitno=='3'){
			$unit3fotage3=$res4['actualfotage'];
			array_push($unit3fotage,$unit3fotage3);
			
		}

	}
$list_aritst=array();
/*	$this->db->select('pid,rate,overtime'); 
	$this->db->from('lis_artist');
	$this->db->where('proid', $project);
	$this->db->where('status','1');
	$this->db->where('type','artist');
	$query8 = $this->db->get();
	foreach($query8->result_array() as $listdata){
		$peopleid=$listdata['pid'];
		$rate=$listdata['rate'];
		$overtime=$listdata['overtime'];
		$list_aritst[]=(
			'peopleid'=>$peopleid,
			'rate'=>$rate,
			'overtime'=>$overtime,
		);
	}*/
	
 


	// getDatesFromRange($fromdate,$todate);
	$array = array(); 
      
	// Variable that store the date interval 
	// of period 1 day 
	$interval = new DateInterval('P1D'); 

	$realEnd = new DateTime($todate); 
	$realEnd->add($interval); 
	$daycount=0;
	$period = new DatePeriod(new DateTime($fromdate), $interval, $realEnd); 

	// Use loop to store date into array 

	foreach($period as $date) {                  
			$array[] =$date->format('Y-m-d');  
			$daycount=$daycount+1;
			
	} 

	// Return the array elements 
$totalunit=array();

for($i=1;$i<4;$i++){
	$totaldataofartist=0;
// 	$this->db->select('sum(rate + (extrahour*lis_artist.overtime) ) as total'); 
// 	$this->db->from('peopleattdance');
// 	$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
// 	$this->db->join('lis_artist', 'lis_artist.pid = peopleattdance.peopleid');
// 	$this->db->where('lis_artist.type','artist');
// 	$this->db->where('peopleattdance.peopletypeid','1');
// 	$this->db->where("actualschedual.projectid",$project);
// 	$this->db->where("lis_artist.status",'1');
// 	$this->db->where("peopleattdance.duration !=",'0:0:0');
// 	$this->db->where("peopleattdance.duration !=",'00:00:00');
// 	$this->db->where("peopleattdance.duration !=",'00:00:0');
// //	$this->db->where("peopleattdance.duration <>",'0:0:0');
// //	$this->db->where('peopleattdance.actualfromtime !=',"00:00:00");
// 	//$this->db->where('peopleattdance.actualtotime !=',"00:00:00");
// 	$this->db->where('actualschedual.date >=',$fromdate);
// 	$this->db->where('actualschedual.date <=',$todate);
// $this->db->where("lis_artist.proid",$project);
// $this->db->where("actualschedual.unitno",$i);
// $query5 = $this->db->get();
// //echo $this->db->last_query();
// foreach($query5->result_array() as $totaldata){
// 	array_push($totalunit,$totaldata['total']);
	
// }
$this->db->select('*,people_master.name as peoplename');    
$this->db->from('lis_artist');
$this->db->join('people_master', 'people_master.id = lis_artist.pid');
$this->db->where('lis_artist.proid', $project);
$this->db->where('lis_artist.type', 'artist');
$this->db->group_by('lis_artist.pid');
$hasil1=$this->db->get();
if($hasil1->num_rows()>0){
	foreach($hasil1->result_array() as $list_artistdata){
		$peolpeid=$list_artistdata['pid'];
		$rate=$list_artistdata['rate'];
		$overtimerate=$list_artistdata['overtime'];
		$peoplename=$list_artistdata['peoplename'];
		$countday=0;
		$overtime=0;
		$overtimeamount=0;
		$totalAmount=0;

		$actalrate=0;
//	$this->db->distinct('actualschedual.date');
$this->db->select('peopleattdance.*,actualschedual.date'); 
$this->db->from('peopleattdance');
$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
$this->db->where("actualschedual.projectid",$project);
$this->db->where("peopleattdance.duration !=",'0:0:0');
$this->db->where("peopleattdance.duration !=",'00:00:00');
$this->db->where("peopleattdance.duration !=",'00:00:0');
$this->db->where("peopleattdance.peopleid",$peolpeid);
$this->db->where('actualschedual.date >=',$fromdate);
$this->db->where('actualschedual.date <=',$todate);
$this->db->where("actualschedual.unitno",$i);
$this->db->order_by('actualschedual.date','asc');
$this->db->group_by('actualschedual.date');
$query5 = $this->db->get();

if($query5->num_rows() >0){
	foreach($query5->result_array() as $peopledata){
		$overtimeamount=0;
		$actalrate=0;
		$overtime=$peopledata['extrahour'];
		$date=$peopledata['date'];
		if(	$overtime >0){
			$overtimeamount=$overtime * $overtimerate;
		}else{
			$overtimeamount=0;
		}
		$totalAmount=$rate+$overtimeamount;
	
		$totaldataofartist=$totaldataofartist+	$totalAmount;	
			
		
	}

	
	
}


	}
}
array_push($totalunit,$totaldataofartist);
}



//RAVI
$day_totalunit=array();
for($i=1;$i<4;$i++){
	
	//$this->db->distinct('actualschedual.date');
	$this->db->select('sum(rate + (extrahour*lis_artist.overtime) ) as total'); 
	$this->db->from('peopleattdance');
	$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
	$this->db->join('lis_artist', 'lis_artist.pid = peopleattdance.peopleid');
	$this->db->where('lis_artist.type','artist');
	$this->db->where('peopleattdance.peopletypeid','1');
	$this->db->where("actualschedual.projectid",$project);
	$this->db->where("lis_artist.status",'1');
	$this->db->where("peopleattdance.duration !=",'0:0:0');
	$this->db->where("peopleattdance.duration !=",'00:00:00');
	$this->db->where("peopleattdance.duration !=",'00:00:0');
	//$this->db->where('actualschedual.date >=',$fromdate);
	// $this->db->where('peopleattdance.actualfromtime !=',"0:00:0");
	// $this->db->where('peopleattdance.actualtotime !=',"00:00:00");
	$this->db->where('actualschedual.date =',$todate);
	$this->db->where("lis_artist.proid",$project);
	$this->db->where("actualschedual.unitno",$i);
	
	$query5 = $this->db->get();
	//echo $this->db->last_query();
	foreach($query5->result_array() as $totaldatap){
		array_push($day_totalunit,$totaldatap['total']);
		
	}



}

//RAVI

//Sagar

/*------------get production Staff Overtime Amount--------------*/
$productionovertimecost=0;
$this->db->select('sum(extrahour*lis_artist.overtime)as total'); 
$this->db->from('peopleattdance');
$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
$this->db->join('lis_artist', 'lis_artist.pid = peopleattdance.peopleid');
$this->db->where('lis_artist.type','production');
$this->db->where('peopleattdance.peopletypeid','2');
$this->db->where("actualschedual.projectid",$project);
$this->db->where("lis_artist.status",'1');
$this->db->where("peopleattdance.duration !=",'0:0:0');
$this->db->where("peopleattdance.duration !=",'00:00:00');
$this->db->where("peopleattdance.duration !=",'00:00:0');
$this->db->where('actualschedual.date >=',$fromdate);
$this->db->where('actualschedual.date <=',$todate);
$this->db->where("lis_artist.proid",$project);
$query8 = $this->db->get();
if($query8->num_rows()>0){
	foreach($query8->result_array() as $productionovertimedata){

	$productionovertimecost=$productionovertimedata['total'];
		
		
		}
}else{
	$productionovertimecost=0;
}

$admincost=0;
//Sagar

/*------------get Admin Staff Month Amount--------------*/
	$this->db->select('sum(rate_per_month) as admincost'); 
	$this->db->from('people_master');
	$this->db->where("people_master.status",'1');
	$this->db->where("people_master.ptypeid",'4');
	$query10 = $this->db->get();
if($query10->num_rows()>0){
			foreach($query10->result_array() as $admindata){
				$admincost=$admindata['admincost'];
			}
	}


	$this->db->select('sum(rate) as episoiccost'); 
	$this->db->from('lis_artist');
	$this->db->where("lis_artist.status",'1');
	$this->db->where("lis_artist.proid",$project);
	$this->db->where('lis_artist.type','episodic');
	$query6 = $this->db->get();
	$query6->result();

foreach($query6->result_array() as $episoctotal){
	$episoccost=$episoctotal['episoiccost'];
}
$actualproduction=array();
$actualproductioncost=0;
/*---get production staff------------*/
$totalday=explode("-",$fromdate);

$dayinmmonthnumber = cal_days_in_month(CAL_GREGORIAN, $totalday[1],$totalday[0]);
 
$this->db->select('*'); 
$this->db->from('lis_artist');
$this->db->where("lis_artist.status",'1');
$this->db->where("lis_artist.proid",$project);
$this->db->where('lis_artist.type','production');
$query10 = $this->db->get();
	if($query10->num_rows() > 0){
		foreach($query10->result_array() as $listprodata){
			$unit=$listprodata['perunit'];
			$pid=$listprodata['pid'];
			$rate=$listprodata['rate'];
			$overtimerate=$listprodata['overtime'];
			$role_id=$listprodata['role_id'];
			//echo $unit;
			if($unit==1){
				$this->db->select('sum(extrahour)as total,count(actualschedual.id) as daycount'); 
				$this->db->from('peopleattdance');
				$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
				$this->db->where('peopleattdance.peopletypeid','2');
				$this->db->where("actualschedual.projectid",$project);
				$this->db->where("peopleattdance.duration !=",'0:0:0');
				$this->db->where("peopleattdance.duration !=",'00:00:00');
				$this->db->where("peopleattdance.duration !=",'00:00:0');
				//$this->db->where('peopleattdance.actualfromtime !=',"00:00:00");
				//$this->db->where('peopleattdance.actualtotime !=',"00:00:00");
				$this->db->where('actualschedual.date >=', $fromdate);
				$this->db->where('actualschedual.date <=', $todate);
				$this->db->where('peopleattdance.charecterid',$role_id);
				$this->db->where("peopleattdance.peopleid",$pid);
				$query7 = $this->db->get();
			//	echo $this->db->last_query();
				foreach($query7->result_array() as $productiontotal){
			//	$actualproductioncost=$productiontotal['total'];
						$overtime=$productiontotal['total'];
						$daycount=$productiontotal['daycount'];
					
						$overtimeamt=0;
						if($overtime > 0&& $overtimerate>0){
							$overtimeamt=$overtime * $overtimerate;
						}else{
							$overtimeamt=0;
						}
					
					$actualproductioncost=	$actualproductioncost+$overtimeamt+($rate * $daycount);
				}
			}else if($unit==2){
				$rate=round($rate/$dayinmmonthnumber);
				$this->db->select('sum(extrahour)as total,count(actualschedual.id) as daycount'); 
				$this->db->from('peopleattdance');
				$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
				$this->db->where('peopleattdance.peopletypeid','2');
				$this->db->where("actualschedual.projectid",$project);
				$this->db->where("peopleattdance.duration !=",'0:0:0');
				$this->db->where("peopleattdance.duration !=",'00:00:00');
				$this->db->where("peopleattdance.duration !=",'00:00:0');
				//$this->db->where('peopleattdance.actualfromtime !=',"00:00:00");
				//$this->db->where('peopleattdance.actualtotime !=',"00:00:00");
				$this->db->where('actualschedual.date >=', $fromdate);
				$this->db->where('actualschedual.date <=', $todate);
				$this->db->where("peopleattdance.peopleid",$pid);
				$this->db->where('peopleattdance.charecterid',$role_id);
				$query7 = $this->db->get();

				foreach($query7->result_array() as $productiontotal){
					$overtime1=$productiontotal['total'];
					$daycount1=$productiontotal['daycount'];
					//echo $daycount1;
					$overtimeamt1=0;
					if($overtime1 > 0 && $overtimerate>0){
						$overtimeamt1=$overtime1 * $overtimerate;
					}else{
						$overtimeamt1=0;
					}
					// echo "rate".$rate."pid:".$pid."<br>";
					//  $sum= $overtimeamt1+($rate * $daycount1);
					// echo $sum;
				$actualproductioncost=	$actualproductioncost+$overtimeamt1+($rate * $daycount1);
			
			
				}
			}


		}
		$actualproduction=$actualproductioncost;
	}


	





/*for($i=1;$i<count($array);$i++){

	$this->db->select('peopleid,duration,extrahour,actualschedual.unitno,lis_artist.rate,lis_artist.overtime'); 
	$this->db->from('peopleattdance');
	$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
	$this->db->join('lis_artist', 'lis_artist.pid = peopleattdance.peopleid');
	$this->db->where('lis_artist.type','artist');
	
	$this->db->where('peopleattdance.peopletypeid','1');
	$this->db->where("actualschedual.projectid",$project);
	$this->db->where("lis_artist.status",'1');
	$this->db->where("peopleattdance.duration >",'00:00:00');
	$this->db->where('actualschedual.date',$array[$i]);
	$this->db->where("lis_artist.proid",$project);
	$query5 = $this->db->get();


	foreach($query5->result_array() as $actualdata){
		$peopleid=$actualdata['peopleid'];
		$duration=$actualdata['duration'];
		$extrahour=$actualdata['extrahour'];
		$rate=$actualdata['rate'];
		$overtime=$actualdata['overtime'];
		if($actualdata['unitno']=='1'){
			if($extrahour >0){
				$totalunit1 +=$extrahour * $overtime;
			}
			$totalunit1 +=$actualdata['rate'] * 1;
		}else if($actualdata['unitno']=='2'){
			if($extrahour >0){
				$totalunit2 +=$extrahour * $overtime;
			}
			$totalunit2 +=$actualdata['rate'] * 1;
		}else if($actualdata['unitno']=='3'){
			if($extrahour >0){
				$totalunit3 +=$extrahour * $overtime;
			}
			$totalunit3 +=$actualdata['rate'] * 1;
		}
	}

	
}*/
function dateDiff($date1, $date2) 
	{
	  $date1_ts = strtotime($date1);
	  $date2_ts = strtotime($date2);
	  $diff = $date2_ts - $date1_ts;
	  return round($diff / 86400);
	}
$noday=0;
 $noday=dateDiff($fromdate,$todate);
 //echo $noday;
	if($unitshoot1==0 && $footage1==0){
		$unitshoot1=0;
		$footage1=0;
	}if($unitshoot2==0 && $footage2==0){
		$unitshoot2=0;
		$footage2=0;
	}if($unitshoot3==0 && $footage3==0 ){
		$unitshoot3=0;
		$footage3=0;
	}
	if($monthunit1==0){
		$monthunit1=0;
	} if($monthunit2==0){
		$monthunit2=0;
	}if($monthunit3==0){
		$monthunit3=0;
	}
	$result[]=array(
'shootday1'=>	$unitshoot1,
'shootday2'=>	$unitshoot2,
'shootday3'=>	$unitshoot3,
'footage1'=>	$footage1,
'footage2'=>	$footage2,
'footage3'=>	$footage3,
'noofunit'=>	$perday,
'unit1actual'=>	$unit1fotage,
'unit2actual'=>	$unit2fotage,
'unit3actual'=>	$unit3fotage,
'monthunit1'=>$monthunit1,
'monthunit2'=>$monthunit2,
'monthunit3'=>$monthunit3,
'totalunit'=>$totalunit,
'episodicsum'=>$episodicsum,
'episodicstaffsum'=>$episoccost,
'punittotal'=>$productionbudget,
'asunittotal'=>$adminstaff,
'noofday'=>$noday,
'actalproduction'=>$actualproduction,
'day_totalunit'=>$day_totalunit,
'productionovertimecost'=>$productionovertimecost,
'admincost'=>$admincost,
	);
	return $result;
}
function getbudgetreportsdata($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth){

$result=array();
$expenseac=array();
$count=array();
$name='';
$expenseaccount='';
$code='';
$plannedamt='';
$perunit='';
$countdata='';
$month=array();
$startDate = new DateTime($fromdate);
$endDate = new DateTime($todate);

$dateInterval = new DateInterval('P1M');
$datePeriod   = new DatePeriod($startDate, $dateInterval, $endDate);

$monthCount = 0;

foreach ($datePeriod as $date) {
   // echo "{$date->format('F')} ({$date->format('Y-m')})<br \>";
		$mont="{$date->format('F')}";
		array_push($month,$mont);
		$monthCount++;
}
if(($frommonth==$tomonth) && ($toyear==$fromyear)){
	array_push($month,$tomonth);
}
	for($i=1;$i<4;$i++){

	
	$this->db->select('count(date) as count'); 
	$this->db->from('actualschedual');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->where('actualschedual.unitno',$i);
	$query7 = $this->db->get();
foreach($query7->result_array() as $actualcount){
	$countdata=$actualcount['count'];
	array_push($count,$countdata);
	}
}

for($i=1;$i<4;$i++){
	$this->db->distinct('actualexpense.expenseid');
	$this->db->select('expenses_master.name,code,expenses_master.id,unitno'); 
	$this->db->from('actualexpense');
	$this->db->join('expenses_master', 'expenses_master.id = actualexpense.expenseid');
	$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->where('actualschedual.unitno',$i);
	$this->db->order_by('expenses_master.name');
	$query8 = $this->db->get();
foreach($query8->result_array() as $expenseacc){
		$name=$expenseacc['name'];
		$code=$expenseacc['code'];
	
		$id=$expenseacc['id'];
		$unitno=$expenseacc['unitno'];

		$this->db->select('sum(rate) as plannedamt,expenses_master.unit as perunit'); 
		$this->db->from('expensesbudget');
		$this->db->join('expenses_master', 'expenses_master.id = expensesbudget.expensesid');
		$this->db->join('monthy_budget', 'monthy_budget.id = expensesbudget.budid');
		$this->db->where_in('month',$month);
		//$this->db->where('month ',$month);
		$this->db->where('year >=', $fromyear);
		$this->db->where('year <=', $toyear);
		$this->db->where('monthy_budget.projectid',$project);
		$this->db->where('expensesbudget.expensesid',$id);
		$this->db->order_by('expenses_master.name');
		$query9 = $this->db->get();
		foreach($query9->result_array() as $plannbudget){
				$plannedamt=$plannbudget['plannedamt'];
				$perunit=$plannbudget['perunit'];
				if($perunit=='2'){
					$plannedamt=$plannedamt / 29;
			
				}else{
				//	$plannedamt=$plannedamt / 29;
				}
		}
		if($unitno=='1'){
			$plannedamt=$plannedamt*$count[0];
		}else if($unitno=='2'){
			$plannedamt=$plannedamt*$count[1];
		}else if($unitno=='3'){
			$plannedamt=$plannedamt*$count[2];
		}
		//$plannedamt=number_format((float)$plannedamt, 0, '.', '');
		$plannedamt=(round($plannedamt));
		$result[]=array(
			"name" =>$name,
			"expenseaccount" =>$id,
			'code'=>$code,
			'unitno'=>$unitno,
			'planamt'=>$plannedamt,
			);
		
		}
}


/*	$this->db->distinct('expenses_master.name');
	$this->db->select('expenseid.name,code,sum(rate * qty) as expenseaccount,subaccountid'); 
	$this->db->from('actualexpense');
	$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
	$this->db->join('actualschedual', 'monthy_budget.id = expensesbudget.budid');
	$this->db->where('monthy_budget.month >=', $frommonth);
	$this->db->where('monthy_budget.month <=', $tomonth);
	$this->db->where('monthy_budget.year >=', $fromyear);
	$this->db->where('monthy_budget.year <=', $toyear);
	$this->db->where('expensesbudget.unit','1');
	$query8 = $this->db->get();*/



/*for($i=1;$i<4;$i++){
	$this->db->distinct('expenses_master.name');
	$this->db->select('expenses_master.name,code,sum(rate * qty) as expenseaccount'); 
	$this->db->from('expensesbudget');
	$this->db->join('expenses_master', 'expenses_master.id = expensesbudget.expensesid');
	$this->db->join('monthy_budget', 'monthy_budget.id = expensesbudget.budid');
	$this->db->where('monthy_budget.month >=', $frommonth);
	$this->db->where('monthy_budget.month <=', $tomonth);
	$this->db->where('monthy_budget.year >=', $fromyear);
	$this->db->where('monthy_budget.year <=', $toyear);
	$this->db->where('expensesbudget.unit','1');
	$query8 = $this->db->get();
	//echo $this->db->last_query();
	foreach($query8->result_array() as $budgetdata){
			$name=$budgetdata['name'];
			$expenseaccount=$budgetdata['expenseaccount'];
			$code=$budgetdata['code'];
		
		

		
	}

}*/

return $result;

}
function getexpensesubaccount($id,$todate,$fromdate,$project){
	
	$name='';
	$code='';
	$rate='';
	$subaccountid='';
	$result=array();
	for($i=1;$i<4;$i++){
	$this->db->select('expenses_subaccount.name,expenses_subaccount.id as subid,sum(actualexpense.rate * actualexpense.qty) as amnt,subaccountid'); 
	$this->db->from('actualexpense');
	$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
	$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
	$this->db->where('actualexpense.expenseid',$id);
	$this->db->where('actualschedual.date >=',$todate);
	$this->db->where('actualschedual.date <=',$fromdate);
	$this->db->where('actualschedual.unitno',$i);
	$this->db->where('actualschedual.projectid',$project);
	$this->db->group_by('actualexpense.subaccountid');

	//echo $this->db->last_query();
	$query8 = $this->db->get();
	foreach($query8->result_array() as $expenseid){
		$name=$expenseid['name'];
		$amnt=$expenseid['amnt'];
		$subaccountid=$expenseid['subaccountid'];

		$result[]=array(
			'subaccountname'=>$name,
			'subaccountid'=>$subaccountid,
			'rate'=>$amnt,
		);
		
	}
	
	}
	return $result;
}
function Checkemailavileble($email){

	$this->db->select('user_master.*'); 
	$this->db->from('user_master');
	$this->db->where('email',$email);
	$query= $this->db->get();
	if($query->num_rows()>0){
		$res= $query->result();
		return $res;
	}else{
		return '1000';
	}

}
function getexpensereportsdata($project,$fromdate,$todate){
$result=array();
//	$this->db->distinct('actualexpense.expenseid');
	$this->db->select('plannedexpenses.*,expenses_master.name as expenname,expenses_master.unit,unitofmeasurement.name as unitname,expenses_subaccount.name as subaccname, artist_schedule.date');
	$this->db->from('plannedexpenses');
	$this->db->join('expenses_subaccount', 'expenses_subaccount.id = plannedexpenses.subaccountid');
	$this->db->join('expenses_master', 'expenses_master.id = plannedexpenses.expensiveid');
	$this->db->join('unitofmeasurement', 'unitofmeasurement.id = expenses_master.unit');
	$this->db->join('artist_schedule', 'artist_schedule.id = plannedexpenses.aid');
// 	$this->db->join('actualexpense', 'actualexpense.aid = plannedexpenses.aid');
	$this->db->where('artist_schedule.date >=', $fromdate);
	$this->db->where('artist_schedule.date <=', $todate);
	$this->db->where('artist_schedule.projectid',$project);
	$this->db->where('artist_schedule.unit','1');
	$this->db->order_by('artist_schedule.date','desc');
	
	//$this->db->order_by('expenses_master.name');
	$query8 = $this->db->get();

	return $query8->result();

}
public function get_budget_vs_actual($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth){
	$unitshoot1=0;
	$unitshoot2=0;
	$unitshoot3=0;
	$footage1=0;
	$footage2=0;
	$footage3=0;
	$perday=array();
	$monthunit1=0;
	$monthunit2=0;
	$monthunit3=0;
$episodicsum=0;
	$unit1fotage=array();
	$unit2fotage=array();
	$unit3fotage=array();
	$result=array();
	$episoccost=0;
	$productionbudget=0;
	$adminstaff=0;
$actualproduction=0;

$month=array();
$startDate = new DateTime($fromdate);
$endDate = new DateTime($todate);

$dateInterval = new DateInterval('P1M');
$datePeriod   = new DatePeriod($startDate, $dateInterval, $endDate);

$monthCount = 0;

foreach ($datePeriod as $date) {
   // echo "{$date->format('F')} ({$date->format('Y-m')})<br \>";
		$mont="{$date->format('F')}";
		array_push($month,$mont);
		$monthCount++;
}
if(($frommonth==$tomonth) && ($toyear==$fromyear)){
	array_push($month,$tomonth);
}

	$this->db->select('sum(planfotage1) as unit1shoot,sum(planfotage2) as unit2shoot,sum(planfotage3) as unit3shoot,sum(min1)as footage1,sum(min2)as footage2,sum(min3)as footage3,sum(artistunit1) as monthunit1,sum(artistunit2)as monthunit2,sum(artistunit3) as monthunit3,(episicunit1+episicunit2+episicunit3) as episodicsum,punittotal,asunittotal'); 
	$this->db->from('monthy_budget');
	// $this->db->where_in('month', $month);

	// $this->db->where('year >=', $fromyear);

	$this->db->where("projectid",$project);
	$query = $this->db->get();
	foreach($query->result_array() as $res){
		$unitshoot1=$res['unit1shoot'];
		$unitshoot2=$res['unit2shoot'];
		$unitshoot3=$res['unit3shoot'];
		$footage1=$res['footage1'];
		$footage2=$res['footage2'];
		$footage3=$res['footage3'];
		$monthunit1=$res['monthunit1'];
		$monthunit2=$res['monthunit2'];
		$monthunit3=$res['monthunit3'];
		$episodicsum=$res['episodicsum'];
		$productionbudget=$res['punittotal'];
		$adminstaff=$res['asunittotal'];
	}
	$this->db->select('count(*) as count'); 
	$this->db->from('actualschedual');
	$this->db->where('date >=', $fromdate);
	$this->db->where('date <=', $todate);
	$this->db->where("projectid",$project);
	$this->db->group_by("actualschedual.unitno");

$query2 = $this->db->get();

	foreach($query2->result_array() as $res3){
			$perday1=$res3['count'];
			array_push($perday,$perday1);
	}
		$this->db->select('actualscenedetails.actualfotage,actualschedual.unitno'); 
		$this->db->from('actualscenedetails');
		$this->db->join('actualschedual', 'actualschedual.id = actualscenedetails.aid');
		$this->db->where('date >=', $fromdate);
		$this->db->where('date <=', $todate);
		$this->db->where("actualschedual.projectid",$project);
		$this->db->where("actualscenedetails.actualfotage !=",'');
		$query2 = $this->db->get();
	foreach($query2->result_array() as $res4){
		$unitno=$res4['unitno'];
		if($unitno=='1'){
			$unit1fotage1=$res4['actualfotage'];
			array_push($unit1fotage,$unit1fotage1);
		}else if($unitno=='2'){
			$unit2fotage2=$res4['actualfotage'];
			array_push($unit2fotage,$unit2fotage2);
		}else if($unitno=='3'){
			$unit3fotage3=$res4['actualfotage'];
			array_push($unit3fotage,$unit3fotage3);
			
		}

	}
$list_aritst=array();
/*	$this->db->select('pid,rate,overtime'); 
	$this->db->from('lis_artist');
	$this->db->where('proid', $project);
	$this->db->where('status','1');
	$this->db->where('type','artist');
	$query8 = $this->db->get();
	foreach($query8->result_array() as $listdata){
		$peopleid=$listdata['pid'];
		$rate=$listdata['rate'];
		$overtime=$listdata['overtime'];
		$list_aritst[]=(
			'peopleid'=>$peopleid,
			'rate'=>$rate,
			'overtime'=>$overtime,
		);
	}*/
	
 


	// getDatesFromRange($fromdate,$todate);
	$array = array(); 
      
	// Variable that store the date interval 
	// of period 1 day 
	$interval = new DateInterval('P1D'); 

	$realEnd = new DateTime($todate); 
	$realEnd->add($interval); 

	$period = new DatePeriod(new DateTime($fromdate), $interval, $realEnd); 

	// Use loop to store date into array 
	foreach($period as $date) {                  
			$array[] = $date->format('Y-m-d');  
	} 

	// Return the array elements 
$totalunit=array();

for($i=1;$i<4;$i++){
	$this->db->select('sum(rate + (extrahour*lis_artist.overtime) ) as total'); 
	$this->db->from('peopleattdance');
	$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
	$this->db->join('lis_artist', 'lis_artist.pid = peopleattdance.peopleid');
	$this->db->where('lis_artist.type','artist');
	$this->db->where('peopleattdance.peopletypeid','1');
	$this->db->where("actualschedual.projectid",$project);
	$this->db->where("lis_artist.status",'1');
	$this->db->where("peopleattdance.duration <>",'0:0:0');
	$this->db->where('actualschedual.date >=',$fromdate);
	$this->db->where('actualschedual.date <=',$todate);
$this->db->where("lis_artist.proid",$project);
$this->db->where("actualschedual.unitno",$i);
$query5 = $this->db->get();
foreach($query5->result_array() as $totaldata){
	array_push($totalunit,$totaldata['total']);
	
}
}

	$this->db->select('sum(rate) as episoiccost'); 
	$this->db->from('lis_artist');
	$this->db->where("lis_artist.status",'1');
	$this->db->where("lis_artist.proid",$project);
	$this->db->where('lis_artist.type','episodic');
	$query6 = $this->db->get();
	$query6->result();

foreach($query6->result_array() as $episoctotal){
	$episoccost=$episoctotal['episoiccost'];
}

/*---get production staff------------*/
	$this->db->select('sum(rate + (extrahour*lis_artist.overtime) ) as total'); 
	$this->db->from('peopleattdance');
	$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
	$this->db->join('lis_artist', 'lis_artist.pid = peopleattdance.peopleid');
	$this->db->where('lis_artist.type','production');
	$this->db->where('peopleattdance.peopletypeid','2');
	$this->db->where("actualschedual.projectid",$project);
	$this->db->where("lis_artist.status",'1');
	$this->db->where("peopleattdance.duration <>",'0:0:0');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->where("lis_artist.proid",$project);

$query7 = $this->db->get();
foreach($query7->result_array() as $productiontotal){
	$actualproduction=$productiontotal['total'];
}
}


function getbudgetreportsdata1($project,$fromdate,$todate,$fromyear,$frommonth,$status){

$result=array();
$expenseac=array();
$count=array();
$count_mth=array();
$name='';
$expenseaccount='';
$code='';
$plannedamt='';
$plannedamt_mth='';
$perunit='';
$countdata='';
$month=$frommonth;
$startDate = new DateTime($fromdate);
$endDate = new DateTime($todate);


// Declare two dates 
$start_date = strtotime($fromdate); 
$end_date = strtotime($todate); 
  
$tot_fromdate	= date('Y', strtotime($fromdate)).'-'.date('m', strtotime($fromdate)).'-01';
$start_date = strtotime($tot_fromdate); 
$fromdate 	= $tot_fromdate;

// Get the difference and divide into  
// total no. seconds 60/60/24 to get  
// number of days 

 $number_of_days = ($end_date - $start_date)/60/60/24 +(1); 

$dateInterval = new DateInterval('P1M');
$datePeriod   = new DatePeriod($startDate, $dateInterval, $endDate);

// fclose($file);
// $dateInterval = new DateInterval('P1M');
// $datePeriod   = new DatePeriod($startDate, $dateInterval, $endDate);

// $monthCount = 0;

// foreach ($datePeriod as $date) {
//    // echo "{$date->format('F')} ({$date->format('Y-m')})<br \>";
// 		$mont="{$date->format('F')}";
// 		array_push($month,$mont);
// 		$monthCount++;
// }
// if(($frommonth==$tomonth) && ($toyear==$fromyear)){
// 	array_push($month,$tomonth);
// }
	for($i=1;$i<4;$i++){

	
	$this->db->select('count(date) as count'); 
	$this->db->from('actualschedual');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->where('actualschedual.unitno',$i);
	$query7 = $this->db->get();
foreach($query7->result_array() as $actualcount){
	$countdata=$actualcount['count'];
	array_push($count,$countdata);
	
	}
	


}


for($i=1;$i<4;$i++){

	$this->db->distinct('actualexpense.expenseid');
	$this->db->select('expenses_master.name,code,expenses_master.id,actualschedual.unitno'); 
	$this->db->from('actualexpense');
	$this->db->join('expenses_master', 'expenses_master.id = actualexpense.expenseid');
	$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->where('actualschedual.unitno',$i);
	$this->db->group_by('actualschedual.unitno');
	$this->db->group_by('expenses_master.name');
	//$this->db->order_by('expenses_master.name');

	$query8 = $this->db->get();

//$sql = "select distinct(actualexpense.expenseid) ,expenses_master.name,code,expenses_master.id,unitno from actualexpense,expenses_master,actualschedual where expenses_master.id = actualexpense.expenseid and actualschedual.id = actualexpense.aid and actualschedual.date >= '$fromdate' 
//	             and actualschedual.date <= '$todate' and actualschedual.unitno='$i'";
//	$file = fopen("ravitest4.txt","a");
//	fwrite($file,$sql);
//	fclose($file);

foreach($query8->result_array() as $expenseacc){
		$name=$expenseacc['name'];
		$code=$expenseacc['code'];
	
		$id=$expenseacc['id'];
		$unitno=$expenseacc['unitno'];

if($status == 1)
{
		$this->db->select('sum(rate) as plannedamt, expensesbudget.qty as plandays, (expensesbudget.rate*expensesbudget.qty) as plannedamt_mth, expenses_master.unit as perunit, expensesbudget.unit as unitnum');
		$this->db->from('expensesbudget');
		$this->db->join('expenses_master', 'expenses_master.id = expensesbudget.expensesid');
		$this->db->join('monthy_budget', 'monthy_budget.id = expensesbudget.budid');
		$this->db->where_in('month',$month);
		$this->db->where('expensesbudget.unit',$unitno);
		$this->db->where('year =', $fromyear);
		$this->db->where('monthy_budget.projectid',$project);
		$this->db->where('expensesbudget.expensesid',$id);
		//$this->db->where('expensesbudget.rate','0');
		//$this->db->where('expensesbudget.rate  !=','0');
		$this->db->order_by('expenses_master.name');
		
}
else {
			$this->db->select('sum(rate) as plannedamt, expensesbudget.qty as plandays, (expensesbudget.rate) as plannedamt_mth, expenses_master.unit as perunit, expensesbudget.unit as unitnum, expenses_master.name as expences_names');
		$this->db->from('expensesbudget');
		$this->db->join('expenses_master', 'expenses_master.id = expensesbudget.expensesid');
		$this->db->join('monthy_budget', 'monthy_budget.id = expensesbudget.budid');
		$this->db->where_in('month',$month);
		$this->db->where('expensesbudget.unit',$unitno);
		$this->db->where('year =', $fromyear);
		$this->db->where('monthy_budget.projectid',$project);
		$this->db->where('expensesbudget.expensesid',$id);
		//$this->db->where('expensesbudget.rate','0');
		//$this->db->where('expensesbudget.rate  !=','0');
		$this->db->group_by('expenses_master.unit');
		$this->db->group_by('expensesbudget.expensesid');
		// $this->db->order_by('expenses_master.name');
		$this->db->order_by('expenses_master.unit');



		// $this->db->order_by('expenses_master.name');
}
			if($month == 'January' || $month =='March' || $month == 'May' || $month =='July' ||$month == 'AUGUST' ||$month == 'OCTOBER' ||$month == 'DECEMBER'){ 
			$m_days = '31';  
			}
			else if($month == 'APRIL' || $month == 'JUNE' || $month == 'SEPTEMBER' || $month == 'NOVEMBER' ){
			$m_days = '30';
			}
			else if($month == 'FEBRUARY' ){ 
				//still have to calculate leap year calculation
			$m_days = '28';  
			}
		

        $plannedamt_mth = 0;
        $plannedamt = 0 ;
        
		$query9 = $this->db->get();
	//	echo $this->db->last_query();
		foreach($query9->result_array() as $plannbudget){
				$plannedamt=$plannbudget['plannedamt'];
				$plannedamt_mth=$plannbudget['plannedamt_mth'];
				$planeddays=$plannbudget['plandays'];
				
				
				
				$perunit=$plannbudget['perunit'];
				if($perunit=='1'){
					$perunit_desc='Per Day';
				}
				else if($perunit=='2'){
					$perunit_desc='Per Month';
				}	
				else if($perunit=='3'){
					$perunit_desc='Per Episode';
				}
				else if($perunit=='4'){
					$perunit_desc='Per Person';
				}
				else if($perunit=='5'){
					$perunit_desc='Per Piece';
				}
				else {
					$perunit_desc='';
				}
				
				//perunit = 2= per month
				//perunit = 1= per days


				if($perunit=='2'){
				
//					$plannedamt=($plannedamt / $m_days) * $number_of_days;
					$plannedamt=($plannedamt / $m_days);
					$plannedamt_mth = ($plannedamt_mth / $m_days ) * $number_of_days;
					
				}
				else{
				
				//$plannedamt_mth = $plannedamt_mth * $number_of_days;
				
					if($unitno=='1'){
						$plannedamt_mth=$plannedamt_mth*$count[0];
						
					}else if($unitno=='2'){
						$plannedamt_mth=$plannedamt_mth*$count[1];
						
					}else if($unitno=='3'){
						$plannedamt_mth=$plannedamt_mth*$count[2];
						
					}
					else if($unitno == ' ')
					{
						$plannedamt_mth=0;
						
					}					

				}

				
		}

		// if($unitno=='1'){
		// 	$plannedamt=$plannedamt*$count[0];
		// }else if($unitno=='2'){
		// 	$plannedamt=$plannedamt*$count[1];
		// }else if($unitno=='3'){
		// 	$plannedamt=$plannedamt*$count[2];
		// }
		// else if($unitno == ' ')
		// {
		// 	$plannedamt=0;
		// }
	
		//$plannedamt=number_format((float)$plannedamt, 0, '.', '');

/*$sql =  " \r\n name => ".$name.' '."expenseaccount => ".$id.' '.'code=> '.$code.' '.'unitno=> '.$unitno.' '.'planamt=> '.$plannedamt.' '.'status=> '.$status.' '.'perunit=> '.$perunit.' '.'planamt_mth=> '.$plannedamt_mth.' ';
$file = fopen("ravitest4.txt","a");
	fwrite($file,$sql);
	fclose($file);		
*/
		$plannedamt=(round($plannedamt));
		$result[]=array(
			"name" =>$name,
			"expenseaccount" =>$id,
			'code'=>$code,
			'unitno'=>$unitno,
			'planamt'=>$plannedamt,
			'status'=>$status,
			'perunit'=>$perunit,
			'planamt_mth'=>$plannedamt_mth,
			
			);
		
		
		
	}

	
}


return $result;
		
}

function getexpensesubaccount1($id,$unitno,$fromdate,$todate,$project,$status){
	// SELECT sum(qty*rate) as amt, actualexpense.* FROM `actualexpense` where expenseid = 25 and aid in (2,3,6) group by expenseid
	$name='';
	$code='';
	$rate='';
	$subaccountid='';
	$result=array();
	$tot_todate	= date('Y', strtotime($fromdate)).'-'.date('m', strtotime($fromdate)).'-01';
	
//RAVI	for($i=1;$i<4;$i++){
	
		$this->db->select('expenses_subaccount.name, expenses_subaccount.expensesid, sum(actualexpense.rate * actualexpense.qty) as tot_amnt, subaccountid'); 
		$this->db->from('actualexpense');
		$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
		$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
		$this->db->where('actualexpense.expenseid',$id);
		$this->db->where('actualschedual.date >=',$tot_todate);
		$this->db->where('actualschedual.date <=',$todate);
		$this->db->where('actualschedual.unitno',$unitno);
		$this->db->where('actualschedual.projectid',$project);
	//	$this->db->where('expenses_subaccount.expensesid',$expensesid);

	$expense_amnt   = 0;
	$expense_total   = 0;
	$amnt	= 0;
	
	//echo $this->db->last_query();
	$query8 = $this->db->get();
	
/*if( $id == '11' || $id == '26' ){
	$sql = "  \r\n select expenses_subaccount.name, expenses_subaccount.expensesid, sum(actualexpense.rate * actualexpense.qty) as tot_amnt, subaccountid
	from actualexpense, expenses_subaccount, actualschedual
	where expenses_subaccount.id = actualexpense.subaccountid and actualschedual.id = actualexpense.aid
	  and actualexpense.expenseid='$id'
	  and actualschedual.date >='$tot_todate'
	  and actualschedual.date <='$todate'
	  and actualschedual.unitno='$unitno'
	  and actualschedual.projectid='$project'
	  ";

	$file = fopen("ravitest3.txt","a");
	fwrite($file,$sql);
	fclose($file);
}*/

	/*$this->db->select('expenses_subaccount.name,expenses_subaccount.id as subid, expenses_subaccount.expensesid, sum(actualexpense.rate * actualexpense.qty) as amnt,subaccountid'); 
	$this->db->from('actualexpense');
	$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
	$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
	$this->db->where('actualexpense.expenseid',$id);
//	$this->db->where('actualschedual.date >=',$fromdate);
	$this->db->where('actualschedual.date =',$todate);
	$this->db->where('actualschedual.unitno',$i);
	$this->db->where('actualschedual.projectid',$project);
	if($status==0){

		$this->db->group_by('actualexpense.expenseid');

	}
	else {

		$this->db->group_by('actualexpense.subaccountid');		
	

	}
*/
	
	foreach($query8->result_array() as $expenseid){
		$name=$expenseid['name'];
		//$amnt=$expenseid['amnt'];
		$expense_amnt=$expenseid['tot_amnt'];
		$subaccountid=$expenseid['subaccountid'];
		$expensesid  =$expenseid['expensesid'];

/*if( $id == '11' || $id == '26' ){
	$sql = "  \r\n NAME: ". $name. ' ' . ' Exp.Amt : ' . $expense_amnt ;

	$file = fopen("ravitest2.txt","a");
	fwrite($file,$sql);
	fclose($file);
}*/

		/*$this->db->select('expenses_subaccount.expensesid, sum(actualexpense.rate * actualexpense.qty) as tot_amnt, subaccountid'); 
		$this->db->from('actualexpense');
		$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
		$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
		$this->db->where('actualexpense.expenseid',$id);
		$this->db->where('actualschedual.date >=',$tot_todate);
		$this->db->where('actualschedual.date <=',$todate);
		$this->db->where('actualschedual.unitno',$i);
		$this->db->where('actualschedual.projectid',$project);
		$this->db->where('expenses_subaccount.expensesid',$expensesid);
		*/
		
		$this->db->select('expenses_subaccount.name,expenses_subaccount.id as subid, expenses_subaccount.expensesid, sum(actualexpense.rate * actualexpense.qty) as amnt,subaccountid'); 
		$this->db->from('actualexpense');
		$this->db->join('expenses_subaccount', 'expenses_subaccount.id = actualexpense.subaccountid');
		$this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
		$this->db->where('actualexpense.expenseid',$id);
	//	$this->db->where('actualschedual.date >=',$fromdate);
		$this->db->where('actualschedual.date =',$todate);
		$this->db->where('actualschedual.unitno',$unitno);
		$this->db->where('actualschedual.projectid',$project);
		if($status==0){

			$this->db->group_by('actualexpense.expenseid');

		}
		else {

			$this->db->group_by('actualexpense.subaccountid');		
		
		}



/*$sql = "select expenses_subaccount.expensesid, sum(actualexpense.rate * actualexpense.qty) as tot_amnt, subaccountid
from actualexpense, expenses_subaccount, actualschedual
where expenses_subaccount.id = actualexpense.subaccountid and actualschedual.id = actualexpense.aid
  and actualexpense.expenseid='$id'
  and actualschedual.date >='$tot_todate'
  and actualschedual.date <='$todate'
  and actualschedual.unitno='$i'
  and actualschedual.projectid='$project'
  and expenses_subaccount.expensesid='$expensesid' ";

$file = fopen("ravitest3.txt","a");
fwrite($file,$sql);
fclose($file);
*/			
			
		$query9 = $this->db->get();
		foreach($query9->result_array() as $grp_expense){
			//$expense_amnt=$grp_expense['tot_amnt'];
			$amnt=$grp_expense['amnt'];
			
		}
		
		
	/*	$result[]=array(
			'subaccountname'=>$name,
			'subaccountid'=>$subaccountid,
			'rate'=>$amnt,
			'expensetotal'=>$expense_amnt,
		);
	*/	
		
	}
	
		$result[]=array(
			'subaccountname'=>$name,
			'subaccountid'=>$subaccountid,
			'rate'=>$amnt,
			'expensetotal'=>$expense_amnt,
		);
		
	
//RAVI	}
	return $result;
}
function getsupplier(){
	$this->db->select('*,suppiler_category.description as categoryname,suppiler_master.id as id');    
	$this->db->from('suppiler_master');
	$this->db->join('suppiler_category', 'suppiler_category.id = suppiler_master.category');
	$hasil=$this->db->get();
	return $hasil->result();
}
function getactalalldata($table,$fromdate,$todate){
	$this->db->select('actualschedual .*,project_master.name as projectname');    
	$this->db->from('actualschedual');
	$this->db->join('project_master', 'project_master.id = actualschedual.projectid');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->order_by('actualschedual.date','desc');
	$hasil=$this->db->get();
	//echo $this->db->last_query();
	return $hasil->result();
}
function getunitwisecostofartist($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth,$unit){
	
	$result=array();
	
	$this->db->select('*,people_master.name as peoplename');    
	$this->db->from('lis_artist');
	$this->db->join('people_master', 'people_master.id = lis_artist.pid');
	$this->db->where('lis_artist.proid', $project);
	$this->db->where('lis_artist.type', 'artist');
	$this->db->group_by('lis_artist.pid');
	$hasil1=$this->db->get();
	if($hasil1->num_rows()>0){
		foreach($hasil1->result_array() as $list_artistdata){
			$peolpeid=$list_artistdata['pid'];
			$rate=$list_artistdata['rate'];
			$overtimerate=$list_artistdata['overtime'];
			$peoplename=$list_artistdata['peoplename'];
			$countday=0;
			$overtime=0;
			$overtimeamount=0;
			$totalAmount=0;

			$actalrate=0;
//	$this->db->distinct('actualschedual.date');
	$this->db->select('peopleattdance.*,actualschedual.date'); 
	$this->db->from('peopleattdance');
	$this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
	$this->db->where("actualschedual.projectid",$project);
	$this->db->where("peopleattdance.duration !=",'0:0:0');
	$this->db->where("peopleattdance.duration !=",'00:00:00');
	$this->db->where("peopleattdance.duration !=",'00:00:0');
	$this->db->where("peopleattdance.peopleid",$peolpeid);
	$this->db->where('actualschedual.date >=',$fromdate);
	$this->db->where('actualschedual.date <=',$todate);
	$this->db->where("actualschedual.unitno",$unit);
	$this->db->order_by('actualschedual.date','asc');
	$this->db->group_by('actualschedual.date');
	$query5 = $this->db->get();
	
	if($query5->num_rows() >0){
		foreach($query5->result_array() as $peopledata){
			$overtimeamount=0;
			$actalrate=0;
			$overtime=$peopledata['extrahour'];
			$date=$peopledata['date'];
			if(	$overtime >0){
				$overtimeamount=$overtime * $overtimerate;
			}else{
				$overtimeamount=0;
			}
			$totalAmount=$rate+$overtimeamount;
		
				$result[]=array(
					'peoplename'=>$peoplename,
				//	'countday'=>$countday,
					'rate'=>$rate,
					'date'=>$date,
					'overtime'=>$overtime,
					'overtimerate'=>$overtimerate,
					'overtimeamount'=>$overtimeamount,

					'totalAmount'=>$totalAmount,
					'id'=>$peolpeid,
				);
				
			
		}
	
		
		
	}


		}
	}
	
	
	return $result;
	
	
}


function getartistwisedata($project,$fromdate,$todate,$peopletype){
$result=array();
	if($peopletype=='1'){
		$artist_type ='artist';
	}
	else if($peopletype=='2'){
		$artist_type ='Production';
	}
	
/*	
$sql = "select lis_artist.*, (lis_artist.rate + ( lis_artist.overtime * peopleattdance.extrahour)) as amount, lis_artist.rate, lis_artist.overtime, peopleattdance.extrahour, peopleattdance.*, 
character_master.name as charecter, people_master.name as peoplename, peopletype_master.name as peopletype, people_master.official_working_hour, actualschedual.unitno, actualschedual.location, actualschedual.date
	from peopleattdance, peopletype_master, character_master, people_master , actualschedual, lis_artist
	where actualschedual.id = peopleattdance.aid
	  and peopletype_master.id 	= peopleattdance.peopletypeid
	  and character_master.id 	= peopleattdance.charecterid
	  and people_master.id 		= peopleattdance.peopleid
      and peopleattdance.peopleid = lis_artist.pid
	  and people_master.id = lis_artist.pid 
	  and lis_artist.type ='$artist_type'
      and actualschedual.date 	>= '$fromdate'
	  and actualschedual.date 	<= '$todate'
	  and actualschedual.projectid = '$project'
	  and peopleattdance.peopletypeid = '$peopletype' ";

//and lis_artist.proid ='1'  
//	and actualschedual.unitno = '1'
	  
	$file = fopen("ravitest1.txt","w");
	fwrite($file,$sql);
	fclose($file);
*/
	
	
$this->db->select(' peopleattdance.perdayrate as rate, peopleattdance.extrahour, peopleattdance.*, character_master.name as charecter, people_master.name as peoplename, peopletype_master.name as peopletype, people_master.official_working_hour, actualschedual.unitno, actualschedual.location, actualschedual.date as rdate, peopleattdance.overtimerate as overtime, (peopleattdance.perdayrate + ( peopleattdance.overtimerate * peopleattdance.extrahour)) as amt ' );
	$this->db->from('peopleattdance');
	$this->db->join('actualschedual', 'actualschedual.id 		= peopleattdance.aid');
	$this->db->join('peopletype_master', 'peopletype_master.id 	= peopleattdance.peopletypeid');
	$this->db->join('character_master', 'character_master.id 	= peopleattdance.charecterid');
	$this->db->join('people_master', 'people_master.id 			= peopleattdance.peopleid');
	//$this->db->join('lis_artist', 'lis_artist.pid 				= peopleattdance.peopleid');
	//$this->db->join('people_master', 'people_master.id 			= lis_artist.pid');
	$this->db->where('actualschedual.date >=', $fromdate);
	$this->db->where('actualschedual.date <=', $todate);
	$this->db->where('actualschedual.projectid', $project);
	$this->db->where('peopleattdance.peopletypeid', $peopletype);
	//$this->db->where('lis_artist.type',$artist_type);
	$this->db->order_by('people_master.name','asc'); 
	$this->db->order_by('character_master.name','asc');
	$this->db->order_by('actualschedual.date','asc');
	$this->db->order_by('actualschedual.unitno','asc');
	$this->db->order_by('actualschedual.location','asc');
	
	
	$query8 = $this->db->get();
//$this->db->where('actualschedual.unitno','1');
	
	return $query8->result();

}
	function getpeolperate($project,$people,$date){
		$totalday=explode("-",$date);
		$dayinmmonthnumber = cal_days_in_month(CAL_GREGORIAN, $totalday[1],$totalday[0]);

	
		$perdayrate=0;
		$overtimerate=0;
		$effictivedate='';
		$result=array();
		$datedata=array();
		$datedata=array();
		$peopleid=0;
		
		$this->db->select('*');  
		$this->db->from('lis_artist');
		$this->db->where('lis_artist.proid', $project);
		$this->db->where('lis_artist.pid', $people);
		$this->db->where('lis_artist.effecitivedate <=', $date);
		$this->db->limit(1);
		$this->db->order_by('lis_artist.effecitivedate','desc');
	
		$hasil1=$this->db->get();
		if($hasil1->num_rows()>0){
			foreach($hasil1->result_array() as $listdata){
			 $e_date=	$listdata['effecitivedate'];
			 $perdayrate=$listdata['rate'];
			$overtimerate=$listdata['overtime'];
			$perunit=$listdata['perunit'];
			if($perunit==2){
												if($perdayrate >0){
													$perdayrate=round($perdayrate / $dayinmmonthnumber );
												}else{
													$perdayrate=0;
												}
				
		}
	}

}

	$result[]=array(
		'perdayrate'=>$perdayrate,
		'overtimerate'=>$overtimerate,
	);
	return $result;
	
}


}
?>