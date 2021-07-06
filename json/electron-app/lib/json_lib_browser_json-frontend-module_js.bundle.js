(global["webpackChunkelectron_app"] = global["webpackChunkelectron_app"] || []).push([["json_lib_browser_json-frontend-module_js"],{

/***/ "../json/lib/browser/abstract-view-contribution.js":
/*!*********************************************************!*\
  !*** ../json/lib/browser/abstract-view-contribution.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindWidgetContribution = exports.WidgetContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var self_widget_1 = __webpack_require__(/*! ./self-widget */ "../json/lib/browser/self-widget.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var TestCommand = {
    id: 'test',
    label: 'test'
};
var WidgetContribution = /** @class */ (function (_super) {
    __extends(WidgetContribution, _super);
    //基础的
    function WidgetContribution() {
        return _super.call(this, {
            widgetId: self_widget_1.SelfWidget.ID,
            widgetName: self_widget_1.SelfWidget.LABEL,
            defaultWidgetOptions: { area: 'main' },
            toggleCommandId: self_widget_1.SelfWidget.ID
        }) || this;
    }
    //通过改写registerCommands方法，绑定其他命令
    WidgetContribution.prototype.registerCommands = function (commands) {
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(TestCommand, {
            execute: function () { return console.log(1); }
        });
    };
    //通过改写registerMenus方法，绑定其他菜单项
    WidgetContribution.prototype.registerMenus = function (menus) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.registerMenus.call(this, menus);
                menus.registerMenuAction(browser_1.CommonMenus.VIEW, {
                    commandId: TestCommand.id,
                    label: TestCommand.label
                });
                return [2 /*return*/];
            });
        });
    };
    WidgetContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], WidgetContribution);
    return WidgetContribution;
}(browser_1.AbstractViewContribution));
exports.WidgetContribution = WidgetContribution;
var bindWidgetContribution = function (bind) {
    browser_1.bindViewContribution(bind, WidgetContribution);
    bind(browser_1.FrontendApplicationContribution).toService(WidgetContribution);
    bind(self_widget_1.SelfWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: self_widget_1.SelfWidget.ID,
        createWidget: function () {
            return ctx.container.get(self_widget_1.SelfWidget);
        }
    }); }).inSingletonScope();
};
exports.bindWidgetContribution = bindWidgetContribution;


/***/ }),

/***/ "../json/lib/browser/editor-menu-contribution.js":
/*!*******************************************************!*\
  !*** ../json/lib/browser/editor-menu-contribution.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditorCommandContribution = exports.EditorMenuContribution = exports.EditorMainMenu = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
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


/***/ }),

/***/ "../json/lib/browser/getting-started-contribution.js":
/*!***********************************************************!*\
  !*** ../json/lib/browser/getting-started-contribution.js ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (81:11)\nFile was processed with these loaders:\n * ../node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n|             return ctx.container.get(getting_started_1.GettingStartedWidget);\n|         }\n>     }); }).();\n| };\n| exports.bindingGettingStarted = bindingGettingStarted;");

/***/ }),

/***/ "../json/lib/browser/json-contribution.js":
/*!************************************************!*\
  !*** ../json/lib/browser/json-contribution.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonCommandContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var protocol_1 = __webpack_require__(/*! ../common/protocol */ "../json/lib/common/protocol.js");
var SayHelloViaBackendCommandWithCallBack = {
    id: 'sayHelloOnBackendWithCallBack.command',
    label: 'Say hello on the backend with a callback to the client',
};
var SayHelloViaBackendCommand = {
    id: 'sayHelloOnBackend.command',
    label: 'Say hello on the backend',
};
var JsonCommandContribution = /** @class */ (function () {
    function JsonCommandContribution(helloBackendWithClientService, helloBackendService) {
        this.helloBackendWithClientService = helloBackendWithClientService;
        this.helloBackendService = helloBackendService;
    }
    JsonCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(SayHelloViaBackendCommandWithCallBack, {
            execute: function () { return _this.helloBackendWithClientService.greet().then(function (r) { return console.log(r); }); }
        });
        registry.registerCommand(SayHelloViaBackendCommand, {
            execute: function () { return _this.helloBackendService.sayHelloTo('World').then(function (r) { return console.log(r); }); }
        });
    };
    JsonCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(protocol_1.HelloBackendWithClientService)),
        __param(1, inversify_1.inject(protocol_1.HelloBackendService)),
        __metadata("design:paramtypes", [Object, Object])
    ], JsonCommandContribution);
    return JsonCommandContribution;
}());
exports.JsonCommandContribution = JsonCommandContribution;


