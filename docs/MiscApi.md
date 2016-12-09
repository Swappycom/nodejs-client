# SwappyRestApi.MiscApi

All URIs are relative to *https://api.swappy.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSoftwareVersion**](MiscApi.md#getSoftwareVersion) | **GET** /v1/version | 


<a name="getSoftwareVersion"></a>
# **getSoftwareVersion**
> InlineResponse2001 getSoftwareVersion(opts)



Get current software version, this is NOT the api version 

### Example
```javascript
var SwappyRestApi = require('swappy_rest_api');
var defaultClient = SwappyRestApi.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth
var oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SwappyRestApi.MiscApi();

var opts = { 
  'version': "version_example", // String | Will return an error if version is lower then current version
  'language': "language_example" // String | Language for the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSoftwareVersion(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| Will return an error if version is lower then current version | [optional] 
 **language** | **String**| Language for the response | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

