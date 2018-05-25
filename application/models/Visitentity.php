<?php

class Visitentity extends CI_Model {
    var $tabel="visit";
    var $primary="id";
    public function __construct()
    {
        parent::__construct();
    }

    public function index(){

        $this->db->join('task','task.id='.$this->tabel.'.task_id','left');
        $this->db->join('account','account.id='.$this->tabel.'.created_by','left');
        $this->db->select(array('visit.*','account.name as name','account.nip as nip','task.*','account.email as email'));
        return $this->db->get($this->tabel);
    }
    public function getByTask($task_id){
        $this->db->where('md5(task_id)',$task_id);
        $this->db->join('task','task.id='.$this->tabel.'.task_id','left');
        $this->db->join('account','account.id='.$this->tabel.'.created_by','left');
        $this->db->select(array('visit.*','account.name as name','account.nip as nip','task.*','account.email as email'));
        return $this->db->get($this->tabel);
    }
    public function insert($task_id){
        $data=array(
            'lat'=>$this->input->post('lat_area'),
            'lang'=>$this->input->post('lng_area'),
            'nama_pasien'=>$this->input->post('nama_pasien'),
            'alamat_pasien'=>$this->input->post('alamat_pasien'),
            'diagnosa_keperawatan'=>$this->input->post('diagnosa_keperawatan'),
            'implementasi_keperawatan'=>$this->input->post('implementasi_keperawatan'),
            'jumlah_balita'=>$this->input->post('jumlah_balita'),
            'jumlah_remaja'=>$this->input->post('jumlah_remaja'),
            'jumlah_lansia'=>$this->input->post('jumlah_lansia'),
            'evaluasi'=>$this->input->post('evaluasi'),
            'created_at'=>date('Y-m-d H:i:s'),
            'created_by'=>$this->session->userdata('id'),
            'task_id'=>$task_id,

            //baru nomor 3
            'bahasa'=>$this->input->post('bahasa'),
            'jarak_yankes'=>$this->input->post('jarak_yankes'),
            'transportasi'=>$this->input->post('transportasi'),
            'agama'=>$this->input->post('agama'),
            'suku'=>$this->input->post('suku'),
            'telepon'=>$this->input->post('telepon'),
            'kondisi_rumah'=>$this->input->post('kondisi_rumah'),
            'ventilasi'=>$this->input->post('ventilasi'),
            'pencahayaan_rumah'=>$this->input->post('pencahayaan_rumah'),
            'saluran_buang_limbah'=>$this->input->post('saluran_buang_limbah'),
            'sumber_air_bersih'=>$this->input->post('sumber_air_bersih'),
            'jamban_memenuhi_syarat'=>$this->input->post('jamban_memenuhi_syarat'),
            'tempat_sampah'=>$this->input->post('tempat_sampah'),
            'rasio_luas_rumah'=>$this->input->post('rasio_luas_rumah'),
            'bunifas'=>$this->input->post('bunifas'),
            'asi_ekslusif'=>$this->input->post('asi_ekslusif'),
            'air_bersih_makan_minum'=>$this->input->post('air_bersih_makan_minum'),
            'air_bersih_kebersihan_diri'=>$this->input->post('air_bersih_kebersihan_diri'),
            'air_bersih_cuci_tangan'=>$this->input->post('air_bersih_cuci_tangan'),
            'buang_sampah'=>$this->input->post('buang_sampah'),
            'menjaga_lingkungan'=>$this->input->post('menjaga_lingkungan'),
            'konsumsi_lauk'=>$this->input->post('konsumsi_lauk'),
            'jamban_sehat'=>$this->input->post('jamban_sehat'),
            'berantas_jentik'=>$this->input->post('berantas_jentik'),
            'buah_sayur'=>$this->input->post('buah_sayur'),
            'aktivitas_fisik'=>$this->input->post('aktivitas_fisik'),
            'merokok'=>$this->input->post('merokok'),

//            baru nomor 4
            'perhatian_keluarga'=>$this->input->post('perhatian_keluarga'),
            'alasan_perhatian_keluarga'=>$this->input->post('alasan_perhatian_keluarga'),
            'pengetahuan_merawat_keluarga'=>$this->input->post('pengetahuan_merawat_keluarga'),
            'alasan_pengetahuan_merawat_keluarga'=>$this->input->post('alasan_pengetahuan_merawat_keluarga'),
            'pengetahuan_keluarga'=>$this->input->post('pengetahuan_keluarga'),
            'pengetahuan_penyebab_sakit_keluarga'=>$this->input->post('pengetahuan_penyebab_sakit_keluarga'),
            'pengetahuan_gejala_sakit_keluarga'=>$this->input->post('pengetahuan_gejala_sakit_keluarga'),
            'pengetahuan_akibat_sakit_keluarga'=>$this->input->post('pengetahuan_akibat_sakit_keluarga'),
            'informan_sakit_keluarga'=>$this->input->post('informan_sakit_keluarga'),
            'keyakinan_sakit_keluarga'=>$this->input->post('keyakinan_sakit_keluarga'),
            'upaya_peningkatan_kesehatan_keluarga'=>$this->input->post('upaya_peningkatan_kesehatan_keluarga'),
            'alasan_upaya_peningkatan_kesehatan_keluarga'=>$this->input->post('alasan_upaya_peningkatan_kesehatan_keluarga'),
            'pengetahuan_pengobatan_keluarga'=>$this->input->post('pengetahuan_pengobatan_keluarga'),
            'alasan_pengetahuan_pengobatan_keluarga'=>$this->input->post('alasan_pengetahuan_pengobatan_keluarga'),
            'pengetahuan_pencegahan_sakit_keluarga'=>$this->input->post('pengetahuan_pencegahan_sakit_keluarga'),
            'alasan_pengetahuan_pencegahan_sakit_keluarga'=>$this->input->post('alasan_pengetahuan_pencegahan_sakit_keluarga'),
            'pemeliharaan_lingkungan_keluarga'=>$this->input->post('pemeliharaan_lingkungan_keluarga'),
            'alasan_pemeliharaan_lingkungan_keluarga'=>$this->input->post('alasan_pemeliharaan_lingkungan_keluarga'),
            'pemanfaatan_sumber_keluarga'=>$this->input->post('pemanfaatan_sumber_keluarga'),
            'alasan_pemanfaatan_sumber_keluarga'=>$this->input->post('alasan_pemanfaatan_sumber_keluarga')

        );
        $this->db->insert($this->tabel,$data);
    }
    public function edit($id){
        $data=array(
            'lat'=>$this->input->post('lat_area'),
            'lang'=>$this->input->post('lng_area'),
            'nama_pasien'=>$this->input->post('nama_pasien'),
            'alamat_pasien'=>$this->input->post('alamat_pasien'),
            'diagnosa_keperawatan'=>$this->input->post('diagnosa_keperawatan'),
            'implementasi_keperawatan'=>$this->input->post('implementasi_keperawatan'),
            'jumlah_balita'=>$this->input->post('jumlah_balita'),
            'jumlah_remaja'=>$this->input->post('jumlah_remaja'),
            'jumlah_lansia'=>$this->input->post('jumlah_lansia'),
            'evaluasi'=>$this->input->post('evaluasi'),
            'created_at'=>date('Y-m-d H:i:s'),
            'created_by'=>$this->session->userdata('id'),
            //'task_id'=>$this->input->post('task_id'),

            //baru nomor 3
            'bahasa'=>$this->input->post('bahasa'),
            'jarak_yankes'=>$this->input->post('jarak_yankes'),
            'transportasi'=>$this->input->post('transportasi'),
            'agama'=>$this->input->post('agama'),
            'suku'=>$this->input->post('suku'),
            'telepon'=>$this->input->post('telepon'),
            'kondisi_rumah'=>$this->input->post('kondisi_rumah'),
            'ventilasi'=>$this->input->post('ventilasi'),
            'pencahayaan_rumah'=>$this->input->post('pencahayaan_rumah'),
            'saluran_buang_limbah'=>$this->input->post('saluran_buang_limbah'),
            'sumber_air_bersih'=>$this->input->post('sumber_air_bersih'),
            'jamban_memenuhi_syarat'=>$this->input->post('jamban_memenuhi_syarat'),
            'tempat_sampah'=>$this->input->post('tempat_sampah'),
            'rasio_luas_rumah'=>$this->input->post('rasio_luas_rumah'),
            'bunifas'=>$this->input->post('bunifas'),
            'asi_ekslusif'=>$this->input->post('asi_ekslusif'),
            'air_bersih_makan_minum'=>$this->input->post('air_bersih_makan_minum'),
            'air_bersih_kebersihan_diri'=>$this->input->post('air_bersih_kebersihan_diri'),
            'air_bersih_cuci_tangan'=>$this->input->post('air_bersih_cuci_tangan'),
            'buang_sampah'=>$this->input->post('buang_sampah'),
            'menjaga_lingkungan'=>$this->input->post('menjaga_lingkungan'),
            'konsumsi_lauk'=>$this->input->post('konsumsi_lauk'),
            'jamban_sehat'=>$this->input->post('jamban_sehat'),
            'berantas_jentik'=>$this->input->post('berantas_jentik'),
            'buah_sayur'=>$this->input->post('buah_sayur'),
            'aktivitas_fisik'=>$this->input->post('aktivitas_fisik'),
            'merokok'=>$this->input->post('merokok'),




//            baru nomor 4
            'perhatian_keluarga'=>$this->input->post('perhatian_keluarga'),
            'alasan_perhatian_keluarga'=>$this->input->post('alasan_perhatian_keluarga'),
            'pengetahuan_merawat_keluarga'=>$this->input->post('pengetahuan_merawat_keluarga'),
            'alasan_pengetahuan_merawat_keluarga'=>$this->input->post('alasan_pengetahuan_merawat_keluarga'),
            'pengetahuan_keluarga'=>$this->input->post('pengetahuan_keluarga'),
            'pengetahuan_penyebab_sakit_keluarga'=>$this->input->post('pengetahuan_penyebab_sakit_keluarga'),
            'pengetahuan_gejala_sakit_keluarga'=>$this->input->post('pengetahuan_gejala_sakit_keluarga'),
            'pengetahuan_akibat_sakit_keluarga'=>$this->input->post('pengetahuan_akibat_sakit_keluarga'),
            'informan_sakit_keluarga'=>$this->input->post('informan_sakit_keluarga'),
            'keyakinan_sakit_keluarga'=>$this->input->post('keyakinan_sakit_keluarga'),
            'upaya_peningkatan_kesehatan_keluarga'=>$this->input->post('upaya_peningkatan_kesehatan_keluarga'),
            'alasan_upaya_peningkatan_kesehatan_keluarga'=>$this->input->post('alasan_upaya_peningkatan_kesehatan_keluarga'),
            'pengetahuan_pengobatan_keluarga'=>$this->input->post('pengetahuan_pengobatan_keluarga'),
            'alasan_pengetahuan_pengobatan_keluarga'=>$this->input->post('alasan_pengetahuan_pengobatan_keluarga'),
            'pengetahuan_pencegahan_sakit_keluarga'=>$this->input->post('pengetahuan_pencegahan_sakit_keluarga'),
            'alasan_pengetahuan_pencegahan_sakit_keluarga'=>$this->input->post('alasan_pengetahuan_pencegahan_sakit_keluarga'),
            'pemeliharaan_lingkungan_keluarga'=>$this->input->post('pemeliharaan_lingkungan_keluarga'),
            'alasan_pemeliharaan_lingkungan_keluarga'=>$this->input->post('alasan_pemeliharaan_lingkungan_keluarga'),
            'pemanfaatan_sumber_keluarga'=>$this->input->post('pemanfaatan_sumber_keluarga'),
            'alasan_pemanfaatan_sumber_keluarga'=>$this->input->post('alasan_pemanfaatan_sumber_keluarga')

        );
        $this->db->where('md5(id)',$id);
        $this->db->update($this->tabel,$data);
    }

    public function getPrimary($id){
        $this->db->where('md5(id)',$id);
        return $this->db->get($this->tabel);
    }

    public function getByTaskAndStudent($id){
        $this->db->select(array('*','visit.id as visits'));
        $this->db->where('md5(task_id)',$id);
        $this->db->where('created_by',$this->session->userdata('id'));
        return $this->db->get($this->tabel);
    }


    public function deleted($id){
        $this->db->where('md5(id)',$id);
        $this->db->delete($this->tabel);
    }


}