<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 7:08 AM
 */

class Register extends Front_Controller{
    public function __construct(){
        parent::__construct();
    }
    public function index(){
        if($_POST){
            $this->Userentity->insert();
            $this->session->set_flashdata('success','Success For Register Account');
            redirect('');
        }else{
            $this->load->view('register',$this->data);
        }
    }
    public function tes(){
        $service_point=array();
        foreach($this->Servicepointentity->index()->result() as $p){
            $service_point['headerdata']='nama';
        }
        echo json_encode($this->Servicepointentity->index()->result());
    }
}