<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Paymententery extends CI_Controller {

    function __construct(){
        parent::__construct();
		
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

		$this->load->model('Paymententrymodel');
		$this->load->helper('download');
       // $this->load->model('Settingsmodel');
    }
	
	public function save_settings(){ 
		$data1 = "";
			$id	= $this->input->post('id');
			$table_name	= $this->input->post('table_name');
			//$table_name = "document_master";
			 $data="";
			 
		  
		if($table_name=="payment_entry")
		{
			if($id==""){
				$data = array(
					'peopletype' => $this->input->post('peopletype'),
					'entryno' => $this->input->post('entryno'),
					'supplier' => $this->input->post('supplier'),
					'payment_date' => $this->input->post('d_payment'),
					'paid_via' => $this->input->post('paid'),
					'payment_ref' => $this->input->post('refrence'),
					'paidamt' => $this->input->post('amount_paid'),
					'deductiondes1' => $this->input->post('tds'),
					'deductoinamt1' => $this->input->post('deduction1'),
					'deductoinamt2' => $this->input->post('deduction2'),
					'deductiomamt3' => $this->input->post('deduction3'),
					'finalpayment' => $this->input->post('netamount'),
					'amtdes' => $this->input->post('amtdes'),
					'deductiondes2' => $this->input->post('deductiondes2'),
					'deductiondes3' => $this->input->post('deductiondes3'),
					'add_date' => date("Y-m-d"),
					'modifydate' => date("Y-m-d"),
					
				);
			}else{
				$data = array(
					'peopletype' => $this->input->post('peopletype'),
					'entryno' => $this->input->post('entryno'),
					'supplier' => $this->input->post('supplier'),
					'payment_date' => $this->input->post('d_payment'),
					'paid_via' => $this->input->post('paid'),
					'payment_ref' => $this->input->post('refrence'),
					'paidamt' => $this->input->post('amount_paid'),
					'deductiondes1' => $this->input->post('tds'),
					'deductoinamt1' => $this->input->post('deduction1'),
					'deductoinamt2' => $this->input->post('deduction2'),
					'deductiomamt3' => $this->input->post('deduction3'),
					'finalpayment' => $this->input->post('netamount'),
					'amtdes' => $this->input->post('amtdes'),
					'deductiondes2' => $this->input->post('deductiondes2'),
					'deductiondes3' => $this->input->post('deductiondes3'),
					//'add_date' => date("Y-m-d"),
					'modifydate' => date("Y-m-d"),
					
				);
			}
		
			
		}else if($table_name=="artist_details")
		{
			$data = array(
				'invoiceid' => $this->input->post('invoiceid'),
				'typeofpayment' => $this->input->post('regular_attandance'),
				'day' => $this->input->post('day'),
				'unit' => $this->input->post('unitdata'),
				'rate' => $this->input->post('rate'),
				
			);

		}else if($table_name=="payment_detalis")
		{
			$data = array(
				'paymentid' => $this->input->post('paymentid'),
				'invoiceid' => $this->input->post('invoiceid'),
				'invoice_amt' => $this->input->post('invoice_amt'),
				'paidamt' => $this->input->post('paidamt'),
				
				
			);

		}
		

		if($id==""){
		    
		  
			$data1=$this->Paymententrymodel->data_insert($data,$table_name);			
			}
		else{
			$data1=$this->Paymententrymodel->data_update1($data,$table_name,"id",$id);
		
		
			}
		
        echo json_encode($data1);	
	}
	
	public function get_master(){
		//$table_name="project_master";
		$table_name	= $this->input->post('table_name');
		$data=$this->Crudmodel->data_get($table_name);			
		echo json_encode($data);	
	}

	public function get_master_where(){
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		//$table_name	="peopleattdance";
		//$where="aid='59'";
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
		

		if($table_name=="payment_entry"){
			$data=$this->Paymententrymodel->data_delete('payment_detalis',"paymentid",$id);
			$data=$this->Paymententrymodel->data_delete('payment_entry',"id",$id);
		}
	
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
		       "upload_path" => './assets/invoicedocument/',
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
		$file_directory = "./assets/invoicedocument/";
		$file_name = $this->input->post('doc');
		 unlink( $file_directory . $file_name);
		 echo '1';
	}
	
	
    public function getmaxid(){
        $table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$data=$this->Paymententrymodel->get_insertid($table_name,$where);
		echo json_encode($data);
	}
	public function getsupplier(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$data=$this->Paymententrymodel->getsuppler_atristdata($table_name,$where);
		echo json_encode($data);
	}
	public function getcriditdate(){
		$table_name=$this->input->post('table_name');
		$where=$this->input->post('where');
		$sdate=$this->input->post('Sdate');
			/*$table_name="lis_artist";
			$where="proid=1 And pid=136";
			$sdate="2019-05-02";*/
		
		$data=$this->Invoiceentrymodel->getcriditdate($table_name,$where,$sdate);
		echo json_encode($data);
	}
	
	
	public function getinvoiceid(){
		 $id=$this->input->post('id');
		 
		$data = array(
			
			'remain_status' => $this->input->post('remain_status'),
			'payment_status' => $this->input->post('paymentstatus'),
			'totalpayment' => $this->input->post('totalpaid'),
			
			
		);
		$data=$this->Paymententrymodel->data_update($data,$id);
		echo json_encode($data);
	}
	public function getinvoicedata(){
		
		
		$data=$this->Invoiceentrymodel->getallinvoicedata();
		echo json_encode($data);
	}
	public function getartistdata(){
		$id=$this->input->post('id');
		$data=$this->Invoiceentrymodel->getartistdata($id);
		echo json_encode($data);
		 
	}
	
	
	public function download($fileName = NULL) {   
		if ($fileName) {
		   	//	$file = realpath ( "assets/img/vedorprofile" ) . "\\" . $fileName;
		$file = realpath ( "assets/invoicedocument/". $fileName );
		// check file exists    
		if (file_exists ( $file )) {
		 // get file content
		 $data = file_get_contents ( $file );
		 //force download
		 force_download( $fileName, $data );
		} else {
			 // Redirect to base url
			 redirect ( base_url () );
		}
	   }
   }
   public function getallsupplier(){
    $id=$this->input->post('supplierid');
	$table_name=$this->input->post('table_name');
	
    $data=$this->Paymententrymodel->getallsupplierinfo($id,$table_name);
    echo json_encode($data); 
   }
   public function getallpayment(){
	$table_name=$this->input->post('table_name');
    $data=$this->Paymententrymodel->getallpaymentinfo($table_name);
    echo json_encode($data); 
   }
   public function editgetallsupplier(){
	$id=$this->input->post('id1');

    $data=$this->Paymententrymodel->geteditsupplier($id);
    echo json_encode($data); 
   }
   public function getpaiddata(){
	$id=$this->input->post('id');

    $data=$this->Paymententrymodel->getinvoicepaidid($id);
    echo json_encode($data); 
   }
   public function delete_paymentdetalis(){
		$id	= $this->input->post('id');
		$table_name	= $this->input->post('table_name');
		$data=$this->Paymententrymodel->delete_paymentdetalis($table_name,"paymentid",$id);
			
        echo json_encode($data);
   }

	

   
}
