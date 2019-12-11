<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Company extends CI_Controller {

    function __construct(){
        parent::__construct();
		
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $this->load->model('Crudmodel');
    }
	
	public function save_master(){ 
	$data1 = "";
			$id	= $this->input->post('id');
			$table_name	= "company_management";
		$data = array(
				'company_name'	=> $this->input->post('company_name'),
			'address'	=> $this->input->post('address'),
    			'email'	=> $this->input->post('email'),
	    		'phone'	=> $this->input->post('phone'),
		    	'gst'	=> $this->input->post('gst'),
			    'pan'	=> $this->input->post('pan'),
			'bank'=> $this->input->post('bank_name'),
		'branch'	=> $this->input->post('branch_name'),
		    	'ac_no'	=> $this->input->post('ac_no'),
			   'ifsc'	=> $this->input->post('ifsc'),
		);
		
			/*$count = $this->Crudmodel->get_count($table_name);			
		if($count==0){
			$data1=$this->Crudmodel->data_insert($data,$table_name);			
			}
		else{
			$insert_id = $this->Crudmodel->get_insertid($table_name,"id");			

			$data1=$this->Crudmodel->data_update($data,$table_name,"id",$insert_id);			
			}*/
		if($id==""){
			$data1=$this->Crudmodel->data_insert($data,$table_name);	
		}else{
			$data1=$this->Crudmodel->data_update($data,$table_name,"id",$id);	
		}
        echo json_encode($data1);	
	}
	
	public function get_master(){
			$table_name	= "company_management";
		$data=$this->Crudmodel->data_get($table_name);
        echo json_encode($data);	
	}

	public function delete_master(){
		$id	= $this->input->post('id');
		$table_name	= "company_management";
		$data=$this->Crudmodel->data_delete($table_name,"id",$id);
        echo json_encode($data);	
	}

	
}
