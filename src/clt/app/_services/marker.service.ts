import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as pics from '../../assets/data/markers.json'
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
    
  constructor(private http: HttpClient) { }
    
  makeArticleMarkers(map: L.map): void {
      console.log("Json data : ", JSON.stringify(pics));
    this.http.get(this.pics).subscribe((res: any) => {
      for (const p of res.features) {
        
        const lat = p.lat;
        const lng = p.lng;
        const marker = L.marker([lon, lng]).addTo(map);
      }
    
    });
        const marker1 = L.marker([49, 6]).addTo(map);
      //const circle = L.circleMarker([50.1, 6]).addTo(map);


  }
}
