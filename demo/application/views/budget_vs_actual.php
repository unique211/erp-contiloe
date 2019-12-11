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
									<form id="showwisereport" name="showwisereport" onsubmit="ShowLoading()"></form>
									<div class="col-sm-12">
										<div class="col-sm-4">
											<label class="control-label">For Project/Show*</label>
										</div>
										<div class="col-lg-3">
											<div class="form-group">

												<select form="showwisereport" class="form-control select2 input-sm project_name" id="project" name="project">
													<option selected disabled>Select</option>

												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4">
										</div>
									</div>
									<div class="col-sm-12">
										<div class="col-sm-4">
											<label class="control-label">For Month/Year*</label>
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

									<!-- <div class="col-sm-12"  id="from_date"  >
										<div class="col-sm-4" >
                                        <label class="control-label" >From Date</label>
										</div>
										<div class="col-lg-3" >
											<div class="form-group">
										
                                            <div class="input-group date doj" data-provide="datepicker">
												<input type="text"   form="showwisereport"  class="form-control input-sm placeholdesize datepicker"  id="fromdate" name="fromdate"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div>
										</div>
									</div> -->

									<div class="col-sm-12" id="to_date">
										<div class="col-sm-4">
											<label class="control-label">As on Date</label>
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
											<div class="col-sm-2">
												<label class="control-label">Report </label>
											</div>

											<div class="col-lg-4">

												<label class="checkbox-inline" style="margin-left:50px;">

													<input type="checkbox" id="status" checked data-toggle="toggle" data-size="mini" data-off="Detail" data-on="Summary" data-onstyle="success" data-offstyle="danger">
												</label>

											</div>
										</div>

									</div>
									<!-- 			<div class="col-sm-12">
										<div class="col-sm-2" >
                                        <label class="control-label">Report </label>
										</div>
										<div class="col-lg-4" >
										
											<label class="checkbox-inline" style="margin-left:50px;">

														<input type="checkbox"  id="status" checked data-toggle="toggle"  data-size="mini"    data-on="Details" data-off="Summary"  data-onstyle="success" data-offstyle="danger"  >
												</label>	
										
										</div>
										<div class="col-sm-4" >
										</div>
									</div> -->


									<div class="col-lg-12">
										<!--<div class="cd-12">-->
										<a class="get_exxcel pull-right" id="get_exxcel" onClick="javascript:fnExcelReport();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download </button></a>
										<!--</div>-->

										<button type="submit" form="showwisereport" class="btn btn-sm btn-success btn-sm pull-right" style="margin-right: 15px;">Generate</button>
										&nbsp;&nbsp;



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
																		<th colspan="7" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000;">Contiloe Pictures Pvt. Ltd.</th>

																	</tr>

																	<tr>
																		<th colspan="2" style="text-align:center;" id="reportfrommonth"></th>
																		<th colspan="2" style="text-align:center;" id="reporttonmonth"></th>
																		<th colspan="3" style="text-align:center;" id="reportproject">Show Name :</th>
																		<th colspan="2" style="text-align:center;" id="reportfornmonth"></th>
																		<!--<th colspan="2" style="text-align:center;" id="reportfornmonth" ></th>-->
																	</tr>
																</thead>
															</table>





															<!-- last Table Add Here    ----------->
															<div class="row abc detail_div">
																<div class="form-group">
																	<div class="col-lg-12">

																		<div class="table-responsive">
																			<table id="expensebudget" class="table table-" style="width:100%" ;>
																				<thead>
																					<tr style="border:solid 1px;">
																						<th colspan="4" style="text-align:left;background-color:#DCDCDC;font-size: 20px;color:#000000">Expenses - Budget v/s Actual</th>

																						<!--<th colspan="4" style="text-align:center;background-color:#DCDCDC;font-size: 15px;color:#000000;" class="grant_total"></th>-->
																						<th colspan="1" style="text-align:right;background-color:#DCDCDC;font-size: 15px;color:#000000;" class="grant_total"></th>
																						<th style="text-align:right;background-color:#DCDCDC;font-size: 15px;color:#000000;"></th>
																						<th colspan="1" style="text-align:right;background-color:#DCDCDC;font-size: 15px;color:#000000;" class="grant_total_e"></th>
																						<th style="text-align:right;background-color:#DCDCDC;font-size: 15px;color:#000000;"></th>
																						<th style="text-align:right;background-color:#DCDCDC;font-size: 15px;color:#000000;"></th>

																					</tr>
																					<!-- 		<tr>
													<th style="width:5%;border-left:solid 2px;">Expense Code</th>
													<th style="width:15%;"> Expense A/c</th>
													<th style="width:10%;text-align:right;"> Unit No</th>
													<th style="width:10%;text-align:right;">Planned for the Month</th>
													<th style="width:10%;">Expense Sub A/c</th>
													<th style="width:10%;text-align:right;">Actual Expenses</th>
													
													<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>
													
												</tr>
 -->
																				</thead>



																				<tbody id="expensebudgetbody">

																					<!--	<div id="bodyloader" style="display:none">
												
												<div id="wait" style="width:100px;height:100px;position:absolute;top:;left:45%;padding:2px;"><img src="<?php echo base_url('assets/img/loader.gif'); ?>" width="100" height="100" /><br><center><h5>Please Wait...</h5></center></div>
												</div>
											-->

																				</tbody>
																			</table>

																			<!--RAVI-->

																			<!--		<div class="row">
									<div class="form-group">
										<div class="col-lg-12">
										
										<div class="table-responsive">
										<table id="peoplecost" class="table table-" style="width:100%";>
											<thead >
												<tr>
													<th colspan="8" style="text-align:center;background-color:#EE82EE;font-size: 15px;color:#000000" >Artist Cost</th>
													
												</tr>
												<tr>
													<th colspan="3" style="text-align:center;background-color:#1E90FF;color:#000000" >Planned</th>
													<th colspan="5" style="text-align:center;background-color:#32CD32;color:#000000" >Actual</th>
												</tr>
											
												<tr>
													<th style="border-left:solid 2px;" ></th>
													<th  style="text-align:right;"> Monthly Budget</th>
													<th  style="text-align:right;border-right:solid 2px;"> For Shoot days</th>
													<th  style="text-align:right;">No. of Units </th>
													<th  style="text-align:right;">Targetted Expenses till date</th>
													<th  style="text-align:right;" >Actual</th>
													<th  style="text-align:right;">Difference</th>
													<th  style="text-align:right;right;border-right:solid 2px;">Variance %</th>
												</tr>
											</thead >
											<tbody id="peoplecostbody">
												
											</tbody>	
											</table>
									    </div>
										
										</div>
									</div>	
											
							</div>-->
																			<!--RAVI-->


																			<!-- 											<div class="row">
											<div class="col-md-12">
											<a class="get_exxcel pull-right" id="get_exxcel" onClick="javascript:fnExcelReport();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download Expenses - Budget v/s Actual</button></a>
											</div>
										    </div>
										    <br>

											<br> -->
																		</div>

																	</div>
																</div>

															</div>

															<!-- if status is 0 -->
															<div class="row abc summary_div" style="display: none;">
																<div class="form-group">
																	<div class="col-lg-12">

																		<div class="table-responsive">
																			<table id="expensebudget" class="table table-" style="width:100%" ;>
																				<thead>
																					<!--<tr>
													<th colspan="3" style="text-align:left;background-color:#DCDCDC;font-size: 20px;color:#000000" >Expenses - Budget v/s Actual</th>
                                        
                                                    <th colspan="4" style="text-align:center;background-color:#DCDCDC;font-size: 14px;color:#000000" class="grant_total"></th>													
													
												</tr>
											-->
																					<!-- 	<tr>
													<th style="width:5%;border-left:solid 2px;">Expense Code</th>
													<th style="width:15%;"> Expense A/c</th>
													<th style="width:10%;text-align:right;"> Unit No</th>
													<th style="width:10%;text-align:right;">Planned for the Month</th>
													<th style="width:10%;">Expense Sub A/c</th>
													<th style="width:10%;text-align:right;">Actual Expenses</th>
													
													<th style="width:10%;text-align:right;border-right:solid 2px;">Variance</th>
													
												</tr> -->
																				</thead>
																				<tbody id="expensebudgetbody1">

																				</tbody>
																			</table>
																			<!-- 											<div class="row">
											<div class="col-md-12">
											<a class="get_exxcel pull-right" id="get_exxcel" onClick="javascript:fnExcelReport();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download Expenses - Budget v/s Actual</button></a>
											</div>
										    </div>
										    <br>

											<br> -->
																		</div>

																	</div>
																</div>

															</div>


															<!-- last Table Add Here    ----------->
															<div class="col-lg-12">
																<div class="col-sm-12">

																	<div class="col-lg-4">
																		<div class="form-group">
																			<label class="control-label" id="gettableunit"></label>
																		</div>
																	</div>
																</div>
																<div class="table-responsive" id="show_master">
																</div>
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
				<script src="<?php echo base_url(); ?>assets/js/myjs/budget_vs_actual.js"></script>
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
	$("#bodyloader").hide();

	function ShowLoading() {

		$("#bodyloader").show();

		//	alert("Hello...");
	}

	$('#showwisereport').submit(function() {

		//	alert("Hello...");
		$("#bodyloader").show();
		$('#bodyloader').css('visibility', 'visible');
		return true;
	});
</script>




<script>
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

		//var status   =  $("#status").val();
		var status = 0;
		if ($('#status').is(":checked")) {
			status = 1;
		}
		var data_type = 'data:application/vnd.ms-excel';

		$('#get_exxcel').attr('href', data_type + ', ' + encodeURIComponent(tab_text));

		// alert(status);
		if (status == '0') {
			$('#get_exxcel').attr('download', 'Expences_detail_report.xls');
		} else {
			$('#get_exxcel').attr('download', 'Expences_summary_report.xls');
		}


	}





	// });



	// });
</script>