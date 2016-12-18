import {
  Component, Input, OnChanges, Output,
  SimpleChanges, ViewChild,DoCheck,EventEmitter,ChangeDetectionStrategy,ChangeDetectorRef
} from '@angular/core';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'on-changes',
  template: `
  <div class="hero">
    Child <p>{{hero.name}} can {{power}}</p>
    <input [(ngModel)]="hero.name">
    <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
    <p><button (click)="update()"> child update Log</button></p>
  </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnChangesComponent implements OnChanges,DoCheck {
  @Input() hero: Hero;
  @Input() power: string;
  @Output() emitHero =new EventEmitter<Object>();


  constructor(private changedetref:ChangeDetectorRef){}
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;
changeDetected = false;
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
     // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    //this.changedetref.markForCheck();
  }

  reset() { this.changeLog.length = 0; }
update(){
  this.hero.name="child";
}

 ngDoCheck() {

    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      //this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
      //this.emitHero.emit(this.hero);
      console.log("child"+this.hero.name);
      //this.changedetref.detectChanges();
      this.changedetref.markForCheck();
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      //this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        // log that hook was called when there was no relevant change.
        let count = this.noChangeCount += 1;
        let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          // add new "no change" message
          //this.changeLog.push(noChangeMsg);
        } else {
          // update last "no change" message
          //this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
    }

    this.changeDetected = false;
  }

}

/***************************************/

@Component({
  moduleId: module.id,
  selector: 'on-changes-parent',
  templateUrl: 'on-changes-parent.component.html',
  styles: ['.parent {background: Lavender;}'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnChangesParentComponent implements OnChanges,DoCheck {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor(private changedetref:ChangeDetectorRef) {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }

 ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log(changes);
  }

  emitHero($event):void {
      console.log($event);
  }
  update():void{
      this.hero.name="parent";
      //this.changedetref.detectChanges();
      //this.changedetref.markForCheck();
  }
  ngDoCheck() {
     //console.log("Parent "+this.hero.name);
  }
}

