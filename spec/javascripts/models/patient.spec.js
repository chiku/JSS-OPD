describe("Patient", function() {
  describe("which is well-formed", function() {
    beforeEach(function() {
      this.patient = new Application.Models.Patient({
        "person":
        {
          "age":36,
          "preferredName":
          {
              "display":"Mr. John D Patient",
          },
          "preferredAddress":
          {
              "display":"555 Johnson Rd.",
          },
        },
      });
    });

    it("knows his/her name", function() {
      expect(this.patient.Name()).toBe("Mr. John D Patient");
    });

    it("knows his/her age", function() {
      expect(this.patient.Age()).toBe(36);
    });

    it("knows his/her Address", function() {
      expect(this.patient.Address()).toBe("555 Johnson Rd.");
    });
  });

  describe("which is mal-formed", function() {
    beforeEach(function() {
      this.patient = new Application.Models.Patient({
        "attributes":
      {
          "person":
        {
        },
      }
      });
    });

    it("has undefined name", function() {
      expect(this.patient.Name()).toBeUndefined();
    });

    it("has undefined name", function() {
      expect(this.patient.Age()).toBeUndefined();
    });

    it("has undefined Address", function() {
      expect(this.patient.Address()).toBeUndefined();
    });
  });
});
