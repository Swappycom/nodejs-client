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
    define(['ApiClient', 'model/Duration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Duration'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.InlineResponse200 = factory(root.SwappyRestApi.ApiClient, root.SwappyRestApi.Duration);
  }
}(this, function(ApiClient, Duration) {
  'use strict';




  /**
   * The InlineResponse200 model module.
   * @module model/InlineResponse200
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('auctions')) {
        obj['auctions'] = ApiClient.convertToType(data['auctions'], [Duration]);
      }
      if (data.hasOwnProperty('fixed')) {
        obj['fixed'] = ApiClient.convertToType(data['fixed'], [Duration]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Duration>} auctions
   */
  exports.prototype['auctions'] = undefined;
  /**
   * @member {Array.<module:model/Duration>} fixed
   */
  exports.prototype['fixed'] = undefined;



  return exports;
}));


