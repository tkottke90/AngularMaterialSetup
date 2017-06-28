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
        this.cSkillCategory = AM.skillCategories[0];
        console.log(this.AM.skillList);
        console.log(this.AM.skillList.length);
        let test: Skill[] = this.getSkillChildren(this.AM.rootSkill.toString());
        console.log(test);
        this.childList.next(test);
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
        console.log("Pre Try");
        console.log("getSkillChildren - " + skillName 
                    + "\r\n   SkillList Length: " + this.AM.skillList.length 
                    + "\r\n   ");

        try{
            this.AM.skillList.forEach((skill) => {
                console.log(testCount + ") skillList Query: ");
                console.log("   Skill Name: " + skill.name);
                console.log("   Skill Domain: " + skill.domain.toString());
                let testBool = skill.domain.toString() == skillName; 
                console.log("   Domain Match: " + testBool);
                    if(testBool){
                        skills.push(skill);
                    }
                testCount++;
            });

        }catch(e){
            console.log("Catch Block");
            console.error("Catch: " + e);
        }
        console.log("Post Try");
        return skills = skills.sort((s1, s2) => s1.experienceYear.getFullYear() - s2.experienceYear.getFullYear());
    }
}