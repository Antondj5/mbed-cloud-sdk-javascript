"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("../../../common/repository");
var functions_1 = require("../../../legacy/common/functions");
var index_1 = require("../../index");
var index_2 = require("../../../index");
/**
 *DarkThemeImage repository
 */
var DarkThemeImageRepository = /** @class */ (function (_super) {
    __extends(DarkThemeImageRepository, _super);
    function DarkThemeImageRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * delete
     * @param reference - Name of the branding images (icon or picture).
     */
    DarkThemeImageRepository.prototype.delete = function (reference) {
        var _this = this;
        return functions_1.apiWrapper(function (resultsFn) {
            _this.client._CallApi({
                url: "/v3/branding-images/dark/{reference}/clear",
                method: "POST",
                pathParams: {
                    reference: reference,
                },
            }, resultsFn);
        }, function (data, done) {
            done(null, index_1.DarkThemeImageAdapter.fromApi(data));
        });
    };
    /**
     * list
     * @param options - options
     */
    DarkThemeImageRepository.prototype.list = function (options) {
        var _this = this;
        var pageFunc = function (pageOptions) {
            pageOptions = pageOptions || {};
            return functions_1.apiWrapper(function (resultsFn) {
                _this.client._CallApi({
                    url: "/v3/branding-images/dark",
                    method: "GET",
                }, resultsFn);
            }, function (data, done) {
                done(null, new index_2.Page(data, data.data, index_1.DarkThemeImageAdapter.fromApi, pageOptions));
            }, null);
        };
        return new index_2.Paginator(pageFunc, options);
    };
    /**
     * read
     * @param reference - Name of the image.
     */
    DarkThemeImageRepository.prototype.read = function (reference) {
        var _this = this;
        return functions_1.apiWrapper(function (resultsFn) {
            _this.client._CallApi({
                url: "/v3/branding-images/dark/{reference}",
                method: "GET",
                pathParams: {
                    reference: reference,
                },
            }, resultsFn);
        }, function (data, done) {
            done(null, index_1.DarkThemeImageAdapter.fromApi(data));
        });
    };
    /**
     * update
     * @param image - The image in PNG or JPEG format as multipart form data.
     * @param reference - Name of the image.
     */
    DarkThemeImageRepository.prototype.update = function (image, reference) {
        var _this = this;
        return functions_1.apiWrapper(function (resultsFn) {
            _this.client._CallApi({
                url: "/v3/branding-images/dark/{reference}/upload-multipart",
                method: "POST",
                pathParams: {
                    reference: reference,
                },
                formParams: {
                    image: image,
                },
                contentTypes: ["multipart/form-data"],
            }, resultsFn);
        }, function (data, done) {
            done(null, index_1.DarkThemeImageAdapter.fromApi(data));
        });
    };
    return DarkThemeImageRepository;
}(repository_1.Repository));
exports.DarkThemeImageRepository = DarkThemeImageRepository;
//# sourceMappingURL=darkThemeImageRepository.js.map