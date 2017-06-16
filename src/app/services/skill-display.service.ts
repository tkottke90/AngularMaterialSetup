import { Injectable } from '@angular/core';
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
        this.cSkillCategory = AM.skillCategories[0];
        let test: Skill[] = this.getSkillChildren(this.AM.skillCategories[1].toString());
        console.log(test);
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
        
        //console.log(skillName);

        this.AM.skillList.forEach(skill => {
            //console.log(skill.name  + " - " + skill.domain.toString());
            if(skill.domain.toString() == skillName){
                skills.push(skill);
            }
        });

        return skills = skills.sort((s1, s2) => s1.experienceYear.getFullYear() - s2.experienceYear.getFullYear());
    }
}