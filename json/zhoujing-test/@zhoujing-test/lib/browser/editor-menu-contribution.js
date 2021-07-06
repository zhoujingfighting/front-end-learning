"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorCommandContribution = exports.EditorMenuContribution = exports.EditorMainMenu = void 0;
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
// export const EDITOR_CONTEXT_MENU: MenuPath= ['editor_context_menu'];
// export namespace EditorContextMenu {
//     export const NAVIGATION = [...EDITOR_CONTEXT_MENU, 'navigation'];
//     export const MODIFICATION = [...EDITOR_CONTEXT_MENU, '1_modification'];
//     export const CUT_COPY_PASTE = [...EDITOR_CONTEXT_MENU, '9_cutcopypaste'];
//     export const COMMANDS = [...EDITOR_CONTEXT_MENU, 'z_commands'];
//     export const UNDO_REDO = [...EDITOR_CONTEXT_MENU, '1_undo'];
// }
var SampleCommand = {
    id: 'sample-command',
    label: 'Sample Command'
};
var SampleCommand2 = {
    id: 'sample-command2',
    label: 'Sample Command2'
};
var EditorMainMenu;
(function (EditorMainMenu) {
    /**
     * The main 'exmaple' menu
     */
    EditorMainMenu.EXAMPLE = __spreadArray(__spreadArray([], __read(core_1.MAIN_MENU_BAR)), ['example']);
    EditorMainMenu.NAVIGATION_GROUP = __spreadArray(__spreadArray([], __read(EditorMainMenu.EXAMPLE)), ['submenu']);
})(EditorMainMenu = exports.EditorMainMenu || (exports.EditorMainMenu = {}));
var EditorMenuContribution = /** @class */ (function () {
    function EditorMenuContribution() {
    }
    EditorMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerSubmenu(EditorMainMenu.EXAMPLE, 'Zhoujing', {
            order: '2'
            //这里是决定这个菜单选项的位置选项
        });
        registry.registerMenuAction(EditorMainMenu.EXAMPLE, {
            commandId: SampleCommand.id,
            order: '0'
        });
        registry.registerMenuAction(EditorMainMenu.EXAMPLE, {
            commandId: SampleCommand2.id,
            order: '2'
        });
        /**
         * @order 是为了确定每个菜单选项的顺序
         *
         */
        // registry.registerMenuAction(EditorMainMenu.EXAMPLE,{
        // 	commandId:common.expample2.id,
        // 	order:'2'
        // })
        // registry.registerMenuAction(EditorMainMenu.EXAMPLE,{
        // 	commandId:common.expample3.id,
        // 	order:'4'
        // })
        //把子菜单注册上去
        registry.registerSubmenu(EditorMainMenu.NAVIGATION_GROUP, 'subSubMenu', { order: '2' });
        registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP, {
            commandId: SampleCommand.id,
            label: SampleCommand.label,
            order: '4'
        });
        registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP, {
            commandId: SampleCommand2.id,
            label: SampleCommand2.label,
            order: '3'
        });
    };
    EditorMenuContribution = __decorate([
        inversify_1.injectable()
    ], EditorMenuContribution);
    return EditorMenuContribution;
}());
exports.EditorMenuContribution = EditorMenuContribution;
var EditorCommandContribution = /** @class */ (function () {
    function EditorCommandContribution() {
    }
    EditorCommandContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand(SampleCommand, {
            execute: function () { return console.log(1); }
        });
        registry.registerCommand(SampleCommand2, {
            execute: function () { return console.log(2); }
        });
    };
    EditorCommandContribution = __decorate([
        inversify_1.injectable()
    ], EditorCommandContribution);
    return EditorCommandContribution;
}());
exports.EditorCommandContribution = EditorCommandContribution;
//# sourceMappingURL=editor-menu-contribution.js.map