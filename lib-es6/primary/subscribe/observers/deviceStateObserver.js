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
import { ensureArray } from "../../../legacy/common/functions";
import { Observer } from "./observer";
export class DeviceStateObserver extends Observer {
    constructor(_filter) {
        super();
        if (_filter) {
            this.filter = _filter;
        }
    }
    /**
     * Notify this observer
     * @param data
     */
    notify(data) {
        if (this.subscribed) {
            if (this.filterFunc(data)) {
                super.notify(data);
            }
        }
    }
    /**
     * Stop this observer from recieving notifications
     */
    unsubscribe() {
        this.subscribed = false;
        super.clearListeners();
    }
    filterFunc(data) {
        if (this.filter) {
            for (const key in this.filter) {
                if (!ensureArray(this.filter[key]).includes(data[key])) {
                    return false;
                }
            }
        }
        return true;
    }
}
//# sourceMappingURL=deviceStateObserver.js.map