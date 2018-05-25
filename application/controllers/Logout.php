<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 7:08 AM
 */

class Logout extends Front_Controller{
    public function __construct(){
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