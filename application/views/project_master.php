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
<style>
    .alnright { text-align: right; }
</style>
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
									<h4 id="pro_name" class="pull-right" style="margin-top:-5px;font-weight:bold;"></h4>	
							</div>
							
								<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active projectmaster"><a href="#projectmaster" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Project Master</a></li>
									<li class="tabfont artist_tab "><a href="#list_artist" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> List of Artist</a></li>
									<li class="tabfont production_tab"><a href="#list_production_staff" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> List of Production Staff</a></li>
									<li class="tabfont episodic_tab"><a href="#list_episodic_staff" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> List of Episodic Staff</a></li>
									<li class="tabfont monthly_expenses"><a href="#monthly_expenses" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Monthly Expenses</a></li>
									<li class="tabfont prodoc_tab"><a href="#document_tab" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Document</a></li>
									
								</ul>
							</div>
							
					<div class="panel-body formhideshow">
						<div class="tab-content">
<!--------------------------------------------------projectmaster tab--------------------------------------------------------------------->
								<div class="tab-pane fade active in tab-pane" id="projectmaster">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>Project Master</b>
									</div>
									<br>
									<form id="projectmaster_form" name="projectmaster_form"></form>
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Project Name*</label>
												<input type="text" form="projectmaster_form" class="form-control input-sm" id="name" name="name"  placeholder="Name" required  >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Started Date*</label>
											<!-- <input type="date" form="projectmaster_form" class="form-control input-sm" id="s_date" name="s_date"  placeholder="Started Date" required  > -->
											<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="s_date" name="s_date"  required>
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Channel Name</label>
											<input type="text" form="projectmaster_form" class="form-control input-sm" id="channel" name="channel"  placeholder="Channel Name"   >
												</div><!-- /form-group -->
										</div>
									</div>

									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Schedule</label>
												<input type="text" form="projectmaster_form" class="form-control input-sm" id="schedule" name="schedule"  placeholder="Schedule"  >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">% of Weight - age for admin cost</label>
											<input type="number" form="projectmaster_form" class="form-control input-sm" id="admin_cost" name="admin_cost"  placeholder="%of Weight - age for admin cost"   >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Remark</label>
														<textarea rows="3" cols="50" form="projectmaster_form" class="form-control input-sm" id="remark" name="remark" placeholder="Remark"></textarea>
																</label>											
											</div><!-- /form-group -->
										</div>
										
									</div>
									
									<div class="col-sm-12" style="display:none;">
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Director</label>
												<input type="text" form="projectmaster_form" class="form-control input-sm" id="director" name="director"  placeholder="Director" >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">DOP</label>
											<input type="text" form="projectmaster_form" class="form-control input-sm" id="dop" name="dop"  placeholder="DOP"   >
												</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											
										</div>
										<div class="col-sm-4" >
											
										</div>
										
									</div>
									
										
							
							<div class="col-lg-12" >
								<!--<input type="hidden" id="save_update" value=""	/> -->
										<!--		&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button> -->
										
											&nbsp;	&nbsp;		<button type="submit" form="projectmaster_form" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>	 
							</div>

								
						</div>
