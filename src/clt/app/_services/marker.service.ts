import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterModule, Router, Params, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

import * as L from 'leaflet';

import { environment } from '../../environments/environment';
import { mediaModel } from './models/mediaModel';
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

id:number;

constructor(
    
    private http: HttpClient,
    private popupService: PopUpService,
    private router: Router) { }
    
    private extractMedia(res: Response){
      const media = [];
      const body = Object(res['cat']);
      return body || { }; 
    }
    
    private extractFootage(res: Response){
      const footage = [];
      const body = Object(res['data']);
      return body || { };
    }
    
    private extractSelection(res: Response){
      const selection = [];
      const body = Object(res['data']);
      return body || { };
    }
    
    getCat(): Observable<mediaModel[]>{
          return this.http.get<mediaModel[]>(endpoint+'/c')
              .pipe(
                catchError(this.handleError(`Failed to get Media`)),
                map(this.extractMedia)
             );
       }

    getFootage(): Observable<footageModel[]> {

          return this.http.get<footageModel[]>(endpoint + '/m')
            .pipe(
                catchError(this.handleError(`Failed to get Footage`)),
                map(this.extractFootage)
             );
       }

    getMediaSelection(id:number): Observable<any>{
            return this.http.get<any>(endpoint+'/'+id+'/m')
              .pipe(
                  catchError(this.handleError(`Failed to get Selection`)),
                  map(this.extractSelection)
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


        this.getMediaSelection(this.id).subscribe((extractSelection: any) =>{

          for (const m of extractSelection) {


            const marker = L.marker([m.lat, m.lng],
                           {icon:   L.icon({iconUrl:'assets/icons/marker'+m.typeId+'.png',
                                         iconSize: [25, 37]})});

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