import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MAT_CHECKBOX_CLICK_ACTION,
    MatListModule,
} from '@angular/material';

@NgModule({
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatListModule
    ]
})

export class AngularMaterialModule {}