import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  articles: string = '/assets/data/markers.json';

  constructor(private http: HttpClient) {}
    
  makeArticleMarkers(map: L.map): void {
      this.http.get(this.articles).subscribe((res: any) => {
         for (const c of res.features) {
            const lat = c[0];
            
            const marker = L.marker([0, 0]).addTo(map)
      }
    });
  }
}
