import { Injectable } from '@angular/core';
import { AngularFireDatabase ,  FirebaseListObservable } from 'angularfire2/database'

@Injectable()
export class UsageLog {

    logRoot: FirebaseListObservable<any[]>;

    constructor(private db : AngularFireDatabase){
        this.logRoot = db.list('/resume/log');
    }

    getTimestamp() : string {
        let now = new Date();        
        let timestamp = "" + now.getFullYear() 
                + now.getMonth()
                + now.getDay()
                + now.getHours()
                + now.getMinutes()
                + now.getSeconds()
                + now.getMilliseconds();
        return timestamp;
    }

    logEvent(event : string, data? : any){
        let time = this.getTimestamp();
        let record = this.db.object('/resume/log/' + time );

        let dat = data == undefined ? "No Additional Data" : data ;


        record.set({
            "event" : event,
            "additionalData" : dat
        });
    }
}
