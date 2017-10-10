import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { UsageLog } from './site-log.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase';

/**
 * Designed to manage the data in the Professional Development section of the page.  Storing the data here
 * allows for it to be pulled from multiple locations and supports a input point for a potential backend 
 * infastructure later.  
 */
@Injectable()
export class AchManager {
// Base Node Data
    rootDirectory: FirebaseListObservable<any[]>;
    rootSkill = new Skill("_root", "N/A", new Date (2007, 1), null)

// Database Status
    isSkillImport = new BehaviorSubject<boolean>(false);
    isProjectImport = new BehaviorSubject<boolean>(false);
    isAchieveImport = new BehaviorSubject<boolean>(false);

// User Data
    user = new User("tdkottke", new Date(2007,1));
    
// Lists
    // List of Achievements
    achList = [
        // new Achievement("Programing Foundations: Data Structures","Lynda.com",new Date(2017,1), "https://firebasestorage.googleapis.com/v0/b/my-test-project-5984d.appspot.com/o/Resume%2FDS%20Certificate.JPG?alt=media&token=3ed05c69-91e9-4989-aab4-7db923db5f2b","https://www.lynda.com/ViewCertificate/A13100FB68264EBB8EEF8C076AB3B2FE?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"),
        // new Achievement("Learning AngularJS 2", "Lynda.com",new Date(2017,4),"https://firebasestorage.googleapis.com/v0/b/my-test-project-5984d.appspot.com/o/Resume%2FAngularJS2%20Certificate.JPG?alt=media&token=7bfaea74-a287-4b83-8409-3d752a03fbb9","https://www.lynda.com/Angular-tutorials/Learning-AngularJS-2/572160-2.html"),
        // new Achievement("Angular 2 Essential Training", "Lynda.com", new Date(2017,5),"https://firebasestorage.googleapis.com/v0/b/my-test-project-5984d.appspot.com/o/Resume%2FAngular2%20Essential%20Certificate.JPG?alt=media&token=dc08aa13-faea-4942-b9a8-0daea12799d7","https://www.lynda.com/AngularJS-tutorials/Angular-2-Essential-Training/540347-2.html")
    ]

    // List of Recent Achievemets - Populated by getRecent()
    recList = [];

    // List of Skill Categories
    skillCategories = [
        new Skill ("Theater", "Intermediate", new Date(2007,1), this.rootSkill),
        new Skill ("Web Development", "Novice", new Date(2016,1), this.rootSkill),
        new Skill ("Software Engineering", "Novice", new Date(2010,1), this.rootSkill),
        new Skill ("Drafting", "Intermediate", new Date(2008,1), this.rootSkill),
        new Skill ("Zymology/Oenology","Intermediate",new Date(2015,3),this.rootSkill)
    ];

    // List of Skills
    skillList = [
        // new Skill("Theater", "Intermediate", new Date(2007,1), this.rootSkill),
        // new Skill("Web Development", "Novice", new Date(2016,1), this.rootSkill),
        // new Skill("Drafting", "Intermediate", new Date(2008,1), this.rootSkill),
        // new Skill("Zymology/Oenology","Intermediate",new Date(2015,3),this.rootSkill),
        // new Skill("Sound Design/Engineering", "Intermediate",new Date(2007,1), this.skillCategories[0]),
        // new Skill("Set Design/Engineering","Novice",new Date(2010,1), this.skillCategories[0]),
        // new Skill("Light Design/Engineering","Novice",new Date(2010,1), this.skillCategories[0]),
        // new Skill("HTML", "Novice", new Date(2016,1), this.skillCategories[1]),
        // new Skill("CSS", "Novice", new Date(2016,1),this.skillCategories[1]),
        // new Skill("Typescript", "Novice", new Date(2016,1),this.skillCategories[1]),
        // new Skill("Angular2", "Novice", new Date(2016,1),this.skillCategories[1]),
        // new Skill("Java", "Intermediate", new Date(2010,1),this.skillCategories[2]),
        // new Skill("Hand Drafting", "Intermediate", new Date(2010,1),this.skillCategories[3]),
        // new Skill("CAD Drafting", "Intermediate", new Date(2010,1),this.skillCategories[3]),
         // new Skill("Beer Brewing1", "Intermediate", new Date(2015,1),this.skillCategories[4]),
         // new Skill("Wine Making1", "Intermediate", new Date(2016,1),this.skillCategories[4]),
         // new Skill("Vineyard Care1", "Intermediate", new Date(2012,1),this.skillCategories[4]),
         // new Skill("Yeast Propigation1", "Intermediate", new Date(2016,1),this.skillCategories[4]),
     ];

