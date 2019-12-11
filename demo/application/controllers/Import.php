<?php
	
class Import extends CI_Controller{
	
    function __construct(){
        parent::__construct();
		$this->load->library('excel');
		$this->load->helper('form');
		$this->load->helper("file");	
		$this->load->library("upload");
		$this->load->library('zip');
		

//       $this->load->model('Importmodel');
       $this->load->model('Crudmodel');
	set_time_limit(0);

    }

	public function import_master(){
	
		$file_info = pathinfo($_FILES["file"]["name"]);
		$file_directory = "assets/upload/";
		$new_file_name = $_FILES["file"]["name"];
		
		if(move_uploaded_file($_FILES["file"]["tmp_name"], $file_directory . $new_file_name))
		{   
			$file_type	= PHPExcel_IOFactory::identify($file_directory . $new_file_name);
			$objReader	= PHPExcel_IOFactory::createReader($file_type);
			$objPHPExcel = $objReader->load($file_directory . $new_file_name);
			$sheet_data	= $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);
			
		$highestColumm = $objPHPExcel->setActiveSheetIndex(0)->getHighestColumn();
		$highestRow = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
					$objReader->setReadDataOnly(false);

			$data2 = "";
		$return ="";
		$column = 'A';
		$row = 2;
		$date = "";
		$table_name = $objPHPExcel->setActiveSheetIndex(0)->getCell('A2');
		$date = date('Y-m-d');

		if(($table_name=="vendor_category")||($table_name=="business_type")||($table_name=="vendor_worktype")||($table_name=="legal_formation")){
		for ($row = 2; $row <= $highestRow; $row++) {
		$data = array();	
		$result = array();
				$name = $objPHPExcel->setActiveSheetIndex(0)->getCell('B'.$row);					
				$status = $objPHPExcel->setActiveSheetIndex(0)->getCell('C'.$row);					
				

			$data = array(
				'name' => $name,
				'date' => $date,
				'status' => $status,
			);
			if($table_name=="vendor_worktype"){
				$category = $objPHPExcel->setActiveSheetIndex(0)->getCell('D'.$row);					
				$data['category_id'] = $category;
			}
				
					$return = $this->Crudmodel->data_insert($data,$table_name);	
			
				}
			}
//			elseif($table_name=="vendor_category"){
//				
//			}

		}


			
//			for ($column = 'A'; $column !='E'; $column++) {
//				$cell = $objPHPExcel->setActiveSheetIndex(0)->getCell($column.$row);					
////				array_push($result,$cell);
////				echo $cell;
//			}
//	    $data11 =$this->Employeeimportmodel->gratuity_import_file($result);
//		$data2 .= "----".$data11;	
// 			}

		  unlink( $file_directory . $new_file_name);

//  echo json_encode($data2);	
  echo json_encode($return);	
//echo "<pre>";
//print_r($result);
//echo "</pre>";
			
//		}
	}
	
	
	
}	
?>