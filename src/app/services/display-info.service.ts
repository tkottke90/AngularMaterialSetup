import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export enum info {
    projects,
    achivements
}

@Injectable()
export class DisplayInfo{
    
    

    activeDisplayWindow: BehaviorSubject<boolean> = new BehaviorSubject(false);
    projectsActive: boolean = false;

    constructor(){ }

    showDisplay( display: string ){ 

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
}
