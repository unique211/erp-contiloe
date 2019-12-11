<?php
class Billreportmodel extends CI_Model{
    function get_insertid($table,$id){
        $this->db->select_max($id);
        $hasil=$this->db->get($table);
        return $hasil->row()->$id;
    }
    function getsuppler_atristdata($table,$where,$atype,$project){
     $result=array();
        if($table=="people_master"){
        $this->db->select('*');    
		$this->db->from($table);
		$this->db->where($where);
		$hasil=$this->db->get();
		return $hasil->result();
      }else if($table=="lis_artist"){
        $this->db->select('*,people_master.name as name');    
        $this->db->from($table);
        $this->db->join('people_master', 'people_master.id = lis_artist.pid');
        $this->db->where('type',$atype);
        $this->db->where('proid',$project);
        $this->db->group_by('pid');
        $hasil=$this->db->get();
		return $hasil->result();
      }else {
        $this->db->select('*');    
		$this->db->from($table);
		$this->db->where($where);
        $hasil=$this->db->get();
        if($hasil->num_rows()>0){
            foreach($hasil->result_array() as $data){
              $id=$data['id'];
              $companyname=$data['companyname'];
                $this->db->select('id');    
                $this->db->from('currentmaterial_master');
                $this->db->where('sid',$id);
                $this->db->where('proid',$project);
                $hasil1=$this->db->get();
                if($hasil1->num_rows()>0){
                    $result[]=array(
                        'companyname'=>$companyname,
                        'id'=>$id,
                    );
        
                }

            }
        }
		return $result;
      }
      
        
    }
    function getcriditdate($table,$where,$date){
        $date1 ='';
       
        $date2="";
        $credit='';
        $this->db->select('*');    
		$this->db->from($table);
		$this->db->where($where);
        $hasil=$this->db->get();
        if($hasil->num_rows()>0){
            foreach($hasil->result_array() as $data){
                if($table=="lis_artist"){
                    $credit=$data['creditday'];
                }else{
                    $credit=$data['credit_days'];
                }
                
               if($credit >=0){
         
                    $date1 = strtotime("+".$credit." days", strtotime($date));
                    $date1= date("Y-m-d", $date1);
          
               
            }else{
                $date1=$date;
                $date1= date("Y-m-d", $date1);
            }
        }

	
    }else{
        $date1= date("Y-m-d");
        //$date1= date("Y-m-d", $date1);
    }
    return $date1;
}
function getallatandance($supplier,$project,$sdate,$todate,$people_typename){

    $result=array();
    $day="";
    $hour="";
    $rate="";
    $overtime="";
    $unitname="";
   if($people_typename =="Admin Staff"){
    $this->db->select('rate_per_month as ratedata');    
    $this->db->from('people_master');
    $this->db->where('people_master.id',$supplier);
     $hasil=$this->db->get();
     if($hasil->num_rows()>0){
         foreach($hasil->result_array() as $getday){
            $day=1;
            $hour=$getday['ratedata'];
         }
     }else{
        $day=0;
        $hour=0; 
     }
     $result[]=array(
        'day'=>$day,
        'rate'=>$hour,
    );

   }else{
    $this->db->select('actualschedual.date,peopleattdance.extrahour,peopleattdance.id');    
    $this->db->from('peopleattdance');
    $this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
    $this->db->where('actualschedual.date >=', $sdate);
    $this->db->where('actualschedual.date <=', $todate);
    $this->db->where('actualschedual.projectid',$project);
    $this->db->where('peopleattdance.peopleid',$supplier);
   
    $hasil=$this->db->get();
     if($hasil->num_rows()>0){
         foreach($hasil->result_array() as $getday){
            $date=$getday['date'];
            $id=$getday['id'];
            $extrahour=$getday['extrahour'];



            $this->db->select('rate as rate,overtime as overtime,unitofmeasurement.name as unitname');    
            $this->db->from('lis_artist');
            $this->db->join('unitofmeasurement', 'unitofmeasurement.id = lis_artist.perunit');
            $this->db->where('lis_artist.proid', $project);
            $this->db->where('lis_artist.pid',$supplier);
           // $this->db->where('lis_artist.perunit','1');
            $hasil1=$this->db->get();
            if($hasil1->num_rows()>0){
              foreach ($hasil1->result_array()as $listdata){
                $rate=$listdata['rate'];
                $overtime=$listdata['overtime'];
                $unitname=$listdata['unitname'];
              }
              
            }else{
                $rate=0;
                $overtime=0;
            }
            if($extrahour==""){
                $extrahour=0;
            }
            if($rate==0){
                $rate=0;
            }

            $result[]=array(
                'date'=>$date,
                'extrahour'=>$extrahour,
                'rate'=>$rate,
                'overtime'=>$overtime,
                'unitname'=>$unitname,
                'id'=>$id,
            );

         }
     }else{
        $day=0;
        $hour=0; 
     }

    
    if($overtime==""){
        $overtime=0;
    }
    if($hour==""){
        $hour=0;
    }

    if($unitname==""){
        $unitname="Per Day";
    }
   
}
    return $result;

}
function getallartistdata($supplier,$project,$sdate,$todate,$people_typename){

    $result=array();
    $day="";
    $hour="";
    $rate="";
    $overtime="";
    $unitname="";
    $passedamt=0;
    $balanceamt=0;
    $this->db->select('peopleattdance.*,actualschedual.date,peopleattdance.extrahour,peopleattdance.id');    
    $this->db->from('peopleattdance');
    $this->db->join('actualschedual','actualschedual.id = peopleattdance.aid');
    $this->db->where('actualschedual.date >=', $sdate);
    $this->db->where('actualschedual.date <=', $todate);
    $this->db->where('actualschedual.projectid',$project);
    $this->db->where('peopleattdance.peopleid',$supplier);
    $this->db->where('peopleattdance.invoice_status',0);
    $this->db->where('peopleattdance.isdublicate',0);
    $this->db->order_by('actualschedual.date','asc');
    //$this->db->where('peopleattdance.passedamt >',0);
   // $this->db->where('peopleattdance.passedamt >'0);
    $hasil=$this->db->get();
   // echo $this->db->last_query();
     if($hasil->num_rows()>0){
         foreach($hasil->result_array() as $getday){
            $date=$getday['date'];
            $id=$getday['id'];
            $extrahour=$getday['extrahour'];
            $passedamt=$getday['passedamt'];
            $balanceamt=$getday['balanceamt'];


            $this->db->select('rate as rate,overtime as overtime,unitofmeasurement.name as unitname');    
            $this->db->from('lis_artist');
            $this->db->join('unitofmeasurement', 'unitofmeasurement.id = lis_artist.perunit');
            $this->db->where('lis_artist.proid', $project);
            $this->db->where('lis_artist.pid',$supplier);
           // $this->db->where('lis_artist.perunit','1');
            $hasil1=$this->db->get();
            if($hasil1->num_rows()>0){
              foreach ($hasil1->result_array()as $listdata){
                $rate=$listdata['rate'];
                $overtime=$listdata['overtime'];
                $unitname=$listdata['unitname'];
              }
              
            }else{
                $rate=0;
                $overtime=0;
            }
            if($extrahour==""){
                $extrahour=0;
            }
            if($rate==0){
                $rate=0;
            }

            $result[]=array(
                'date'=>$date,
                'extrahour'=>$extrahour,
                'rate'=>$rate,
                'overtime'=>$overtime,
                'unitname'=>$unitname,
                'id'=>$id,
                'passedamt'=>$passedamt,
                'balanceamt'=>$balanceamt,
            );

         }
     }else{
        $day=0;
        $hour=0; 
     }

     return $result;
   
   
}
   

function getactualsupplier($supplier,$project,$sdate,$todate){
    $this->db->select('*,actualschedual.date,expenses_master.name as expensetype,actualexpense.id');    
    $this->db->from('actualexpense');
    $this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
    $this->db->join('expenses_master','expenses_master.id = actualexpense.expenseid');
    $this->db->where('actualschedual.projectid',$project);
    $this->db->where('actualschedual.date >=', $sdate);
    $this->db->where('actualschedual.date <=', $todate);
    $this->db->where('actualexpense.supplerid',$supplier);
    $this->db->where('actualexpense.invoice_status',0);
    $this->db->order_by('actualschedual.date','asc');
    $hasil=$this->db->get();
    return $hasil->result();
}

function data_update($data,$id){
    $this->db->where('id',$id);
    $result = $this->db->update('actualexpense',$data);
return $result;
}
function data_insert($data,$table){
    if($table=="invoice_entry"){
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
function getallinvoicedata(){
    $result=array();
    $this->db->select('*');    
    $this->db->from('invoice_entry');
    //$this->db->join('peopletype_master', 'peopletype_master.id = invoice_entry.vendor_type');
   // $this->db->join('project_master','project_master.id = invoice_entry.projectid');
   // $this->db->join('expensesgroup','expensesgroup.id = invoice_entry.expens_id');
   $this->db->where('status',1);
   $this->db->order_by('id','desc');
   $hasil=$this->db->get();
   if($hasil->num_rows() >0){
        foreach($hasil->result_array() as $invoicedata){
            $id=$invoicedata['id'];
            $vendor_type=$invoicedata['vendor_type'];
            $entrydate=$invoicedata['entrydate'];
            $entryno=$invoicedata['entryno'];
            $suppli_invoice_date=$invoicedata['suppli_invoice_date'];
            $invoiceno=$invoicedata['invoiceno'];
            $supplierid=$invoicedata['supplierid'];
            $projectid=$invoicedata['projectid'];
            $due_date=$invoicedata['due_date'];
            $expens_id=$invoicedata['expens_id'];
            $grossamt=$invoicedata['grossamt'];
            $sgst=$invoicedata['sgst'];
            $cgst=$invoicedata['cgst'];
            $igst=$invoicedata['igst'];

            $gstno=$invoicedata['gstno'];
            $pan_no=$invoicedata['pan_no'];
            $invoice_date=$invoicedata['invoice_date'];
            $aggriment=$invoicedata['aggriment'];

            $deduction=$invoicedata['deduction'];
            $othercharge=$invoicedata['othercharge'];

            $paidleave=$invoicedata['paidleave'];
            $remark=$invoicedata['remark'];

            $worktype=$invoicedata['worktype'];
            $noofepisodemonth=$invoicedata['noofepisodemonth'];
            $rateperepisode=$invoicedata['rateperepisode'];
            
           
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
            $this->db->select('name as projectname');    
                $this->db->from('project_master');
                $this->db->where('project_master.id',$projectid);
                $hasil3=$this->db->get(); 
                foreach($hasil3->result_array() as $projectdata){
                    $projectname=$projectdata['projectname'];
                }
            
            $this->db->select('name as expensesgroup');    
            $this->db->from('expensesgroup');
            $this->db->where('expensesgroup.id',$expens_id);
            $hasil4=$this->db->get(); 
            foreach($hasil4->result_array() as $expensedata){
                $expengroup=$expensedata['expensesgroup'];
            }
        

           



            $peplename="";
            if($supplierid >0 ){
               if($vendor_type !=5){
                $this->db->select('name as peoplename');    
                $this->db->from('people_master');
                $this->db->where('people_master.id',$supplierid);
                $hasil1=$this->db->get(); 
                foreach($hasil1->result_array() as $peopledata){
                    $peplename=$peopledata['peoplename'];
                }
               }else{
                $this->db->select('companyname as companyname');    
                $this->db->from('suppiler_master');
                $this->db->where('suppiler_master.id',$supplierid);
                $hasil1=$this->db->get(); 
                foreach($hasil1->result_array() as $peopledata){
                    $peplename=$peopledata['companyname'];
                }
               }
            }

            $result[]=array(
                'id'=>$id,
                'vendor_type'=>$vendor_type,
                'entrydate'=>$entrydate,
                'entryno'=>$entryno,
                'suppli_invoice_date'=>$suppli_invoice_date,
                'invoiceno'=>$invoiceno,
                'supplierid'=>$supplierid,
               'projectid'=>$projectid,
                'due_date'=>$due_date,
                'expens_id'=>$expens_id,
                'grossamt'=>$grossamt,

                'sgst'=>$sgst,
               'cgst'=>$cgst,
                'igst'=>$igst,
                'deduction'=>$deduction,
                'othercharge'=>$othercharge,
               'vendortype'=>$vendortype,
                'projectname'=>$projectname,
                'expengroup'=>$expengroup,
                'peplename'=>$peplename,
                'gstno'=>$gstno,
                'pan_no'=>$pan_no,
                'invoice_date'=>$invoice_date,
                'aggriment'=>$aggriment,
                'remark'=>$remark,
                'paidleave'=>$paidleave,
                'worktype'=>$worktype,
                'noofepisodemonth'=>$noofepisodemonth,
                'rateperepisode'=>$rateperepisode,
            );



        }
   }
   return $result;  
   
}
function getartistdata($id){
    $this->db->select('*');    
    $this->db->from('artist_details');
    $this->db->where('invoiceid',$id);
    $hasil1=$this->db->get(); 
    return $hasil1->result();
}
function get_gst_pan($id){
    $this->db->select('*');    
    $this->db->from('suppiler_master');
    $this->db->where('id',$id);
    $hasil1=$this->db->get(); 
    return $hasil1->result();
}
function get_gst_pan2($id){
    $this->db->select('*');    
    $this->db->from('people_master');
    $this->db->where('id',$id);
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
    $this->db->where('actualexpense.invoice_status',1);
    $this->db->where('actualexpense.invoice_no',$id);
    $this->db->order_by('actualschedual.date','asc');
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
    
if($table=="invoice_entry"){

    $data = array(
        'status' =>0,
       
    );

$this->db->where('id',$id);
 $this->db->update($table,$data);
 
 $vendor_type=$this->input->post('peopletype');
 if($vendor_type=='5'){
    $data = array(
        'invoice_no' =>0,
        'invoice_date' =>'0000-00-00',
        'balance_amt' =>0,
        'amountpass' =>0,
        'invoice_status' =>0,
        
    );
    $this->db->where('invoice_no',$id);
    $result = $this->db->update('actualexpense',$data);
 }
 }else{
    $this->db->where($colum,$id);
    $result = $this->db->delete($table);
   
}
return $result;
            
}
function geteditallatandance($supplier,$project,$sdate,$todate,$invoice){
    $result=array();

    $this->db->select('peopleattdance.*,actualschedual.date,peopleattdance.extrahour,peopleattdance.id,peopleattdance.invoice_status,peopleattdance.invoice_no');    
    $this->db->from('peopleattdance');
    $this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
    //$this->db->join('invoice_entry', 'invoice_entry.id = peopleattdance.invoice_no');
    $this->db->where('actualschedual.date >=', $sdate);
    $this->db->where('actualschedual.date <=', $todate);
    $this->db->where('actualschedual.projectid',$project);
    $this->db->where('peopleattdance.peopleid',$supplier);
    $this->db->where('peopleattdance.invoice_status',1);
    $this->db->where('peopleattdance.isdublicate',0);
    $this->db->where('peopleattdance.invoice_no',$invoice);
    $this->db->order_by('actualschedual.date','asc');
     $hasil=$this->db->get();
  //  echo $this->db->last_query();
     if($hasil->num_rows()>0){
         foreach($hasil->result_array() as $getday){
            $date=$getday['date'];
            $id=$getday['id'];
            $extrahour=$getday['extrahour'];
            $invoice_status=$getday['invoice_status'];
            $invoice_no=$getday['invoice_no'];
            $passedamt=$getday['passedamt'];
            $balanceamt=$getday['balanceamt'];
            $rate=$getday['perdayrate'];
            $overtime=$getday['overtimerate'];

            /*$this->db->select('rate as rate,overtime as overtime,unitofmeasurement.name as unitname');    
            $this->db->from('lis_artist');
            $this->db->join('unitofmeasurement', 'unitofmeasurement.id = lis_artist.perunit');
            $this->db->where('lis_artist.proid', $project);
            $this->db->where('lis_artist.pid',$supplier);
           // $this->db->where('lis_artist.perunit','1');
            $hasil1=$this->db->get();
            if($hasil1->num_rows()>0){
              foreach ($hasil1->result_array()as $listdata){
               // $rate=$listdata['rate'];
                //$overtime=$listdata['overtime'];
                $unitname=$listdata['unitname'];
              }
              
            }else{
               // $rate=0;
                //$overtime=0;
            }*/
            if($extrahour==""){
                $extrahour=0;
            }
            if($rate==0){
                $rate=0;
            }

            $result[]=array(
                'date'=>$date,
                'extrahour'=>$extrahour,
                'rate'=>$rate,
                'overtime'=>$overtime,
               // 'unitname'=>$unitname,
                'id'=>$id,
                'invoice_status'=>$invoice_status,
                'invoice_no'=>$invoice_no,
                'balanceamt'=>$balanceamt,
                'passedamt'=>$passedamt,
            );

         }
         return $result;

}
}
function getdocument($proid){
    $this->db->select('*');    
    $this->db->from('projectdocument');
    $this->db->where('proid',$proid);
    $hasil1=$this->db->get(); 
    return $hasil1->result();
}
function checkinvoicegenerate($project,$supplier,$date2){
    $this->db->select('*');    
    $this->db->from('invoice_entry');
    $this->db->where('projectid',$project);
    $this->db->where('supplierid',$supplier);
    $this->db->where('suppli_invoice_date',$date2);
    $hasil1=$this->db->get(); 

    if($hasil1->num_rows()>0){
        return '100';
    }else{
        return '0';
    }
}
function fullypaid($id){
    $this->db->select('*');    
    $this->db->from('invoice_entry');
    $this->db->where('id',$id);
    $this->db->where('remain_status','Fullypaid');
    $hasil1=$this->db->get(); 
    if($hasil1->num_rows()>0){
        return '100';
    }else{
        return '0';
    }
}
function getdocument_data($project,$supplier,$people_type){
       
    if($people_type !="5"){
        $this->db->select('attachment');    
        $this->db->from('lis_artist');
        $this->db->where('proid',$project);
        $this->db->where('pid',$supplier);
        $hasil1=$this->db->get(); 
        return $hasil1->result();
    }else{
        $this->db->select('filename');    
        $this->db->from('suppilerdocument');
        $this->db->where('sid',$supplier);
        $hasil1=$this->db->get(); 
        return $hasil1->result(); 
    }
   
}
function getpaymentinfo($supplier){
    $this->db->select('*');    
    $this->db->from('payment_entry');
    $this->db->where('supplier',$supplier);
    $hasil1=$this->db->get(); 
    return $hasil1->result(); 
}
function getdocument_data1($id){
    $this->db->select('id')->from('invoice_entry');
    $subQuery =  $this->db->get_compiled_select();

    $this->db->select('*');    
    $this->db->from('invoiceattachment');
    $this->db->where("invoiceid IN ($subQuery)", NULL, FALSE);
    $hasil1=$this->db->get(); 
    return $hasil1->result(); 
}
function getinvoiceno($inviceno,$supplier){
    $this->db->select('*');    
    $this->db->from('invoice_entry');
    $this->db->where("invoiceno",$inviceno);
    $this->db->where("supplierid",$supplier);
    $hasil1=$this->db->get(); 
    if($hasil1->num_rows()>0){
        return '100';
    }else{
        return '0';
    }
    //return $hasil1->result();
}
function getadmin_staffdata($supplier){
    $this->db->select('rate_per_month');    
    $this->db->from('people_master');
    $this->db->where('id',$supplier);
    $hasil1=$this->db->get(); 
    return $hasil1->result(); 
}
function getepisodicstaff_data($supplier,$project){
 $this->db->select('*');    
$this->db->from('lis_artist');
$this->db->where('pid',$supplier);
$this->db->where('proid',$project);
//$this->db->group_by('pid');
$hasil=$this->db->get();
return $hasil->result();
}

function getbillreportdata($project,$s_date,$peopletype,$fromdate,$todate,$day){
   if($peopletype=="people"){
        $result=array();

    $this->db->select('*,unitofmeasurement.name as unit,people_master.name as peoplename');    
    $this->db->from('lis_artist');
    $this->db->join('unitofmeasurement', 'unitofmeasurement.id = lis_artist.perunit');
    $this->db->join('people_master', 'people_master.id = lis_artist.pid');
    $this->db->where('proid',$project);
    $this->db->where('type','artist');
    $this->db->or_where('type','production');
   $hasil=$this->db->get();
   if($hasil->num_rows() >0){
        foreach($hasil->result_array() as $peopledata){
            $type=$peopledata['type'];
            $peolpleid=$peopledata['pid'];
            $unitname=$peopledata['unit'];
            $peoplename=$peopledata['peoplename'];
            $rate=$peopledata['rate'];
            $overtime=$peopledata['overtime'];
            $perunit=$peopledata['perunit'];
            $actualamount=0;
            if($perunit=="2"){
                $actualamount=$rate;
            }
           
           $invoiceamt=0;
           $balanceamt=0;

           

            if($peolpleid >0){

                $this->db->select('peopleattdance.*,actualschedual.date,peopleattdance.extrahour,peopleattdance.id');    
                $this->db->from('peopleattdance');
                $this->db->join('actualschedual','actualschedual.id = peopleattdance.aid');
                $this->db->where('actualschedual.date >=', $fromdate);
                $this->db->where('actualschedual.date <=', $todate);
                $this->db->where('actualschedual.projectid',$project);
                $this->db->where('peopleattdance.peopleid',$peolpleid);
                $this->db->group_by('actualschedual.date');
                $hasil2=$this->db->get();
                if($hasil2->num_rows() >0){
                        foreach($hasil2->result_array() as $actaldata){
                                    $extrahour=$actaldata['extrahour'];
                                    $overtimerate=0;
                                   if($perunit=="2"){
                                    if($extrahour >0){
                                        $overtimerate= $overtime * $extrahour;
                                    }
                                    $actualamount=$overtimerate+$actualamount;
                                   }else{
                                   
                                    if($extrahour >0){
                                        $overtimerate= $overtime * $extrahour;
                                    }
                                         $dayamt=$rate * 1;
                                
                                $actualamount=$dayamt+$overtimerate+$actualamount;
                                   }
                        }
                }

                    $this->db->select('sum(grossamt) as invoiceamt');    
                    $this->db->from('invoice_entry');
                    $this->db->where('supplierid',$peolpleid);
                    $this->db->where('projectid',$project);
                    $this->db->where('suppli_invoice_date',$s_date);
                    $hasil3=$this->db->get();
                    if($hasil3->num_rows()>0){
                        foreach($hasil3->result_array() as $invoicedata){
                            $invoiceamt=$invoicedata['invoiceamt'];
                        }
                    }else{
                        $invoiceamt=0; 
                    }
               
            }

            $balanceamt=$actualamount-$invoiceamt;

            $result[]=array(
                'peopleid'=>$peolpleid,
                'unitname'=>$unitname,
                'peoplename'=>$peoplename,
                'actualamount'=>$actualamount,
                'invoiceamt'=>$invoiceamt,
                'balanceamt'=>$balanceamt,
                'type'=>$type,
            );
           
        }
   }
    return $result;
}else if($peopletype=="supplier") {

        $this->db->select('*,suppiler_category.description,suppiler_master.id');    
        $this->db->from('suppiler_master');
        $this->db->join('suppiler_category','suppiler_category.id = suppiler_master.category');
	    $hasil=$this->db->get();
        if($hasil->num_rows()>0){
            foreach($hasil->result_array() as $data){
              $id=$data['id'];
              $companyname=$data['companyname'];

              
              $description=$data['description'];
                $this->db->select('id');    
                $this->db->from('currentmaterial_master');
                $this->db->where('sid',$id);
                $this->db->where('proid',$project);
                $hasil1=$this->db->get();
                if($hasil1->num_rows()>0){
                  $supplierid=$id;
                    $invoiceamt=0;
                    $actalamt=0;
                  if($supplierid >0){
                    $this->db->select('*,actualschedual.date,expenses_master.name as expensetype,actualexpense.id,sum(qty * rate) as sumdata');    
                    $this->db->from('actualexpense');
                    $this->db->join('actualschedual', 'actualschedual.id = actualexpense.aid');
                    $this->db->join('expenses_master','expenses_master.id = actualexpense.expenseid');
                    $this->db->where('actualschedual.projectid',$project);
                    $this->db->where('actualschedual.date >=', $fromdate);
                    $this->db->where('actualschedual.date <=', $todate);
                    $this->db->where('actualexpense.supplerid',$supplierid);
                    $this->db->order_by('actualschedual.date','asc');
                    $hasil5=$this->db->get();
                    if($hasil5->num_rows() > 0){
                            foreach($hasil5->result_array() as $supplerdata){
                                $rate=$supplerdata['rate'];
                                $qty=$supplerdata['qty'];
                                $sum=$supplerdata['sumdata'];
                               if($sum >0){
                                 $actalamt=$sum+$actalamt;
                               }
                               $actalamt=round($actalamt);
                            }
                    }

                    $this->db->select('sum(grossamt) as invoiceamt');    
                    $this->db->from('invoice_entry');
                    $this->db->where('supplierid',$supplierid);
                    $this->db->where('projectid',$project);
                    $this->db->where('suppli_invoice_date',$s_date);
                    $hasil3=$this->db->get();
                    if($hasil3->num_rows()>0){
                        foreach($hasil3->result_array() as $invoicedata){
                            $invoiceamt=$invoicedata['invoiceamt'];
                        }
                    }else{
                        $invoiceamt=0; 
                    }
                  }
                    
                  $balanceamt=$actalamt-$invoiceamt;

              $result[]=array(
                'peopleid'=>$supplierid,
                'unitname'=>'N/A',
                'peoplename'=>$companyname,
                'actualamount'=>$actalamt,
                'invoiceamt'=>$invoiceamt,
                'balanceamt'=>$balanceamt,
                'type'=>$description,
            );
        
                }

            }
}
return $result;
}

}
}