import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Skill, AchManager } from '../services/achievement.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill : Skill;

  progressBar: boolean[] = [];

  constructor(private AM : AchManager) { }

  ngOnInit() {
    this.setProgress();
    
  }

  setProgress() { 
    let currentYears = new Date().getFullYear();
    let skillYears = this.skill.experienceYear.getFullYear();
    
    let workYears = currentYears - this.AM.user.userStart.getFullYear();
    let exp = currentYears - skillYears;

    console.log(currentYears + " - " + skillYears + " = " + exp);
    console.log("workYears: " + workYears);

    // Add progress bar length to boolean
    for(let i = 0; i < workYears; i++){
      this.progressBar.push(false);
    }

    // Populate progress bar
    for(let i = 0; i < exp; i++){
      
    }



  }

}
