import { Component, OnInit } from '@angular/core';

import { SkillDisplay } from '../services/skill-display.service';
import { AchManager, Project } from '../services/achievement.service';
import { DisplayInfo, displayObject } from '../services/display-info.service';


@Component({
    selector: 'app-projectdisplay',
    templateUrl : './project-display.component.html',
    styleUrls : ['./project-display.component.css']
})
export class ProjectDisplay {

    subject: string = "";

    projects: displayObject[] = [];

    constructor(private _DI: DisplayInfo, private _AM: AchManager){}

    ngOnInit(){
        this._DI.displayData.subscribe({
            next: (n) => { this.projects = n; console.log(this.projects); }
        });
    }

}