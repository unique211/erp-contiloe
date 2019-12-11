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
<span><img src="<?php echo base_url(); ?>assets/img/Contiloe.png"  alt="" /></span>
<!--				<span class="text-success">Endless</span> <span style="color:#ccc; text-shadow:0 1px #fff">Admin</span>
-->			</h2>
		</div>
		<div class="login-widget animation-delay1">	
			<div class="panel panel-default">
				<div class="panel-heading clearfix">
					<center>
						<i class="fa fa-lock fa-lg"></i> Login
					</center>

				</div>
				<div class="panel-body">
					<form  id="loginform" name="loginform" class="form-login">
						<div class="form-group">
							<label>Username</label>
							<input type="text" placeholder="Username" class="form-control input-sm bounceIn animation-delay2" id="user_id"  name="user_id" required >
						</div>
						<div class="form-group">
							<label>Password</label>
							<input type="password" placeholder="Password" class="form-control input-sm bounceIn animation-delay4"  id="password"  name="password" required>
						</div>
		
						<div class="seperator"></div>
	<!--					<div class="form-group">
							Forgot your password?<br/>
							Click <a href="#">here</a> to reset your password
						</div>
-->
						<hr/>
						
			<a href="<?php echo site_url('Contiloe/forgetpassword'); ?>">Forget Password?</a> 
						<button type="submit"  class="btn btn-success btn-sm bounceIn animation-delay5  pull-right" ><i class="fa fa-sign-in"></i> Sign in</button>
							
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
    <script src="<?php echo base_url(); ?>assets/js/myjs/login_js.js"></script>	
	<script>$('.toggle-demoon').bootstrapToggle('on');	</script>	

    
  </body>
</html>
