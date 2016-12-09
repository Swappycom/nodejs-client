# SwappyRestApi.BulkApi

All URIs are relative to *https://api.swappy.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBulkJob**](BulkApi.md#createBulkJob) | **POST** /v1/bulkjobs | 
[**getBulkJob**](BulkApi.md#getBulkJob) | **GET** /v1/bulkjobs/{id} | 
[**getBulkJobResult**](BulkApi.md#getBulkJobResult) | **GET** /v1/bulkjobs/{id}/results | 


<a name="createBulkJob"></a>
# **createBulkJob**
> BulkJob createBulkJob(body, opts)



Start a bulk product job 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.BulkApi();

var body = [new SwappyRestApi.Product()]; // [Product] | Product list to be uploaded

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
apiInstance.createBulkJob(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Product]**](Product.md)| Product list to be uploaded | 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**BulkJob**](BulkJob.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBulkJob"></a>
# **getBulkJob**
> BulkJob getBulkJob(id, opts)



Get infos about a job 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.BulkApi();

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
apiInstance.getBulkJob(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Product ID | 
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**BulkJob**](BulkJob.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBulkJobResult"></a>
# **getBulkJobResult**
> [BulkJobResult] getBulkJobResult(id, opts)



Get results for a job

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.BulkApi();

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
apiInstance.getBulkJobResult(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Product ID | 
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**[BulkJobResult]**](BulkJobResult.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

