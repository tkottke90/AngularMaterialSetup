import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { MaterialModule, MdButtonModule, MdCheckboxModule, MdInputContainer } from '@angular/material';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    IntroComponentComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, 
    MaterialModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [ MdInputContainer ],
  bootstrap: [AppComponent]
})
export class AppModule { }