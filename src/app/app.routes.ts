import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { TestComponet } from './learn/Test.Componenet';
import { ViewAppComponent } from './learn/viewChildrenExample';
import { TodoAppMainComponent } from './learn/todo';

import { SignupFormComponent } from './forms/templatedriven';
import { SignupFormComponent1} from './forms/reactiveform'

import {DynamicFormAppComponent } from './forms/nestedform/reactive/dynamic.component';

import {  templateFormAppComponent } from './forms/nestedform/templatedriven/dynamicformtemplate.component';

import {AppDetection } from './changedetection/changedetectiononpushObservable'

import { OnChangesParentComponent } from './changedetection/onChangeDetectionstragey'

import { poNotes} from './Notes/poNotes';

const appRoutes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'schedules', component: ScheduleListComponent },
    { path: 'schedules/:id/edit', component: ScheduleEditComponent },
    { path: '', component: HomeComponent },
    {path:'test', component:TestComponet},
    {path:'todo', component:TodoAppMainComponent},
     {path:'templateform', component:SignupFormComponent},
 {path:'modelform', component:SignupFormComponent1},
 {path:'DynamicFormAppComponent',component:DynamicFormAppComponent},
 {path:'templateFormAppComponent',component:templateFormAppComponent},
 {path:'ChangedetectionObservable',component:AppDetection},
 {path:'OnChangesParentComponent',component:OnChangesParentComponent},
 {path:'poNotes',component:poNotes},
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);