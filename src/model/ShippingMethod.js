/**
 * Swappy REST API
 * This is Swappy's REST API. See below for all available endpoints. This is an <strong>alpha version</strong> and might still be subject to change
 *
 * OpenAPI spec version: 0.1.0
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
    define(['ApiClient', 'model/DeliveryType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeliveryType'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.ShippingMethod = factory(root.SwappyRestApi.ApiClient, root.SwappyRestApi.DeliveryType);
  }
}(this, function(ApiClient, DeliveryType) {
  'use strict';




  /**
   * The ShippingMethod model module.
   * @module model/ShippingMethod
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ShippingMethod</code>.
   * @alias module:model/ShippingMethod
   * @class
   * @param name {String} 
   * @param methods {Array.<module:model/DeliveryType>} 
   */
  var exports = function(name, methods) {
    var _this = this;


    _this['name'] = name;

    _this['methods'] = methods;
  };

  /**
   * Constructs a <code>ShippingMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShippingMethod} obj Optional instance to populate.
   * @return {module:model/ShippingMethod} The populated <code>ShippingMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('methods')) {
        obj['methods'] = ApiClient.convertToType(data['methods'], [DeliveryType]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The country FROM wich this shipping method can be use (2 letter code). Can also be ALL (Available everywhere) or INT (Available for all origin countries but Canada)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {Array.<module:model/DeliveryType>} methods
   */
  exports.prototype['methods'] = undefined;



  return exports;
}));


