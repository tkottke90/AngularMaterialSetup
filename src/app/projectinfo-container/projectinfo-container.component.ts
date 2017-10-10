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
  curImg: string = "";
  images: string[];

  constructor(private _PIS : ProjectInfoService) {
    this._PIS.project.subscribe({
      next: (p) => {
        this.project = p
        if(this.project != null){
          this.images = this.project.images["Roll"];
          this.curImg = this.images[0];
        }
      }
    })
  }



}
