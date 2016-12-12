# device_query_service_api

DeviceQueryServiceApi - JavaScript client for device_query_service_api
This is the API Documentation for the mbed device query service update service.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1
- Package version: 0.1
- Build date: 2016-12-02T09:55:47.183Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install device_query_service_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DeviceQueryServiceApi = require('device_query_service_api');

var defaultClient = DeviceQueryServiceApi.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new DeviceQueryServiceApi.DefaultApi()

var name = "name_example"; // {String} The name of the query

var query = "query_example"; // {String} The device query

var opts = { 
  'description': "description_example", // {String} The description of the object
  '_object': "_object_example", // {String} The API resource entity
  'queryId': "queryId_example" // {String} DEPRECATED: The ID of the query
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deviceQueryCreate(name, query, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.mbedcloud.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DeviceQueryServiceApi.DefaultApi* | [**deviceQueryCreate**](docs/DefaultApi.md#deviceQueryCreate) | **POST** /v3/device-queries/ | 
*DeviceQueryServiceApi.DefaultApi* | [**deviceQueryDestroy**](docs/DefaultApi.md#deviceQueryDestroy) | **DELETE** /v3/device-queries/{query_id}/ | 
*DeviceQueryServiceApi.DefaultApi* | [**deviceQueryList**](docs/DefaultApi.md#deviceQueryList) | **GET** /v3/device-queries/ | 
*DeviceQueryServiceApi.DefaultApi* | [**deviceQueryPartialUpdate**](docs/DefaultApi.md#deviceQueryPartialUpdate) | **PATCH** /v3/device-queries/{query_id}/ | 
*DeviceQueryServiceApi.DefaultApi* | [**deviceQueryRetrieve**](docs/DefaultApi.md#deviceQueryRetrieve) | **GET** /v3/device-queries/{query_id}/ | 
*DeviceQueryServiceApi.DefaultApi* | [**deviceQueryUpdate**](docs/DefaultApi.md#deviceQueryUpdate) | **PUT** /v3/device-queries/{query_id}/ | 


## Documentation for Models

 - [DeviceQueryServiceApi.DeviceQuerySerializer](docs/DeviceQuerySerializer.md)
 - [DeviceQueryServiceApi.WriteDeviceQuerySerializer](docs/WriteDeviceQuerySerializer.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
