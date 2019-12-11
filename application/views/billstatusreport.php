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
						
							
							
					<div class="panel-body ">
						<div class="tab-content">
<!--------------------------------------------------peoplemaster tab--------------------------------------------------------------------->
								<div class="tab-pane fade active in tab-pane" id="peoplemaster">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>Bill Status Report</b>
									</div>
									<br>
									<form id="charectermaster_form" name="charectermaster_form"></form>
									
									<div class="col-sm-12" >
										<div class="col-sm-3" >
											<div class="form-group">
												<label class="control-label"> Show Name:*</label>
                                                <select  form="charectermaster_form"class="form-control input-sm project_name select2" id="project" name="project" required >
                                                            <option selected disabled >Select</option>
                                                            <option value="1" >Option 1</option>
                                                            <option value="2" >Option 2</option>
                                                            
                                                        </select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
										
                                            <label class="control-label"> People / Supplier </label>
												<br>
													<input type="radio" form="charectermaster_form" name="peopletype"  id="people" value="people" required>

													<span class="custom-radio"></span>
													 People  &nbsp;
												
												
												
													<input type="radio" form="charectermaster_form" name="peopletype"   id="supplier" value="supplier" >
													<span class="custom-radio "></span>
													Supplier
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-3" >
											<div class="form-group">
											<label class="control-label">For the Month*</label>
											<div class="input-group  doj"> 
												        <input type="text" form="charectermaster_form" class="form-control input-sm placeholdesize date1 datepicker s_date" id="s_date" name="s_date" required>
												        <div class="input-group-addon">
													        <span class="fa fa-calender"></span>
												        </div>
											        </div>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-2" >
											<div class="form-group">
                                                <br>
											&nbsp;	&nbsp;	<button type="submit" form="charectermaster_form" class="btn btn-sm btn-success btn-sm pull-right">Generate</button>
												</div><!-- /form-group -->
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
									
										
							
							

						</div>


							
<!-----------------------------------------------------------------document tab end--------------------------------------->						

								
				</div><!--tab content-->
				</div><!--panel-body-->
				
						</div><!-- /panel -->
						
					</div><!-- /.col -->
                </div>
				<div class="col-lg-12">
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
	<script src="<?php echo base_url(); ?>assets/js/myjs/billstatusreport.js"></script>
	
    
	<script>$('#status').bootstrapToggle('on');	</script>	
    <script>
$('.date').datepicker({
           'todayHighlight':true,
       });
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
</script>

    
  </body>
</html>
