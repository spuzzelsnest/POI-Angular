import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { Subscription } from 'rxjs';

import { MediaSelectService } from './../../_services/media-select.service';

@Component({
  selector: 'app-legenda',
  templateUrl: './legenda.component.html',
  styleUrls: ['./legenda.component.css']
})

export class LegendaComponent implements OnInit {
    
  mediaTypes:any = [];

  constructor(
    public rest: MediaSelectService,
     
    ) { }

  ngOnInit(): void {
      
    this.rest.getCat().subscribe((cats: {}) => {this.mediaTypes = cats;});

  }
  
}
