var createFakeEncounterSuccessServer = function() {
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

var createFakeEncounterErrorServer = function() {
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

var createFakePatientSuccessServer = function() {
  "use strict";

  var fakeServer = sinon.fakeServer.create();
  fakeServer.respondWith(
    "GET",
    "/sampleWSResponses/patient/abc123.json",
    [
      200,
      { "Content-Type": "application/json" },
      JSON.stringify({
        uuid            : "abc123",
        age             : 36,
        preferredName   : { display: "Mr. John D Patient" },
        preferredAddress: { display: "555 Johnson Rd." }
      })
    ]
  );

  return {
    respond: function() { fakeServer.respond(); },
    stop: function() { fakeServer.restore(); }
  };
}
