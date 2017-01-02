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
var menu_service_1 = require('./menu.service');
var menu_types_1 = require('./menu.types');
//import { isLeftButtonClicked, isEscapePressed } from '../common/utils/event.utils';
var node_menu_styles_1 = require('./node-menu-styles');
var NodeMenuComponent = (function () {
    function NodeMenuComponent(renderer, nodeMenuService) {
        this.renderer = renderer;
        this.nodeMenuService = nodeMenuService;
        this.menuItemSelected = new core_1.EventEmitter();
        this.availableMenuItems = [
            {
                name: 'New tag',
                action: menu_types_1.NodeMenuItemAction.NewTag,
                cssClass: 'new-tag'
            },
            {
                name: 'New folder',
                action: menu_types_1.NodeMenuItemAction.NewFolder,
                cssClass: 'new-folder'
            },
            {
                name: 'Rename',
                action: menu_types_1.NodeMenuItemAction.Rename,
                cssClass: 'rename'
            },
            {
                name: 'Remove',
                action: menu_types_1.NodeMenuItemAction.Remove,
                cssClass: 'remove'
            }
        ];
        this.disposersForGlobalListeners = [];
    }
    NodeMenuComponent.prototype.ngOnInit = function () {
        this.disposersForGlobalListeners.push(this.renderer.listenGlobal('document', 'keyup', this.closeMenu.bind(this)));
        this.disposersForGlobalListeners.push(this.renderer.listenGlobal('document', 'click', this.closeMenu.bind(this)));
    };
    NodeMenuComponent.prototype.ngOnDestroy = function () {
        this.disposersForGlobalListeners.forEach(function (dispose) { return dispose(); });
    };
    NodeMenuComponent.prototype.onMenuItemSelected = function (e, selectedMenuItem) {
        //if (isLeftButtonClicked(e)) {
        this.menuItemSelected.emit({ nodeMenuItemAction: selectedMenuItem.action });
        // }
    };
    NodeMenuComponent.prototype.closeMenu = function (e) {
        var mouseClicked = e instanceof MouseEvent;
        var escapePressed = e instanceof KeyboardEvent; //&& isEscapePressed(e);
        if (escapePressed || mouseClicked) {
            var nodeMenuEvent = {
                sender: e.target,
                action: menu_types_1.NodeMenuAction.Close
            };
            this.nodeMenuService.nodeMenuEvents$.next(nodeMenuEvent);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NodeMenuComponent.prototype, "menuItemSelected", void 0);
    NodeMenuComponent = __decorate([
        core_1.Component({
            selector: 'node-menu',
            styles: node_menu_styles_1.styles,
            template: "\n    <div class=\"node-menu\">\n      <ul class=\"node-menu-content\">\n        <li class=\"node-menu-item\" *ngFor=\"let menuItem of availableMenuItems\"\n            (click)=\"onMenuItemSelected($event, menuItem)\">\n          <div class=\"node-menu-item-icon {{menuItem.cssClass}}\"></div>\n          <span class=\"node-menu-item-value\">{{menuItem.name}}</span>\n        </li>\n      </ul>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(core_1.Renderer)),
        __param(1, core_1.Inject(menu_service_1.NodeMenuService)), 
        __metadata('design:paramtypes', [core_1.Renderer, menu_service_1.NodeMenuService])
    ], NodeMenuComponent);
    return NodeMenuComponent;
}());
exports.NodeMenuComponent = NodeMenuComponent;
//# sourceMappingURL=node-menu.component.js.map