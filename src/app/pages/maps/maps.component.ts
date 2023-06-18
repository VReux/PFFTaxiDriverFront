import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map = document.getElementById('map-canvas');
    let lat = map.getAttribute('data-lat');
    let lng = map.getAttribute('data-lng');

    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 12,
        scrollwheel: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
          {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
          {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
          {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
          {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
          {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
          {"featureType":"water","elementType":"all","stylers":[{"color":'#5e72e4'},{"visibility":"on"}]}]
    }

    map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });

    var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
        '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
  }
  
  calcul() {
    const requestParams = {
      origins: ['44.818883', '-0.594357',],
      destinations: ['44.821536', '-0.516550',],
      mode: 'driving',
      language: 'fr',
      region: 'FR'
    };

    // Utilisez la méthode distanceMatrix() pour calculer la distance entre les adresses
    var distanceMatrix = new google.maps.distanceMatrix(requestParams);

    // Affichez le résultat
    console.log(distanceMatrix);
    document.getElementById('distance1').innerHTML = distanceMatrix.rows[0].elements[0].distance.text;
  }

  /*Calcul distance
  calculDistance() {
    var distanceMatrix = new google.maps.DistanceMatrixService();
    distanceMatrix.getDistanceMatrix(
      {
        origins: [this.prestation.depart],
        destinations: [this.prestation.destination],
        travelMode: 'DRIVING',
      },
      (response, status) => {
        this.prestation.distancekm = Math.round(response.rows[0].elements[0].distance.value * 0.001 * 100) / 100;
      })
  }*/

 
}
