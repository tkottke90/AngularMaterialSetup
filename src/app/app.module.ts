import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdInputContainer } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'hammerjs';

import { Components } from './app.components'

import { AppComponent } from './app.component';
// import { Component1Component } from './component1/component1.component';
// import { IntroComponentComponent } from './intro-component/intro-component.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ProjectCardComponent } from './project-card/project-card.component';
// import { ProDevComponent } from './pro-dev/pro-dev.component';
// import { DetailContainer } from './details-container/details-container.component';
// import { ProCardComponent } from './pro-card/pro-card.component';
// import { SkillComponent } from './skill/skill.component';
// import { SkillContainerComponent } from './skill-container/skill-container.component';
// import { ProjectDisplay } from './project-display/project-display.component';
// import { ProjectDetails } from './project-display/project-details/project-details.component'


import { routing } from './app.routing';

import { AchManager } from './services/achievement.service';
import { SkillDisplay } from './services/skill-display.service';
import { DisplayInfo } from './services/display-info.service';
import { UsageLog } from './services/site-log.service';




@NgModule({
  declarations: [
    AppComponent,
    Components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAx57heQSfOPNg9FsQSemxYEAHPZylhNJs",
      authDomain: "my-test-project-5984d.firebaseapp.com",
      databaseURL: "https://my-test-project-5984d.firebaseio.com",
      storageBucket: "my-test-project-5984d.appspot.com",
      messagingSenderId: "764507748270"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    BrowserAnimationsModule, 
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [ MdInputContainer, AchManager, SkillDisplay, DisplayInfo, UsageLog ],
  bootstrap: [AppComponent]
})
export class AppModule { }
