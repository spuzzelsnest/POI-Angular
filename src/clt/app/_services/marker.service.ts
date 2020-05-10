import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopUpService } from './pop-up.service';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
pics = [];
constructor(private http: HttpClient,
            private popupService: PopUpService) { }

  makeArticleMarkers(map: L.map): void {
      
  this.http.get('assets/data/markers.json').subscribe(media =>{
     
for (const c of media) {
      const marker = L.marker([c.lat, c.lng]);
            marker.bindPopup(this.popupService.makePicPopup(c));
            marker.addTo(map);
  }
  });
  }
}