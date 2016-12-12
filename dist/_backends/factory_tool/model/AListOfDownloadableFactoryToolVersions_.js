/**
 * Provisioning endpoints - the factory provisioning package.
 * The factory provisioning package needs to be installed in factories to enroll devices onto the mbed Cloud ecosystem.  These APIs allow downloading the most recent version of the factory provisioning package for various operating systems. 
 *
 * OpenAPI spec version: 0.8
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
    define(['ApiClient', 'model/FactoryToolDownload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FactoryToolDownload'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningEndpointsTheFactoryProvisioningPackage) {
      root.ProvisioningEndpointsTheFactoryProvisioningPackage = {};
    }
    root.ProvisioningEndpointsTheFactoryProvisioningPackage.AListOfDownloadableFactoryToolVersions_ = factory(root.ProvisioningEndpointsTheFactoryProvisioningPackage.ApiClient, root.ProvisioningEndpointsTheFactoryProvisioningPackage.FactoryToolDownload);
  }
}(this, function(ApiClient, FactoryToolDownload) {
  'use strict';




  /**
   * The AListOfDownloadableFactoryToolVersions_ model module.
   * @module model/AListOfDownloadableFactoryToolVersions_
   * @version 0.8
   */

  /**
   * Constructs a new <code>AListOfDownloadableFactoryToolVersions_</code>.
   * @alias module:model/AListOfDownloadableFactoryToolVersions_
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AListOfDownloadableFactoryToolVersions_</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AListOfDownloadableFactoryToolVersions_} obj Optional instance to populate.
   * @return {module:model/AListOfDownloadableFactoryToolVersions_} The populated <code>AListOfDownloadableFactoryToolVersions_</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('linArchiveInfo')) {
        obj['linArchiveInfo'] = FactoryToolDownload.constructFromObject(data['linArchiveInfo']);
      }
      if (data.hasOwnProperty('winArchiveInfo')) {
        obj['winArchiveInfo'] = FactoryToolDownload.constructFromObject(data['winArchiveInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FactoryToolDownload} linArchiveInfo
   */
  exports.prototype['linArchiveInfo'] = undefined;
  /**
   * @member {module:model/FactoryToolDownload} winArchiveInfo
   */
  exports.prototype['winArchiveInfo'] = undefined;



  return exports;
}));

