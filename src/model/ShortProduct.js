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
    define(['ApiClient', 'model/Category', 'model/Delivery', 'model/Live', 'model/Payment', 'model/ProductEstimate', 'model/ProductImage', 'model/ProductTaxes', 'model/ShortAddress', 'model/ShortMember', 'model/ShortProductOffer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./Delivery'), require('./Live'), require('./Payment'), require('./ProductEstimate'), require('./ProductImage'), require('./ProductTaxes'), require('./ShortAddress'), require('./ShortMember'), require('./ShortProductOffer'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.ShortProduct = factory(root.SwappyRestApi.ApiClient, root.SwappyRestApi.Category, root.SwappyRestApi.Delivery, root.SwappyRestApi.Live, root.SwappyRestApi.Payment, root.SwappyRestApi.ProductEstimate, root.SwappyRestApi.ProductImage, root.SwappyRestApi.ProductTaxes, root.SwappyRestApi.ShortAddress, root.SwappyRestApi.ShortMember, root.SwappyRestApi.ShortProductOffer);
  }
}(this, function(ApiClient, Category, Delivery, Live, Payment, ProductEstimate, ProductImage, ProductTaxes, ShortAddress, ShortMember, ShortProductOffer) {
  'use strict';




  /**
   * The ShortProduct model module.
   * @module model/ShortProduct
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ShortProduct</code>.
   * @alias module:model/ShortProduct
   * @class
   */
  var exports = function() {
    var _this = this;

























  };

  /**
   * Constructs a <code>ShortProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShortProduct} obj Optional instance to populate.
   * @return {module:model/ShortProduct} The populated <code>ShortProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('seller')) {
        obj['seller'] = ShortMember.constructFromObject(data['seller']);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [ProductImage]);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = Category.constructFromObject(data['category']);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ShortAddress.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('auction')) {
        obj['auction'] = ApiClient.convertToType(data['auction'], 'Boolean');
      }
      if (data.hasOwnProperty('date_end')) {
        obj['date_end'] = ApiClient.convertToType(data['date_end'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('live')) {
        obj['live'] = Live.constructFromObject(data['live']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('starting_price')) {
        obj['starting_price'] = ApiClient.convertToType(data['starting_price'], 'Number');
      }
      if (data.hasOwnProperty('reserve_price')) {
        obj['reserve_price'] = ApiClient.convertToType(data['reserve_price'], 'Number');
      }
      if (data.hasOwnProperty('buynow_price')) {
        obj['buynow_price'] = ApiClient.convertToType(data['buynow_price'], 'Number');
      }
      if (data.hasOwnProperty('lot_number')) {
        obj['lot_number'] = ApiClient.convertToType(data['lot_number'], 'String');
      }
      if (data.hasOwnProperty('delivery')) {
        obj['delivery'] = ApiClient.convertToType(data['delivery'], [Delivery]);
      }
      if (data.hasOwnProperty('payment')) {
        obj['payment'] = ApiClient.convertToType(data['payment'], [Payment]);
      }
      if (data.hasOwnProperty('auto_renew')) {
        obj['auto_renew'] = ApiClient.convertToType(data['auto_renew'], 'Boolean');
      }
      if (data.hasOwnProperty('taxes')) {
        obj['taxes'] = ProductTaxes.constructFromObject(data['taxes']);
      }
      if (data.hasOwnProperty('estimate')) {
        obj['estimate'] = ProductEstimate.constructFromObject(data['estimate']);
      }
      if (data.hasOwnProperty('offer')) {
        obj['offer'] = ShortProductOffer.constructFromObject(data['offer']);
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/ShortMember} seller
   */
  exports.prototype['seller'] = undefined;
  /**
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Array.<module:model/ProductImage>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {module:model/Category} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {module:model/ShortAddress} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} auction
   */
  exports.prototype['auction'] = undefined;
  /**
   * @member {Date} date_end
   */
  exports.prototype['date_end'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Live} live
   */
  exports.prototype['live'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} starting_price
   */
  exports.prototype['starting_price'] = undefined;
  /**
   * @member {Number} reserve_price
   */
  exports.prototype['reserve_price'] = undefined;
  /**
   * @member {Number} buynow_price
   */
  exports.prototype['buynow_price'] = undefined;
  /**
   * @member {String} lot_number
   */
  exports.prototype['lot_number'] = undefined;
  /**
   * @member {Array.<module:model/Delivery>} delivery
   */
  exports.prototype['delivery'] = undefined;
  /**
   * @member {Array.<module:model/Payment>} payment
   */
  exports.prototype['payment'] = undefined;
  /**
   * @member {Boolean} auto_renew
   */
  exports.prototype['auto_renew'] = undefined;
  /**
   * @member {module:model/ProductTaxes} taxes
   */
  exports.prototype['taxes'] = undefined;
  /**
   * @member {module:model/ProductEstimate} estimate
   */
  exports.prototype['estimate'] = undefined;
  /**
   * @member {module:model/ShortProductOffer} offer
   */
  exports.prototype['offer'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;



  return exports;
}));


