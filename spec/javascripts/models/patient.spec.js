describe("Patient", function() {
  "use strict";

  describe("which is well-formed", function() {
    beforeEach(function() {
      this.patient = new Application.Models.Patient({
        id    : "abc123",
        person: {
          age             : 36,
          preferredName   : { "display": "Mr. John D Patient" },
          preferredAddress: { "display": "555 Johnson Rd." }
        }
      });
    });

    it("knows its URL from the its ID", function() {
      expect(this.patient.url()).toBe("/sampleWSResponses/patient/abc123.json");
    });

    it("knows its name from the perferred address", function() {
      expect(this.patient.name()).toBe("Mr. John D Patient");
    });

    it("knows its age", function() {
      expect(this.patient.age()).toBe(36);
    });

    it("knows its address from the perferred address", function() {
      expect(this.patient.address()).toBe("555 Johnson Rd.");
    });
  });

  var hasUndefinedPropertiesFor = function(patient) {
    it("has undefined name", function() {
      expect(patient.name()).toBeUndefined();
    });

    it("has undefined name", function() {
      expect(patient.age()).toBeUndefined();
    });

    it("has undefined address", function() {
      expect(patient.address()).toBeUndefined();
    });
  }

  describe("which is mal-formed", function() {
    var patient = new Application.Models.Patient({
      "attributes": {  "person": {} }
    });
    hasUndefinedPropertiesFor(patient);
  });

  describe("which is severely mal-formed", function() {
    var patient = new Application.Models.Patient({
      "attributes": { }
    });

    hasUndefinedPropertiesFor(patient);
  });

  describe("on fetching from server", function() {
    beforeEach(function() {
      this.fakeServer = createFakePatientSuccessServer();
    });

    afterEach(function() {
      this.fakeServer.stop();
    });

    it("parses the response", function() {
      var patient = new Application.Models.Patient({id: 'abc123'});
      patient.fetch();
      this.fakeServer.respond();

      expect(patient.get('uuid')).toEqual('abc123');
    });

    it("creates IDs from uuids", function() {
      var patient = new Application.Models.Patient({id: 'abc123'});
      patient.fetch();
      this.fakeServer.respond();

      expect(patient.get('id')).toEqual("abc123");
    });
  });

  describe("on a force fetch", function() {
    beforeEach(function() {
      this.mockModel = new Application.Models.Patient();
      spyOn(this.mockModel, "fetch");
      spyOn(this.mockModel, "trigger");
    });

    it("fetches from server", function() {
      this.mockModel.forceFetch();

      expect(this.mockModel.fetch).toHaveBeenCalled();
      expect(this.mockModel.fetch.callCount).toEqual(1);
    });

    it("triggers a change event", function() {
      this.mockModel.forceFetch();

      expect(this.mockModel.trigger).toHaveBeenCalledWith("change");
      expect(this.mockModel.trigger.callCount).toEqual(1);
    });
  });
});
