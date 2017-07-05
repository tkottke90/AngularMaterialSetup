import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AchManager, Project, Achievement, Skill } from './achievement.service';

export enum info {
    projects,
    achivements
}

/**
 * Service is designed to be used with and to support the Details-Container-Component and its children in the following ways:
 * 
 * 1) Display project, or achievements based on user selection
 * 2) Manage what project and achievements are in view
 */
@Injectable()
export class DisplayInfo{
    
    displayData: displayObject[] = [];



    activeDisplayWindow: BehaviorSubject<boolean> = new BehaviorSubject(false);
    projectsActive: boolean = false;

    constructor(private AM: AchManager){ }

    showDisplay( display: string, skill?: Skill ){ 

        let d = info[display];
        switch(d){
            case 0:
                this.projectsActive = true;
                break;
            case 1:
                this.projectsActive = false;
                break;
        }

        this.activeDisplayWindow.next(true); 
    
    }
    hideDisplay(){ this.activeDisplayWindow.next(false); }

    getSkillProjects(skill: Skill){
        this.displayData = [];

        if(skill.domain.toString() == this.AM.rootSkill.toString()){
            let childSkills: Skill[] = [];
            childSkills.push(skill);

            this.AM.skillList.forEach((cskill) => {
                if(cskill.domain.toString() == skill.toString()){
                    childSkills.push(cskill);
                }
            });

            this.AM.projects.forEach((project) => {
                if(project.usesSkills(childSkills)) { this.displayData.push(new displayObject(project)); }
            });

        }
        else {
            
            let skillMut = [ skill ];

            this.AM.projects.forEach((project) => {
                if(project.usesSkills(skillMut)) { this.displayData.push(new displayObject(project)); }
            });

        }
    }
}


class displayObject {
    project: Project;
    achive: Achievement;

    isSelected: boolean;

    constructor(pro?: Project, ach?: Achievement){
        this.project = pro;
        this.achive = ach;

        this.isSelected = false;
    }
}