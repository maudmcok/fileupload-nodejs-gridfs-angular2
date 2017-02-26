"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var AppComponent = (function () {
    function AppComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3002/upload' });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<nav class=\"navbar navbar-default\">\n                    <div class=\"container-fluid\">\n                        <div class=\"navbar-header\">\n                        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                            <ul class=\"nav navbar-nav\">\n                            <li><a>File Upload</a></li>\n                            </ul>\n                        </div>\n                        </div>\n                    </div>\n                </nav>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <form>\n                                <div class=\"form-group\">\n                                    <label for=\"multiple\">Multiple</label>\n                                    <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  />\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"single\">single</label>\n                                    <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />                                  \n                                </div>            \n                            </form>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <h3>File Upload with Angular 2 and Node</h3>\n                            Queue length: {{ uploader?.queue?.length }}\n\n                            <table class=\"table\">\n                                <thead>\n                                <tr>\n                                    <th width=\"50%\">Name</th>\n                                    <th>Size</th>\n                                    <th>Progress</th>\n                                    <th>Status</th>\n                                    <th>Actions</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let item of uploader.queue\">\n                                    <td><strong>{{ item.file.name }}</strong></td>\n                                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                                    <td>\n                                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                        </div>\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                                    </td>\n                                    <td nowrap>\n                                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                                (click)=\"item.remove()\">\n                                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                        </button>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n\n                            <div>\n                                <div>\n                                    Queue progress:\n                                    <div class=\"progress\" style=\"\">\n                                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                                    </div>\n                                </div>\n                                <button type=\"button\" class=\"btn btn-success btn-s\"\n                                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                                </button>\n                                <button type=\"button\" class=\"btn btn-warning btn-s\"\n                                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                                </button>\n                                <button type=\"button\" class=\"btn btn-danger btn-s\"\n                                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map