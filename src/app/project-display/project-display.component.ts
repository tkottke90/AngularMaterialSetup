import { Component, OnInit } from '@angular/core';

import { SkillDisplay } from '../services/skill-display.service';
import { Skill } from '../services/achievement.service';

@Component({
    selector: 'app-projectdisplay',
    templateUrl : './project-display.component.html',
    styleUrls : ['./project-display.component.css']
})
export class ProjectDisplay {

    subject: string = "";

    constructor(private SD: SkillDisplay){}

    ngOnInit(){

    }

}