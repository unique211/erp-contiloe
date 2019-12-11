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
 <link href="<?php echo base_url(); ?>assets/css/bootstrap-formhelpers.min.css" rel="stylesheet">
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
							<br>
						
							<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active"><a href="#peoplemaster" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> People Master</a></li>
									<li class="tabfont doc_tab"><a href="#document_tab" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Document</a></li>
									
								</ul>
							</div>
							
					<div class="panel-body formhideshow">
						<div class="tab-content">
<!--------------------------------------------------peoplemaster tab--------------------------------------------------------------------->
								<div class="tab-pane fade active in tab-pane" id="peoplemaster">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>People Master</b>
									</div>
									<br>
									<form id="charectermaster_form" name="charectermaster_form"></form>
									
									<div class="col-sm-12" >
										<div class="col-sm-3" >
											<div class="form-group">
												<label class="control-label">Name*</label>
												<input type="text" form="charectermaster_form" class="form-control input-sm" id="name" name="name"  placeholder="Name" required  >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">People Type*</label>
											<select  form="charectermaster_form" class="form-control select2 input-sm people" id="peopletype" name="peopletype" required>
															
														</select>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">Mobile1</label>
											<input type="number" form="charectermaster_form" class="form-control input-sm" id="mobile1" name="mobile1" pattern="[0-9]{10}"  placeholder="Mobile No."   >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">Mobile2</label>
											<input type="number" form="charectermaster_form" class="form-control input-sm" id="mobile2" name="mobile2"  placeholder="Mobile No."   >
												</div><!-- /form-group -->
										</div>
									</div>

									<div class="col-sm-12" >
										
										<div class="col-sm-3" >
											<div class="form-group">
												<label class="control-label">Email</label>
												<input type="email" form="charectermaster_form" class="form-control input-sm" id="email" name="email"  placeholder="Email"  >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">GST No</label>
											<input type="text" form="charectermaster_form" class="form-control input-sm" id="gst" name="gst"  placeholder="GST No" >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">PAN No</label>
											<input type="text" form="charectermaster_form" class="form-control input-sm" id="pan" name="pan"  placeholder="PAN No" >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">Address</label>
											<textarea rows="3" cols="50" form="charectermaster_form" class="form-control input-sm" id="address" name="address" placeholder="Address"></textarea>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
												<label class="control-label">Remark</label>
														<textarea rows="3" cols="50" form="charectermaster_form" class="form-control input-sm" id="remark" name="remark" placeholder="Remark"></textarea>
																</label>											
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" id="rpm" >
											<div class="form-group">
											<label class="control-label">Rate Per Month</label>
												<input type="number" form="charectermaster_form" class="form-control input-sm" id="rate_month" name="rate_month"  placeholder="Rate Per Month" >
											</div><!-- /form-group--> 
										</div>
										<div class="col-sm-3" id="owh" >
											<div class="form-group">
											<label class="control-label">Official Working Hour</label>
												<!--<input type="time" form="charectermaster_form" class="form-control input-sm without_ampm" id="working_hour" name="working_hour"  placeholder="Official Working Hour" >-->
												<div class="bfh-timepicker" id="working_hour" data-align="right"></div>
											</div><!-- /form-group--> 
										</div> 
									</div>
									
								<!--	<div class="col-sm-12" >
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">Overtime Rate/Hour</label>
											<input type="text" form="charectermaster_form" class="form-control input-sm" id="overtime" name="overtime"  placeholder="Over Time"  >
												</div><!-- /form-group 
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
												<label class="control-label">Remark</label>
														<textarea rows="3" cols="50" form="charectermaster_form" class="form-control input-sm" id="remark" name="remark" placeholder="Remark"></textarea>
																</label>											
											</div><!-- /form-group 
										</div>
										<div class="col-sm-3">
											<div class="form-group">
											<label class="control-label">Current Rate</label>
											<input type="text" form="charectermaster_form" class="form-control input-sm" id="rate" name="rate" value="0"  placeholder="Cuttent Rate"  >
												</div><!-- /form-group 
										</div>
										
									</div> -->
									
										
							
							<div class="col-lg-12" >
								<input type="hidden" id="save_update" value=""	/>
							
												&nbsp;	&nbsp;	<button type="submit" form="charectermaster_form" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
							</div>

						</div>
<!-----------------------------------------------------------------peoplemaster tab end--------------------------------------->									
<!--------------------------------------------------------------------document tab start---------------------------------------------->						
						<div class="tab-pane fade" id="document_tab">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Document</b>
											
		
								</div>
								<br>
									<div class="col-sm-12" >
										
										<div class="form-group">
									<form id="document_form" name="document_form">
											<table id="project_tab" class="table table-stripe" form="document_form">
											<thead>
											<tr>
											<th>Type of Document</th>
											<th>Description</th>
											<th>Filename</th>
											<th>Action</th>
											</tr>
											<tr>
											<td>
											<select   class="form-control input-sm type_document select2" id="type_document" name="type_document" required>
														<option selected disabled value="">Select</option>
														<option value="1">Agreement</option>
														<option value="2">GST Certificate</option>
														<option value="3">PAN Number</option>
													</select>
											</td>
											<td>
											<input type="text" class="form-control input-sm" id="description" name="description"  placeholder="Description">
											</td>
											<td>
											<div id="add_file">
											<input type="file"  class="" id="docupload" name="docupload" required>
											</div>
											<input type="hidden" id="file_hidden" value="">
											<div id="msg"></div>
											</td>
											<td>
											<button type="submit"  class="btn btn-sm btn-success btn-sm "><i class="fa fa-plus"></i></button>
											</td>
											</tr>
											</thead>
											
											<tbody id="projectdoc"></tbody>
											</table>
</form>
										</div><!-- /form-group -->
										<div class="col-lg-12" >
											<input type="hidden" id="doc_save_update" value=""	/>
											<input type="hidden" id="doc_row_id" value="0"/>
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button>
											&nbsp;	&nbsp;	<button type="button"	id="save"  class="btn btn-sm btn-success btn-sm pull-right">Save</button>
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
	<script src="<?php echo base_url(); ?>assets/js/bootstrap-formhelpers.min.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> 
	<script src="<?php echo base_url(); ?>assets/js/AjaxFileUpload.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/myjs/docupload.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/myjs/people_master.js"></script>
	
    
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
