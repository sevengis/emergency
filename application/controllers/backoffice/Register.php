<?php

class Register extends MY_Controller {

    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('login_backoffice')==true){
            redirect('backoffice/dashboard');
        }
    }
    public function index(){
        $this->load->view('backoffice/register',$this->data);
    }
    public function submit(){
        if ($_POST){
            $this->form_validation->set_rules('nip','nip','required|is_unique[account.nip]');
            $this->form_validation->set_rules('email','email','required|is_unique[account.email]|valid_email');
            $this->form_validation->set_rules('name','name','required|is_unique[account.name]');
            if ($this->form_validation->run()==true) {
                $this->Accountentity->insert();
                $this->session->set_flashdata('');
                redirect('backoffice/login');
            }else{
                $this->session->set_flashdata('error',validation_errors());
                redirect('backoffice/register');
            }
        }else{
            redirect('backoffice/register');
        }
    }



}