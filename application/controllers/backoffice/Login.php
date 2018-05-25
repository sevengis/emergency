<?php

class Login extends MY_Controller {

    var $direct='backoffice/login';
    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('login_user')==true){
            redirect('backoffice/dashboard');
        }
    }
    public function index(){
        $this->load->view('login',$this->data);
    }
    public function submit(){
        if ($_POST){
            $this->form_validation->set_rules('nip','nip','required');
            $this->form_validation->set_rules('password','password','required');
            if ($this->form_validation->run()==true){
                if ($this->Accountentity->getNip($this->input->post('nip'))->num_rows()==0){
                    echo $this->session->set_flashdata('error','You dont have account. Regsiter your account');
                    redirect($this->direct);
                }
                $data_admin=$this->Accountentity->validation();
                if ($data_admin->num_rows()==1){
                    $this->session->set_userdata('login_backoffice',true);
                    $this->session->set_userdata('id',$data_admin->row()->id);
                    $this->session->set_userdata('nip',$data_admin->row()->nip);
                    $this->session->set_userdata('name',$data_admin->row()->name);
                    $this->session->set_userdata('email',$data_admin->row()->email);
                    $this->session->set_userdata('role',$data_admin->row()->role);

                    redirect('backoffice/dashboard');
                }
                else{
                    $this->session->set_flashdata('error','Wrong Username And Password');
                    redirect($this->direct);
                }
            }
            else{
                echo $this->session->set_flashdata('error',validation_errors());
                redirect($this->direct);
            }

        }
        else{
            redirect($this->direct);
        }
    }


}