import { Component, OnInit } from '@angular/core';
import { Skill, AchManager, User } from '../services/achievement.service';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.css']
})
export class SkillContainerComponent implements OnInit {

  

  currentYear: number = new Date().getFullYear();
  midYear: number;
  firstYear: number;

  strYears: string[] = [];
  years: number[] = [];

  constructor(private AM: AchManager) { 
    console.log("userStart: " + this.AM.user.userStart);
    this.firstYear = this.AM.user.userStart.getFullYear();
  }

  ngOnInit() {

    for(let i: number = (this.firstYear + 1); i < this.currentYear; i++){
      this.years.push(this.firstYear + i);
    }

    this.midYear = this.currentYear - this.years.length;

    console.log(this.firstYear);
    console.log(this.currentYear);
    console.log(this.years);

  } 

}
