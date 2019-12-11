<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    function __construct(){
        parent::__construct();
		
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $this->load->model('Crudmodel');
        $this->load->model('Usermodel');
    }
	
	public function save_master(){ 
	$data1 = "";
			$id	= $this->input->post('id');
			$table_name	= "user_master";
			
			
		$data = array(
		'user_name'	=> $this->input->post('user_name'),
			'user_id'	=> $this->input->post('user_id'),
    			'email'	=> $this->input->post('email'),
	    		'phone'	=> $this->input->post('phone'),
		    	'mobile'	=> $this->input->post('mobile'),
			'password'=> $this->input->post('password'),
		'doj'	=> $this->input->post('doj'),
			    'role'	=> $this->input->post('user_type'),
		
		);
		
		if($id==""){
			$data1=$this->Crudmodel->data_insert($data,$table_name);			
			}
		else{
			$data1 = $this->Crudmodel->data_update($data,$table_name,"id",$id);			
				
			}
		
        echo json_encode($data1);	
	}
	
	public function get_master(){
			$table_name	= "user_master";
		$data=$this->Usermodel->data_get($table_name);
        echo json_encode($data);	
	}

	public function get_role(){
			$table_name	= "role_master";
			$where = " status ='1' ";
		$data=$this->Crudmodel->data_get_where($table_name,$where);
        echo json_encode($data);	
	}

	public function delete_master(){
		$id	= $this->input->post('id');
			$table_name	= "user_master";
		$data=$this->Crudmodel->data_delete($table_name,"id",$id);
        echo json_encode($data);	
	}

	
}
