import { NgModule} from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@NgModule({
    exports:[
        MatToolbarModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule
    ],
    providers: [],
    declarations: []
})

export class MaterialModule {}