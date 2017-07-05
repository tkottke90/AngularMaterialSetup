import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Skill, AchManager, User } from '../services/achievement.service';
import { SkillDisplay } from '../services/skill-display.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.css'],
  animations: [
    trigger('FadeInOut',[
      transition('void => *',[
        style({ opacity: 0 }),
        animate('0.5s')
      ])
    ])
  ]
})
export class SkillContainerComponent implements OnInit {

  isRootSkill: boolean = false;
  hasMoreSkills: boolean = false;

  skillCat: Skill[] = []; 
  skillDisplay: Skill[] = [];
  topSkill: number = 0;

  title: string = "Skills";

  currentYear: number = new Date().getFullYear();
  firstYear: number; 

  // Depreciated Values
  // strYears: string[] = [];
  // years: number[] = [];

  constructor(private AM: AchManager, private SD: SkillDisplay) { 
    this.hasMoreSkills = false;
    this.firstYear = this.AM.user.userStart.getFullYear();
  }

  ngOnInit() {
    this.SD.childList.subscribe({
      next: (s) => { 
        this.skillCat = s;

        // Check # of Skills for Navigation
        this.skillDisplay = [];
        this.topSkill = 0;
        if(this.skillCat.length < 5){
          this.skillDisplay = this.skillCat;
          this.hasMoreSkills = false;
        }
        else {
          for(let i = 0; i < 4; i++){ this.skillDisplay.push(this.skillCat[i]); }
          this.hasMoreSkills = true;
        }

        // Check if Root Skill for Navigation
        this.isRootSkill = this.SD.cSkillCategory != this.AM.rootSkill;

        // If not root skill => update title
        if(this.isRootSkill){
          this.title = "Skills: " + this.SD.cSkillCategory.name;
        }
        else {
          this.title = "Skills";
        }

       },
       error: (e) => 
        {
          console.error(e); 
          /* Future Dev - Log Error */
        },
      complete: () => 
        {
          console.log(new Date() + " - Skill Update Subscription Completed");
          /* Future Dev - Log Completion */
        }
    });
  } 

  ngOnChanges(changes){
    console.log("Changes : " + changes);
  }


  returnRoot(){
    this.SD.updateSkill(this.AM.rootSkill);
  }

  /**
   * Updates the skills that are visible if there are more than 4 skills.
   */
  updateDisplay(direct: number){
    let bottom = this.topSkill + 4;

    switch(direct){
      case 0:  // Up
        if(this.topSkill != 0){
          this.topSkill--;
          this.skillDisplay = [];
          for(let i = 0; i < 4; i++){ this.skillDisplay.push(this.skillCat[this.topSkill + i]); }
        }
        break;
      case 1: // Down
        if(bottom < this.skillCat.length){
          this.topSkill++;
          this.skillDisplay = [];
          for(let i = 0; i < 4; i++){ this.skillDisplay.push(this.skillCat[this.topSkill + i]); }
        }
        break;
    }
  }
}
