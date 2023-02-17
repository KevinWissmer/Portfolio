import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  


  constructor(public uiService: UiService, public textService: TextContentService) { }

  ngOnInit(): void {
  }
  
}
