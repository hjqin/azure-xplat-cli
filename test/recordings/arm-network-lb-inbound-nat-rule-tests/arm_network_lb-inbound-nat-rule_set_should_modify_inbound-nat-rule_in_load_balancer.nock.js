// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"1c857046-7d11-47a5-9258-2c23984bedf2\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e0886b8d-1fce-4f2e-b52b-3917e9027aca\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"1c857046-7d11-47a5-9258-2c23984bedf2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"1c857046-7d11-47a5-9258-2c23984bedf2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 80,\r\n          \"backendPort\": 80,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 15,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2430',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1c857046-7d11-47a5-9258-2c23984bedf2"',
  'x-ms-request-id': 'e770524c-cd3e-4bd1-b904-3a6097a300d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '6e449857-24fa-4225-ab4f-113e3df6ec2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T132115Z:6e449857-24fa-4225-ab4f-113e3df6ec2d',
  date: 'Tue, 17 May 2016 13:21:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"1c857046-7d11-47a5-9258-2c23984bedf2\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e0886b8d-1fce-4f2e-b52b-3917e9027aca\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"1c857046-7d11-47a5-9258-2c23984bedf2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"1c857046-7d11-47a5-9258-2c23984bedf2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 80,\r\n          \"backendPort\": 80,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 15,\r\n          \"protocol\": \"Tcp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2430',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1c857046-7d11-47a5-9258-2c23984bedf2"',
  'x-ms-request-id': 'e770524c-cd3e-4bd1-b904-3a6097a300d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '6e449857-24fa-4225-ab4f-113e3df6ec2d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T132115Z:6e449857-24fa-4225-ab4f-113e3df6ec2d',
  date: 'Tue, 17 May 2016 13:21:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e0886b8d-1fce-4f2e-b52b-3917e9027aca\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5cb5fbe5-a156-4b29-a31b-bc4cc8b7208c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/5cb5fbe5-a156-4b29-a31b-bc4cc8b7208c?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '68b265d6-449b-4bd4-9a7a-5426de260bd8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T132116Z:68b265d6-449b-4bd4-9a7a-5426de260bd8',
  date: 'Tue, 17 May 2016 13:21:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e0886b8d-1fce-4f2e-b52b-3917e9027aca\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5cb5fbe5-a156-4b29-a31b-bc4cc8b7208c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/5cb5fbe5-a156-4b29-a31b-bc4cc8b7208c?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '68b265d6-449b-4bd4-9a7a-5426de260bd8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T132116Z:68b265d6-449b-4bd4-9a7a-5426de260bd8',
  date: 'Tue, 17 May 2016 13:21:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e0886b8d-1fce-4f2e-b52b-3917e9027aca\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3"',
  'x-ms-request-id': '934415ae-b504-4197-84cc-8530fe9fd5ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'f600708c-5d4e-447d-b04c-642e1615c460',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T132117Z:f600708c-5d4e-447d-b04c-642e1615c460',
  date: 'Tue, 17 May 2016 13:21:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e0886b8d-1fce-4f2e-b52b-3917e9027aca\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"test-inbound-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatRules/test-inbound-rule\",\r\n        \"etag\": \"W/\\\"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-rules/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          },\r\n          \"frontendPort\": 90,\r\n          \"backendPort\": 90,\r\n          \"enableFloatingIP\": false,\r\n          \"idleTimeoutInMinutes\": 20,\r\n          \"protocol\": \"Udp\"\r\n        }\r\n      }\r\n    ],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"52176296-0ae5-4bf6-9bcc-4d55d54ad0f3"',
  'x-ms-request-id': '934415ae-b504-4197-84cc-8530fe9fd5ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'f600708c-5d4e-447d-b04c-642e1615c460',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T132117Z:f600708c-5d4e-447d-b04c-642e1615c460',
  date: 'Tue, 17 May 2016 13:21:17 GMT',
  connection: 'close' });
 return result; }]];