<!-----------------------------------------------------------------projectmaster tab end--------------------------------------->	
<!------------------------------------------------------list_artist tab start------------------------------------------------------>
			<div class="tab-pane fade" id="list_artist">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>List of Artist</b>
												<div class="form-group" style="margin-top:-10px;">
										
											<a href="#list_artist_details" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
									</div>
								
									<br>
									<div class="row">
								
								</div>
									<br>
			<div class="modal fade" id="list_artist_details">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit List of Artist</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="list_artist_form" name="list_artist_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Character*</label>
										<select form="list_artist_form" class="form-control select2 input-sm roledata" id="role" style="width:100%;" required>
												<option selected disabled >Select</option>
													
										</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-8">
											<div class="form-group">
												<label class="control-label">Person Name*</label>
												<select form="list_artist_form" class="person_name select2 form-control input-sm budget" id="person_name" style="width:100%;" required>
												<option selected disabled >Select</option>
													
												</select>
											</div><!-- /form-group -->
										</div>
										
									</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Effective From</label>
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective" name="effective"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
											</div>
										
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Effective To</label>
										<div class="input-group date doj" data-provide="datepicker">
												<input type="text"   class="form-control input-sm placeholdesize datepicker"  id="leavingdate" name="leavingdate"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
									
										<div class="col-lg-3" >
											<div class="form-group">
												<label class="control-label charecternm">Credit day</label>
										      <input type="number" form="list_artist_form" class="form-control input-sm rate" id="creditday" name="creditday" style="text-align:right;"  placeholder="Credit day">
											</div><!-- /form-group -->
										</div>
									</div>
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Rate</label>
										<input type="number" form="list_artist_form" class="form-control input-sm rate" id="rate" name="rate" style="text-align:right;"  placeholder="Rate">
											</div><!-- /form-group -->
										</div>
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Per Unit*</label>
										<select  form="list_artist_form" class="form-control input-sm select2 budget unit" id="unit" style="width:100%;" name="unit" required>
													<option selected disabled >Select</option>
													<option value="1" >Per Day</option>
													<option value="2" >Per Month</option>
													<option value="3" >Per Episode</option>
										</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Overtime/Hour</label>
												<input type="number" form="list_artist_form" class="form-control input-sm overtime" id="overtime" name="overtime" style="text-align:right;"  placeholder="OverTime">
											</div><!-- /form-group -->
										</div>
										
										</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
													<label class="control-label">Active</label><br>
													<input type="checkbox"  id="status" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
												</div><!-- /form-group -->
											</div>
											<div class="col-sm-6" >
												<div class="form-group">
											<label class="control-label">Attach Agreement</label>
											<div id="add_file1">
													<input class="form-control input-sm " type="file" id="docupload1" name="docupload1">
											</div>
												<input type="hidden" id="file_hidden1" value="">
												<div id="msg1"></div>
												</div><!-- /form-group -->
											</div>
									</div>


							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="list_artist_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<div class="col-sm-12" >
										
										<div class="form-group">
										
											<table id="project_tab1" class="table table-stripe" >
											<thead>
											<tr>
											<th style="display:none;">Role Id</th>
											<th style="display:none;">Person Id</th>
											
											<th>Character</th>
											<th>Person Name</th>
											<th>Effective From</th>
											<th>Effective To</th>
											<th>Credit Day</th>
											<th>Rate</th>
											<th>Per Unit</th>
											<th>Overtime/Hour</th>
											<th>Active</th>
											<th style="display:none;">Attchment</th>
											<th  style="column-width:70px;">Action</th>
											</tr>
											<!--<tr>
											
											<td>
												<select form="list_artist_form" class="form-control input-sm roledata" id="role" name="role" required>
												<option selected disabled >Select</option>
													
												</select>
											</td>
											<td>
												<select form="list_artist_form" class="person_name form-control input-sm budget" id="person_name" name="person_name" required>
												<option selected disabled >Select</option>
													
												</select>
											</td>
											<td>
									
											<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective" name="effective"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</td>
											<td>
												<input type="number" form="list_artist_form" class="form-control input-sm rate" id="rate" name="rate" style="text-align:right;"  placeholder="Rate">
											</td>
											<td>
												<select  form="list_artist_form" class="form-control input-sm budget unit" id="unit" name="unit" >
													<option selected disabled >Select</option>
													<option value="1" >Per Day</option>
													<option value="2" >Per Month</option>
													<option value="3" >Per Episode</option>
												</select>
											</td>
											<td>
												<input type="number" form="list_artist_form" class="form-control input-sm overtime" id="overtime" name="overtime" style="text-align:right;"  placeholder="OverTime"   >
											</td>
											<td>
												<input type="checkbox"  id="status" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
											</td>
											<td  style="column-width:70px;">
											<button type="submit" form="list_artist_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											</tr>-->
											</thead>
											
											<tbody id="artists"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
									<div class="col-lg-12" >
							<!--	<input type="hidden" id="save_update" value=""	/> -->
								<input type="hidden" id="list_save_update" value=""	/>
								<input type="hidden" id="list_row_id" value="0"/>	
												
												&nbsp;	&nbsp;	<button type="button" id="artist"  class="btn btn-sm btn-success btn-sm pull-right">Next</button>
												<!--&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>-->
							</div>
			
			</div>
