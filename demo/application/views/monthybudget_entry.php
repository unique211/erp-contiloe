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
									<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i>  Add New</button>	
							</div>
							<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active"><a href="#schedule_expenses" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Actual Schedule & Expenses</a></li>
									<li class="tabfont scenedetails"><a href="#scene_details" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Scene wise Details</a></li>
									<li class="tabfont peopleattend"><a href="#people_attendance" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> People Attendance</a></li>
									<li class="tabfont actualexpense"><a href="#Actual_expenses" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Actual Expenses</a></li>
									
								</ul>
							</div>
							
							
			<div class="panel-body formhideshow">
				<div class="tab-content">
				<!----------------------------------------------------------------schedule_expenses start ----------------------------------------->
					<div class="tab-pane fade active in tab-pane" id="schedule_expenses">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b>Monthly Budget Entry</b>
									</div>
									<br>
							<form id="actualform_form" name="actualform_form"></form>
								<div class="row formhideshow" id="schedule_expenses">
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
                                            <label class="control-label">Project*</label>
										<select  form="actualform_form" class="form-control input-sm project_name" id="project" name="project" required>
														<option selected disabled >Select</option>
														<option value="1" >project1</option>
														<option value="2" >project2</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
                                            <label class="control-label">Month*</label>
                                            <select  form="actualform_form" class="form-control input-sm project_name" id="project" name="project" required>
														<option selected disabled >Select</option>
														<option value="1" >project1</option>
														<option value="2" >project2</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Year.*</label>
                                                <select  form="actualform_form" class="form-control input-sm project_name" id="project" name="project" required>
														<option selected disabled >Select</option>
														<option value="1" >project1</option>
														<option value="2" >project2</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
									</div>
                                    <div class="col-sm-12">
                                    <div class="col-sm-6" >
									<div class="form-group">
									<table id="scenewise_table" class="table table-striped">
											<thead>
                                            <tr>
													<th style="text-align:center" colspan="2">Projected Footage.</th>
                                            </tr>
												<tr>
													<th>Number of Units.</th>
													<th>Footage</th>
													
													
												</tr>
											</thead >
											<tbody id="scenebody">
												<tr>
                                                <th> Unit - 1</th>
												<th>100:40:39 </th>
                                                </tr>
                                                <tr>
                                                <th> Unit - 2.</th>
												<th>80:20:10</th>
                                                </tr>
                                                <tr>
                                                <th> Unit - 3.</th>
												<th>100:40:39</th>
                                                </tr>	
											</tbody>
                                            <tfoot>
                                            <th>Total.</th>
												<th>100:40:39</th>
                                            </tfoot>
											</table>
									    </div>
								 </div>
                                 <div class="col-sm-6" >
											<div class="form-group">
												<label class="control-label">No of Episode Planned.*</label>
                                                <input type="text" form="actualform_form" class="form-control input-sm location" id="episideplan" name="episideplan" placeholder="episideplan" required>
											</div><!-- /form-group -->
										</div>
                                        
								</div>
											
							<!--	</div> -->
									
								<br>	
                                <div class="col-sm-12">
									<div class="form-group">
									
										<form id="expenstypedata"></form>
									
										<table id="scenewise_table" class="table table-striped">
											<thead>
												<tr>
													<th>Expense Type.</th>
													<th>Unit 1</th>
													<th>Unit 2</th>
													<th>Unit 3</th>
													<th>Total</th>
													
												</tr>
											</thead >
											<tbody id="scenebody">
											<tr>
													<td>Artist Expenses</td>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="aritstunit1" name="aritstunit1" required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="aritstunit2" name="aritstunit2" required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="aritstunit3" name="aritstunit3"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="aritsttotal" name="aritsttotal"  disabled></th>
													
												</tr>
                                                <tr>
													<td>Production Staff Expenses</td>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description" required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  disabled></th>
													
												</tr>
                                                <tr>
													<td>Admin Staff Expenses</td>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  disabled></th>
													
												</tr>
                                                <tr>
													<td>Episodic Expenses</td>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  disabled></th>
													
												</tr>
                                                <tr>
													<td>Monthly Expenses</td>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  required></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description"  disabled></th>
													
												</tr>		
											</tbody>
                                            <tfoot>
                                            <tr>
													<td>Total Budget</td>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description" placeholder="Scene Description" disabled></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description" placeholder="Scene Description" disabled></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description" placeholder="Scene Description" disabled></th>
													<th><input type="text" form="expenstypedata" class="form-control input-sm scene_description" id="scene_description" name="scene_description" placeholder="Scene Description" disabled></th>
													
												</tr>	
                                            </tfoot>
											</table>
									    </div>
										
										</div>
											
							<!--	</div> -->
									
								<br>	
									
									
									
									

						<div class="col-lg-12" >
						<input type="hidden" id="save_updatedata" value=""	/>
											&nbsp;	&nbsp;	<button type="submit" form="actualform_form" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
						</div>

	
									</div>
								</div><!-- /tab fade-->	
		<!--------------------------------------------------------------------schedule_expenses end --------------------------------------------------------------------------->						
		<!--------------------------------------------------------------------Scene wise Details start --------------------------------------------------------------------------->						
				<div class="tab-pane fade" id="scene_details">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b>Production Staff Budget (Monthly)</b>
									</div>
									<br>
						
								<div class="row formhideshow" id="scene_details">
								
								<div class="row">
									<div class="form-group">
										<div class="col-lg-12">
											<a href="#production_details" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										</div>
									</div>
								</div>
									<br>
		<div class="modal fade" id="production_details">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add Production Staff Budget</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
                            <form id="production_form" name="production_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Name of Staff</label>
                                        <select form="production_form"  class="form-control input-sm staffname"  id="staffname" name="staffname"   >
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Designation*</label>
												<select form="production_form"  class="form-control input-sm staffname"  id="desgination" name="desgination"  placeholder="Designation"  >
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Qty/Days</label>
												<input type="text" form="production_form" class="form-control input-sm effect" id="qty" name="qty" placeholder="Qty" required>
											</div><!-- /form-group -->
										</div>
									</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Rate*</label>
										<input type="text" form="production_form" class="form-control input-sm sub_location" id="rate" name="rate" placeholder="Rate" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label charecternm">Per Unit*</label>
											<!--	<input type="text" form="scenewise_form" class="form-control input-sm character_name" id="character_name" name="character_name" placeholder="Character Name" required>-->
											<select form="production_form"  class="form-control input-sm perunit"  id="perunit" name="perunit"   >
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Planned Footage*</label>
												<input type="time" form="scenewise_form" class="form-control input-sm plannes_footage" id="plannes_footage" name="plannes_footage" required>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Actual Footage*</label>
										<input type="time" form="scenewise_form" class="form-control input-sm actual_footage" id="actual_footage" name="actual_footage" placeholder="Actual Footage" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Remarks*</label>
												<input type="text" form="scenewise_form" class="form-control input-sm remarks" id="remarks" name="remarks" placeholder="Remarks" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
										</div>
										</div>
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="scenewise_form" class="btn btn-sm btn-success btn-sm pull-right">Add</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
								
									<!--	<div class="row"> -->
									<div class="col-sm-12">
									<div class="form-group">
									
										
									
										<table id="scenewise_table" class="table table-striped">
											<thead>
												<tr>
													<th>Scene No.</th>
													<th>Scene Description</th>
													<th>Effect</th>
													<th>Sub Location</th>
													<th>Character Name</th>
													<th>Planned Footage</th>
													<th>Actual Footage</th>
													<th>Remarks</th>
													<th>Action</th>
												</tr>
											</thead >
											<tbody id="scenebody">
													
											</tbody>
											</table>
									    </div>
										
										</div>
											
							<!--	</div> -->
									
								<br>	

						<div class="col-lg-12" >
						<input type="hidden" id="screen_row_id" value="0"	/>
							<input type="hidden" id="screen_save_update" value=""	/>
											&nbsp;	&nbsp;	<button type="submit" form="charectermaster_form" id="scenesave" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
										<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
						</div>

	
									</div>
								</div><!-- /tab fade-->	
		
		
		
		<!--------------------------------------------------------------------Scene wise Details end --------------------------------------------------------------------------->						
		<!--------------------------------------------------------------------People Attendance start --------------------------------------------------------------------------->						
							<div class="tab-pane fade" id="people_attendance">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b>People Attendance</b>
									</div>
									<br>
							<form id="charectermaster_form" name="charectermaster_form"></form>
								<div class="row formhideshow" id="people_attendance">
								
								<div class="row">
									<div class="form-group">
										<div class="col-lg-12">
											<a href="#peopleattendance" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										</div>
									</div>
								</div>
									<br>
		<div class="modal fade" id="peopleattendance">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add People Attendance</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
									<form id="peopleattend_form" name="peopleattend_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">People Type*</label>
												<select  form="peopleattend_form" class="form-control input-sm people" id="people_type" name="people_type" required>
														<option selected disabled>select</option>
														<option value="1">people1</option>
														<option value="2">people2</option>
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Character/Role/Designation*</label>
												<select  form="peopleattend_form" class="form-control input-sm role" id="role" name="role" required>
														<option selected disabled>select</option>
														<option value="1">role1</option>
														<option value="2">role2</option>
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">People*</label>
												<select  form="peopleattend_form" class="form-control input-sm " id="people" name="people" required>
														<option selected disabled>select</option>
														<option value="1">role1</option>
														<option value="2">role2</option>
													</select>
											<!--	<input type="text" form="charectermaster_form" class="form-control input-sm people" id="people" name="people" placeholder="People" required>-->
											</div><!-- /form-group -->
										</div>
									</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Scheduled From Shift time*</label>
										<input type="time" form="peopleattend_form" class="form-control input-sm Scheduled_from" id="Scheduled_from" name="Scheduled_from" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Scheduled To Shift time*</label>
												<input type="time" form="peopleattend_form" class="form-control input-sm Scheduled_to" id="Scheduled_to" name="Scheduled_to" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Actual From Shift time*</label>
												<input type="time" form="peopleattend_form" class="form-control input-sm Actual_from" id="Actual_from" name="Actual_from" required>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Actual To Shift time*</label>
										<input type="time" form="peopleattend_form" class="form-control input-sm actual_to" id="actual_to" name="actual_to" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Duration*</label>
												<input type="text" form="peopleattend_form" class="form-control input-sm duration" id="durationdata" name="durationdata" disabled>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Extra Hours*</label>
												<input type="text" form="peopleattend_form" class="form-control input-sm extra_hour" id="extra_hour" name="extra_hour" placeholder="extra_hour" disabled>
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Remarks*</label>
										<input type="text" form="peopleattend_form" class="form-control input-sm remarks" id="remark" name="remark" placeholder="Remarks" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" ></div>
										<div class="col-sm-4" ></div>
										</div>
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="peopleattend_form" class="btn btn-sm btn-success btn-sm pull-right">Add</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
								
									<!--	<div class="row"> -->
									<div class="col-sm-12">
									<div class="form-group">
									
										
									<div class="table-responsive"> 
										<table id="peopleattand" class="table table-striped">
											<thead>
												<tr>
													<th></th>
													<th></th>
													<th></th>
													<th style="text-align:center" colspan="2">Scheduled
													</th>
													<th colspan="2" style="text-align:center">Actual</th>
													<th></th>
													<th></th>
													<th></th>
													<th></th>
													<th></th>
												</tr>
											</thead>
											<thead>
												<tr>
													<th>People Type</th>
													<th>Character/Role/Designation</th>
													<th>People</th>
													<th>From Shift time</th>
													<th >To Shift time</th>
													<th  width="10%">From Shift time</th>
													<th width="10%">To Shift time</th>
													<th  width="10%">Duration</th>
													<th  width="10%">Extra Hours</th>
													<th  width="10%">Remarks</th>
													<th>Action</th>
												</tr>
											</thead >
											<tbody id="peoplebody">
													
											</tbody>
											</table>
									    </div>
										
										</div>
												
							</div> 
									
								<br>	

						<div class="col-lg-12" >
							<input type="hidden" id="schedulesheet_row_id" value="0"	/>
							<input type="hidden" id="schedulesheet_save_update" value=""	/>
											&nbsp;	&nbsp;	<button type="submit" form="charectermaster_form" id="peoplesave" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
										<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
						</div>

	
									</div>
								</div><!-- /tab fade-->	
		
		
		
		<!--------------------------------------------------------------------People Attendance end --------------------------------------------------------------------------->						
		<!--------------------------------------------------------------------Actual Expenses start --------------------------------------------------------------------------->						
				<div class="tab-pane fade" id="Actual_expenses">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b>Scene wise Details</b>
									</div>
									<br>
						
								<div class="row formhideshow" id="Actual_expenses">
								
								<div class="row">
									<div class="form-group">
										<div class="col-lg-12">
											<a href="#Actual_expense" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										</div>
									</div>
								</div>
									<br>
		<div class="modal fade" id="Actual_expense">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add Actual Expenses</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
									<form id="actualexpe_form" name="actualexpe_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Expense Type*</label>
												<select  form="actualexpe_form" class="form-control input-sm expense_type" id="expense_type" name="expense_type" required>
														<option selected disabled>select</option>
														<option value="1">type1</option>
														<option value="2">type2</option>
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Narration*</label>
												<input type="text" form="actualexpe_form" class="form-control input-sm Narration" id="Narration" name="Narration" placeholder="Narration" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Planned Amount*</label>
												<input type="number" form="actualexpe_form" class="form-control input-sm planned_amount" id="planned_amount" name="planned_amount" placeholder="Planned Amount" disabled>
											</div><!-- /form-group -->
										</div>
									</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Qty*</label>
										<input type="number" form="actualexpe_form" class="form-control input-sm " id="qty" name="qty" placeholder="Sub Location" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Rate*</label>
												<input type="number" form="actualexpe_form" class="form-control input-sm rate" id="rate" name="rate" placeholder="Rate" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Unit*</label>
												<select  form="actualexpe_form" class="form-control input-sm unit" id="unit" name="unit" required>
														<option selected disabled>select</option>
														<option value="1">type1</option>
														<option value="2">type2</option>
												</select>
												<!--<input type="text" form="actualexpe_form" class="form-control input-sm unit" id="unit" name="unit" required> -->
											</div><!-- /form-group -->
										</div>
										</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Amount*</label>
										<input type="number" form="actualexpe_form" class="form-control input-sm amount" id="amountdata" name="amount" placeholder="Amount" required>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Supplier Name*</label>
												<select  form="actualexpe_form" class="form-control input-sm suppliernm" id="supplier_name" name="supplier_name" required>
														<option selected disabled>select</option>
														<option value="1">name1</option>
														<option value="2">name2</option>
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Rerefence No.*</label>
												<input type="text" form="actualexpe_form" class="form-control input-sm Rerefence_No." id="Rerefence_No" name="Rerefence_No" placeholder="Rerefence No" required>
											</div><!-- /form-group -->
										</div>
										</div>
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="actualexpe_form" class="btn btn-sm btn-success btn-sm pull-right">Add</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
								
										
										<div class="col-sm-12">
									<div class="form-group">
										
										
										<div class="table-responsive"> 
										<table id="expensivemaster"  class="table table-stripe">
											<thead>
												<tr>
													<th >Expense Type</th>
													<th  > Narration</th>
													<th >Planned Amount</th>
													<th  >Qty</th>
													<th   >Rate</th>
													<th   >Unit</th>
													<th  >Amount</th>
													<th  >Supplier Name</th>
													<th  >Rerefence No.</th>
												
												</tr>
											</thead >
											<tbody id="expensive">
													
											</tbody>
											</table>
									    </div>
										
										</div>
									
								</div>
									
								<br>	

						<div class="col-lg-12" >
						<input type="hidden" id="row_update" value="0"	/>
						<input type="hidden" id="expensivesave_update" value=""	/>
							<input type="hidden" id="save_update" value=""	/>
							<input type="hidden" id="workinghour" value=""	/>
										&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button>
											&nbsp;	&nbsp;	<button type="button" style="margin-left:10px;" form="charectermaster_form" class="btn btn-sm btn-primary pull-right " >print</button>
											&nbsp;	&nbsp;	<button type="submit" id="actualsave" form="charectermaster_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
										<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
						</div>

	
									</div>
								</div><!-- /tab fade-->	
		
		
		
		
		<!--------------------------------------------------------------------Actual Expenses end --------------------------------------------------------------------------->						
				
				</div><!--tab content-->
					</div><!-- /panel body -->
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
	<script type="text/javascript" src="<?php echo base_url(); ?>assets/multiselect/bootstrap-multiselect.js"></script>
   <!-- <script src="<?php echo base_url(); ?>assets/js/myjs/actualschedule.js"></script> -->
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>

$('.date').datepicker({
           'todayHighlight':true,
       });
var date = new Date();
        date = date.toString('HH:MM:SS');
			 $("#date").val(date);
			 $('.charectername').multiselect({
		includeSelectAllOption: false,
		buttonWidth: '100%'
   });
</script>

    
  </body>
</html>
