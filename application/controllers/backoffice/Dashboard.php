<?php

class Dashboard extends Backoffice_Controller {
    public function __construct()
    {
        parent::__construct();
    }
    public function index(){

        $this->data["category"]=$this->Categoryentity->index();


        $this->data['total_user']=$this->Userentity->index()->num_rows();

        $this->load->view('backoffice/dashboard',$this->data);
    }


}