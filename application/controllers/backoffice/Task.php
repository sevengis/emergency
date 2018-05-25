<?php

class Task extends Backoffice_Controller {

    var $list_url="backoffice/task/list";
    var $next_url="backoffice/task";
    var $last_url="backoffice/task/add";
    public function __construct()
    {
        parent::__construct();
        $this->data['page_controller']="task";
        $this->load->model('Taskentity');
    }
    public function index(){
        $this->data['list']=$this->Taskentity->index();
        $this->load->view($this->list_url,$this->data);
    }
    public function add(){
        if ($_POST){
            $this->form_validation->set_rules('title','title','required');
            $this->form_validation->set_rules('stared_at','Stared Date','required');
            $this->form_validation->set_rules('closed_at','Closed Date','required');

            if ($this->form_validation->run()==true){

                $this->Taskentity->insert();
                $this->session->set_flashdata('success','Success For Adding Data');
                redirect($this->next_url);
            }
            else{
                $this->session->set_flashdata('error',validation_errors());
                redirect($this->last_url);
            }
        }
        else{

            $this->load->view($this->last_url,$this->data);
        }
    }

    public function edit($id){
        if ($this->Taskentity->getPrimary($id)->num_rows()<=0){
            redirect($this->next_url);
        }
        else {
            $this->data['result'] = $this->Taskentity->getPrimary($id)->row();
        }
        if ($_POST){
            $this->form_validation->set_rules('stared_at','waktu mulai','required');
            $this->form_validation->set_rules('closed_at','waktu selesai','required');
            $this->form_validation->set_rules('title','title','required');

            if ($this->form_validation->run()==true){
                $this->Taskentity->edit($id);
                $this->session->set_flashdata('success','Success For Updating Data');
                redirect($this->next_url);
            }
            else{
                $this->session->set_flashdata('error',validation_errors());
                redirect('backoffice/'.$this->data['page_controller'].'/edit/'.$id);
            }
        }
        else{

            $this->load->view('backoffice/'.$this->data["page_controller"].'/edit',$this->data);
        }
    }


    public function deleted($id){
        $this->Taskentity->deleted(md5($id));
        $this->session->set_flashdata('success','Success For Removing Data');
        redirect('backoffice/'.$this->data['page_controller']);
    }



}