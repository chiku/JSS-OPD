describe("Encounters collection", function() {
  "use strict";

  it("has the URL to fetch encounters from", function() {
    var encounters = new Application.Collections.Encounters();
    expect(encounters.url).toEqual('/sampleWSResponses/encounter.json');
  });

  describe("is ordered", function() {
    beforeEach(function() {
      this.encounterOne = new Application.Models.Encounter({
        patient: { display: "Xyz Abc" },
        provider: { display: "Doctor A" },
        id: "a2"
      });
      this.encounterTwo = new Application.Models.Encounter({
        patient: { display: "Abc Xyz" },
        provider: { display: "Doctor C" },
        id: "a3"
      });
      this.encounterThree = new Application.Models.Encounter({
        patient: { display: "ABc" },
        provider: { display: "Doctor B" },
        id: "a1"
      });
      this.encounters = new Application.Collections.Encounters();
      this.encounters.add([this.encounterOne, this.encounterTwo, this.encounterThree]);
    });

    it("by patient name be default", function() {
      expect(this.encounters.at(0)).toBe(this.encounterThree);
      expect(this.encounters.at(1)).toBe(this.encounterTwo);
      expect(this.encounters.at(2)).toBe(this.encounterOne);
    });

    describe("on a re-order", function() {
      it("by provider name", function() {
        this.encounters.reorderBy('providerName');
        expect(this.encounters.at(0)).toBe(this.encounterOne);
        expect(this.encounters.at(1)).toBe(this.encounterThree);
        expect(this.encounters.at(2)).toBe(this.encounterTwo);
      });

      it("by patient name", function() {
        this.encounters.reorderBy('patientName');
        expect(this.encounters.at(0)).toBe(this.encounterThree);
        expect(this.encounters.at(1)).toBe(this.encounterTwo);
        expect(this.encounters.at(2)).toBe(this.encounterOne);
      });

      it("by older order on order by incorrect fields", function() {
        this.encounters.reorderBy('providerName');
        this.encounters.reorderBy('BadField');
        this.encounters.reorderBy('VeryBadField');
        expect(this.encounters.at(0)).toBe(this.encounterOne);
        expect(this.encounters.at(1)).toBe(this.encounterThree);
        expect(this.encounters.at(2)).toBe(this.encounterTwo);
      });
    });

    it("after multiple re-orders", function(){
      this.encounters.reorderBy('providerName').reorderBy('patientName');
      expect(this.encounters.at(0)).toBe(this.encounterThree);
      expect(this.encounters.at(1)).toBe(this.encounterTwo);
      expect(this.encounters.at(2)).toBe(this.encounterOne);
    });
  });

  describe("on fetching from server", function() {
    beforeEach(function() {
      this.fakeServer = createFakeServer();
    });

    afterEach(function() {
      this.fakeServer.stop();
    });

    it("parses the response", function() {
      var encounters = new Application.Collections.Encounters();
      encounters.fetch();
      this.fakeServer.respond();

      expect(encounters.length).toEqual(2);
    });

    it("creates IDs from uuids", function() {
      var encounters = new Application.Collections.Encounters();
      encounters.fetch();
      this.fakeServer.respond();

      expect(encounters.get('a1').get('patient').display).toEqual("Patient Name 1");
      expect(encounters.get('a2').get('patient').display).toEqual("Patient Name 2");
    });
  });
});
