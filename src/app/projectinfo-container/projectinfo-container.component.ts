import { Component } from '@angular/core';
import { ProjectInfoService } from './pinfo.service'
import { Project } from '../services/achievement.service';

@Component({
  selector: 'app-projectinfo-container',
  templateUrl: './projectinfo-container.component.html',
  styleUrls: ['./projectinfo-container.component.css']
})
export class ProjectInfoContainerComponent {

  project: Project = null;

  constructor(private _PIS : ProjectInfoService) {
    this._PIS.project.subscribe()
  }



}
