import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

import { footageModel } from './../../_services/models/footageModel';
import { MarkerService } from './../../_services/marker.service';

@Component({
  selector: 'app-legenda',
  templateUrl: './legenda.component.html',
  styleUrls: ['./legenda.component.css']
})

export class LegendaComponent implements OnInit, OnDestroy {

  private sub = new Subject();

  footage:any = [];
  id:number;
  tot: number;

  constructor(
    public markerService: MarkerService,
    ) { }

  ngOnInit(): void {

    this.footage = this.markerService.getMedia();
    this.footage.forEach(m => {
      console.log("onInit: "+ m.length);
    });
    

}

  onChange(event, mediaType){
      console.log(event);
      if(event.checked == true){
          this.id = mediaType.id;
          console.log("hi True: "+this.id);
          
          this.markerService.getMedia()
                .pipe(takeUntil(this.sub))
                .subscribe((extractSelection: any) =>{
                        this.footage = extractSelection;
          });
          console.log("IF: "+this.footage);
  }}

   ngOnDestroy(){
       this.sub.next();
       this.sub.complete();
  }
}
