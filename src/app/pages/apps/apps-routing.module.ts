import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuotesComponent } from './quotes/quotes.component';
import { UsersComponent } from './users/users.component';
import { NewprojectComponent } from './newproject/newproject.component';

const routes: Routes = [
    {
        path: 'apps-calendar',
        component: CalendarComponent
    },
    {
        path: 'newproject',
        component: NewprojectComponent
    },
    {
        path: 'quotes',
        component: QuotesComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