<!-------------------------------------------------------------list_artist tab end--------------------------------------->
<!----------------------------------------------------------list_production_staff tab start------------------------------------------------------>
			<div class="tab-pane fade" id="list_production_staff">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>List of Production Staff</b>
												<div class="form-group" style="margin-top:-10px;">
									
											<a href="#list_production_staffdata" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
									</div>
									<br>
									<div class="row">
									
								</div>
									<br>
			<div class="modal fade" id="list_production_staffdata">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit List of Production Staff</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="list_Production_form" name="list_Production_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Designation*</label>
										<select form="list_Production_form" class="form-control input-sm budget role1" id="role1" style="width:100%;"  required>
												<option selected disabled >Select</option>
													
										</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-8" >
											<div class="form-group">
												<label class="control-label">Person Name*</label>
												<select	form="list_Production_form"   class="person_name1 select2 form-control input-sm budget" id="person_name1" name="person_name1" style="width:100%;" required>
												<option selected disabled >Select</option>
												
												</select>
											</div><!-- /form-group -->
										</div>
									</div>
									
									<div class="col-sm-12" >	
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Effective From</label>
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective1" name="effective1"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
									
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Effective To</label>
										<div class="input-group date doj" data-provide="datepicker">
												<input type="text"   class="form-control input-sm placeholdesize datepicker"  id="leavingdate1" name="leavingdate1"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label charecternm">Credit day</label>
										      <input type="number" form="list_Production_form" class="form-control input-sm rate" id="creditday1" name="creditday1" style="text-align:right;"  placeholder="Credit day">
											</div><!-- /form-group -->
										</div>
										
									</div>
									<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Rate</label>
											<input type="number" form="list_Production_form" class="form-control input-sm rate" id="rate1" name="rate1" style="text-align:right;"  placeholder="Rate">
												</div><!-- /form-group -->
											</div>
											<div class="col-sm-4" >
											<div class="form-group">
											<label class="control-label">Per Unit*</label><br>
											<select  form="list_Production_form" class="form-control select2 input-sm budget unit" id="unit1" name="unit1" style="width:100%;" required>
														<option selected disabled >Select</option>
														<option value="1" >Per Day</option>
														<option value="2" >Per Month</option>
														<option value="3" >Per Episode</option>
											</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Overtime/Hour</label>
												<input type="number" form="list_Production_form" class="form-control input-sm overtime" id="overtime1" name="overtime1" style="text-align:right;"  placeholder="OverTime">
											</div><!-- /form-group -->
										</div>
										
										</div>

										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
													<label class="control-label">Active</label><br>
													<input type="checkbox"  id="status1" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
												</div><!-- /form-group -->
											</div>
											
											<div class="col-sm-6" >
											<div class="form-group">
										<label class="control-label">Attach Agreement</label>
										<div id="add_file2">
												<input class="form-control input-sm " type="file" id="docupload2" name="docupload2">
										</div>
											<input type="hidden" id="file_hidden2" value="">
											<div id="msg2"></div>
											</div><!-- /form-group -->
										</div>
									</div>
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="list_Production_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<div class="col-sm-12" >
								
										<div class="form-group">
										
											<table id="project_tab2" class="table table-stripe">
											<thead>
											<tr>
											
											<th style="display:none;">Role Id</th>
											<th style="display:none;">Person Id</th>
											
											<th>Designation</th>
											<th>Person Name</th>
											<th>Effective From</th>
											<th>Effective To</th>
											<th>Credit Day</th>
											<th>Rate</th>
											<th>Per Unit</th>
											<th>Overtime/Hour</th>
											<th>Active</th>
											<th style="display:none;">Attchment</th>
											<th style="column-width:70px;">Action</th>
											</tr>
											<!--<tr>
											
											<td>
												<select form="list_Production_form" class="form-control input-sm budget role1" id="role1"  required>
												<option selected disabled >Select</option>
													
												</select>
											</td>
											<td>
												<select	form="list_Production_form"   class="person_name1 form-control input-sm budget" id="person_name1" name="person_name1" required>
												<option selected disabled >Select</option>
												
												</select>
											</td>
											<td>
												
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective1" name="effective1"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</td>
											<td>
												<input type="number" form="list_Production_form" class="form-control input-sm rate" id="rate1" name="rate1" style="text-align:right;" placeholder="Rate"   >
											</td>
											<td>
												<select  class="form-control input-sm budget unit" id="unit1" name="unit1" form="list_Production_form" >
													<option selected disabled >Select</option>
													<option value="1" >Per Day</option>
													<option value="2" >Per Month</option>
													<option value="3" >Per Episode</option>
												</select>
											</td>
											<td>
												<input type="number" form="list_Production_form" class="form-control input-sm overtime" id="overtime1" name="overtime1" style="text-align:right;" placeholder="OverTime"   >
											</td>
											<td>
												<input type="checkbox"  id="status1" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
											</td>
											<td style="column-width:70px;">
											<button type="submit" form="list_Production_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											</tr>-->
											</thead>
											
											<tbody id="production"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
									<div class="col-lg-12" >
							<!--	<input type="hidden" id="save_update" value=""	/> -->
								<input type="hidden" id="listproduct_save_update" value=""	/>
								<input type="hidden" id="listproduct_row_id" value="0"/>	
												
												&nbsp;	&nbsp;	<button type="button" id="tab2"  class="btn btn-sm btn-success btn-sm pull-right">Next</button>
											<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
							</div>
			
			
			
			</div>
