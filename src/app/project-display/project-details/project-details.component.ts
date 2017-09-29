import { Component, OnInit, HostListener, Output , Input} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { displayObject } from '../../services/display-info.service';
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

@Input() project: displayObject;

    isSelected: boolean = true;
    state = "preview";

    projectName: string = "Test Project";
    description: string = "This is a test project"

    constructor(){
        console.log(this.project);

        //this.projectName = this.project.name;
        //this.description = this.project.sDescription;
     }

    ngOnInit(){
        console.log(this.project); 
        
        let pj = this.project.project;

        this.projectName = pj.name;
        this.description = pj.sDescription;

    }

}