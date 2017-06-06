import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdInputContainer } from '@angular/material';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProDevComponent } from './pro-dev/pro-dev.component';

import { routing } from './app.routing';
import { AchManager } from './services/achievement.service';
import { ProCardComponent } from './pro-card/pro-card.component';
import { SkillComponent } from './skill/skill.component';
import { SkillContainerComponent } from './skill-container/skill-container.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    IntroComponentComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProDevComponent,
    ProCardComponent,
    SkillComponent,
    SkillContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule, 
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [ MdInputContainer, AchManager ],
  bootstrap: [AppComponent]
})
export class AppModule { }
