import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: '',
        component: MapComponent
    },{
        path: 'admin',
        component: AdminComponent
    },{
        path: '**', component: MapComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
