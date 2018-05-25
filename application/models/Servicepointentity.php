<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 9:01 PM
 */
class Servicepointentity extends CI_Model{
    var $tabel="service_point";
    var $primary="service_point_id";
    public function __construct()
    {
        parent::__construct();
    }
    public function index(){

        if($this->input->get('category')!=""){
            $this->db->where('service_point_category',$this->input->get('category'));
        }
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
            'service_point_name'=>$this->input->post('name'),
            'service_point_lat'=>$this->input->post('lat'),
            'service_point_lng'=>$this->input->post('lng'),
            'service_point_category'=>$this->input->post('category'),
            'service_point_description'=>$this->input->post('description'),
        );
        $this->db->insert($this->tabel,$data);
    }
    public function edit($id){
        $data=array(
            'service_point_name'=>$this->input->post('name'),
            'service_point_lat'=>$this->input->post('lat'),
            'service_point_lng'=>$this->input->post('lng'),
            'service_point_category'=>$this->input->post('category'),
            'service_point_description'=>$this->input->post('description'),
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