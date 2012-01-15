describe("Encounter", function() {
  "use strict";

  describe("which is well-formed", function() {
    beforeEach(function() {
      this.encounter = new Application.Models.Encounter({
        patient          : { display: "Xyz Abc", uuid: 'abc123' },
        provider         : { display: "Doctor A" },
        id               : "a2",
        encounterDatetime:"2011-12-31T12:00:00.000+0530"
      });
    });

    it("knows the ID of the patient", function() {
      expect(this.encounter.patientId()).toBe("abc123");
    });

    it("knows the name of the patient", function() {
      expect(this.encounter.patientName()).toBe("Xyz Abc");
    });

    it("knows the name of the provider", function() {
      expect(this.encounter.providerName()).toBe("Doctor A");
    });

    it("knows appointment-time from the encounter date-time", function() {
      expect(this.encounter.appointmentTime()).toBe("2011-12-31T12:00:00.000+0530");
    });
  });

  describe("which is mal-formed", function() {
    beforeEach(function() {
      this.encounter = new Application.Models.Encounter({
        patient: { random: "Xyz Abc" },
        noProvider: { display: "Doctor A" },
        id: "a2"
      });
    });

    it("has undefined patient ID", function() {
      expect(this.encounter.patientId()).toBeUndefined();
    });

    it("has undefined patient name", function() {
      expect(this.encounter.patientName()).toBeUndefined();
    });

    it("has undefined provider name", function() {
      expect(this.encounter.providerName()).toBeUndefined();
    });

    it("knows undefined appointment-time", function() {
      expect(this.encounter.appointmentTime()).toBeUndefined();
    });
  });
});
