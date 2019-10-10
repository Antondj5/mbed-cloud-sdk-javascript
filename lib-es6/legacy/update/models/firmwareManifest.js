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
import { asyncStyle } from "../../common/functions";
/**
 * Firmware Manifest
 */
export class FirmwareManifest {
    constructor(init, _api) {
        this._api = _api;
        for (const key in init) {
            if (init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
    delete(callback) {
        return asyncStyle(done => {
            this._api.deleteFirmwareManifest(this.id, done);
        }, callback);
    }
}
//# sourceMappingURL=firmwareManifest.js.map