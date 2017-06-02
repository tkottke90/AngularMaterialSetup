import { Component, OnInit } from '@angular/core';
import { AchManager, Achievement } from '../services/achievement.service';

@Component({
  selector: 'app-pro-dev',
  templateUrl: './pro-dev.component.html',
  styleUrls: ['./pro-dev.component.css'],
  providers: [ AchManager ]
})
export class ProDevComponent implements OnInit {

  currentAchievement: Achievement;
  achNav: number = 0;

  constructor(private AM: AchManager) { }

  ngOnInit() {
    this.AM.getRecent();
    
    this.currentAchievement = this.AM.recList.length > 0 ? this.AM.recList[this.achNav] : undefined;
    

  }

}
