<?php
class Paymententrymodel extends CI_Model{
    function get_insertid($table,$id){
        $this->db->select_max($id);
        $hasil=$this->db->get($table);
        return $hasil->row()->$id;
    }
    function getsuppler_atristdata($table,$where){
        $this->db->select('*');    
		$this->db->from($table);
		$this->db->where($where);
		$hasil=$this->db->get();
		return $hasil->result();
    }
   

function data_update($data,$id){
    $this->db->where('id',$id);
    $result = $this->db->update('invoice_entry',$data);
return $result;
}
function data_insert($data,$table){
    if($table=="payment_entry"){
    $result = $this->db->insert($table,$data);
    return $this->db->insert_id();
        
    }else{
        $result = $this->db->insert($table,$data);
        return $result;
    }
    
}

function data_update1($data,$table,$colum,$id){
        $this->db->where($colum,$id);
     $result = $this->db->update($table,$data);
    return $result;
}

function getartistdata($id){
    $this->db->select('*');    
    $this->db->from('artist_details');
    $this->db->where('invoiceid',$id);
    $hasil1=$this->db->get(); 
    return $hasil1->result();
}



function getactualsupplierdata($id,$supplier,$project){
    $this->db->select('*,actualschedual.date,expenses_master.name as expensetype,actualexpense.id');    
    $this->db->from('actualexpense');
    $this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
    $this->db->join('expenses_master','expenses_master.id = actualexpense.expenseid');
    $this->db->where('actualschedual.projectid',$project);
    $this->db->where('actualexpense.supplerid',$supplier);
  //  $this->db->where('actualexpense.invoice_no',$id);
    $hasil=$this->db->get();
    return $hasil->result(); 
}
function getattachment($id){
    $this->db->select('*');    
    $this->db->from('invoiceattachment');
    $this->db->where('invoiceid',$id);
    $hasil1=$this->db->get(); 
    return $hasil1->result(); 
}
function data_delete($table,$colum,$id){
    

    $this->db->where($colum,$id);
    $result = $this->db->delete($table);
   

return $result;
            
}
function getallsupplierinfo($id,$table){
   $result=array();
    $this->db->select('*');    
    $this->db->from($table);
   // $this->db->join('project_master', 'project_master.id = invoice_entry.projectid');
    //$this->db->join('expensesgroup','expensesgroup.id = invoice_entry.expens_id');
    $this->db->where('supplierid',$id);
    $this->db->where('status',1);
   // $this->db->where('payment_status !=',1);
    $hasil1=$this->db->get(); 
    if($hasil1->num_rows()>0){
        foreach($hasil1->result_array() as $invoicedata){
         $id= $invoicedata['id'];
         $invoiceno= $invoicedata['invoiceno'];
         $entrydate= $invoicedata['entrydate'];
         $projectid= $invoicedata['projectid'];
         $expens_id= $invoicedata['expens_id'];
         $grossamt= $invoicedata['grossamt'];
         $sgst= $invoicedata['sgst'];
         $cgst= $invoicedata['cgst'];
         $igst= $invoicedata['igst'];
         $deduction= $invoicedata['deduction'];
         $othercharge= $invoicedata['othercharge'];
         $paymentid= $invoicedata['paymentid'];
         $totalpayment= $invoicedata['totalpayment'];
            $project="";
            $expensgroup="";
            $paidamt="";
         if($projectid > 0){
            $this->db->select('name');    
            $this->db->from('project_master');
            $this->db->where('project_master.id',$projectid);
            $hasil2=$this->db->get();  
            if($hasil2->num_rows()>0){
                foreach($hasil2->result_array() as $projectdata){
                    $project=$projectdata['name'];
                }
         }
        }
         if($id >0){
            $this->db->select('sum(paidamt) as paidamt');    
            $this->db->from('payment_detalis');
            $this->db->where('invoiceid',$id);
            $hasil5=$this->db->get();  
           // echo $this->db->last_query();
           // echo $this->db->last_query();
            if($hasil5->num_rows()>0){
                foreach($hasil5->result_array() as $paymentdetalisdata){
                    $paidamt=$paymentdetalisdata['paidamt'];
                }
         }else{
            $paidamt=0; 
         }
        }


        

       
       
        $result[] = array(
            'id' =>$id,
            'invoiceno' =>$invoiceno,
            'entrydate' =>$entrydate,
            'projectid' =>$projectid,
            'expens_id' =>$expens_id,
            'grossamt' =>$grossamt,
            'sgst' =>$sgst,
            'cgst' =>$cgst,
            'igst' =>$igst,
            'deduction' =>$deduction,
            'othercharge' =>$othercharge,
            'project' =>$project,
            'expensgroup' =>$expensgroup,
            'totalpayment'=>$totalpayment,
            'paidamt'=>$paidamt,
            
        );
    }
   
     
}
return $result;
}
function getallpaymentinfo($table){

    $result=array();
    $this->db->select('*');    
    $this->db->from('payment_entry');
   $this->db->where('status',1);
   $hasil=$this->db->get();
   if($hasil->num_rows() >0){
        foreach($hasil->result_array() as $paymentintry){
            $id=$paymentintry['id'];
            $vendor_type=$paymentintry['peopletype'];
            $entryno=$paymentintry['entryno'];
            $supplier=$paymentintry['supplier'];
            $payment_date=$paymentintry['payment_date'];
            $paid_via=$paymentintry['paid_via'];
            $payment_ref=$paymentintry['payment_ref'];
            $paidamt=$paymentintry['paidamt'];
            $deductiondes1=$paymentintry['deductiondes1'];
            $deductoinamt1=$paymentintry['deductoinamt1'];
            $deductoinamt2=$paymentintry['deductoinamt2'];
            $deductiomamt3=$paymentintry['deductiomamt3'];
            $finalpayment=$paymentintry['finalpayment'];
            $amtdes=$paymentintry['amtdes'];
            $deductiondes2=$paymentintry['deductiondes2'];
            $deductiondes3=$paymentintry['deductiondes3'];
          
            $vendortype="";
            $projectname="";
            $expengroup="";
            if($vendor_type >0){
                $this->db->select('name as vendortype');    
                $this->db->from('peopletype_master');
                $this->db->where('peopletype_master.id',$vendor_type);
                $hasil2=$this->db->get(); 
                foreach($hasil2->result_array() as $vendor_typedata){
                    $vendortype=$vendor_typedata['vendortype'];
                }
            }
  
            $peplename="";
            if($supplier >0 ){
               if($vendor_type !=5){
                $this->db->select('name as peoplename');    
                $this->db->from('people_master');
                $this->db->where('people_master.id',$supplier);
                $hasil1=$this->db->get(); 
                foreach($hasil1->result_array() as $peopledata){
                    $peplename=$peopledata['peoplename'];
                }
               }else{
                $this->db->select('companyname as companyname');    
                $this->db->from('suppiler_master');
                $this->db->where('suppiler_master.id',$supplier);
                $hasil1=$this->db->get(); 
                foreach($hasil1->result_array() as $peopledata){
                    $peplename=$peopledata['companyname'];
                }
               }
            }

            $result[]=array(
                'id'=>$id,
                'vendor_type'=>$vendor_type,
                'entryno'=>$entryno,
                'entryno'=>$entryno,
                'supplier'=>$supplier,
                'payment_date'=>$payment_date,
                'paid_via'=>$paid_via,
               'payment_ref'=>$payment_ref,
                'paidamt'=>$paidamt,
                'deductoinamt1'=>$deductoinamt1,
                'deductoinamt2'=>$deductoinamt2,

                'deductiomamt3'=>$deductiomamt3,
               'deductiondes1'=>$deductiondes1,
                'deductiondes2'=>$deductiondes2,
                'deductiondes3'=>$deductiondes3,
                'amtdes'=>$amtdes,
                'finalpayment'=>$finalpayment,
                'vendortype'=>$vendortype,
                'peplename'=>$peplename,
                
            );
 }
        return $result; 
   }
    
}
function geteditsupplier($id){
    $result=array();

    $this->db->select('*');    
    $this->db->from('payment_detalis');
     $this->db->where('paymentid',$id);
    $hasil=$this->db->get();
    if($hasil->num_rows()> 0){
        foreach($hasil->result_array() as $paymentdetalis){
            $id=$paymentdetalis['invoiceid'];
            $invoice_amt=$paymentdetalis['invoice_amt'];
            $paidamt=$paymentdetalis['paidamt'];
            $project="";
            $invoiceno="";
            $entrydate="";
            if($id >0){
                $this->db->select('*,project_master.name as project,invoice_entry.id');    
                $this->db->from('invoice_entry');
                $this->db->join('project_master', 'project_master.id = invoice_entry.projectid');
                $this->db->where('invoice_entry.id',$id);
                //$this->db->where('payment_status','1');
                $hasil1=$this->db->get(); 
                if($hasil1->num_rows()> 0){
                    foreach($hasil1->result_array() as $invoicedata){
                        $project=$invoicedata['project'];
                        $invoiceno=$invoicedata['invoiceno'];
                        $entrydate=$invoicedata['entrydate'];
                    }
                }else{
                    $project="";
                    $invoiceno="";
                    $entrydate="";
                }
            }
            $result[]=array(
                'id'=>$id,
                'invoice_amt'=>$invoice_amt,
                'paidamt'=>$paidamt,
                'project'=>$project,
                'invoiceno'=>$invoiceno,
                'entrydate'=>$entrydate,
            );

        }

    }

    return $result;

   
}
function getinvoicepaidid($id){
    $this->db->select('*');    
    $this->db->from('invoice_entry');
    $this->db->where('id',$id);
    $hasil1=$this->db->get(); 
    return $hasil1->result();
}
function delete_paymentdetalis($table,$colum,$id){
$this->db->where($colum,$id);
$result = $this->db->delete($table);
return $result;
}
}
?>