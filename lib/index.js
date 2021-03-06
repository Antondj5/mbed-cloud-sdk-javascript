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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Tlv = require("./common/tlv");
exports.Tlv = Tlv;
__export(require("./legacy"));
__export(require("./foundation"));
__export(require("./common"));
var sdk_1 = require("./sdk");
exports.SDK = sdk_1.SDK;
var client_1 = require("./client/client");
exports.Client = client_1.Client;
var config_1 = require("./common/config");
exports.Config = config_1.Config;
//# sourceMappingURL=index.js.map