<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends CI_Controller {

    function __construct(){
        parent::__construct();
		
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $this->load->model('Crudmodel');
        $this->load->model('Settingsmodel');
    }
	
	public function save_settings(){ 
		$data1 = "";
			$id	= $this->input->post('id');
			$table_name	= $this->input->post('table_name');
			//$table_name = "document_master";
			 $data="";
			 
		  
		if($table_name=="project_master")
		{
			$data = array(
				'name' => $this->input->post('name'),
				'channelname' => $this->input->post('channel'),
				'schedule' => $this->input->post('schedule'),
				'date' => $this->input->post('date'),
				'remark' => $this->input->post('remark'),
				'director' => $this->input->post('directorname'),
				'dop' => $this->input->post('dop'),
				'weight_age' => $this->input->post('weight_age'),
				
			);
			
		}else if($table_name=="character_master")
		{
			$data = array(
				'name' => $this->input->post('name'),
				'projectid' => $this->input->post('projectid'),
				'peopletype' => $this->input->post('people'),
				'status' => $this->input->post('status'),
			);

		}
		else if($table_name=="location_master" || $table_name=="unitofmeasurement" || $table_name=="payable_master" || $table_name=="peopletype_master" || $table_name=="service_master" || $table_name=="expensesgroup")
		{
			$data = array(
				'name' => $this->input->post('name'),
				'status' => $this->input->post('status'),
			);


		}else if($table_name=="expenses_master")
		{
			$data = array(
				'name' => $this->input->post('name'),
				'code' => $this->input->post('code'),
				'status' => $this->input->post('status'),
				'exgroupid' => $this->input->post('expensegroup'),
				'unit' => $this->input->post('unit'),
					
			);
			

		}else if($table_name=="suppiler_category" || $table_name=="peoplerole_master"){
			$data = array(
				'description' => $this->input->post('description'),
				'status' => $this->input->post('status'),
			);
		}else if($table_name=="people_master"){
			$data = array(
				'name' => $this->input->post('name'),
				'ptypeid' => $this->input->post('peopletype'),
				'mobileno1' => $this->input->post('mobile1'),
				'mobileno2' => $this->input->post('mobile2'),
				'address' => $this->input->post('address'),
				'email' => $this->input->post('email'),
				'gstno' => $this->input->post('gst'),
				'panno' => $this->input->post('pan'),
				'rate_per_month' => $this->input->post('rate_per_month'),
				'official_working_hour' => $this->input->post('official_working_hour'),



			//	'currentrate' => $this->input->post('rate'),
			//	'perunit' => $this->input->post('unit'),
			//	'overrate' => $this->input->post('overtime'),
				'remark' => $this->input->post('remark'),	
			);
		}else if($table_name=="document_master")
		{
			$data = array(
				'pid' => $this->input->post('pid'),
				'doctype' => $this->input->post('type'),
				'description' => $this->input->post('description'),
				'fielname' =>$this->input->post('filename'),

			);
		}else if($table_name=="role_master")
		{
			$data = array(
				'name' => $this->input->post('name'),
				'date' => $this->input->post('date'),
				'status' =>$this->input->post('status'),

			);
		}
		else if($table_name=="lis_artist")
		{
			$data = array(
				'role_id' => $this->input->post('roleid'),
				'pid' => $this->input->post('persone'),
				'proid' => $this->input->post('proid'),
				'effecitivedate' => $this->input->post('date'),
				'leavingdate' => $this->input->post('leavingdate'),
				'creditday' => $this->input->post('creditday'),
				'rate' => $this->input->post('rate'),
				'perunit' => $this->input->post('perunit'),
				'overtime' => $this->input->post('overtime'),
				'status' => $this->input->post('status'),
				'type' => $this->input->post('type'),
				'attachment' => $this->input->post('filename'),

			);
		}else if($table_name=="projectdocument")
		{
			$data = array(
				'proid' => $this->input->post('proid'),
				'typedoc' => $this->input->post('type'),
				'description' => $this->input->post('description'),
				'filename' => $this->input->post('filename'),

			);
		}else if($table_name=="suppiler_master"){
			$data = array(
				'companyname' => $this->input->post('name'),
				'mobile1' => $this->input->post('mobile1'),
				'mobile2' => $this->input->post('mobile2'),
				//'mobileno2' => $this->input->post('mobile2'),
				'contactperson' => $this->input->post('contactperson'),
				'email' => $this->input->post('email'),
				'gstno' => $this->input->post('gst'),
				'panno' => $this->input->post('pan'),
				'category' => $this->input->post('category'),
				'credit_days' => $this->input->post('credit_days'),
				'address' => $this->input->post('address'),
				'remark' => $this->input->post('remark'),
					
			);
		}else if($table_name=="currentmaterial_master")
		{
			$data = array(
				'sid' => $this->input->post('sid'),
				'proid' => $this->input->post('projectid'),
				'serviceid' => $this->input->post('serviceid'),
				'subaccountid' => $this->input->post('subaccount'),
				'rate' =>$this->input->post('rate'),
				'perunit' => $this->input->post('perunit'),
				'remark' => $this->input->post('remark'),

			);
		}else if($table_name=="suppilerdocument")
		{
			$data = array(
				'sid' => $this->input->post('sid'),
				'doctype' => $this->input->post('type'),
				'description' => $this->input->post('description'),
				'filename' =>$this->input->post('filename'),
			);
		}else if($table_name=="artist_schedule")
		{
			$data = array(
				'date' => $this->input->post('date'),
				'projectid' => $this->input->post('project'),
				'locationid' => $this->input->post('location'),
				'profotage' => $this->input->post('projectft'),
				'shiftfrom' => $this->input->post('shift'),
				'shiftto' => $this->input->post('shiftto'),
				'unit' => $this->input->post('unit'),
				'camera' => $this->input->post('camera'),
				'requirement' => $this->input->post('requriment'),

			);
		}else if($table_name=="scenewisedetails")
		{
			$data = array(
				'asid' => $this->input->post('aid'),
				'screenno' => $this->input->post('sceno'),
				'description' => $this->input->post('description'),
				'effect' => $this->input->post('effect'),
				'sublocation' => $this->input->post('sub_location'),
				'name' => $this->input->post('artist_name'),
				'planfotage' => $this->input->post('footage'),
				'sceneremark'=>$this->input->post('scene_remark'),
				);
		}else if($table_name=="callsheet")
		{
			$data = array(
				'aid' => $this->input->post('aid'),
				'peopletypeid' => $this->input->post('peopletype'),
				'characterid' => $this->input->post('charecter'),
				'peopleid' => $this->input->post('peopleid'),
				'fromshift' => $this->input->post('shfifrom'),
				'toshift' => $this->input->post('shiftto'),
				'duration' => $this->input->post('duration'),
				'remark' => $this->input->post('remark'),
				
				);
		}else if($table_name=="plannedexpenses"){
		    //echo $expensiveid = $this->input->post('accountid'); die();
			$data = array(
				'aid' => $this->input->post('aid'),
				'expensiveid' => $this->input->post('accountid'),
				'subaccountid' => $this->input->post('subaccid'),
				'narration' => $this->input->post('narroation'),
				'qty' => $this->input->post('qty'),
				'rate' => $this->input->post('rate'),
				'unit' => $this->input->post('unit'),
				'paymenttype' => $this->input->post('paymentmode'),
				'amount' => $this->input->post('amt'),
				
				
				);
		}else if($table_name=="actualschedual"){
			$data = array(

				'date' => $this->input->post('date'),
				'projectid' => $this->input->post('project'),
				'unitno' => $this->input->post('unit'),
				'location' => $this->input->post('location'),
				'shifttimefrom' => $this->input->post('shift'),
				'shifttimeto' => $this->input->post('shiftto'),
				'projectfotage' => $this->input->post('projectft'),
				'camera' => $this->input->post('camera'),
				'requirement' => $this->input->post('requriment'),
				
				
				);
		}else if($table_name=="actualscenedetails"){
		
			$data = array(
				'aid' => $this->input->post('aid'),
				'scenno' => $this->input->post('sceno'),
				'description' => $this->input->post('description'),
				'effect' => $this->input->post('effect'),
				'sublocation' => $this->input->post('sub_location'),
				'charecterid' =>$this->input->post('artist_name'),
				'planfotage' => $this->input->post('footage'),
				'actualfotage' => $this->input->post('actalfotage'),
				'remark' => $this->input->post('remark'),
				
				);
		}else if($table_name=="peopleattdance"){
			$data = array(
				'aid' => $this->input->post('aid'),
				'peopletypeid' => $this->input->post('peopletype'),
				'charecterid' => $this->input->post('charecter'),
				'peopleid' => $this->input->post('peopleid'),
				'fromshifttime' => $this->input->post('shfifrom'),
				'toshifttime' => $this->input->post('shiftto'),
				'actualfromtime' => $this->input->post('actalshift'),
				'actualtotime' => $this->input->post('actualshiftto'),
				'duration' => $this->input->post('duration'),
				'extrahour' => $this->input->post('extratime'),
				'remarks' => $this->input->post('remark'),
				'perdayrate' => $this->input->post('perdayrate'),
				'overtimerate' => $this->input->post('overtimerate'),
				
				);
		}else if($table_name=="monthy_budget"){
			$data = array(
				'projectid' => $this->input->post('project'),
				'month' => $this->input->post('month'),
				'year' => $this->input->post('year'),
				'episodicplan' => $this->input->post('episodicpalnfo'),
				'planfotage1' => $this->input->post('footage1'),
				'planfotage2' => $this->input->post('footage2'),
				'planfotage3' => $this->input->post('footage3'),
				'artistunit1' => $this->input->post('aunit1'),
				'artistunit2' => $this->input->post('aunit2'),
				'artistunit3' => $this->input->post('aunit3'),
				/*'prounit1' => $this->input->post('punit1'),
				'prounit2' => $this->input->post('punit2'),
				'prounit3' => $this->input->post('punit3'),
				'adminunit1' => $this->input->post('asunit1'),
				'adminunit2' => $this->input->post('asunit2'),
				'adminunit3' => $this->input->post('asunit3'),*/
				'episicunit1' => $this->input->post('eunit1'),
				'episicunit2' => $this->input->post('eunit2'),
				'episicunit3' => $this->input->post('eunit3'),
				'monthyunit1' => $this->input->post('munit1'),
				'monthyunit2' => $this->input->post('munit2'),
				'monthyunit3' => $this->input->post('munit3'),
				'min1' => $this->input->post('min1'),
				'min2' => $this->input->post('min2'),
				'min3' => $this->input->post('min3'),
				'sec1' => $this->input->post('sec1'),
				'sec2' => $this->input->post('sec2'),
				'sec3' => $this->input->post('sec3'),
				'punittotal' => $this->input->post('punittotal'),
				'asunittotal' => $this->input->post('asunittotal'),
				'episoictotal' => $this->input->post('eunittotal'),
				'fromepisodeno' => $this->input->post('fromepisodicno'),
				'toepisodeno' => $this->input->post('toepisodeno'),
				'totalepisode' => $this->input->post('totalepisodeno'),
				);
		}/*else if($table_name=="production_staff_budget"){
			$data = array(
				'budid' => $this->input->post('budid'),
				'peopleid' => $this->input->post('peopleid'),
				'roleid' => $this->input->post('roleid'),
				'qty' => $this->input->post('proqty'),
				'rate' => $this->input->post('prorate_'),
				'perunit' => $this->input->post('perunit'),
			
				);
		}*/else if($table_name=="expensesbudget"){
			$data = array(
				'budid' => $this->input->post('budid'),
				'excategory' => $this->input->post('excategory'),
				'expensesid' => $this->input->post('expeid'),
				'unit' => $this->input->post('unit'),
				'qty' => $this->input->post('proqty'),
				'rate' => $this->input->post('prorate_'),
				'perunit' => $this->input->post('perunit'),
				
			
				);
		}else if($table_name=="actualexpense"){
//24June
		// $expdata =  ' Account ID == ' .$this->input->post('accountid'). ' <<<>>>  ';
		    
		//    $file = fopen("ravitest.txt","a");
        //     fwrite($file,$expdata);
        //     fclose($file);
//24June 
			$data = array(
				'aid' => $this->input->post('aid'),
				'expenseid' => $this->input->post('accountid'),
				'subaccountid' =>$this->input->post('subaccount'),
				'narration' => $this->input->post('narroation'),
				'qty' => $this->input->post('qty'),
				'rate' => $this->input->post('rate'),
				'unit' => $this->input->post('unit'),
				'plannedamt' => $this->input->post('planamut'),
				'supplerid' => $this->input->post('supplier'),
				'referenceno' => $this->input->post('refenceno'),
				'paymentmode' => $this->input->post('paymentmode'),
				
				);
		}else if($table_name=="monthly_expense"){
			$data = array(
				'projectid' => $this->input->post('proid'),
				'expensesid' => $this->input->post('expensiveid'),
				'vendorname' => $this->input->post('vendorname'),
				'amount' => $this->input->post('amount'),
				'subaccid' => $this->input->post('subacid'),
			/*	'startdate' => $this->input->post('startdate'),
				'enddate' => $this->input->post('enddate'),*/
				);
		}else if($table_name=="expenses_subaccount")
		{
			$data = array(
				'name' => $this->input->post('name'),
				'expensesid' => $this->input->post('expenseid'),
				);
		}

		if($id==""){
		    
		  
			$data1=$this->Crudmodel->data_insert($data,$table_name);			
			}
		else{
			$data1=$this->Crudmodel->data_update($data,$table_name,"id",$id);
		
		
			}
		
        echo json_encode($data1);	
	}
	
	public function get_master(){
		//$table_name="project_master";
		$table_name	= $this->input->post('table_name');
	//	$table_name	="suppiler_master";
		$data=$this->Crudmodel->data_get($table_name);	
		
		echo json_encode($data);	
	}

	public function get_master_where(){
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		//$table_name	="currentmaterial_master";
		//$where="sid='61'";
		//file_put_contents('./log_'.date("j.n.Y").'.txt',$where, FILE_APPEND);
		$data=$this->Crudmodel->data_get_where($table_name,$where);
		//print_r($data);
		if($this->session->role == 'Vendors' && $table_name == 'vendor_category'){
				$this->db->select('vendor_registration.category');    
				$this->db->from('vendor_registration');
				$this->db->join('user_master', 'user_master.refid = vendor_registration.id');
				$this->db->where('user_master.refid', $this->session->user_id);
				$query = $this->db->get();
				//$sql = $this->db->last_query();
				//echo $sql;
				$res = $query->result_array();
				 $catid='';
				if(COUNT($res)>0){
				
				$catid=$res[0]['category'];
				}
				
				for($i=0;$i<count($data);$i++){
					$data[$i]->category=$catid;
				}
			echo json_encode($data);
			
		}else if($table_name == 'vendor_category'){
			for($i=0;$i<count($data);$i++){
				$data[$i]->category='';
			}
			echo json_encode($data);
		}else{
		
			echo json_encode($data);
		}			
	}
	public function get_subcategory(){
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		$data=$this->Crudmodel->data_get_where($table_name,$where);
        echo json_encode($data);	
	}

	public function delete_master(){
		$id	= $this->input->post('id');
		$table_name	= $this->input->post('table_name');
		
		if($table_name=="project_master"){
			$data=$this->Crudmodel->data_delete('lis_artist',"proid",$id);
			$data=$this->Crudmodel->data_delete('projectdocument',"proid",$id);
			$data=$this->Crudmodel->data_delete('monthly_expense',"projectid",$id);
		}else if($table_name=="document_master")
		{
			$data=$this->Crudmodel->data_delete($table_name,"pid",$id);
		}else if($table_name=="projectdocument"){
			$data=$this->Crudmodel->data_delete($table_name,"proid",$id);
		}else if($table_name=="currentmaterial_master" || $table_name=="suppilerdocument"){
			$data=$this->Crudmodel->data_delete($table_name,"sid",$id);
		}else if($table_name=="suppiler_master"){
			$data=$this->Crudmodel->data_delete('currentmaterial_master',"sid",$id);
			$data=$this->Crudmodel->data_delete('suppilerdocument',"sid",$id);
		}else if($table_name=="people_master"){
			$data=$this->Crudmodel->data_delete('document_master',"pid",$id);
		}else if($table_name=="callsheet"){
			$data=$this->Crudmodel->data_delete('callsheet',"aid",$id);
		}else if($table_name=="scenewisedetails"){
			$data=$this->Crudmodel->data_delete('scenewisedetails',"asid",$id);
		}else if($table_name=="plannedexpenses"){
			$data=$this->Crudmodel->data_delete('plannedexpenses',"aid",$id);
		}else if($table_name=="artist_schedule"){
				$data=$this->Crudmodel->data_delete('callsheet',"aid",$id);
				$data=$this->Crudmodel->data_delete('scenewisedetails',"asid",$id);
				$data=$this->Crudmodel->data_delete('plannedexpenses',"aid",$id);
		}else if($table_name=="actualscenedetails"){
			$data=$this->Crudmodel->data_delete('actualscenedetails',"aid",$id);
		}else if($table_name=="peopleattdance"){
			$data=$this->Crudmodel->data_delete('peopleattdance',"aid",$id);
		}else if($table_name=="actualexpense"){
			$data=$this->Crudmodel->data_delete('actualexpense',"aid",$id);
		}else if($table_name=="actualschedual"){
			$data=$this->Crudmodel->data_delete('actualscenedetails',"aid",$id);
			$data=$this->Crudmodel->data_delete('peopleattdance',"aid",$id);
			$data=$this->Crudmodel->data_delete('actualexpense',"aid",$id);
		}/*else if($table_name=="production_staff_budget"){
			$data=$this->Crudmodel->data_delete('production_staff_budget',"budid",$id);
		}*/else if($table_name=="expensesbudget"){
			$data=$this->Crudmodel->data_delete('expensesbudget',"budid",$id);
		}else if($table_name=="monthy_budget"){
			//$data=$this->Crudmodel->data_delete('production_staff_budget',"budid",$id);
			$data=$this->Crudmodel->data_delete('expensesbudget',"budid",$id);
		}else if($table_name=="monthly_expense"){
			$data=$this->Crudmodel->data_delete('monthly_expense',"projectid",$id);
			
		}

		$data=$this->Crudmodel->data_delete($table_name,"id",$id);
			
        echo json_encode($data);	
	}
	
	public function delete_master1(){
		$id	= $this->input->post('id');
		$table_name	= $this->input->post('table_name');
		$type	= $this->input->post('type');
			$data=$this->Crudmodel->data_delete1($table_name,$type,$id);
			
		
        echo json_encode($data);	
	}
	public function get_master_where1(){
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		
		$data=$this->Crudmodel->data_get_where1($table_name,$where);
		echo json_encode($data);
	}
	
	public function get_master_artist(){
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		
		//$table_name="lis_artist";
		//$where="lis_artist.status = '1' and lis_artist.proid='6' and lis_artist.type='artist'";
		$data=$this->Crudmodel->data_get_artist($table_name,$where);
		echo json_encode($data);
	}
	
	public function get_charecter(){
		$table_name=$this->input->post('table_name');
		$pid=$this->input->post('pid');
		$proid=$this->input->post('proid');
		$data=$this->Crudmodel->data_get_chdata($table_name,$pid,$proid);
		echo json_encode($data);

	}
	public function doc_upload()
	{
		$this->load->helper("file");	
		$this->load->library("upload");
		$id=$this->input->post('id');
		//echo json_encode($id);
		$size='';
		if($id == 'filename'){
			$size=$_FILES['filename']['size'];	
		}else if($id == 'docupload'){
			$size=$_FILES['docupload']['size'];	
		}
		
		if ($size > 0){
			$this->upload->initialize(array( 
		       "upload_path" => './assets/documents/',
		       "overwrite" => FALSE,
		       "max_filename" => 300,
		       "remove_spaces" => TRUE,
//		       "allowed_types" => 'jpg|jpeg|png|gif',
		       "allowed_types" => '*',
		       "max_size" => 1024*10,
		    ));
			
			 // if (!$this->upload->do_upload('attachreg_certy')) {
		   if (!$this->upload->do_upload($id)) {
			$error = array('error' => $this->upload->display_errors());
			echo json_encode($error);
		}

		    $data = $this->upload->data();
			$path = $data['file_name'];
			
			echo json_encode($path);	
		}else{
			//echo json_encode($id);	
			echo "no file"; 
		}
}

public function doc_delete()
	{
		$file_directory = "./assets/documents/";
		$file_name = $this->input->post('doc');
		 unlink( $file_directory . $file_name);
		 echo '1';
	}

	public function get_aritistdata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$proid=$this->input->post('proid');
		/*$table_name="lis_artist";
		$where= "proid='1' and type='artist'";*/
		/*$proid='1';
		$where="peopletype='2'";
		$table_name="character_master";*/
		$data=$this->Crudmodel->data_get_aritistdata($table_name,$where,$proid);
		echo json_encode($data);
	}
	public function get_peopledata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
	
		$data=$this->Crudmodel->data_get_listaritst($table_name,$where);
		echo json_encode($data);
	}
	 public function getexpensesdata()
	{
		$table_name=$this->input->post('table_name');
		$data=$this->Crudmodel->datagetexpensesdata($table_name);
		echo json_encode($data);
	}
	public function get_data_exmaster()
	{
		$table_name=$this->input->post('table_name');
		$data=$this->Crudmodel->datagetex_master($table_name);
		echo json_encode($data);
	}
	public function getactualschedual(){
		$table_name=$this->input->post('table_name');
		$date=$this->input->post('date');
		$project=$this->input->post('project');
		$unit=$this->input->post('unit');
		/*$table_name='scenewisedetails';
		$date='2019-05-02';
		$project='1';
		$unit='1';*/
		$data=$this->Crudmodel->getactualdata($table_name,$date,$project,$unit);
		echo json_encode($data);
	}
	public function get_master_actualscenedetails(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
	
		$data=$this->Crudmodel->get_actualscenedata($table_name,$where);
		
		echo json_encode($data);
	}
	public function get_people_extra_hour(){
		$table_name=$this->input->post('table_name');
		
		$where=$this->input->post('where');
		$data=$this->Crudmodel->get_extra_hour($table_name,$where);
		echo json_encode($data);
	}public function getnameofstaff(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		//$table_name="lis_artist";
	//$where="proid='3' and type='production'";
		$data=$this->Crudmodel->getproductionstaff($table_name,$where);
		echo json_encode($data);
	}public function getsumofepisodic(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$data=$this->Crudmodel->getsum_episodic($table_name,$where);
		echo json_encode($data);
	}public function getmonthydata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$data=$this->Crudmodel->get_monthdata($table_name,$where);
		echo json_encode($data);
	}public function getmonthyeditdata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
	
		$data=$this->Crudmodel->get_montheditdata($table_name,$where);
		echo json_encode($data);
	}public function getproductstaffdata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
	
		$data=$this->Crudmodel->get_productbudget($table_name,$where);
		echo json_encode($data);
	}public function geteditexpensedata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
	
		$data=$this->Crudmodel->get_editexpebud($table_name,$where);
		echo json_encode($data);
	}
	public function getsceneartistdata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$data=$this->Crudmodel->get_plann_artistname($table_name,$where);
		echo json_encode($data);
	}
	public function checkpeoplename(){
		$table_name=$this->input->post('table_name');
		$name=$this->input->post('name');
		$id=$this->input->post('id');
		
		$data=$this->Crudmodel->get_checknameexist($table_name,$name,$id);
		echo json_encode($data);	
	}
	public function getmonthlydata(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		//$where="projectid='43'";
		$data=$this->Crudmodel->get_monthlydata($table_name,$where);
		echo json_encode($data);
	}
	public function checkdataexist(){
		$table_name=$this->input->post('table_name');

		$date=$this->input->post('date2');
		$project=$this->input->post('projectid');
		$unitno=$this->input->post('forunitno');
		$data=$this->Crudmodel->aristdatacheck($table_name,$date,$project,$unitno);
		echo json_encode($data);
	}
	public function checkmonthdata(){
		$table_name=$this->input->post('table_name');
		$project=$this->input->post('project');
		$month=$this->input->post('month');
		$year=$this->input->post('year');
		$data=$this->Crudmodel->budgetdatacheck($table_name,$project,$month,$year);
		echo json_encode($data);
	}
	public function get_unit_model(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
	/*	$table_name="expenses_master";
		$where="expenses_master.id='1'";*/
		$data=$this->Crudmodel->get_unitdata($table_name,$where);
		echo json_encode($data);
	}public function getarutstdata(){
		$table_name=$this->input->post('table_name');
		$project=$this->input->post('project');
		//$table_name="lis_artist";
	//	$project='1';
		$data=$this->Crudmodel->getaritistdata($table_name,$project);
		echo json_encode($data);
	}public function check_deletearitist(){
		$table_name=$this->input->post('table_name');
		$id=$this->input->post('id');
		$date=$this->input->post('date');
		$proid=$this->input->post('proid');
		$unit=$this->input->post('unit');
		
		$data=$this->Crudmodel->getdeletedata($table_name,$id,$date,$proid,$unit);
		echo json_encode($data);
		
	}
	public function getexpensesubac(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$data=$this->Crudmodel->getexpense_data($table_name,$where);
		echo json_encode($data);
	}
	public function get_unit_data(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		//$table_name='expenses_master';
		//$where="expenses_master.id='1'";
		$data=$this->Crudmodel->get_data_exunit($table_name,$where);
		echo json_encode($data);
	}public function getchecksuppliernm(){
		$table_name=$this->input->post('table_name');
		$project=$this->input->post('project');
		$supplier=$this->input->post('supplier');
		$accountid=$this->input->post('accountid');
		$subaccount=$this->input->post('subaccount');
		$data=$this->Crudmodel->get_check_supplier($table_name,$project,$supplier,$accountid,$subaccount);
		echo json_encode($data);
	} public function budgetgetexpensesdata()
	{
		$table_name=$this->input->post('table_name');
		//$table_name='expenses_master';
		$data=$this->Crudmodel->budgetdatagetexpensesdata($table_name);
		echo json_encode($data);
	}
	public function get_exsubaccount(){
		$table_name=$this->input->post('table_name');
		$exid=$this->input->post('exid');
		$data=$this->Crudmodel->getex_subac($table_name,$exid);
		echo json_encode($data);
	}public function get_uom(){
		$table_name=$this->input->post('table_name');
		$exid=$this->input->post('exid');
		$data=$this->Crudmodel->getex_uom($table_name,$exid);
		echo json_encode($data);
	}public function Checkmonthyearbudget(){
		$month=$this->input->post('month');
		$year=$this->input->post('year');
		$data=$this->Crudmodel->checkexistdata($month,$year);
		echo json_encode($data);
	}public function getallreportdata(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		$toyear=$this->input->post('toyear');
		$tomonth=$this->input->post('tomonth');
		// $project='1';
		// $fromdate='2019-07-01';
		// $todate='2019-07-31';
		// $fromyear='2019';
		// $toyear='2019';
		// $frommonth='July';
		// $tomonth='July';
		$data=$this->Crudmodel->getallreport($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth);
		echo json_encode($data);
	}
	public function expensegetbudgetreport(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		$toyear=$this->input->post('toyear');
		$tomonth=$this->input->post('tomonth');

		/*$project='1';
		$fromdate='2019-05-02';
		$todate='2019-07-27';
		$fromyear='2018';
		$toyear='2019';
		$frommonth='April';
		$tomonth='May';*/
		$data=$this->Crudmodel->getbudgetreportsdata($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth);
		echo json_encode($data);
	}
	public function expensebudgetsubaccount(){
		$id=$this->input->post('exid');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$project=$this->input->post('project');
		/*$id='24';
		$fromdate='2019-05-02';
		$todate='2019-05-04';
		$project='1';*/
		$data=$this->Crudmodel->getexpensesubaccount($id,$fromdate,$todate,$project);
		echo json_encode($data);
	}
	public function Check_EmailAddresss(){
		$email=$this->input->post('email');	
		
		$data=$this->Crudmodel->Checkemailavileble($email);
		echo json_encode($data);
	}
	public function SendEmailforgetpassword(){
		
	$to_email = $this->input->post('email'); 
	$id = $this->input->post('id'); 
	//$to_email ='smorvadiya931@rku.ac.in';
	$res='';
	/*$to_email='morvadiyasagar99@gmail.com';
	$vendorname ='Sagar';
	$mobile ='9913829299';*/
	$this->load->library('phpmailer_lib');
	
     if($to_email !='') { 
	
	$mail = $this->phpmailer_lib->load();
	
	// SMTP configuration
	$mail->isSMTP();
	$mail->Host = 'tls://smtp.gmail.com:587';
	$mail->SMTPAuth = true;
	$mail->Username = 'morvadiyasagar99@gmail.com';
	$mail->Password = 'rvmn prql amti illl';
//	$mail->SMTPSecure = 'tls';
	//$mail->Port     = 587;
	//$mail->SMTPDebug = 2;
                  
	//$mail->SMTPDebug = 2;
	$mail->setFrom('morvadiyasagar99@gmail.com', 'Contiloe');
	//$mail->addReplyTo('morvadiyasagar99@gmail.com', 'Wadhwa Group');
	
	// Add a recipient

	$mail->addAddress($to_email);
	
	// Add cc or bcc 
	$mail->addCC('morvadiyasagar99@gmail.com');

	
	
	$mail->Subject = 'Forgot Password link';
	
	
	$mail->isHTML(true);
	
	$baseurl=base_url();
		$mailContent ="Dear Sir/Madam,<br/><br/> Please access following link to Reset Your Password: <br/>"."<a href='".$baseurl."Contiloe/changepassword/".$id."' target='_blank'>Click Here</a>";
		$mail->Body = $mailContent;
	
	// Send email
	if(!$mail->send()){
		$res=false;
		

	}else{
		$res=true;
		
		
	}
		echo $res;
	 }
	}