    // List of Projects
    projects = [
        new Project(
            this,
            "Personal Portfolio",
            "WIP",
            "This is project I created to display my work in a digital format as well as explore web design using the Angular Framework and Firebase",
            [
                ["HTML", 7],
                ["CSS", 8],
                ["Typescript", 9],
                ["Angular2", 10]
            ],
            {
                "git-repository" : "https://github.com/tkottke90/AngularMaterialSetup"
            },
            { },
            {
                "Concept" : "",
                "Front Page" : "",
                "Project View" : "",
                "Roll" : [
                    "https://firebasestorage.googleapis.com/v0/b/op-7f877.appspot.com/o/portfolio%2FDesign%2001.JPG?alt=media&token=f8b43118-0923-4abb-80e8-d29493edbd73",
                    "https://firebasestorage.googleapis.com/v0/b/op-7f877.appspot.com/o/portfolio%2FDesign%2002.JPG?alt=media&token=3aee0765-bff2-4dfc-a81d-77a133c4c040"
                ]
            }
        )
     ]

// Methods

    constructor(private db: AngularFireDatabase, private UL: UsageLog){
        this.rootDirectory = db.list('/resume');
        let achieve = db.list('/resume/achievements');
        let skills = db.list('/resume/skills', {preserveSnapshot : true});
        let projects = db.list('/resume/projects');

        // Import Lists

        skills.$ref.once('value').then((skill) => {
            skill.forEach((childskill) =>{
                let data = childskill.val();

                let skillDomIndex = this.skillCategories.findIndex((skillCat) => skillCat.name == data.domain );
                let skillDom = skillDomIndex >= 0 ? this.skillCategories[skillDomIndex] : this.rootSkill;

                this.skillList.push(new Skill(
                    data.name,
                    data.level,
                    new Date(data.startYear,1),
                    skillDom
                ));

        
            })
        }).then( () => { /*console.log("AchManager - Skills Imported");*/ this.isSkillImport.next(true); 
            
            /* Future Dev - Pull Data from Database */

            this.projects.forEach((project) => { project.getSkills(); });
        });


        achieve.$ref.once('value').then((achievement) => {
            achievement.forEach((childAchive) => {
                let data = childAchive.val();

                this.achList.push(new Achievement(
                    data.name,
                    data.source,
                    new Date(data.date.year, data.date.month,data.date.day),
                    data.imageURL,
                    data.url
                ));
            });
        }).then(() => { 
            this.isAchieveImport.next(true); 
        });
        
        // Code to push lists to Firebase
        // this.achList.forEach((a) => {
        //     achieve.push(a.export());
        // })

    }


    util() {
        
        // Code to push lists to Firebase
            // this.achList.forEach((skill) => {
            //     achieve.push(skill.export());
            // })
        
        // Upload Images to Firebase Storage
            // let uploadTask: firebase.storage.UploadTask;
            // const storageRef = firebase.storage().ref();

            // let files: File[];
            // let f = new File(["img"], this.imgList[1]);

            // uploadTask = storageRef.child('/uploads/' + f.name).put(f)

            // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
            //     (snapshot) => {
            //         console.log("Upload Progress: " + ((snapshot.bytesTransferrd / snapshot.totalBytes) * 100) + "%");
            //     },
            //     (error) => {console.log("Error:" + error)},
            //     () => {
            //         console.log("Upload Successfull!");
            //     }
            // );
    }

