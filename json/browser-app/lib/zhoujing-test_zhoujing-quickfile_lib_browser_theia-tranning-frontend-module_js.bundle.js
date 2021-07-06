(self["webpackChunkbrowser_app"] = self["webpackChunkbrowser_app"] || []).push([["zhoujing-test_zhoujing-quickfile_lib_browser_theia-tranning-frontend-module_js"],{

/***/ "../zhoujing-test/@zhoujing-quickfile/lib/browser/theia-training-frontend-contribution.js":
/*!************************************************************************************************!*\
  !*** ../zhoujing-test/@zhoujing-quickfile/lib/browser/theia-training-frontend-contribution.js ***!
  \************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (111:22)\nFile was processed with these loaders:\n * ../node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n|             text: \"$(file)\",\n|             alignment: browser_1.StatusBarAlignment.LEFT,\n>             priority: ,\n|             command: 'quick-file-oppen.id'\n|         });");

/***/ }),

/***/ "../zhoujing-test/@zhoujing-quickfile/lib/browser/theia-tranning-frontend-module.js":
/*!******************************************************************************************!*\
  !*** ../zhoujing-test/@zhoujing-quickfile/lib/browser/theia-tranning-frontend-module.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var theia_training_frontend_contribution_1 = __webpack_require__(/*! ./theia-training-frontend-contribution */ "../zhoujing-test/@zhoujing-quickfile/lib/browser/theia-training-frontend-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
    bind(common_1.MenuContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
    bind(browser_1.KeybindingContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(theia_training_frontend_contribution_1.TheiaTrainingFrontendContribution);
});


/***/ })

}]);
//# sourceMappingURL=zhoujing-test_zhoujing-quickfile_lib_browser_theia-tranning-frontend-module_js.bundle.js.map