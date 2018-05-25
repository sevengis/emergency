<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

    //declared data
    protected $data;


    public function __construct() {
        parent::__construct();

        //load database connection
        $this->load->database();

        //load helper
        $this->load->helper('array');
        $this->load->helper('date');
        $this->load->helper('email');
        $this->load->helper('file');
        $this->load->helper('form');
        $this->load->helper('string');
        $this->load->helper('text');
        $this->load->helper('url');

        //load library
        $this->load->library('email');
        $this->load->library('form_validation');
        $this->load->library('image_lib');
        $this->load->library('session');
        $this->load->library('upload');
        $this->load->library('user_agent');

        $this->data['page_title']='EMERGENCY';
        $this->data['page_meta']='EMERGENCY';


        //load model
        $this->load->model('Userentity');
        $this->load->model('Categoryentity');
        $this->load->model('Servicepointentity');
        $this->load->model('Infopointentity');


        $this->data['success']=$this->session->flashdata('success');
        $this->data['error']=$this->session->flashdata('error');


        //custom library
        $this->load->library(array('PHPExcel','PHPExcel/IOFactory'));
        $this->load->library('custom_resize');

    }
}


class Front_Controller extends MY_Controller {
    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('login_user')==false){

            //redirect('');
        }
        else{
            $this->data['user']=array(
                'user_id'=>$this->session->userdata('user_id'),
                'user_email'=>$this->session->userdata('user_email'),
                'user_full_name'=>$this->session->userdata('user_full_name'),
                'user_role'=>$this->session->userdata('user_role')
            );
        }
        $this->data['page_title']='EMERGENCY';
        $this->data['page_meta']='EMERGENCY';
    }


}

class Backoffice_Controller extends MY_Controller {
    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('user_role')!='admin' && $this->session->userdata('user_role')!='officer'){

            redirect('');
        }

        if ($this->session->userdata('login_user')!=true){

            redirect('');
        }
        else{
            $this->data['user']=array(
                'user_id'=>$this->session->userdata('user_id'),
                'user_email'=>$this->session->userdata('user_email'),
                'user_full_name'=>$this->session->userdata('user_full_name'),
                'user_role'=>$this->session->userdata('user_role')
            );
        }
        $this->data['apps']="EMERGENCY";
        $this->data['page_title']='EMERGENCY';
        $this->data['page_meta']='EMERGENCY';
    }


}