import { Component, Input } from '@angular/core';
import { Project } from '../../services/achievement.service';

@Component({
    selector: 'project-view',
    templateUrl: './project-view.component.html',
    styleUrls: ['./project-view.component.css']
})
export class ProjectView {

    @Input() project: Project; 

    constructor(){}
}