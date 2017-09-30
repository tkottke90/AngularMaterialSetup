import { Component, OnInit, HostListener, Output , Input} from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DisplayInfo, displayObject } from '../../services/display-info.service';
import { ProjectInfoService } from '../../projectinfo-container/pinfo.service';
import { Project } from '../../services/achievement.service';


@Component({
    selector: 'project-details',
    templateUrl : './project-details.component.html',
    styleUrls : ['./project-details.component.css']
})
export class ProjectDetails {

@HostListener('click') clickProject() {
    this._PIS.project.next(this.project.project);
    this._display.hideDisplay();
    this._router.navigateByUrl('/projects');
}

@Input() project: displayObject;

    isSelected: boolean = true;
    state = "preview";

    projectName: string = "Test Project";
    description: string = "This is a test project"

    constructor(
        private _PIS: ProjectInfoService, 
        private _router: Router, 
        private _display: DisplayInfo
    ){}

    ngOnInit(){
        console.log(this.project); 
        
        let pj = this.project.project;

        this.projectName = pj.name;
        this.description = pj.sDescription;

    }

}