import { Input, Component, OnInit, EventEmitter, Output, ElementRef, Inject } from '@angular/core';
import { styles } from './treestyles';
import * as _ from 'lodash';

export interface TreeModel {
  value: string | RenamableNode;
  children?: Array<TreeModel>;
 
  _indexInParent?: number;
}
export interface RenamableNode {
  setName(name: string): void;
  toString(): string;
}
export interface NodeEvent {
  node: TreeModel;
}

@Component({
  selector: 'tree-internal',
  styles: styles,
  template: `
  <ul class="tree" *ngIf="tree">
    <li>
      <div  >
        <div class="folding" (click)="switchFoldingType($event, tree)" [ngClass]="getFoldingTypeCssClass(tree)"></div>
        <div href="#" class="node-value" *ngIf="!isEditInProgress()" [class.node-selected]="isSelected" (click)="onNodeSelected($event)">{{tree.value}}</div>

      
      </div>

      

      <template [ngIf]="isNodeExpanded()">
        <tree-internal *ngFor="let child of tree.children; let position = index"
              [parentTree]="tree"
              [indexInParent]="position"
              [tree]="child"
              ></tree-internal>
      </template>
    </li>
  </ul>
  `
})
export class TreeInternalComponent implements OnInit {

 @Input()
  public tree: TreeModel;

  @Input()
  public parentTree: TreeModel;

  @Input()
  public indexInParent: number;

  @Output()
  public nodeRemoved: EventEmitter<NodeEvent> = new EventEmitter<NodeEvent>();

  private isLeaf: boolean;
  private isSelected: boolean = false;
  private isMenuVisible: boolean = false;
  public ngOnInit(): void {
    this.indexInParent = 0;

    this.isLeaf = !Array.isArray(this.tree.children);
    this.tree._indexInParent = this.indexInParent;

    this.setUpNodeSelectedEventHandler();
    this.setUpMenuEventHandler();
    //this.setUpDraggableEventHandler();
  }
public constructor(@Inject(ElementRef) private element: ElementRef) {
  }
private setUpNodeSelectedEventHandler(): void {
    console.log(this.tree);
    /*this.treeService.nodeSelected$
      .filter((e: NodeSelectedEvent) => this.tree !== e.node)
      .subscribe(() => this.isSelected = false);*/
  }

  private setUpMenuEventHandler(): void {
      console.log(this.element.nativeElement);
    /*this.nodeMenuService.nodeMenuEvents$
      .filter((e: NodeMenuEvent) => this.element.nativeElement !== e.sender)
      .filter((e: NodeMenuEvent) => e.action === NodeMenuAction.Close)
      .subscribe(() => this.isMenuVisible = false);*/
  }
  private switchFoldingType(e: any, tree: TreeModel): void {
    this.handleFoldingType(e.target.parentNode.parentNode, tree);
  }
 private handleFoldingType(parent: TreeModel, node: TreeModel): void {
   
  }
  private getFoldingTypeCssClass(node: TreeModel): string {
    return "";
  }
    private isEditInProgress(): boolean {
    return false;
  }

  private onNodeSelected(e: MouseEvent): void {
   console.log(this.tree);
  }
    private isNodeExpanded(): boolean {
    return true;
  }

  private onChildRemoved(e: NodeEvent, parent: TreeModel = this.tree): void {
    const childIndex = _.findIndex(parent.children, (child: any) => child === e.node);
    if (childIndex >= 0) {
      parent.children.splice(childIndex, 1);
    }
  }
}