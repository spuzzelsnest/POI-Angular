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
      
    this.http.get('assets/data/markers.json').subscribe(pics =>{
      
      for (const c of pics) {
        console.log('icon'+c.typeId)
        const config = 'icon'+c.typeId;
        console.log(config)
        const marker = L.marker([c.lat, c.lng],{icon:   L.icon({iconUrl:'assets/icons/marker'+c.typeId+'.png',iconSize: [25, 37],})});
            marker.bindPopup(this.popupService.makePicPopup(c));
            marker.addTo(map);
      }
    });
  }
}