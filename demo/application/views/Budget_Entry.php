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
.tabfont{
font-weight:1000;
color:#180905;
}
.scrol_tbl {
    table-layout:fixed;
    margin:auto;
}
.scrol_thead {
    background:#f9f9f9;
    display:table;
    width:700%;
}
.scrol_thead tr th{
	width:20%;
}
.scrol_tbody {
    height:400px;
    overflow:auto;
    overflow-x:hidden;
    display:block;
    width:700%;
}
.scrol_tbody tr {
    display:table;
    width:100%;
    table-layout:fixed;
}
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
            
            <div class="row">
					<div class="col-md-12">
						<div class="panel panel-default">
							<div class="panel-heading">
							<b><?php echo $title1 ?></b>
									<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i>  Add New</button>
								
											&nbsp; &nbsp;		<h4 id="yeardata" class="pull-right yeardata" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4>		&nbsp; &nbsp;
									&nbsp; &nbsp;		&nbsp; &nbsp;		<h4 id="monthdata" class="pull-right monthdata" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4>	&nbsp; &nbsp;	
									&nbsp; &nbsp;		&nbsp; &nbsp;		<h4 id="pro_name" class="pull-right pro_name" style="margin-top:-5px;margin-left:30px;font-weight:bold;"></h4>		&nbsp; &nbsp;
								
							</div>
							<div class="panel-tab clearfix formhideshow navbar">
								<ul class="tab-bar">
									<li class="tabfont active monthybudget"><a href="#monthybudget" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i>  Monthly Budget Entry</a></li>
								<!--	<li class="tabfont scenedetails"><a href="#scene_details" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Production Staff Budget</a></li>-->
									<li class="tabfont peopleattend"><a href="#people_attendance" data-toggle="tab"><i class="fa fa-address-card fa-lg"></i> Expenses Budget (Monthly and Day wise)</a></li>
	
									
								</ul>
							</div>
						<div class="panel-body formhideshow">
				<div class="tab-content">
				<!----------------------------------------------------------------schedule_expenses start ----------------------------------------->
					<div class="tab-pane fade active in tab-pane" id="monthybudget">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b> Monthly Budget Entry</b>
									</div>
									<br>
									
									<form id="budget_form" name="budget_form"></form>
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Project(Show)*</label>
												<select  form="budget_form" class="form-control select2 input-sm project_name" id="project" name="project" required>
														<option selected disabled >Select</option>
														<option value="1" >project1</option>
														<option value="2" >project2</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">Month*</label>
												<select  form="budget_form" class="form-control select2 input-sm month" id="month" name="month" required>
														<option selected disabled >Select</option>
														<option value="January" >January</option>
														<option value="February" >February</option>
														<option value="March" >March</option>
														<option value="April" >April</option>
														<option value="May" >May</option>
														<option value="June" >June</option>
														<option value="July" >July</option>
														<option value="August" >August</option>
														<option value="September" >September</option>
														<option value="October" >October</option>
														<option value="November" >November</option>
														<option value="December" >December</option>
														
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Year*</label>
												<select  form="budget_form" class="form-control select2 input-sm year" id="year" name="year" required>
														<option selected disabled >Select</option>
														<option value="2017" >2017</option>
														<option value="2018" >2018</option>
														<option value="2019" >2019</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
									</div>
									
								
									<div class="col-sm-12" >
										<div class="col-sm-5" >
											<div class="form-group">
											<table id="project_fotagetbl" class="table table-striped">
											<thead>
											<tr>
													<th style="text-align:center" colspan="2">Projected Footage</th>
													
												</tr>
												<tr>
													<th width="5%">Unit No.</th>
													<th  width="10%">Shoot Days</th>
													<th width="20%" colspan="2">Perday Footage(Min/Sec)</th>
													<th  width="15%">Planned Footage</th>
													</tr>
											</thead >
											<tbody id="file_in">
												<tr>
													<td size="5%">1</td>
													<td><input type="number"   style="text-align:right"; id="shootday1" class="form-control shootday" size="10%" value="0" minlength="2" maxlength="2"></td>
													<td><input type="number"  style="text-align:right";  id="min1" class="form-control minitue" maxlength="3" size="13%" value="0"  onKeyUp="if(this.value>59){this.value='59';}else if(this.value<0){this.value='0';}"></td>
													<td><input type="number"  style="text-align:right";   id="sec1" class="form-control minitue" maxlength="2" size="4%" value="0" onKeyUp="if(this.value>59){this.value='59';}else if(this.value<0){this.value='0';}"></td>
													<td><!--	<input type="time" form="budget_form" class="form-control input-sm footage" id="footage1" step='1'  name="footage11"  min="00:00:00" max="23:59:59"   >-->
													<input type="text"  style="text-align:right";  id="prototal1" class="form-control" disabled>
													</td>
													
												</tr>
												<tr>
													<td>2</td>
													<td><input type="number"  style="text-align:right";   id="shootday2" class="form-control shootday" size="10%" minlength="2" maxlength="2" value="0" ></td>
													<td><input type="number"   style="text-align:right";  id="min2" class="form-control minitue" size="13%"  maxlength="3" value="0" onKeyUp="if(this.value>59){this.value='59';}else if(this.value<0){this.value='0';}"></td>
													<td><input type="number"   style="text-align:right";  id="sec2" class="form-control minitue" size="10%"  maxlength="2" value="0" onKeyUp="if(this.value>59){this.value='59';}else if(this.value<0){this.value='0';}"></td>
													<td><!--	<input type="time" form="budget_form" class="form-control input-sm footage" id="footage2" step='1'  name="footage2"  min="00:00:00" max="23:59:59"   >-->
													<!--<div class="input-group timepicker " >
           													 <input type="text" class="form-control footage" id="footage2" value="00:00"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>-->
												<input type="text"  style="text-align:right";  id="prototal2" class="form-control" disabled>
													</td>
												
												</tr>
												<tr>
													<td>3</td>
													<td><input type="number"   style="text-align:right";  id="shootday3" class="form-control shootday" minlength="2" maxlength="2" value="0"></td>
													<td><input type="number"  style="text-align:right";  id="min3" class="form-control minitue" maxlength="3" size="13%" value="0" onKeyUp="if(this.value>59){this.value='59';}else if(this.value<0){this.value='0';}"></td>
													<td><input type="number"   style="text-align:right"; id="sec3" class="form-control minitue" maxlength="2" value="0" onKeyUp="if(this.value>59){this.value='59';}else if(this.value<0){this.value='0';}"></td>
													<td>	<!--<input type="time" form="budget_form" class="form-control input-sm footage" id="footage3" step='1'  name="footage3"  min="00:00:00" max="23:59:59"   >-->
													<!--<div class="input-group timepicker " >
           													 <input type="text" class="form-control footage" id="footage3" value="00:00"> 
															<span class="input-group-addon">
                      			  							<span class="glyphicon glyphicon-calendar"></span>
															</span>
												</div>--->
												<input type="text"  style="text-align:right";  id="prototal3" class="form-control" disabled>
													</td>
												</tr>
									</tbody>
									<tfoot>
												<tr>
												<td></td>
												<td></td>
												<td></td>
													<td clospan="1">Total</td>
													<td ><input type="number"  style="text-align:right";  form="budget_form" class="form-control input-sm " id="Totalpalnfo"   name="Totalpalnfo"     disabled></td>
												</tr>
												<tr>
												<td></td>
												<td></td>
												<td></td>
													<td rowspan="3">Episodes Planned</td>
													<td><input type="number"   style="text-align:right";  form="budget_form" class="form-control input-sm " id="episodicpalnfo" name="episodicpalnfo" ></td>
												</tr>
									</tfoot>
									</table>
											</div><!-- /form-group -->
										</div>
										
									
										<div class="col-sm-7" >
											<div class="form-group">
											<table id="file_info" class="table table-striped">
											<thead>
										
												<tr>
													<th width="20%">Expense Type</th>
													<th width="20%" >Unit 1</th>
													<th width="20%">Unit 2</th>
													<th width="20%">Unit 3</th>
													<th width="20%"	>Total</th>
													</tr>
											</thead >
											<tbody id="file_in">
												<tr>
													<td>Artist Expenses</td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm aritistunit unit1data" id="aunit1" name="aunit1"  value="0" ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm aritistunit  unit2data" id="aunit2" name="aunit2" value="0"  ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm aritistunit unit3data" id="aunit3" name="aunit3"  value="0" ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm " id="aunittotal" name="aunittotal"  value="0" disabled></td>
												</tr>
												<tr>
													<td>Production Staff Exp.</td>
													<td></td>
													<td></td>
													<td></td>
													<!--<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm productionunit unit1data" id="punit1" name="punit1" value="0" ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm productionunit unit2data" id="punit2" name="punit2" value="0"></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm productionunit unit3data" id="punit3" name="punit3"  value="0" ></td>-->
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm pertotal" id="punittotal" name="punittotal"  value="0" ></td>
												</tr>
												<tr>
													<td>Admin Staff Expenses</td>
													<td></td>
													<td></td>
													<td></td>
													<!--<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm adminunit unit1data" id="asunit1" name="asunit1"  value="0"   ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm adminunit unit2data" id="asunit2" name="asunit2"  value="0"   ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;"  class="form-control input-sm adminunit unit3data" id="asunit3" name="asunit3"   value="0"  ></td>-->
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm footage pertotal" id="asunittotal" name="asunittotal"  value="0"  ></td>
												</tr>
												<tr>
													<td>Episodic Expenses</td>
													<td></td>
													<td></td>
													<td></td>
													<!--<td><input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm episodicunit" id="eunit1" name="eunit1" value="0" ></td>
													<td><input type="number" form="budget_form" style="text-align: right;"  class="form-control input-sm episodicunit" id="eunit2" name="eunit2" value="0" ></td>
													<td><input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm episodicunit" id="eunit3" name="eunit3" value="0"  ></td> -->
													<td><input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm " id="eunittotal" name="eunittotal"  value="0" ></td>
												</tr>
												<tr>
													<td>Monthly Expenses</td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm footage " id="munit1" name="munit1" value="0"  disabled ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm footage " id="munit2" name="munit2" value="0"  disabled ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm footage " id="munit3" name="munit3" value="0"   disabled ></td>
													<td>	<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm footage" id="munittotal" name="munittotal" value="0"  disabled></td>
												</tr>
									</tbody>
									<tfoot>
									<tr>
													<td>Total</td>
													<td><input type="number" form="charectermaster_form" style="text-align: right;" class="form-control input-sm footage " id="total1" name="total1" value="0"  disabled></td>
													<td><input type="number" form="charectermaster_form" style="text-align: right;" class="form-control input-sm footage" id="total2" name="total2"  value="0" disabled></td>
													<td><input type="number" form="charectermaster_form" style="text-align: right;" class="form-control input-sm footage" id="total3" name="total3" value="0"  disabled></td>
													<td><input type="number" form="charectermaster_form" style="text-align: right;" class="form-control input-sm footage" id="total4" name="total4" value="0"  disabled></td>
												</tr>
									</tfoot>
									</table>
										</div>
									</div>
									<input type="hidden" id="save_episisoc">
								
									<div class="col-sm-12" >
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">From Episode No</label>
												<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm totalepisode" id="fromepisodeno" name="fromepisodeno">
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-4" >
											<div class="form-group">
												<label class="control-label">To Episode No</label>
												<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm totalepisode" id="toepisodeno" name="toepisodeno">
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
											<div class="form-group">
												<label class="control-label">Total Episode</label>
												<input type="number" form="budget_form" style="text-align: right;" class="form-control input-sm" id="totalepisodeno" name="totalepisodeno">
											</div><!-- /form-group -->
										</div>
									</div>
		
										
									<div class="col-lg-12" >
						<input type="hidden" id="save_updatedata" value=""	/>
											&nbsp;	&nbsp;	<button type="button" style="margin-left:10px;"  id="btnmonth" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
											&nbsp;	&nbsp;	<button style="margin-left:10px;" type="button" class="btn btn-sm btn-info pull-right closehideshow" >Close</button>
											<a href="#initiation_model" style="margin-left:-10px;" role="button" data-toggle="modal" id="model_link" class="btn btn-sm btn-success btn-sm pull-right">Copy</a>
						</div>		
										
						<div class="modal fade" id="initiation_model">
  			<div class="modal-dialog" >
    			<div class="modal-content">
      				<div class="modal-header">
        				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<br>
						<div>
							<h4 class="pull-left" style="margin-top:4%;">Copy Budget</h4>
						</div>
						
      				</div>
					
				<form id="approval_form" method="post"></form>
				    <div class="modal-body">
									<div class="col-lg-12" >
								
										<div class="col-lg-6" >
											<div class="form-group">
											<form id="docpload_form" name="docpload_form"><br>
													<label class="control-label" >Project</label><br>
													<label class="control-label" id="projectinfo">Project</label>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-6" >
											
										</div>
									</div>
								
									<div class="col-lg-12" >
									<div><b>From</b></div>
										<div class="col-lg-6" >
											<div class="form-group"><br>
											<label class="control-label" >Month</label><br>
													<label class="control-label" id="monthinfo"></label>
													
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-6" >
											<div class="form-group"><br>
													<label class="control-label">Year</label><br>
													<label class="control-label" id="yearinfo"></label>
											
											</div><!-- /form-group -->
										</div>
									</div>
									<div class="col-lg-12" >
									<div><b>To</b></div>
										<div class="col-lg-6" >
											<div class="form-group"><br>
													<label class="control-label">Month</label><br>
													<select  style="width:100%"    class="form-control select2 input-sm" id="nextmonth" name="nextmonth" required>
														<option selected disabled >Select</option>
														<option value="January" >January</option>
														<option value="February" >February</option>
														<option value="March" >March</option>
														<option value="April" >April</option>
														<option value="May" >May</option>
														<option value="June" >June</option>
														<option value="July" >July</option>
														<option value="August" >August</option>
														<option value="September" >September</option>
														<option value="October" >October</option>
														<option value="November" >November</option>
														<option value="December" >December</option>
														
												</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-lg-6" >
											<div class="form-group"><br>
													<label class="control-label">Year</label><br>
													<select style="width:100%"  class="form-control select2 input-sm" id="nextyear" name="nextyear" required>
														<option selected disabled >Select</option>
														<option value="2017" >2017</option>
														<option value="2018" >2018</option>
														<option value="2019" >2019</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
										
									
									</div>
								
				    </div>
				    <div class="modal-footer">
						<input type="hidden" id="doc_save_update" value="">

						<input type="hidden" id="doc_row_id" value="0">
				        <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" aria-hidden="true">Close</button>
				        <button type="button" id="Copydata" form="docpload_form" class="btn btn-sm btn-success" aria-hidden="true">Copy</button>
						
				    </div>
				</form>
			  	</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
									
						</div>
					
				</div>
			
