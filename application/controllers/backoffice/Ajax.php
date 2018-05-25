<?php
/**
 * Created by PhpStorm.
 * User: yutriharis
 * Date: 11/26/17
 * Time: 1:43 AM
 */

class Ajax extends Backoffice_Controller{
    public function __construct(){
        parent::__construct();
    }
    public function add_data_keluarga(){
        if ($this->input->post('count')==null){
            $count=0;
        }
        else{
            $count=$this->input->post('count');
        }
        echo "
            <div id=\"transportation\">
                                <div class=\"form-group\">
                                    <label for=\"exampleInputEmail1\">Anggota Keluarga</label>
                                </div>";

        for($i=0;$i<$count;$i++) {

            echo "<div class='row'><p></p></div>";

            echo "<div class='add_transport".$i."' style='border: solid 5px;border-color: #0b0b0b'>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Nama</label>
                <input type='text' class='form-control' id='nama_anggota_keluarga" . $i . "' required name='nama_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Hubungan Dengan KK</label>
                <input type='text' class='form-control' id='hubungan_dengan_kk" . $i . "' required name='hubungan_dengan_kk[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Umur</label>
                <input type='text' class='form-control' id='umur_anggota_keluarga" . $i . "' required name='umur_anggota_keluarga[]' >
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>JK</label>
                <select name='jk_anggota_keluarga[]' class='form-control' id='jk_anggota_keluarga".$i."' required'>
                <option value=''>Pilih Jenis Kelamin</option>
                <option value='Pria'>Pria</option>
                <option value='Wanita'>Wanita</option>
                </select>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Suku</label>
                <input type='text' class='form-control' id='suku_anggota_keluarga" . $i . "' required name='suku_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Pendidikan Terakhir</label>
                <select name='pendidikan_terakhir_anggota_keluarga[]' class='form-control' id='pendidikan_terakhir_anggota_keluarga".$i."' required'>
                <option value=''>Pilih</option>
                <option value='SD'>SD</option>
                <option value='SMP'>SMP</option>
                <option value='SMA'>SMA</option>
                <option value='D3'>D3</option>
                <option value='S1'>S1</option>
                <option value='S2'>S2</option>
                <option value='S3'>S3</option>
                </select>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Pekerjaan Saat Ini</label>
                <input type='text' class='form-control' id='pekerjaan_anggota_keluarga" . $i . "' required name='pekerjaan_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Status Gizi (TB, BB, BMI)</label>
                <input type='text' class='form-control' id='status_gizi_anggota_keluarga" . $i . "' required name='status_gizi_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Status Imunisasi Dasar</label>
                <input type='text' class='form-control' id='status_imunisasi_dasar_anggota_keluarga" . $i . "' required name='status_imunisasi_dasar_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Alat Bantu/Protesa</label>
                <input type='text' class='form-control' id='alat_bantu_anggota_keluarga" . $i . "' required name='alat_bantu_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Penampilan Umum</label>
                <input type='text' class='form-control' id='penampilan_umum_anggota_keluarga" . $i . "' required name='penampilan_umum_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Status Kesehatan Saat Ini</label>
                <input type='text' class='form-control' id='status_kesehatan_anggota_keluarga" . $i . "' required name='status_kesehatan_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Riwayat Penyakit/ Alergi</label>
                <input type='text' class='form-control' id='riwayat_penyakit_anggota_keluarga" . $i . "' required name='riwayat_penyakit_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Analis Masalah Kesehatan</label>
                <input type='text' class='form-control' id='masalah_kesehatan_anggota_keluarga" . $i . "' required name='masalah_kesehatan_anggota_keluarga[]'>
                </div>
            </div>";
        }
        echo "</div>";
    }


