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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.FieldError = factory(root.SwappyRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FieldError model module.
   * @module model/FieldError
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FieldError</code>.
   * @alias module:model/FieldError
   * @class
   * @param field {String} 
   * @param code {module:model/FieldError.CodeEnum} Error code
   */
  var exports = function(field, code) {
    var _this = this;

    _this['field'] = field;
    _this['code'] = code;

  };

  /**
   * Constructs a <code>FieldError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldError} obj Optional instance to populate.
   * @return {module:model/FieldError} The populated <code>FieldError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Error code
   * @member {module:model/FieldError.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Message in case <code>code</code> is <code>invalid</code>
   * @member {String} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "unknown_field"
     * @const
     */
    "unknown_field": "unknown_field",
    /**
     * value: "missing_field"
     * @const
     */
    "missing_field": "missing_field",
    /**
     * value: "not_found"
     * @const
     */
    "not_found": "not_found",
    /**
     * value: "already_exists"
     * @const
     */
    "already_exists": "already_exists",
    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid"  };


  return exports;
}));


