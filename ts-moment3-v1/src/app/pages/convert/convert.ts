import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css'
})
export class Convert {
  meterInput: number = 0;
  feetInput: number = 0;
  meterToFeetResult: number = 0;
  feetToMeterResult: number = 0;

  celsiusInput: number = 0;
  fahrenheitInput: number = 0;
  celsiusToFahrenheitResult: number = 0;
  fahrenheitToCelsiusResult: number = 0;

  //metoder
  convertToFeet(): void {
    this.meterToFeetResult = this.meterInput * 3.3;
  }

  convertToMeter(): void {
    this.feetToMeterResult = this.feetInput / 3.3;
  }

  convertToFahrenheit(): void {
    this.celsiusToFahrenheitResult = (this.celsiusInput * 9/5) + 32;
  }

  convertToCelsius(): void {
    this.fahrenheitToCelsiusResult = (this.fahrenheitInput - 32) * 5/9;
  }
}
