import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'বেফাকুল মাদারিসিল আরাবিয়া বাংলাদেশ';
  isMobile = window.innerWidth < 992;
}
