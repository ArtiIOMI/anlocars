$(document).ready(function (){
            $(".up").click(function (){
                $('html, body').animate({
                    scrollTop: $("#up").offset().top
                }, 1000);
            });
            $(".down").click(function (){
                $('html, body').animate({
                    scrollTop: $("#down").offset().top
                }, 1000);
            });
        });

function init_map(){
  var myOptions = {zoom:11,center:new google.maps.LatLng(53.1205629,19.85444940000002),mapTypeId: google.maps.MapTypeId.HYBRID};
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(53.1205629,19.85444940000002)});
  infowindow = new google.maps.InfoWindow({content:'<strong>AnLoCars</strong><br>Wrzosowa, 16<br>09-304 Lubowidz<br>'});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);