    /**
     * getRecent() populates the recList[] with achievements earned within the last 30 days and 
     * displays them in the recent card in the Professional Development section of the page
     */
    getRecent(){

        let today = new Date();
        let thirtyDays = new Date(today.getTime() - 365*24*60*60*1000);

        this.recList = [];

        this.achList.forEach(Achievement => {            
            if(Achievement.date > thirtyDays && this.recList.length < 3){
                this.recList.push(Achievement);
            }
        });

        
    }

}

/**
 * User Object that stores information about the user.  Designed with a dynamic back end in mind
 */
export class User {
    userID: string = "";
    userStart: Date = new Date();

    constructor(id: string, startDate: Date){
        this.userStart = startDate;
    }
}


/**
 * 
 */
export class Achievement {

    name: string = "";
    source: string = "";
    date: Date = new Date();

    imageURL: string = "";

    url: string = "";

    constructor(newName: string, newSource: string, dateAchieve: Date, achImage: string, achURL: string){
        this.name = newName;
        this.source = newSource;
        this.date = dateAchieve;
        this.imageURL = achImage;
        this.url = achURL;
    }

    export(){
        return {
            "name"  : this.name,
            "source" : this.source,
            "date" : this.date,
            "imageURL" : this.imageURL,
            "url" : this.url,

        }
    }

    toString(){
        return this.name;
    }
}

export class SkillCategory {

    name: string;
    exp: Date;

    constructor(name: string, yearsExperience: Date){
        this.name = name;
        this.exp = yearsExperience;
    }

}

export class Skill {

    name: string = "";
    level: string = "";

    experienceYear: Date;
    

    domain: Skill;

    constructor(newName: string, lev: string, yearStarted: Date, dom: Skill){
        this.name = newName;
        this.level = lev;
        this.experienceYear = yearStarted;
        this.domain = dom;
    }


    export(){
        return {
            "name" : this.name,
            "startYear" : this.experienceYear.getFullYear(),
            "level" : this.level,
            "domain" : this.domain.name
        }
    }

    toString(){
        return this.name;
    }
}

export class Project {
    
    name: string;
    description: string;
    status: string; 
    thumbnail: string; // URL for project thumbnail

    sDescription: string; // Short Description for preview

    links;
    downloads;
    images;

    projectSkills: any;
    skills: Skill[] = [];

    constructor(private _AM: AchManager, name: string, stat: string, desciption: string, skill: any, links, download, images){
        this.name = name;
        this.status = stat;
        this.description = desciption;
        this.sDescription = desciption;
        this.links = links;
        this.downloads = download;
        this.images = images;
        this.projectSkills = skill;       
    }

    getSkills(){
        this.projectSkills.forEach((element) => {
            let name = element[0];
            let data = element[1];

            this.skills.push(this._AM.skillList[data]);
        });

    }

    /**
     * Checks to see if project uses skills 
     * 
     * Designed to be used with displaying projects associated with specific skills
     * @param s Array of Skill Objects
     * @returns True if any of the parameters 
     */
    usesSkills(s?: Skill[]): boolean {
        let uSkill: boolean = false;
        
        s.forEach((sk) => {
            
            this.skills.forEach((askill) => {
                if(askill == sk){ uSkill = true; }
            });


            // if(this.skills.includes(sk)){ return true; } <- Not Usable with Array parameter, as the program is attempting to match the whole array object, rather than each object in the array
        });

        return uSkill;
    }

    export(){
        let output = {
            "name" : this.name,
            "status": this.status,
            "description" : this.description,
            "links" :  this.links,
            "downloads" : this.downloads,
            "skill": this.projectSkills.name,

        }
    }
}