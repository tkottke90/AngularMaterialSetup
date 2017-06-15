import { Injectable } from '@angular/core';
import { Skill, AchManager } from '../services/achievement.service';

/**
 * Injectable class designed to manage which skills will be displayed based on user selections
 */
@Injectable()
export class SkillDisplay {

    cSkillCategory: Skill = null;
    children: Skill[] = []

    constructor(private AM: AchManager){
        this.cSkillCategory = AM.skillCategories[1];
    }

    updateSkill(skill: Skill){
        this.cSkillCategory = skill;
        this.children = this.getSkillChildren(skill.toString());
    }

    /**
     * Method Pulls List of Children Skills from cSkillCategory
     */
    getSkillChildren(skillName: string): Skill[]{
        let skills: Skill[] = []
        
        console.log(skillName);

        this.AM.skillList.forEach(skill => {
            console.log(skill.name  + " - " + skill.domain.toString());
            if(skill.domain.toString() == skillName){
                skills.push(skill);
            }
        });

        return skills = skills.sort((s1, s2) => s1.experienceYear.getFullYear() - s2.experienceYear.getFullYear());
    }
}