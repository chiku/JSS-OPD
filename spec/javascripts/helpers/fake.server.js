var createFakeSuccessServer = function() {
  var fakeServer = sinon.fakeServer.create();
  fakeServer.respondWith(
    "GET",
    "/patients.json",
    [
      200,
      {"Content-Type": "application/json"},
      '{"patients":[{"name":"Patient Name 1","doctor_name":"Doctor Name 1","id":1},' +
          '{"name":"Patient Name 2","doctor_name":"Doctor Name 2","id":2}]}'
    ]
  );

  return {
    respond: function() { fakeServer.respond(); },
    stop: function() { fakeServer.restore(); }
  };
}

var createFakeErrorServer = function() {
  var fakeServer = sinon.fakeServer.create();
  fakeServer.respondWith(
    "GET",
    "/patients.json",
    [
      404,
      {"Content-Type": "application/json"},
      'Bad request'
    ]
  );

  return {
    respond: function() { fakeServer.respond(); },
    stop: function() { fakeServer.restore(); }
  };
}

var createFakeServer = createFakeSuccessServer;

