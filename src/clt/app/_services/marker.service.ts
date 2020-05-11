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
    
    const markers = L.markerClusterGroup({
              spiderfyOnMaxZoom: true,
                      showCoverageOnHover: false,
                      zoomToBoundsOnClick: true,
                      removeOutsideVisibleBounds:true,
                      disableClusteringAtZoom: 18,
                      maxClusterRadius: 5,
                      spiderLegPolylineOptions: {
                                    weight: 1.5,
                                    color: '#222',
                                    opacity: 0.5
                      }
        });
  
    this.http.get('assets/data/markers.json').subscribe((pics: any) =>{
      
      for (const c of pics) {
       
        const marker = L.marker([c.lat, c.lng],
                       {icon:   L.icon({iconUrl:'assets/icons/marker'+c.typeId+'.png',
                                     iconSize: [25, 37]})});

           marker.bindPopup(this.popupService.makePicPopup(c));
           markers.addLayer(marker);
      }
      
    });
    map.addLayer(markers);
}
}