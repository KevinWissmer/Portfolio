import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit,HostListener } from '@angular/core';
import { UiService } from '../ui.service';
import { HttpClient } from '@angular/common/http';
import { TextContentService } from '../text-content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() status = '';
  @ViewChild('scrollMe') private myScrollContainer: any;

  directionStatus = "top";
  lastWidth = window.innerWidth;

  // true = bottom
  scrollTo(direction: string): void {
    if (direction == "bottom") {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) { }
    } else {
      this.myScrollContainer.nativeElement.scrollTop = 0;
    }
    this.directionStatus = direction;

  }

  windowWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 1001 && this.lastWidth > 1000){
      this.directionStatus = "top";
    }
    this.lastWidth = event.target.innerWidth;
  }


  contact_validation = {
    name: true,
    email: true,
    message: true,
  }

  messageSend: boolean = false;
  mailTest: boolean = false;

  contact = {
    name: '',
    email: '',
    message: '',
  };

  links: { name: string, link: string }[] = [{
    name: "LinkedIn",
    link: "https://de.linkedin.com/in/kevin-wi%C3%9Fmer-8b78721a9"
  }, {
    name: "GitHub",
    link: "https://github.com/KevinWissmer"
  }
  ]

  post = {
    endPoint: 'https://kevin-wissmer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private http: HttpClient, public uiService: UiService, public textService: TextContentService) { }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  onSubmit(ngForm: any) {
    this.updateValidation(ngForm);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            ngForm.resetForm()
            this.messageSend = true;
            this.timeOutSendMail();
          },
          error: (error) => {
            console.error(error);
          },

          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm()
      this.messageSend = true;
      this.timeOutSendMail();
    }
  }

  resetErrorLabels(){
    this.contact_validation = {
      name: true,
      email: true,
      message: true,
    }
  }

  timeOutSendMail() {
    setTimeout(() => {
      this.messageSend = false;
    }, 2500);
  };

  updateValidation(ngForm: any) {
    if (ngForm.form.controls.name.status == "INVALID") {
      this.contact_validation.name = false;
    } else { this.contact_validation.name = true; }
    if (ngForm.form.controls.email.status == "INVALID") {
      this.contact_validation.email = false;
    } else { this.contact_validation.email = true; }
    if (ngForm.form.controls.message.status == "INVALID") {
      this.contact_validation.message = false;
    } else { this.contact_validation.message = true; }
  }

}
