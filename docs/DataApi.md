# SwappyRestApi.DataApi

All URIs are relative to *https://api.swappy.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](DataApi.md#getCategories) | **GET** /v1/categories | 
[**getCategory**](DataApi.md#getCategory) | **GET** /v1/categories/{id} | 
[**getDurations**](DataApi.md#getDurations) | **GET** /v1/durations | 
[**getOptions**](DataApi.md#getOptions) | **GET** /v1/options | 
[**getShippingMethods**](DataApi.md#getShippingMethods) | **GET** /v1/shippingmethods | 


<a name="getCategories"></a>
# **getCategories**
> [Category] getCategories(opts)



Get all categories from the website 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.DataApi();

var opts = { 
  'depth': 56, // Integer | Number sublevels wanted, `1` for top level only. **default:** no limit
  'ifNoneMatch': "ifNoneMatch_example", // String | Etag, will return `304 Not Modified` if content hasn't changed
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Will return `304 Not Modified` if content hasn't changed
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **depth** | **Integer**| Number sublevels wanted, &#x60;1&#x60; for top level only. **default:** no limit | [optional] 
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**[Category]**](Category.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCategory"></a>
# **getCategory**
> Category getCategory(id, opts)



Get one category categories from the website 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.DataApi();

var id = 56; // Integer | Product ID

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example", // String | Etag, will return `304 Not Modified` if content hasn't changed
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Will return `304 Not Modified` if content hasn't changed
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategory(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Product ID | 
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDurations"></a>
# **getDurations**
> InlineResponse200 getDurations(opts)



Get available durations 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.DataApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example", // String | Etag, will return `304 Not Modified` if content hasn't changed
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Will return `304 Not Modified` if content hasn't changed
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDurations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOptions"></a>
# **getOptions**
> [Option] getOptions(opts)



Get paying options for a product 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.DataApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example", // String | Etag, will return `304 Not Modified` if content hasn't changed
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Will return `304 Not Modified` if content hasn't changed
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**[Option]**](Option.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShippingMethods"></a>
# **getShippingMethods**
> [ShippingMethod] getShippingMethods(opts)



Get all shipping methods 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.DataApi();

var opts = { 
  'ifNoneMatch': "ifNoneMatch_example", // String | Etag, will return `304 Not Modified` if content hasn't changed
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Will return `304 Not Modified` if content hasn't changed
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getShippingMethods(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**[ShippingMethod]**](ShippingMethod.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