/***/ }),

/***/ "../json/lib/browser/json-frontend-module.js":
/*!***************************************************!*\
  !*** ../json/lib/browser/json-frontend-module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var protocol_1 = __webpack_require__(/*! ../common/protocol */ "../json/lib/common/protocol.js");
var json_contribution_1 = __webpack_require__(/*! ./json-contribution */ "../json/lib/browser/json-contribution.js");
var abstract_view_contribution_1 = __webpack_require__(/*! ./abstract-view-contribution */ "../json/lib/browser/abstract-view-contribution.js");
var widgetopen_contribution_1 = __webpack_require__(/*! ./widgetopen-contribution */ "../json/lib/browser/widgetopen-contribution.js");
var editor_menu_contribution_1 = __webpack_require__(/*! ./editor-menu-contribution */ "../json/lib/browser/editor-menu-contribution.js");
var getting_started_contribution_1 = __webpack_require__(/*! ./getting-started-contribution */ "../json/lib/browser/getting-started-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    getting_started_contribution_1.bindingGettingStarted(bind);
    widgetopen_contribution_1.bindingCustomOpenHandler(bind);
    abstract_view_contribution_1.bindWidgetContribution(bind);
    bind(core_1.MenuContribution).toService(editor_menu_contribution_1.EditorMenuContribution);
    bind(editor_menu_contribution_1.EditorMenuContribution).toSelf().inSingletonScope();
    bind(core_1.CommandContribution).to(editor_menu_contribution_1.EditorCommandContribution).inSingletonScope();
    bind(core_1.CommandContribution).to(json_contribution_1.JsonCommandContribution).inSingletonScope();
    bind(protocol_1.BackendClient).to(BackendClientImpl).inSingletonScope();
    bind(protocol_1.HelloBackendService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        return connection.createProxy(protocol_1.HELLO_BACKEND_PATH);
    }).inSingletonScope();
    bind(protocol_1.HelloBackendWithClientService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var backendClient = ctx.container.get(protocol_1.BackendClient);
        return connection.createProxy(protocol_1.HELLO_BACKEND_WITH_CLIENT_PATH, backendClient);
    }).inSingletonScope();
});
var BackendClientImpl = /** @class */ (function () {
    function BackendClientImpl() {
    }
    BackendClientImpl.prototype.getName = function () {
        return new Promise(function (resolve) { return resolve('Client'); });
    };
    BackendClientImpl = __decorate([
        inversify_1.injectable()
    ], BackendClientImpl);
    return BackendClientImpl;
}());
/**
 *
 *
 *
 *
 *
 *
 *  */ 


/***/ }),

/***/ "../json/lib/browser/self-widget.js":
/*!******************************************!*\
  !*** ../json/lib/browser/self-widget.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelfWidget = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
//自定义接口
var SelfWidget = /** @class */ (function (_super) {
    __extends(SelfWidget, _super);
    function SelfWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelfWidget_1 = SelfWidget;
    SelfWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //初始化
                this.id = SelfWidget_1.ID;
                this.title.label = SelfWidget_1.LABEL;
                this.title.caption = SelfWidget_1.LABEL;
                this.title.closable = true;
                this.title.iconClass = 'fa fa-window-maximize';
                this.update(); //更新	视图
                return [2 /*return*/];
            });
        });
    };
    //
    SelfWidget.prototype.render = function () {
        return (React.createElement("div", null,
            "\u81EA\u5B9A\u4E49\u89C6\u56FE",
            React.createElement("h1", null, "\u4F60\u597D\u674E\u7115\u82F1")));
    };
    var SelfWidget_1;
    SelfWidget.ID = 'test:widget';
    SelfWidget.LABEL = 'Self widget';
    SelfWidget.TOGGLR_COMMAND_ID = 'self.widget';
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SelfWidget.prototype, "init", null);
    SelfWidget = SelfWidget_1 = __decorate([
        inversify_1.injectable()
    ], SelfWidget);
    return SelfWidget;
}(browser_1.ReactWidget));
exports.SelfWidget = SelfWidget;
//这里是自定义widget


