<!DOCTYPE html>
<?php
$title = '';
$title1 = '';
if (isset($title_name)) {
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

<body class="overflow-hidden">
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
								<b><?php echo "Show Wise Budget Usage"; ?></b>
								<!--	<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i>  Add New</button> -->
							</div>
							<div class="panel-body ">
								<div class="row" id="documents">
									<form id="showwisereport" name="showwisereport"></form>
									<div class="col-sm-12">
										<div class="col-sm-4">
											<label class="control-label">For Project/Show*</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<select form="showwisereport" class="form-control select2 input-sm project_name" id="project" name="project" required>
													<option selected disabled>Select</option>

												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4">
										</div>
									</div>
									<div class="col-sm-12">
										<div class="col-sm-4">
											<label class="control-label">From Month/Year*</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<select form="showwisereport" class="form-control select2 input-sm yeardata" id="frommonth" name="frommonth" required>
													<option selected disabled>Select</option>
													<option value="January">January</option>
													<option value="February">February</option>
													<option value="March">March</option>
													<option value="April">April</option>
													<option value="May">May</option>
													<option value="June">June</option>
													<option value="July">July</option>
													<option value="August">August</option>
													<option value="September">September</option>
													<option value="October">October</option>
													<option value="November">November</option>
													<option value="December">December</option>
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-3">
											<div class="form-group">

												<select form="showwisereport" class="form-control select2 input-sm yeardata" id="fromyear" name="fromyear" required>
													<option selected disabled>Select</option>
													<option value="2017">2017</option>
													<option value="2018">2018</option>
													<option value="2019">2019</option>
													<option value="2020">2020</option>
												</select>
											</div><!-- /form-group -->

										</div>

									</div>
									<div class="col-sm-12">
										<div class="col-sm-4">
											<label class="control-label">To Month/Year*</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<select form="showwisereport" class="form-control select2 input-sm yeardata" id="tomonth" name="tomonth" required>
													<option selected disabled>Select</option>
													<option value="January">January</option>
													<option value="February">February</option>
													<option value="March">March</option>
													<option value="April">April</option>
													<option value="May">May</option>
													<option value="June">June</option>
													<option value="July">July</option>
													<option value="August">August</option>
													<option value="September">September</option>
													<option value="October">October</option>
													<option value="November">November</option>
													<option value="December">December</option>
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-3">
											<div class="form-group">

												<select form="showwisereport" class="form-control select2 input-sm yeardata" id="toyear" name="toyear" required>
													<option selected disabled>Select</option>
													<option value="2017">2017</option>
													<option value="2018">2018</option>
													<option value="2019">2019</option>
													<option value="2020">2020</option>
												</select>
											</div><!-- /form-group -->

										</div>

									</div>
									<div class="col-sm-12" id="from_date">
										<div class="col-sm-4">
											<label class="control-label">From Date</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<div class="input-group date doj" data-provide="datepicker">
													<input type="text" form="showwisereport" class="form-control input-sm placeholdesize datepicker" id="fromdate" name="fromdate">
													<div class="input-group-addon">
														<span class="fa fa-calender"></span>
													</div>
												</div>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4">
										</div>
									</div>
									<div class="col-sm-12" id="to_date">
										<div class="col-sm-4">
											<label class="control-label">To Date</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<div class="input-group date doj" data-provide="datepicker">
													<input type="text" form="showwisereport" class="form-control input-sm placeholdesize datepicker" id="todate" name="todate">
													<div class="input-group-addon">
														<span class="fa fa-calender"></span>
													</div>
												</div>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4">
										</div>
									</div>
									<div class="col-sm-12">
										<div class="col-sm-4">
											<label class="control-label">No. of Episode Aired *</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<input type="text" form="showwisereport" class="form-control input-sm" id="noofepisode" required name="noofepisode">
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4">
										</div>
									</div>




									<div class="col-lg-12">


										<a class="get_exxcel pull-right" id="get_exxcel" onClick="javascript:fnExcelReport();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download`</button></a>


										<button type="submit" form="showwisereport" class="btn btn-sm btn-success btn-sm pull-right" style="margin-right: 15px;">Generate</button>
										<!--	&nbsp;	&nbsp;	<button type="submit" form="showwisereport" class="btn btn-sm btn-success btn-sm pull-right"></button>-->

									</div>
									<br>
									<br>
									<div></div>
									<div class="col-lg-12">
										<div class="get_all_data">
											<div class="row">
												<div class="form-group">
													<div class="col-lg-12">

														<div class="table-responsive">
															<table id="budgetentry" class="table table-striped" style="width:100%" ;>
																<thead>
																	<tr>
																		<th colspan="11" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000">Contiloe Pictures Pvt. Ltd.</th>

																	</tr>
																	<tr>
																		<th colspan="3" style="text-align:center;" id="reportfrommonth"></th>
																		<th colspan="2" style="text-align:center;" id="reporttonmonth"></th>
																		<th colspan="2" style="text-align:center;" id="startmonth"></th>
																		<th colspan="2" style="text-align:center;" id="endmonth"></th>
																		<th colspan="3" style="text-align:center;" id="reportproject">Show Name :</th>
																	</tr>
																	
																	<tr>
																		<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000"> Total Cost for Period</th>
																		<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000" class="grant_total"> </td>
																	</tr>
																	
																	<tr>	
																		<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000"> Average cost per Episode based on Aired</th>
																		<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000" class="aired_total"> </td>
																	</tr>
																	
																	<tr>	
																		<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000"> Average cost per Episode based on Produced</th>
																		<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000" class="produced_total"> </td>
																	</tr>
																	
																	<tr>
																		<th colspan="12" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000">Footage</th>
																	</tr>
																	<tr>
																		<th colspan="5" style="text-align:center;background-color:#1E90FF;color:#000000">Planned</th>
																		<th colspan="7" style="text-align:center;background-color:#32CD32;color:#000000">Acutal</th>
																	</tr>
																	<tr>
																		<th style="border-left:solid 2px ;"></th>
																		<th style="text-align:right;"> Shoot Days</th>
																		<th style="text-align:right;"> Per day Footage (Min & Sec</th>
																		<th style="text-align:right;">Total Footage (Min & Sec) </th>
																		<th style="text-align:right;border-right:solid 2px ;">Average Per Unit</th>
																		<th style="text-align:right;">No. of Units</th>
																		<th style="text-align:right;">Targeted Footage till date</th>
																		<th style="text-align:right;">Actual Footage (Min & Sec)</th>
																		<th> </th>
																		<th style="text-align:right;">Average Per Unit</th>
																		<th style="text-align:right;">Difference (Min & Sec)</th>
																		<th style="text-align:right;border-right:solid 2px ;">Variance %</th>
																	</tr>
																</thead>
																<tbody id="allreportentry">

																</tbody>
															</table>
														</div>

													</div>
												</div>

											</div>

					<!-- End Table Add Here    ----------->
											
                    <div class="row">
									<div class="form-group">
										<div class="col-lg-5">
										
										<div class="table-responsive">
										<table id="episodic" class="table table-" style="width:100%";>
											<thead >
												<tr>
													<th colspan="3" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000" >Actual Expenses </th>
													
												</tr>
											
												
											</thead >
											<tbody id="eposodicexpenses">
												
											</tbody>	
											</table>
														
									    </div>
										 <br>

											<br>
										</div>
										
										
										<div class="col-lg-7">

														<div class="table-responsive">
															<table id="episodic" class="table table-" style="width:100%" ;>
																<thead>
																	<tr>
																		<th colspan="5" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000">Episodes</th>

																	</tr>

																	<tr>

																		<th colspan="2" style="text-align:right;background-color:#1E90FF;color:#000000;border-left:solid 2px;"> Planned as Per Production</th>
																		<th style="text-align:right;background-color:#32CD32;color:#000000"> Produced episode</th>
																		<th style="text-align:right;;background-color:#32CD32;color:#000000">Difference</th>
																		<th style="text-align:right;border-right:solid 2px;;background-color:#32CD32;color:#000000">Variance %</th>

																	</tr>
																</thead>
																<tbody id="eposodicrecord">

																</tbody>
															</table>

														</div>
														<br>

														<br>
													</div>
										
									</div>	
											
								</div>
<!-- End Table Add Here    -----------> 											
											
											<!-- End Table Add Here    ----------->
											<div class="row">
												<div class="form-group">
													<div class="col-lg-12">

														<div class="table-responsive">
															<table id="peoplecost" class="table table-" style="width:100%" ;>
																<thead>
																	<tr>
																		<th colspan="8" style="text-align:center;background-color:#D3D3D3;font-size: 20px;color:#000000">People Cost</th>

																	</tr>
																	<tr>
																		<th colspan="8" style="text-align:center;background-color:#EE82EE;font-size: 15px;color:#000000">Artist Cost</th>

																	</tr>
																	<tr>
																		<th colspan="3" style="text-align:center;background-color:#1E90FF;color:#000000">Planned</th>
																		<th colspan="5" style="text-align:center;background-color:#32CD32;color:#000000">Actual</th>
																	</tr>

																	<tr>
																		<th style="border-left:solid 2px;"></th>
																		<th style="text-align:right;"> Monthly Budget</th>
																		<th style="text-align:right;border-right:solid 2px;"> For Shoot days</th>
																		<th style="text-align:right;">No. of Units </th>
																		<th style="text-align:right;">Targetted Expenses till date</th>
																		<th style="text-align:right;">Actual</th>
																		<th style="text-align:right;">Difference</th>
																		<th style="text-align:right;right;border-right:solid 2px;">Variance %</th>
																	</tr>
																</thead>
																<tbody id="peoplecostbody">

																</tbody>
															</table>
														</div>

													</div>
												</div>

											</div>
											<!-- End Table Add Here    ----------->
											<div class="row">
												<div class="form-group">
													<div class="col-lg-6">

														<div class="table-responsive">
															<table id="episodicstaffcost" class="table table-" style="width:100%" ;>
																<thead>
																	<tr>
																		<th colspan="5" style="text-align:center;background-color:#EE82EE;font-size: 15px;color:#000000">Episodic Staff Cost</th>

																	</tr>

																	<tr>
																		<th style="border-left:solid 2px;"></th>
																		<th style="text-align:right;"> Monthly Budget</th>
																		<th style="text-align:right;"> Aired episode</th>
																		<th style="text-align:right;border-right:solid 2px;">Payable</th>
																		<th style="text-align:right;border-right:solid 2px;"></th>


																	</tr>
																</thead>
																<tbody id="episodicstaffcostbody">

																</tbody>
															</table>
														</div>

													</div>
													<div class="col-lg-6">

														<div class="table-responsive">
															<table id="productionadmin" class="table table-" style="width:100%" ;>
																<thead>
																	<tr>
																		<th colspan="4" style="text-align:center;background-color:#EE82EE;font-size: 15px;color:#000000">Production/Admin Staff Cost</th>

																	</tr>

																	<tr>
																		<th colspan="4" style="text-align:center;background-color:#1E90FF;color:#000000">Planned</th>
																		<!--<th colspan="4" style="text-align:center;background-color:#32CD32;color:#000000">Actual</th>-->
																	</tr>

																	<tr>
																		<th style="width:40%;border-left:solid 2px;"></th>
																		<th style="width:25%;text-align:right;"> Monthly Budget</th>
																		<!--<th style="width:10%;text-align:right;border-right:solid 2px;"> No. of Days Elapsed</th>
																		<th style="width:10%;text-align:right;">Targetted Expenses till date</th>-->
																		<th style="width:25%;text-align:right;">Actual</th>
																		<!--<th style="width:10%;text-align:right;">Difference</th>
																		<th style="width:10%;text-align:right;border-right:solid 2px;">Variance %</th>-->
																	</tr>
																</thead>
																<tbody id="productionadmintbody">

																</tbody>
															</table>
														</div>

													</div>
													
												</div>

											</div>
											<!-- End Table Add Here    ----------->
											<!--<div class="row">
												<div class="form-group">
													<div class="col-lg-12">

														<div class="table-responsive">
															<table id="productionadmin" class="table table-" style="width:50%" ;>
																<thead>
																	<tr>
																		<th colspan="3" style="text-align:center;background-color:#EE82EE;font-size: 15px;color:#000000">Production/Admin Staff Cost</th>

																	</tr>

																	<tr>
																		<th colspan="3" style="text-align:center;background-color:#1E90FF;color:#000000">Planned</th>
																		<!--<th colspan="4" style="text-align:center;background-color:#32CD32;color:#000000">Actual</th>-->
											<!--						</tr>

																	<tr>
																		<th style="width:15%;border-left:solid 2px;"></th>
																		<th style="width:15%;text-align:right;"> Monthly Budget</th>
																		<!--<th style="width:10%;text-align:right;border-right:solid 2px;"> No. of Days Elapsed</th>
																		<th style="width:10%;text-align:right;">Targetted Expenses till date</th>-->
											<!--							<th style="width:15%;text-align:right;">Actual</th>
																		<!--<th style="width:10%;text-align:right;">Difference</th>
																		<th style="width:10%;text-align:right;border-right:solid 2px;">Variance %</th>-->
											<!--						</tr>
																</thead>
																<tbody id="productionadmintbody">

																</tbody>
															</table>
														</div>

													</div>
												</div>

											</div> -->

											<!-- last Table Add Here    ----------->
											<div class="row" style="display: none;">
												<div class="form-group">
													<div class="col-lg-12">

														<div class="table-responsive">
															<table id="expensebudget" class="table table-" style="width:100%" ;>
																<thead>
																	<tr>
																		<th colspan="7" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000">Expenses - Budget v/s Actual</th>

																	</tr>
																	<tr>
																		<th style="width:5%;border-left:solid 2px;">Expense Code</th>
																		<th style="width:15%;"> Expense A/c</th>
																		<th style="width:10%;text-align:right;"> Unit No</th>
																		<th style="width:10%;text-align:right;">Planned for the Month</th>
																		<th style="width:10%;">Expense Sub A/c</th>
																		<th style="width:10%;text-align:right;">Actual Expenses</th>

																		<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>

																	</tr>
																</thead>
																<tbody id="expensebudgetbody">

																</tbody>
															</table>
														</div>

													</div>
												</div>

											</div>
											<!-- last Table Add Here    ----------->
											<div class="col-lg-12 ">
												<div class="col-sm-12">

													<div class="col-lg-4">
														<div class="form-group">
															<label class="control-label" id="get_footage"></label>
														</div>
													</div>
												</div>
												<div class="table-responsive" id="getfootageinfo">
												</div>

											</div>

											<!--Detalis Info Of Footage-------->
									
                         </div>
						</div>
									</div>
									</div>
						
				</div>
				
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
					<script type="text/javascript">
						var baseurl = "<?php print base_url(); ?>";
					</script>
					<?php include "includes/footerlink.php"; ?>
					<!--<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> -->
					<script src="<?php echo base_url(); ?>assets/js/myjs/showwise_budget.js"></script>
					<script>
						$('#status').bootstrapToggle('on');
					</script>
					<script>
						$('.date').datepicker({
							'todayHighlight': true,
						});
						var date = new Date();
						date = date.toString('dd/MM/yyyy');
						$("#fromdate").val(date);
						$("#todate").val(date);
					</script>


</body>

</html>
<script type="text/javascript">
	// $(".get_exxcel").click(function(){
	// alert("hey");


	// var get_data=$("#budgetentry").html();
	// alert(get_data);
	$("#budgetentry").html();

	function fnExcelReport() {


		var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
		tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

		tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';

		tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
		tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

		tab_text = tab_text + "<table border='1px'>";
		tab_text = tab_text + $(".get_all_data").html();
		tab_text = tab_text + '</table></body></html>';

		var data_type = 'data:application/vnd.ms-excel';

		$('#get_exxcel').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
		$('#get_exxcel').attr('download', 'Footage file.xls');

	}







	// });
</script>