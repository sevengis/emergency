<!-- Footer -->
<!--<div class="row no-margin">-->
<!--    <div class="col-md-12">-->
<!--        <div class="footer">-->
<!--            <div class="pull-left padding-sm margin-t-xs">-->
<!--                &copy; Copyright-->
<!--            </div>-->
<!--            <div class="pull-right padding-sm"><img src="--><?php //echo base_url();?><!--assets/images/logo-heading.png" alt="--><?php //echo config_item('title');?><!--"></div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->

<!-- Scroll top -->
<div>
    <a href="javascript:void(0);" class="scrollToTop" title="Scroll to Top"><span></span></a>
</div>
</div>

<!-- Plugin javascript -->
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/toastr/toastr.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/vendor/animate.js"></script>

<!-- Page Loader -->
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/pace/pace.min.js"></script>

<!-- IcheckBox -->
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/iCheck/icheck.min.js"></script>

<!-- Peity Charts -->
<script type="text/javascript" src="<?php echo base_url();?>assets/lib/peity/jquery.peity.min.js"></script>

<!-- Custom javascript -->
<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/sidebar.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/navbar.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/components.min.js"></script>
<script type="text/javascript" src="<?php echo base_url();?>assets/dist/js/scroll-top.min.js"></script>
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
<!-- Selectize -->
<script type="text/javascript" src="<?php echo base_url()?>assets/lib/selectize/dist/js/standalone/selectize.min.js"></script>
<script type="text/javascript" src="<?php echo base_url()?>assets/lib/selectize/dist/js/selectize.min.js"></script>
<script>
    $('.select-option').selectize({
        sortField: 'text'
    });
</script>
</body>
</html>