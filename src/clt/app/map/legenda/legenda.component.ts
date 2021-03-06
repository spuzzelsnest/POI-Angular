import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
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

  mediaTypes:any = [];
  footage:any = [];
  id:number;

  constructor(
    public markerService: MarkerService,
    ) { }

    ngOnInit(): void {
      
      this.markerService.getFootage().subscribe((footage: {}) =>{this.footage = footage;});
      this.markerService.getCats().subscribe((mediaTypes: {}) => {this.mediaTypes = mediaTypes;});

    }

    onChange(event, mediaType){
        console.log(event);
        if(event.checked == true){
          this.id = mediaType.id;
          console.log("hi True: "+this.id);
          
          this.markerService.getFootage()
                .pipe(takeUntil(this.sub))
                .subscribe((extractFoot: any) =>{
                        this.footage = extractFoot;
          });
          console.log("IF: "+this.footage);
        }
      }

    ngOnDestroy(){
        this.sub.next();
        this.sub.complete();
    }
}
