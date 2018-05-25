<?php

class Userentity extends CI_Model {
    var $tabel="user";
    var $primary="user_id";
    public function __construct()
    {
        parent::__construct();
    }

    public function index(){
        return $this->db->get($this->tabel);
    }
    public function insert(){
        $data=array(
            'user_full_name'=>$this->input->post('full_name'),
            'user_email'=>$this->input->post('email'),
            'user_password'=>sha1($this->input->post('password')),
            'user_phone'=>$this->input->post('phone'),
            'user_address'=>$this->input->post('address'),
            'user_role'=>$this->input->post('role'),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),

        );
        $this->db->insert($this->tabel,$data);
    }
    public function edit($id){
        $data=array(
            'user_full_name'=>$this->input->post('full_name'),
            'user_email'=>$this->input->post('email'),
            'user_phone'=>$this->input->post('phone'),
            'user_address'=>$this->input->post('address'),
            'user_role'=>$this->input->post('role'),
            'created_at'=>date('Y-m-d H:i:s'),
            'updated_at'=>date('Y-m-d H:i:s'),

        );
        $this->db->where('md5('.$this->primary.')',$id);
        $this->db->update($this->tabel,$data);
    }
    public function editpassword($id){
        $data=array(

             'password'=>md5($this->input->post('password')),

        );
        $this->db->where('md5(id)',$id);
        $this->db->update($this->tabel,$data);
    }

    public function getData($id=null){
        if ($id!=null){
            $this->db->where('md5('.$this->primary.')',$id);
        }
        return $this->db->get($this->table);
    }

    public function getPrimary($id){
        $this->db->where('md5('.$this->primary.')',$id);
        return $this->db->get($this->tabel);
    }
    public function getRole($role){
        $this->db->where('user_role',$role);
        return $this->db->get($this->tabel);
    }

    public function deleted($id){
        $this->db->where('md5('.$this->primary.')',$id);
        $this->db->delete($this->tabel);
    }

}