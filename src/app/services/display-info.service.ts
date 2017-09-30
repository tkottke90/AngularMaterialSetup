import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AchManager, Project, Achievement, Skill } from './achievement.service';
import { UsageLog } from './site-log.service';

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
    
    displayData: BehaviorSubject<displayObject[]> = new BehaviorSubject<displayObject[]>([]);



    activeDisplayWindow: BehaviorSubject<boolean> = new BehaviorSubject(false);
    projectsActive: boolean = false;

    constructor(private AM: AchManager, private _log: UsageLog){ }

    showDisplay( display: string, skill?: Skill ){ 

        let d = info[display];
        switch(d){
            case 0:
                this.projectsActive = true;
                this.getSkillProjects(skill);
                break;
            case 1:
                this.projectsActive = false;
                break;
        }

        this.activeDisplayWindow.next(true); 
    
    }
    
    hideDisplay(){ this.activeDisplayWindow.next(false); }

    getSkillProjects(skill: Skill){
        let newProjects: displayObject[] = [];

        if(skill.domain.toString() == this.AM.rootSkill.toString()){
            let childSkills: Skill[] = [];
            childSkills.push(skill);

            this.AM.skillList.forEach((cskill) => {

                if(cskill.domain.toString() == skill.toString()){
                    childSkills.push(cskill);
                }
            });

            this.AM.projects.forEach((project) => {
                if(project.usesSkills(childSkills)) { newProjects.push(new displayObject(project)); }
            });

        }
        else {
            
            let skillMut = [ skill ];

            this.AM.projects.forEach((project) => {
                if(project.usesSkills(skillMut)) { newProjects.push(new displayObject(project)); }
            });

        }
        try{
            console.log(newProjects);
            this.displayData.next(newProjects);
        }
        catch(e){ this._log.logEvent }
    }   
}


export class displayObject {
    project: Project;

    isSelected: boolean;

    constructor(pro: Project){
        this.project = pro;
        this.isSelected = false;
    }
}