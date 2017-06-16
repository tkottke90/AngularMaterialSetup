import { Component, OnInit, OnDestroy , Input, HostListener } from '@angular/core';
import { Skill, AchManager } from '../services/achievement.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  // Angular Core Features
  @Input() skill : Skill;

  @HostListener('mouseenter') MouseEnter(){
    this.isHoverTarget = this.isCategory ? true : false;
  }

  @HostListener('mouseleave') MouseLeave(){
    this.isHoverTarget = false;
  }

  // Component Variables
  isCategory: boolean;
  isHoverTarget: boolean = false;
  isDestroied: boolean = false;
  progressBar: boolean[] = [];
  time: string = "";

  // Constructor /  onInit
  constructor(private AM : AchManager) { }

  ngOnInit() {
    this.setProgress();
    this.isCategory = this.skill.domain.toString() == this.AM.rootSkill.toString();
  }

  ngOnDestroy(){
    this.isDestroied = true;
  }

  // Calculates the length of the progress bar and populates fields
  setProgress() { 
    let currentYears = new Date().getFullYear();
    let skillYears = this.skill.experienceYear.getFullYear();
    
    // Work Years - Total Years Working
    let workYears = currentYears - this.AM.user.userStart.getFullYear();
    // Exp - 
    let exp = currentYears - skillYears;

    /* Console Debug - Depreciated
      console.log(currentYears + " - " + skillYears + " = " + exp);
      console.log("workYears: " + workYears);
    */

    // Add progress bar length to boolean
    for(let i = 0; i < workYears; i++){
      this.progressBar.push(false);
    }

    // Populate progress bar by setting values to true in alignment with years experience
    
    // let pBarLength = this.progressBar.length; /* Depreciated Value - Leave for now 6/15 */

    for(let i = 0; i < exp; i++){
      this.progressBar[i] = true;
    }

    // Populate Time Value
    this.time = exp + " Years";
  }

}
