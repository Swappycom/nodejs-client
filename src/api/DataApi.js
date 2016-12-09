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
    define(['ApiClient', 'model/Category', 'model/Error', 'model/InlineResponse200', 'model/Option', 'model/ShippingMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Category'), require('../model/Error'), require('../model/InlineResponse200'), require('../model/Option'), require('../model/ShippingMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.DataApi = factory(root.SwappyRestApi.ApiClient, root.SwappyRestApi.Category, root.SwappyRestApi.Error, root.SwappyRestApi.InlineResponse200, root.SwappyRestApi.Option, root.SwappyRestApi.ShippingMethod);
  }
}(this, function(ApiClient, Category, Error, InlineResponse200, Option, ShippingMethod) {
  'use strict';

  /**
   * Data service.
   * @module api/DataApi
   * @version 0.1.0
   */

  /**
   * Constructs a new DataApi. 
   * @alias module:api/DataApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCategories operation.
     * @callback module:api/DataApi~getCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Category>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all categories from the website 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.depth Number sublevels wanted, &#x60;1&#x60; for top level only. **default:** no limit
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {Date} opts.ifModifiedSince Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/DataApi~getCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Category>}
     */
    this.getCategories = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'depth': opts['depth'],
        'language': opts['language']
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Category];

      return this.apiClient.callApi(
        '/v1/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategory operation.
     * @callback module:api/DataApi~getCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Category} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one category categories from the website 
     * @param {Integer} id Product ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {Date} opts.ifModifiedSince Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/DataApi~getCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Category}
     */
    this.getCategory = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getCategory";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Category;

      return this.apiClient.callApi(
        '/v1/categories/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDurations operation.
     * @callback module:api/DataApi~getDurationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get available durations 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {Date} opts.ifModifiedSince Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/DataApi~getDurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.getDurations = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/v1/durations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOptions operation.
     * @callback module:api/DataApi~getOptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Option>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get paying options for a product 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {Date} opts.ifModifiedSince Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/DataApi~getOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Option>}
     */
    this.getOptions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Option];

      return this.apiClient.callApi(
        '/v1/options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getShippingMethods operation.
     * @callback module:api/DataApi~getShippingMethodsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ShippingMethod>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all shipping methods 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {Date} opts.ifModifiedSince Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/DataApi~getShippingMethodsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ShippingMethod>}
     */
    this.getShippingMethods = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ShippingMethod];

      return this.apiClient.callApi(
        '/v1/shippingmethods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
