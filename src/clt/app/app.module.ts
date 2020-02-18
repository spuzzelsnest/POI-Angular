import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LegendaComponent } from './legenda/legenda.component';
import { DescBoxComponent } from './desc-box/desc-box.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { MarkerService } from './_services/marker.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LegendaComponent,
    DescBoxComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
