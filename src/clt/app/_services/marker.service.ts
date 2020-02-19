import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
    
  constructor(private http: HttpClient) { }
    
  makeArticleMarkers(map: L.map): void {

      const circle = L.circleMarker([50.1, 6]).addTo(map);
  }
}
