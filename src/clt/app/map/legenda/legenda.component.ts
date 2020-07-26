import { Component, OnInit, NgModule } from '@angular/core';
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

  private sub = new Subject();
  private map;
  mediaTypes:any = [];
  footage:any=[];
  id:number;
  
  constructor(
    public rest: MarkerService,
    ) { }

  ngOnInit(): void {

     this.rest.getCat().subscribe((mediaTypes: {}) => {this.mediaTypes = mediaTypes;});

    //this.rest.getMediaSelection(id).subscribe((footage:{})=> {this.footage = footage;});
  }
    
  onChange(event, cat){

    console.log(cat);
    this.id = cat.id;
    this.rest.getMediaSelection(this.id).subscribe((extractSelection: any) =>{this.footage = extractSelection});
      
      console.log(this.footage);
  }
}
