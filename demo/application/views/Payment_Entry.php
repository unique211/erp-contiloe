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
            	<div class="padding-md">
                	<div class="row">
						<div class="col-md-12">
							<div class="panel panel-default">
								<div class="panel-heading">
									<b><?php echo $title1 ?></b>
									<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow" id="btninadd"><i class="fa fa-plus"></i>  Add New</button>	
								</div>
								<div class="panel-body formhideshow">
									<div class="tab-content">
										<div class="tab-pane fade active in tab-pane" id="peoplemaster">
											<form id="charectermaster_form" name="charectermaster_form"></form>
											<div class="col-sm-12" >
											<div class="col-sm-4" >
													<div class="form-group">
														<label class="control-label">Entry No.</label>
														<input type="text" form="charectermaster_form" class="form-control input-sm" id="entryno" name="entryno"  placeholder="Entry No."  >
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-4" >
													<div class="form-group">
														<label class="control-label">Vendor Type*</label>
														<select  form="charectermaster_form" class="form-control select2 input-sm peoplertype" id="peopletype" name="peopletype" >
															<option selected disabled >Select</option>
															<option value="1">Artist</option>
															<option value="2">Production</option>
															<option value="3">Episodic</option>
															<option value="3">Admin</option>
															<option value="3">SupplierName</option>
														</select>
													</div><!-- /form-group -->
												</div>
												
												<div class="col-sm-4" >
													<div class="form-group">
														<label class="control-label">Supplier</label>
														<select  form="charectermaster_form" class="form-control select2 input-sm supplier" id="supplier" name="supplier" >
															<option selected disabled >Select</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
														</select>
													</div><!-- /form-group -->
												</div>
											</div>
											<div class="col-sm-12" >
												<div class="col-sm-4" >
													<div class="form-group">
														<label class="control-label">Date of Payment</label>
														<div class="input-group date doj" data-provide="datepicker">
												        <input type="text" class="form-control input-sm placeholdesize datepicker" id="d_payment" name="d_payment" >
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-4" >
													<div class="form-group">
														<label class="control-label">Paid Via</label>
														<select  form="charectermaster_form" class="form-control input-sm project" id="paid" name="paid" >
															<option selected disabled >Select</option>
															<option value="1">Cash</option>
															<option value="2">Cheque</option>
															<option value="3">Online</option>
														</select>
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-4" >
													<div class="form-group">
														<label class="control-label">Payment Refrence</label>
														<input type="text" form="charectermaster_form" class="form-control input-sm" id="refrence" name="refrence"  placeholder="Payment Refrence"   >
													</div><!-- /form-group -->
												</div>
											</div>
											<div class="col-sm-12">
                                               	<div class="col-sm-2">
                                                   	<label class="control-label" style="text-align:right;"></label>
                                               	</div>
                                               	<div class="col-sm-3">
                                                   	<label class="control-label" style="text-align:left;border-bottom:2px solid;width:100%;">Description</label>
                                               	</div>
                                               	<div class="col-sm-4">
                                                   	<label class="control-label" style="text-align:left;border-bottom:2px solid;width:100%;">Amount</label>
												</div>
												<div class="col-sm-3">
                                                   	<label class="control-label" style="text-align:right;"></label>
                                               	</div>
                                        	</div>
											<br>            
											<br>
											<div class="col-sm-12">
												<br>
											</div>
											<div class="col-sm-12" >
												<div class="col-sm-2" >
													<label class="control-label">Amount Paid</label>
												</div>
												<div class="col-sm-3">
												<input type="text" form="charectermaster_form" class="form-control input-sm" id="amtdes" name="amtdes">
												</div>
												<div class="col-sm-4" >
													<input type="number"  style="text-align:right;"  form="charectermaster_form" class="form-control input-sm getfinalamt" id="amount_paid" name="amount_paid"  placeholder="Amount Paid" value="0"   >
												</div>
												<div class="col-sm-3">
												<!--	<textarea rows="1" cols="50" form="charectermaster_form" class="form-control input-sm" id="remarks" name="remarks" placeholder="Remarks"></textarea>-->
														<!-- <input type="text" name="remark" id="remark" class="form-control input-sm" placeholder="Remarks"/> -->
												</div>
											</div>
											<div class="col-sm-12">
												<br>
											</div>
											<div class="col-sm-12" >
												<div class="col-sm-2" >
													<label class="control-label">Deduction</label>
												</div>
												<div class="col-sm-3" >
													<input type="text" form="charectermaster_form" class="form-control input-sm" id="deductiondes1" name="deductiondes1"     >
												</div>
												<div class="col-sm-4" >
													<input type="number" style="text-align:right;" form="charectermaster_form" class="form-control input-sm getfinalamt" id="deduction1" name="deduction1" value="0"  placeholder="Deduction"   >
												</div>	
												<div class="col-sm-3"></div>
											</div>
											<div class="col-sm-12">
												<br>
											</div>
											<div class="col-sm-12" >
												<div class="col-sm-2" >
													<label class="control-label">Deduction</label>
												</div>		
												<div class="col-sm-3" >
												<input type="text" form="charectermaster_form" class="form-control input-sm" id="deductiondes2" name="deductiondes2">
												</div>
												<div class="col-sm-4" >
													<input type="number" form="charectermaster_form" class="form-control input-sm getfinalamt" id="deduction2" name="deduction2" style="text-align:right;" placeholder="Deduction" value="0"   >
												</div>	
												<div class="col-sm-3">
												</div>
											</div>
											<div class="col-sm-12">
												<br>
											</div>
											<div class="col-sm-12" >
												<div class="col-sm-2" >
													<label class="control-label">Deduction</label>
												</div>
												<div class="col-sm-3" >
												<input type="text" form="charectermaster_form" class="form-control input-sm" id="deductiondes3" name="deductiondes3">
												</div>
												<div class="col-sm-4" >
													<input type="number" form="charectermaster_form" class="form-control input-sm getfinalamt" id="deduction3" name="deduction3" style="text-align:right;"   placeholder="Deduction" value="0"   >
												</div>	
												<div class="col-sm-3"></div>
											</div>
											<div class="col-sm-12">
												<br>
											</div>
											<div class="col-sm-12" >
												<div class="col-sm-2">
													<label class="control-label">Final Payment</label>
												</div>
												<div class="col-sm-3" >
												</div>
												<div class="col-sm-4" >
													<input type="number"  style="text-align:right;"  form="charectermaster_form" class="form-control input-sm" id="netamount" name="netamount"  placeholder="Final Payment"   >
												</div>	
												<div class="col-sm-3"></div>
											</div>
											<br>
											<div class="col-sm-12">
												<br>
											</div>
											<div class="col-sm-12">
												<!--<input type="button" value="Fatch O/s Invoice" class="btn btn-xs btn-primary"/>-->
											<br>
											</div>
											<div class="col-sm-12">
												<br>
											</div>
											<br><br>
											<div class="col-sm-12">
										    	<div class="form-group">
											    	<table id="invoicetb" class="table table-stripe">
											        	<thead>
											            	<tr>
															<th style="display:none;">Id.</th>
                                                            	<th width="15%">Invoice No.</th>
                                                            	<th width="15%">Invoice Date</th>
                                                            	<th width="15%">For Project</th>
                                                            	<!--<th width="15%">Expence Group</th>-->
                                                            	<th  style="text-align:center;" width="10%">Invoice Amount</th>
                                                            	<th width="20%">Paid Now</th>
                                                        	</tr>
											        	</thead>
											        	<tbody id="artists">
                                                        	
                                                    	</tbody>
                                                    	<tfoot id="tfootdata" style="display:none;">
                                                        		<tr >
																<th style="display:none;"></th>
																	<td width="15%"></td>
																	<td width="15%"></td>
																<!--	<td width="15%"></td>-->
																	<td width="15%">Total Paid</td>
																	<td  ><input class="form-control input-sm" type="text" style="text-align:right;" id="totalinvoice" value="0" name="totalinvoice" disabled/></td>
																	<td ><input class="form-control input-sm" type="number" style="text-align:right;" id="totalpaid" value="0" name="totalpaid" disabled /></td>
																</tr>
                                                    	</tfoot>
                                                	</table>
                                            	</div>
                                        	</div>
											<div class="col-lg-12" >
												<input type="hidden" id="save_update" value=""	/>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left Delete_data" >Delete</button>
												&nbsp;	&nbsp;	<button type="submit" form="charectermaster_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
											</div>
												
										</div>
									</div><!--tab content-->
								</div><!--panel-body-->
							</div><!-- /panel -->
							<div class="col-lg-12 tablehideshow">
												<div class="table-responsive" id="show_master1">
												</div>		
											</div>
						</div><!-- /.col -->
                	</div>
            	</div><!-- /.padding-md -->
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
	<!--<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> -->
    <script src="<?php echo base_url(); ?>assets/js/myjs/payment_entry.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>
$('.date').datepicker({
           'todayHighlight':true,
       });
var date = new Date();
        date = date.toString('dd/MM/yyyy');
       $("#d_payment").val(date);
</script>

    
  </body>
</html>
