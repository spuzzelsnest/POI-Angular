import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

import { MarkerService } from './../../_services/marker.service';

@Component({
  selector: 'app-legenda',
  templateUrl: './legenda.component.html',
  styleUrls: ['./legenda.component.css']
})

export class LegendaComponent implements OnInit, OnDestroy {

  private sub = new Subject();
  private map;
  isChecked:boolean;
  isLoading = false;
  mediaTypes:any = [];
  footage:any = [];
  id:number;
  tot: number;

  constructor(
    public rest: MarkerService,
    ) { }

  ngOnInit(): void {

     this.rest.getCategories().subscribe((mediaTypes: {}) => {this.mediaTypes = mediaTypes;});
     
    this.mediaTypes.forEach(mediaType =>{
        console.log("onInit: "+ mediaType)
    //    this.mediaType.isChecked = true;
     
    })
  }

  onChange(event, mediaType){
      console.log(event);
      if(event == true){
          this.id = mediaType.id;
          
          this.rest.getMediaSelection(this.id)
                            .pipe(takeUntil(this.sub))
                            .subscribe((extractSelection: any) =>{this.footage = extractSelection});
          console.log("IF: "+this.footage);
      } 
  }

   ngOnDestroy(){
       this.sub.next();
       this.sub.complete();
  }
}
