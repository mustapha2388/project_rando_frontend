import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-leaflet-map-example',
  templateUrl: './leaflet-map-example.component.html',
  styleUrls: ['./leaflet-map-example.component.css']
})
export class LeafletMapExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // @dress: 9 Rue de la Cité, 75004 Paris, France

    const longitude = 48.85486103480089;
    const latitude = 2.347855567932129;
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('frugalmap').setView([longitude, latitude], 12);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([longitude, latitude], {icon: myIcon}).bindPopup('Marqueur de la cité').addTo(myfrugalmap).openPopup();

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
  }
}
