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
  text = test.request.body;
  console.log("Full Request:", JSON.stringify(test.request));
  done();
});

hooks.after('POST /api -> 200', function (test, done) {
  wordcloud = test.response.body;
  assert (test.response.body.ding == "6", "Bad word count in response")
  console.log("Full Response: ", JSON.stringify(test.response));
  done();
});

hooks.after('GET /version -> 200', function (test, done) {
    version = test.response.body.version;
    console.log("Version: ", version);
    console.log("Full Response: ", JSON.stringify(test.response));
    done();
});



