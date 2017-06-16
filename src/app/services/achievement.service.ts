import { Injectable } from '@angular/core';

/**
 * Designed to manage the data in the Professional Development section of the page.  Storing the data here
 * allows for it to be pulled from multiple locations and supports a input point for a potential backend 
 * infastructure later.  
 */
@Injectable()
export class AchManager {
// Base Node Data
    rootSkill = new Skill("_root", "N/A", new Date (2007, 1), null)

// User Data
    user = new User("tdkottke", new Date(2007,1));
    
// Lists
    // List of Achievements
    achList = [
        new Achievement("Programing Foundations: Data Structures","Lynda.com",new Date(2017,1), "../../../assets/DS Certificate.JPG","https://www.lynda.com/ViewCertificate/A13100FB68264EBB8EEF8C076AB3B2FE?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"),
        new Achievement("Learning AngularJS 2", "Lynda.com",new Date(2017,4),"../../../assets/AngularJS2 Certificate.JPG","https://www.lynda.com/Angular-tutorials/Learning-AngularJS-2/572160-2.html"),
        new Achievement("Angular 2 Essential Training", "Lynda.com", new Date(2017,5),"../../../assets/Angular2 Essential Certificate.JPG","https://www.lynda.com/AngularJS-tutorials/Angular-2-Essential-Training/540347-2.html")
    ]

    // List of Recent Achievemets - Populated by getRecent()
    recList = [];

    // List of Skill Categories
    skillCategories = [
        new Skill ("Theater", "Intermediate", new Date(2007,1), this.rootSkill),
        new Skill ("Web Development", "Novice", new Date(2016,1), this.rootSkill),
        new Skill ("Software Engineering", "Novice", new Date(2010,1), this.rootSkill),
        new Skill ("Drafting", "Intermediate", new Date(2008,1), this.rootSkill),
        new Skill ("Zymology","Intermediate",new Date(),this.rootSkill)
    ];

    // List of Skills
    skillList = [
        new Skill("Theater", "Intermediate", new Date(2007,1), this.rootSkill),
        new Skill("Web Development", "Novice", new Date(2016,1), this.rootSkill),
        new Skill("Drafting", "Intermediate", new Date(2008,1), this.rootSkill),
        new Skill("Zymology/Oenology","Intermediate",new Date(2015,3),this.rootSkill),
        new Skill("Sound Design/Engineering", "Intermediate",new Date(2007,1), this.skillCategories[0]),
        new Skill("Set Design/Engineering","Novice",new Date(2010,1), this.skillCategories[0]),
        new Skill("Light Design/Engineering","Novice",new Date(2010,1), this.skillCategories[0]),
        new Skill("HTML", "Novice", new Date(2016,1), this.skillCategories[1]),
        new Skill("CSS", "Novice", new Date(2016,1),this.skillCategories[1]),
        new Skill("Typescript", "Novice", new Date(2016,1),this.skillCategories[1]),
        new Skill("Angular2", "Novice", new Date(2016,1),this.skillCategories[1]),
        new Skill("Java", "Intermediate", new Date(2010,1),this.skillCategories[2]),
        new Skill("Hand Drafting", "Intermediate", new Date(2010,1),this.skillCategories[3]),
        new Skill("CAD Drafting", "Intermediate", new Date(2010,1),this.skillCategories[3]),
        new Skill("Beer Brewing", "Intermediate", new Date(2015,1),this.skillCategories[4]),
        new Skill("Wine Making", "Intermediate", new Date(2016,1),this.skillCategories[4]),
        new Skill("Vineyard Care", "Intermediate", new Date(2012,1),this.skillCategories[4]),
        new Skill("Yeast Propigation", "Intermediate", new Date(2016,1),this.skillCategories[4]),
    ];

    /**
     * getRecent() populates the recList[] with achievements earned within the last 30 days and 
     * displays them in the recent card in the Professional Development section of the page
     */
    getRecent(){

        let today = new Date();
        let thirtyDays = new Date(today.getTime() - 30*24*60*60*1000);

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

    

    toString(){
        return this.name;
    }
}