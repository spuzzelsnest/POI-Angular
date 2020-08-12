import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';
import * as L from 'leaflet';

import { environment } from '../../environments/environment';
import { categoryModel } from './models/categoryModel';
import { footageModel } from './models/footageModel';
import { PopUpService } from './pop-up.service';

const endpoint = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

constructor(
    
    private http: HttpClient,
    private popupService: PopUpService,
    ) { }
    
    private extractCats(res: Response){
      const cats = [];
      const body = Object(res['cats']);
      return body || { }; 
    }
    
    private extractFootage(res: Response){
      const footage = [];
      const body = Object(res['data']);
      return body || { };
    }
    
    getCats(): Observable<categoryModel[]>{
      return this.http.get<categoryModel[]>(endpoint+'/c')
          .pipe(
            catchError(this.handleError(`Failed to get Categories`)),
            map(this.extractCats)
          );
    }

    getFootage(): Observable<footageModel[]>{
      return this.http.get<footageModel[]>(endpoint+'/m')
          .pipe(
              catchError(this.handleError(`Failed to get Footage`)),
              map(this.extractFootage)
            );
    }

  makeMarkers(map: L.map): void {
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

    this.getFootage().subscribe((extractMedia: footageModel[])=>{
      for (const m of extractMedia) {
        const marker = L.marker(
          [m.lat, m.lng],
            {icon:   L.icon({
              iconUrl:'assets/icons/marker'+m.typeId+'.png',iconSize: [25, 37]})
            }
        );
          marker.bindPopup(this.popupService.makePicPopup(m));
          markers.addLayer(marker);
      }
      });
      map.addLayer(markers);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }  

}