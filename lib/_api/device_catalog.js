"use strict";
/**
 * Device Catalog API
 * This is the API Documentation for the mbed device catalog update service.
 *
 * OpenAPI spec version: 0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
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
var superagent = require("superagent");
var defaultBasePath = 'http://api.mbedcloud.com';
function request(options, callback) {
    var url = options.uri;
    // Normalize slashes in url
    url = url.replace(/([:])?\/+/g, function ($0, $1) {
        return $1 ? $0 : "/";
    });
    var request = superagent(options.method, url);
    if (options.auth && (options.auth.username || options.auth.password)) {
        request.auth(options.auth.username || '', options.auth.password || '');
    }
    // set query parameters
    request.query(normalizeParams(options.qs));
    // set header parameters
    request.set(normalizeParams(options.headers));
    // set request timeout
    request.timeout(60000);
    if (options.json) {
        request.type("application/json");
        request.accept("application/json");
    }
    if (options.form) {
        request.type("application/x-www-form-urlencoded");
        request.send(normalizeParams(options.form));
    }
    else if (options.formData) {
        request.type("multipart/form-data");
        var formParams = normalizeParams(options.formData);
        for (var key in formParams) {
            if (formParams.hasOwnProperty(key)) {
                if (isFileParam(formParams[key])) {
                    // file field
                    request.attach(key, formParams[key]);
                }
                else {
                    request.field(key, formParams[key]);
                }
            }
        }
    }
    else if (options.body) {
        request.send(options.body);
    }
    request.end(function (error, response) {
        if (callback) {
            var data = null;
            if (response && !error) {
                data = response.body || response.text;
            }
            callback(error, data, response);
        }
    });
    return request;
}
exports.request = request;
/**
* Normalizes parameter values:
* <ul>
* <li>remove nils</li>
* <li>keep files and arrays</li>
* <li>format to string with `paramToString` for other cases</li>
* </ul>
* @param {Object.<String, Object>} params The parameters as object properties.
* @returns {Object.<String, Object>} normalized parameters.
*/
function normalizeParams(params) {
    var newParams = {};
    for (var key in params) {
        if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
            var value = params[key];
            if (isFileParam(value) || Array.isArray(value)) {
                newParams[key] = value;
            }
            else {
                newParams[key] = paramToString(value);
            }
        }
    }
    return newParams;
}
exports.normalizeParams = normalizeParams;
/**
* Checks whether the given parameter value represents file-like content.
* @param param The parameter to check.
* @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
*/
function isFileParam(param) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
        return true;
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
        return true;
    }
    return false;
}
exports.isFileParam = isFileParam;
/**
* Returns a string representation for an actual parameter.
* @param param The actual parameter.
* @returns {String} The string representation of <code>param</code>.
*/
function paramToString(param) {
    if (param == undefined || param == null) {
        return '';
    }
    if (param instanceof Date) {
        return param.toJSON();
    }
    return param.toString();
}
exports.paramToString = paramToString;
var DeviceDetail = (function () {
    function DeviceDetail() {
    }
    return DeviceDetail;
}());
exports.DeviceDetail = DeviceDetail;
(function (DeviceDetail) {
    (function (MechanismEnum) {
        MechanismEnum[MechanismEnum["Connector"] = 'connector'] = "Connector";
        MechanismEnum[MechanismEnum["Direct"] = 'direct'] = "Direct";
    })(DeviceDetail.MechanismEnum || (DeviceDetail.MechanismEnum = {}));
    var MechanismEnum = DeviceDetail.MechanismEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Unenrolled"] = 'unenrolled'] = "Unenrolled";
        StateEnum[StateEnum["CloudEnrolling"] = 'cloud_enrolling'] = "CloudEnrolling";
        StateEnum[StateEnum["Bootstrapped"] = 'bootstrapped'] = "Bootstrapped";
        StateEnum[StateEnum["Registered"] = 'registered'] = "Registered";
    })(DeviceDetail.StateEnum || (DeviceDetail.StateEnum = {}));
    var StateEnum = DeviceDetail.StateEnum;
    (function (DeployedStateEnum) {
        DeployedStateEnum[DeployedStateEnum["Development"] = 'development'] = "Development";
        DeployedStateEnum[DeployedStateEnum["Production"] = 'production'] = "Production";
    })(DeviceDetail.DeployedStateEnum || (DeviceDetail.DeployedStateEnum = {}));
    var DeployedStateEnum = DeviceDetail.DeployedStateEnum;
})(DeviceDetail = exports.DeviceDetail || (exports.DeviceDetail = {}));
var DeviceListResp = (function () {
    function DeviceListResp() {
    }
    return DeviceListResp;
}());
exports.DeviceListResp = DeviceListResp;
var DeviceLogSerializer = (function () {
    function DeviceLogSerializer() {
    }
    return DeviceLogSerializer;
}());
exports.DeviceLogSerializer = DeviceLogSerializer;
var DeviceLogSerializerData = (function () {
    function DeviceLogSerializerData() {
    }
    return DeviceLogSerializerData;
}());
exports.DeviceLogSerializerData = DeviceLogSerializerData;
(function (DeviceLogSerializerData) {
    (function (EventTypeEnum) {
        EventTypeEnum[EventTypeEnum["DeviceDeviceCreated"] = 'update.device.device-created'] = "DeviceDeviceCreated";
        EventTypeEnum[EventTypeEnum["DeviceDeviceUpdated"] = 'update.device.device-updated'] = "DeviceDeviceUpdated";
        EventTypeEnum[EventTypeEnum["DeploymentCampaignDeviceMetadataCreated"] = 'update.deployment.campaign-device-metadata-created'] = "DeploymentCampaignDeviceMetadataCreated";
        EventTypeEnum[EventTypeEnum["DeploymentCampaignDeviceMetadataUpdated"] = 'update.deployment.campaign-device-metadata-updated'] = "DeploymentCampaignDeviceMetadataUpdated";
        EventTypeEnum[EventTypeEnum["DeploymentCampaignDeviceMetadataRemoved"] = 'update.deployment.campaign-device-metadata-removed'] = "DeploymentCampaignDeviceMetadataRemoved";
        EventTypeEnum[EventTypeEnum["ConnectorConnectorDeviceFirmwareUpdateState"] = 'update.connector.connector-device.firmware-update.state'] = "ConnectorConnectorDeviceFirmwareUpdateState";
        EventTypeEnum[EventTypeEnum["ConnectorConnectorDeviceFirmwareUpdateResult"] = 'update.connector.connector-device.firmware-update.result'] = "ConnectorConnectorDeviceFirmwareUpdateResult";
    })(DeviceLogSerializerData.EventTypeEnum || (DeviceLogSerializerData.EventTypeEnum = {}));
    var EventTypeEnum = DeviceLogSerializerData.EventTypeEnum;
})(DeviceLogSerializerData = exports.DeviceLogSerializerData || (exports.DeviceLogSerializerData = {}));
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
(function (DefaultApiApiKeys) {
    DefaultApiApiKeys[DefaultApiApiKeys["Bearer"] = 0] = "Bearer";
})(exports.DefaultApiApiKeys || (exports.DefaultApiApiKeys = {}));
var DefaultApiApiKeys = exports.DefaultApiApiKeys;
var DefaultApi = (function () {
    function DefaultApi(basePathOrUsername, password, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'Bearer': new ApiKeyAuth('header', 'Authorization'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DefaultApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    DefaultApi.prototype.setApiKey = function (key, value) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    };
    DefaultApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Create device&lt;/p&gt;
     * @param mechanism The ID of the channel used to communicate with the device
     * @param provisionKey The key used to provision the device
     * @param accountId The owning IAM account ID
     * @param autoUpdate Mark this device for auto firmware update
     * @param bootstrappedTimestamp
     * @param createdAt
     * @param customAttributes Up to 5 custom JSON attributes
     * @param deployedState The state of the device&#39;s deployment
     * @param deployment The last deployment used on the device
     * @param description The description of the object
     * @param deviceClass
     * @param deviceId DEPRECATED: The ID of the device
     * @param etag The entity instance signature
     * @param id The ID of the device
     * @param manifest URL for the current device manifest
     * @param mechanismUrl The address of the connector to use
     * @param name The name of the object
     * @param object The API resource entity
     * @param serialNumber The serial number of the device
     * @param state The current state of the device
     * @param trustClass The device trust class
     * @param trustLevel The device trust level
     * @param updatedAt The time the object was updated
     * @param vendorId The device vendor ID
     */
    DefaultApi.prototype.deviceCreate = function (mechanism, provisionKey, accountId, autoUpdate, bootstrappedTimestamp, createdAt, customAttributes, deployedState, deployment, description, deviceClass, deviceId, etag, id, manifest, mechanismUrl, name, object, serialNumber, state, trustClass, trustLevel, updatedAt, vendorId, callback) {
        var localVarPath = this.basePath + '/v3/devices/';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'mechanism' is not null or undefined
        if (mechanism === null || mechanism === undefined) {
            throw new Error('Required parameter mechanism was null or undefined when calling deviceCreate.');
        }
        // verify required parameter 'provisionKey' is not null or undefined
        if (provisionKey === null || provisionKey === undefined) {
            throw new Error('Required parameter provisionKey was null or undefined when calling deviceCreate.');
        }
        var useFormData = false;
        if (accountId !== undefined) {
            formParams['account_id'] = accountId;
        }
        if (autoUpdate !== undefined) {
            formParams['auto_update'] = autoUpdate;
        }
        if (bootstrappedTimestamp !== undefined) {
            formParams['bootstrapped_timestamp'] = bootstrappedTimestamp;
        }
        if (createdAt !== undefined) {
            formParams['created_at'] = createdAt;
        }
        if (customAttributes !== undefined) {
            formParams['custom_attributes'] = customAttributes;
        }
        if (deployedState !== undefined) {
            formParams['deployed_state'] = deployedState;
        }
        if (deployment !== undefined) {
            formParams['deployment'] = deployment;
        }
        if (description !== undefined) {
            formParams['description'] = description;
        }
        if (deviceClass !== undefined) {
            formParams['device_class'] = deviceClass;
        }
        if (deviceId !== undefined) {
            formParams['device_id'] = deviceId;
        }
        if (etag !== undefined) {
            formParams['etag'] = etag;
        }
        if (id !== undefined) {
            formParams['id'] = id;
        }
        if (manifest !== undefined) {
            formParams['manifest'] = manifest;
        }
        if (mechanism !== undefined) {
            formParams['mechanism'] = mechanism;
        }
        if (mechanismUrl !== undefined) {
            formParams['mechanism_url'] = mechanismUrl;
        }
        if (name !== undefined) {
            formParams['name'] = name;
        }
        if (object !== undefined) {
            formParams['object'] = object;
        }
        if (provisionKey !== undefined) {
            formParams['provision_key'] = provisionKey;
        }
        if (serialNumber !== undefined) {
            formParams['serial_number'] = serialNumber;
        }
        if (state !== undefined) {
            formParams['state'] = state;
        }
        if (trustClass !== undefined) {
            formParams['trust_class'] = trustClass;
        }
        if (trustLevel !== undefined) {
            formParams['trust_level'] = trustLevel;
        }
        if (updatedAt !== undefined) {
            formParams['updated_at'] = updatedAt;
        }
        if (vendorId !== undefined) {
            formParams['vendor_id'] = vendorId;
        }
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Delete device&lt;/p&gt;
     * @param deviceId
     */
    DefaultApi.prototype.deviceDestroy = function (deviceId, callback) {
        var localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceDestroy.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;List all update devices. The result is paged into pages of 100.&lt;/p&gt;
     * @param limit
     * @param order
     * @param after
     * @param filter
     * @param include
     */
    DefaultApi.prototype.deviceList = function (limit, order, after, filter, include, callback) {
        var localVarPath = this.basePath + '/v3/devices/';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (include !== undefined) {
            queryParameters['include'] = include;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;List all device logs.&lt;/p&gt;
     * @param limit
     * @param order
     * @param after
     * @param filter
     * @param include
     */
    DefaultApi.prototype.deviceLogList = function (limit, order, after, filter, include, callback) {
        var localVarPath = this.basePath + '/v3/devicelog/';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (include !== undefined) {
            queryParameters['include'] = include;
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Retrieve device log.&lt;/p&gt;
     * @param deviceLogId
     */
    DefaultApi.prototype.deviceLogRetrieve = function (deviceLogId, callback) {
        var localVarPath = this.basePath + '/v3/devicelog/{device_log_id}/'
            .replace('{' + 'device_log_id' + '}', String(deviceLogId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'deviceLogId' is not null or undefined
        if (deviceLogId === null || deviceLogId === undefined) {
            throw new Error('Required parameter deviceLogId was null or undefined when calling deviceLogRetrieve.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Update device fields&lt;/p&gt;
     * @param deviceId The ID of the device
     */
    DefaultApi.prototype.devicePartialUpdate = function (deviceId, callback) {
        var localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling devicePartialUpdate.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Retrieve device.&lt;/p&gt;
     * @param deviceId
     */
    DefaultApi.prototype.deviceRetrieve = function (deviceId, callback) {
        var localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceRetrieve.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    /**
     *
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Update device.&lt;/p&gt;
     * @param deviceId The ID of the device
     */
    DefaultApi.prototype.deviceUpdate = function (deviceId, callback) {
        var localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceUpdate.');
        }
        var useFormData = false;
        var requestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return request(requestOptions, function (error, data, response) {
            if (callback) {
                callback(error, data, response);
            }
        });
    };
    return DefaultApi;
}());
exports.DefaultApi = DefaultApi;