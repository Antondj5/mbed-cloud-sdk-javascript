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
import { ApiKey } from "./apiKey";
/**
 * API Key Adapter
 */
export class ApiKeyAdapter {
    static map(from, api) {
        return new ApiKey({
            name: from.name,
            ownerId: from.owner,
            groups: from.groups,
            id: from.id,
            key: from.key,
            status: from.status,
            createdAt: from.created_at,
            creationTime: from.creation_time,
            lastLoginTime: from.last_login_time,
        }, api);
    }
    static addMap(from) {
        return {
            name: from.name,
            status: from.status,
            owner: from.ownerId,
            groups: from.groups,
        };
    }
    static updateMap(from) {
        return {
            name: from.name,
            status: from.status,
            owner: from.ownerId,
        };
    }
}
//# sourceMappingURL=apiKeyAdapter.js.map