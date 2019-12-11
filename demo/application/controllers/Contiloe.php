<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contiloe extends CI_Controller {

	   function  __construct(){
        parent::__construct();
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//		$this->load->model('Demomodel');

set_time_limit(0);
	 }
	public function index()
	{
		if(isset($this->session->userid)){
				$this->session->unset_userdata('userid');  	
				$this->session->unset_userdata('role');  	
				$this->session->unset_userdata('username');  	
				$this->session->unset_userdata('user_id');  	
				$this->session->unset_userdata('refid');  	
		}
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Login ";
		$title['active_menu'] = "";
		$this->load->view('login',$title);
	}

	public function logincheck()
	{	
		        $this->load->model('Loginmodel');
				$data= $this->Loginmodel->check_login();
			     echo json_encode($data);
	}

	public function dashboard()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = "Dashboard";
		$title['active_menu'] = "d";
		$this->load->view('index',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}

	}
	
	public function projectmaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Project Master";
		$title['active_menu'] = "";
		$this->load->view('project_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function peopletype()
	{
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = " People Type";
			$title['active_menu'] = "p";
			$this->load->view('peopeltype',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	
	}
	public function charactermaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Role/Designation";
		$title['active_menu'] = "p";
		$this->load->view('character_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function locationmaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Location Master";
		$title['active_menu'] = "s";
		$this->load->view('location_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function expenses_subaccount()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Expenses Sub Account";
		$title['active_menu'] = "e";
		$this->load->view('expenses_subaccount',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function expensesmaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Expenses Master";
		$title['active_menu'] = "e";
		$this->load->view('expenses_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}public function expensivegroup()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Expenses Group";
		$title['active_menu'] = "e";
		$this->load->view('expenses_group',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}public function monthbudget(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = "Monthy Budget";
			$title['active_menu'] = "";
			$this->load->view('monthybudget_entry',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	public function UnitOfMeasurement()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Unit Of Measurement";
		$title['active_menu'] = "s";
		$this->load->view('unitof_measurement',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	
	public function PayableUnits()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Payable Units";
		$title['active_menu'] = "m";
		$this->load->view('payable_units',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	
	public function SuppCategory()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Supplier Category";
		$title['active_menu'] = "S";
		$this->load->view('supplier_category',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	
	public function PeopleRole()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " People Role";
		$title['active_menu'] = "m";
		$this->load->view('people_role',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}

	public function PeopleMaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " People Master";
		$title['active_menu'] = "p";
		$this->load->view('people_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}

	public function SupplierMaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Supplier Master";
		$title['active_menu'] = "S";
		$this->load->view('supplier_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function ArtistSchedule()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = "Planned Schedule";
		$title['active_menu'] = "a";
		$this->load->view('Artist_Schedule',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function ActualSchedule()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Actual Schedule";
		$title['active_menu'] = "a";
		$this->load->view('Actual_Schedule',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function BudgetEntry()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Budget Entry";
		$title['active_menu'] = "acc";
		$this->load->view('Budget_Entry',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function EpisodicExpenses()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Episodic Expenses";
		$title['active_menu'] = "";
		$this->load->view('Episodic_Expenses',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function PaymentEntry()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Payment Entry";
		$title['active_menu'] = "acc";
		$this->load->view('Payment_Entry',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function companyManagement()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Company Management ";
		$title['active_menu'] = "s";
		$this->load->view('company_management',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function servicemaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Service Master ";
		$title['active_menu'] = "s";
		$this->load->view('service_master',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function userManagement()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " User Management ";
		$title['active_menu'] = "s";
		$this->load->view('user_management',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function roleMaster()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Role Master ";
		$title['active_menu'] = "s";
		$this->load->view('roll_type',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function InvoicetEntry()
	{
		if(isset($this->session->userid)){
		$title['title_name'] = " Contiloe ";
		$title['title_name1'] = " Invoice Entry";
		$title['active_menu'] = "acc";
		$this->load->view('Invoice_Entry',$title);
			}
		else{
			redirect(base_url('Contiloe'));
		}
	}
	public function showwisebudgetreport(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = "Report";
			$title['active_menu'] = "re";
			$this->load->view('showwise_budget',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	public function  forgetpassword(){
		$title['title_name'] = " Contiloe ";
			$title['title_name1'] = "Forgetpasswprd";
			$this->load->view('forgetemailsend',$title);
	}
	public function  changepassword(){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = "Forgetpasswprd";
			$this->load->view('forgetpassfrom',$title);
	}
	public function budget_vs_actual(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = "Report";
			$title['active_menu'] = "re";
			$this->load->view('budget_vs_actual',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	public function expense_rep(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = "Report";
			$title['active_menu'] = "re";
			$this->load->view('expense_rep',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	public function episodicworktype(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = " Episodic WorkType";
			$title['active_menu'] = "s";
			$this->load->view('episodicworktype',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}	

    public function payment_req_report(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Report ";
			$title['title_name1'] = " PAYMENT REQUEST REPORT";
			$title['active_menu'] = "re";
			$this->load->view('payment_request_report',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	public function billstatus(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = " Bill Status Report";
			$title['active_menu'] = "re";
			$this->load->view('billstatusreport',$title);
				}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	
	public function artistwisereport(){
		if(isset($this->session->userid)){
			$title['title_name'] = " Contiloe ";
			$title['title_name1'] = " Artist wise breackup Report";
			$title['active_menu'] = "re";
			$this->load->view('artistwisereport',$title);
			}
			else{
				redirect(base_url('Contiloe'));
			}
	}
	

}
