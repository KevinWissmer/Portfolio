import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  constructor(public uiService: UiService, public textService: TextContentService) { }

  ngOnInit(): void {
  }


}
