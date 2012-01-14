describe("Patient", function() {
  "use strict";

  describe("which is well-formed", function() {
    beforeEach(function() {
      this.patient = new Application.Models.Patient({
        "person": {
          "age"             : 36,
          "preferredName"   : { "display": "Mr. John D Patient" },
          "preferredAddress": { "display": "555 Johnson Rd." }
        }
      });
    });

    it("knows his/her name", function() {
      expect(this.patient.name()).toBe("Mr. John D Patient");
    });

    it("knows his/her age", function() {
      expect(this.patient.age()).toBe(36);
    });

    it("knows his/her Address", function() {
      expect(this.patient.address()).toBe("555 Johnson Rd.");
    });
  });

  describe("which is mal-formed", function() {
    beforeEach(function() {
      this.patient = new Application.Models.Patient({
        "attributes": {
          "person": { }
        }
      });
    });

    it("has undefined name", function() {
      expect(this.patient.name()).toBeUndefined();
    });

    it("has undefined name", function() {
      expect(this.patient.age()).toBeUndefined();
    });

    it("has undefined Address", function() {
      expect(this.patient.address()).toBeUndefined();
    });
  });

  describe("which is severely mal-formed", function() {
    beforeEach(function() {
      this.patient = new Application.Models.Patient({
        "attributes": { }
      });
    });

    it("has undefined name", function() {
      expect(this.patient.name()).toBeUndefined();
    });

    it("has undefined name", function() {
      expect(this.patient.age()).toBeUndefined();
    });

    it("has undefined Address", function() {
      expect(this.patient.address()).toBeUndefined();
    });
  });
});
