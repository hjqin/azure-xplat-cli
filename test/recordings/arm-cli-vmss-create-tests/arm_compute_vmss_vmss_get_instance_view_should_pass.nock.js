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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate832/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2/instanceView?api-version=2016-03-30')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 5\r\n      }\r\n    ]\r\n  },\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2016-05-17T14:36:56.7755391+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '359',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '2586d316-ef7d-4a35-8308-b67e322f6d1b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '11d095d6-6638-490c-9bf6-95d0e7d4991e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T143708Z:11d095d6-6638-490c-9bf6-95d0e7d4991e',
  date: 'Tue, 17 May 2016 14:37:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestVMSSCreate832/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvms2/instanceView?api-version=2016-03-30')
  .reply(200, "{\r\n  \"virtualMachine\": {\r\n    \"statusesSummary\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"count\": 5\r\n      }\r\n    ]\r\n  },\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2016-05-17T14:36:56.7755391+00:00\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '359',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '2586d316-ef7d-4a35-8308-b67e322f6d1b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '11d095d6-6638-490c-9bf6-95d0e7d4991e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T143708Z:11d095d6-6638-490c-9bf6-95d0e7d4991e',
  date: 'Tue, 17 May 2016 14:37:07 GMT',
  connection: 'close' });
 return result; }]];