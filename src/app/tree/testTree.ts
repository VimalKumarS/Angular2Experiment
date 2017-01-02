import { Input, Component, OnInit, EventEmitter, Output, ElementRef, Inject } from '@angular/core';
import {TreeModel} from "./treecomponent";
@Component({
  selector: 'treenodetest',
  // 2 - set [tree] attribute to tree object
  template: `<tree-internal [tree]="tree"></tree-internal>`
})
export class treenodes {
  // 3 - make sure tree object confirms to TreeModel interface
  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };
}