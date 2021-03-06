// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3965/firewallRules/xplattestadls1573?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"startIpAddress\":\"0.0.0.0\",\"endIpAddress\":\"0.0.0.1\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3965/firewallRules/xplattestadls1573\",\"name\":\"xplattestadls1573\",\"type\":\"Microsoft.DataLakeStore/accounts/firewallRules\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '336',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd9998072-1b2e-4be3-9aa5-7e24f6d8bd6b',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3d514682-60e7-4622-846a-cd6fe65e2891',
  'x-ms-routing-request-id': 'WESTUS2:20161208T015543Z:3d514682-60e7-4622-846a-cd6fe65e2891',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:55:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3965/firewallRules/xplattestadls1573?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"startIpAddress\":\"0.0.0.0\",\"endIpAddress\":\"0.0.0.1\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3965/firewallRules/xplattestadls1573\",\"name\":\"xplattestadls1573\",\"type\":\"Microsoft.DataLakeStore/accounts/firewallRules\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '336',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd9998072-1b2e-4be3-9aa5-7e24f6d8bd6b',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3d514682-60e7-4622-846a-cd6fe65e2891',
  'x-ms-routing-request-id': 'WESTUS2:20161208T015543Z:3d514682-60e7-4622-846a-cd6fe65e2891',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:55:43 GMT',
  connection: 'close' });
 return result; }]];