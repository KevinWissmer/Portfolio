import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PortfolioWrapperComponent } from './portfolio-wrapper/portfolio-wrapper.component';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    PortfolioWrapperComponent,
    ContactComponent,
    StartComponent,
    SkillsComponent,
    ProjectsComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
