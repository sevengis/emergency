<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 4/28/18
 * Time: 9:01 PM
 */
class Infopointentity extends CI_Model{
    var $tabel="info_point";
    var $primary="info_point_id";
    public function __construct()
    {
        parent::__construct();
    }
    public function index(){

        $this->db->join('user',$this->tabel.'.info_point_created_by=user.user_id','left');
        if($this->input->get('category')!=""){
            $this->db->where('info_point_category',$this->input->get('category'));
        }
        return $this->db->get($this->tabel);
    }
    public function getCategory($category=null){

        $this->db->join('category',$this->tabel.'.info_point_category=category.category_id','left');
        if($category!=""){
            $this->db->where('info_point_category',$category);
        }
        return $this->db->get($this->tabel);
    }
    public function getCategoryGroup($category=null){

        $this->db->select(array('*','count(info_point_id) as info'));
        $this->db->join('category',$this->tabel.'.info_point_category=category.category_id','left');
        $this->db->group_by('info_point_category');
        return $this->db->get($this->tabel);
    }
    public function getData($id=null){
        if ($id!=null){
            $this->db->where('md5('.$this->primary.')',$id);
        }
        return $this->db->get($this->tabel);
    }
    public function getStatus($status=null){
        $this->db->join('user',$this->tabel.'.info_point_created_by=user.user_id','left');
        if($this->input->get('category')!=""){
            $this->db->where('info_point_category',$this->input->get('category'));
        }
        if ($status!=null){
            $this->db->where('info_point_status',$status);
        }
        return $this->db->get($this->tabel);
    }
    public function insert($gambar=null){
        $data=array(
            'info_point_name'=>$this->input->post('name'),
            'info_point_lat'=>$this->input->post('lat'),
            'info_point_lng'=>$this->input->post('lng'),
            'info_point_category'=>$this->input->post('category'),
            'info_point_description'=>$this->input->post('description'),
            'info_point_created_at'=>date('Y-m-d H:i:s'),
            'info_point_created_by'=>$this->session->userdata('user_id'),
            'info_point_file'=>$gambar,
            'info_point_status'=>'NEW',

        );
        $this->db->insert($this->tabel,$data);
    }
    public function edit($id){
        $data=array(
            'info_point_name'=>$this->input->post('name'),
            'info_point_lat'=>$this->input->post('lat'),
            'info_point_lng'=>$this->input->post('lng'),
            'info_point_category'=>$this->input->post('category'),
            'info_point_description'=>$this->input->post('description'),
            'info_point_created_at'=>date('Y-m-d H:i:s'),
            'info_point_created_by'=>$this->session->userdata('user_id'),
            'info_point_file'=>$this->input->post('file'),
            'info_point_status'=>$this->input->post('status'),

        );
        $this->db->where('md5('.$this->primary.')',$id);
        $this->db->update($this->tabel,$data);
    }

    public function editStatus($id,$status){
        $data=array(
            'info_point_status'=>$status,

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