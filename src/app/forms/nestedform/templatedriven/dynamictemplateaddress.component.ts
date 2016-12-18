import { Component, Input,Output,EventEmitter,SimpleChanges,OnChanges,DoCheck,ChangeDetectionStrategy,OnInit ,KeyValueDiffers } from '@angular/core';
import { FormGroup } from '@angular/forms';
//http://juristr.com/blog/2016/04/angular2-change-detection/
import { MissionService} from './CommunicationService';
@Component({
    moduleId: module.id,
    selector: 'address-dynamic',
    templateUrl: 'dynamictemplateaddress.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class dynamictemplateaddress implements OnInit, OnChanges ,DoCheck {
   // @Input('group')
    //public adressForm: FormGroup;
    @Output() formUpdate = new EventEmitter();
    @Input('address') address:Address
    previousAdd :Address
    differ: any;
    constructor(private differs: KeyValueDiffers,private missionService: MissionService) {
		this.differ = differs.find({}).create(null);
	}
     ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes);
  }
  ngOnInit(){
        this.previousAdd=this.address;
  }

  ngDoCheck() {
      var changes = this.differ.diff(this.address);
      if(changes) {
			console.log('changes detected');
			changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
			changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
            this.formUpdate.emit(changes);
            this.missionService.confirmMission("mission accomplished")
      }

  /*if(!this.address.equals(this.previousAdd)) {
      // inputSettings changed
      // some logic here to react to the change
      this.previousAdd = this.address;
      console.log(this.address);
   }*/
    }
}

class Address {
    street: string;
    postcode: string;

    public equals(prev:Address): boolean{
            if(this.postcode==prev.postcode && this.street ==this.street){
                return true;
            }
            else{
                return false;
            }
    }
}