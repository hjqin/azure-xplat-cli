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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/reservedips/cliTestRip4731/migration?comp=prepare')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '914922cf684e073898de54faa8b9f6dd',
  date: 'Wed, 14 Sep 2016 09:30:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/914922cf684e073898de54faa8b9f6dd')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>914922cf-684e-0738-98de-54faa8b9f6dd</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '298ba600d65a0b249fb729b5ee6a24d1',
  date: 'Wed, 14 Sep 2016 09:30:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/914922cf684e073898de54faa8b9f6dd')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>914922cf-684e-0738-98de-54faa8b9f6dd</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b2af6b92a9df04069efebd110e63dc98',
  date: 'Wed, 14 Sep 2016 09:31:13 GMT' });
 return result; }]];