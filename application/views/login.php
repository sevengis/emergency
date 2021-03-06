<!DOCTYPE html>
<html lang="en">
	<head>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php echo config_item('title');?></title>
		<meta name="author" content="Ranpariya - The Development Lab">

		<!-- Favicon Icon -->
		<link rel="icon" type="image/png" href="<?php echo base_url();?>assets/images/favicon.png">

		<!-- Bootstrap & jQuery -->
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/components-font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/animate/animate.min.css">

		<!-- Page Loader -->
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/pace/themes/black/pace-theme-loading-bar.css">

		<!-- ICheckBox -->
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/iCheck/skins/all.css">

		<!-- Custom Icheck theme checkbox -->
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/vendor/icheck/icheck-theme.css">

		<!-- Custom css -->
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/dist/css/app.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/dist/css/authenticate.min.css">

		<!-- Fonts -->
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet">
	</head>
	<body class="strawberry-theme">
		
		<div class="auth-page">
			<div class="animated zoomIn auth_box">
				<div class="col-lg-6 col-md-8 col-sm-10 col-xs-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 col-xs-offset-1 auth_login_bg bg-theme no-padding">
					<div class="col-md-12 col-sm-12 col-xs-12 no-padding-r no-padding-l">
						<div class="auth_login bg-white">
							<h3 class="no-margin-t">Login</h3>
							<form action="" autocomplete="off" method="POST">
								<div class="row">
									<div class="col-xs-12 col-md-12 col-sm-12">	
										<div class="form-group margin-t-lg">
											<input type="email" class="form-control padding-r-xlg" placeholder="Email" name="email" autofocus/>
										</div>
										<div class="form-group margin-t-lg">
											<input type="password" class="form-control padding-r-xlg" name="password" placeholder="Password"/>
										</div>
										<button type="submit" class="btn btn-lg btn-primary btn-theme btn-block margin-t-lg">Login</button>
									</div>
								</div>
								<div class="row auth_signupbutton text-center margin-t-xlg">
									<div class="col-md-12 col-sm-12 col-xs-12">
										<p>Don't have an account? <a href="<?php echo site_url('register')?>" class="text-theme">&nbsp;Sign up now!</a></p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</div>

		<!-- Scripts -->
		<script type="text/javascript" src="<?php echo base_url();?>assets/lib/jquery/dist/jquery.min.js"></script>
		<script type="text/javascript" src="<?php echo base_url();?>assets/lib/bootstrap/dist/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="<?php echo base_url();?>assets/vendor/animate.js"></script>

		<!-- Page Loader -->
		<script type="text/javascript" src="<?php echo base_url();?>assets/lib/pace/pace.min.js"></script>

		<!-- IcheckBox -->
		<script type="text/javascript" src="<?php echo base_url();?>assets/lib/iCheck/icheck.min.js"></script>

		<!-- Custom javascript -->
		<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/theme-setting.min.js"></script>
		<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/components.min.js"></script>
		<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/scroll-top.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css">
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
        <?php if($success!=""){?>
            <script type="text/javascript">
                $(document).ready(function(){
                    toastr["success"]("<?php echo $success;?>");

                });
            </script>
        <?php } ?>
        <?php if($error!=""){?>
            <script type="text/javascript">
                $(document).ready(function(){
                    toastr["error"]("<?php echo $error;?>");

                });
            </script>
        <?php } ?>

	</body>
</html>