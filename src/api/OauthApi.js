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
    define(['ApiClient', 'model/Member', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Member'), require('../model/Address'));
  } else {
    // Browser globals (root is window)
    if (!root.SwappyRestApi) {
      root.SwappyRestApi = {};
    }
    root.SwappyRestApi.OauthApi = factory(root.SwappyRestApi.ApiClient, root.SwappyRestApi.Member, root.SwappyRestApi.Address);
  }
}(this, function(ApiClient, Member, Address) {
  'use strict';

  /**
   * Oauth service.
   * @module api/OauthApi
   * @version 0.1.0
   */

  /**
   * Constructs a new OauthApi. 
   * @alias module:api/OauthApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getMe operation.
     * @callback module:api/OauthApi~getMeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get info of current user 
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Language for the response
     * @param {module:api/OauthApi~getMeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */
    this.getMe = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


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
      var returnType = Member;

      return this.apiClient.callApi(
        '/v1/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMyAddresses operation.
     * @callback module:api/OauthApi~getMyAddressesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Address>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users addresses 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifNoneMatch Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed
     * @param {String} opts.language Language for the response
     * @param {module:api/OauthApi~getMyAddressesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Address>}
     */
    this.getMyAddresses = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Address];

      return this.apiClient.callApi(
        '/v1/me/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauth2AuthorizeGet operation.
     * @callback module:api/OauthApi~oauth2AuthorizeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * oAuth authorize endpoint, the user should be redirected to this page to allow the application.
     * @param {Integer} clientId Application ID
     * @param {String} redirectUri URI where the user will be returned to, must match application&#39;s configuration
     * @param {String} state State that will be passed back to return_uri
     * @param {module:model/String} responseType Type of request
     * @param {Object} opts Optional parameters
     * @param {String} opts.scope Space separated scopes
     * @param {String} opts.language Language for the response
     * @param {module:api/OauthApi~oauth2AuthorizeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */
    this.oauth2AuthorizeGet = function(clientId, redirectUri, state, responseType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId == undefined || clientId == null) {
        throw "Missing the required parameter 'clientId' when calling oauth2AuthorizeGet";
      }

      // verify the required parameter 'redirectUri' is set
      if (redirectUri == undefined || redirectUri == null) {
        throw "Missing the required parameter 'redirectUri' when calling oauth2AuthorizeGet";
      }

      // verify the required parameter 'state' is set
      if (state == undefined || state == null) {
        throw "Missing the required parameter 'state' when calling oauth2AuthorizeGet";
      }

      // verify the required parameter 'responseType' is set
      if (responseType == undefined || responseType == null) {
        throw "Missing the required parameter 'responseType' when calling oauth2AuthorizeGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'client_id': clientId,
        'redirect_uri': redirectUri,
        'state': state,
        'scope': opts['scope'],
        'response_type': responseType,
        'language': opts['language']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Member;

      return this.apiClient.callApi(
        '/oauth2/authorize', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauth2TokenPost operation.
     * @callback module:api/OauthApi~oauth2TokenPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get access token
     * @param {Integer} clientId App API id
     * @param {String} clientSecret App API secret
     * @param {module:model/String} grantType Grant type for this token request
     * @param {Object} opts Optional parameters
     * @param {String} opts.code Access code, **required** for &#x60;authorization_code&#x60; grant type.
     * @param {String} opts.scope Space separated scope for &#x60;authorization_code&#x60; grant type.
     * @param {String} opts.redirectUri Return URI for security purpose, must match the one sent to &#x60;/authorize&#x60;, **required** for &#x60;authorization_code&#x60; grant type.
     * @param {String} opts.language Language for the response
     * @param {module:api/OauthApi~oauth2TokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.oauth2TokenPost = function(clientId, clientSecret, grantType, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId == undefined || clientId == null) {
        throw "Missing the required parameter 'clientId' when calling oauth2TokenPost";
      }

      // verify the required parameter 'clientSecret' is set
      if (clientSecret == undefined || clientSecret == null) {
        throw "Missing the required parameter 'clientSecret' when calling oauth2TokenPost";
      }

      // verify the required parameter 'grantType' is set
      if (grantType == undefined || grantType == null) {
        throw "Missing the required parameter 'grantType' when calling oauth2TokenPost";
      }


      var pathParams = {
      };
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
      };
      var formParams = {
        'client_id': clientId,
        'client_secret': clientSecret,
        'grant_type': grantType,
        'code': opts['code'],
        'scope': opts['scope'],
        'redirect_uri': opts['redirectUri']
      };

      var authNames = ['oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
