import { Component, Input, inject } from '@angular/core';
import { ColorcodesService } from '../colorcodes.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  colorCodes: ColorcodesService = inject(ColorcodesService);

}
