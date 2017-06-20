import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DisplayInfo{

    displayStatus: boolean;
    activeDisplayWindow: Subject<boolean> = new Subject();

    constructor(){
        this.activeDisplayWindow.next(true);
    }

    showDisplay(){ this.activeDisplayWindow.next(true); }
    hideDisplay(){ this.activeDisplayWindow.next(false); }
}
