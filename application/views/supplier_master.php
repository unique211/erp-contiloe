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
									<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i>  Add New</button>	
							</div>
							
								<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="suppliermaster tabfont active"><a href="#suppliermaster" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Supplier Master</a></li>
									<li class="document_tab tabfont"><a href="#document_tab" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Document</a></li>
									
								</ul>
							</div>
							
					<div class="panel-body formhideshow">
						<div class="tab-content">
<!--------------------------------------------------suppliermaster tab--------------------------------------------------------------------->
								<div class="tab-pane fade active in tab-pane" id="suppliermaster">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>Supplier Master</b>
									</div>
									<br>
									<form id="suppliermaster_form" name="suppliermaster_form"></form>
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Company Name*</label>
												<input type="text" form="suppliermaster_form" class="form-control input-sm" id="name" name="name"  placeholder="Name" required  >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Mobile1</label>
											<input type="number" form="suppliermaster_form" class="form-control input-sm" id="mobile1" name="mobile1"   placeholder="Mobile No." maxlength="10" >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Mobile2</label>
											<input type="number" form="suppliermaster_form" class="form-control input-sm" id="mobile2"  placeholder="Mobile No."    >
												</div><!-- /form-group -->
										</div>
									</div>

									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Contact Person</label>
												<input type="text" form="suppliermaster_form" class="form-control input-sm" id="contact_person" name="contect_person"  placeholder="Contact Person"   >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Email</label>
												<input type="email" form="suppliermaster_form" class="form-control input-sm" id="email" name="email"  placeholder="Email"   >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">GST No</label>
											<input type="text" form="suppliermaster_form" class="form-control input-sm" id="gst" name="gst"  placeholder="GST No"  >
												</div><!-- /form-group -->
										</div>
									</div>
									
									<div class="col-sm-12" >
									<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">PAN No</label>
											<input type="text" form="suppliermaster_form" class="form-control input-sm" id="pan" name="pan"  placeholder="PAN No"  >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Category*</label>
												<select  form="suppliermaster_form" class="form-control select2 input-sm " id="category" name="category" required >
															<!--	<option selected disabled >Select</option>
																<option value="1">Vanity Van Supplier</option>
																<option value="2">Junior Artist Supplier</option>
																<option value="3">Food Supplier</option>
																<option value="4">Furniture Supplier</option>
																<option value="5">Light Supplier</option> -->
															</select>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Credit Days</label>
											<input type="number" form="suppliermaster_form" class="form-control input-sm" id="credit_days" name="credit_days"  placeholder="Credit Days"  >
												</div><!-- /form-group -->
										</div>
									
										
									</div>
									<div class="col-sm-12" >
									<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Address</label>
														<textarea rows="2" cols="50" form="suppliermaster_form" class="form-control input-sm" id="address" name="address" placeholder="Address"></textarea>
																</label>											
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Remark</label>
														<textarea rows="2" cols="50" form="suppliermaster_form" class="form-control input-sm" id="remark" name="remark" placeholder="Remark"></textarea>
																</label>											
											</div><!-- /form-group -->
										</div>
										
									</div>
									
									
										<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Current Material/Service Supply Agreement List</b>
										</div>
								
									<br>
									<div class="col-sm-12" >
									<form id="currentmaterial_form" name="currentmaterial_form"></form>
										<div class="form-group">
										
											<table id="supplier_tab" class="table table-stripe">
											<thead>
											<tr>
											<th width="20%">Project</th>
											<th width="20%">Expense A/c</th>
											<th width="20%">Expense Sub A/c</th>
											<th width="10%">Rate</th>
											<th>Per Unit</th>
											<th>Remarks</th>
											<th>Action</th>
											</tr>
											<tr>
											<td>
												<select  form="currentmaterial_form" class="project_name select2 form-control input-sm budget" id="project" name="project" required>
													
												</select>
											</td>
											<td>
												<select  form="currentmaterial_form" class="service form-control select2 input-sm expense_type" id="services" name="services" >
												
												</select>
											</td>
											<td>
												<select  form="currentmaterial_form" class="service form-control select2 input-sm subaccountdata" id="subaccount" name="subaccount" >
												
												</select>
											</td>
											<td>
												<input type="number" form="currentmaterial_form" class="form-control input-sm" id="rate" name="rate"  placeholder="Rate" min="0"  step="any" >
											</td>
											<td>
												<select  class="form-control input-sm select2 budget" form="currentmaterial_form"  id="perunit" name="perunit" >
													<option selected disabled >Select</option>
													<option value="1" >Per Person</option>
													<option value="2" >Per Hour</option>
													<option value="3" >Per Dish</option>	
													<option value="4" >Per Piece</option>	
												</select>
											</td>
											<td>
												<input type="text" form="currentmaterial_form" class="form-control input-sm" id="remarks" name="remarks"  placeholder="Remarks"   >
											</td>
											<td>
											<input type="hidden" id="material_save_update" value=""	/>
											<input type="hidden" id="material_row_id" value="0"/>	
											<button type="submit" form="currentmaterial_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											</tr>
											</thead>
											
											<tbody id="materialdata"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
							
							<div class="col-lg-12" >
								<input type="hidden" id="save_update" value=""	/>
											<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button> -->
												&nbsp;	&nbsp;	<button type="submit" id="btnsave" form="suppliermaster_form" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
							</div>

						<!--	<div class="col-lg-12 tablehideshow">
									<div class="table-responsive" id="show_master">
									</div>		
							</div>	-->
						</div>
