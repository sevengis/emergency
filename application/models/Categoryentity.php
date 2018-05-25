<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 9:01 PM
 */
class Categoryentity extends CI_Model{
    var $tabel="category";
    var $primary="category_id";
    public function __construct()
    {
        parent::__construct();
    }
    public function index(){

        return $this->db->get($this->tabel);
    }
    public function getData($id=null){
        if ($id!=null){
            $this->db->where('md5('.$this->primary.')',$id);
        }
        return $this->db->get($this->tabel);
    }
    public function insert(){
        $data=array(
            'category_name'=>$this->input->post('name'),

        );
        $this->db->insert($this->tabel,$data);
    }
    public function edit($id){
        $data=array(
            'category_name'=>$this->input->post('name'),
        );
        $this->db->where('md5('.$this->primary.')',$id);
        $this->db->update($this->tabel,$data);
    }

    public function getPrimary($id){
        $this->db->where('md5('.$this->primary.')',$id);
        return $this->db->get($this->tabel);
    }


    public function deleted($id){
        $this->db->where('md5('.$this->primary.')',$id);
        $this->db->delete($this->tabel);
    }
}