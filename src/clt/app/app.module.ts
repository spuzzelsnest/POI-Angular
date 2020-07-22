import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegendaComponent } from './map/legenda/legenda.component';
import { SearchComponent } from './map/search/search.component';
import { FooterComponent } from './map/footer/footer.component';
import { MarkerService } from './_services/marker.service';
import { PopUpService } from './_services/pop-up.service';

@NgModule({
  declarations: [
    MapComponent,
    AppComponent,
    LegendaComponent,
    SearchComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MarkerService,
    PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }