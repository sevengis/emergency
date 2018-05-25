<?php

class Infopoint extends Front_Controller
{

    var $list_url = "infopoint/list";
    var $next_url = "infopoint";
    var $last_url = "infopoint/add";

    public function __construct()
    {
        parent::__construct();
        if($this->session->userdata('login_user')!=true){
            $this->session->set_flashdata('error','silakan login terlebih dahulu');
            redirect('');
        }
        $this->data['page_controller'] = "infopoint";
        $this->data['modul']='infopoint';
        $this->data['title']="info point";
    }

    public function checkrole()
    {
        if ($this->session->userdata('role') != 0) {
            redirect('backoffice');
        }
    }

    public function index()
    {
        $this->checkrole();
        $this->data['result'] = $this->Infopointentity->index();
        $this->load->view($this->list_url, $this->data);
    }

    public function add()
    {
        if ($_POST) {
            $this->form_validation->set_rules('name', 'name', 'required');
            if ($this->form_validation->run() == true) {

                    if (!empty($_FILES['file']['name'])) {

                        $config['file_name']=time();

                        $config['upload_path'] = './assets/upload/image/original';

                        $config['allowed_types'] = 'gif|jpg|png';


                        //$config['encrypt_name'] = TRUE;

                        $config['max_size'] = '8000';

                        $this->upload->initialize($config);



                        if($this->upload->do_upload('file')){

                            $upload = $this->upload->data();

                            $data['fname'] = $upload['file_name'];

                            $this->custom_resize->compress_image($data['fname'], "image");

                            $this->Infopointentity->insert($data['fname']);

                            $this->session->set_flashdata('success', 'Success For Adding Data');

                            redirect('');



                        } else {

                            $this->session->set_flashdata('error', $this->upload->display_errors());
                            redirect($this->last_url);

                        }

                    } else {

                        //die("failed");
                        $this->session->set_flashdata('error', 'Please choose valid file.');
                        redirect($this->last_url);

                    }


            } else {
                $this->session->set_flashdata('error', 'Something Problem With Your Input');
                redirect($this->last_url);
            }
        } else {
            $this->load->view($this->last_url, $this->data);
        }
    }

    public function edit($id)
    {
        if ($this->Infopointentity->getPrimary($id)->num_rows() <= 0) {
            redirect($this->next_url);
        } else {
            $this->data['result'] = $this->Infopointentity->getPrimary($id)->row();
        }
        if ($_POST) {

            $this->form_validation->set_rules('name', 'name', 'required');

            if ($this->form_validation->run() == true) {
                $this->Infopointentity->edit($id);
                $this->session->set_flashdata('success', 'Success For Updating Data');
                redirect($this->next_url);
            } else {
                $this->session->set_flashdata('error', 'Something Problem With Your Input');
                redirect('backoffice/master/' . $this->data['page_controller'] . '/edit/' . $id);
            }
        } else {
//            $this->data['kecamatan']=$this->Kecamatanentity->index()->result();
            $this->load->view('backoffice/master/' . $this->data["page_controller"] . '/edit', $this->data);
        }
    }


    public function profile()
    {
        if ($this->Infopointentity->getPrimary(md5($this->session->userdata('id')))->num_rows() <= 0) {
            redirect($this->next_url);
        } else {
            $this->data['result'] = $this->Infopointentity->getPrimary(md5($this->session->userdata('id')))->row();
        }
        if ($_POST) {
            if ($this->data['result']->username != $this->input->post('username'))
                $this->form_validation->set_rules('username', 'Username', 'required|is_unique[account.username]');
            else {
                $this->form_validation->set_rules('username', 'username', 'required');
            }
            if ($this->form_validation->run() == true) {
                $this->Infopointentity->edit(md5($this->session->userdata('id')));
                $this->session->set_flashdata('success', 'Success For Updating Data');
                redirect('backoffice');
            } else {
                $this->session->set_flashdata('error', 'Something Problem With Your Input');
                redirect('backoffice/master/' . $this->data['page_controller'] . '/profile');
            }
        } else {
//            $this->data['kecamatan']=$this->Kecamatanentity->index()->result();
            $this->load->view('backoffice/master/' . $this->data["page_controller"] . '/edit', $this->data);
        }
    }

    public function editpassword()
    {
        if ($this->Infopointentity->getPrimary(md5($this->session->userdata('id')))->num_rows() <= 0) {
            redirect($this->next_url);
        } else {
            $this->data['result'] = $this->Infopointentity->getPrimary(md5($this->session->userdata('id')))->row();
        }
        if ($_POST) {
            if ($this->data['result']->password != md5($this->input->post('old_pass'))) {
                $this->session->set_flashdata('error', 'Wrong Password');
                redirect('backoffice/master/' . $this->data['page_controller'] . '/editpassword');
            }
            $this->form_validation->set_rules('password','new password','required');
            $this->form_validation->set_rules('confirm_pass','confirm password','required|matches[password]');
            if ($this->form_validation->run() == true) {
                $this->Infopointentity->editpassword(md5($this->session->userdata('id')));
                $this->session->set_flashdata('success', 'Success For Updating Password');
                redirect('backoffice/master/' . $this->data['page_controller'] . '/profile');
            } else {
                $this->session->set_flashdata('error', 'Something Problem With Your Input');
                redirect('backoffice/master/' . $this->data['page_controller'] . '/editpassword');
            }
        }

        else{
            $this->load->view('backoffice/master/'.$this->data["page_controller"].'/editpass',$this->data);
        }
    }


    public function deleted($id){
        $this->Infopointentity->deleted(md5($id));
        $this->session->set_flashdata('success','Success For Removing Data');
        redirect('backoffice/master/'.$this->data['page_controller']);
    }

//    public function no_pass(){
//        $data=array('password'=>'e10adc3949ba59abbe56e057f20f883e');
//        $this->db->where('password','d41d8cd98f00b204e9800998ecf8427e');
//        $this->db->update('account',$data);
//
//    }

}