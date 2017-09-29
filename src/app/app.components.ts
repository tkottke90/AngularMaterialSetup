import { Component1Component } from './component1/component1.component';
import { MainContainer } from './main-container/main-container.component';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProDevComponent } from './pro-dev/pro-dev.component';
import { DetailContainer } from './details-container/details-container.component';
import { ProCardComponent } from './pro-card/pro-card.component';
import { SkillComponent } from './skill/skill.component';
import { SkillContainerComponent } from './skill-container/skill-container.component';
import { ProjectDisplay } from './project-display/project-display.component';
import { ProjectDetails } from './project-display/project-details/project-details.component';
import { ProjectView } from './project-display/project-view/project-view.component';

export const Components = [
    Component1Component,
    MainContainer,
    IntroComponentComponent,
    // Main Screen Project Category Displays
    ProjectsComponent,
    ProjectCardComponent,
    // Professional Development 
    ProDevComponent,
    ProCardComponent,
    // Skills Display
    SkillComponent,
    SkillContainerComponent,
    // Container to display details for Projects and Achievements
    DetailContainer,
    // Project Display
    ProjectDisplay,
    ProjectDetails,
    ProjectView
];