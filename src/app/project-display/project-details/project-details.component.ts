import { Component, OnInit, HostListener, Output , Input} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Project } from '../../services/achievement.service';


@Component({
    selector: 'project-details',
    templateUrl : './project-details.component.html',
    styleUrls : ['./project-details.component.css']
})
export class ProjectDetails {

@HostListener('click') clickProject() {
    this.state = this.isSelected ? "expanded" : "preview";
    this.isSelected = !this.isSelected;
}

@Input() project: Project;

    isSelected: boolean = true;
    state = "preview";

    projectName: string = "Test Project";
    description: string = "This is a test project"

    constructor(){ }

    ngOnInit(){ }

}