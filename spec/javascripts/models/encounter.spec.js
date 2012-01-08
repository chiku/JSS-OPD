describe("Encounter", function() {
  describe("which is well-formed", function() {
    beforeEach(function() {
      this.encounter = new Application.Models.Encounter({
        patient: { display: "Xyz Abc" },
        provider: { display: "Doctor A" },
        id: "a2"
      });
    });

    it("knows the name of the patient", function() {
      expect(this.encounter.patientName()).toBe("Xyz Abc");
    });

    it("knows the name of the provider", function() {
      expect(this.encounter.providerName()).toBe("Doctor A");
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

    it("has undefined patient name", function() {
      expect(this.encounter.patientName()).toBeUndefined();
    });

    it("has undefined provider name", function() {
      expect(this.encounter.providerName()).toBeUndefined();
    });
  });
});
