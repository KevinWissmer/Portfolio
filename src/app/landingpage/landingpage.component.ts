import { Component, OnInit, HostListener } from '@angular/core';
import { UiService } from '../ui.service';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor(public uiService: UiService, public textService: TextContentService) { }

  windowWidth: number = 0;
  angle:number = 5;
  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.resizeAngle();
  }

  openPortfolio() {
    this.uiService.portfolioOpend = !this.uiService.portfolioOpend;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.resizeAngle();
  }


  resizeAngle(){
    switch (true) {
      case this.windowWidth > 900 && this.windowWidth < 1500:
        this.angle = 3;
        break;
        case this.windowWidth >= 1500:
          this.angle = 2;
          break;
      default:
        this.angle = 5;
        break;
    }
  }
}
