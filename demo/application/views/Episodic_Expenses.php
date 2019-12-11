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
							
							
							
					<div class="panel-body formhideshow">
						<div class="tab-content">

								<div class="tab-pane fade active in tab-pane" id="peoplemaster">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>Monthly Episodic Expenses Entry</b>
									</div>
									<br>
									<form id="charectermaster_form" name="charectermaster_form"></form>
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Project*</label>
												<select  form="charectermaster_form" class="form-control input-sm project" id="project" name="project" required>
															<option selected disabled >Select</option>
															<option value="1">project1</option>
															<option value="2">project2</option>
															<option value="3">project3</option>
														</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Month*</label>
											<select  form="charectermaster_form" class="form-control input-sm project" id="month" name="month" required>
															<option selected disabled >Select</option>
															<option value="1">January</option>
															<option value="2">February</option>
															<option value="3">March</option>
															<option value="4">April</option>
															<option value="5">May</option>
															<option value="6">June</option>
															<option value="7">July</option>
															<option value="8">August</option>
															<option value="9">September</option>
															<option value="10">Octomber</option>
															<option value="11">November</option>
															<option value="12">December</option>
														</select>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Year*</label>
											<select  form="charectermaster_form" class="form-control input-sm location" id="year" name="year" required>
															<option selected disabled >Select</option>
															<option value="1">2019</option>
															<option value="2">2020</option>
															<option value="3">2021</option>
														</select>
												</div><!-- /form-group -->
										</div>
									</div>
										
									
									<br>
									<div class="col-sm-12" >
										
										<div class="form-group">
										
											<table id="scene_wise" class="table table-stripe" form="charectermaster_form">
											<thead>
											<tr>
											<th>Episodic Cost</th>
											<th>Person Name</th>
											<th>Qty</th>
											<th>Rate</th>
											<th>Per Unit</th>
											<th>Amount</th>
											<th>Action</th>
											
											</tr>
											<tr>
											<td>
												<select  form="charectermaster_form" class="form-control input-sm location" id="cost" name="cost" required>
															<option selected disabled >Select</option>
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
														</select>
											</td>
											<td>
												<select  form="charectermaster_form" class="form-control input-sm location" id="p_name" name="p_name" required>
															<option selected disabled >Select</option>
															<option value="1">p1</option>
															<option value="2">p2</option>
															<option value="3">p3</option>
														</select>
											</td>
											<td>
												<input type="number" form="charectermaster_form" class="form-control input-sm" id="qty" name="qty"  placeholder="Qty" required  >
											</td>
											<td>
												<input type="number" form="charectermaster_form" class="form-control input-sm" id="rate" name="rate"  placeholder="Rate" required  >
											</td>
											<td>
												<input type="text" form="charectermaster_form" class="form-control input-sm" id="per_unit" name="per_unit"  placeholder="Per Unit" required  >
											</td>
											<td>
												<input type="number" form="charectermaster_form" class="form-control input-sm" id="amount" name="amount"  placeholder="Amount" required  >
											</td>
											<td>
												<button type="submit" form="charectermaster_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											
											</tr>
											</thead>
											
											<tbody></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
				
							
							<div class="col-lg-12" >
								<input type="hidden" id="save_update" value=""	/>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left Delete_data" >Delete</button>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-active pull-right Print_data" >Copy</button>
												&nbsp;	&nbsp;	<button type="submit" form="charectermaster_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
							</div>

							<div class="col-lg-12 tablehideshow">
									<div class="table-responsive" id="show_master">
									</div>		
							</div>	
						</div>
									

								
				</div><!--tab content-->
				</div><!--panel-body-->
				
						</div><!-- /panel -->
						
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
	<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> 
    <script src="<?php echo base_url(); ?>assets/js/myjs/character_master.js"></script>
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
