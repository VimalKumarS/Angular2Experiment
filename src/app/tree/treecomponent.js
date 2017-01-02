"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var treestyles_1 = require('./treestyles');
var _ = require('lodash');
var TreeInternalComponent = (function () {
    function TreeInternalComponent(element) {
        this.element = element;
        this.nodeRemoved = new core_1.EventEmitter();
        this.isSelected = false;
        this.isMenuVisible = false;
    }
    TreeInternalComponent.prototype.ngOnInit = function () {
        this.indexInParent = 0;
        this.isLeaf = !Array.isArray(this.tree.children);
        this.tree._indexInParent = this.indexInParent;
        this.setUpNodeSelectedEventHandler();
        this.setUpMenuEventHandler();
        //this.setUpDraggableEventHandler();
    };
    TreeInternalComponent.prototype.setUpNodeSelectedEventHandler = function () {
        console.log(this.tree);
        /*this.treeService.nodeSelected$
          .filter((e: NodeSelectedEvent) => this.tree !== e.node)
          .subscribe(() => this.isSelected = false);*/
    };
    TreeInternalComponent.prototype.setUpMenuEventHandler = function () {
        console.log(this.element.nativeElement);
        /*this.nodeMenuService.nodeMenuEvents$
          .filter((e: NodeMenuEvent) => this.element.nativeElement !== e.sender)
          .filter((e: NodeMenuEvent) => e.action === NodeMenuAction.Close)
          .subscribe(() => this.isMenuVisible = false);*/
    };
    TreeInternalComponent.prototype.switchFoldingType = function (e, tree) {
        this.handleFoldingType(e.target.parentNode.parentNode, tree);
    };
    TreeInternalComponent.prototype.handleFoldingType = function (parent, node) {
    };
    TreeInternalComponent.prototype.getFoldingTypeCssClass = function (node) {
        return "";
    };
    TreeInternalComponent.prototype.isEditInProgress = function () {
        return false;
    };
    TreeInternalComponent.prototype.onNodeSelected = function (e) {
        console.log(this.tree);
    };
    TreeInternalComponent.prototype.isNodeExpanded = function () {
        return true;
    };
    TreeInternalComponent.prototype.onChildRemoved = function (e, parent) {
        if (parent === void 0) { parent = this.tree; }
        var childIndex = _.findIndex(parent.children, function (child) { return child === e.node; });
        if (childIndex >= 0) {
            parent.children.splice(childIndex, 1);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TreeInternalComponent.prototype, "tree", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TreeInternalComponent.prototype, "parentTree", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TreeInternalComponent.prototype, "indexInParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TreeInternalComponent.prototype, "nodeRemoved", void 0);
    TreeInternalComponent = __decorate([
        core_1.Component({
            selector: 'tree-internal',
            styles: treestyles_1.styles,
            template: "\n  <ul class=\"tree\" *ngIf=\"tree\">\n    <li>\n      <div  >\n        <div class=\"folding\" (click)=\"switchFoldingType($event, tree)\" [ngClass]=\"getFoldingTypeCssClass(tree)\"></div>\n        <div href=\"#\" class=\"node-value\" *ngIf=\"!isEditInProgress()\" [class.node-selected]=\"isSelected\" (click)=\"onNodeSelected($event)\">{{tree.value}}</div>\n\n      \n      </div>\n\n      \n\n      <template [ngIf]=\"isNodeExpanded()\">\n        <tree-internal *ngFor=\"let child of tree.children; let position = index\"\n              [parentTree]=\"tree\"\n              [indexInParent]=\"position\"\n              [tree]=\"child\"\n              ></tree-internal>\n      </template>\n    </li>\n  </ul>\n  "
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TreeInternalComponent);
    return TreeInternalComponent;
}());
exports.TreeInternalComponent = TreeInternalComponent;
//# sourceMappingURL=treecomponent.js.map