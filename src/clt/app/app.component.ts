import { Component } from '@angular/core';
import { MarkerService } from './_services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WW2WEB: The Press War';

    constructor(private markerService: MarkerService)  {
    }
}
