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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindWidgetContribution = exports.WidgetContribution = void 0;
var inversify_1 = require("inversify");
var self_widget_1 = require("./self-widget");
var browser_1 = require("@theia/core/lib/browser");
// import { TabBarToolbarContribution } from "@theia/core/lib/browser/shell/tab-bar-toolbar";
// import { FileNavigatorPreferences } from "./navigator-preference";
// import { ContextKeyService } from "@theia/core/lib/browser/context-key-service";
var TestCommand = {
    id: 'test',
    label: 'test'
};
var WidgetContribution = /** @class */ (function (_super) {
    __extends(WidgetContribution, _super);
    // @inject(FileNavigatorPreferences)
    // protected readonly fileNavigatorPreferences: FileNavigatorPreferences
    // @inject(ContextKeyService)
    // protected readonly contextKeyService: ContextKeyService
    function WidgetContribution() {
        return _super.call(this, {
            widgetId: self_widget_1.SelfWidget.ID,
            widgetName: self_widget_1.SelfWidget.LABEL,
            defaultWidgetOptions: { area: 'left' },
            toggleCommandId: self_widget_1.SelfWidget.ID,
            toggleKeybinding: 'ctrlcmd+shift+e'
        }) || this;
    }
    // @postConstruct()
    // protected async init():Promise<void>{
    // 	await this.fileNavigatorPreferences.ready
    // 	// this.shell.currentChanged.connect(() => this.onCurrentWidgetChangedHandler());
    // 	const updateFocusContextKeys = () => {
    // 		const hasFocus = this.shell.activateWidget instanceof SelfWidget
    // 		this.contextKeyService.explorerViewletFocus.set(hasFocus);
    // 	}
    // }
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
//# sourceMappingURL=abstract-view-contribution.js.map