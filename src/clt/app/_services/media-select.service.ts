import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, filter, tap } from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }
    
    private extractMedia(res: Response){
      const media = [];
      const body = Object(res['data']);
      return body || { }; 
    }
    
    private extractFootage(res: Response){
      const footage = [];
      const body = Object(res['data']);
      return body || { };
    }
    
  getFootage(): Observable<footageModel[]> {
      console.log(endpoint);
      
      return this.http.get<footageModel[]>(endpoint + '/m')
        .pipe(
            catchError(this.handleError(`Get Footage failed`)),
            map(this.extractFootage)
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
