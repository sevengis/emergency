<?php $this->load->view('header');?>

			<!-- Sidebar nav [ right ]-->
			<aside class="right-sidebar">
				<ul class="nav nav-tabs" role="tablist">
					<li class="nav-item active col-md-4 col-sm-4 col-xs-4 text-center no-padding">
						<a class="nav-link" data-toggle="tab" href=".tasks" role="tab">
							<i class="fa fa-flag" aria-hidden="true"></i>
						</a>
					</li>
					<li class="nav-item col-md-4 col-sm-4 col-xs-4 text-center no-padding">
						<a class="nav-link" data-toggle="tab" href="#settings" role="tab">
							<i class="fa fa-wrench" aria-hidden="true"></i>
						</a>
					</li>
					<li class="nav-item col-md-4 col-sm-4 col-xs-4 text-center no-padding">
						<a class="nav-link" data-toggle="tab" href=".chat" role="tab">
							<i class="fa fa-comments" aria-hidden="true"></i>
							<span class="label label-theme margin-l-xs">8+</span>
						</a>
					</li>
				</ul>
			</aside>

			<!-- Main wrapper -->
			<div class="main-wrapper bg-lg page-animated">
				<!-- Section page content -->
				<div class="row">
					<div class="col-xs-12 no-padding">
						<div class="col-md-3 col-sm-3 col-xs-12" style="position:absolute;z-index: 2000;bottom: 0px;left: -30px;">
							<div class="col-xs-12">
								<div class="section height-320">
									<div class="section-body height-320">
                                        <form action="" class="form">
                                            <div class="form-group">
                                                <label class="lbl">Kategori</label>
                                                <select name="category" class="select-option">
                                                    <option value="">Pilih</option>
                                                    <?php foreach($category->result() as $p){?>
                                                        <option value="<?php echo $p->category_id; ?>"><?php echo $p->category_name; ?></option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-danger">Filter</button>
                                            </div>

                                        </form>
									</div>
								</div>
							</div>
						</div>
                        <div id="map" style="width: 100%"></div>
					</div>
				</div>
			</div>



			<?php $this->load->view('footer')?>

<script>
    // This example creates circles on the map, representing populations in North
    // America.

    // First, create an object containing LatLng and population for each city.
    var citymap = [
        <?php foreach($info_point as $p){?>
         {
             center: {lat: <?php echo $p->info_point_lat?>, lng: <?php echo $p->info_point_lng; ?>},
             population: 1,
             name:'<?php echo $p->info_point_name; ?>',
             description:'<?php echo $p->info_point_description; ?>',
             image:'<?php echo $p->info_point_file; ?>'
        },
        <?php } ?>
    ];

    //titik bantuan
    var headerdata = [
        <?php foreach($service_point as $p){?>
        {
            center: {lat: <?php echo $p->service_point_lat?>, lng: <?php echo $p->service_point_lng; ?>},
            population: 1,
            name:'<?php echo $p->service_point_name; ?>',
            description:'<?php echo $p->service_point_description; ?>'
        },

        <?php } ?>
    ];

    function initMap() {
        // Create the map.
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {lat: -6.2303072381645395, lng: 106.68924696337865}
        });

        // Construct the circle for each value in citymap.
        // Note: We scale the area of the circle based on the population.
        for (var city in citymap) {
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: citymap[city].center,
                radius: 1000
            });

            var image = {
                url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                // This marker is 20 pixels wide by 32 pixels high.
                size: new google.maps.Size(20, 32),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(0, 32)
            };
            // Shapes define the clickable region of the icon. The type defines an HTML
            // <area> element 'poly' which traces out a polygon as a series of X,Y points.
            // The final coordinate closes the poly by connecting to the first coordinate.
            var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
            };

            var marker = new google.maps.Marker({
                position:  citymap[city].center,
                map: map,
                icon: image,
                shape: shape,
                title: 'title',
                zIndex: 3000
            });



            var content = "Titik Rawan yang dapat digunakan<br/>Koordinat: " + citymap[city].center.lat+ citymap[city].center.lng+'<br/>Nama: '+ citymap[city].name+
                '<br/>Deskripsi: '+ citymap[city].description+'<br/><img src="<?php echo base_url();?>assets/upload/image/compressed/'+ citymap[city].image +'">';

            var infowindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })(marker,content,infowindow));

        }


        for (var city in headerdata) {

            var marker = new google.maps.Marker({
                position:  headerdata[city].center,
                map: map,
                title: 'a',
                zIndex: 3000
            });


            var content = "Titik Bantuan yang dapat digunakan<br/>Koordinat: " + headerdata[city].center.lat+ headerdata[city].center.lng+'<br/>Nama: '+ headerdata[city].name+
                '<br/>Deskripsi: '+ headerdata[city].description+'<br/>';



            var infowindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })(marker,content,infowindow));

        }


    }
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_16luRg57xtLn9bdkzUkO3iMSSWCZjFE&callback=initMap">
</script>
