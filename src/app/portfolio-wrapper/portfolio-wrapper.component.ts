import { Component, OnInit, AfterViewInit, HostListener, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { UiService } from '../ui.service';
import { TextContentService } from '../text-content.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-portfolio-wrapper',
  templateUrl: './portfolio-wrapper.component.html',
  styleUrls: ['./portfolio-wrapper.component.scss']
})
export class PortfolioWrapperComponent implements OnInit, AfterViewChecked {


  width: number = 0;
  menuStepWidth: number = 60;
  menuStepStart: number = 20;
  sections = this.uiService.sections;

  colorPaletteMenuOpen = false;
  colorPaletteIconRotation = 270;



  constructor(private readonly location: Location, public uiService: UiService, public textService: TextContentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.setWidthFactor();
    this.setCurrentLocation();
  }

  ngAfterViewChecked() {
  }

  setCurrentLocation() {
    let path = this.location.path();
    if (path.length > 1) {
      let pathParts = path.split("&");
      let section = pathParts[0].split("=");
      if (section[1]) {
        this.uiService.scrollTo(section[1]);
        this.uiService.portfolioOpend = true;
        if (!!pathParts[1]) {
          this.setCurrentProjectSkill(path);
        }
      }
    }
  }

  setCurrentProjectSkill(path:string){
    let current = path.split("&")[1].split("=");
          current[1] = current[1].replace('%20', ' ');
          if (current[0] == 'projectname') {
            this.uiService.setCurrentProject(current[1]);
          } else if (current[0] == 'skillname') {
            this.uiService.setCurrentskill(current[1]);
          }
  }

  switchColorPalette() {
    this.colorPaletteMenuOpen = !this.colorPaletteMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    this.setWidthFactor();
  }

  setWidthFactor() {
    if (this.width <= 550) {
      this.menuStepWidth = 100;
      this.menuStepStart = 0;
    } else {
      this.menuStepWidth = 60;
      this.menuStepStart = 20;
    }
  }
}
