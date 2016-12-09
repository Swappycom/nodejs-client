# SwappyRestApi.ProductsApi

All URIs are relative to *https://api.swappy.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /v1/products | 
[**endProduct**](ProductsApi.md#endProduct) | **DELETE** /v1/products/{id} | 
[**getProduct**](ProductsApi.md#getProduct) | **GET** /v1/products/{id} | 
[**updateProduct**](ProductsApi.md#updateProduct) | **PATCH** /v1/products/{id} | 
[**uploadPicture**](ProductsApi.md#uploadPicture) | **POST** /v1/pictures | 


<a name="createProduct"></a>
# **createProduct**
> Product createProduct(body, opts)



Submit a new product to your account 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.ProductsApi();

var body = new SwappyRestApi.Product(); // Product | Product object that will be added to the store

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
apiInstance.createProduct(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Product**](Product.md)| Product object that will be added to the store | 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="endProduct"></a>
# **endProduct**
> Product endProduct(id)



End a product before it&#39;s normal end date 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.ProductsApi();

var id = 56; // Integer | Product ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.endProduct(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Product ID | 

### Return type

[**Product**](Product.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProduct"></a>
# **getProduct**
> ShortProduct getProduct(id, opts)



Get a specific product by ID 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.ProductsApi();

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
apiInstance.getProduct(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Product ID | 
 **ifNoneMatch** | **String**| Etag, will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **ifModifiedSince** | **Date**| Will return &#x60;304 Not Modified&#x60; if content hasn&#39;t changed | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**ShortProduct**](ShortProduct.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> Product updateProduct(id, body)



Edit an existing product 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.ProductsApi();

var id = 56; // Integer | Product ID

var body = new SwappyRestApi.Product(); // Product | Informations that you are editing, images will be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProduct(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Product ID | 
 **body** | [**Product**](Product.md)| Informations that you are editing, images will be added | 

### Return type

[**Product**](Product.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadPicture"></a>
# **uploadPicture**
> [TempImage] uploadPicture(files, opts)



Upload images Images will be deleted after 30 days if not used in a product.

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.ProductsApi();

var files = "/path/to/file.txt"; // File | The images, can be an array

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
apiInstance.uploadPicture(files, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| The images, can be an array | 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**[TempImage]**](TempImage.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

