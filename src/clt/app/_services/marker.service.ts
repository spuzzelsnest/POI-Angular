import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import pics from '../../assets/data/markers.json';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
    
constructor(private http: HttpClient,
            private popupService: PopUpService) { }
    
  makeArticleMarkers(map: L.map): void {
      
    pics.forEach(function (value) {
        const lat = value.lat;
        const lng = value.lng;
        const marker = L.marker([lat, lng]).addTo(map);
    });
    //const marker1 = L.marker([49, 6]).addTo(map);
    //const circle = L.circleMarker([50.1, 6]).addTo(map);
  }
}
