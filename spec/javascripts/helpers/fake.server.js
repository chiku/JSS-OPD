var createFakeSuccessServer = function() {
  "use strict";

  var fakeServer = sinon.fakeServer.create();
  fakeServer.respondWith(
    "GET",
    "/sampleWSResponses/encounter.json",
    [
      200,
      { "Content-Type": "application/json" },
      JSON.stringify({
        results: [
          {
            patient: { display: "Patient Name 1" },
            provider: { display: "Doctor Name 1" },
            encounterDatetime : "2011-12-31T00:00:00.000+0530",
            uuid: "a1"
          },
          {
            patient: { display: "Patient Name 2" },
            provider: { display: "Doctor Name 2" },
            encounterDatetime : "2012-01-31T00:00:00.000+0530",
            uuid: "a2"
          }
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
  "use strict";

  var fakeServer = sinon.fakeServer.create();
  fakeServer.respondWith(
    "GET",
    "/sampleWSResponses/encounter.json",
    [
      404,
      { "Content-Type": "application/json" },
      'Bad request'
    ]
  );

  return {
    respond: function() { fakeServer.respond(); },
    stop: function() { fakeServer.restore(); }
  };
}

var createFakeServer = createFakeSuccessServer;
