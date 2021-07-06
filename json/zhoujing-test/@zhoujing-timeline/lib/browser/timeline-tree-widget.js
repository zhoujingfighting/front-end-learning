"use strict";
/********************************************************************************
 * Copyright (C) 2020 RedHat and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.TimelineItemNode = exports.TimelineTreeWidget = exports.TIMELINE_ITEM_CONTEXT_MENU = void 0;
var inversify_1 = require("@theia/core/shared/inversify");
var common_1 = require("@theia/core/lib/common");
var tree_1 = require("@theia/core/lib/browser/tree");
var browser_1 = require("@theia/core/lib/browser");
var timeline_tree_model_1 = require("./timeline-tree-model");
var timeline_service_1 = require("./timeline-service");
var timeline_context_key_service_1 = require("./timeline-context-key-service");
var React = require("@theia/core/shared/react");
exports.TIMELINE_ITEM_CONTEXT_MENU = ['timeline-item-context-menu'];
var TimelineTreeWidget = /** @class */ (function (_super) {
    __extends(TimelineTreeWidget, _super);
    function TimelineTreeWidget(props, timelineService, model, contextMenuRenderer, commandRegistry) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.timelineService = timelineService;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.commandRegistry = commandRegistry;
        _this.id = TimelineTreeWidget_1.ID;
        _this.addClass('timeline-outer-container');
        return _this;
    }
    TimelineTreeWidget_1 = TimelineTreeWidget;
    TimelineTreeWidget.prototype.renderNode = function (node, props) {
        var attributes = this.createNodeAttributes(node, props);
        var content = React.createElement(TimelineItemNode, { timelineItem: node.timelineItem, commandRegistry: this.commandRegistry, contextKeys: this.contextKeys, contextMenuRenderer: this.contextMenuRenderer });
        return React.createElement('div', attributes, content);
    };
    TimelineTreeWidget.prototype.handleEnter = function (event) {
        var _a;
        var node = this.model.selectedNodes[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var command = node.timelineItem.command;
        if (command) {
            (_a = this.commandRegistry).executeCommand.apply(_a, __spreadArray([command.id], __read(command.arguments ? command.arguments : [])));
        }
    };
    TimelineTreeWidget.prototype.handleLeft = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.model.selectPrevNode();
                return [2 /*return*/];
            });
        });
    };
    var TimelineTreeWidget_1;
    TimelineTreeWidget.ID = 'timeline-tree-widget';
    TimelineTreeWidget.PAGE_SIZE = 20;
    __decorate([
        inversify_1.inject(common_1.MenuModelRegistry),
        __metadata("design:type", common_1.MenuModelRegistry)
    ], TimelineTreeWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(timeline_context_key_service_1.TimelineContextKeyService),
        __metadata("design:type", timeline_context_key_service_1.TimelineContextKeyService)
    ], TimelineTreeWidget.prototype, "contextKeys", void 0);
    TimelineTreeWidget = TimelineTreeWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tree_1.TreeProps)),
        __param(1, inversify_1.inject(timeline_service_1.TimelineService)),
        __param(2, inversify_1.inject(timeline_tree_model_1.TimelineTreeModel)),
        __param(3, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __param(4, inversify_1.inject(common_1.CommandRegistry)),
        __metadata("design:paramtypes", [Object, timeline_service_1.TimelineService,
            timeline_tree_model_1.TimelineTreeModel,
            browser_1.ContextMenuRenderer,
            common_1.CommandRegistry])
    ], TimelineTreeWidget);
    return TimelineTreeWidget;
}(tree_1.TreeWidget));
exports.TimelineTreeWidget = TimelineTreeWidget;
var TimelineItemNode = /** @class */ (function (_super) {
    __extends(TimelineItemNode, _super);
    function TimelineItemNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = function () {
            var _a;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var command = _this.props.timelineItem.command;
            if (command) {
                (_a = _this.props.commandRegistry).executeCommand.apply(_a, __spreadArray([command.id], __read(command.arguments ? command.arguments : [])));
            }
        };
        _this.renderContextMenu = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var _a = _this.props, timelineItem = _a.timelineItem, contextKeys = _a.contextKeys, contextMenuRenderer = _a.contextMenuRenderer;
            var currentTimelineItem = contextKeys.timelineItem.get();
            contextKeys.timelineItem.set(timelineItem.contextValue);
            try {
                contextMenuRenderer.render({
                    menuPath: exports.TIMELINE_ITEM_CONTEXT_MENU,
                    anchor: event.nativeEvent,
                    args: [timelineItem]
                });
            }
            finally {
                contextKeys.timelineItem.set(currentTimelineItem);
            }
        };
        return _this;
    }
    TimelineItemNode.prototype.render = function () {
        var _a = this.props.timelineItem, label = _a.label, description = _a.description, detail = _a.detail;
        return React.createElement("div", { className: 'timeline-item', title: detail, onContextMenu: this.renderContextMenu, onClick: this.open },
            React.createElement("div", { className: "noWrapInfo " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS },
                React.createElement("span", { className: 'name' }, label),
                React.createElement("span", { className: 'label' }, description)));
    };
    return TimelineItemNode;
}(React.Component));
exports.TimelineItemNode = TimelineItemNode;
//# sourceMappingURL=timeline-tree-widget.js.map