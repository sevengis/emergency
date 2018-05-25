<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 7:08 AM
 */

class Login extends Front_Controller{
    public function __construct(){
        parent::__construct();
    }
    public function index(){
        if($_POST){
            $this->db->where('user_email',$this->input->post('email'));
            $this->db->where('user_password',sha1($this->input->post('password')));
            $validation=$this->db->get('user');
            if($validation->num_rows() > 0){
                $this->session->set_userdata('login_user',true);
                $this->session->set_userdata('user_id',$validation->row()->user_id);
                $this->session->set_userdata('user_email',$validation->row()->user_email);
                $this->session->set_userdata('user_full_name',$validation->row()->user_full_name);
                $this->session->set_userdata('user_role',$validation->row()->user_role);
                $this->session->set_flashdata('success','Selamat datang. Login Berhasil');
                if($validation->row()->user_role=='user') {
                    redirect('');
                }else{
                    redirect('backoffice');
                }
            }else{
                $this->session->set_flashdata('error','Email and Password not match');
                redirect('login');
            }
        }else{
            $this->load->view('login',$this->data);
        }
    }
}