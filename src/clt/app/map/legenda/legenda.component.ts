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

export class LegendaComponent implements OnInit {

  isChecked:boolean = true;
  private sub = new Subject();
  private map;
  mediaTypes:any = [];
  footage:any = [];
  id:number;

  
  constructor(
    public rest: MarkerService,
    ) { }

  ngOnInit(): void {
     this.rest.getCategories().subscribe((mediaTypes: {}) => {this.mediaTypes = mediaTypes;});
  }

  onChange($event, cat){
      console.log(cat.isChecked);
      if($event == true){
          this.id = cat.id;
          console.log(this.id);
          this.rest.getMediaSelection(this.id)
                            .pipe(takeUntil(this.sub))
                            .subscribe((extractSelection: any) =>{this.footage = extractSelection});
          console.log(this.footage);
      }
  }

   ngOnDestroy(){
       if(this.sub) this.sub.unsubscribe();
  }
}
