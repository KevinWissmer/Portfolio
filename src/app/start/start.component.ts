import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(public uiService: UiService, public textService: TextContentService) { }

  ngOnInit(): void {

  }

}
