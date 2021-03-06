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
    define(['ApiClient', 'model/Product', 'model/Error', 'model/ValidationError', 'model/ShortProduct', 'model/TempImage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Product'), require('../model/Error'), require('../model/ValidationError'), require('../model/ShortProduct'), require('../model/TempImage'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.ProductsApi = factory(root.SwappyRestApi.ApiClient, root.SwappyRestApi.Product, root.SwappyRestApi.Error, root.SwappyRestApi.ValidationError, root.SwappyRestApi.ShortProduct, root.SwappyRestApi.TempImage);
  }
}(this, function(ApiClient, Product, Error, ValidationError, ShortProduct, TempImage) {
  'use strict';

  /**
   * Products service.
   * @module api/ProductsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ProductsApi. 
   * @alias module:api/ProductsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:api/ProductsApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a new product to your account 
     * @param {module:model/Product} body Product object that will be added to the store
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Language for the response
     * @param {module:api/ProductsApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    this.createProduct = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createProduct";
      }


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/v1/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the endProduct operation.
     * @callback module:api/ProductsApi~endProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * End a product before it&#39;s normal end date 
     * @param {Integer} id Product ID
     * @param {module:api/ProductsApi~endProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    this.endProduct = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling endProduct";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/v1/products/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:api/ProductsApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShortProduct} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific product by ID 
     * @param {Integer} id Product ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {Date} opts.ifModifiedSince Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/ProductsApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShortProduct}
     */
    this.getProduct = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getProduct";
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
      var returnType = ShortProduct;

      return this.apiClient.callApi(
        '/v1/products/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/ProductsApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing product 
     * @param {Integer} id Product ID
     * @param {module:model/Product} body Informations that you are editing, images will be added
     * @param {module:api/ProductsApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    this.updateProduct = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateProduct";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateProduct";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Product;

      return this.apiClient.callApi(
        '/v1/products/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadPicture operation.
     * @callback module:api/ProductsApi~uploadPictureCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TempImage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload images Images will be deleted after 30 days if not used in a product.
     * @param {File} files The images, can be an array
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Language for the response
     * @param {module:api/ProductsApi~uploadPictureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TempImage>}
     */
    this.uploadPicture = function(files, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'files' is set
      if (files == undefined || files == null) {
        throw "Missing the required parameter 'files' when calling uploadPicture";
      }


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
      };
      var formParams = {
        'files': files
      };

      var authNames = ['oauth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = [TempImage];

      return this.apiClient.callApi(
        '/v1/pictures', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
