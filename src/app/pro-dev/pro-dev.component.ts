import { Component } from '@angular/core';
import { AchManager, Achievement } from '../services/achievement.service';
import { DisplayInfo } from '../services/display-info.service';

@Component({
  selector: 'app-pro-dev',
  templateUrl: './pro-dev.component.html',
  styleUrls: ['./pro-dev.component.css']
})
export class ProDevComponent {

  currentAchievement: Achievement;
  achDisplay: boolean = false;
  achNav: number = 0;

  constructor(private AM: AchManager, private DI: DisplayInfo) {
    this.AM.isAchieveImport.subscribe({
      next: (a) => {
        this.AM.getRecent();
        this.achDisplay = a;
        if(a){ this.currentAchievement = this.AM.recList.length > 0 ? this.AM.recList[this.achNav] : undefined; }
      }
    });
  }

  viewAchive(){ this.DI.showDisplay("achivements"); }

}
