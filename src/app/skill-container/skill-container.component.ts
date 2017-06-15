import { Component, OnInit } from '@angular/core';
import { Skill, AchManager, User } from '../services/achievement.service';
import { SkillDisplay } from '../services/skill-display.service';

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
  }

  ngOnInit() {

    this.skillCat = this.SD.getSkillChildren(this.SD.cSkillCategory.toString());
  } 

}
