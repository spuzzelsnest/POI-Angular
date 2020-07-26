import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { mediaModel } from './models/mediaModel';
import { footageModel } from './models/footageModel';

const endpoint = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MediaSelectService {

    id:number;

    constructor(private http: HttpClient) { }
    
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

    private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);
    console.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

}