    public function edit_data_keluarga(){$i=0;
        $count = $this->input->post('count');
        $lampiran=$this->db->where('md5(visit_id)',md5($this->input->post('serie')))->get('anggota_keluarga')->result();
        echo "
            <div id=\"transportation\">
                                <div class=\"form-group\">
                                    <label for=\"exampleInputEmail1\">Anggota Keluarga</label>
                                </div>";

        foreach ($lampiran as $l) {

            echo "<div class='row'><p></p></div>";

            echo "<div class='add_transport".$i."' style='border: solid 5px;border-color: #0b0b0b'>
                <div class='form-group'>
                <input type='hidden' value='".$l->anggota_keluarga_id."' name='anggota_keluarga_id[]' id='anggota_keluarga_id".$i."'>
                <label for='exampleInputEmail1'>Nama</label>
                <input type='text' class='form-control' value='".$l->nama_anggota_keluarga."' id='nama_anggota_keluarga" . $i . "' required name='nama_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Hubungan Dengan KK</label>
                <input type='text' class='form-control' value='".$l->hubungan_dengan_kk."' id='hubungan_dengan_kk" . $i . "' required name='hubungan_dengan_kk[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Umur</label>
                <input type='text' class='form-control' value='".$l->umur_anggota_keluarga."' id='umur_anggota_keluarga" . $i . "' required name='umur_anggota_keluarga[]' >
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>JK</label>
                <input type='text' class='form-control' id='jk_anggota_keluarga".$i."'  name='jk_anggota_keluarga[]' value='".$l->jk_anggota_keluarga."'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Suku</label>
                <input type='text' class='form-control' value='".$l->suku_anggota_keluarga."' id='suku_anggota_keluarga" . $i . "' required name='suku_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Pendidikan Terakhir</label>
                <input type='text' id='pendidikan_terakhir_anggota_keluarga".$i."' class='form-control' name='pendidikan_terakhir_anggota_keluarga[]' value='".$l->pendidikan_terakhir_anggota_keluarga."' >
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Pekerjaan Saat Ini</label>
                <input type='text' class='form-control' value='".$l->pekerjaan_anggota_keluarga."' id='pekerjaan_anggota_keluarga" . $i . "' required name='pekerjaan_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Status Gizi (TB, BB, BMI)</label>
                <input type='text' class='form-control' value='".$l->status_gizi_anggota_keluarga."' id='status_gizi_anggota_keluarga" . $i . "' required name='status_gizi_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Status Imunisasi Dasar</label>
                <input type='text' class='form-control' value='".$l->status_imunisasi_dasar_anggota_keluarga."' id='status_imunisasi_dasar_anggota_keluarga" . $i . "' required name='status_imunisasi_dasar_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Alat Bantu/Protesa</label>
                <input type='text' class='form-control' value='".$l->alat_bantu_anggota_keluarga."' id='alat_bantu_anggota_keluarga" . $i . "' required name='alat_bantu_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Penampilan Umum</label>
                <input type='text' class='form-control' value='".$l->penampilan_umum_anggota_keluarga."' id='penampilan_umum_anggota_keluarga" . $i . "' required name='penampilan_umum_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Status Kesehatan Saat Ini</label>
                <input type='text' class='form-control' value='".$l->status_kesehatan_anggota_keluarga."' id='status_kesehatan_anggota_keluarga" . $i . "' required name='status_kesehatan_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Riwayat Penyakit/ Alergi</label>
                <input type='text' class='form-control' value='".$l->riwayat_penyakit_anggota_keluarga."' id='riwayat_penyakit_anggota_keluarga" . $i . "' required name='riwayat_penyakit_anggota_keluarga[]'>
                </div>
                <div class='form-group'>
                <label for='exampleInputEmail1'>Analis Masalah Kesehatan</label>
                <input type='text' class='form-control' value='".$l->masalah_kesehatan_anggota_keluarga."' id='masalah_kesehatan_anggota_keluarga" . $i . "' required name='masalah_kesehatan_anggota_keluarga[]'>
                </div>
            </div>";
        }
        echo "</div>";
    }
}