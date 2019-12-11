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
							<b><?php echo "Expense Report"; ?></b>
								<!--	<button type="button" class="btn btn-primary btn-xs pull-right btnhideshow"><i class="fa fa-plus"></i>  Add New</button> -->
							</div>
							<div class="panel-body ">
				<div class="row" id="documents">
									<form id="showwisereport" name="showwisereport"></form>
									<div class="col-sm-12" >
										<div class="col-sm-4" >
                                        <label class="control-label">For Project/Show*</label>
										</div>
										<div class="col-lg-3" >
											<div class="form-group">
									
										<select  form="showwisereport" class="form-control select2 input-sm project_name" id="project" name="project" required>
														<option selected disabled >Select</option>
														
													</select>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
										</div>
									</div>
									
									<div class="col-sm-12"  id="from_date123"  >
										<div class="col-sm-4" >
                                        <label class="control-label" > Date From</label>
										</div>
										<div class="col-lg-3" >
											<div class="form-group">
										
                                            <div class="input-group date doj" data-provide="datepicker">
												<input type="text"   form="showwisereport"  class="form-control input-sm placeholdesize datepicker "  id="fromdate" name="fromdate"  >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
										</div>
									</div>
                                    
									<div class="col-sm-12"  id="to_date123"  >
										<div class="col-sm-4" >
											<label class="control-label" > To </label>
										</div>
										<div class="col-lg-3" >
											<div class="form-group">
										
                                            <div class="input-group date doj" data-provide="datepicker">
												<input type="text" form="showwisereport"  class="form-control input-sm placeholdesize datepicker"  id="todate" name="todate" >
												<div class="input-group-addon">
													<span class="fa fa-calender"></span>
												</div>
											</div>
											</div><!-- /form-group -->
										</div>
										<div class="col-sm-4" >
										</div>
									</div>
                                
						<div class="col-lg-12" >
											<div class="cd-12">
											<a class="get_exxcel pull-right" id="get_exxcel" onClick="javascript:fnExcelReport();" href="#"><button class="btn btn-sm btn-success btn-sm pull-right">Download </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
											
											<button type="submit" form="showwisereport" class="btn btn-sm btn-success btn-sm pull-right">Generate</button>
											</div>
											
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
										<table id="budgetentry" class="table table-striped" style="width:100%";>
											<thead >
												<tr>
													<th colspan="11" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000" >Contiloe Pictures Pvt. Ltd.</th>
												</tr>
												<tr>
													<th colspan="2" style="text-align:center;" > From Date</th>
													<th colspan="2" style="text-align:center;" id="reportfromdate" > </th>
													<th colspan="2" style="text-align:center;" >To</th>
													<th colspan="2" style="text-align:center;" id="reporttodate" ></th>
													<th colspan="3" style="text-align:center;" id="reportproject" >Show Name :</th>
												</tr>
											</thead >
										</table>



<!-- last Table Add Here    -----------> 
								<div class="row abc" >
									<div class="form-group">
										<div class="col-lg-12">
										
										<div class="table-responsive">
										<table id="expensebudget" class="table table-" style="width:100%";>
											<thead >
												<tr>
													<th colspan="6" style="text-align:center;background-color:#DCDCDC;font-size: 20px;color:#000000" >Expenses Report</th>

													<th colspan="3" style="text-align:center;background-color:#DCDCDC;font-size: 15px;color:#000000" class="grant_total"></th>
												</tr>
												<tr>
													<th style="width:10%;border-left:solid 2px;">Date</th>
													<th style="width:15%;border-left:solid 2px;">Expense Name</th>
													<th style="width:15%;border-left:solid 2px;"> Sub Expense</th>
													<th style="width:10%;border-left:solid 2px;text-align:left;"> Narration</th>
													<!--<th style="width:10%;border-left:solid 2px;text-align:left;"> Planned Amount</th>-->
													<th style="width:10%;border-left:solid 2px;text-align:right;">Rate</th>
													<th style="width:10%;border-left:solid 2px;text-align:right;">Qty</th>
													<th style="width:10%;border-left:solid 2px;text-align:left;">Unit</th>
													<th style="width:10%;border-left:solid 2px;text-align:left;">Type</th>
													<th style="width:10%;text-align:right;border-right:solid 2px;">Amount</th>
												</tr>
											</thead >
											<tbody id="expensebudgetbody">
												<tr><td>Expenses</td></tr>
											</tbody>	
											</table>				
									    </div>
										
										</div>
									</div>	
											
								</div>
<!-- last Table Add Here    -----------> 
									
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
	<script type="text/javascript">var baseurl = "<?php print base_url(); ?>";</script>
    <?php include "includes/footerlink.php"; ?>  
	<!--<script src="<?php echo base_url(); ?>assets/js/myjs/dynamic.js"></script> -->
    <!-- <script src="<?php echo base_url(); ?>assets/js/myjs/showwise_budget.js"></script> -->
	 <script src="<?php echo base_url(); ?>assets/js/myjs/expense_rep.js"></script>
	<script>$('#status').bootstrapToggle('on');	</script>	
<script>
$('.date').datepicker({
           'todayHighlight':true,
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
    $('#get_exxcel').attr('download', 'Expenses Report.xls');

}







	// });
</script>
