import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }   from './app.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { UserCardComponent } from './users/user-card.component';
import { UserListComponent } from './users/user-list.component';
import { routing } from './app.routes';

import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';
import { TestComponet } from './learn/Test.Componenet';
import { Tabs } from './learn/tabs';
import { Tab } from './learn/tab';
import { ViewAppComponent,MyCustomDirective } from './learn/viewChildrenExample';

import { TodoAppMainComponent,FooterComponent,TodoAppComponent,TodoComponent,TodoInputComponent,TodoList } from './learn/todo';

import { SignupFormComponent } from './forms/templatedriven';
import { SignupFormComponent1} from './forms/reactiveform'

import {DynamicFormAppComponent } from './forms/nestedform/reactive/dynamic.component';
import {dynamicAddressComponent } from './forms/nestedform/reactive/address.component';
import {  templateFormAppComponent } from './forms/nestedform/templatedriven/dynamicformtemplate.component';
import {  dynamictemplateaddress } from './forms/nestedform/templatedriven/dynamictemplateaddress.component';
import { MissionService} from './forms/nestedform/templatedriven/CommunicationService';
import {AppDetection } from './changedetection/changedetectiononpushObservable'

import { OnChangesParentComponent,OnChangesComponent } from './changedetection/onChangeDetectionstragey'
import { poNotes} from './Notes/poNotes';


@NgModule({
    imports: [
        BrowserModule,
        DatepickerModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule,
        ModalModule,
        ProgressbarModule,
        PaginationModule,
        routing,
        TimepickerModule,ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        DateFormatPipe,
        HighlightDirective,
        HomeComponent,
        MobileHideDirective,
        ScheduleEditComponent,
        ScheduleListComponent,
        SlimLoadingBarComponent,
        UserCardComponent,
        UserListComponent,Tab,Tabs,TestComponet,ViewAppComponent,MyCustomDirective,
        TodoAppMainComponent,FooterComponent,TodoAppComponent,TodoComponent,TodoInputComponent,
        SignupFormComponent,SignupFormComponent1,dynamicAddressComponent,
        DynamicFormAppComponent,
        templateFormAppComponent,dynamictemplateaddress,
        AppDetection,
        OnChangesParentComponent,OnChangesComponent,
        poNotes
    ],
    providers: [
        ConfigService,
        DataService,
        ItemsService,
        MappingService,
        NotificationService,
        SlimLoadingBarService,TodoList,MissionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
