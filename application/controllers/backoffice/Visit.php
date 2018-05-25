<?php

class Visit extends Backoffice_Controller {

    var $list_url="backoffice/visit/list";
    var $next_url="backoffice/visit";
    var $last_url="backoffice/visit/add";
    public function __construct()
    {
        parent::__construct();
        $this->data['page_controller']="visit";
        $this->load->model('Taskentity');
    }
    public function index(){
        $this->data['list']=$this->Taskentity->index();
        $this->load->view($this->list_url,$this->data);
    }
    public function add($task_id){
        $this->data["result"]=$this->Taskentity->getPrimary($task_id)->row();

        if ($_POST){
            $this->form_validation->set_rules('nama_pasien','Nama Pasien','required');

            if ($this->form_validation->run()==true){
                $this->Visitentity->insert($this->data["result"]->id);
                $visit_id=$this->db->insert_id();
                $i=0;
                foreach ($this->input->post('nama_anggota_keluarga') as $transport) {
                    $data=array(
                        'visit_id'=>$visit_id,
                        'nama_anggota_keluarga'=>$this->input->post('nama_anggota_keluarga')[$i],
                        'hubungan_dengan_kk'=>$this->input->post('nama_anggota_keluarga')[$i],
                        'umur_anggota_keluarga'=>$this->input->post('umur_anggota_keluarga')[$i],
                        'jk_anggota_keluarga'=>$this->input->post('jk_anggota_keluarga')[$i],
                        'suku_anggota_keluarga'=>$this->input->post('suku_anggota_keluarga')[$i],
                        'pendidikan_terakhir_anggota_keluarga'=>$this->input->post('pendidikan_terakhir_anggota_keluarga')[$i],
                        'pekerjaan_anggota_keluarga'=>$this->input->post('pekerjaan_anggota_keluarga')[$i],
                        'status_gizi_anggota_keluarga'=>$this->input->post('status_gizi_anggota_keluarga')[$i],
                        'status_imunisasi_dasar_anggota_keluarga'=>$this->input->post('status_imunisasi_dasar_anggota_keluarga')[$i],
                        'status_kesehatan_anggota_keluarga'=>$this->input->post('status_kesehatan_anggota_keluarga')[$i],
                        'alat_bantu_anggota_keluarga'=>$this->input->post('alat_bantu_anggota_keluarga')[$i],
                        'penampilan_umum_anggota_keluarga'=>$this->input->post('penampilan_umum_anggota_keluarga')[$i],
                        'masalah_kesehatan_anggota_keluarga'=>$this->input->post('masalah_kesehatan_anggota_keluarga')[$i],
                        'riwayat_penyakit_anggota_keluarga'=>$this->input->post('riwayat_penyakit_anggota_keluarga')[$i],
                    );
                    $this->db->insert('anggota_keluarga',$data);

                    $i++;
                }
                $this->session->set_flashdata('success','Success For Adding Data');
                redirect("backoffice/task");
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

    public function task($task){
        if ($this->Visitentity->getByTask($task)->num_rows()<=0){
            $this->session->set_flashdata('success','Belum ada kunjungan');
            redirect('backoffice/task');
        }
        $this->data["result"]=$this->Visitentity->getByTask($task);
       $this->load->view('backoffice/'.$this->data["page_controller"].'/task',$this->data);
    }


    public function edit($id){
        if ($this->Visitentity->getPrimary($id)->num_rows()<=0){
            redirect($this->next_url);
        }
        else {
            $this->data['lampiran']=$this->db->where('md5(visit_id)',$id)->get('anggota_keluarga');
            $this->data['result'] = $this->Visitentity->getPrimary($id)->row();
        }
        if ($_POST){
            $this->form_validation->set_rules('jumlah_balita','jumlah_balita','required');
            if ($this->form_validation->run()==true){
                $this->Visitentity->edit($id);
                if ($this->input->post('nama_anggota_keluarga')) {
                    $i = 0;
                    foreach ($this->input->post('nama_anggota_keluarga') as $transport) {
                        if ($this->input->post('anggota_keluarga_id')=="") {
                            $this->db->where('md5(visit_id)', $id);
                        } else {
                            $this->db->where_not_in('anggota_keluarga_id', $this->input->post('anggota_keluarga_id'));
                            $this->db->where('md5(visit_id)', $id);
                        }
                        $this->db->delete('anggota_keluarga');
                        $i++;
                    }
                    $i = 0;
                    foreach ($this->input->post('nama_anggota_keluarga') as $newtransport) {
                        if (isset($this->input->post('anggota_keluarga_id')[$i])) {
                            $data=array(
                                'visit_id'=>$this->data['result']->id,
                                'nama_anggota_keluarga'=>$this->input->post('nama_anggota_keluarga')[$i],
                                'hubungan_dengan_kk'=>$this->input->post('nama_anggota_keluarga')[$i],
                                'umur_anggota_keluarga'=>$this->input->post('umur_anggota_keluarga')[$i],
                                'jk_anggota_keluarga'=>$this->input->post('jk_anggota_keluarga')[$i],
                                'suku_anggota_keluarga'=>$this->input->post('suku_anggota_keluarga')[$i],
                                'pendidikan_terakhir_anggota_keluarga'=>$this->input->post('pendidikan_terakhir_anggota_keluarga')[$i],
                                'pekerjaan_anggota_keluarga'=>$this->input->post('pekerjaan_anggota_keluarga')[$i],
                                'status_gizi_anggota_keluarga'=>$this->input->post('status_gizi_anggota_keluarga')[$i],
                                'status_imunisasi_dasar_anggota_keluarga'=>$this->input->post('status_imunisasi_dasar_anggota_keluarga')[$i],
                                'status_kesehatan_anggota_keluarga'=>$this->input->post('status_kesehatan_anggota_keluarga')[$i],
                                'alat_bantu_anggota_keluarga'=>$this->input->post('alat_bantu_anggota_keluarga')[$i],
                                'penampilan_umum_anggota_keluarga'=>$this->input->post('penampilan_umum_anggota_keluarga')[$i],
                                'masalah_kesehatan_anggota_keluarga'=>$this->input->post('masalah_kesehatan_anggota_keluarga')[$i],
                                'riwayat_penyakit_anggota_keluarga'=>$this->input->post('riwayat_penyakit_anggota_keluarga')[$i],
                            );
                            $this->db->where('anggota_keluarga_id',$this->input->post('anggota_keluarga_id')[$i]);
                            $this->db->update('anggota_keluarga',$data);

                        } else {

                            $data=array(
                                'visit_id'=>$this->data['result']->id,
                                'nama_anggota_keluarga'=>$this->input->post('nama_anggota_keluarga')[$i],
                                'hubungan_dengan_kk'=>$this->input->post('nama_anggota_keluarga')[$i],
                                'umur_anggota_keluarga'=>$this->input->post('umur_anggota_keluarga')[$i],
                                'jk_anggota_keluarga'=>$this->input->post('jk_anggota_keluarga')[$i],
                                'suku_anggota_keluarga'=>$this->input->post('suku_anggota_keluarga')[$i],
                                'pendidikan_terakhir_anggota_keluarga'=>$this->input->post('pendidikan_terakhir_anggota_keluarga')[$i],
                                'pekerjaan_anggota_keluarga'=>$this->input->post('pekerjaan_anggota_keluarga')[$i],
                                'status_gizi_anggota_keluarga'=>$this->input->post('status_gizi_anggota_keluarga')[$i],
                                'status_imunisasi_dasar_anggota_keluarga'=>$this->input->post('status_imunisasi_dasar_anggota_keluarga')[$i],
                                'status_kesehatan_anggota_keluarga'=>$this->input->post('status_kesehatan_anggota_keluarga')[$i],
                                'alat_bantu_anggota_keluarga'=>$this->input->post('alat_bantu_anggota_keluarga')[$i],
                                'penampilan_umum_anggota_keluarga'=>$this->input->post('penampilan_umum_anggota_keluarga')[$i],
                                'masalah_kesehatan_anggota_keluarga'=>$this->input->post('masalah_kesehatan_anggota_keluarga')[$i],
                                'riwayat_penyakit_anggota_keluarga'=>$this->input->post('riwayat_penyakit_anggota_keluarga')[$i],
                            );
                            $this->db->insert('anggota_keluarga',$data);
                        }
                        $i++;
                    }

                }
                $this->session->set_flashdata('success','Success For Updating Data');
                redirect('backoffice/task');
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

    public function report($task){
        $data=$this->Visitentity->getByTask($task);
        $objPHPExcel = new PHPExcel();
        $form = "TASK-".$data->row()->title."-" . date("Y-m-d H:a:s");

        $totn = $this->Visitentity->getByTask($task)->num_rows();
        $maxrow = $totn + 4;
        $nil = $this->Visitentity->getByTask($task);
        $row = 5;
        $no = 1;
        $objPHPExcel->getActiveSheet()->setCellValue('A1', 'DATA TASK '.$data->row()->title);


        $style = array(
            'alignment' => array(
                'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
            )
        );
        for ($x = 1;
             $x<=2;
             $x++) {
            $objPHPExcel->getActiveSheet()->mergeCells("A".$x.":AA".$x);
            $objPHPExcel->getActiveSheet()->getStyle("A".$x.":AA".$x)->applyFromArray($style);
        }

        $objPHPExcel->getActiveSheet()->setCellValue('A4', "NIP");
        $objPHPExcel->getActiveSheet()->setCellValue('B4', "NAMA MAHASISWA");
        $objPHPExcel->getActiveSheet()->setCellValue('C4', "EMAIL MAHASISWA");
        $objPHPExcel->getActiveSheet()->setCellValue('D4', "NAMA PASIEN");
        $objPHPExcel->getActiveSheet()->setCellValue('E4', "ALAMAT PASIEN");
        $objPHPExcel->getActiveSheet()->setCellValue('F4', "DIAGNOSA KEPERAWATAN");
        $objPHPExcel->getActiveSheet()->setCellValue('G4', "IMPLEMENTASI KEPERAWATAN");
        $objPHPExcel->getActiveSheet()->setCellValue('H4', "JUMLAH BALITA");
        $objPHPExcel->getActiveSheet()->setCellValue('I4', "JUMLAH REMAJA");
        $objPHPExcel->getActiveSheet()->setCellValue('J4', "JUMLAH LANSIA");
        $objPHPExcel->getActiveSheet()->setCellValue('K4', "EVALUASI");
        $objPHPExcel->getActiveSheet()->setCellValue('L4', "KOORDINAT LOKASI");
        $objPHPExcel->getActiveSheet()->setCellValue('M4', "TANGGAL INPUT");

        $objPHPExcel->getActiveSheet()->setCellValue('N4', "BAHASA SEHARI-HARI");
        $objPHPExcel->getActiveSheet()->setCellValue('O4', "JARAK YANKES TERDEKAT");
        $objPHPExcel->getActiveSheet()->setCellValue('P4', "TRANSPORTASI");
        $objPHPExcel->getActiveSheet()->setCellValue('Q4', "AGAMA");
        $objPHPExcel->getActiveSheet()->setCellValue('R4', "SUKU");
        $objPHPExcel->getActiveSheet()->setCellValue('S4', "TELEPON");
        $objPHPExcel->getActiveSheet()->setCellValue('T4', "KONDISI RUMAH");
        $objPHPExcel->getActiveSheet()->setCellValue('U4', "VENTILASI");
        $objPHPExcel->getActiveSheet()->setCellValue('V4', "PENCAHAYAAN RUMAH");
        $objPHPExcel->getActiveSheet()->setCellValue('W4', "SALURAN BUANG LIMBAH");
        $objPHPExcel->getActiveSheet()->setCellValue('X4', "SUMBER AIR BERSIH");
        $objPHPExcel->getActiveSheet()->setCellValue('Y4', "JAMBAN MEMENUHI SYARAT");
        $objPHPExcel->getActiveSheet()->setCellValue('Z4', "TEMPAT SAMPAH");
        $objPHPExcel->getActiveSheet()->setCellValue('AA4', "RASIO LUAS BANGUNAN RUMAH 80M/2 DENGAN ANGGOTA KELUARGA");




        foreach ($nil->result() as $n) {
            $objPHPExcel->getActiveSheet()->setCellValueExplicit('A' . $row, $n->nip, PHPExcel_Cell_DataType::TYPE_STRING);
            $objPHPExcel->getActiveSheet()->setCellValueExplicit('B' . $row, $n->name, PHPExcel_Cell_DataType::TYPE_STRING);
            $objPHPExcel->getActiveSheet()->setCellValue('C' . $row, $n->email);
            $objPHPExcel->getActiveSheet()->setCellValue('D' . $row, $n->nama_pasien);
            $objPHPExcel->getActiveSheet()->setCellValue('E' . $row, $n->alamat_pasien);
            $objPHPExcel->getActiveSheet()->setCellValue('F' . $row, $n->diagnosa_keperawatan);
            $objPHPExcel->getActiveSheet()->setCellValue('G' . $row, $n->implementasi_keperawatan);
            $objPHPExcel->getActiveSheet()->setCellValue('H' . $row, $n->jumlah_balita);
            $objPHPExcel->getActiveSheet()->setCellValue('I' . $row, $n->jumlah_remaja);
            $objPHPExcel->getActiveSheet()->setCellValue('J' . $row, $n->jumlah_lansia);
            $objPHPExcel->getActiveSheet()->setCellValue('K' . $row, $n->evaluasi);
            $objPHPExcel->getActiveSheet()->setCellValue('L' . $row, $n->lat.','.$n->lang);
            $objPHPExcel->getActiveSheet()->setCellValue('M' . $row, $n->created_at);

            $objPHPExcel->getActiveSheet()->setCellValue('N' . $row, $n->bahasa);
            $objPHPExcel->getActiveSheet()->setCellValue('O' . $row, $n->jarak_yankes);
            $objPHPExcel->getActiveSheet()->setCellValue('P' . $row, $n->transportasi);
            $objPHPExcel->getActiveSheet()->setCellValue('Q' . $row, $n->agama);
            $objPHPExcel->getActiveSheet()->setCellValue('R' . $row, $n->suku);
            $objPHPExcel->getActiveSheet()->setCellValue('S' . $row, $n->telepon);
            $objPHPExcel->getActiveSheet()->setCellValue('T' . $row, $n->kondisi_rumah);
            $objPHPExcel->getActiveSheet()->setCellValue('U' . $row, $n->ventilasi);
            $objPHPExcel->getActiveSheet()->setCellValue('V' . $row, $n->pencahayaan_rumah);
            $objPHPExcel->getActiveSheet()->setCellValue('W' . $row, $n->saluran_buang_limbah);
            $objPHPExcel->getActiveSheet()->setCellValue('X' . $row, $n->sumber_air_bersih);
            $objPHPExcel->getActiveSheet()->setCellValue('Y' . $row, $n->jamban_memenuhi_syarat);
            $objPHPExcel->getActiveSheet()->setCellValue('Z' . $row, $n->tempat_sampah);
            $objPHPExcel->getActiveSheet()->setCellValue('AA' . $row, $n->rasio_luas_rumah);
            $row++;
            $no++;
        }

        //Freeze pane
        $objPHPExcel->getActiveSheet()->freezePane('A2');
        //Cell Style
        $styleArray = array(
            'borders' => array(
                'allborders' => array(
                    'style' => PHPExcel_Style_Border::BORDER_THIN
                )
            )
        );
        $objPHPExcel->getActiveSheet()->getStyle('A1:AA' . $maxrow)->applyFromArray($styleArray);

        for ($col = 'A'; $col !== 'AB'; $col++) {
            $objPHPExcel->getActiveSheet()->getColumnDimension($col)->setAutoSize(true);
        }
        //Save as an Excel BIFF (xls) file
        $objWriter = IOFactory::createWriter($objPHPExcel, 'Excel5');
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $form . '.xls"');
        header('Cache-Control: max-age=0');

        $objWriter->save('php://output');

    }



}