<!-------------------------------------------------------list_production_staff tab end--------------------------------------->	
<!------------------------------------------------------------list_episodic_staff tab start------------------------------------------------------>
			<div class="tab-pane fade" id="list_episodic_staff">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>List of Episodic Staff</b>
												<div class="form-group" style="margin-top:-10px">
										
											<a href="#list_episodic_staffdata" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
									</div>

									
									<br>
									<div class="row">
									
								</div>
									<br>
			<div class="modal fade" id="list_episodic_staffdata">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit List of Episodic Staff</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="list_Episodic_form" name="list_Episodic_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Designation*</label>
										<select form="list_Episodic_form" class="form-control select2 input-sm budget role2" id="role2" name="role2" style="width:100%;" required>
													<option selected disabled >Select</option>
													
										</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-8" >
											<div class="form-group">
												<label class="control-label">Person Name*</label>
												<select   form="list_Episodic_form" class="person_name2 select2 form-control input-sm budget person_name" id="person_name2" name="person_name2" style="width:100%;" required>
													<option selected disabled >Select</option>
													
												</select>
											</div><!-- /form-group -->
										</div>
										
									</div>
									
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Effective From</label>
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective2" name="effective2"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										
											<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Effective To</label>
										<div class="input-group date doj" data-provide="datepicker">
												<input type="text"   class="form-control input-sm placeholdesize datepicker"  id="leavingdate2" name="leavingdate2"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label charecternm">Credit day</label>
										      <input type="number" form="list_Episodic_form" class="form-control input-sm rate" id="creditday2" name="creditday2" style="text-align:right;"  placeholder="Credit day">
											</div><!-- /form-group -->
										</div>
										
									</div>
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Rate</label>
										<input type="number" form="list_Episodic_form" class="form-control input-sm rate" id="rate2" name="rate2" style="text-align:right;"  placeholder="Rate">
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Per Unit*</label>
										<select  form="list_Episodic_form" class="form-control select2 input-sm budget unit" id="unit2" name="unit2" style="width:100%;" required>
													<option selected disabled >Select</option>
													<option value="1" >Per Day</option>
													<option value="2" >Per Month</option>
													<option value="3" >Per Episode</option>
										</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Overtime/Hour</label>
												<input type="number" form="list_Episodic_form" class="form-control input-sm overtime" id="overtime2" name="overtime2" style="text-align:right;"  placeholder="OverTime">
											</div><!-- /form-group -->
										</div>
										
										</div>
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
													<label class="control-label">Active</label><br>
													<input type="checkbox"  id="status2" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
												</div><!-- /form-group -->
											</div>
											
											<div class="col-sm-6" >
											<div class="form-group">
										<label class="control-label">Attach Agreement</label>
										<div id="add_file3">
												<input class="form-control input-sm " type="file" id="docupload3" name="docupload3">
										</div>
											<input type="hidden" id="file_hidden3" value="">
											<div id="msg3"></div>
											</div><!-- /form-group -->
										</div>
									</div>
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="list_Episodic_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<div class="col-sm-12" >
										
										<div class="form-group">
										
											<table id="project_tab3" class="table table-stripe">
											<thead>
											<tr>
											
											<th style="display:none;">Role Id</th>
											<th style="display:none;">Person Id</th>
											
											<th>Designation</th>
											<th>Person Name</th>
											<th>Effective From</th>
											<th>Effective To</th>
											<th>Credit Day</th>
											<th>Rate</th>
											<th>Per Unit</th>
											<th>Overtime/Hour</th>
											<th style="display:none;">Attchment</th>
											<th>Active</th>
											<th style="column-width:70px;">Action</th>
											</tr>
										<!--	<tr>
											
											<td>
												<select form="list_Episodic_form" class="form-control input-sm budget role2" id="role2" name="role2" required>
													<option selected disabled >Select</option>
													
												</select>
											</td>
											<td>
												<select   form="list_Episodic_form" class="person_name2 form-control input-sm budget person_name" id="person_name2" name="person_name2" required>
													<option selected disabled >Select</option>
													
												</select>
											</td>
											<td>
											
											<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective2" name="effective2"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</td>
											<td>
												<input type="number" form="list_Episodic_form" class="form-control input-sm rate" id="rate2" name="rate2" style="text-align:right;" placeholder="Rate"  >
											</td>
											<td>
												<select  form="list_Episodic_form" class="form-control input-sm budget unit" id="unit2" name="unit2" >
													<option selected disabled >Select</option>
													<option value="1" >Per Day</option>
													<option value="2" >Per Month</option>
													<option value="3" >Per Episode</option>
												</select>
											</td>
											<td>
												<input type="number" form="list_Episodic_form" class="form-control input-sm overtime" id="overtime2" name="overtime2" style="text-align:right;" placeholder="OverTime"  >
											</td>
											<td>
												<input type="checkbox"  id="status2" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
											</td>
											<td style="column-width:70px;">
											<button type="submit" form="list_Episodic_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											</tr>-->
											</thead>
											
											<tbody id="episidic"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
									<div class="col-lg-12" >
								<!-- <input type="hidden" id="save_update" value=""	/> -->
								<input type="hidden" id="listepisodic_row_id" value="0"/>	
								<input type="hidden" id="listepisoic_save_update" value=""	/>	
								
												&nbsp;	&nbsp;	<button type="button" id="tab3" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
											<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
							</div>
			
			
			
			</div>

