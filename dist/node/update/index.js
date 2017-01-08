"use strict";
/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pg = require("polygoat");
var api_1 = require("./api");
/**
* Root Update object
*/
var Update = (function () {
    /**
    * @param options Options object
    */
    function Update(options) {
        this._api = new api_1.Api(options);
    }
    /**
    * Gets a list of currently registered endpoints
    * @param type Filters endpoints by endpoint-type
    * @param callback A function that is passed the arguments (error, endpoints)
    * @returns Optional Promise of currently registered endpoints
    */
    Update.prototype.getFirmwareImages = function (options, callback) {
        var _this = this;
        options = options || {};
        var limit = options.limit, order = options.order, after = options.after, include = options.include;
        return pg(function (done) {
            _this._api.firmware.firmwareImageList(limit, order, after, include, function (error, data) {
                if (error)
                    return done(error);
                done(null, data);
            });
        }, callback);
    };
    Update.prototype.getManifests = function (options, callback) {
        var _this = this;
        options = options || {};
        var limit = options.limit, order = options.order, after = options.after, include = options.include;
        return pg(function (done) {
            _this._api.firmware.firmwareManifestList(limit, order, after, include, function (error, data) {
                if (error)
                    return done(error);
                done(null, data);
            });
        }, callback);
    };
    return Update;
}());
exports.Update = Update;
