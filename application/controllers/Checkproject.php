<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Checkproject extends CI_Controller {

    function __construct(){
        parent::__construct();
		
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

        $this->load->model('Crudmodel');
        $this->load->model('Checkprojectmodel');
      
    }
	

	public function existcheckartist(){
		$cherecter=$this->input->post('cherecter');
		$person=$this->input->post('person');
		$project=$this->input->post('project');

		$data=$this->Checkprojectmodel->checkartistexist($person,$project);
		echo json_encode($data);
    }
    public function existproduction(){
        $cherecter=$this->input->post('cherecter');
		$person=$this->input->post('person');
		$project=$this->input->post('project');

		$data=$this->Checkprojectmodel->checproductionexist($person,$project);
		echo json_encode($data);
    }
	

	
}
