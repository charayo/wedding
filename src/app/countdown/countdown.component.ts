import { Component, inject } from '@angular/core';
import { ColorcodesService } from '../colorcodes.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  colorCodes: ColorcodesService = inject(ColorcodesService);
  day = "00";
  hours = "00";
  mins = "00";
  // today;

  constructor() {
    // this.today = new Date()
  }

  rounder(figure: any) {
    let round = Math.floor(figure);
    let rem = figure - round
    return [round, rem];
  }

  dateDiff(target: Date) {
    const today = new Date()
    let todayMilliseconds = today.getTime();
    let targetMilliseconds = target.getTime();

    let difference = targetMilliseconds - todayMilliseconds;

    const days = (difference / (1000 * 60 * 60 * 24));
    let result = this.rounder(days)
    let theDays = result[0];

    let rawHours = result[1] * 24;
    let rawHoursRes = this.rounder(rawHours)
    let hoursRes = rawHoursRes[0];

    let rawMin = rawHoursRes[1] * 60
    let minRes = this.rounder(rawMin)[0]

    return { day: theDays, hour: hoursRes, min: minRes };
  }
  setWeddingDate(weddingDate: string) {
    let fixedDay = new Date(weddingDate);
    let timeLeft = this.dateDiff(fixedDay)
    this.day = timeLeft.day.toString();
    this.hours = timeLeft.hour.toString();
    this.mins = timeLeft.min.toString()
    if (Number(this.day) < 0) {

      this.day = "00";
      this.hours = "00";
      this.mins = "00";
    }
  }
  ngOnInit(): void {
    setInterval(() => {
      this.setWeddingDate("November 11, 2023");
    }, 60000)
    this.setWeddingDate("November 11, 2023");
  }

}