<!-------------------------------------------------------------------list_episodic_staff tab end--------------------------------------->	
<!-------------------------------------------------------------------Monthly Expenses tab Start--------------------------------------->				

<div class="tab-pane fade" id="monthly_expenses">
									<div style="margin-top:-15px;border-bottom:2px solid;width:100%;">
												<b>Monthly Expenses</b>
												<div class="form-group" style="margin-top:-10px;">
									
											<a href="#monthlyexpensesmodel" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
									</div>
									<br>
									<div class="row">
									
								</div>
									<br>
			<div class="modal fade" id="monthlyexpensesmodel">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit Monthly Expenses</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="monthlyexpenses" name="monthlyexpenses"></form>
										
											<div class="col-sm-12" >
												<div class="form-group">
											<label class="control-label">Expense A/c*</label>
											<select form="monthlyexpenses" class="form-control select2 input-sm expense_type " id="expensestype" style="width:100%;" required>
													<option selected disabled >Select</option>
														
											</select>
												</div><!-- /form-group -->
											</div>
										<div class="col-sm-12" >
											<div class="form-group">
												<label class="control-label">Expense Sub A/c*</label>
												<select form="monthlyexpenses" class="form-control select2 input-sm expensubacc " id="expensubacc" style="width:100%;" required>
												<option selected disabled >Select</option>
													
										</select>
											</div><!-- /form-group -->
										</div>
										
										<div class="col-sm-12" >
										<div class="col-sm-6" >
											<div class="form-group">
												<label class="control-label">Effective From</label>
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text"   form="monthlyexpenses" class="form-control input-sm placeholdesize datepicker"  id="effecitivedate4" name="effecitivedate4"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										
										<div class="col-sm-6" >
											<div class="form-group">
											<label class="control-label">Effective To</label>
											<div class="input-group date doj" data-provide="datepicker">
												<input type="text"   form="monthlyexpenses"  class="form-control input-sm placeholdesize datepicker"  id="leavingdate4" name="leavingdate4"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										
										
									</div>
									
										<div class="col-sm-12" >
										<div class="col-sm-6" >
											<div class="form-group">
												<label class="control-label">Vendor Name*</label>
												<input type="text" form="monthlyexpenses" class="form-control input-sm " id="vendorname" name="vendorname"   placeholder="Vendor Name">
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-6" >
											<div class="form-group">
												<label class="control-label">Amount</label>
												<input type="number" form="monthlyexpenses" class="form-control input-sm " id="amount_data" name="amount_data" style="text-align:right;"  placeholder="Amount">
											</div><!-- /form-group -->
										</div>

									</div>
									
									<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
													<label class="control-label">Active</label><br>
													<input type="checkbox"  id="status4" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
												</div><!-- /form-group -->
											</div>
											
											<div class="col-sm-6" >
											<div class="form-group">
										<label class="control-label">Attach Agreement</label>
										<div id="add_file4">
												<input class="form-control input-sm " type="file" id="docupload4" name="docupload4">
										</div>
											<input type="hidden" id="filename4" name="filename4" value=""> 
											<div id="msg4"></div>
											</div><!-- /form-group -->
										</div>
									</div>
									
									
										<div class="col-sm-12" >
											<div class="col-sm-4" >
											<div class="form-group">
									<!--	<label class="control-label">Start Date</label>
										<div class="input-group date doj" data-provide="datepicker">
												<input type="text"   class="form-control input-sm placeholdesize datepicker"  id="startdate" name="startdate"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div> 
											</div>--->
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
											<!--	<label class="control-label charecternm">End Date</label>
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="enddate" name="enddate"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>-->
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">

											</div><!-- /form-group -->
										</div>
										</div>
										
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="monthlyexpenses" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<div class="col-sm-12" >
								
										<div class="form-group">
										
											<table id="tblmonthlyexpenses" name="tblmonthlyexpenses" class="table table-stripe">
											<thead>
											<tr>
											<th style="display:none;">Row Id</th>
											<th style="display:none;">Expense Id</th>
											<th style="display:none;">Expensesubac Id</th>
											
											<th>Expense A/c </th>
											<th>Expense Sub A/c </th>
											<th>Vendor Name</th>
											<th>Effective From</th>
											<th>Effective To</th>
											<th>Amount </th>
											<th style="display:none;">Row Id</th>
											<th style="display:none;">Expense Id</th>
											<th style="column-width:70px;">Action</th>
											</tr>
											<!--<tr>
											
											<td>
												<select form="list_Production_form" class="form-control input-sm budget role1" id="role1"  required>
												<option selected disabled >Select</option>
													
												</select>
											</td>
											<td>
												<select	form="list_Production_form"   class="person_name1 form-control input-sm budget" id="person_name1" name="person_name1" required>
												<option selected disabled >Select</option>
												
												</select>
											</td>
											<td>
												
												<div class="input-group date doj" data-provide="datepicker">
												<input type="text" class="form-control input-sm placeholdesize datepicker"  id="effective1" name="effective1"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</td>
											<td>
												<input type="number" form="list_Production_form" class="form-control input-sm rate" id="rate1" name="rate1" style="text-align:right;" placeholder="Rate"   >
											</td>
											<td>
												<select  class="form-control input-sm budget unit" id="unit1" name="unit1" form="list_Production_form" >
													<option selected disabled >Select</option>
													<option value="1" >Per Day</option>
													<option value="2" >Per Month</option>
													<option value="3" >Per Episode</option>
												</select>
											</td>
											<td>
												<input type="number" form="list_Production_form" class="form-control input-sm overtime" id="overtime1" name="overtime1" style="text-align:right;" placeholder="OverTime"   >
											</td>
											<td>
												<input type="checkbox"  id="status1" checked data-toggle="toggle"  data-size="mini"    data-on="Yes" data-off="No"  data-onstyle="success" data-offstyle="danger"  >
											</td>
											<td style="column-width:70px;">
											<button type="submit" form="list_Production_form" class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
											</td>
											</tr>-->
											</thead>
											
											<tbody id="monthlybody"></tbody>
											</table>

											</div><!-- /form-group -->
										
									</div>
									<div class="col-lg-12" >
							<!--	<input type="hidden" id="save_update" value=""	/> -->
								<input type="hidden" id="monthly_save_update" value=""	/>
								<input type="hidden" id="monthly_row_id" value="0"/>	
												
												&nbsp;	&nbsp;	<button type="button" id="monthly_tab"  class="btn btn-sm btn-success btn-sm pull-right">Next</button>
											<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
							</div>
			
			
			
			</div>

