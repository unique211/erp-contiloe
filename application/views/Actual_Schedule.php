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
<!--	<link href="<?php echo base_url(); ?>assets/css/jquery_dataTables.css" rel="stylesheet"> -->
	<style>
		.tabfont {
			font-weight: 1000;
			color: #180905;
		}

		/*.scrol_tbl {
    table-layout:fixed;
    margin:auto;
}
.scrol_thead {
    background:#f9f9f9;
    display:table;
    width:100%;
}
.scrol_thead tr th{
	width:250px;
}
.scrol_tbody {
    height:400px;
    overflow:auto;
    overflow-x:hidden;
    display:block;
    width:100%;
}
.scrol_tbody tr {
    display:table;
    width:100%;
    table-layout:fixed;
}*/
	</style>
	<link href="<?php echo base_url(); ?>assets/css/bootstrap-formhelpers.min.css" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/multiselect/bootstrap-multiselect.css" type="text/css">
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
								<b><?php echo $title1 ?></b>
								
								<button type="button" class="btn btn-primary btn-xs pull-right updaterate " onclick="updaterate(id)" ><i class="fa fa-plus" ></i>Update Rate</button>
								<span class="btn btn-xs pull-right">&nbsp;&nbsp;</span>
								<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i> Add New</button>
								<span id="updateRate" class="btn btn-xs pull-right"> </span>
								
								
								&nbsp; &nbsp; <h4 id="unitdata" class="pull-right yeardata" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4> &nbsp; &nbsp;
								&nbsp; &nbsp; &nbsp; &nbsp; <h4 id="projectdata" class="pull-right monthdata" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4> &nbsp; &nbsp;
								&nbsp; &nbsp; &nbsp; &nbsp; <h4 id="datedata" class="pull-right pro_name" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4> &nbsp; &nbsp;
							</div>
							<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active schedule_expenses"><a href="#schedule_expenses" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Actual Schedule & Expenses</a></li>
									<li class="tabfont scenedetails"><a href="#scene_details" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Scene wise Details</a></li>
									<li class="tabfont peopleattend"><a href="#people_attendance" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> People Attendance</a></li>
									<li class="tabfont actualexpense"><a href="#Actual_expenses" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Actual Expenses</a></li>

								</ul>
							</div>


							<div class="panel-body formhideshow">

								<div class="tab-content">

									<!----------------------------------------------------------------schedule_expenses start ----------------------------------------->
									<div class="tab-pane fade active in tab-pane" id="schedule_expenses">
										<div class="col-lg-12">
											<input type="hidden" id="save_updatedata" value="" />
											&nbsp; &nbsp; <button type="submit" form="actualform_form" class="btn btn-sm btn-success btn-sm pull-right" style="margin-top:-20px;">Next</button>
											&nbsp; &nbsp; <button type="button" class="btn btn-sm btn-info pull-right closehideshow" style="margin-top:-20px;">Close</button>
										</div>
										<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Actual Schedule & Expenses</b>
										</div>
										<br>
										<form id="actualform_form" name="actualform_form"></form>
										<div class="row formhideshow" id="schedule_expenses">

											<div class="col-sm-12">
												<div class="col-sm-4">
													<div class="form-group">
														<label class="control-label">Date*</label>
														<!--	<input type="date" form="charectermaster_form" class="form-control input-sm date" id="date" name="date" required> -->
														<div class="input-group date doj" data-provide="datepicker">
															<input type="text" form="actualform_form" class="form-control input-sm placeholdesize datepicker" id="date" name="date">
															<div class="input-group-addon">
																<span class="fa fa-calender"></span>
															</div>
														</div>
													</div><!-- /form-group -->
												</div>
												<div class="col-lg-4">
													<div class="form-group">
														<label class="control-label">Project*</label>
														<select form="actualform_form" class="form-control input-sm select2  project_name" id="project" name="project" required>
															<option selected disabled>Select</option>
															<option value="1">project1</option>
															<option value="2">project2</option>

														</select>
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-2">
													<div class="form-group">
														<label class="control-label">For Unit No.*</label>
														<input type="number" form="actualform_form" class="form-control input-sm unit_no" id="unit_no" name="unit_no" placeholder="For Unit No." required>
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-2">
													<div class="form-group">
														<label class="control-label"></label><br>
														&nbsp; &nbsp; <button type="bttton" id="fetchdata" class="btn btn-sm btn-success btn-sm pull-right">Fetch Details</button>
													</div><!-- /form-group -->
												</div>
											</div>
											<div class="col-sm-12">
												<div class="col-sm-4">
													<div class="form-group">
														<label class="control-label">Location*</label>
														<input type="text" form="actualform_form" class="form-control input-sm location" id="location" name="location" placeholder="Location" required>
													</div><!-- /form-group -->
												</div>
												<div class="col-lg-4">
													<div class="form-group">
														<label class="control-label">Call time - From</label>
														<!--	<input type="time" form="actualform_form" class="form-control input-sm" id="shift_time" name="shift_time"  placeholder="Shift time from" > -->
														<div class="input-group timepicker">
															<input type="text" class="form-control" id="shift_time" placeholder="hh:mm:ss">
															<span class="input-group-addon">
																<span class="glyphicon glyphicon-calendar"></span>
															</span>
														</div>

														<!--	<div class="bfh-timepicker" form="actualform_form"  id="shift_time" data-align="right"></div>-->
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-4">
													<div class="form-group">
														<label class="control-label">Call time - To</label>
														<!--	<input type="time" form="actualform_form" class="form-control input-sm" id="shift_timeto" name="shift_timeto"  placeholder="Shift time to" required> -->
														<div class="input-group timepicker">
															<input type="text" class="form-control" id="shift_timeto" placeholder="hh:mm:ss">
															<span class="input-group-addon">
																<span class="glyphicon glyphicon-calendar"></span>
															</span>
														</div>

														<!--	<div class="bfh-timepicker" id="projected_footage" data-align="right"></div>-->
													</div><!-- /form-group -->
												</div>
											</div>
											<div class="col-sm-12">
												<div class="col-sm-4">
													<label class="control-label">Projected Footage</label>
													<!--		<input type="number" form="actualform_form" class="form-control input-sm projected_footage" id="projected_footage" name="projected_footage" placeholder="Projected Footage" required>-->
													<div class="input-group projectfotage">
														<input type="text" class="form-control" id="projected_footage" placeholder="hh:mm:ss">
														<span class="input-group-addon">
															<span class="glyphicon glyphicon-calendar"></span>
														</span>
													</div>
												</div>
												<div class="col-lg-4">
													<div class="form-group">

														<!--	<input type="time" form="actualform_form" class="form-control input-sm" id="shift_timeto" name="shift_timeto"  placeholder="Shift time to" required> -->
														<label class="control-label" id="person_char">No. of Camera*</label>
														<input type="number" form="actualform_form" class="form-control input-sm no_camera" id="no_camera" name="no_camera" placeholder="No. of Camera" required>
														<!--	<div class="input-group timepicker" >
           													 <input type="text" class="form-control" id="shift_timeto" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>-->
														<!--	<div class="bfh-timepicker" form="actualform_form" id="shift_timeto" data-align="right"></div>-->
													</div><!-- /form-group -->
												</div>
												<div class="col-sm-4">
													<div class="form-group">

													</div><!-- /form-group -->
												</div>
											</div>

											<div class="col-sm-12">
												<div class="col-sm-12">
													<div class="form-group">
														<label class="control-label" id="person_char">Special Requirements*</label>
														<textarea rows="3" cols="150" form="actualform_form" class="form-control input-sm" id="special_requirement" name="special_requirement" placeholder="Special Requirements"></textarea>
													</div><!-- /form-group -->
												</div>
											</div>





										</div>
									</div><!-- /tab fade-->
									<!--------------------------------------------------------------------schedule_expenses end --------------------------------------------------------------------------->
									<!--------------------------------------------------------------------Scene wise Details start --------------------------------------------------------------------------->
									<div class="tab-pane fade" id="scene_details">
										<div class="col-lg-12">
											<input type="hidden" id="screen_row_id" value="0" />
											<input type="hidden" id="screen_save_update" value="" />
											&nbsp; &nbsp; <button type="button" class="btn btn-sm btn-success pull-left pev" id="previous" style="margin-top:-20px;">Prev</button>
											&nbsp; &nbsp; <button id="scenesave" class="btn btn-sm btn-success btn-sm pull-right" style="margin-top:-20px;">Next</button>
											<a class="get_exxcel pull-right" style="margin-top:-20px;" id="get_exxcel" onClick="javascript:fnExcelReport();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download </button></a>
										</div>
										<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Scene wise Details</b>
											<div class="form-group" style="margin-top:-10px">
												<a href="#scenewise_details" role="button" data-toggle="modal" id="scenemodel_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i> Add</a>
											</div>

										</div>
										<br>
										<form id="charectermaster_form" name="charectermaster_form"></form>
										<div class="row formhideshow" id="scene_details">


											<br>
											<div class="modal fade" id="scenewise_details" data-backdrop="static" data-keyboard="false">
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
															<h4>Add/Edit Scene Details</h4>
														</div>
														<div class="modal-body">
															<div class="row">
																<form id="scenewise_form" name="scenewise_form"></form>
																<div class="col-sm-12">
																	<div class="col-sm-12">
																		<div class="form-group">
																			<label class="control-label">Scene No.*</label>
																			<input type="text" form="scenewise_form" class="form-control input-sm scene_no" id="scene_no" name="scene_no" placeholder="Scene No." required>
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-sm-12">
																	<div class="col-sm-12">
																		<div class="form-group">
																			<label class="control-label">Scene Description</label>
																			<!--	<input type="text" form="scenewise_form" class="form-control input-sm scene_description" id="scene_description" name="scene_description" placeholder="Scene Description" required> -->
																			<textarea id="scene_description" class="form-control input-sm scene_description"></textarea>
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-sm-12">
																	<div class="col-sm-12">
																		<div class="form-group">
																			<label class="control-label">Effect*</label>
																			<input type="text" form="scenewise_form" class="form-control input-sm effect" id="effect" name="effect" placeholder="Effect" required>
																		</div><!-- /form-group -->
																	</div>
																</div>


																<div class="col-sm-12">
																	<div class="col-sm-12">
																		<div class="form-group">
																			<label class="control-label">Sub Location*</label>
																			<input type="text" form="scenewise_form" class="form-control input-sm sub_location" id="sub_location" name="sub_location" placeholder="Sub Location" required>
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-lg-12">
																	<div class="col-lg-12">
																		<div class="form-group">
																			<label class="control-label charecternm">Character Name*</label>
																			<!--	<input type="text" form="scenewise_form" class="form-control input-sm character_name" id="character_name" name="character_name" placeholder="Character Name" required>-->
																			<select form="scenewise_form" class="form-control input-sm charectername" multiple id="charectername" name="charectername[]">
																			</select>
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-lg-12">
																	<div class="col-sm-6">
																		<div class="form-group">
																			<label class="control-label">Planned Footage</label>
																			<!--	<input type="time" form="scenewise_form" class="form-control input-sm plannes_footage" id="plannes_footage" name="plannes_footage" required>-->
																			<!--	<div class="bfh-timepicker" form="scenewise_form"  id="plannes_footage" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="plannes_footage" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>


																	<div class="col-sm-6">
																		<div class="form-group">
																			<label class="control-label">Actual Footage*</label>
																			<!--	<input type="time" form="scenewise_form" class="form-control input-sm actual_footage" id="actual_footage" name="actual_footage" placeholder="Actual Footage" required> -->
																			<!--	<div class="bfh-timepicker" form="scenewise_form"  id="actual_footage" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="actual_footage" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>

																</div>
																<div class="col-sm-12">
																	<div class="col-sm-12">
																		<div class="form-group">
																			<label class="control-label">Remarks*</label>
																			<!--	<input type="text" form="scenewise_form" class="form-control input-sm remarks" id="remarks" name="remarks" placeholder="Remarks" required> -->
																			<textarea form="scenewise_form" class="form-control input-sm remarks" id="remarks" name="remarks" placeholder="Remarks"></textarea>
																		</div><!-- /form-group -->
																	</div>
																</div>

															</div>
														</div>
														<div class="modal-footer">
															<button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
															<button type="submit" form="scenewise_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
														</div>
													</div><!-- /.modal-content -->
												</div><!-- /.modal-dialog -->
											</div><!-- /.modal -->

											<!--	<div class="row"> -->
											<div class="col-sm-12">
												<div class="form-group">


													<div class="get_all_data">
														<table id="scenewise_table" class="table table-striped scrol_tbl" style="width:100%" ;>
															<thead class="scrol_thead">
																<tr>
																<tr>
																	<th></th>
																	<th colspan="2">Planned Fotage: &nbsp;<lable style="text-align:right" id="plannedtotal"></lable>
																	</th>
																	<th></th>
																	<th colspan="2">Actual Fotage: &nbsp;<lable style="text-align:right" id="Actualfotagetotal"></lable>
																	</th>
																	<th></th>
																</tr>
																<th style="display: none;"></th>
																<th>Scene No.</th>
																<th style="width:29%">Scene Description</th>
																<th style="width:8%">Effect</th>
																<th style="width:10%">Sub Location</th>
																<th style="width:10%">Character Name</th>
																<th>Planned Footage</th>
																<th>Actual Footage</th>
																<th>Remarks</th>
																<th>Action</th>
																</tr>
															</thead>
															<tbody id="scenebody" class="scrol_tbody">

															</tbody>
														</table>
													</div>
												</div>

											</div>

											<!--	</div> -->

											<br>




										</div>
									</div><!-- /tab fade-->



									<!--------------------------------------------------------------------Scene wise Details end --------------------------------------------------------------------------->
									<!--------------------------------------------------------------------People Attendance start --------------------------------------------------------------------------->
									<div class="tab-pane fade" id="people_attendance">
										<div class="col-lg-12">
											<input type="hidden" id="schedulesheet_row_id" value="0" />
											<input type="hidden" id="schedulesheet_save_update" value="" />
											&nbsp; &nbsp; <button type="button" class="btn btn-sm btn-success pull-left pev" id="previous1" style="margin-top:-20px;">Prev</button>
											&nbsp; &nbsp; <button type="submit" form="charectermaster_form" id="peoplesave" class="btn btn-sm btn-success btn-sm pull-right" style="margin-top:-20px;">Next</button>
											<a class="get_exxcel1 pull-right" style="margin-top:-20px;" id="get_exxcel1" onClick="javascript:get_attn_data();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download </button></a>
										</div>
										<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>People Attendance</b>
											<div class="form-group" style="margin-top:-10px">
												<a href="#peopleattendance" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i> Add</a>
											</div>
										</div>
										<br>
										<form id="charectermaster_form" name="charectermaster_form"></form>
										<div class="row formhideshow" id="people_attendance">


											<br>
											<div class="modal fade" id="peopleattendance" data-backdrop="static" data-keyboard="false">
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
															<h4>Add/Edit People Attendance</h4>
														</div>
														<div class="modal-body">
															<div class="row">
																<form id="peopleattend_form" name="peopleattend_form"></form>
																<div class="col-sm-12">
																	<div class="col-sm-4">
																		<div class="form-group">
																			<label class="control-label">People Type*</label>
																			<select form="peopleattend_form" class="form-control select2 input-sm people" id="people_type" name="people_type" style="width:100%;" required>
																				<option selected disabled>select</option>
																				<option value="1">people1</option>
																				<option value="2">people2</option>
																			</select>
																		</div><!-- /form-group -->
																	</div>
																	<div class="col-lg-4">
																		<div class="form-group">
																			<label class="control-label">Character/Role/Designation*</label>
																			<select form="peopleattend_form" class="form-control select2 input-sm role roledata" style="width:100%;" id="role" name="role" required>
																				<option selected disabled>select</option>
																				<option value="1">role1</option>
																				<option value="2">role2</option>
																			</select>
																		</div><!-- /form-group -->
																	</div>
																	<div class="col-sm-4">
																		<div class="form-group">
																			<label class="control-label">People*</label>
																			<select form="peopleattend_form" class="form-control input-sm select2 peopledata" id="people" style="width:100%;" name="people" required>
																				<option selected disabled>select</option>
																				<option value="1">role1</option>
																				<option value="2">role2</option>
																			</select>
																			<!--	<input type="text" form="charectermaster_form" class="form-control input-sm people" id="people" name="people" placeholder="People" required>-->
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-sm-12">
																	<div class="col-sm-4">
																		<div class="form-group">
																			<label class="control-label">Scheduled Call time - From*</label>
																			<!--<input type="time" form="peopleattend_form" class="form-control input-sm Scheduled_from" id="Scheduled_from" name="Scheduled_from" required> -->
																			<!--	<div class="bfh-timepicker Scheduled_from" form="peopleattend_form" id="Scheduled_from" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="Scheduled_from" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>
																	<div class="col-lg-4">
																		<div class="form-group">
																			<label class="control-label">Scheduled Call time - To*</label>
																			<!--	<input type="time" form="peopleattend_form" class="form-control input-sm Scheduled_to" id="Scheduled_to" name="Scheduled_to" required> -->
																			<!--	<div class="bfh-timepicker Scheduled_from" form="peopleattend_form" id="Scheduled_to" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="Scheduled_to" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>
																	<div class="col-sm-4">
																		<div class="form-group">
																			<label class="control-label">Actual Call time - From*</label>
																			<!--	<input type="time" form="peopleattend_form" class="form-control input-sm Actual_from" id="Actual_from" name="Actual_from" required> -->
																			<!--	<div class="bfh-timepicker Actual_from" form="peopleattend_form" id="Actual_from" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="Actual_from" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-sm-12">
																	<div class="col-sm-4">
																		<div class="form-group">
																			<label class="control-label">Actual Call time - To*</label>
																			<!--		<input type="time" form="peopleattend_form" class="form-control input-sm actual_to" id="actual_to" name="actual_to" required>-->
																			<!--	<div class="bfh-timepicker actual_to" form="peopleattend_form" id="actual_to" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="actual_to" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>
																	<div class="col-lg-4">
																		<div class="form-group">
																			<label class="control-label">Duration*</label>
																			<!--	<input type="text" form="peopleattend_form" class="form-control input-sm duration" id="durationdata" name="durationdata" disabled> -->
																			<!---<div class="bfh-timepicker " form="peopleattend_form" id="durationdata" data-align="right"></div>-->
																			<div class="input-group timepicker">
																				<input type="text" class="form-control" id="durationdata" placeholder="hh:mm:ss">
																				<span class="input-group-addon">
																					<span class="glyphicon glyphicon-calendar"></span>
																				</span>
																			</div>
																		</div><!-- /form-group -->
																	</div>
																	<div class="col-sm-4">
																		<div class="form-group">
																			<label class="control-label">Extra Hours*</label>
																			<input type="text" form="peopleattend_form" class="form-control input-sm extra_hour" id="extra_hour" name="extra_hour" placeholder="extra_hour" disabled>
																			<!--	<div class="bfh-timepicker extra_hour" form="peopleattend_form" id="extra_hour" data-align="right"></div>-->
																		</div><!-- /form-group -->
																	</div>
																</div>
																<div class="col-sm-12">
																	<div class="col-sm-12">
																		<div class="form-group">
																			<label class="control-label">Remarks*</label>
																			<!--<input type="text" form="peopleattend_form" class="form-control input-sm remarks" id="remark" name="remark" placeholder="Remarks" required>-->
																			<textarea class="form-control input-sm " id="remark"></textarea>
																		</div><!-- /form-group -->
																	</div>

																</div>
															</div>
														</div>
														<div class="modal-footer">
															<button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
															<button type="submit" form="peopleattend_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
														</div>
													</div><!-- /.modal-content -->
												</div><!-- /.modal-dialog -->
											</div><!-- /.modal -->

											<!--	<div class="row"> -->
											<div class="col-sm-12">
												<div class="form-group">


													<div class="table-responsive get_attn_data">
														<table id="peopleattand" class="table table-striped ">
															<thead class="scrol_thead">
																<tr>
																	<th></th>
																	<th></th>

																	<th style="text-align:center" colspan="3">Scheduled Call time
																	</th>
																	<th colspan="2" style="text-align:center">Actual Call time</th>
																	<th></th>
																	<th></th>
																	<th></th>
																	<th></th>
																	<th></th>
																</tr>
															</thead>
															<thead class="scrol_thead">
																<tr>
																	<th style="display:none;"></th>

																	<th>People Type</th>

																	<th width="5%">Character/</th>

																	<th>People</th>
																	<th> From</th>
																	<th> To</th>
																	<th>From</th>
																	<th> To</th>
																	<th>Duration</th>
																	<th>Extra Hours</th>
																	<th>Remarks</th>

																</tr>
															</thead>
															<tbody id="peoplebody" class="scrol_tbody">

															</tbody>
														</table>
													</div>

												</div>

											</div>

											<br>




										</div>
									</div><!-- /tab fade-->



									<!--------------------------------------------------------------------People Attendance end --------------------------------------------------------------------------->
									<!--------------------------------------------------------------------Actual Expenses start --------------------------------------------------------------------------->
									<div class="tab-pane fade" id="Actual_expenses">
										<div class="col-lg-12">
											<input type="hidden" id="row_update" value="0" />
											<input type="hidden" id="expensivesave_update" value="" />
											<input type="hidden" id="save_update" value="" />
											<input type="hidden" id="workinghour" value="" />

											&nbsp; &nbsp; <button type="button" class="btn btn-sm btn-danger pull-left delete_data" style="margin-top:-20px;">Delete</button>
											&nbsp; &nbsp; <button type="button" class="btn btn-sm btn-success pull-left pev" style="margin-left:5px;margin-top:-20px;" id="previous2">Prev</button>
											&nbsp; &nbsp; <button type="button" style="margin-left:10px;margin-top:-20px;" form="charectermaster_form" class="btn btn-sm btn-primary pull-right ">print</button>
											&nbsp; &nbsp; <button type="submit" id="actualsave" form="charectermaster_form" style="margin-top:-20px;" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
											<a class="get_exxcel2	 pull-right" style="margin-top:-20px;" id="get_exxcel2" onClick="javascript:actual_expense();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download </button></a>
										</div>
										<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Actual Expenses</b>
											<a href="#Actual_expense1" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i> Add</a>
										</div>
										<br>


										<br>
										<div class="modal fade" id="Actual_expense1" data-backdrop="static" data-keyboard="false">
											<div class="modal-dialog">
												<div class="modal-content">
													<div class="modal-header">
														<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
														<h4>Actual Expenses</h4>
													</div>
													<div class="modal-body">
														<div class="row">
															<form id="actualexpe_form" name="actualexpe_form"></form>
															<div class="col-sm-12">
																<div class="col-sm-12">
																	<div class="form-group">
																		<label class="control-label">Supplier Name*</label>
																		<select form="actualexpe_form" style="width:100%;" class="form-control select2 input-sm suppliername" id="suppliername" name="suppliername" required>
																			<option selected disabled>select</option>
																			<option value="1">type1</option>
																			<option value="2">type2</option>
																		</select>
																	</div><!-- /form-group -->
																</div>
															</div>
															<div class="col-sm-12">
																<div class="col-sm-12">
																	<div class="form-group">
																		<label class="control-label">Expense Account*</label>
																		<select form="actualexpe_form" style="width:100%;" class="form-control select2 input-sm expense_type" id="expense_type" name="expense_type" required>
																			<option selected disabled>select</option>
																			<option value="1">type1</option>
																			<option value="2">type2</option>
																		</select>
																	</div><!-- /form-group -->
																</div>
															</div>
															<div class="col-sm-12">
																<div class="col-sm-12">
																	<div class="form-group">
																		<label class="control-label">Expense Sub Account*</label>
																		<select form="actualexpe_form" style="width:100%;" class="form-control select2 input-sm expense_sub_ac" id="expense_sub_ac" name="expense_sub_ac" required>
																			<option selected disabled>select</option>

																		</select>
																	</div><!-- /form-group -->
																</div>
															</div>
															<div class="col-sm-12">
																<div class="col-sm-12">
																	<div class="form-group">
																		<label class="control-label">Narration</label>
																		<input type="text" form="actualexpe_form" class="form-control input-sm Narration" id="Narration" name="Narration" placeholder="Narration">

																	</div><!-- /form-group -->
																</div>
															</div>
															<div class="col-sm-12">
																<div class="col-sm-4">
																	<div class="form-group">
																		<label class="control-label">Qty*</label>
																		<input type="number" form="actualexpe_form" style="text-align:right" class="form-control input-sm " id="qty" name="qty" placeholder="Qty" required>
																	</div><!-- /form-group -->
																</div>
																<div class="col-lg-4">
																	<div class="form-group">
																		<label class="control-label">Rate*</label>
																		<input type="number" form="actualexpe_form" style="text-align:right" class="form-control input-sm rate" id="rate" name="rate" placeholder="Rate" min="0" step="any" required>
																	</div><!-- /form-group -->
																</div>
																<div class="col-sm-4">
																	<div class="form-group">
																		<label class="control-label">Uom</label>
																		<input type="text" form="actualexpe_form" class="form-control input-sm " id="uom" name="uom" placeholder="Uom" disabled>
																		<!--<select  form="actualexpe_form" class="form-control input-sm unit" id="unit" name="unit" required>
														<option selected disabled>select</option>
														<option value="1">type1</option>
														<option value="2">type2</option>
												</select>-->
																		<!--<input type="text" form="actualexpe_form" class="form-control input-sm unit" id="unit" name="unit" required> -->
																	</div><!-- /form-group -->
																</div>
															</div>
															<div class="col-sm-12">
																<div class="col-sm-6">
																	<div class="form-group">

																		<div class="form-group" style="margin:bottom:15px">
																			<label class="col-lg-6 control-label ">Payment Mode*: </label>


																			<input type="radio" form="actualexpe_form" name="payment_type" id="case" value="Cash" required>

																			<span class="custom-radio"></span>
																			Cash &nbsp;



																			<input type="radio" form="actualexpe_form" name="payment_type" id="cheque" value="Cheque">
																			<span class="custom-radio "></span>
																			Cheque
																		</div><!-- /form-group -->
																	</div>
																</div>

																<div class="col-sm-3">
																	<div class="form-group">
																		<label class="control-label">Amount*</label>
																		<input type="number" form="actualexpe_form" style="text-align:right" class="form-control input-sm amount" id="amountdata" name="amount" placeholder="Amount" min="0" step="any" required>
																	</div><!-- /form-group -->
																</div>
																<input type="hidden" id="saveworkinhour" value="">
																<div class="col-sm-3">
																	<div class="form-group">
																		<label class="control-label">Reference No.</label>
																		<input type="text" form="actualexpe_form" class="form-control input-sm Rerefence_No." id="Rerefence_No" name="Rerefence_No" placeholder="Rerefence No">
																	</div><!-- /form-group -->
																</div>
															</div>
														</div>
													</div>
													<div class="modal-footer">
														<button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
														<button type="submit" form="actualexpe_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
													</div>
												</div><!-- /.modal-content -->
											</div><!-- /.modal-dialog -->
										</div><!-- /.modal -->


										<div class="col-sm-12">
											<div class="form-group">


												<div class="table-responsive actual_expense">
													<table id="expensivemaster" class="table table-stripe ">
														<thead class="scrol_thead">
															<!--	<tr><th colspan="2">Planned Amount: &nbsp;<lable style="text-align:right" id="totalplanamt" ></lable></th><th width="20%">Actual Cheque Expenses: &nbsp;<lable style="text-align:right" id="totalcheque" ></lable> </th><th width="20%">Actual Cash Expenses: &nbsp;<lable style="text-align:right" id="totalcase" ></lable></th><th></th><th></th><th colspan="3">Actual Expenses: &nbsp;<lable style="text-align:right" id="totalactualexpenses" ></lable></th><th></th><th></th></tr>-->
															<tr>
																<th colspan="2">Planned Expenses: &nbsp;<lable style="text-align:right" id="totalplanamt"></lable>
																</th>
																<th colspan="2">Cheque Total: &nbsp;<lable style="text-align:right" id="totalcheque"></lable>
																</th>
																<th colspan="4">Cash Total: &nbsp;<lable style="text-align:right" id="totalcase"></lable>
																</th>
																<th colspan="3">Total Expenses: &nbsp;<lable style="text-align:right" id="totalactualexpenses"></lable>
																</th>
															</tr>
															<tr>
																<th style="display: none;"></th>


																<th width="10%">Supplier Name</th>
																<th>Expense Account</th>
																<th>Expense Sub Account </th>
																<th width="15%">Narration</th>
																<th width="5%">Planned Amount</th>
																<th>Qty</th>
																<th>Rate</th>
																<th>Uom</th>
																<th>Payment Mode</th>
																<th>Amount</th>
																<th>Rerefence No.</th>

															</tr>
														</thead>
														<tbody id="expensive" class="scrol_tbody">


														</tbody>
														<!--<tfoot>
											<tr>
											
										<td >Total Planned Expenses</td>
													<td colspan ="2"><input type="number"  style="text-align:right;" class="form-control input-sm " id="planamounttotal" name="planamounttotal"  placeholder="total"  ></td>
											<td></td>
													<td  colspan ="2">Total Actual Expenses</td>
													<td><input type="number"  style="text-align:right;" class="form-control input-sm" id="totalexpense" name="totalexpense"  placeholder="total"  ></td>
										</tr>
											</tfoot> -->
													</table>
												</div>

											</div>

										</div>

										<br>




									</div>
								</div><!-- /tab fade-->


								<div id="wait" style="width:100px;height:100px;position:absolute;top:;left:45%;padding:2px;"><img src="<?php echo base_url('assets/img/loader.gif'); ?>" width="100" height="100" /><br>
									<center>
										<h5>Please Wait...</h5>
									</center>
								</div>

								<!--------------------------------------------------------------------Actual Expenses end --------------------------------------------------------------------------->

							</div>
							<!--tab content-->
						</div><!-- /panel body -->
					</div><!-- /panel -->

				</div><!-- /.col -->
			</div>
			<div class="col-lg-12 tablehideshow">
				<div class="col-sm-12">
					<div class="col-sm-1">

						<label class="control-label"> From Date:</label>
					</div>
					<div class="col-sm-3">
						<div class="form-group">
							<!--	<input type="date" form="charectermaster_form" class="form-control input-sm date" id="date" name="date" required> -->
							<div class="input-group date doj" data-provide="datepicker">
								<input type="text" form="actualform_form" class="form-control input-sm placeholdesize datepicker" id="tblfromdate" name="tblfromdate">
								<div class="input-group-addon">
									<span class="fa fa-calender"></span>
								</div>
							</div>
						</div><!-- /form-group -->
					</div>
					<div class="col-sm-1">

						<label class="control-label"> To Date:</label>
					</div>
					<div class="col-sm-3">
						<div class="form-group">
							<!--	<input type="date" form="charectermaster_form" class="form-control input-sm date" id="date" name="date" required> -->
							<div class="input-group date doj" data-provide="datepicker">
								<input type="text" form="actualform_form" class="form-control input-sm placeholdesize datepicker" id="tbltodate" name="tbltodate">
								<div class="input-group-addon">
									<span class="fa fa-calender"></span>
								</div>
							</div>
						</div><!-- /form-group -->
					</div>
					<div class="col-sm-1">

					<button type="submit" id="filter" class="btn btn-sm btn-success btn-sm pull-right">Filter</button>
					</div>
				</div>

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
	<script type="text/javascript">
		var baseurl = "<?php print base_url(); ?>";
	</script>
	<?php include "includes/footerlink.php"; ?>

	<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script>
	<!--<script src="<?php echo base_url(); ?>assets/css/jquery_dataTables.js"></script>-->
	<script type="text/javascript" src="<?php echo base_url(); ?>assets/multiselect/bootstrap-multiselect.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/bootstrap-formhelpers.min.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/myjs/actualschedule.js"></script>

	<script>
		$('#status').bootstrapToggle('on');
	</script>
	<script>
	

	
		$('.timepicker').datetimepicker({
			format: 'HH:mm:ss',
		});
		$('.projectfotage').datetimepicker({
			format: 'HH:mm:ss',
		});
		$('.date').datepicker({
			'todayHighlight': true,
			// minDate: 0
		});
		var date = new Date();
		date = date.toString('dd/MM/yyyy');
		$("#date").val(date);
		$('.charectername').multiselect({
			enableFiltering: true,
		
			includeSelectAllOption: false,
			buttonWidth: '100%'
		});


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


	function get_attn_data() {


		// var get_date=$('.pro_name').text();
		// var monthdata=$('.monthdata').text();
		// var yeardata =$('.yeardata').text();

		// var project_name=$('#project_name').text(get_date)
		// var	episode_date=$('#episode_date').text(monthdata)
		// var unit_no=$('#unit_no').text(yeardata)

		var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
		tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

		tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';

		tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
		tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

		tab_text = tab_text + "<table border='1px'>";
		// tab_text = tab_text + "<tr><td>+'"get_date"'+</td><td>+'"monthdata"'+</td><td>+'"yeardata"'+</td></tr>";
		tab_text = tab_text + $(".get_attn_data").html();
		tab_text = tab_text + '</table></body></html>';

		var data_type = 'data:application/vnd.ms-excel';

		$('#get_exxcel1').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
		$('#get_exxcel1').attr('download', 'Attendence report.xls');

	}


	function actual_expense() {


		// var get_date=$('.pro_name').text();
		// var monthdata=$('.monthdata').text();
		// var yeardata =$('.yeardata').text();

		// var project_name=$('#project_name').text(get_date)
		// var	episode_date=$('#episode_date').text(monthdata)
		// var unit_no=$('#unit_no').text(yeardata)

		var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
		tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

		tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';

		tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
		tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

		tab_text = tab_text + "<table border='1px'>";
		// tab_text = tab_text + "<tr><td>+'"get_date"'+</td><td>+'"monthdata"'+</td><td>+'"yeardata"'+</td></tr>";
		tab_text = tab_text + $(".actual_expense").html();
		tab_text = tab_text + '</table></body></html>';

		var data_type = 'data:application/vnd.ms-excel';

		$('#get_exxcel2').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
		$('#get_exxcel2').attr('download', 'Actual Expense.xls');

	}



function updaterate(id){
	
	var sub = 'sub1';

//alert(sub);
	
	    $.ajax({
            type : "POST",
            url  : baseurl+"settings/updaterate_func",
            dataType : "JSON",
            async : false,
            
		});
	 
	 $('#updateRate').html(' <b> Rate updated successfully....</b>');
	 
	 
}	



	// });
</script>