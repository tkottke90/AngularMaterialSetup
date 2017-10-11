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
        if(this.project != null){
          this.images = this.project.images["Roll"];
          this.curImg = 0;
        
          let temp = {
            'ImagesLength' : (this.images.length - 1),
            'CurImg' : this.curImg,
            'ImageURL' : this.images[this.curImg]
          }
        
          console.log(temp);
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
