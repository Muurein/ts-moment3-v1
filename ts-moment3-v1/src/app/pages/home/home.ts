import { Component } from '@angular/core';
import { Contact } from '../../partials/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  homepageImage: string = "images/measuring-tape-still-life.jpg";

}