/***/ }),

/***/ "../json/lib/browser/widgetopen-contribution.js":
/*!******************************************************!*\
  !*** ../json/lib/browser/widgetopen-contribution.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindingCustomOpenHandler = exports.CustomOpenHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var widgetopen_hander_1 = __webpack_require__(/*! ./widgetopen-hander */ "../json/lib/browser/widgetopen-hander.js");
var CustomOpenHandler = /** @class */ (function (_super) {
    __extends(CustomOpenHandler, _super);
    function CustomOpenHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = widgetopen_hander_1.CustonmWidget.ID;
        return _this;
    }
    CustomOpenHandler.prototype.canHandle = function (uri) {
        console.log(uri.path.ext);
        if (uri.path.ext === '.json') {
            return 500;
        }
        else {
            return 0;
        }
    };
    //这里设置传递给widget的参数
    CustomOpenHandler.prototype.createWidgetOptions = function (uir, options) {
        return {
            text: '这是JSON文件'
        };
    };
    CustomOpenHandler = __decorate([
        inversify_1.injectable()
    ], CustomOpenHandler);
    return CustomOpenHandler;
}(browser_1.WidgetOpenHandler));
exports.CustomOpenHandler = CustomOpenHandler;
var bindingCustomOpenHandler = function (bind) {
    bind(browser_1.OpenHandler).toService(CustomOpenHandler);
    bind(CustomOpenHandler).toSelf().inSingletonScope();
    bind(widgetopen_hander_1.CustonmWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: widgetopen_hander_1.CustonmWidget.ID,
        createWidget: function () {
            var widget = ctx.container.get(widgetopen_hander_1.CustonmWidget);
            // widget.setText(options.text);
            return widget;
        }
    }); }).inSingletonScope();
};
exports.bindingCustomOpenHandler = bindingCustomOpenHandler;


/***/ }),

/***/ "../json/lib/browser/widgetopen-hander.js":
/*!************************************************!*\
  !*** ../json/lib/browser/widgetopen-hander.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustonmWidget = void 0;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var CustonmWidget = /** @class */ (function (_super) {
    __extends(CustonmWidget, _super);
    function CustonmWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustonmWidget_1 = CustonmWidget;
    CustonmWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.id = CustonmWidget_1.ID;
                this.title.label = CustonmWidget_1.LABEL;
                this.title.closable = true;
                this.title.iconClass = 'fa fa-window-maximize'; //exmaple widget icon
                this.update(); //更新视图
                return [2 /*return*/];
            });
        });
    };
    CustonmWidget.prototype.setText = function (text) {
        this.text = text;
    };
    CustonmWidget.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null, "\u81EA\u5B9A\u4E49\u7F16\u8F91\u5668"),
            React.createElement("div", null, this.text)));
    };
    var CustonmWidget_1;
    CustonmWidget.ID = 'test:widget';
    CustonmWidget.LABEL = 'Custom Editor';
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], CustonmWidget.prototype, "init", null);
    CustonmWidget = CustonmWidget_1 = __decorate([
        inversify_1.injectable()
    ], CustonmWidget);
    return CustonmWidget;
}(browser_1.ReactWidget));
exports.CustonmWidget = CustonmWidget;


/***/ }),

/***/ "../json/lib/common/protocol.js":
/*!**************************************!*\
  !*** ../json/lib/common/protocol.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackendClient = exports.HELLO_BACKEND_WITH_CLIENT_PATH = exports.HelloBackendWithClientService = exports.HELLO_BACKEND_PATH = exports.HelloBackendService = void 0;
exports.HelloBackendService = Symbol('HelloBackendService');
exports.HELLO_BACKEND_PATH = '/services/helloBackend';
exports.HelloBackendWithClientService = Symbol('BackendWithClient');
exports.HELLO_BACKEND_WITH_CLIENT_PATH = '/services/withClient';
exports.BackendClient = Symbol('BackendClient');


/***/ })

}]);
//# sourceMappingURL=json_lib_browser_json-frontend-module_js.bundle.js.map