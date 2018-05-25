<?php $this->load->view('backoffice/header')?>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>


			<!-- Main wrapper -->
			<div class="main-wrapper bg-lg page-animated">
				<div class="row social-widgets">
					<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<div class="section">
							<div class="section-body bg-info">
								<div class="text-center text-white" data-count=".num" data-from="0" data-to="<?php echo $this->Userentity->index()->num_rows();?>" data-suffix="0" data-duration="2">
								<h3 class="num font-os-bold"><?php echo $this->Userentity->index()->num_rows();?></h3>
								</div>
							</div>
							<div class="section-footer no-margin">
								<h5 class="text-center text-mg font-os-bold">Jumlah User</h5>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<div class="section">
							<div class="section-body bg-theme">
								<div class="text-center text-white" data-count=".num" data-from="0"  data-to="<?php echo $this->Categoryentity->index()->num_rows();?>" data-suffix="0" data-duration="2">
								<h3 class="num font-os-bold"><?php echo $this->Categoryentity->index()->num_rows();?></h3>
								</div>
							</div>
							<div class="section-footer no-margin">
								<h5 class="text-center text-mg font-os-bold">Jumlah Kategori</h5>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<div class="section">
							<div class="section-body bg-success">
								<div class="text-center text-white" data-count=".num" data-from="0" data-to="<?php echo $this->Infopointentity->index()->num_rows(); ?>" data-suffix="0" data-duration="2">
								<h3 class="num font-os-bold">3</h3>
								</div>
							</div>
							<div class="section-footer no-margin">
								<h5 class="text-center text-mg font-os-bold">Jumlah Info Kiriman</h5>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
						<div class="section">
							<div class="section-body bg-warning">
								<div class="text-center text-white" data-count=".num" data-from="0" data-prefix="" data-to="<?php echo $this->Servicepointentity->index()->num_rows(); ?>" data-suffix="0" data-duration="2">
								<h3 class="num font-os-bold">0</h3>
								</div>
							</div>
							<div class="section-footer no-margin">
								<h5 class="text-center text-mg font-os-bold">Jumlah Service Point</h5>
							</div>
						</div>
					</div>
				</div>
<!--                <div class="row">-->
<!--                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">-->
<!--                        <div class="section">-->
<!--                            <div class="section-body no-padding">-->
<!--                                <div class="row">-->
<!--                                    <p></p>-->
<!--                                </div>-->
<!--                                <div class="row">-->
<!---->
<!--                                    <form class="form">-->
<!--                                        <div class="col-md-5 col-sm-5 col-xs-5">-->
<!--                                            <div class="form-group">-->
<!--                                                <label class="col-md-2 margin-t-xs">Bulan</label>-->
<!--                                                <div class="col-md-10 margin-b-sm">-->
<!--                                                    <select class="form-control" name="bulan">-->
<!--                                                        <option value="">Pilih Bulan</option>-->
<!--                                                        <option value="01">Januari</option>-->
<!--                                                        <option value="02">Februari</option>-->
<!--                                                        <option value="03">Maret</option>-->
<!--                                                        <option value="04">April</option>-->
<!--                                                        <option value="05">Mei</option>-->
<!--                                                        <option value="06">Juni</option>-->
<!--                                                        <option value="07">Juli</option>-->
<!--                                                        <option value="08">Agustus</option>-->
<!--                                                        <option value="09">September</option>-->
<!--                                                        <option value="10">Oktober</option>-->
<!--                                                        <option value="11">November</option>-->
<!--                                                        <option value="12">Desember</option>-->
<!--                                                    </select>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-md-5 col-sm-5 col-xs-5">-->
<!--                                            <div class="form-group">-->
<!--                                                <label class="col-md-2 margin-t-xs">Tahun</label>-->
<!--                                                <div class="col-md-10 margin-b-sm">-->
<!--                                                    <select class="select-option" name="tahun" required>-->
<!--                                                        <option value="">Pilih Tahun</option>-->
<!--                                                        --><?php //for($i=2000;$i<=date('Y');$i++){?>
<!--                                                        <option value="--><?php //echo $i;?><!--">--><?php //echo $i;?><!--</option>-->
<!--                                                        --><?php //} ?>
<!--                                                    </select>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="col-md-2 col-sm-2 col-xs-2">-->
<!--                                            <div class="form-group">-->
<!--                                                <button type="submit" class="btn btn-primary">Filter</button>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!---->
<!--                                    </form>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

                <div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="section">
							<div class="section-body no-padding">
								<div class="row">

									<div class="col-md-12">
										<div id="coa-chart" class="col-xs-12 no-padding" style="height:400px;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
<?php $this->load->view('backoffice/footer');?>
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
<script>

    // Create the chart
    Highcharts.chart('coa-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data Kiriman'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Jumlah Kiriman'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> of total<br/>'
        },

        "series": [
            {
                "name": "Kiriman",
                "colorByPoint": true,
                "data": [
                    <?php foreach($this->Infopointentity->getCategoryGroup()->result() as $p){?>
                    {
                        "name": "<?php echo $p->category_name;?>",
                        "y": <?php echo $p->info;?>,
                        "drilldown": "<?php echo $p->category_name;?>"
                    },
                   <?php } ?>
                ]
            }
        ]

    });
</script>
