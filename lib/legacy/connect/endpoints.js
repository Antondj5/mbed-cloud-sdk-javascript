"use strict";
/*
 * Pelion Device Management JavaScript SDK
 * Copyright Arm Limited 2017
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
var mds_1 = require("../_api/mds");
var statistics_1 = require("../_api/statistics");
var endpointsBase_1 = require("../common/endpointsBase");
var Endpoints = /** @class */ (function (_super) {
    __extends(Endpoints, _super);
    function Endpoints(options) {
        var _this = _super.call(this) || this;
        _this.endpoints = new mds_1.EndpointsApi(options, _this.responseHandler.bind(_this));
        _this.deviceRequests = new mds_1.DeviceRequestsApi(options, _this.responseHandler.bind(_this));
        _this.notifications = new mds_1.NotificationsApi(options, _this.responseHandler.bind(_this));
        _this.resources = new mds_1.ResourcesApi(options, _this.responseHandler.bind(_this));
        _this.subscriptions = new mds_1.SubscriptionsApi(options, _this.responseHandler.bind(_this));
        _this.account = new statistics_1.AccountApi(options, _this.responseHandler.bind(_this));
        _this.statistics = new statistics_1.StatisticsApi(options, _this.responseHandler.bind(_this));
        return _this;
    }
    return Endpoints;
}(endpointsBase_1.EndpointsBase));
exports.Endpoints = Endpoints;
//# sourceMappingURL=endpoints.js.map