<!-----------------------------------------------------------------suppliermaster tab end--------------------------------------->									
<!--------------------------------------------------------------------document tab start---------------------------------------------->						
						<div class="tab-pane fade" id="document_tab">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Document</b>
								</div>
								<br>
									<div class="col-sm-12" >
									<form id="document_form" name="document_form">
										<div class="form-group">
										
											<table id="doctab" class="table table-stripe" >
											<thead>
											<tr>
											<th>Type of Document*</th>
											<th>Description</th>
											<th>Filename*</th>
											<th>Action*</th>
											</tr>
											<tr>
											<td>
											<select   class="form-control input-sm select2 type_document" id="type_document" name="type_document" required>
														<option selected disabled >Select</option>
														<option value="1">Agreement</option>
														<option value="2">GST Certificate</option>
														<option value="3">PAN Number</option>
													</select>
											</td>
											<td>
											<input type="text"  class="form-control input-sm" id="description" name="description"  placeholder="Description"   >
											</td>
											<td>
											<div id='add_file'>
											<input type="file"  class="" id="filename" name="filename" required>
											</div>
											<div id="msg"></div>
											<input type="hidden" id="file_hidden" value="">
											</td>
											<td>
											<button type="submit"  class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											</tr>
											</thead>
											
											<tbody id="docdata"></tbody>
											</table>
</form>
										</div><!-- /form-group -->
										<div class="col-lg-12" >
											
											<input type="hidden" id="doc_save_update" value=""	/>
											<input type="hidden" id="doc_row_id" value="0"/>	
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button> 
											&nbsp;	&nbsp;	<button type="button" id="docsub"  class="btn btn-sm btn-success btn-sm pull-right">Save</button>
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> 
										</div>

	
									</div>
									
								<!--	<div class="col-lg-12 tablehideshow">
												<div class="table-responsive" id="show_master">
											   </div>		
									</div>-->		
							</div>	

							
<!-----------------------------------------------------------------document tab end--------------------------------------->						

								
				</div><!--tab content-->
				</div><!--panel-body-->
				
						</div><!-- /panel -->
						
					</div><!-- /.col -->
					
                </div>
				<div class="col-lg-12 tablehideshow">
									<div class="table-responsive" id="show_master">
									</div>		
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
	<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> 
	<script src="<?php echo base_url(); ?>assets/js/AjaxFileUpload.js"></script>
	
	 <script src="<?php echo base_url(); ?>assets/js/myjs/suppiler_master.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>
$('.date').datepicker({
           'todayHighlight':true,
       });
var date = new Date();
        date = date.toString('dd/MM/yyyy');
       $("#date").val(date);
</script>

    
  </body>
</html>
