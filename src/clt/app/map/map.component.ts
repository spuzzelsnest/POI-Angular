import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';

import { MarkerService } from '../_services/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  
  private map;
    
  constructor(private markerService: MarkerService) { }

 ngAfterViewInit(): void {
     this.initMap();
     this.markerService.makeArticleMarkers(this.map);
  }

    private initMap(): void{
        this.map = L.map('map').setView([50.1, 6], 6);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }
}
