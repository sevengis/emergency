<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $apps; ?></title>
    <meta name="author" content="<?php echo $apps; ?>">

    <!-- Favicon Icon -->
    <link rel="icon" type="image/png" href="<?php echo base_url()?>assets/images/favicon.png">

    <!-- Bootstrap & jQuery -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/toastr/toastr.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/components-font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/animate/animate.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/scrollbar/jquery.mCustomScrollbar.min.css">

    <!-- Page Loader -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/pace/themes/black/pace-theme-loading-bar.css">

    <!-- ICheckBox -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/iCheck/skins/all.css">

    <!-- Custom Icheck theme checkbox -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/vendor/icheck/icheck-theme.css">

    <!-- Custom css -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/dist/css/app.min.css">

    <link rel="stylesheet" href="<?php echo base_url()?>assets/datatables/dataTables.bootstrap.css">


    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/sweet-modal/dist/min/jquery.sweet-modal.min.css">

    <!-- Date & Time Picker -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/bootstrap-daterangepicker/daterangepicker.css">


    <!-- Seletize -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/lib/selectize/dist/css/selectize.css">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet">
    <style>
        #map_canvas {
            width: 980px;
            height: 500px;
        }
        #current {
            padding-top: 25px;
        }
        #pac-input {
            background-color: #fff;
            font-size: 15px;
            font-weight: 300;
            margin-left: 12px;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 300px;
        }

        #pac-input:focus {
            border-color: #4d90fe;
        }

        .pac-container {
        }
        </style>
</head>
<body class="strawberry-theme">

<!-- Main Page wrapper -->
<div class="wrapper">

    <!-- Header -->
    <header class="header">
        <div class="navbar navbar-lg no-margin">
            <div class="nav-block">
                <div class="logo inline-block">
                    <a href="#" class="btn menu-toggle pull-left"><i class="fa fa-th" aria-hidden="true"></i></a>
                    <a href="<?php echo site_url('backoffice')?>">
                        <h2><?php echo config_item('title');?><img src="<?php echo base_url()?>assets/images/heading-logo.png" alt="BTA8"></h2>
                    </a>
                </div>
                <div class="pull-right">





                    <!-- Nav profile -->
                    <div class="nav-menu-list dropdown dropdown-animating nav-profile">
                        <a href="#" class="dropdown-toggle nav-link no-padding-b hidden-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                            <img class="img-circle avatar avatar-xs" alt="RTDL Image" src="<?php echo base_url();?>assets/images/portrait/avatar.png">&nbsp;&nbsp;&nbsp;<?php echo $user['user_full_name'];?> &nbsp;&nbsp;<b class="caret"></b>
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
                                    <h5 class="no-margin-b"><?php echo $user['user_full_name']; ?></h5>
                                    <p><?php echo $user['user_full_name']; ?></p>
                                </div>
                                <div>
                                    <a href="<?php echo site_url();?>backoffice/user/profile" target="_blank" class="btn btn-theme">Profile</a>
                                </div>
                                <div class="progress margin-t-b-lg progress-xs no-border-radius">
                                    <div style="width: 66%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" role="progressbar" class="progress-bar progress-bar-theme">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="<?php echo site_url();?>backoffice/user/profile" class="col-xs-12 menu-links">Account Settings <span class="glyphicon glyphicon-cog pull-right"></span></a>
                                <a href="<?php echo site_url();?>backoffice/logout" class="col-xs-12 menu-links">Sign Out <span class="glyphicon glyphicon-log-out pull-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <!-- Left Sidebar -->
    <div class="sidebar sidebar-v1">

        <ul class="list-unstyled sidebar-menu">
            <li><a href="<?php echo site_url();?>backoffice/dashboard" class="list-link"><i class="fa fa-dashboard menu-icon" aria-hidden="true"></i>Dashboard</a></li>

            <li>
                <a href="javascript:;" class="list-link">
                    <i class="fa fa-laptop menu-icon" aria-hidden="true"></i>Master Data
                    <i class="fa fa-angle-right pull-right arrow"></i>
                </a>
                <ul class="sub-menu">
                    <li class="sub-list"><a href="<?php echo site_url();?>backoffice/master/category"><i class="fa fa-circle-o list-icon"></i><span>Category</span></a></li>
                    <li class="sub-list"><a href="<?php echo site_url();?>backoffice/master/user"><i class="fa fa-circle-o list-icon"></i><span>All User</span></a></li>
                    <li class="sub-list"><a href="<?php echo site_url();?>backoffice/master/servicepoint"><i class="fa fa-circle-o list-icon"></i><span>Service Point</span></a></li>


                </ul>
            </li>

            <?php if($this->session->userdata('user_role')=="admin"){?>

            <li>
                <a href="javascript:;" class="list-link">
                    <i class="fa fa-money menu-icon" aria-hidden="true"></i>Kiriman Info
                    <i class="fa fa-angle-right pull-right arrow"></i>
                </a>
                <ul class="sub-menu">
                    <li class="sub-list"><a href="<?php echo site_url()?>backoffice/infopoint/status/new"><i class="fa fa-circle-o"></i><span>New</span></a></li>
                    <li class="sub-list"><a href="<?php echo site_url()?>backoffice/infopoint/status/verified"><i class="fa fa-circle-o"></i><span>Verified</span></a></li>
                    <li class="sub-list"><a href="<?php echo site_url()?>backoffice/infopoint/status/rejected"><i class="fa fa-circle-o"></i><span>Rejected</span></a></li>
                </ul>
            </li>

            <?php }else{ ?>
                <li>
                    <a href="javascript:;" class="list-link">
                        <i class="fa fa-money menu-icon" aria-hidden="true"></i>Kiriman Info
                        <i class="fa fa-angle-right pull-right arrow"></i>
                    </a>
                    <ul class="sub-menu">
                        <li class="sub-list"><a href="<?php echo site_url()?>backoffice/infopoint/status/verified"><i class="fa fa-circle-o"></i><span>Kiriman</span></a></li>
                    </ul>
                </li>
            <?php } ?>

            <li>
                <a href="javascript:;" class="list-link">
                    <i class="fa fa-book menu-icon" aria-hidden="true"></i>Report
                    <i class="fa fa-angle-right pull-right arrow"></i>
                </a>
                <ul class="sub-menu">
