<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo config_item('title')?></title>
    <meta name="author" content="Ranpariya - The Development Lab">

    <!-- Favicon Icon -->
    <link rel="icon" type="image/png" href="<?php echo base_url();?>assets/images/favicon.png">

    <!-- Bootstrap & jQuery -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/toastr/toastr.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/components-font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/animate/animate.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/scrollbar/jquery.mCustomScrollbar.min.css">

    <!-- Page Loader -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/pace/themes/black/pace-theme-loading-bar.css">

    <!-- ICheckBox -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lib/iCheck/skins/all.css">

    <!-- Custom Icheck theme checkbox -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/vendor/icheck/icheck-theme.css">

    <!-- Custom css -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/dist/css/app.min.css">

    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet">


    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/selectize/dist/css/selectize.css">

    <style>
        #map {
            height: 650px;
        }
    </style>
</head>
<body class="strawberry-theme full-width-page">

<!-- Main Page wrapper -->
<div class="wrapper">

    <!-- Header -->
    <header class="header">
        <div class="navbar navbar-lg no-margin">
            <div class="nav-block">
                <div class="logo inline-block">
                    <a href="<?php echo site_url();?>">
                        <h2><?php echo config_item('title')?></h2>
                    </a>
                </div>
                <div class="pull-right">
                    <div class="nav-menu-list dropdown dropdown-animating">
                        <a href="<?php echo site_url('infopoint/add');?>" class="dropdown-toggle nav-link" >
                            <span class="label label-success notice-label">Kirim Info</span>
                            <i class="fa fa-bell-o"></i>
                        </a>
<!--                        <div class="dropdown-menu dropdown-menu-right notification-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">-->
<!--                            <div class="header"><span>You have 12 notification</span></div>-->
<!--                            <ul class="notification-scrollbar list-block">-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-address-card"></i><span>Notice 1</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-cubes"></i><span>Notice 2</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-warning"><i class="fa fa-comments-o"></i><span>Notice 3</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-envelope"></i><span>Notice 4</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-danger"><i class="fa fa-dot-circle-o"></i><span>Notice 5</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-image"></i><span>Notice 6</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-facebook"></i><span>Notice 7</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-dollar"></i><span>Notice 8</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-warning"><i class="fa fa-clock-o"></i><span>Notice 9</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-group"></i><span>Notice 10</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-danger"><i class="fa fa-heart"></i><span>Notice 11</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-archive"></i><span>Notice 12</span></span></a></li>-->
<!--                            </ul>-->
<!--                            <div class="navbar-footer"><span>View all</span></div>-->
<!--                        </div>-->
                    </div>
                    <?php if($this->session->userdata('login_user')==true){?>
                    <!-- Notification -->
                    <div class="nav-menu-list dropdown dropdown-animating">
<!--                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">-->
<!--                            <span class="label label-success notice-label">14</span>-->
<!--                            <i class="fa fa-bell-o"></i>-->
<!--                        </a>-->
<!--                        <div class="dropdown-menu dropdown-menu-right notification-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">-->
<!--                            <div class="header"><span>You have 12 notification</span></div>-->
<!--                            <ul class="notification-scrollbar list-block">-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-address-card"></i><span>Notice 1</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-cubes"></i><span>Notice 2</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-warning"><i class="fa fa-comments-o"></i><span>Notice 3</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-envelope"></i><span>Notice 4</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-danger"><i class="fa fa-dot-circle-o"></i><span>Notice 5</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-image"></i><span>Notice 6</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-facebook"></i><span>Notice 7</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-dollar"></i><span>Notice 8</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-warning"><i class="fa fa-clock-o"></i><span>Notice 9</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-success"><i class="fa fa-group"></i><span>Notice 10</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-danger"><i class="fa fa-heart"></i><span>Notice 11</span></span></a></li>-->
<!--                                <li><a href="#"><span class="text-info"><i class="fa fa-archive"></i><span>Notice 12</span></span></a></li>-->
<!--                            </ul>-->
<!--                            <div class="navbar-footer"><span>View all</span></div>-->
<!--                        </div>-->
                    </div>
                    <?php } ?>

                    <?php if($this->session->userdata('login_user')!=true){?>
                    <!-- Purchase -->
                    <div class="nav-menu-list hidden-xs">
                        <a href="<?php echo site_url('login')?>" class="btn btn-theme btn-sm btn-rounded">
                            &nbsp;Login | Kirim Pesan Emergency
                        </a>
                    </div>
                    <?php } ?>


                    <?php if($this->session->userdata('login_user')==true){?>
                    <!-- Nav profile -->
                    <div class="nav-menu-list dropdown dropdown-animating nav-profile">
                        <a href="#" class="dropdown-toggle nav-link no-padding-b hidden-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                            <img class="img-circle avatar avatar-xs" alt="RTDL Image" src="<?php echo base_url();?>assets/images/portrait/avatar.png">&nbsp;&nbsp;&nbsp;<?php echo $this->session->userdata('user_full_name')?> &nbsp;&nbsp;<b class="caret"></b>
                        </a>
                        <a href="#" class="dropdown-toggle nav-link no-padding-b visible-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                            <img class="img-circle avatar avatar-xs" alt="RTDL Image" src="<?php echo base_url();?>assets/images/portrait/avatar.png">
                        </a>
                        <div class="dropdown-menu font-os-thin no-margin no-padding-b" data-dropdown-in="bounceInRight" data-dropdown-out="bounceOutRight">
                            <div class="text-center padding-t">
                                <div>
											<span class="active">
												<i class="fa fa-check-circle" aria-hidden="true"></i>
											</span>
                                    <img class="img-circle avatar avatar-lg" alt="RTDL Image" src="<?php echo base_url();?>assets/images/portrait/thumbnail.png">
                                    <h5 class="no-margin-b"><?php echo $this->session->userdata('user_full_name')?></h5>
                                    <p>Creative Designer</p>
                                </div>
                                <div>
                                    <a href="Profile.html" target="_blank" class="btn btn-theme">Profile</a>
                                </div>
                                <div class="font-12">66% profile completed</div>
                                <div class="progress margin-t-b-lg progress-xs no-border-radius">
                                    <div style="width: 66%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" role="progressbar" class="progress-bar progress-bar-theme">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="#" class="col-xs-12 menu-links">Account Settings <span class="glyphicon glyphicon-cog pull-right"></span></a>

                                <a href="<?php echo site_url('logout');?>" class="col-xs-12 menu-links">Sign Out <span class="glyphicon glyphicon-log-out pull-right"></span></a>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </header>