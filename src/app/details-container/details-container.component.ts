import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DisplayInfo, displayObject } from '../services/display-info.service';

@Component({
    selector: 'app-details',
    templateUrl: './details-container.component.html',
    styleUrls: [ './details-container.component.css' ],
    animations: [
        trigger('detailsState', [
            state('inactive', 
                style({
                    transition: 'opacity'
                })
            )
        ])
    ]
})
export class DetailContainer {

    projectDisplay: boolean = true;
    achieveDisplay: boolean = true;

    projectList: displayObject[];

    constructor(private DI: DisplayInfo){ }

    ngOnInit(){
        this.DI.activeDisplayWindow.subscribe({
            next: (b) => {
                this.projectDisplay = this.DI.projectsActive;
                this.achieveDisplay = !this.projectDisplay;
            }
        });
    }

    closeDisplay(){
        this.DI.hideDisplay();
    }

}