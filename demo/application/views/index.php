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

  <body class="overflow-hidden">
    <!-- Overlay Div -->
    <div id="overlay" class="transparent"></div>
    
    <a href="" id="theme-setting-icon"><i class="fa fa-cog fa-lg"></i></a>
    <div id="theme-setting">
        <div class="title">
            <strong class="no-margin">Skin Color</strong>
        </div>
        <div class="theme-box">
            <a class="theme-color" style="background:#323447" id="default"></a>
            <a class="theme-color" style="background:#efefef" id="skin-1"></a>
            <a class="theme-color" style="background:#a93922" id="skin-2"></a>
            <a class="theme-color" style="background:#3e6b96" id="skin-3"></a>
            <a class="theme-color" style="background:#635247" id="skin-4"></a>
            <a class="theme-color" style="background:#3a3a3a" id="skin-5"></a>
            <a class="theme-color" style="background:#495B6C" id="skin-6"></a>
        </div>
        <div class="title">
            <strong class="no-margin">Sidebar Menu</strong>
        </div>
        <div class="theme-box">
            <label class="label-checkbox">
                <input type="checkbox" checked id="fixedSidebar">
                <span class="custom-checkbox"></span>
                Fixed Sidebar
            </label>
        </div>
    </div><!-- /theme-setting -->

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
            <div class="main-header clearfix">
                <div class="page-title">
                    <h3 class="no-margin"><?php echo $title1 ?></h3>
                    <span>Welcome back Mr.John Doe</span>
                </div><!-- /page-title -->
                
                <ul class="page-stats">
                    <li>
                        <div class="value">
                            <span>New visits</span>
                            <h4 id="currentVisitor">4256</h4>
                        </div>
                        <span id="visits" class="sparkline"></span>
                    </li>
                    <li>
                        <div class="value">
                            <span>My balance</span>
                            <h4>$<strong id="currentBalance">32153</strong></h4>
                        </div>
                        <span id="balances" class="sparkline"></span>
                    </li>
                </ul><!-- /page-stats -->
            </div><!-- /main-header -->
            
            <div class="grey-container shortcut-wrapper">
                <a href="#" class="shortcut-link">
                    <span class="shortcut-icon">
                        <i class="fa fa-bar-chart-o"></i>
                    </span>
                    <span class="text">Statistic</span>
                </a>
                <a href="#" class="shortcut-link">
                    <span class="shortcut-icon">
                        <i class="fa fa-envelope-o"></i>
                        <span class="shortcut-alert">
                            5
                        </span> 
                    </span>
                    <span class="text">Messages</span>
                </a>
                <a href="#" class="shortcut-link">
                    <span class="shortcut-icon">
                        <i class="fa fa-user"></i>
                    </span>
                    <span class="text">New Users</span>
                </a>
                <a href="#" class="shortcut-link">
                    <span class="shortcut-icon">
                        <i class="fa fa-globe"></i>
                        <span class="shortcut-alert">
                            7
                        </span> 
                    </span>
                    <span class="text">Notification</span>
                </a>
                <a href="#" class="shortcut-link">
                    <span class="shortcut-icon">
                        <i class="fa fa-list"></i>
                    </span>
                    <span class="text">Activity</span>
                </a>
                <a href="#" class="shortcut-link">
                    <span class="shortcut-icon">
                        <i class="fa fa-cog"></i></span>
                    <span class="text">Setting</span>
                </a>
            </div><!-- /grey-container -->
            
            <div class="padding-md">
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="panel-stat3 bg-danger">
                            <h2 class="m-top-none" id="userCount">362</h2>
                            <h5>Registered users</h5>
                            <i class="fa fa-arrow-circle-o-up fa-lg"></i><span class="m-left-xs">5% Higher than last week</span>
                            <div class="stat-icon">
                                <i class="fa fa-user fa-3x"></i>
                            </div>
                            <div class="refresh-button">
                                <i class="fa fa-refresh"></i>
                            </div>
                            <div class="loading-overlay">
                                <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                            </div>
                        </div>
                    </div><!-- /.col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="panel-stat3 bg-info">
                            <h2 class="m-top-none"><span id="serverloadCount">15</span>%</h2>
                            <h5>Server Load</h5>
                            <i class="fa fa-arrow-circle-o-up fa-lg"></i><span class="m-left-xs">1% Higher than last week</span>
                            <div class="stat-icon">
                                <i class="fa fa-hdd-o fa-3x"></i>
                            </div>
                            <div class="refresh-button">
                                <i class="fa fa-refresh"></i>
                            </div>
                            <div class="loading-overlay">
                                <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                            </div>
                        </div>
                    </div><!-- /.col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="panel-stat3 bg-warning">
                            <h2 class="m-top-none" id="orderCount">593</h2>
                            <h5>New Orders</h5>
                            <i class="fa fa-arrow-circle-o-up fa-lg"></i><span class="m-left-xs">3% Higher than last week</span>
                            <div class="stat-icon">
                                <i class="fa fa-shopping-cart fa-3x"></i>
                            </div>
                            <div class="refresh-button">
                                <i class="fa fa-refresh"></i>
                            </div>
                            <div class="loading-overlay">
                                <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                            </div>
                        </div>
                    </div><!-- /.col -->
                    <div class="col-sm-6 col-md-3">
                        <div class="panel-stat3 bg-success">
                            <h2 class="m-top-none" id="visitorCount">7214</h2>
                            <h5>Total Visitors</h5>
                            <i class="fa fa-arrow-circle-o-up fa-lg"></i><span class="m-left-xs">15% Higher than last week</span>
                            <div class="stat-icon">
                                <i class="fa fa-bar-chart-o fa-3x"></i>
                            </div>
                            <div class="refresh-button">
                                <i class="fa fa-refresh"></i>
                            </div>
                            <div class="loading-overlay">
                                <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                            </div>
                        </div>
                    </div><!-- /.col -->
                </div>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="panel panel-default">
                            <div class="panel-heading clearfix">
                                <span class="pull-left"><i class="fa fa-bar-chart-o fa-lg"></i> Website Traffic</span>
                                <ul class="tool-bar">
                                    <li><a href="#" class="refresh-widget" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Refresh"><i class="fa fa-refresh"></i></a></li>
                                </ul>
                            </div>
                            <div class="panel-body" id="trafficWidget">
                                <div id="placeholder" class="graph" style="height:250px"></div>
                            </div>
                            <div class="panel-footer">
                                <div class="row row-merge">
                                    <div class="col-xs-3 text-center border-right">
                                        <h4 class="no-margin">1232</h4>
                                        <small class="text-muted">Visitors</small>
                                    </div>
                                    <div class="col-xs-3 text-center border-right">
                                        <h4 class="no-margin">5421</h4>
                                        <small class="text-muted">Orders</small>
                                    </div>
                                    <div class="col-xs-3 text-center border-right">
                                        <h4 class="no-margin">3021</h4>
                                        <small class="text-muted">Tickets</small>
                                    </div>
                                    <div class="col-xs-3 text-center">
                                        <h4 class="no-margin">7098</h4>
                                        <small class="text-muted">Customers</small>
                                    </div>
                                </div><!-- ./row -->
                            </div>
                            <div class="loading-overlay">
                                <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                            </div>
                        </div><!-- /panel -->
                                
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <div class="panel panel-default panel-stat1 bg-success">
                                    <div class="panel-body">
                                        <div class="value">99</div>
                                        <div class="title">
                                            <i class="fa fa-usd"></i>
                                            <span class="m-left-xs">Sales</span>
                                        </div>
                                    </div>
                                </div><!-- /panel -->
                            </div><!-- /.col -->
                            <div class="col-md-4 col-sm-4">
                                <div class="panel panel-default panel-stat2 bg-warning">
                                    <div class="panel-body">
                                        <span class="stat-icon">
                                            <i class="fa fa-bar-chart-o"></i>
                                        </span>
                                        <div class="pull-right text-right">
                                            <div class="value">58</div>
                                            <div class="title">New Visits</div>
                                        </div>
                                    </div>
                                </div><!-- /panel -->
                            </div><!-- /.col -->
                            <div class="col-md-4 col-sm-4">
                                <div class="panel panel-default panel-stat2 bg-info">
                                    <div class="panel-body">
                                        <span class="stat-icon">
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                        <div class="pull-right text-right">
                                            <div class="value">41</div>
                                            <div class="title">Emails</div>
                                        </div>
                                    </div>
                                </div><!-- /panel -->
                            </div><!-- /.col -->
                        </div><!-- /.row -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                Work Progress

                                <span class="badge badge-info pull-right">  
                                    4 left
                                </span>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Task</th>
                                        <th>Progress</th>
                                        <th></th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bug Fixes</td>
                                        <td>
                                            <div class="progress progress-striped active" style="height:8px; margin:5px 0 0 0;">
                                                <div class="progress-bar" style="width: 45%">
                                                    <span class="sr-only">45% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>45%</td>
                                        <td><span class="badge badge-info">2hr</span></td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Development</td>
                                        <td>
                                            <div class="progress progress-striped active" style="height:8px; margin:5px 0 0 0;">
                                                <div class="progress-bar progress-bar-success" style="width: 61%">
                                                    <span class="sr-only">61% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>61%</td>
                                        <td><span class="badge badge-info">1hr</span></td>
                                    </tr>
                                    <tr>
                                        <td>Unit Testing</td>
                                        <td>
                                            <div class="progress progress-striped active" style="height:8px; margin:5px 0 0 0;">
                                                <div class="progress-bar progress-bar-danger" style="width: 97%">
                                                    <span class="sr-only">97% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>97%</td>
                                        <td><span class="badge badge-info">5m</span></td>
                                    </tr>
                                    <tr>
                                        <td>New frontend layout</td>
                                        <td>
                                            <div class="progress progress-striped active" style="height:8px; margin:5px 0 0 0;">
                                                <div class="progress-bar progress-bar-warning" style="width: 18%">
                                                    <span class="sr-only">18% Complete</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>18%</td>
                                        <td><span class="badge badge-info">12hr</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div><!-- /panel -->
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix">
                                        <span class="pull-left">
                                            To Do List <span class="text-success m-left-xs"><i class="fa fa-check"></i></span>
                                        </span>
                                        <ul class="tool-bar">
                                            <li><a href="#" class="refresh-widget" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Refresh"><i class="fa fa-refresh"></i></a></li>
                                            <li><a href="#toDoListWidget" data-toggle="collapse"><i class="fa fa-arrows-v"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="panel-body no-padding collapse in" id="toDoListWidget">
                                        <ul class="list-group task-list no-margin collapse in">
                                            <li class="list-group-item selected">
                                                <label class="label-checkbox inline">
                                                     <input type="checkbox" class="task-finish" checked>
                                                     <span class="custom-checkbox"></span>
                                                </label>
                                                SEO Optimisation
                                                <span class="pull-right">
                                                    <a href="#" class="task-del"><i class="fa fa-trash-o fa-lg text-danger"></i></a>
                                                </span>
                                            </li>
                                            <li class="list-group-item">
                                                <label class="label-checkbox inline">
                                                     <input type="checkbox" class="task-finish">
                                                     <span class="custom-checkbox"></span>
                                                </label>
                                                Unit Testing
                                                <span class="pull-right">
                                                    <a href="#" class="task-del"><i class="fa fa-trash-o fa-lg text-danger"></i></a>
                                                </span>
                                            </li>
                                            <li class="list-group-item">
                                                <label class="label-checkbox inline">
                                                     <input type="checkbox" class="task-finish">
                                                     <span class="custom-checkbox"></span>
                                                </label>
                                                Mobile Development 
                                                <span class="pull-right">
                                                    <a href="#" class="task-del"><i class="fa fa-trash-o fa-lg text-danger"></i></a>
                                                </span>
                                                <span class="badge badge-success m-right-xs">3</span>
                                            </li>
                                            <li class="list-group-item">
                                                <label class="label-checkbox inline">
                                                     <input type="checkbox" class="task-finish">
                                                     <span class="custom-checkbox"></span>
                                                </label>
                                                Database Migration
                                                <span class="pull-right">
                                                    <a href="#" class="task-del"><i class="fa fa-trash-o fa-lg text-danger"></i></a>
                                                </span>
                                            </li>
                                            <li class="list-group-item">
                                                <label class="label-checkbox inline">
                                                     <input type="checkbox" class="task-finish">
                                                     <span class="custom-checkbox"></span>
                                                </label>
                                                New Frontend Layout <span class="label label-warning m-left-xs">PENDING</span>
                                                <span class="pull-right">
                                                    <a href="#" class="task-del"><i class="fa fa-trash-o fa-lg text-danger"></i></a>
                                                </span>
                                            </li>
                                            <li class="list-group-item">
                                                <label class="label-checkbox inline">
                                                     <input type="checkbox" class="task-finish">
                                                     <span class="custom-checkbox"></span>
                                                </label>
                                                Bug Fixes <span class="label label-danger m-left-xs">IMPORTANT</span>
                                                <span class="pull-right">
                                                    <a href="#" class="task-del"><i class="fa fa-trash-o fa-lg text-danger"></i></a>
                                                </span>
                                            </li>
                                        </ul><!-- /list-group -->
                                    </div>
                                    <div class="loading-overlay">
                                        <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                                    </div>
                                </div><!-- /panel -->
                            </div><!-- /.col -->
                            <div class="col-lg-6">
                                <div class="panel panel-default">   
                                    <div class="panel-heading clearfix">
                                        <span class="pull-left">Feeds</span>
                                        <ul class="tool-bar">
                                            <li><a href="#" class="refresh-widget" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Refresh"><i class="fa fa-refresh"></i></a></li>
                                            <li><a href="#feedList" data-toggle="collapse"><i class="fa fa-arrows-v"></i></a></li>
                                        </ul>
                                    </div>      
                                    <ul class="list-group collapse in" id="feedList">
                                        <li class="list-group-item clearfix">
                                            <div class="activity-icon small">
                                                <i class="fa fa-camera"></i>
                                            </div>
                                            <div class="pull-left m-left-sm">
                                                <span>John Doe Add a new photo.</span><br/>
                                                <small class="text-muted"><i class="fa fa-clock-o"></i> 2m ago</small>
                                            </div>
                                        </li>
                                        <li class="list-group-item clearfix">
                                            <div class="activity-icon bg-success small">
                                                <i class="fa fa-usd"></i>
                                            </div>
                                            <div class="pull-left m-left-sm">
                                                <span>2 items sold.</span><br/>
                                                <small class="text-muted"><i class="fa fa-clock-o"></i> 30m ago</small>
                                            </div>  
                                        </li>
                                        <li class="list-group-item clearfix">
                                            <div class="activity-icon bg-info small">
                                                <i class="fa fa-comment"></i>
                                            </div>
                                            <div class="pull-left m-left-sm">
                                                <span>John Doe commented on <a href="#">This Article</a></span><br/>
                                                <small class="text-muted"><i class="fa fa-clock-o"></i> 1hr ago</small>
                                            </div>
                                        </li>
                                        <li class="list-group-item clearfix">
                                            <div class="activity-icon bg-success small">
                                                <i class="fa fa-usd"></i>
                                            </div>
                                            <div class="pull-left m-left-sm">
                                                <span>3 items sold.</span><br/>
                                                <small class="text-muted"><i class="fa fa-clock-o"></i> 2days ago</small>
                                            </div>  
                                        </li>
                                    </ul><!-- /list-group -->   
                                    <div class="loading-overlay">
                                        <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
                                    </div>
                                </div><!-- /panel -->
                            </div><!-- /.col -->
                        </div><!-- ./row -->
                    </div><!-- /.col -->
                    <div class="col-lg-4">
                        <div class="panel bg-info fadeInDown animation-delay4">
                            <div class="panel-body">
                                <div id="lineChart" style="height: 150px;"></div>
                                <div class="pull-right text-right">
                                    <strong class="font-14">Balance $3210</strong><br/>
                                    <span><i class="fa fa-shopping-cart"></i> Total Sales 867</span>
                                    <div class="seperator"></div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-xs-4">
                                        Sales in June
                                        <strong class="block">$664</strong>
                                    </div><!-- /.col -->
                                    <div class="col-xs-4">
                                        Sales in July
                                        <strong class="block">$731</strong>
                                    </div><!-- /.col -->
                                    <div class="col-xs-4">
                                        Sales in August
                                        <strong class="block">$912</strong>
                                    </div><!-- /.col -->
                                </div><!-- /.row -->
                            </div>
                        </div><!-- /panel -->
                                
                        <div class="panel bg-success fadeInDown animation-delay5">
                            <div class="panel-body">
                                <div id="barChart" style="height: 150px;"></div>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h4 class="no-margin">Total Earnings</h4>
                                    </div><!-- /.col -->
                                    <div class="col-xs-6 text-right">
                                        <h4 class="no-margin">$17,531</h4>
                                    </div><!-- /.col -->
                                </div><!-- /.row -->
                            </div>
                        </div><!-- /panel -->
                                
                        <div class="panel bg-danger">
                            <div class="panel-body">
                                <h4>Database Migration</h4>
                                <div class="progress progress-striped active" style="height:8px; margin:5px 0 0 0;">
                                    <div class="progress-bar progress-bar-danger" style="width: 65%">
                                        <span class="sr-only">65% Complete</span>
                                    </div>
                                </div>
                                <strong class="pull-left m-top-xs">65% Complete</strong>
                                <strong class="pull-right m-top-xs">1hr left</strong>
                            </div>
                        </div><!-- /panel -->
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <div id="donutChart" style="height: 250px;"></div>
                                <div class="panel-group" id="accordion">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                    IN-STORE Sales
                                                    <span class="badge badge-success pull-right">75%</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                            </div>
                                        </div>
                                    </div><!-- panel -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                    DOWMLOAD Sales
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                            </div>
                                        </div>
                                    </div><!-- panel -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                                    MAIL-ORDER Sales 
                                                    <span class="badge badge-danger pull-right"><i class="fa fa-arrow-down"></i> 3%</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. 
                                            </div>
                                        </div>
                                    </div><!-- panel -->
                                </div><!-- panel-group -->
                            </div>
                        </div><!-- /panel -->
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.padding-md -->
        </div><!-- /main-container -->
        <!-- Footer
        ================================================== -->
    <?php include "includes/footer.php"; ?>    
        
        
        <!--Modal-->
        <div class="modal fade" id="newFolder">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4>Create new folder</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="folderName">Folder Name</label>
                                <input type="text" class="form-control input-sm" id="folderName" placeholder="Folder name here...">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-success" data-dismiss="modal" aria-hidden="true">Close</button>
                        <a href="#" class="btn btn-danger btn-sm">Save changes</a>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    </div><!-- /wrapper -->

    <a href="" id="scroll-to-top" class="hidden-print"><i class="fa fa-chevron-up"></i></a>
    
    <!-- Logout confirmation -->
    <div class="custom-popup width-100" id="logoutConfirm">
        <div class="padding-md">
            <h4 class="m-top-none"> Do you want to logout?</h4>
        </div>

        <div class="text-center">
            <a class="btn btn-success m-right-sm" href="login.html">Logout</a>
            <a class="btn btn-danger logoutConfirm_close">Cancel</a>
        </div>
    </div>
    
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <?php include "includes/footerlink.php"; ?>    
    <!-- Flot -->
    <script src="<?php echo base_url(); ?>assets/js/jquery.flot.min.js"></script>
   
    <!-- Morris -->
    <script src="<?php echo base_url(); ?>assets/js/rapheal.min.js"></script>   
    <script src="<?php echo base_url(); ?>assets/js/morris.min.js"></script>    
    
    <!-- Colorbox -->
    <script src='<?php echo base_url(); ?>assets/js/jquery.colorbox.min.js'></script>   

    <!-- Sparkline -->
    <script src='<?php echo base_url(); ?>assets/js/jquery.sparkline.min.js'></script>
    
    
    
    <!-- Endless -->
    <script src="<?php echo base_url(); ?>assets/js/endless/endless_dashboard.js"></script>

    
  </body>
</html>
