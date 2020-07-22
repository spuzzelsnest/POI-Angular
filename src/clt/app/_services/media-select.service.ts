import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, filter, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { mediaModel } from '.models/mediaModel';
import { footageModel } from '.models/footageModel';

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
      const body = Object(res['fetshedMedia']);
      return body || { }; 
    }
    
    private extractFootage(res: Response){
      const footage = [];
      const body = Object(res[]);
      return body || { };
    }
    
    getMedia(key:string): Observable<mediaModel[]> {
        
      return this.http.get<mediaModel[]>(endpoint + key+'/media' + queryParams)
        .pipe(
            catchError(this.handleError(`getMedia failed`)),
            map(this.extractLogs)
       );
    }
    
}
