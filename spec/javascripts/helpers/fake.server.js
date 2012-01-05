var createFakeSuccessServer = function() {
  var fakeServer = sinon.fakeServer.create();
  fakeServer.respondWith(
    "GET",
    "/encounter.json",
    [
      200,
      {"Content-Type": "application/json"},
      JSON.stringify({
        results: [
          {patient: {display: "Patient Name 1"}, provider: {display: "Doctor Name 1"}, uuid: "a1"},
          {patient: {display: "Patient Name 2"}, provider: {display: "Doctor Name 2"}, uuid: "a2"}
        ]
      })
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
    "/encounter.json",
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