<!-------------End  Tab Monthly Budget Entry---------------------------->
<!--<div class="tab-pane fade" id="scene_details">
								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b>Production Staff Budget (Monthly)</b>
									</div>
									<br>
									<div class="row">
									<div class="form-group">
										<div class="col-lg-12">
										
										<div class="table-responsive">
										<table id="productionstaff" class="table table-striped">
											<thead>
												<tr>
													<th>Name of Staff</th>
													<th>Designation</th>
													<th>Qty/Days</th>
													<th>Rate</th>
													<th>Unit of Measurement</th>
													<th>Total Budget Amount</th>
												
												</tr>
											</thead >
											<tbody id="productionstaffbody">
											<!--	<tr>
													<td>Artist Expenses</td>
													<td>1000000</td>
													<td>1000000</td>
													<td></td>
													<td>1000000</td>
												</tr>
												<tr>
													<td>Production Staff Expenses</td>
													<td>1200000</td>
													<td>1200000</td>
													<td></td>
													<td>1200000</td>
												</tr>
												<tr>
													<td>Admin Staff Expenses</td>
													<td>1200000</td>
													<td>1200000</td>
													<td></td>
													<td>1200000</td>
												</tr>
												<tr>
													<td>Episodic Expenses</td>
													<td>500000</td>
													<td>500000</td>
													<td></td>
													<td>500000</td>
												</tr>
												<tr>
													<td>Monthly Expenses</td>
													<td></td>
													<td></td>
													<td></td>
													<td></td>
												</tr>
											</tbody>
											<tfoot>
											<tr>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
										<td><input type="number" form="charectermaster_form" class="form-control input-sm " id="productiontotal" name="productiontotal" size="10%"  disabled></td>
										</tr>
											</tfoot>
											</table>
									    </div>
										
										</div>
									</div>			
								</div>
								<div class="col-lg-12" >
						
											&nbsp;	&nbsp;	<button type="" id="productionsave" class="btn btn-sm btn-success btn-sm pull-right">Next</button>
									
						</div>	
						</div>-->
