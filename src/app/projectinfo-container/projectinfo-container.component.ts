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
  curImg: number;
  images: string[];

  constructor(private _PIS : ProjectInfoService) {
    this._PIS.project.subscribe({
      next: (p) => {
        this.project = p
        console.log(this.project);
        if(this.project != null){
          this.images = this.project.images["Roll"];
          this.curImg = 0;
        }
      }
    })
  }


  Roll(direct){
    this.curImg += direct; 

    if(this.curImg == (this.images.length)){
      this.curImg = 0;
    } else if(this.curImg == -1){
      this.curImg = this.images.length - 1;
    }
  }

}
