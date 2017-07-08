//
// ABAO hooks file 
// Generated from RAML specification
//   RAML: wordcloud.raml
//   Date: 2017-07-08 18:13:53
// <https://github.com/cybertk/abao>
//

var
  hooks = require('hooks'),
  assert = require('chai').assert;

//
// Setup/Teardown
//

hooks.beforeAll(function (done) {
  done();
});

hooks.afterAll(function (done) {
  done();
});


//
// Hooks
//

//-----------------------------------------------------------------------------
hooks.before('POST /api -> 200', function (test, done) {
  // Modify 'test.request' properties here to modify the inbound request
  done();
});

hooks.after('POST /api -> 200', function (test, done) {
  // Assert against 'test.response' properties here to verify expected results
  done();
});



