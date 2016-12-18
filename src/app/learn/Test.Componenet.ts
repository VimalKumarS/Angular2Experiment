/**
 * Created by vimal on 11/24/2016.
 */
import { Component } from '@angular/core';
import {Tabs} from './tabs';
import {Tab} from './tab';
@Component({
    moduleId: module.id,
    selector: 'contentTab',
    templateUrl: 'tab.html'
    
})
export class TestComponet {
    name:string;
    constructor() {
       this.name="Angular2";
    }

}