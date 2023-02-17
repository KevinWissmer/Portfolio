import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  type:string ='imprint';

  constructor(public uiService: UiService, public textService: TextContentService) { }

  ngOnInit(): void {
  }

  changeContent(type:string){
    this.type = type;
  }

}