<!-------------------------------------------------------------------Monthly Expenses tab end--------------------------------------->				

<!--------------------------------------------------------------------document tab start---------------------------------------------->						
						<div class="tab-pane fade" id="document_tab">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
											<b>Document</b>
											<div class="form-group" style="margin-top:-10px;">
										
											<a href="#documenttab_data" role="button" data-toggle="modal" id="model_link" class="btn btn-primary btn-xs pull-right btn-small fnmodel_link"><i class="fa fa-plus"></i>  Add</a>
										
									</div>
								</div>
								
								<br>
							
									<br>
			<div class="modal fade" id="documenttab_data">
  			<div class="modal-dialog">
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
						<h4>Add/Edit Document</h4>
      				</div>
				    <div class="modal-body">
							<div class="row" >
							<form id="document_form" name="document_form"></form>
										<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
										<label class="control-label">Type of Document*</label>
										<select  class="form-control input-sm type_document" form="document_form" id="type_document" name="type_document" required>
														<option value="" selected disabled value="">Select</option>
														<option value="1">Agreement</option>
														<option value="2">GST Certificate</option>
														<option value="3">PAN Number</option>
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Description</label>
												<input type="text"  class="form-control input-sm" form="document_form" id="description" name="description"  placeholder="Description"   >
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Filename*</label>
												<div id="add_file">
															<input type="file"  class="" id="filename" name="filename" required>
												</div>
													<div id="msg"></div>
													<input type="hidden" id="file_hidden" value="">
											</div><!-- /form-group -->
										</div>
									</div>
										
							</div>
				    </div>
				    <div class="modal-footer">
				        <button class="btn btn-sm btn-info closemodel" data-dismiss="modal" aria-hidden="true">Close</button>
						<button type="submit" form="document_form"class="btn btn-sm btn-success btn-sm pull-right">Add</button>
				    </div>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									<div class="col-sm-12" >
										
										<div class="form-group">
										
											<table id="project_tab4" class="table table-stripe">
											<thead>
											<tr>
											<th>Type of Document</th>
											<th>Description</th>
											<th>Filename</th>
											<th>Action</th>
											</tr>
										<!--	<tr>
											<td>
											<select  class="form-control input-sm type_document" id="type_document" name="type_document" required>
														<option value="" selected disabled >Select</option>
														<option value="1">Agreement</option>
														<option value="2">GST Certificate</option>
														<option value="3">PAN Number</option>
													</select>
											</td>
											<td>
											<input type="text"  class="form-control input-sm" id="description" name="description"  placeholder="Description"   >
											</td>
											<td>
											<div id="add_file">
											<input type="file"  class="" id="filename" name="filename" required>
											</div>
											<div id="msg"></div>
											<input type="hidden" id="file_hidden" value="">
											</td>
											<td>
											<button type="submit"  class="btn btn-sm btn-success btn-sm"><i class="fa fa-plus"></i></button>
										
											</td>
											</tr>-->
											</thead>
											
											<tbody id='documents'></tbody>
											</table>
