import {Component, OnChanges, DoCheck, enableProdMode ,Input, ChangeDetectionStrategy, Output, EventEmitter, AfterViewChecked} from '@angular/core';




export class Owner {
    constructor(public firstname:string, public lastname:string) {

    }
}


let testData = [
    new Todo(1, "TODO 1", false, new Owner("John", "Doe")),
    new Todo(1, "TODO 2", false, new Owner("John", "Doe")),
    new Todo(1, "TODO 3", false, new Owner("John", "Doe"))
];

export const todos = testData;

@Component({
    selector: 'app',
    
    template: `<div>
                    <todo-list [todos]="todos" (addTodo)="onAdd()" [callback]="callback"></todo-list>
               </div>
               <div>{{message}}</div>
               <button (click)="toggleFirst()">Toggle First Item</button>
               <button (click)="addTodo()">Add Todo to List</button>`
})
export class AppTodoChangeDetection {

    todos:Array<Todo> = testData;
    message: string;
    callback:Function = (message) => {
        console.log("setting message...");
        this.message = message;
    };

    constructor() {

    }

    toggleFirst() {
        this.todos[0].completed = ! this.todos[0].completed;
    }

    addTodo() {
        let newTodos = this.todos.slice(0);
        newTodos.push( new Todo(1, "TODO 4", false, new Owner("John", "Doe")));
        this.todos = newTodos;
    }

    onAdd() {
        this.message = "Adding Todo ...";
        this.addTodo();
    }

}


export class Todo {

    constructor(public id: number, public description: string, private _completed: boolean, public owner: Owner) {

    }

    get completed() {
        if (this.id == 1 && this._completed) {
            // uncomment to see the change detector on the dev tools
            //debugger;
        }
        return this._completed;
    }

    set completed(completed) {
        this._completed = completed;
    }

}


@Component({
    selector: 'todo-list',
    // uncomment to switch to on-push mode
    //changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<ul>
                    <li *ngFor="#todo of todos;">
                        <todo-item [todo]="todo" (toggle)="onToggle($event)"></todo-item>
                    </li>
               </ul>
               <button (click)="blowup()">Trigger Change Detection Loop</button>`
})
export class TodoList implements AfterViewChecked {

    @Input()
    todos: Array<Todo>;

    @Input()
    callback: Function;

    @Output()
    addTodo = new EventEmitter<Object>();

    clicked = false;

    onToggle(todo) {
        console.log("toggling todo..");
        todo.completed = !todo.completed;

    }

    blowup() {
        console.log("Trying to blow up change detection...");
        this.clicked = true;
        this.addTodo.emit(null);
    }

    ngAfterViewChecked() {
        if (this.callback && this.clicked) {
            console.log("changing status ...");
            this.callback(Math.random());
        }

    }

}

@Component({
    selector: 'todo-item',
    template: `<span class="todo noselect" [ngClass]="{completed: todo.completed}" (click)="onToggle()">{{todo.owner.firstname}} - {{todo.description}} - completed: {{todo.completed}}</span>`
})
export class TodoItem {

    @Input()
    todo:Todo;

    @Output()
    toggle = new EventEmitter<Object>();

    onToggle() {
        this.toggle.emit(this.todo);
    }

}