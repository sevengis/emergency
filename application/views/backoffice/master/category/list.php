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
											<li><a href="<?php echo site_url().'backoffice/'.$modul;?>" class="text-mg">Data <?php echo $title;?></a></li>
										</ul>
									</div>
									<div class="col-md-6 col-sm-12 col-xs-12">
										<h1 class="text-right no-margin"><i class="fa fa-plus"></i> <a href="<?php echo site_url().'backoffice/'.$modul;?>/add" class="btn btn-primary">TAMBAH</a>
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
                                                <th>Action</th>
											</tr>
										</thead>
										<tbody>
										<?php $no=1; foreach($result->result() as $r){?>
											<tr>
												<td><?php echo $no; ?></td>
												<td><?php echo $r->category_name; ?></td>
                                                <td><a href="<?php echo site_url()?>backoffice/<?php echo $modul;?>/edit/<?php echo md5($r->category_id);?>"><i class="fa fa-pencil"></i></a> <a class="col-md-offset-1" onclick="confirm_deleted(<?php echo $r->category_id; ?>);"><i class="fa fa-trash"></i></a></td>
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