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
	<div class="login-wrapper">
		<div class="text-center">
			<h2 class="fadeInUp animation-delay8" style="font-weight:bold">
<!--<span><img src="<?php echo base_url(); ?>assets/img/Contiloe.png"  alt="" /></span>-->
<!--				<span class="text-success">Endless</span> <span style="color:#ccc; text-shadow:0 1px #fff">Admin</span>
-->			</h2>
		</div>
		<div class="login-widget animation-delay1">	
			<div class="panel panel-default">
				<div class="panel-heading clearfix">
					

				</div>
				<div class="panel-body">
					<form  id="forgetform" name="forgetform" class="form-login">
						<div class="form-group">
							<label>Enter Your Email Address</label>
							<input type="email" placeholder="Enter Email Address" class="form-control input-sm bounceIn animation-delay2" id="email"  name="email" required >
							<label id="emailmsg" style="color:red;">Entered Email id not Registered !!!</label>
						</div>
						
		
						<div class="seperator"></div>
	<!--					<div class="form-group">
							Forgot your password?<br/>
							Click <a href="#">here</a> to reset your password
						</div>
-->
						<hr/>
						
						<a href="<?php echo site_url('Contiloe/index'); ?>">Click here for login</a> 
						<button id="send"  class="btn btn-info btn-sm bounceIn animation-delay5  pull-right"  disabled>Send</button>
							
					</form>
				</div>
			</div><!-- /panel -->
		</div><!-- /login-widget -->
	</div><!-- /login-wrapper -->
    
    <!-- Logout confirmation -->
    
    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <?php include "includes/footerlink.php"; ?>   
	<script type="text/javascript">var baseurl = "<?php print base_url(); ?>";</script>
    <script src="<?php echo base_url(); ?>assets/js/myjs/forgetemailsend.js"></script>	
	<script>$('.toggle-demoon').bootstrapToggle('on');	</script>	

    
  </body>
</html>
