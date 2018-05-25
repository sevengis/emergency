<?php $this->load->view('backoffice/header')?>

			<!-- Main wrapper -->
			<div class="main-wrapper bg-lg page-animated">

				<!-- Breadcrumb -->
				<div class="row">
					<div class="col-md-12">
						<div class="section breadcrumb-page-title padding-lg">
							<div class="section-body">
								<div class="row">
									<div class="col-md-6 hidden-sm hidden-xs">
										<ul class="breadcrumb bg-white text-left no-margin padding-t-sm">
											<li><a href="<?php echo site_url();?>backoffice" class="text-mg"><i class="fa fa-home fa-lg"></i></a></li>
											<li><a href="#" class="text-mg">Data <?php echo $title;?></a></li>
										</ul>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Tables Content -->
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="section">
							<div class="section-header">
								<h5>DATA <?php echo strtoupper($title); ?> </h5>
							</div>
							<div class="section-body">
								<div class="table-responsive">
									<table id="example2" class="table">
										<thead> 
											<tr>
												<th>#</th> 
												<th>Nama</th>
                                                <th>Koordinat</th>
                                                <th>Deskripsi</th>
                                                <th>Created At</th>
                                                <th>Created By</th>
                                                <th>Status</th>
                                                <th>Action</th>

											</tr>
										</thead>
										<tbody>
										<?php $no=1; foreach($result->result() as $r){?>
											<tr>
												<td><?php echo $no; ?></td>
												<td><?php echo $r->info_point_name; ?></td>
                                                <td><?php echo $r->info_point_lat; ?>,<?php echo $r->info_point_lng; ?></td>
                                                <td><?php echo $r->info_point_description; ?></td>
                                                <td><?php echo $r->info_point_created_at; ?></td>
                                                <td><?php echo $r->user_email; ?></td>
                                                <td><label class="label label-warning"><?php echo $r->info_point_status;?></label></td>
                                                <td>
                                                    <?php if($r->info_point_status=="NEW"){?>
                                                        <a class="col-md-offset-1" onclick="confirm_verified(<?php echo $r->info_point_id; ?>);"><i class="fa fa-check"></i></a>
                                                        <a class="col-md-offset-1" onclick="confirm_rejected(<?php echo $r->info_point_id; ?>);"><i class="fa fa-times"></i></a>
                                                    <?php } ?>
                                                </td>
											</tr>
                                        <?php $no++;} ?>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

<?php $this->load->view('backoffice/footer');?>