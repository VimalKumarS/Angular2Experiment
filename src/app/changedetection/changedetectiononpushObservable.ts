//our root app component
import {Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core'
import {Observable, Observer} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `<button (click)="onClick()">Click to start loading simulation</button>
  <p>State: {{state | async}}</p>`,
  
  // But what is best practice when using OnPush?
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDetection  {
  
  private stateObserver:Observer<any>;
  private state;
  constructor() {
    this.state = new Observable((observer:Observer<any>) => {
      this.stateObserver = observer;
      this.stateObserver.next('1) Waiting for button click');
    });
  }
  
  onClick() {
    
    this.stateObserver.next('2) Simulating loading...');
    
    // Pretend we're loading data from a service.
    // This component is only interested in the call's success
    Observable.of(true)
      .delay(2000)
      .subscribe(success => {
        
        if(success){
          console.log('Pretend loading: success!');
          this.stateObserver.next('3) Success!');
        }
        
      });
      
  }
}




@Component({
  selector: 'my-app',
  template: `Are we loading?: {{loadingMessage}}`,
  
  // Obviously "Default" will notice the change in `loadingMessage`...
  // changeDetection: ChangeDetectionStrategy.Default
  
  // But what is best practice when using OnPush?
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  
  private loadingMessage = "Wait for it...";
  
  constructor(private cdr: ChangeDetectorRef) {
    
  }
  
  ngOnInit() {
    
    // Pretend we're loading data from a service.
    // This component is only interested in the call's success
    Observable.of(true)
      .delay(2000)
      .subscribe(success => {
        
        if(success){
          console.log('Pretend loading: success!');
          this.loadingMessage = 'Success!';
          this.cdr.markForCheck();
        }
        
      });
      
  }
}