<!------End Of Production Staff Budget (Monthly) Tab---------------->
<div class="tab-pane fade" id="people_attendance">

								<div style="margin-top:0px;border-bottom:2px solid;width:100%;">
										<b>Expenses Budget (Monthly and Day wise)</b>
									</div>
									<br>
								
								<div class="row">
									<div class="form-group">
										<div class="col-lg-12">
										
										<div class="table-responsive">
										<table id="budgetentry" class="table table-striped scrol_tbl" style="width:100%";>
											<thead class="scrol_thead">
												<tr>
													<th style="width:10%;"> Expenses </th>
													<th style="width:33%;">Expenses A/c </th>
													<th style="width:8%;">Unit No.</th>
													<th style="width:8%;">Qty/Days</th>
													<th style="width:10%;">Rate</th>
													<th style="display:none;">Per Unitid</th>
													<th>UOM</th>
													<th style="padding-right:3%;" >TOTAL BUDGET</th>
												</tr>
											</thead >
											<tbody id="budgetentrybody" class="scrol_tbody">
											<div id="wait1" style="width:100px;height:100px;position:absolute;top:;left:45%;padding:2px;display:none;"><img src="<?php echo base_url('assets/img/loader.gif'); ?>" width="100" height="100" /><br><center><h5>Please Wait...</h5></center></div>
											</tbody>
											<tfoot>
											<tr>
											<td ></td>
											<td ></td>
											<td ></td>
											<td ></td>
											<td ></td>
											<td ></td>
											<td>&nbsp;&nbsp;<input type="number" style="text-align:right" form="charectermaster_form" class="form-control input-sm footage" id="budgettotal" name="episodic"   disabled></td>
											</tr>
											</tfoot>
											</table>
									    </div>
										
										</div>
									</div>			
								</div>
									

						<div class="col-lg-12" >
							<input type="hidden" id="save_update" value=""/>
						
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-danger pull-left delete_data" >Delete</button>
											&nbsp;	&nbsp;	<button type="button" class="btn btn-sm btn-success pull-left pev" style="margin-left:5px;" id="previous">Prev</button>
											&nbsp;	&nbsp;	<button type="submit" id="bud_save" form="budget_form" class="btn btn-sm btn-success btn-sm pull-right">Save</button>
										
						</div>
</div>
	
									</div>
						</div>			
						
				</div>
				<
						</div><!-- /panel -->
						<div id="wait" style="width:100px;height:100px;position:absolute;top:;left:45%;padding:2px;"><img src="<?php echo base_url('assets/img/loader.gif'); ?>" width="100" height="100" /><br><center><h5>Please Wait...</h5></center></div>
					</div><!-- /.col -->
					<div class="col-lg-12 tablehideshow">
									<div class="table-responsive" id="show_master">
                                   </div>
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
    <script src="<?php echo base_url(); ?>assets/js/myjs/budget_entry.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>
$('.timepicker').datetimepicker({
    format: 'mm:ss'
});
$('.date').datepicker({
           'todayHighlight':true,
       });
var date = new Date();
        date = date.toString('dd/MM/yyyy');
       $("#date").val(date);
</script>

    
  </body>
</html>