public function changepassword(){
		$id	= $this->input->post('userid');
		$table_name	= $this->input->post('table_name');
		$data = array(
			'password' => $this->input->post('password'),
			
		);
		
	$data1=$this->Crudmodel->data_update($data,$table_name,"id",$id);
	echo json_encode($data1);
	}
	

public function expensegetreport(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		
		//$fromdate='2019-05-07';
		
		/*$project='1';
		$todate='2019-07-27';
		$fromyear='2018';
		$toyear='2019';
		$frommonth='April';
		$tomonth='May';*/
		$data=$this->Crudmodel->getexpensereportsdata($project,$fromdate,$todate);
		echo json_encode($data);
	}
public function get_budget_vs_actual(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		
	
		$data=$this->Crudmodel->get_budget_vs_actual($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth);
		echo json_encode($data);
	}

		public function expensegetbudgetreport1(){


		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		$status=$this->input->post('status');
		// $data="abc";

		// $project='1';
		// $fromdate='2019-05-02';
		// $todate='2019-05-27';
		// $fromyear='2018';
		// $toyear='2019';
		// $frommonth='April';
		// $tomonth='June';
		$data=$this->Crudmodel->getbudgetreportsdata1($project,$fromdate,$todate,$fromyear,$frommonth,$status);
		echo json_encode($data);
	}

	public function expensebudgetsubaccount1(){
		$id=$this->input->post('exid');
		$unitno=$this->input->post('unitno');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$project=$this->input->post('project');
		$status =$this->input->post('status');
		/*$id='24';
		$fromdate='2019-05-02';
		$todate='2019-05-04';
		$project='1';*/
		$data=$this->Crudmodel->getexpensesubaccount1($id,$unitno,$fromdate,$todate,$project,$status);
		echo json_encode($data);
	}
	
	public function get_datas()
	{
	    $project=$this->input->post('project');
	    $frommonth=$this->input->post('frommonth');
	    $todate=$this->input->post('todate');
	    
	    $select_budget=$this->db->query("select * from monthy_budget where month='$frommonth'");
	     foreach($select_budget->result() as $select_budget_data)
       {
           $month_id=$select_budget_data->id;
       }
       
       
       $select_month_data=$this->db->query("select * from expensesbudget where budid='$month_id'");
       foreach($select_month_data->result() as $select_month_datas)
       {
           $rate=$select_month_datas->rate;
           $expensesid=$select_month_datas->expensesid;
           $unit=$select_month_datas->unit;
           
       }
	    
	    
	    
	}
	
	
	//updates by mohammed
		public function get_payment_req_report()
	{
		 $fromdate=$this->input->post('fromdate');
		 $todate=$this->input->post('todate');
		 $project=$this->input->post('project');
		 $fromdate." ".$todate;
         $sumtotalpayment=0;
         $suminvoiceamt=0;
         $sumbalance_amt=0;

		 $select_payment=$this->db->query("SELECT *,SUM(g.paidamt) as paid_amts,a.id as in_id,f.name as type_names,b.name as type_name,e.name as character_name,(grossamt-totalpayment) as final_amt,b.name as sup_name,c.companyname as comp_name FROM `invoice_entry` a left join people_master b on a.supplierid=b.id left join suppiler_master c on a.supplierid=c.id left join lis_artist d on a.supplierid=d.pid left join character_master e on d.role_id=e.id left join peopletype_master f on b.ptypeid=f.id left join payment_detalis g on a.id=g.invoiceid where due_date between '$fromdate' and '$todate' and a.projectid='$project' order by due_date DESC");
			
		  foreach($select_payment->result() as $select_payment_data)
       {
           $in_id=$select_payment_data->in_id;
           $in_paid_amt=$select_payment_data->paid_amts;
           $invoiceno=$select_payment_data->invoiceno;
           $invoice_date=$select_payment_data->invoice_date;
           $due_date=$select_payment_data->due_date;
           $supplierid=$select_payment_data->supplierid;
           $vendor_type=$select_payment_data->vendor_type;
           $totalpayment=$select_payment_data->totalpayment;
           $grossamt=$select_payment_data->grossamt;
           $sgst=$select_payment_data->sgst;
           $cgst=$select_payment_data->cgst;
           $igst=$select_payment_data->igst;
        //   $totalpayment=$select_payment_data->totalpayment;
           $invoice_amt=$grossamt+$sgst+$cgst+$igst;
           $balance_amt=$select_payment_data->final_amt;
           $sup_name=$select_payment_data->sup_name;
           $comp_name=$select_payment_data->comp_name;
           $supplierid=$select_payment_data->supplierid; 
            $character_name=$select_payment_data->character_name;
			$suppli_invoice_date=$select_payment_data->suppli_invoice_date;
			
			 if($suppli_invoice_date!=""){
				$explode_sup_date=explode('-',$suppli_invoice_date);

				
				
				$new_sup_invoice_date=$explode_sup_date[1].'-'.$explode_sup_date[0];
				}

          
            $type_names=$select_payment_data->type_names;

			$total_balance_amount=$invoice_amt-$in_paid_amt;
			
            if($due_date!=""){
			$explode_due_date=explode('-',$due_date);
			$new_due_date=$explode_due_date[2]."-".$explode_due_date[1]."-".$explode_due_date[0];
			}
			if($invoice_date !=""){
            $explode_invoice_date=explode('-',$invoice_date);
            $new_invoice_date=$explode_invoice_date[2]."-".$explode_invoice_date[1]."-".$explode_invoice_date[0];
			}
            
            
            if($balance_amt !=0)
            {
				?>
				<tr>
           	<td><?= $invoiceno ?></td>
           	           	<td><?= $new_sup_invoice_date ?></td>

           	<td><?= $new_invoice_date ?></td>
           	<td><?= $new_due_date ?></td>
			
           <?php
             if($vendor_type==1 || $vendor_type==2 || $vendor_type==3 || $vendor_type==4 )
           {
           	?>
           	<td><?= $sup_name ?></td>

           	<?php
           }

           else
           {
           	?>
           	<td><?= $comp_name ?></td>

           	<?php
           }

           ?>
            <td><?= $type_names?></td>
           	<td><?= $character_name ?></td>
           	<td style="text-align: right"><?= $invoice_amt ?></td>
           	<td style="text-align: right"><?= round(($in_paid_amt),0) ?></td>
           	<td style="text-align: right"><?= round(($total_balance_amount),0)  ?></td>
           	


           </tr>
           <?php
           $sumtotalpayment+=$in_paid_amt;
           $suminvoiceamt+=$invoice_amt;
           $sumbalance_amt+=$total_balance_amount;
            }
       }

       ?>
       <tr>
       		<td >&nbsp;</td>
       			<td >&nbsp;</td>
       	<td >&nbsp;</td>
       		<td >&nbsp;</td>	
       		<td >&nbsp;</td>
       		<td >&nbsp;</td>
       		
       		<td >Total</td>
       	<td style="text-align: right;"><?=$suminvoiceamt?></td>
       	<td style="text-align: right;"><?=$sumtotalpayment?></td>
       	<td style="text-align: right;"><?=$sumbalance_amt?></td>

       </tr>
	   <?php
			
	}
	public function get_supplier(){
		
		$table_name	= $this->input->post('table_name');
		$data1=$this->Crudmodel->getsupplier($table_name);
		echo json_encode($data1);
	}
	public function gealltactualdata(){
		$table_name	= $this->input->post('table_name');
		$fromdate	= $this->input->post('fromdate');
		$todate	= $this->input->post('todate');
		// $fromdate	='2019-05-01';
		// $todate	='2019-08-01';
		$data1=$this->Crudmodel->getactalalldata($table_name,$fromdate,$todate);
		echo json_encode($data1);
	}
	public function getartistuniwisecost(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		$toyear=$this->input->post('toyear');
		$tomonth=$this->input->post('tomonth');
		$unit=$this->input->post('unit');
		// $project='1';
		// $fromdate='2019-07-01';
		// $todate='2019-07-11';
		// $fromyear='2019';
		// $toyear='2019';
		// $frommonth='July';
		// $tomonth='July';
		// $unit=1;
		$data=$this->Crudmodel->getunitwisecostofartist($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth,$unit);
		echo json_encode($data);
	}
	
	public function artistwisereport(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$peopletype	=$this->input->post('peopletype');
		
		// $fromdate='2019-07-01';
		// $project='1';
		// $todate='2019-07-11';
		// $peopletype='1';
		$data=$this->Crudmodel->getartistwisedata($project,$fromdate,$todate,$peopletype);
		echo json_encode($data);
	}
	public function getpeoplerate(){
		$peopleid=$this->input->post('peopleid');
		$date=$this->input->post('date');
		$project=$this->input->post('project');
		// $peopleid='132';
		// $date='2019-10-24';
		// $project='1';
		$data=$this->Crudmodel->getpeolperate($project,$peopleid,$date);
		echo json_encode($data);
	}
	public function getproductionstaffexhourcost(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		$toyear=$this->input->post('toyear');
		$tomonth=$this->input->post('tomonth');
		// $project='1';
		// $fromdate='2019-07-01';
		// $todate='2019-07-11';
		// $fromyear='2019';
		// $toyear='2019';
		// $frommonth='July';
		// $tomonth='July';
		$data=$this->Crudmodel->getextrahourproductionstaff($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth);
		echo json_encode($data);
	}
	public function getfotagedetalis(){
		$project=$this->input->post('project');
		$fromdate=$this->input->post('fromdate');
		$todate=$this->input->post('todate');
		$fromyear=$this->input->post('fromyear');
		$frommonth=$this->input->post('frommonth');
		$toyear=$this->input->post('toyear');
		$tomonth=$this->input->post('tomonth');
		// 	$project='1';
		// $fromdate='2019-07-01';
		// $todate='2019-07-31';
		// $fromyear='2019';
		// $toyear='2019';
		// $frommonth='July';
		// $tomonth='July';
	
		$data=$this->Crudmodel->getallfotage_detalis($project,$fromdate,$todate,$fromyear,$frommonth,$toyear,$tomonth);
		echo json_encode($data);
	}
	public function getallepisodicinfo(){
		$project=$this->input->post('project');
	//	$project='1';
		$data=$this->Crudmodel->getallepisodicstaffrate($project);
		echo json_encode($data);
	}
	
}
