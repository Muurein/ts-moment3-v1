import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainmenu } from './partials/mainmenu/mainmenu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainmenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ts-moment3-v1';
}
