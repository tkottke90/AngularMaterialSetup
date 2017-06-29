import { Injectable, OnInit } from '@angular/core';
import { Skill, AchManager } from '../services/achievement.service';
import { Subject } from 'rxjs/Subject';

/**
 * Injectable class designed to manage which skills will be displayed based on user selections
 */
@Injectable()
export class SkillDisplay {

    cSkillCategory: Skill = null;
    children: Skill[] = [];



    childList = new Subject<Skill[]>(); 

    constructor(private AM: AchManager){
        this.cSkillCategory = AM.rootSkill;
        // let test: Skill[] = this.getSkillChildren(this.AM.rootSkill.toString());
        // console.log(test);
        // this.childList.next(test);

        this.AM.isSkillImport.subscribe({
            next: (n) => {
                if(n){ this.updateSkill(this.AM.rootSkill) }
                else { this.childList.next(new Array<Skill>()); this.cSkillCategory = null; }
            }
        });
    }

    ngOnInit(){
        let test: Skill[] = this.AM.skillCategories; //this.getSkillChildren(this.AM.rootSkill.toString());
        this.childList.next(test);
    }

    updateSkill(skill: Skill){
        this.cSkillCategory = skill;
        let test: Skill[] = this.getSkillChildren(this.cSkillCategory.toString());
        this.childList.next(test);
    }

    /**
     * Method Pulls List of Children Skills from cSkillCategory
     */
    getSkillChildren(skillName: string): Skill[]{
        let skills: Skill[] = []

        let testNum = this.AM.skillList.length;
        let testCount = 0;
        
        this.AM.skillList.forEach((skill) => {
            let testBool = skill.domain.toString() == skillName; 
                if(testBool){
                    skills.push(skill);
                }
            testCount++;
        });
        
        return skills = skills.sort((s1, s2) => s1.experienceYear.getFullYear() - s2.experienceYear.getFullYear());
    }
}