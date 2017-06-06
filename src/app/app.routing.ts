import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component'

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'all' },
    { path: 'projects' , component: ProjectsComponent }
];

export const routing = RouterModule.forRoot(appRoutes);