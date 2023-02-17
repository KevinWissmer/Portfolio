import { Component } from '@angular/core';
import { UiService } from './ui.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  constructor(public uiService: UiService) { }
}