<!--                    <li class="sub-list"><a href="--><?php //echo site_url()?><!--backoffice/transaksi/pengajuan"><i class="fa fa-circle-o"></i><span>Pengajuan</span></a></li>-->
<!--                    <li class="sub-list"><a href="--><?php //echo site_url()?><!--backoffice/transaksi/pengeluaran"><i class="fa fa-circle-o"></i><span>Pengeluaran</span></a></li>-->
                </ul>
            </li>

            <?php if ($user['user_role']==1){?>

                <li>
                    <a href="javascript:;" class="list-link">
                        <i class="fa fa-book menu-icon" aria-hidden="true"></i>Report
                        <i class="fa fa-angle-right pull-right arrow"></i>
                    </a>
                    <ul class="sub-menu">
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/pemasukan/report"><i class="fa fa-circle-o"></i><span>Pemasukan</span></a></li>
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/pendaftaran/report"><i class="fa fa-circle-o"></i><span>Pendaftaran</span></a></li>
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/bimbingan/report"><i class="fa fa-circle-o"></i><span>Bimbingan</span></a></li>
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/pengajuan/report"><i class="fa fa-circle-o"></i><span>Pengajuan Dana</span></a></li>
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/pengeluaran/report"><i class="fa fa-circle-o"></i><span>Pengeluaran</span></a></li>
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/coa/report"><i class="fa fa-circle-o"></i><span>Debit/Kredit</span></a></li>
                        <li class="sub-list"><a href="<?php echo site_url();?>backoffice/transaksi/student/report"><i class="fa fa-circle-o"></i><span>Data Siswa</span></a></li>
                    </ul>
                </li>
            <?php } ?>
        </ul>


        <div class="hide margin-t side-menu-setting">
            <div class="row padding-l-r-sm">
                <!-- Always Sticky Header -->
                <div class="col-xs-12 margin-b-xs">
                    <label for="always-sticky-header" class="font-roboto-bold font-12 no-margin vertical-middle">Always Sticky Header</label>
                    <div class="pull-right">
                        <input type="checkbox" id="always-sticky-header" class="always-sticky-header">
                    </div>
                </div>
                <!-- Always Sticky Sidebar -->
                <div class="col-xs-12 margin-b-xs">
                    <label for="always-sticky-sidebar" class="font-roboto-bold font-12 no-margin vertical-middle">Always Sticky Sidebar</label>
                    <div class="pull-right">
                        <input type="checkbox" id="always-sticky-sidebar" class="always-sticky-sidebar">
                    </div>
                </div>
                <!-- Always Sticky Footer -->
                <div class="col-xs-12 margin-b-xs">
                    <label for="always-sticky-footer" class="font-roboto-bold font-12 no-margin vertical-middle">Always Sticky Footer</label>
                    <div class="pull-right">
                        <input type="checkbox" id="always-sticky-footer" class="always-sticky-footer">
                    </div>
                </div>
                <!-- Always Boxed Layout -->
                <div class="col-xs-12 margin-b-xs">
                    <label for="always-boxed-layout" class="font-roboto-bold font-12 no-margin vertical-middle">Always Boxed Layout</label>
                    <div class="pull-right">
                        <input type="checkbox" id="always-boxed-layout" class="always-boxed-layout">
                    </div>
                </div>
            </div>
            <div class="division"></div>
            <div class="row padding-sm">
                <div class="col-xs-12">
                    <h5 class="font-os-normal text-center no-margin-t">Want to clear browser data? Just click once on following buttons..</h5>
                </div>
            </div>
            <div class="row padding-l-r-sm">
                <!-- Clear Local Storage -->
                <div class="col-xs-12">
                    <button class="col-xs-12 btn btn-bordered btn-theme btn-sm flush-local-storage margin-b-xs">Flush Local Storage</button>
                    <button class="col-xs-12 btn btn-bordered btn-theme btn-sm margin-b-xs" type="button">Clear Cookie</button>
                </div>
            </div>
        </div>
    </div>
