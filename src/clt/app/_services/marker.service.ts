import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule, Router, Params, ParamMap } from '@angular/router';
import * as L from 'leaflet';

import { PopUpService } from './pop-up.service';
import { MediaSelectService } from './media-select.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

extractFootage = [];

constructor(
    public rest: MediaSelectService,
    private http: HttpClient,
    private popupService: PopUpService,
    private router: Router) { }

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
  
    this.rest.getFootage().subscribe((extractFootage: any) =>{
      
        console.log(extractFootage)
      for (const c of extractFootage) {
       
          
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