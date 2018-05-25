<?php

class Logout extends Backoffice_Controller {
    var $direct="backoffice/login";
    public function __construct()
    {
        parent::__construct();
    }
    public function index(){
        $this->session->set_userdata('login_user',false);
        $this->session->unset_userdata('user_id');
        $this->session->unset_userdata('user_role');
        $this->session->unset_userdata('user_username');
        $this->session->unset_userdata('user_email');
        redirect('');
    }

}