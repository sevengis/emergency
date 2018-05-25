<?php

class Taskentity extends CI_Model {
    var $tabel="task";
    var $primary="id";
    public function __construct()
    {
        parent::__construct();
    }

    public function index(){

        $this->db->join('account','account.id='.$this->tabel.'.created_by','left');
        $this->db->select(array('task.*','account.name as name'));
        return $this->db->get($this->tabel);
    }
    public function insert(){
        $data=array(
            'title'=>$this->input->post('title'),
            'description'=>$this->input->post('description'),
            'created_by'=>$this->session->userdata('id'),
            'stared_at'=>$this->input->post('stared_at'),
            'closed_at'=>$this->input->post('closed_at'),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),

        );
        $this->db->insert($this->tabel,$data);
    }
    public function edit($id){
        $data=array(
            'title'=>$this->input->post('title'),
            'description'=>$this->input->post('description'),
            'created_by'=>$this->session->userdata('id'),
            'stared_at'=>$this->input->post('stared_at'),
            'closed_at'=>$this->input->post('closed_at'),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),

        );
        $this->db->where('md5(id)',$id);
        $this->db->update($this->tabel,$data);
    }

    public function getPrimary($id){
        $this->db->where('md5(id)',$id);
        return $this->db->get($this->tabel);
    }


    public function deleted($id){
        $this->db->where('md5(id)',$id);
        $this->db->delete($this->tabel);
    }


}