</form>
										</div><!-- /form-group -->
										<div class="col-lg-12" >
										<input type="hidden" id="doc_save" value=""	/>
											<input type="hidden" id="doc_row_id" value="0"/>
											<input type="hidden" id="save_update" value=""	/>
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button>
											&nbsp;	&nbsp;	<button type="button" id="save"  class="btn btn-sm btn-success btn-sm pull-right">Save</button>
										<!--	&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button> -->
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
	<script src="<?php echo base_url(); ?>assets/js/AjaxFileUpload.js"></script>
	
	
	<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/myjs/project_master.js"></script>
	<script src="<?php echo base_url(); ?>assets/js/myjs/docupload.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>
$('.date').datepicker({
           'todayHighlight':true,
       });
var date = new Date();
        date = date.toString('dd/MM/yyyy');
	   $("#s_date").val(date);
	   $("#effective1").val(date);
	   $("#effective").val(date);
	   $("#effective2").val(date);
	   $("#leavingdate1").val(date);
	   $("#leavingdate").val(date);
	   $("#leavingdate2").val(date);
	   $("#effective2").val(date);
	   $("#startdate").val(date);
	   $("#enddate").val(date);
	   $("#leavingdate4").val(date);
	   $("#effecitivedate4").val(date);
	   
</script>

    
  </body>
</html>
