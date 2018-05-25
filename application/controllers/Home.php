<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 7:11 AM
 */
class Home extends Front_Controller{
    public function __construct(){
        parent::__construct();
    }
    public function index(){
        $this->data['service_point']=$this->Servicepointentity->index()->result();
        $this->data['info_point']=$this->Infopointentity->getStatus('NEW')->result();
        $this->data['category']=$this->Categoryentity->index();
        $this->load->view('home',$this->data);
    }
}