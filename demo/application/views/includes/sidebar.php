        <aside class="fixed skin-6">   
            <div class="sidebar-inner scrollable-sidebar">
                <div class="size-toggle">
                    <a class="btn btn-sm" id="sizeToggle">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <a class="btn btn-sm pull-right logoutConfirm_open"  href="#logoutConfirm">
                        <i class="fa fa-power-off"></i>
                    </a>
                </div><!-- /size-toggle --> 
				
				<div class="main-menu">
					
                    <ul>
                        <?php
                        if( $this->session->role == 'Auditor'){
?>
                            <li class="<?php if($active_menu=='d'){	echo 'active';	} ?>">
                            <a href="<?php echo base_url(); ?>/contiloe/dashboard">
                                <span class="menu-icon">
                                    <i class="fa fa-desktop fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Dashboard
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                        </li>
                        <li class="openable open <?php if($active_menu=='a'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-plus fa-lg"></i> 
                                </span>
                                <span class="text">
                                Schedule
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
                            <!-- <li><a href="<?php echo base_url(); ?>contiloe/ArtistSchedule"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Planned Schedule </span></a></li>  -->
                        <li><a href="<?php echo base_url(); ?>contiloe/ActualSchedule"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Actual Schedule </span></a></li> 
                            </ul>
                            </li>
<?php
                        }
                        else if( $this->session->role == 'Production'){
                            ?>
                             <li class="<?php if($active_menu=='d'){	echo 'active';	} ?>">
                            <a href="<?php echo base_url(); ?>/contiloe/dashboard">
                                <span class="menu-icon">
                                    <i class="fa fa-desktop fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Dashboard
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                        </li>
                        <li class="openable open <?php if($active_menu=='a'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-plus fa-lg"></i> 
                                </span>
                                <span class="text">
                                Schedule
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
                            <li><a href="<?php echo base_url(); ?>contiloe/ArtistSchedule"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Planned Schedule </span></a></li> 
                        <!-- <li><a href="<?php echo base_url(); ?>contiloe/ActualSchedule"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Actual Schedule </span></a></li>  -->
                            </ul>
                            </li>
                            <?php
                        }else{
                        ?>
                        <li class="<?php if($active_menu=='d'){	echo 'active';	} ?>">
                            <a href="<?php echo base_url(); ?>/contiloe/dashboard">
                                <span class="menu-icon">
                                    <i class="fa fa-desktop fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Dashboard
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                        </li>
                        <li class="openable open <?php if($active_menu=='mas'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-user fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Master
                                </span>
                                <span class="menu-hover"></span>
                                </a>
                                <ul class="submenu">
                                <li class="openable open <?php if($active_menu=='p'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-user fa-lg"></i> 
                                </span>
                                <span class="text">
                                    People Master
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                                <ul class="submenu">
								<li><a href="<?php echo base_url(); ?>contiloe/PeopleMaster"><span class="menu-icon">People Master Entry</span></a></li>
								<li><a href="<?php echo base_url(); ?>contiloe/peopletype"><span class="menu-icon">People Type </span></a></li>
								<li><a href="<?php echo base_url(); ?>contiloe/charactermaster"><span class="menu-icon">Role/Designation </span></a></li>
								</ul>
                                </li>
                            
                        	
						        <li><a href="<?php echo base_url(); ?>contiloe/projectmaster"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Project </span></a></li>
						
                                <li class="openable open <?php if($active_menu=='S'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-users fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Supplier 
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
								<li><a href="<?php echo base_url(); ?>contiloe/SupplierMaster"><span class="menu-icon">Supplier Master Entry</span></a></li> 
								<li><a href="<?php echo base_url(); ?>contiloe/SuppCategory"><span class="menu-icon	">Supplier Category </span></a></li>
                               </ul>
                               </li> 
                            
                       
                        
                            <li><a href="<?php echo base_url(); ?>contiloe/expensivegroup"><span class="menu-icon	"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp;Expenses Group</span></a></li>
                            <li><a href="<?php echo base_url(); ?>contiloe/expensesmaster"><span class="submenu-label"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp;Expenses  Account</span></a></li>
                            <li><a href="<?php echo base_url(); ?>contiloe/expenses_subaccount"><span class="submenu-label"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp;Expenses Sub Account</span></a></li>
                            <li><a href="<?php echo base_url(); ?>contiloe/UnitOfMeasurement"><span class="submenu-label"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp;Unit Of Measurement </span></a></li>
                            <li><a href="<?php echo base_url(); ?>contiloe/locationmaster"><span class="submenu-label"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp;Location Master </span></a></li>	  
                          
                        </ul>
                        </li>
                        <li class="openable open <?php if($active_menu=='a'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-plus fa-lg"></i> 
                                </span>
                                <span class="text">
                                Schedule
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
                            <li><a href="<?php echo base_url(); ?>contiloe/ArtistSchedule"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Planned Schedule </span></a></li> 
                        <li><a href="<?php echo base_url(); ?>contiloe/ActualSchedule"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Actual Schedule </span></a></li> 
                            </ul>
                            </li>
                        <li class="openable open <?php if($active_menu=='acc'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-plus fa-lg"></i> 
                                </span>
                                <span class="text">
                                Accounts
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
                            <li><a href="<?php echo base_url(); ?>contiloe/InvoicetEntry"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Invoice Entry </span></a></li> 
                        <li><a href="<?php echo base_url(); ?>contiloe/PaymentEntry"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Payment Entry </span></a></li> 
                            <li><a href="<?php echo base_url(); ?>contiloe/BudgetEntry"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Budget Entry </span></a></li> 
                       <!-- <li><a href="<?php echo base_url(); ?>contiloe/monthbudget"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Month Budget Entry </span></a></li> -->
                      
                            </ul>
                        </li>
                        
                      
                       
                      <!--  <li><a href="<?php echo base_url(); ?>contiloe/EpisodicExpenses"><span class="menu-icon"><i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp; Episodic Expenses </span></a></li> -->
                       
						<li class="openable open <?php if($active_menu=='re'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-plus fa-lg"></i> 
                                </span>
                                <span class="text">
                                   Report
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
<!--                            <li><a href="form_wizard.html"><span class="submenu-label">Budgets</span></a></li>
 -->							<li><a href="<?php echo base_url(); ?>contiloe/showwisebudgetreport"><span class="submenu-label"> Episodic reports </span></a></li>
							<li><a href="<?php echo base_url(); ?>contiloe/budget_vs_actual"><span class="submenu-label">Expense Vs Budget reports</span></a></li>	
							<li><a href="<?php echo base_url(); ?>contiloe/expense_rep"><span class="submenu-label">Expenses reports </span></a></li>
							<li><a href="<?php echo base_url(); ?>contiloe/artistwisereport"><span class="submenu-label">Attendance Report </span></a></li>	
							<li><a href="<?php echo base_url(); ?>contiloe/payment_req_report"><span class="submenu-label">Payment Request Report </span></a></li>
                            <li><a href="<?php echo base_url(); ?>contiloe/billstatus"><span class="submenu-label">Bill Status reports </span></a></li>	
                            
                            </ul>
                        </li>
                      
						<li class="openable open <?php if($active_menu=='s'){	echo 'active';	} ?>">
                            <a href="#">
                                <span class="menu-icon">
                                    <i class="fa fa-cog fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Settings
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                            <ul class="submenu">
<!--                            <li><a href="form_wizard.html"><span class="submenu-label">Budgets</span></a></li>
 -->							<li><a href="<?php echo base_url(); ?>contiloe/companyManagement"><span class="submenu-label">Company Management </span></a></li>
								<li><a href="<?php echo base_url(); ?>contiloe/roleMaster"><span class="submenu-label">User Roles </span></a></li>
								<li><a href="<?php echo base_url(); ?>contiloe/userManagement"><span class="submenu-label">User Management </span></a></li>
							
								
							
                                <li><a href="<?php echo base_url(); ?>contiloe/servicemaster"><span class="submenu-label">Service Master </span></a></li>
                                <li><a href="<?php echo base_url(); ?>contiloe/episodicworktype"><span class="submenu-label">Episodic WorkType </span></a></li>
              
                            </ul>
                        </li>
<!--                        <li class="<?php if($active_menu=='im'){	echo 'active';	} ?>">
                            <a href="<?php echo base_url(); ?>wadhawa/importMaster">
                                <span class="menu-icon">
                                    <i class="fa fa-send fa-lg"></i> 
                                </span>
                                <span class="text">
                                    Import Master
                                </span>
                                <span class="menu-hover"></span>
                            </a>
                        </li>
-->                     
<?php
                        }
                        ?>   
                    </ul>
					
                </div><!-- /main-menu -->


				
				
            </div><!-- /sidebar-inner -->
        </aside>