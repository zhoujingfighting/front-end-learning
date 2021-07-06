"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheiaTrainingBackendContribution = void 0;
var fs = require("fs");
var url = require("url");
var inversify_1 = require("inversify");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var TheiaTrainingBackendContribution = /** @class */ (function () {
    function TheiaTrainingBackendContribution() {
    }
    TheiaTrainingBackendContribution.prototype.configure = function (app) {
        app.get('/listFiles', function (request, response) {
            try {
                var query = url.parse(request.url).query;
                if (!query) {
                    response.status(400).send('invalid query');
                    return;
                }
                var fsPath = file_uri_1.FileUri.fsPath(decodeURIComponent(query));
                fs.readdir(fsPath, function (err, files) {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            console.error('not found', err);
                            response.status(404).send('not found');
                            return;
                        }
                        console.error("Failed fo list file", err);
                        if (!response.headersSent) {
                            response.status(500).send('failed to list files');
                        }
                        return;
                    }
                    response.json(files);
                });
            }
            catch (e) {
                console.error('Failed fo list files', e);
                response.status(500).send('failed to list files');
            }
        });
    };
    TheiaTrainingBackendContribution = __decorate([
        inversify_1.injectable()
    ], TheiaTrainingBackendContribution);
    return TheiaTrainingBackendContribution;
}());
exports.TheiaTrainingBackendContribution = TheiaTrainingBackendContribution;
//# sourceMappingURL=theia-traning-backend-contribution.js.map