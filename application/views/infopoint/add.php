<?php $this->load->view('header');?>
<!-- Seletize -->
<style>
    #map_canvas {
        width: 100%;
        height: 500px;
    }
    #current {
        padding-top: 25px;
    }
    #pac-input {
        background-color: #fff;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 300px;
    }

    #pac-input:focus {
        border-color: #4d90fe;
    }

    .pac-container {
    }
</style>
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
											<li><a href="#" class="text-mg"><i class="fa fa-home fa-lg"></i></a></li>
											<li><a href="#" class="text-mg">Data <?php echo $title;?></a></li>
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
									<form class="validate-form" action="<?php echo site_url()?><?php echo $modul;?>/add" method="POST" enctype="multipart/form-data">
										<div class="col-md-12 col-sm-12 col-xs-12">
											<div class="form-group">
												<label class="col-md-2 margin-t-xs">Nama:</label>
												<div class="col-md-10 margin-b-sm">
													<input class="form-control" type="text" required="required" id="name" name="name" placeholder="">
												</div>
											</div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Deskripsi:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <textarea name="description" required="required" class="form-control" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Kategori</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <select name="category" class="select-option" required="required">
                                                        <option value="">Pilih</option>
                                                        <?php foreach($this->Categoryentity->index()->result() as $p){?>
                                                            <option value="<?php echo $p->category_id; ?>"><?php echo $p->category_name;?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Lat:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <input class="form-control" readonly type="text" id="lat" name="lat" placeholder="Lat">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Lang:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <input class="form-control" readonly type="text" id="lng" name="lng" placeholder="Lang">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-2 margin-t-xs">Foto:</label>
                                                <div class="col-md-10 margin-b-sm">
                                                    <input class="form-control" type="file" accept="image/*" required id="file" name="file" placeholder="File">
                                                </div>
                                            </div>
                                            <div class="form-group col-md-12">
                                            <div id='map_canvas' ></div>
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




		<?php $this->load->view('footer');?>



<input id="pac-input" class="controls" type="text" placeholder="Pencarian Wilayah">
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCaqU7iJ8In7_BDxj0Wa9ov1fBuf-vsTDE"></script>
<script>
    function initialize() {

        var myLatlng = new google.maps.LatLng(-6.2293867, 106.6894297);
        var mapOptions = {
            zoom: 17,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            draggable: true,
            title: 'Hello World!'
        });

        //set the value of the hidden inputs when the position changes
        google.maps.event.addListener(marker, 'position_changed', function() {
            document.getElementById('lat').value = this.getPosition().lat();
            document.getElementById('lng').value = this.getPosition().lng();

        });

        // Create an Autocomplete and link it to the UI element.
        var input = /** @type {HTMLInputElement} */ (
            document.getElementById('pac-input'));
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

        var searchBox = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */
            (input), {
                types: ['geocode']
            });

        // Listen for the event fired when the user selects an item from the
        // pick list. Retrieve the matching places for that item.
        google.maps.event.addListener(searchBox, 'place_changed', function() {
            var place = this.getPlace();
            //when place has been found
            if (place.geometry) {
                marker.setOptions({
                    title: place.name,
                    position: place.geometry.location
                });
                if (place.geometry.viewport) {
                    marker.getMap().fitBounds(place.geometry.viewport);
                } else {
                    marker.getMap().setCenter(place.geometry.location);
                }



            }
            //otherwise
            else {
                marker.setOptions({
                    title: null
                });
                alert('place not found');
            }
        });

        // Bias the SearchBox results towards places that are within the bounds of the
        // current map's viewport.
        google.maps.event.addListener(map, 'bounds_changed', function() {
            var bounds = map.getBounds();
            searchBox.setBounds(bounds);


        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

</script>
