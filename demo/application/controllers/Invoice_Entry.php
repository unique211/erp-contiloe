<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Invoice_Entry extends CI_Controller
{

	function __construct()
	{
		parent::__construct();

		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

		$this->load->model('Invoiceentrymodel');
		$this->load->helper('download');
		// $this->load->model('Settingsmodel');
	}

	public function save_settings()
	{
		$data1 = "";
		$id	= $this->input->post('id');
		$table_name	= $this->input->post('table_name');
		//$table_name = "document_master";
		$data = "";


		if ($table_name == "invoice_entry") {
			if ($id == "") {
				$data = array(
					'vendor_type' => $this->input->post('people_type'),
					'entrydate' => $this->input->post('e_date'),
					'entryno' => $this->input->post('e_no'),
					'suppli_invoice_date' => $this->input->post('s_date'),
					'invoiceno' => $this->input->post('s_no'),
					'supplierid' => $this->input->post('supplier'),
					'projectid' => $this->input->post('project'),
					'due_date' => $this->input->post('d_date'),
					'expens_id' => $this->input->post('expensegroup'),
					'grossamt' => $this->input->post('grossamt'),
					'sgst' => $this->input->post('sgst'),
					'cgst' => $this->input->post('cgst'),
					'igst' => $this->input->post('igst'),
					'deduction' => $this->input->post('deduction'),
					'othercharge' => $this->input->post('other'),
					'invoice_date' => $this->input->post('invoicedate'),
					'gstno' => $this->input->post('gstno'),
					'pan_no' => $this->input->post('panno'),
					'aggriment' => $this->input->post('link'),
					'add_date' => date("Y-m-d"),
					'modifydate' => date("Y-m-d"),
					'paidleave' => $this->input->post('paidleave'),
					'remark' => $this->input->post('remarkdata'),
					'worktype' => $this->input->post('worktype'),
					'noofepisodemonth' => $this->input->post('noofeposoic'),
					'rateperepisode' => $this->input->post('perepisidicrate'),
					

				);
			} else {
				$data = array(
					'vendor_type' => $this->input->post('people_type'),
					'entrydate' => $this->input->post('e_date'),
					'entryno' => $this->input->post('e_no'),
					'suppli_invoice_date' => $this->input->post('s_date'),
					'invoiceno' => $this->input->post('s_no'),
					'supplierid' => $this->input->post('supplier'),
					'projectid' => $this->input->post('project'),
					'due_date' => $this->input->post('d_date'),
					'expens_id' => $this->input->post('expensegroup'),
					'grossamt' => $this->input->post('grossamt'),
					'sgst' => $this->input->post('sgst'),
					'cgst' => $this->input->post('cgst'),
					'igst' => $this->input->post('igst'),
					'deduction' => $this->input->post('deduction'),
					'othercharge' => $this->input->post('other'),
					'invoice_date' => $this->input->post('invoicedate'),
					'gstno' => $this->input->post('gstno'),
					'pan_no' => $this->input->post('panno'),
					'aggriment' => $this->input->post('link'),
					//'add_date' => date("Y-m-d"),
					'modifydate' => date("Y-m-d"),
					'paidleave' => $this->input->post('paidleave'),
					'remark' => $this->input->post('remarkdata'),
					'worktype' => $this->input->post('worktype'),
					'noofepisodemonth' => $this->input->post('noofeposoic'),
					'rateperepisode' => $this->input->post('perepisidicrate'),
				);
			}
		} else if ($table_name == "artist_details") {
			$data = array(
				'invoiceid' => $this->input->post('invoiceid'),
				'typeofpayment' => $this->input->post('regular_attandance'),
				'day' => $this->input->post('day'),
				'unit' => $this->input->post('unitdata'),
				'rate' => $this->input->post('rate'),

			);
		} else if ($table_name == "invoiceattachment") {
			$data = array(
				'invoiceid' => $this->input->post('invoiceid'),
				'doctype' => $this->input->post('doctype'),
				'descrption' => $this->input->post('descrption'),
				'filename' => $this->input->post('filename'),


			);
		}


		if ($id == "") {


			$data1 = $this->Invoiceentrymodel->data_insert($data, $table_name);
		} else {
			$data1 = $this->Invoiceentrymodel->data_update1($data, $table_name, "id", $id);
		}

		echo json_encode($data1);
	}
	public function getinvoiceupdate()
	{
		$id = $this->input->post('invoice_no');
		$table_name = $this->input->post('table_name');
		$data = array(
			'remain_status' => $this->input->post('remain_status'),
		);
		$data1 = $this->Invoiceentrymodel->data_update1($data, $table_name, "id", $id);
	}
	public function get_master()
	{
		//$table_name="project_master";
		$table_name	= $this->input->post('table_name');
		$data = $this->Crudmodel->data_get($table_name);
		echo json_encode($data);
	}

	public function get_master_where()
	{
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		//$table_name	="peopleattdance";
		//$where="aid='59'";
		//file_put_contents('./log_'.date("j.n.Y").'.txt',$where, FILE_APPEND);
		$data = $this->Crudmodel->data_get_where($table_name, $where);
		//print_r($data);
		if ($this->session->role == 'Vendors' && $table_name == 'vendor_category') {
			$this->db->select('vendor_registration.category');
			$this->db->from('vendor_registration');
			$this->db->join('user_master', 'user_master.refid = vendor_registration.id');
			$this->db->where('user_master.refid', $this->session->user_id);
			$query = $this->db->get();
			//$sql = $this->db->last_query();
			//echo $sql;
			$res = $query->result_array();
			$catid = '';
			if (COUNT($res) > 0) {

				$catid = $res[0]['category'];
			}

			for ($i = 0; $i < count($data); $i++) {
				$data[$i]->category = $catid;
			}
			echo json_encode($data);
		} else if ($table_name == 'vendor_category') {
			for ($i = 0; $i < count($data); $i++) {
				$data[$i]->category = '';
			}
			echo json_encode($data);
		} else {

			echo json_encode($data);
		}
	}
	public function get_subcategory()
	{
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');
		$data = $this->Crudmodel->data_get_where($table_name, $where);
		echo json_encode($data);
	}

	public function delete_master()
	{
		$id	= $this->input->post('id');
		$table_name	= $this->input->post('table_name');


		if ($table_name == "invoice_entry") {
			$data = $this->Invoiceentrymodel->data_delete('artist_details', "invoiceid", $id);
			$data = $this->Invoiceentrymodel->data_delete('invoiceattachment', "invoiceid", $id);
			$data = $this->Invoiceentrymodel->data_delete($table_name, "id", $id);
			//	$data=$this->Invoiceentrymodel->data_delete('monthly_expense',"projectid",$id);
		} else if ($table_name == "artist_details") {
			$data = $this->Invoiceentrymodel->data_delete($table_name, "invoiceid", $id);
		} else if ($table_name == "invoiceattachment") {
			$data = $this->Invoiceentrymodel->data_delete($table_name, "invoiceid", $id);
		}

		$data = $this->Invoiceentrymodel->data_delete($table_name, "id", $id);

		echo json_encode($data);
	}

	public function delete_master1()
	{
		$id	= $this->input->post('id');
		$table_name	= $this->input->post('table_name');
		$type	= $this->input->post('type');
		$data = $this->Crudmodel->data_delete1($table_name, $type, $id);


		echo json_encode($data);
	}
	public function get_master_where1()
	{
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');

		$data = $this->Crudmodel->data_get_where1($table_name, $where);
		echo json_encode($data);
	}

	public function get_master_artist()
	{
		$table_name	= $this->input->post('table_name');
		$where	= $this->input->post('where');

		//$table_name="lis_artist";
		//$where="lis_artist.status = '1' and lis_artist.proid='6' and lis_artist.type='artist'";
		$data = $this->Crudmodel->data_get_artist($table_name, $where);
		echo json_encode($data);
	}

	public function get_charecter()
	{
		$table_name = $this->input->post('table_name');
		$pid = $this->input->post('pid');
		$proid = $this->input->post('proid');
		$data = $this->Crudmodel->data_get_chdata($table_name, $pid, $proid);
		echo json_encode($data);
	}
	public function doc_upload()
	{
		$this->load->helper("file");
		$this->load->library("upload");
		$id = $this->input->post('id');
		//echo json_encode($id);
		$size = '';
		if ($id == 'filename') {
			$size = $_FILES['filename']['size'];
		} else if ($id == 'docupload') {
			$size = $_FILES['docupload']['size'];
		}

		if ($size > 0) {
			$this->upload->initialize(array(
				"upload_path" => './assets/invoicedocument/',
				"overwrite" => FALSE,
				"max_filename" => 300,
				"remove_spaces" => TRUE,
				//		       "allowed_types" => 'jpg|jpeg|png|gif',
				"allowed_types" => '*',
				"max_size" => 1024 * 10,
			));

			// if (!$this->upload->do_upload('attachreg_certy')) {
			if (!$this->upload->do_upload($id)) {
				$error = array('error' => $this->upload->display_errors());
				echo json_encode($error);
			}

			$data = $this->upload->data();
			$path = $data['file_name'];

			echo json_encode($path);
		} else {
			//echo json_encode($id);	
			echo "no file";
		}
	}

	public function doc_delete()
	{
		$file_directory = "./assets/invoicedocument/";
		$file_name = $this->input->post('doc');
		unlink($file_directory . $file_name);
		echo '1';
	}
	public function doc_delete1()
	{
		$file_directory = "./assets/Attchment/";
		$file_name = $this->input->post('doc');
		unlink($file_directory . $file_name);
		echo '1';
	}

	public function doc_upload1()
	{
		$this->load->helper("file");	
		$this->load->library("upload");
		$id=$this->input->post('id');
		//echo json_encode($id);
		$size='';
		if($id == 'filename'){
			$size=$_FILES['filename']['size'];	
		}else if($id == 'docupload1'){
			$size=$_FILES['docupload1']['size'];	
		}else if($id == 'docupload2'){
			$size=$_FILES['docupload2']['size'];	
		}else if($id == 'docupload3'){
			$size=$_FILES['docupload3']['size'];	
		}
		
		if ($size > 0){
			$this->upload->initialize(array( 
		       "upload_path" => './assets/Attchment/',
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


	public function getmaxid()
	{
		$table_name = $this->input->post('table_name');
		$where = $this->input->post('where');
		$data = $this->Invoiceentrymodel->get_insertid($table_name, $where);
		echo json_encode($data);
	}
	public function getsupplier()
	{
		$table_name = $this->input->post('table_name');
		$where = $this->input->post('where');
		$atype = $this->input->post('atype');
		$project = $this->input->post('project');
		$data = $this->Invoiceentrymodel->getsuppler_atristdata($table_name, $where,$atype,$project);
		echo json_encode($data);
	}
	public function getcriditdate()
	{
		$table_name = $this->input->post('table_name');
		$where = $this->input->post('where');
		$sdate = $this->input->post('Sdate');
		/*$table_name="lis_artist";
			$where="proid=1 And pid=136";
			$sdate="2019-05-02";*/

		$data = $this->Invoiceentrymodel->getcriditdate($table_name, $where, $sdate);
		echo json_encode($data);
	}
	public function getartistattendance()
	{
		$supplier = $this->input->post('supplier');
		$project = $this->input->post('project');
		$sdate = $this->input->post('sdate');
		$todate = $this->input->post('todate');
		$people_typename = $this->input->post('people_typename');
		/*$project='1';
		$supplier='146';
		$sdate="2019-05-02";
		$todate="2019-05-31";
		$people_typename="Artist";*/
		$data = $this->Invoiceentrymodel->getallatandance($supplier, $project, $sdate, $todate, $people_typename);
		echo json_encode($data);
	}

	public 	function getartisdata()
	{
		$supplier = $this->input->post('supplier');
		$project = $this->input->post('project');
		$sdate = $this->input->post('sdate');
		$todate = $this->input->post('todate');
		$people_typename = $this->input->post('people_typename');

		/*$project='1';
		$supplier='158';
		$sdate="2019-05-01";
		$todate="2019-05-31";
		$people_typename="Artist";*/

		$data = $this->Invoiceentrymodel->getallartistdata($supplier, $project, $sdate, $todate, $people_typename);
		echo json_encode($data);
	}

	public function geteditpeopledata()
	{
		$supplier = $this->input->post('supplier');
		$project = $this->input->post('project');
		$sdate = $this->input->post('sdate');
		$todate = $this->input->post('todate');
		$invoice = $this->input->post('invoice');
		/*$invoice='25';
		$project='1';
		$supplier='104';
		$sdate="2019-05-01";
		$todate="2019-05-31";*/
	
		$data = $this->Invoiceentrymodel->geteditallatandance($supplier, $project, $sdate, $todate,$invoice);
		echo json_encode($data);
	}
	public function getsupplerdata()
	{
		$supplier = $this->input->post('supplier');
		$project = $this->input->post('project');
		$fromdate = $this->input->post('fromdate');
		$todate = $this->input->post('todate');

		$data = $this->Invoiceentrymodel->getactualsupplier($supplier, $project,$fromdate,$todate);
		echo json_encode($data);
	}
	public function get_gst_pan()
	{
		$supplier = $this->input->post('people_typename');
		$id = $this->input->post('id');
		$gstno = "";
		$panno = "";

		if ($supplier == "Supplier") {
			$data1 = $this->Invoiceentrymodel->get_gst_pan($id);
			foreach ($data1 as $value1) {
				$gstno = $value1->gstno;
				$panno = $value1->panno;
			}
		} else {
			$data2 = $this->Invoiceentrymodel->get_gst_pan2($id);
			foreach ($data2 as $value2) {
				$gstno = $value2->gstno;
				$panno = $value2->panno;
			}
		}
		$data = array(
			'gst' => $gstno,
			'pan' => $panno,
		);

		echo json_encode($data);
	}
	public function getupdate_actualschedual()
	{
		$exid = $this->input->post('expebseid');

		$data = array(
			'invoice_no' => $this->input->post('invoice_no'),
			'invoice_date' => $this->input->post('invoicedate'),
			'balance_amt' => $this->input->post('balance'),
			'amountpass' => $this->input->post('passamt'),
			'invoice_status' => $this->input->post('invoicestatus'),

		);
		$data = $this->Invoiceentrymodel->data_update($data, $exid);
		echo json_encode($data);
	}
	public function getupdatepeople()
	{
		$exid = $this->input->post('peopleid');
		$table_name = $this->input->post('table_name');
		$data = array(
			'invoice_no' => $this->input->post('invoice_no'),
			'invoice_status' => $this->input->post('invoice_status'),
			'passedamt' => $this->input->post('passamt'),
			'balanceamt' => $this->input->post('balance_amt'),
			//'perdayrate' => $this->input->post('perrate'),
			//'overtimerate' => $this->input->post('overtimerate'),
			'isdublicate' => $this->input->post('isdublicate'),
		);
		$data = $this->Invoiceentrymodel->data_update1($data, $table_name, "id", $exid);;
		echo json_encode($data);
	}
	public function getinvoicedata()
	{


		$data = $this->Invoiceentrymodel->getallinvoicedata();
		echo json_encode($data);
	}
	public function getartistdata()
	{
		$id = $this->input->post('id');
		$data = $this->Invoiceentrymodel->getartistdata($id);
		echo json_encode($data);
	}
	public function getactualsupplierdata()
	{
		$id = $this->input->post('id');
		$supplierid = $this->input->post('supplierid');
		$proid = $this->input->post('proid');
		$data = $this->Invoiceentrymodel->getactualsupplierdata($id, $supplierid, $proid);
		echo json_encode($data);
	}
	public function getattachmentdata()
	{
		$id = $this->input->post('id');
		$data = $this->Invoiceentrymodel->getattachment($id);
		echo json_encode($data);
	}
	public function download($fileName = NULL)
	{
		if ($fileName) {
			//	$file = realpath ( "assets/img/vedorprofile" ) . "\\" . $fileName;
			$file = realpath("assets/invoicedocument/" . $fileName);
			// check file exists    
			if (file_exists($file)) {
				// get file content
				$data = file_get_contents($file);
				//force download
				force_download($fileName, $data);
			} else {
				// Redirect to base url
				redirect(base_url());
			}
		}
	}
	public function download1($fileName = NULL)
	{
		if ($fileName) {
			//	$file = realpath ( "assets/img/vedorprofile" ) . "\\" . $fileName;
			$file = realpath("assets/documents/" . $fileName);
			// check file exists    
			if (file_exists($file)) {
				// get file content
				$data = file_get_contents($file);
				//force download
				force_download($fileName, $data);
			} else {
				// Redirect to base url
				// redirect ( base_url () );
				return 400;
			}
		}
	}
	public function download2($fileName = NULL)
	{
		if ($fileName) {
			//	$file = realpath ( "assets/img/vedorprofile" ) . "\\" . $fileName;
			$file = realpath("assets/Attchment/" . $fileName);
			// check file exists    
			if (file_exists($file)) {
				// get file content
				$data = file_get_contents($file);
				//force download
				force_download($fileName, $data);
			} else {
				// Redirect to base url
				// redirect ( base_url () );
				return 400;
			}
		}
	}
	function getdocument()
	{
		$project = $this->input->post('project');
		$data = $this->Invoiceentrymodel->getdocument($project);
		echo json_encode($data);
	}
	function getdocumentdata(){
		$project = $this->input->post('project');
		$supplier = $this->input->post('supplier');
		$people_type = $this->input->post('people_type');
		$data = $this->Invoiceentrymodel->getdocument_data($project,$supplier,$people_type);
		echo json_encode($data);
	}
	function checkinvoicegenerate()
	{
		$project = $this->input->post('project');
		$supplier = $this->input->post('supplier');
		$date2 = $this->input->post('date2');
		$data = $this->Invoiceentrymodel->checkinvoicegenerate($project, $supplier, $date2);
		echo json_encode($data);
	}
	function fullypaidornot()
	{
		$id1 = $this->input->post('id1');
		$data = $this->Invoiceentrymodel->fullypaid($id1);
		echo json_encode($data);
	}
	function getpaymentEntrydata(){
		$supplier = $this->input->post('id');
	//	$supplier='1';
		$data = $this->Invoiceentrymodel->getpaymentinfo($supplier);
		echo json_encode($data);
	}
	function getdocumentdata1(){
		
		$id ='1';

		$data = $this->Invoiceentrymodel->getdocument_data1($id);
		echo json_encode($data);
	}
	public function checkinvoiceno(){
		$inviceno = $this->input->post('inviceno');
		$supplier = $this->input->post('supplier');
		
		$data = $this->Invoiceentrymodel->getinvoiceno($inviceno,$supplier);
		echo json_encode($data);
	}
	public function getadminstaffdata(){
		$supplier = $this->input->post('supplier');
		$data = $this->Invoiceentrymodel->getadmin_staffdata($supplier);
		echo json_encode($data);
	}
	public function getepisodicstaffdata(){
		$supplier = $this->input->post('supplier');
		$project = $this->input->post('project');
		$data = $this->Invoiceentrymodel->getepisodicstaff_data($supplier,$project);
		echo json_encode($data);
	}
	public function getplannfotagedata(){
		$project = $this->input->post('project');
		$monthname = $this->input->post('monthname');
		$year = $this->input->post('year');
		/*$project='1';
		$monthname='May';
		$year='2019';*/
		$data = $this->Invoiceentrymodel->getplannfotage_data($project,$monthname,$year);
		echo json_encode($data);
	}
	public function getpeopleworkinhour(){
		$people = $this->input->post('people');
		$data = $this->Invoiceentrymodel->getpeoleworkinhour($people);
		echo json_encode($data);
	}
	public function checkinvoicepayment(){
		$id = $this->input->post('id');
		$data = $this->Invoiceentrymodel->check_invoicepayment($id);
		echo json_encode($data);
	}
	public function deleteinvoicedata(){
		$id = $this->input->post('id');
		$relationtable = $this->input->post('relationtable');
		$table_name = $this->input->post('table_name');
		$data = $this->Invoiceentrymodel->delete_invoice($id,$relationtable,$table_name);
		echo json_encode($data);
	}

}
