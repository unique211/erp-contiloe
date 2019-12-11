
 
         <div id="top-nav" class="fixed skin-6">
            <a href="#" class="brand">
                <span><img src="<?php echo base_url(); ?>assets/img/Contiloe.png"  alt="" /></span>
               <span class="text-toggle"> </span>
            </a><!-- /brand -->                 
            <button type="button" class="navbar-toggle pull-left" id="sidebarToggle">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <button type="button" class="navbar-toggle pull-left hide-menu" id="menuToggle">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <ul class="nav-notification clearfix">
				 <li class="nav-item nav-link text-muted" style="padding-top:10px;padding-right:10px;"><span class="text-primary" >Welcome </span><b><?php echo $this->session->username;?></b>  </li>
                <li><a tabindex="-1" class="main-link btn-danger btn-sm" href="<?php echo base_url(); ?>contiloe/index" data-toggle="tooltip" title="Logout!"><i class="fa fa-power-off fa-sm txt-white"></i></a></li>
			</ul>
        </div><!-- /top-nav-->
        
