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
<link rel="stylesheet" href="<?php echo base_url(); ?>assets/multiselect/bootstrap-multiselect.css" type="text/css">   
			

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
									<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus" id="addnewdata"></i>  Add New</button>
									&nbsp; &nbsp;		<h4 id="unitdata" class="pull-right unitdata" style="margin-top:-5px;margin-left:30px;font-weight:bold;"  ></h4>		&nbsp; &nbsp;
									&nbsp; &nbsp;		<h4 id="projectname" class="pull-right monthdata" style="margin-top:-5px;margin-left:20px;font-weight:bold;" ></h4>	&nbsp; &nbsp;	
									&nbsp; &nbsp;		<h4 id="datedata" class="pull-right pro_name" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4>		&nbsp; &nbsp;	
									<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active daywiseschedul"><a href="#daywiseschedul" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Day Wise Schedule</a></li>
									<li class="tabfont scenewisedetails "><a href="#scenewisedetails" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Scene Wise Details</a></li>
									<li class="tabfont artistschedule"><a href="#artistschedule" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i>Call time</a></li>
									<li class="tabfont plannedexpenses"><a href="#plannedexpenses" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i>Planned Expenses</a></li>
							</ul>
							</div>
							</div>
							
							
							
					<div class="panel-body formhideshow">
						<div class="tab-content">
	<!----------------------------------------------------------------Day Wise Artist Schedule ----------------------------------------->
	<form id="artistschedule_form" name="artistschedule_form"></form>

								<div class="tab-pane fade active in tab-pane" id="daywiseschedul">
								<div class="col-lg-12" >
							
										<!--		&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-active pull-right Print_data" >Print</button> -->
												
												&nbsp;	&nbsp;	<button type="button" id="btnnext" style="margin-top:-20px" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
												&nbsp;	&nbsp;	<button type="button" style="margin-top:-20px" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
							</div>
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>Day Wise Artist Schedule</b>
									</div>
									<br>
								
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Date</label>
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text"	form="artistschedule_form" class="form-control input-sm placeholdesize datepicker"  id="date" name="date"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											<!--	<input type="date" form="charectermaster_form" class="form-control input-sm" id="date" name="date"  placeholder="Date" required  > -->
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Project*</label>
											
											<select  form="artistschedule_form" class="form-control input-sm select2 project_name" id="project" name="project" required >
															<option selected disabled >Select</option> 
															
														</select>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">For Unit No*.</label>
											<input type="number" form="artistschedule_form" class="form-control input-sm" id="for_unit" name="for_unit"  placeholder="For Unit No"  required >
									
												</div><!-- /form-group -->
										</div>
									</div>

									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Location*</label>
											<select  form="artistschedule_form" class="form-control input-sm select2 location" id="location" name="location" required >
															<option selected disabled >Select</option>
															
											</select>
										<!--	<label class="control-label">Director</label>
											<input type="text" form="artistschedule_form" class="form-control input-sm" id="directore" name="directore"  placeholder="Director"   >-->
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Shift time from</label>
										<!--	<input type="text" form="artistschedule_form" class="form-control input-sm" id="shifttime" name="shifttime"  placeholder="Shift time from"   > -->
												<div class="input-group timepicker" >
           													 <input type="text" class="form-control" id="shifttime" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>
											<!--<div class="bfh-timepicker" id="shifttime" data-align="right"></div>-->
												<!--<label class="control-label">DOP</label>
												<input type="text" form="artistschedule_form" class="form-control input-sm" id="dop" name="dop"  placeholder="DOP"  >-->
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Shift time to</label>
												<!--<input type="text" form="artistschedule_form" class="form-control input-sm" id="shifttime_to" name="shifttime_to"  placeholder="Shift time to"   >-->
												<!--<input type="time" form="charectermaster_form" class="form-control input-sm without_ampm" id="working_hour" name="working_hour"  placeholder="Official Working Hour" >-->
												<!--<div class="bfh-timepicker" id="shifttime_to" data-align="right"></div>-->
												<div class="input-group timepicker" >
           													 <input type="text" class="form-control" id="shifttime_to" placeholder="hh:mm:ss" > 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>												
											</div><!-- /form-group -->
										</div>
									</div>
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Projected Footage</label>
												<!--<input type="number" form="artistschedule_form" class="form-control input-sm" id="projected" name="projected"  placeholder="Projected Footage"   >-->
											<!--	<div class="bfh-timepicker" id="projected" data-align="right"></div> -->
												<div class="input-group timepicker" >
           													 <input type="text" class="form-control" id="projected" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>	
										<!--<label class="control-label">Shift time from</label>
											<input type="text" form="artistschedule_form" class="form-control input-sm" id="shifttime" name="shifttime"  placeholder="Shift time from"   >-->
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">No.of Camera</label>
												<input type="number" form="artistschedule_form" class="form-control input-sm" id="camrera" name="camrera"  placeholder="No.of Camera"   >
																											
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
										
										</div>
									</div>
									<div class="col-sm-12" >
										
										<div class="form-group">
											<label class="control-label">Special Requirement</label>
											<textarea rows="3" cols="" form="artistschedule_form" class="form-control input-sm" id="requirement" name="requirement" placeholder="Special Requirement"></textarea>
										</div><!-- /form-group -->
										
									</div>
									
						</div>
							<!---------------------------------------------------------------- Day Wise Artist Schedule End ----------------------------------------->		
							<!---------------------------------------------------------------- Scene Wise Details Start ----------------------------------------->				
							
							<div class="tab-pane fade" id="scenewisedetails">
							<div class="col-lg-12" >
							
										<!--		&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-active pull-right Print_data" >Print</button> -->
										&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-success pull-left pev" id="previous" style="margin-top:-20px">Prev</button>
												&nbsp;	&nbsp;	<button type="button" id="scenenext" class="btn btn-sm btn-success btn-sm pull-right" style="margin-top:-20px">Next</button>
												
							</div>
							<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
											<b>Scene Wise Details</b>
											<div class="form-group" style="margin-top:-10px">
										
											<a href="#scenewisemodel" role="button" data-toggle="modal" id="scenemodel_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
										</div>
								
									<br>
									<div class="modal fade" id="scenewisemodel">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit Scene Wise Details</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="scenedetails_form" name="scenedetails_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-6" >
											<div class="form-group">
										<label class="control-label">Scene No*</label>
										<input type="text" form="scenedetails_form" class="form-control input-sm" id="scene_no" name="scene_no"  placeholder="Scene No"  required>
											</div><!-- /form-group -->
											</div >
											<div class="col-sm-6" >
											<div class="form-group">
												<label class="control-label">Planned Footage</label>
												<div class="input-group timepicker" id="plannfotage" >
           													 <input type="text" class="form-control" id="footage" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>
												<!--<div class="bfh-timepicker" id="footage" data-align="right"></div>-->
											</div><!-- /form-group -->
										</div>
										</div>

										<div class="col-sm-12" >
										<div class="col-sm-12" >
											<div class="form-group">
												<label class="control-label">Scene Description</label>
												<!--<input type="text" form="scenedetails_form" class="form-control input-sm" id="scene_description" name="scene_description"  placeholder="Scene Description"  > -->
											<textarea class="form-control input-sm" id="scene_description" ></textarea>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
										<div class="col-sm-6" >
											<div class="form-group">
												<label class="control-label">Effect</label>
												<textarea class="form-control input-sm" id="effect" placeholder="Effect" ></textarea>
											<!--	<input type="text" form="scenedetails_form" class="form-control input-sm" id="effect" name="effect"  placeholder="Effect"   >-->
											</div><!-- /form-group -->
											</div>
											<div class="col-sm-6" >
											
											<div class="form-group">
										<label class="control-label">Sub Location</label>
										<textarea class="form-control input-sm" id="sub_location"  placeholder="Sub Location" ></textarea>
									<!--	<input type="text" form="scenedetails_form" class="form-control input-sm" id="sub_location" name="sub_location"  placeholder="Sub Location"   >-->
											</div><!-- /form-group -->
										</div>
										</div>
									
										
										<div class="col-lg-12" >
										<div class="col-lg-12" >
											<div class="form-group">
												<label class="control-label charecternm">Artist Name</label>
												<select form="scenedetails_form"  class="form-control input-sm  artist_name" multiple id="artist_name" name="artist_name[]"   required>
													</select>
											</div><!-- /form-group -->
										</div>
										</div>
									
										
										
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="scenedetails_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
										<input type="hidden" id="screen_save_update" value=""/>
											<input type="hidden" id="screen_row_id" value="0"/>	
									<div class="col-sm-12" >
								
										<div class="form-group">
										
											<table id="scene_wise" class="table table-stripe">
											<thead>
											<tr><th></th><th></th><th></th><th></th><th></th><th colspan="2"><p  style="font-weight:bold;font-style: italic;">Planned Fotage:<lable  id="plannedtotal"></lable></p></th><th></th></tr>
											<tr>
											<th width="10%">Scene No.</th>
											<th  width="30%" >Scene Description</th>
											<th width="10%">Effect</th>
											<th width="10%">Sub Location</th>
											<th width="15%">Artist Name</th>
											<th width="10%">Planned Footage</th>
											<th>Action</th>
											
											</tr>
										<!--	<tr>
											<td width="10%">
												<input type="number" form="scenedetails_form" class="form-control input-sm" id="scene_no" name="scene_no"  placeholder="Scene No"  required>
											</td>
											<td>
												<input type="text" form="scenedetails_form" class="form-control input-sm" id="scene_description" name="scene_description"  placeholder="Scene Description"  >
											</td>
											<td>
												<input type="text" form="scenedetails_form" class="form-control input-sm" id="effect" name="effect"  placeholder="Effect"   >
											</td>
											<td>
												<input type="text" form="scenedetails_form" class="form-control input-sm" id="sub_location" name="sub_location"  placeholder="Sub Location"   >
											</td>
											<td>
											<select form="scenedetails_form"  class="form-control input-sm  artist_name" multiple id="artist_name" name="artist_name[]"   required>
													</select>
												<input type="text" form="scenedetails_form" class="form-control input-sm" id="artist_name" name="artist_name"  placeholder="Artist Name"  >
											</td>
											<td>
											<div class="bfh-timepicker" id="footage" data-align="right"></div>
												
											</td>
											
											<td>
											
												<button type="submit" form="scenedetails_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											
											</tr>-->
											</thead>
											
											<tbody id="scrnedata"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
									
							</div>
							
								<!---------------------------------------------------------------- Scene Wise Details end----------------------------------------->
							<!---------------------------------------------------------------- Artist Schedule/Call sheet ----------------------------------------->
							
								<div class="tab-pane fade" id="artistschedule">
								<div class="col-lg-12" >
							
										<!--		&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-active pull-right Print_data" >Print</button> -->
										<input type="hidden" id="schedulesheet_save_update" value=""	/>
								<input type="hidden" id="schedulesheet_row_id" value="0"/>	
									&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-success pull-left pev" id="previous1" style="margin-top:-20px">Prev</button>
												&nbsp;	&nbsp;	<button type="button" id="schedulenext" class="btn btn-sm btn-success btn-sm pull-right" style="margin-top:-20px">Next</button>
												
							</div>
								<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
										<b>Call time</b>
											<div class="form-group" style="margin-top:-10px">
										
											<a href="#aristschedulemodel" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
								</div>
						<div class="modal fade" id="aristschedulemodel">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit Call time</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="schedulesheet_form" name="schedulesheet_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-12" >
											<div class="form-group">
										<label class="control-label">People Type*</label>
										<select  style="width:100%;" form="schedulesheet_form" class="form-control select2  input-sm peopletype" id="artistnm" name="artistnm"  required>
															<option selected disabled value="">Select</option>
															
												</select>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
										<div class="col-lg-12" >
											<div class="form-group">
												<label class="control-label">Character</label>
												<select style="width:100%;" form="schedulesheet_form" class="form-control select2  input-sm " id="character" name="character" required>
															<option selected disabled value="">Select</option>
															
												</select>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
										<div class="col-sm-12" >
											<div class="form-group">
												<label class="control-label">People Name</label>
												<select  style="width:100%;"  form="schedulesheet_form" class="form-control select2 input-sm " id="people" name="people" required>
															<option selected disabled value="">Select</option>
															
												</select>
											</div><!-- /form-group -->
										</div>
									</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Call time - From</label>
										<div class="input-group timepicker" >
           													 <input type="text" class="form-control" id="shiftfromtime" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
										</div>
										<!--<div class="bfh-timepicker" id="shiftfromtime" data-align="right"></div>-->
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label charecternm">Call Time - To</label>
											
												<div class="input-group timepicker">
           													 <input type="text" class="form-control"  id="shifttototime" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>
											<!--	<div class="bfh-timepicker" id="shifttototime" data-align="right"></div>-->
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Duration</label>
												<div class="input-group timepicker" >
           													 <input type="text" class="form-control" id="duration" placeholder="hh:mm:ss"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>
											<!--	<div class="bfh-timepicker" id="duration" data-align="right"></div>-->
												<!--<input type="text" form="schedulesheet_form" class="form-control input-sm" id="duration" name="duration"  placeholder="Duration"  >-->
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
									
											<div class="form-group">
												<label class="control-label">Remarks</label>
											<!--	<input type="text" form="schedulesheet_form" class="form-control input-sm" id="remarks" name="remarks"  placeholder="Remarks"  >-->

												<textarea   class="form-control input-sm "  id="remarks" ></textarea>
											</div><!-- /form-group -->
										
										</div>
										
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="schedulesheet_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<br>
									<div class="col-sm-12" >
									
										<div class="form-group">
										
											<table id="scheduledata" class="table table-stripe" >
											<thead>
											<tr>
											
											<th width="5%">People Type</th>
										
											<th width="10%">Character</th>
											<th width="15%">People</th>
											<th width="15%">Call time - From</th>
											<th width="15%">Call time - To</th>
											<th  width="15%">Duration</th>
											<th >Remarks</th>
											<th >Action</th>
											
											</tr>
										<!--	<tr>
											<td>
												<select  form="schedulesheet_form" class="form-control input-sm people" id="artistnm" name="artistnm" required>
															<option selected disabled value="">Select</option>
															
												</select>
											</td>
											<td>
											<select  form="schedulesheet_form" class="form-control input-sm " id="character" name="character" required>
															<option selected disabled value="">Select</option>
															
												</select>
											
											</td>
											<td>
											<select  form="schedulesheet_form" class="form-control input-sm " id="people" name="people" required>
															<option selected disabled value="">Select</option>
															
												</select>
												
											</td>
											<td>
											<div class="bfh-timepicker" id="shiftfromtime" data-align="right"></div>
											</td>
											<td>
											<div class="bfh-timepicker" id="shifttototime" data-align="right"></div>
											</td>
											<td>
												<input type="text" form="schedulesheet_form" class="form-control input-sm" id="duration" name="duration"  placeholder="Duration"  >
											</td>
											<td>
												<input type="text" form="schedulesheet_form" class="form-control input-sm" id="remarks" name="remarks"  placeholder="Remarks"  >
											</td>
											<td>
												<button type="submit" form="schedulesheet_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											
											</tr> -->
											</thead>
											
											<tbody id="callsheet"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
									
							</div>
								<!---------------------------------------------------------------- Artist Schedule/Call sheet end----------------------------------------->
							<!---------------------------------------------------------------- Planned Expenses Start ----------------------------------------->
							<div class="tab-pane fade" id="plannedexpenses">
							<div class="col-lg-12" >
							<input type="hidden" id="planunitid" value="">
										<input type="hidden" id="planunitname" value="">
							<input type="hidden" id="plannesexpenses_save_update" value=""	/>
								<input type="hidden" id="plannedexpenses_row_id" value="0"/>
								<input type="hidden" id="save_update" value=""	/>
								<input type="hidden" id="actualdatalength" value=""	/>
							
										<!--		&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-active pull-right Print_data" >Print</button> -->
												&nbsp;	&nbsp; <button type="button" class="btn btn-sm btn-danger pull-left delete_data" style="margin-top:-20px;">Delete</button>
												&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-success pull-left pev" style="margin-left:5px;margin-top:-20px;" id="previous2">Prev</button>
												&nbsp;	&nbsp;	<button type="submit" form="artistschedule_form" class="btn btn-sm btn-success btn-sm pull-right" style="margin-top:-20px;">Save</button>
											<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>-->
							</div>
							<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
											<b>Planned Expenses</b>
											<div class="form-group" style="margin-top:-10px">
										
											<a href="#plannedexpensesmodel" role="button" data-toggle="modal" id="model_linkdata" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
											</div>
										</div>
								
									<br>
	<div class="modal fade" id="plannedexpensesmodel">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit Planned Expenses</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="plannexpenses_form" name="plannexpenses_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-12" >
											<div class="form-group">
										<label class="control-label">Expense Accounts*</label>
										<select style="width:100%;"  form="plannexpenses_form" class="form-control select2 placeholdesize expense_type" id="expenseaccount" name="expenseaccount" required>
															<option selected disabled value="">Select</option>
															
												</select>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
										<div class="col-lg-12" >
											<div class="form-group">
												<label class="control-label">Expense Sub A/c*</label>
												<select style="width:100%;"  form="plannexpenses_form" class="form-control  placeholdesize select2  input-sm exsubaccount" id="subaccount" name="subaccount" required>
															<option selected disabled value="">Select</option>
															
												</select>
											</div><!-- /form-group -->
										</div>
										</div>
										
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Qty</label>
										<input type="number" form="plannexpenses_form" style="text-align:right" class="form-control input-sm plannqty" id="plannqty" name="plannqty" value="0"  placeholder="Qty"  >
										<!--<div class="bfh-timepicker" id="shiftfromtime" data-align="right"></div>-->
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label charecternm">Rate</label>
											
												<input type="number" form="plannexpenses_form" class="form-control input-sm plannqty" style="text-align:right"  id="plannrate" name="plannrate" value="0"  placeholder="Rate"  >	
											<!--	<div class="bfh-timepicker" id="shifttototime" data-align="right"></div>-->
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">UOM</label>
												<input type="text" form="plannexpenses_form" class="form-control input-sm" id="uom" name="uom"   placeholder="Uom" disabled >
												
											<!--	<div class="bfh-timepicker" id="duration" data-align="right"></div>-->
												<!--<input type="text" form="schedulesheet_form" class="form-control input-sm" id="duration" name="duration"  placeholder="Duration"  >-->
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Amount</label>
												<input type="number" form="plannexpenses_form" class="form-control input-sm" id="plann_amunt" style="text-align:right"  name="plann_amunt"   desibled >	
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-8" >
									<br>
											<div class="form-group" style="margin:bottom:15px">
												<label   class="col-sm-5 control-label ">Payment Mode*: </label>
												
												
													<input type="radio" form="plannexpenses_form" name="payment_type"  id="case" value="Cash" required>

													<span class="custom-radio"></span>
													Cash  &nbsp;
												
												
												
													<input type="radio" form="plannexpenses_form" name="payment_type"   id="cheque" value="Cheque" >
													<span class="custom-radio "></span>
													Cheque
												
											</div><!-- /form-group -->
									</div>
									</div>
										<div class="col-sm-12" >
											<div class="col-sm-12" >
											<div class="form-group">
										<label class="control-label">Narration</label>
										<textarea form="plannexpenses_form"  class="form-control input-sm " id="narrationdata" name="narrationdata"    ></textarea>
										
											</div><!-- /form-group -->
										</div>
									</div>
										
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="plannexpenses_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<div class="col-sm-12" >
									<form id="expensive_form" name="expensive_form"></form>
										<div class="form-group">
										
											<table id="expensivedata" class="table table-stripe" >
											<thead>
											<!--<tr><th ><b>Cheque Plann Expenses: &nbsp;<lable style="text-align:right" id="totalcheque" ></lable></b></th><th></th><th colspan="3">Cash Plann Expenses:&nbsp;<lable style="text-align:right" id="totalcaseexpenses" ></lable> </th><th colspan="3">Plann Expenses:&nbsp;<lable style="text-align:right" id="totalexpenses" ></lable></th><th ></th><th ></th> </tr> -->
											<tr><th colspan="2" ><b>Cheque Total: &nbsp;<lable style="text-align:right" id="totalcheque" ></lable></b></th><th colspan="2">Cash Total:&nbsp;<lable style="text-align:right" id="totalcaseexpenses" ></lable> </th><th colspan="5">Planned Expenses:&nbsp;<lable style="text-align:right" id="totalexpenses" ></lable></th> </tr>
											<tr>
											<th width="30%">Expense Accounts</th>
											<th>Expense Sub A/c</th>
											<th width="30%">Narration</th>
											<th>Qty</th>
											<th>Rate</th>
											<th width="12%">UOM</th>
											<th width="10">Payment type</th>
											<th>Amount</th>
											<th>Action</th>
											
											</tr>
										<!--	<tr>
											<td>
												<select  form="expensive_form" class="form-control input-sm personname1" id="artistnm" name="artistnm" required>
															<option selected disabled value="">Select</option>
															
												</select>
											</td>
											<td>
											<input type="text" form="expensive_form" class="form-control input-sm" id="narration" name="narration"  placeholder="Remarks"  >
											
											</td>
											<td>
											<input type="text" form="expensive_form" class="form-control input-sm" id="qty" name="qty"  placeholder="Remarks"  >
											</td>
											<td>
											<input type="text" form="expensive_form" class="form-control input-sm" id="rate" name="rate"  placeholder="Remarks"  >
											</td>
											<td>
											<input type="text" form="expensive_form" class="form-control input-sm" id="unit" name="unit"  placeholder="Remarks"  >
											</td>
											<td>
												<input type="text" form="expensive_form" class="form-control input-sm" id="amount" name="amount"  placeholder="Remarks"  >
											</td>
											<td>
												<button type="submit" form="expensive_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											
											</tr> -->
											</thead>
											
											<tbody id="expensive"></tbody>
										<!--	<tfooter><td></td><td></td> <td></td> <td></td><td>Total Planned Expenses	</td><td><input type="number"  style="text-align:right;" class="form-control input-sm amountdata" id="amountdata" name="amountdata"  placeholder="total"  ></td></tfooter>-->
											</table>

											</div><!-- /form-group -->
										
									</div>		
									
							
						

						</div>		
						</div>
									

								
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
	
	<script src="<?php echo base_url(); ?>assets/js/bootstrap-formhelpers.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url(); ?>assets/multiselect/bootstrap-multiselect.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/myjs/artist_schedule.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>


$('.timepicker').datetimepicker({
    format: 'HH:mm:ss',
	
});
$('.projectfotage').datetimepicker({
    format: 'HH:mm:ss',
});

var date = new Date();
date.setDate(date.getDate());
$('.date').datepicker({
		   'todayHighlight':true,
		   //startDate: date
       });
//var date = new Date();
        date = date.toString('dd/MM/yyyy');
	   $("#date").val(date);
	  
	  
	   $('.artist_name').multiselect({
		includeSelectAllOption: false,
		buttonWidth: '100%'
   });
</script>

    
  </body>
</html>
