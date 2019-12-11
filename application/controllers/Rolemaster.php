<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rolemaster extends CI_Controller {

    function __construct(){
        parent::__construct();
		
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $this->load->model('Crudmodel');
    }
	
	public function save_role_master(){ 
	$data1 = "";
			$id	= $this->input->post('id');
			$role_name	= $this->input->post('role_name');
			$status	= $this->input->post('status');
		$data = array(
		'id' => $id,
		'role_name' => $role_name,
		'status' => $status,
		);
		
		if($id==""){
			$data1=$this->Crudmodel->data_insert($data,"role_master");			
			}
		else{
			$data1=$this->Crudmodel->data_update($data,"role_master","id",$id);			
			}
		
        echo json_encode($data1);	
	}
	
	public function get_role_master(){
		$data=$this->Crudmodel->data_get("role_master");
        echo json_encode($data);	
	}

	public function delete_role(){
		$id	= $this->input->post('id');
		$data=$this->Crudmodel->data_delete("role_master","id",$id);
        echo json_encode($data);	
	}

	
}
