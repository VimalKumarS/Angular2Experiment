/**
 * Created by vimal on 11/27/2016.
 */
import { Component,Input,AfterContentInit} from '@angular/core'

@Component({
    selector:'tab',
    template:` <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>`,
    styles: [`
    .pane{
      padding: 1em;
    }
  `]
})
export class Tab implements AfterContentInit{
        @Input('tabTitle') title:string;
        @Input() active =false;

    ngAfterContentInit(){
       console.log(this.title);
    }
}