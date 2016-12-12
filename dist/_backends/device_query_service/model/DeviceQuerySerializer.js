/**
 * Device Query Service API
 * This is the API Documentation for the mbed device query service update service.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DeviceQueryServiceApi) {
      root.DeviceQueryServiceApi = {};
    }
    root.DeviceQueryServiceApi.DeviceQuerySerializer = factory(root.DeviceQueryServiceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceQuerySerializer model module.
   * @module model/DeviceQuerySerializer
   * @version 0.1
   */

  /**
   * Constructs a new <code>DeviceQuerySerializer</code>.
   * @alias module:model/DeviceQuerySerializer
   * @class
   * @param description {String} The description of the object
   * @param createdAt {Date} The time the object was created
   * @param _object {String} The API resource entity
   * @param updatedAt {Date} The time the object was updated
   * @param etag {Date} The entity instance signature
   * @param queryId {String} DEPRECATED: The ID of the query
   * @param query {String} The device query
   * @param id {String} The ID of the query
   * @param name {String} The name of the query
   */
  var exports = function(description, createdAt, _object, updatedAt, etag, queryId, query, id, name) {
    var _this = this;

    _this['description'] = description;
    _this['created_at'] = createdAt;
    _this['object'] = _object;
    _this['updated_at'] = updatedAt;
    _this['etag'] = etag;
    _this['query_id'] = queryId;
    _this['query'] = query;
    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>DeviceQuerySerializer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceQuerySerializer} obj Optional instance to populate.
   * @return {module:model/DeviceQuerySerializer} The populated <code>DeviceQuerySerializer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('etag')) {
        obj['etag'] = ApiClient.convertToType(data['etag'], 'Date');
      }
      if (data.hasOwnProperty('query_id')) {
        obj['query_id'] = ApiClient.convertToType(data['query_id'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description of the object
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The time the object was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The API resource entity
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * The time the object was updated
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * The entity instance signature
   * @member {Date} etag
   */
  exports.prototype['etag'] = undefined;
  /**
   * DEPRECATED: The ID of the query
   * @member {String} query_id
   */
  exports.prototype['query_id'] = undefined;
  /**
   * The device query
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The ID of the query
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the query
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

