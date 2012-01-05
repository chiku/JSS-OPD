describe("Encounters collection", function() {
  it("has the URL to fetch encounters from", function() {
    var encounters = new Application.Collections.Encounters();
    expect(encounters.url).toEqual('/encounter.json');
  });

  describe("is ordered", function() {
    var encounterOne = new Application.Models.Encounter({
      id: 2,
      name: "Xyz Abc",
      doctor_name: "Doctor A"
    });
    var encounterTwo = new Application.Models.Encounter({
      id: 3,
      name: "Abc Xyz",
      doctor_name: "Doctor C"
    });
    var encounterThree = new Application.Models.Encounter({
      id: 1,
      name: "ABc",
      doctor_name: "Doctor B"
    });
    var encounters = new Application.Collections.Encounters();
    encounters.add([encounterOne, encounterTwo, encounterThree]);

    it("by name by default", function() {
      expect(encounters.at(0)).toBe(encounterThree);
      expect(encounters.at(1)).toBe(encounterTwo);
      expect(encounters.at(2)).toBe(encounterOne);
    });

    describe("on a re-order", function() {
      it("by doctor_name", function() {
        encounters.reorderBy('doctor_name');
        expect(encounters.at(0)).toBe(encounterOne);
        expect(encounters.at(1)).toBe(encounterThree);
        expect(encounters.at(2)).toBe(encounterTwo);
      });
    });

    it("after multiple re-orders", function(){
      encounters.reorderBy('doctor_name').reorderBy('name');
      expect(encounters.at(0)).toBe(encounterThree);
      expect(encounters.at(1)).toBe(encounterTwo);
      expect(encounters.at(2)).toBe(encounterOne);
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
