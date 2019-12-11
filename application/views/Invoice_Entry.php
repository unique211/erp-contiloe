<!DOCTYPE html>
<?php
	$title = '';
	$title1 = '';
if(isset($title_name)){
	$title = $title_name;
	$title1 = $title_name1;
}
?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php echo $title; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
<?php include "includes/headerlink.php"; ?>    
  </head>

  <body class="overflow-hidden"  >
    <!-- Overlay Div -->
    <div id="overlay" class="transparent"></div>
    

    <div id="wrapper" class="preload">
				    <?php include "includes/header.php"; ?>    
				    <?php include "includes/sidebar.php"; ?>    

        <div id="main-container">
            <div id="breadcrumb">
                <ul class="breadcrumb">
                     <li><i class="fa fa-home"></i><a href="#"> Home</a></li>
                     <li class="active"><?php echo $title1 ?></li>   
                </ul>
            </div><!-- /breadcrumb-->
            
            <div class="row">
					<div class="col-md-12">
						<div class="panel panel-default">
							<div class="panel-heading">
							<b><?php echo $title1 ?></b>
									<button type="button" id="btninadd" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i>  Add New</button>	
							</div>
							<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active invoiceentry"><a href="#invoiceEntry" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i>  Invoice Entry</a></li>
									<li class="tabfont attachment"><a href="#attachment" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Attachments</a></li>
									
								</ul>
							</div>
                            <div class="panel-body formhideshow">
                                <div class="tab-content">
                                <!------------------------- schedule_expenses start ----------------------------------------->
                                    <div class="tab-pane fade active in tab-pane" id="invoiceEntry">
                                        <div style="margin-top:0px;border-bottom:2px solid;width:100%;">
                                            <b> Invoice Entry</b>
                                        </div>
                                        <br>
                                        <form id="invoice_form" name="invoice_form" method="post"></form>
                                        <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Entry No</label>
                                                    <input form="invoice_form" type="number" name="e_no" id="e_no" class="form-control" placeholder="Entry No" disabled/>
                                                </div><!-- /form-group -->
                                               
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label class="control-label">Entry Date*</label>
                                                    <div class="input-group date doj" data-provide="datepicker">
												        <input form="invoice_form" type="text" class="form-control input-sm placeholdesize datepicker" id="e_date" name="e_date" required >
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">For Project*</label>
                                                    <select  form="invoice_form"class="form-control input-sm project_name select2 creditday" id="project" name="project" required >
                                                            <option selected disabled >Select</option>
                                                            <option value="1" >Option 1</option>
                                                            <option value="2" >Option 2</option>
                                                            
                                                        </select>
                                                        <label class="control-label" id="projecterr" style="color:red;display:none;" >Please Select Project</label>
                                                </div><!-- /form-group -->
                                            </div>
                                           
                                        </div>
                                        <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Invoice For the Month*</label>
                                                    <div class="input-group  doj"> 
												        <input form="invoice_form" type="text" class="form-control input-sm placeholdesize date1 datepicker s_date" id="s_date" name="s_date" required>
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
                                                    </div>
                                                    <label class="control-label" id="invoicedateerr" style="color:red;display:none;" >Please Select Invoice For the Month</label>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                               
                                                <div class="form-group">
                                                
                                                <label class="control-label">Vendor type*</label>
                                               <!-- <br>
                                               
                                                <input type="radio"   name="peopletype" value="1" id="artist" value="Cash" required>

                                                <span class="custom-radio"></span>
                                                Artist  &nbsp;



                                                <input type="radio"   name="peopletype" value="2"   id="production" value="Cheque" >
                                                <span class="custom-radio "></span>
                                                Production  &nbsp;

                                                <input type="radio"  name="peopletype" value="3"  id="episodic" value="Cheque" >
                                                <span class="custom-radio "></span>
                                                Episodic  &nbsp;
                                                <input type="radio"   name="peopletype" value="4"   id="admin" value="Cheque" >
                                                <span class="custom-radio "></span>
                                                Admin  &nbsp;
                                                <input type="radio"   name="peopletype" value="5"  id="supplier" value="Cheque" >
                                                <span class="custom-radio "></span>
                                                Supplier -->
                                                   <select  form="invoice_form" class="form-control input-sm select2 people_type" id="people_type" name="people_type" required>
                                                        <!--<option selected disabled >Select</option>
                                                        <option value="1">Artist</option>
                                                        <option value="2">Production</option>
                                                        <option value="3">Episodic</option>
                                                        <option value="4">Admin</option>
                                                        <option value="5">Supplier</option>-->
                                                 </select>
                                                 <label class="control-label" id="vendortypeerr" style="color:red;display:none;" >Please Select Vendor type</label>
                                            </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Supplier/People Name*</label>
                                                    <select  form="invoice_form" class="form-control input-sm select2 creditday" id="supplier" name="supplier" required>
                                                            <option selected disabled >Select</option>
                                                            <option value="1">Supplier 1</option>
                                                            <option value="2">Supplier 2</option>
                                                            <option value="3">Supplier 3</option>
                                                            <option value="4">Supplier 4</option>
                                                            <option value="5">Supplier 5</option>
                                                        </select>
                                                        <label class="control-label" id="suppliererr" style="color:red;display:none;" >Please Select Supplier/People Name</label>
                                                </div><!-- /form-group -->
                                            </div>
                                        </div>
                                        <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Gst No</label>
                                                    <input type="text" form="invoice_form" name="gstno" id="gstno" class="form-control" placeholder="Gst No" disabled/>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label class="control-label">Pan no</label>
                                                    <input type="text" form="invoice_form" name="panno" id="panno" class="form-control" placeholder="Pan No" disabled/>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Agreement Available</label>
                                                   <br>
                                                   <label class="control-label" id="linkerror"  style="color:#FF0000;display:none;">Not Avalible</label>
                                                   <a href="" class="target"  style="color:#FF0000;">Agreement Link</a>
                                                </div><!-- /form-group -->
                                            </div>
                                            </div>
                                        <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Supp. Invoice No*</label>
                                                    <input  form="invoice_form" type="text" form="invoice_form" name="s_no" id="s_no" class="form-control" placeholder="Supp. Invoice No" required/>
                                                    <label class="control-label" id="errinvoiceno" style="color:#FF0000;display:none;">Entered Invoice No Already Exists</label>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                            <div class="form-group">
                                                    <label class="control-label">Invoice Date*</label>
                                                    <div class="input-group date doj" data-provide="datepicker" >
												        <input type="text" form="invoice_form" class="form-control input-sm placeholdesize datepicker" id="invoicedate" name="invoicedate" required>
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label class="control-label">Due Date*</label>
                                                    <div class="input-group date doj" data-provide="datepicker" >
												        <input  form="invoice_form" type="text" class="form-control input-sm placeholdesize datepicker" id="d_date" name="d_date" required>
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div><!-- /form-group -->
                                            </div>
                                            </div>
                                            <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                                <div class="form-group episodic" style="display:none;">

                                                    <label class="control-label">Type of the Work*</label><br>
                                                    <select  form="invoice_form" class="form-control input-sm select2 worktype eposoidreq" id="worktype" name="worktype" style="width:100%">
                                                       
                                                 </select>
                                                </div><!-- /form-group -->
                                            </div>

                                            <div class="col-sm-4">
                                                <div class="form-group episodic" style="display:none;">
                                                    <label class="control-label">No. of Episodes in the Month*</label>
                                                    <input type="text" form="invoice_form" form="invoice_form" name="noofeposoic" id="noofeposoic" class="form-control episodicgross eposoidreq"  placeholder="No. of Episodes in the Month"/>
                                                </div><!-- /form-group -->
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group episodic" style="display:none;"  >
                                                    <label class="control-label">Rate per Episode*</label>
                                                    <input type="text" form="invoice_form" name="perepisidicrate" id="perepisidicrate" class="form-control episodicgross eposoidreq"  placeholder="Rate per Episode"/>
                                                </div><!-- /form-group -->
                                            </div>
                                            
                                           </div>
                                            <div class="col-sm-12" >
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label class="control-label">Remark</label>
                                                   <textarea id="remarkdata" form="invoice_form" class="form-control input-sm placeholdesize datepicker"></textarea>
                                                </div><!-- /form-group -->
                                            </div>
                                           </div>
                                           
                                           <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                                <div class="form-group" style="display:none;" id="paid_leaveinfo">
                                                    <label class="control-label">Paid Leave</label>
                                                    <input type="text" form="invoice_form" name="paidleave" id="paidleave" class="form-control"  placeholder="Paid leave"/>
                                                </div><!-- /form-group -->
                                            </div>  
                                            <div class="col-sm-4">
                                                
                                            </div>  
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                   <br>
                                                   <button type="" id="fetchdetails" class="btn btn-sm btn-success btn-sm pull-right">Fetch Details</button>
                                                </div><!-- /form-group -->
                                            </div>          
                                           </div>

                                          
                                          <!-- <div class="col-sm-12" >
                                            <div class="col-sm-4">
                                                <div class="form-group episodic" style="display:none;" >
                                                    <label class="control-label">Per Episodicrate</label>
                                                    <input type="text" form="invoice_form" name="perepisidicrate" id="perepisidicrate" class="form-control"  placeholder="Per Episodicrate"/>
                                                </div><!-- /form-group
                                            </div>      
                                           </div>-->

                                           <div class="col-sm-12" style="display:none;" id="paid_leaveinfotb">
										    <div class="form-group">
                                          
                                          
											    <table id="attandancetb" class="table table-stripe">
											        <thead>
                                                    <tr >
                                                        <th style="text-align:center;" colspan="3">Production Staff/Admin Staff </th>
                                                       
                                                        </tr>
                                                    
                                                    
                                                        
											        </thead>
											        <tbody id="attandancetbody">
                                                    <tr id="production_data">
                                                       
                                                       <th >Attendance Days</th>
                                                       <th><label style="text-align:right;"  class="control-label" id="attadanace">0</label></th>
                                                       <th>Days </th>
                                                      
                                                    </tr>
                                                    <tr>
                                                       
                                                       <th >Paid Leaves</th>
                                                       <th><label style="text-align:right;"  class="control-label" id="Paid_leavedata">0</label></th>
                                                       <th>Days </th>
                                                      
                                                    </tr>
                                                  
                                                    </tbody>
                                                    <tfoot>
                                                    <tr>
                                                       
                                                       <th >Total Days</th>
                                                       <th><label style="text-align:right;"  class="control-label" id="totalleave">0</label></th>
                                                       <th>Days </th>
                                                      
                                                    </tr>           
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>

                                 <div id="productionartist">
                                          
                                            <div style="margin-top:0px;border-bottom:2px solid;width:100%;">
                                                <b> For Artist / Production</b>
                                            </div>
                                            <br>
                                            <div class="col-sm-5">
                                                <div class="col-sm-10">
                                                <!--<div class="form-group">
                                                    <label class="control-label">Attendance From</label>
                                                    <div class="input-group date doj" data-provide="datepicker">
												        <input type="text" class="form-control input-sm placeholdesize datepicker" id="af_date" name="af_date">
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div>--><!-- /form-group -->
                                                </div>
                                            </div>
                                            <div class="col-sm-5"> <div class="col-sm-10">
                                                <!--<div class="form-group">
                                                    <label class="control-label">Attendance To</label>
                                                    <div class="input-group date doj" data-provide="datepicker">
												        <input type="text" class="form-control input-sm placeholdesize datepicker" id="at_date" name="at_date">
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div> --><!-- /form-group -->
                                            </div>
                                            
                                            </div>
                                            <div class="col-sm-2"> <div class="col-sm-10">
                                                <div class="form-group">
                                                <br>
                                              <!--  &nbsp;	&nbsp;	<button type="" id="getattendance" class="btn btn-sm btn-success btn-sm pull-right">Get Attendance</button>-->
                                                </div><!-- /form-group -->
                                            </div>
                                            
                                            </div>
                                        <br>
                                        <div class="col-sm-12">
										    <div class="form-group">
                                            <input type="hidden" id="list_save_update" value="">
                                            <input type="hidden" id="list_row_id" value="0">
                                          
											    <table id="actualdatatb" class="table table-stripe">
											        <thead>
											            <tr>
                                                        <th style="display:none;">Sr No</th>
                                                        <th >Date</th>
                                                        <th>Day Amount</th>
                                                        <th>Extra Hours </th>
                                                        <th>Rate</th>
                                                        <th>Extra Hrs.Amt</th>
                                                        <th>Day Total</th>
                                                        <th>Passed Amount</th>
                                                        <th>Balance</th>
                                                        </tr>
                                                        
											        </thead>
											        <tbody id="actualtbody">
                                                   <!-- <tbody>
                                                                                                            <tr>
                                                            <td>1-Apr-19</td>
                                                            <td>25000</td>
                                                            <td>2:30:00 </td>
                                                            <td>3000</td>
                                                            <td>6500</td>
                                                            <td>31500</td>
                                                            <td>25000</td>
                                                            <td>6200</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1-Apr-19</td>
                                                            <td>25000</td>
                                                            <td>2:30:00 </td>
                                                            <td>3000</td>
                                                            <td>6500</td>
                                                            <td>31500</td>
                                                            <td>25000</td>
                                                            <td>6200</td>
                                                        </tr>-->
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td></td>
                                                            <td style="display:none;"></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Gross Total</td>
                                                            <td  ><b> <label class="control-label" style="text-align:right;" id="daytotal"></label> </b></td>
                                                            <td style="text-align:right;"> <label class="control-label"  style="text-align:right;" id="passedamt"></label></td>
                                                            <td style="text-align:right;" > <label class="control-label" style="text-align:right;" id="balanceamt"></label></td>
                                                        </tr>            
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                       
                                      </div>
                                        <br>
                                        <div></div> <br>
                                       
                                      
                                        <br>
                                        <div class="col-sm-12" >
                                            <input type="hidden" id="save_episisoc">
                                            <div class="col-lg-12" >
                                                <input type="hidden" id="save_updatedata" value=""	/>
                                               
                                            </div>		
                                        </div>
                                   
                                    <!-------------End  Tab Monthly Budget Entry---------------------------->
                                    <div id="exoenseadjustment">
                                  
                                    &nbsp;	&nbsp;	<button  id="allocate" class="btn btn-sm btn-success btn-sm pull-right" style="margin-left:1%;">Allocate</button>
                                    &nbsp;	&nbsp;	<button  id="selectall" class="btn btn-sm btn-success btn-sm pull-right"  >Select All</button>


                                        <div style="margin-top:0px;border-bottom:2px solid;width:100%;">
                                            <b>Expense Adjustment</b>
                                           
								<div id="wait" style="width:100px;height:100px;position:absolute;top:;left:45%;padding:2px;"><img src="<?php echo base_url('assets/img/loader.gif'); ?>" width="100" height="100" /><br><center><h5>Please Wait...</h5></center></div>
                                        </div><br>
                                        <div class="row">

                                     <!--   <div class="col-sm-12" >
                                            <div class="col-sm-12 form-group">
                                                <div class="col-sm-3">
                                                <label class="control-label" style="text-align:right;">From Date</label>
                                                <div class="input-group date doj" data-provide="datepicker">
												        <input type="text" class="form-control input-sm placeholdesize datepicker" id="fromdate" name="fromdate">
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div>
                                                <div class="col-sm-3">
                                                <label class="control-label" style="text-align:right;">To Date</label>
                                                <div class="input-group date doj" data-provide="datepicker">
												        <input type="text" class="form-control input-sm placeholdesize datepicker" id="todate" name="todate">
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <br>
                                                    
                                                <button  id="filter" class="btn btn-sm btn-success btn-sm" style="margin-top:2%;" >Filter</button>
                                                </div>
                                            </div>
                                        </div>
                                        <br> -->
                                        <div class="col-sm-12">
										    <div class="form-group">
											    <table id="suppliertb" class="table-responsive">
											        <thead>
											            <tr>
                                                            <th width="10%">Date</th>
                                                            <th style="display:none;">Exid</th>
                                                            <th style="display:none;">Expenseid</th>
                                                            <th width="10%">Expense Type</th>
                                                            <th width="20%">Narration</th>
                                                            <th width="10%" style="text-align:right;">Refrence No.</th>
                                                            <th width="10%" style="text-align:right;">Expense amount</th>
                                                            <th width="10%"  style="text-align:right;">Amount Passed</th>
                                                            <th width="10%"  style="text-align:right;">Balance Amount</th>
                                                            <th width="10%">Select One or Many</th>
                                                        </tr>
                                                        
											        </thead>
											        <tbody id="suppliertbody">
                                              <!--   <tr>
                                                            <td>02/07/19</td>
                                                            <td style="display:none;"></td>
                                                            <td style="display:none;"></td>
                                                            <td>Transport</td>
                                                            <td>Tempo Trip</td>
                                                            <td style="text-align:right;">323984</td>
                                                            <td style="text-align:right;">1500</td>
                                                            <td style="text-align:right;">1300</td>
                                                            <td style="text-align:right;">1200</td>
                                                            <td style="text-align:center;">
                                                                <input type="checkbox" name="select[]" value="0"><br>
                                                               
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>02/09/19</td>
                                                            <td style="display:none;"></td>
                                                            <td style="display:none;"></td>
                                                            <td>Transport</td>
                                                            <td>Tempo Trip</td>
                                                            <td style="text-align:right;">3498493</td>
                                                            <td style="text-align:right;">1400</td>
                                                            <td style="text-align:right;">1200</td>
                                                            <td style="text-align:right;">1200</td>
                                                            <td  style="text-align:center;">
                                                                <input type="checkbox" name="select[]" value="0"><br>
                                                               
                                                           
                                                            </td>
                                                        </tr> -->
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td></td>
                                                            <td style="display:none;"></td>
                                                            <td style="display:none;"></td>
                                                            <td></td>
                                                            <td></td>
                                                           
                                                            <td  style="text-align:right;"><b>Total Adjust</b></td>
                                                           <td style="text-align:right;"> <label   class="control-label" id="totalacamt" style="text-align:right;"></label></td>
                                                            <td style="text-align:right;"><label  class="control-label" id="totalpassedamt" style="text-align:right;"></label></td>
                                                            <td style="text-align:right;"><label  class="control-label" id="totalbalance" style="text-align:right;"></label></td>
                                                            <!-- <td style="text-align:right;"> <label   class="control-label" >2900</label></td>
                                                            <td style="text-align:right;"><label  class="control-label"  >2500</label></td>
                                                            <td style="text-align:right;"><label  class="control-label"  >2400</label></td>-->
                                                            <td></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <br>
                                       	</div>
                                           </div>
                                           <div class="row">
                                       
                                        <!-- <div style="margin-top:0px;border-bottom:2px solid;width:100%;">
                                            </div> -->
                                        <div class="col-sm-12" >
                                            <div class="col-sm-12 form-group">
                                                <div class="col-sm-6">
                                                   
                                                </div>
                                                <div class="col-sm-3">
                                                <label class="control-label" style="text-align:right;">GrossAmount</label>
                                                </div>
                                                <div class="col-sm-3">
                                                    <input type="number" class="form-control totalinvoice grosamtdata" name="grossamt" style="text-align:right;" value="0" id="grossamt" placeholder=""/>
                                                    <label class="control-label" id="lblgrossamterror"  style="color:#FF0000;display:none;">Special Character Not Allowed</label>
                                                </div>
                                            </div>
                                        </div>
                                        <br> 
                                        <div class="col-sm-12" >
                                            <div class="col-sm-12 form-group">
                                                <div class="col-sm-6">
                                                   
                                                </div>
                                                <div class="col-sm-3">
                                                <label class="control-label" style="text-align:right;">SGST</label>
                                                </div>
                                                <div class="col-sm-3">
                                                    <input type="number" class="form-control totalinvoice" name="" style="text-align:right;" value="0" id="sgstamt" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <br> 
                                        <div class="col-sm-12" >
                                            <div class="col-sm-12 form-group">
                                                <div class="col-sm-6">
                                                   
                                                </div>
                                                <div class="col-sm-3">
                                                <label class="control-label" style="text-align:right;">CGST</label>
                                                </div>
                                                <div class="col-sm-3">
                                                    <input type="number" class="form-control totalinvoice" name="" style="text-align:right;" value="0" id="cgstamt" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <br> 
                                        <div class="col-sm-12" >
                                            <div class="col-sm-12 form-group">
                                                <div class="col-sm-6">
                                                  
                                                </div>
                                                <div class="col-sm-3">
                                                <label class="control-label totalinvoice" style="text-align:right;">IGST</label>
                                                </div>
                                                <div class="col-sm-3">
                                                    <input type="number" class="form-control" name="" style="text-align:right;" value="0" id="igstamt" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <br> 
                                    
                                        <div class="col-md-12" >
                                            <div class="col-sm-12 form-group">
                                                <div class="col-sm-6">
                                                   
                                                </div>
                                                
                                                <div class="col-sm-3">
                                                <label class="control-label" style="text-align:right;">Invoice Amount</label>
                                                </div>
                                                <div class="col-sm-3">
                                                    <input type="number" class="form-control" name="inamt" style="text-align:right;" value="0" id="inamt" placeholder=""/>
                                                </div>
                                            </div>
                                            <br>
                                        </div>
                                        </div>
                                    <!------End Of Production Staff Budget (Monthly) Tab---------------->
                                    <div id="paymentDetails">
                                        <div style="margin-top:0px;border-bottom:2px solid;width:100%;">
                                            <b> Payment Details</b>
                                        </div>
                                        <br>
                                        <div class="col-sm-12">
										    <div class="form-group">
											    <table id="payment_tb" class="table table-stripe">
											        <thead>
											            <tr>
                                                            <th width="15%">Date of Payment</th>
                                                            <th width="15%">Paid Via</th>
                                                            <th width="15%">Cheque/Transform No.</th>
                                                            <th width="15%" style="text-align:right;">Paid Amount</th>
                                                            <th width="20%" style="text-align:right;">Deduction</th>
                                                            <th width="20%" style="text-align:right;">Net Amount</th>
                                                        </tr>
                                                        
											        </thead>
											        <tbody id="payment_tbody">
                                                      
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td width="15%"></td>
                                                            <td width="15%"></td>
                                                            <td width="15%"></td>
                                                            <td width="15%"></td>
                                                            <td style="text-align:right;" width="20%">Total Paid</td>
                                                            <td style="text-align:right;"  width="20%">  <label class="control-label" style="text-align:right;" id="payment_totalamt"></label></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-lg-12" >
                                        &nbsp;	&nbsp;	<button type="button" style="display:none;" class="btn btn-sm btn-danger pull-left delete_data">Delete</button>
                                        &nbsp;	&nbsp;	<button type="submit" form="invoice_form" id="productionsave" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
                                                &nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
                                        </div>
                                        
                                    </div>
                                    
                                    </div>
                                    <!------End Of Production Staff Budget (Monthly) Tab---------------->
                                    <div class="tab-pane fade" id="attachment">
                                        <div style="margin-top:0px;border-bottom:2px solid;width:100%;">
                                            <b> Attachments</b>
                                            <a href="#myModal" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i> Add Document</a>
                                          <!--  <button type="" name="attachment" id="attachment" class="btn btn-xs btn-success" style="float:right;"><span><i class="fa fa-plus-circle"> </i> Add Document </span></button><br>-->
                                            <br>
                                            
                                        </div>
                                        <br><div class="col-sm-12">
										    <div class="form-group">
											    <table id="documenttb" class="table table-stripe">
											        <thead>
											            <tr>
                                                        <th style="display:none;">SR</th>
                                                        <th style="display:none;">Type of DocumentID</th>
                                                            <th>Type of Document</th>
                                                           
                                                            <th>Description</th>
                                                            <th>File Name</th>
                                                            <th>Download</th>
                                                            <th>Action</th>
                                                        </tr>
											        </thead>
											        <tbody id="doc_tbody">
                                                       
                                                    </tbody>
                                                    
                                                </table>
                                            </div>
                                        </div>
                                        <div class="col-lg-12" >
                                            <input type="hidden" id="save_update" value=""/>
                                            &nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data">Delete</button>
                                            &nbsp;	&nbsp;	<button type="button" id="attachmentsave"  class="btn btn-sm btn-success btn-sm pull-right">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>			
                           </div><!-- /panel -->
                           
					</div><!-- /.col -->
					<div class="col-lg-12 tablehideshow">
						<div class="table-responsive" id="show_master">
                        </div>
					</div>
            </div><!-- /.padding-md -->
            <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Document</h4>
                            </div>
                            <div class="modal-body" style="width:100%">
                            <form id="document_data" method="post"></form>
                                <div class="col-lg-12">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Type OF Document*</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <select form="document_data" class="form-control input-sm placeholdesize" id="type_document" required>
                                                <option value="" selected disabled>--Select--</option>
                                                <option value="1">Invoice Copy</option>
                                                <option value="2">Challan Copy</option>
                                            </select> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Description</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <input type="text" form="document_data" class="form-control" id="des" name="des" placeholder="Descrption"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>File Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                        <div id="add_file">
												<input	form="document_data" class="form-control input-sm " type="file" id="docupload" name="docupload" required>
										</div>
											<input type="hidden" id="file_hidden" value="">
											<div id="msg"></div>
                                        </div>
                                    </div>
                                </div><br>
                                <br><br>
                                <br><br>
                                </div>
                                <br>  <br>  <br>  <br>
                                <div class="modal-footer">
                                    <input type="hidden" id="doc_row_id" value="0">
                                    <input type="hidden" id="doc_save_update" value="">
                                    <input type="submit" form="document_data" name="btnsave" id="btnsave" value="Save" class="btn btn-success"/>  
                                <button type="button" class="btn btn-dangar" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div><!-- /main-container -->	
        <!-- Footer
        ================================================== -->
    <?php include "includes/footer.php"; ?>    
        
        
    </div><!-- /wrapper -->

    <a href="" id="scroll-to-top" class="hidden-print"><i class="fa fa-chevron-up"></i></a>
    </div><!-- /wrapper -->
    
    <!-- Logout confirmation -->
    
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<script type="text/javascript">var baseurl = "<?php print base_url(); ?>";</script>
    <?php include "includes/footerlink.php"; ?>  
    <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/AjaxFileUpload.js"></script>  

<!--<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> -->
    <script src="<?php echo base_url(); ?>assets/js/myjs/invoiceEntry.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>

      
var date = new Date();
        date = date.toString('dd/MM/yyyy');
       $("#e_date").val(date);
       $("#invoicedate").val(date);
       $("#d_date").val(date);
       $('#at_date').val(date);
       $('#af_date').val(date);
       $('#date').val(date);
       $('#fromdate').val(date);
       $('#todate').val(date);
       
       var date = new Date();
       date = date.toString('MM/yyyy');
       $('#s_date').val(date);
       $('.s_date').datetimepicker({format:"MM/YYYY"});
       $('.date').datepicker({
          // 'todayHighlight':true,
            autoclose: true,
            todayHighlight: true,
            beforeShowDay: highlightDays,
            
       });
       $('.date').datepicker('refresh');
</script>
 

    
  </body>
</html>
