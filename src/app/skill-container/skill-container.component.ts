import { Component, OnInit, OnChanges } from '@angular/core';
import { Skill, AchManager, User } from '../services/achievement.service';
import { SkillDisplay } from '../services/skill-display.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.css']
})
export class SkillContainerComponent implements OnInit {

  skillCat: Skill[] = []; 

  currentYear: number = new Date().getFullYear();
  // midYear: number; /* Depreciated */
  firstYear: number; 

  strYears: string[] = [];
  years: number[] = [];

  constructor(private AM: AchManager, private SD: SkillDisplay) { 
    console.log("userStart: " + this.AM.user.userStart);
    this.firstYear = this.AM.user.userStart.getFullYear();
    this.skillCat = this.SD.getSkillChildren(this.AM.rootSkill.toString());
  }

  ngOnInit() {
    this.SD.childList.subscribe({
      next: (s) => { this.skillCat = s; console.log(s) },
      error: (e) => console.error(e),
      complete: () => console.log(new Date() + " - Skills Updated")
    });
  } 

  ngOnChanges(changes){
    console.log(changes);
  }

}
