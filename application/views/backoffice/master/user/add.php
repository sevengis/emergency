<?php $this->load->view('backoffice/header');?>

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
											<li><a href="<?php echo site_url();?>backoffice/<?php echo $modul;?>" class="text-mg">Data <?php echo $title;?></a></li>
										</ul>
									</div>
									<div class="col-md-6 col-sm-12 col-xs-12">
										<h1 class="text-right no-margin"><i class="fa fa-edit"></i> <?php echo $title; ?></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- JQuery Form Validation Content -->
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="section">
							<div class="section-body">
								<div class="row">
									<form class="validate-form" action="<?php echo site_url()?>backoffice/<?php echo $modul;?>/add" method="POST">
										<div class="col-md-12 col-sm-12 col-xs-12">
											<div class="form-group">
												<label class="col-md-2 margin-t-xs">Nama:</label>
												<div class="col-md-10 margin-b-sm">
													<input class="form-control" type="text" required id="name" name="full_name" placeholder="Masukan Nama">
												</div>
											</div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Email:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <input class="form-control" type="email" required id="email" name="email" placeholder="Masukan Email">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Phone:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <input class="form-control NumberFilter" required type="text" id="phone" name="phone" placeholder="Masukan Telepon">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Address:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <textarea name="address" class="form-control" required placeholder="" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Password:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <input class="form-control" type="password" required id="password" name="password" placeholder="">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Role</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <select name="role" required="required" class="select-option">
                                                        <option value="">Pilih Role</option>
                                                        <option value="admin">Admin</option>
                                                        <option value="officer">Officer</option>
                                                    </select>
                                                </div>
                                            </div>

											<div class="form-group">
												<div class="col-md-10 col-md-offset-2">
													<div id="square">
														<button type="submit" class="btn btn-md btn-theme pull-right">Submit</button>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>




		<?php $this->load->view('backoffice/footer');?>