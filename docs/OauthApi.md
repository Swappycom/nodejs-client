# SwappyRestApi.OauthApi

All URIs are relative to *https://api.swappy.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMe**](OauthApi.md#getMe) | **GET** /v1/me | 
[**getMyAddresses**](OauthApi.md#getMyAddresses) | **GET** /v1/me/addresses | 
[**oauth2AuthorizeGet**](OauthApi.md#oauth2AuthorizeGet) | **GET** /oauth2/authorize | 
[**oauth2TokenPost**](OauthApi.md#oauth2TokenPost) | **POST** /oauth2/token | 


<a name="getMe"></a>
# **getMe**
> Member getMe(opts)



Get info of current user 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.OauthApi();

var opts = { 
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMe(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language for the response | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMyAddresses"></a>
# **getMyAddresses**
> [Address] getMyAddresses(opts)



Get users addresses 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.OauthApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example", // String | Etag, will return `304 Not Modified` if content hasn't changed
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMyAddresses(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**[Address]**](Address.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="oauth2AuthorizeGet"></a>
# **oauth2AuthorizeGet**
> Member oauth2AuthorizeGet(clientId, redirectUri, state, responseType, opts)



oAuth authorize endpoint, the user should be redirected to this page to allow the application.

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.OauthApi();

var clientId = 56; // Integer | Application ID

var redirectUri = "redirectUri_example"; // String | URI where the user will be returned to, must match application's configuration

var state = "state_example"; // String | State that will be passed back to return_uri

var responseType = "responseType_example"; // String | Type of request

var opts = { 
  'scope': "scope_example", // String | Space separated scopes
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oauth2AuthorizeGet(clientId, redirectUri, state, responseType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Integer**| Application ID | 
 **redirectUri** | **String**| URI where the user will be returned to, must match application&#39;s configuration | 
 **state** | **String**| State that will be passed back to return_uri | 
 **responseType** | **String**| Type of request | 
 **scope** | **String**| Space separated scopes | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="oauth2TokenPost"></a>
# **oauth2TokenPost**
> oauth2TokenPost(clientId, clientSecret, grantType, opts)



Get access token

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.OauthApi();

var clientId = 56; // Integer | App API id

var clientSecret = "clientSecret_example"; // String | App API secret

var grantType = "grantType_example"; // String | Grant type for this token request

var opts = { 
  'code': "code_example", // String | Access code, **required** for `authorization_code` grant type.
  'scope': "scope_example", // String | Space separated scope for `authorization_code` grant type.
  'redirectUri': "redirectUri_example", // String | Return URI for security purpose, must match the one sent to `/authorize`, **required** for `authorization_code` grant type.
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.oauth2TokenPost(clientId, clientSecret, grantType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Integer**| App API id | 
 **clientSecret** | **String**| App API secret | 
 **grantType** | **String**| Grant type for this token request | 
 **code** | **String**| Access code, **required** for &#x60;authorization_code&#x60; grant type. | [optional] 
 **scope** | **String**| Space separated scope for &#x60;authorization_code&#x60; grant type. | [optional] 
 **redirectUri** | **String**| Return URI for security purpose, must match the one sent to &#x60;/authorize&#x60;, **required** for &#x60;authorization_code&#x60; grant type. | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

