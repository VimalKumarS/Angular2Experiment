import {Directive,Component,ViewChild,ViewChildren,ElementRef,Renderer} from '@angular/core';


@Directive({
  selector:'[my-custom-directive]',
  exportAs:'customdirective'
})
export class MyCustomDirective{
  
  constructor(private _renderer:Renderer,private _el:ElementRef){
    
  }
  changeCssClass(className:string,isAdd:boolean){
    this._renderer.setElementClass(this._el.nativeElement,className,isAdd);
  }
}

@Component({
	selector: 'my-app',
	styles:['.red{background-color:#eee;color:red}'],
	template: `
	
	 <div class="row">
	  <button (click)="changeCssClassForAll()">Change all</button>
	  <button (click)="changeCssClassForFirst()">Change first</button>
	  <button (click)="changeCssClassForSecond()">Change Second</button>
	 </div>
	<div my-custom-directive>First custom directive</div>
	<div #cdire=customdirective my-custom-directive>Second custom directive</div>
	<div my-custom-directive>Third custom directive</div>
	`
})
export class ViewAppComponent{ 
  @ViewChild('cdire') second;
  @ViewChild(MyCustomDirective) first;
  @ViewChildren(MyCustomDirective) allMyCustomDirectives;
  
  changeCssClassForFirst(){
    this.removeClassFromAll();
    this.first.changeCssClass('red',true);
  }
  changeCssClassForSecond(){
    this.removeClassFromAll();
    this.second.changeCssClass('red',true);
  } 
  changeCssClassForAll(){
    this.removeClassFromAll();
    this.allMyCustomDirectives.forEach(d=> d.changeCssClass('red',true));
  }
  removeClassFromAll(){
    this.allMyCustomDirectives.forEach(d=> d.changeCssClass('red',false));
  }
}