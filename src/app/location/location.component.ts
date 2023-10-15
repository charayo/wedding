import { Component, Input, inject } from '@angular/core';
import { ColorcodesService } from '../colorcodes.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  colorCodes: ColorcodesService = inject(ColorcodesService);
  stateChurch = true;

  churchState() {
    this.stateChurch = true;
  }

  receptionState() {
    this.stateChurch = false;
  }
  ngOnIt() {
  }

}
