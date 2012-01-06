describe("Encounters index", function() {
  describe("on render", function() {
    beforeEach(function() {
      this.encounters = new Application.Collections.Encounters();

      this.encounters.add(new Application.Models.Encounter(
        {
          patient  : { display: "Patient Name 1" },
          provider : { display: "Doctor Name 1"  },
          id       : "a1"
        }
      ));

      this.encounters.add(new Application.Models.Encounter(
        {
          patient  : { display: "Patient Name 2" },
          provider : { display: "Doctor Name 2"  },
          id       : "a2"
        }
      ));
    });

    it("has multiple encounter shows", function() {
      var container = jQuery("<div>");
      var encounterIndex = new Application.Views.Encounters.Index({
        collection: this.encounters,
        encounterShowsContainerSelector: container
      }).render();

      var html = container.html();
      expect(html.match("Patient Name 1")).toBeTruthy("Patient Name 1 is absent");
      expect(html.match("Patient Name 2")).toBeTruthy("Patient Name 2 is absent");
      expect(html.match("Doctor Name 1")).toBeTruthy("Doctor Name 1 is absent");
      expect(html.match("Doctor Name 2")).toBeTruthy("Doctor Name 2 is absent");
    });

    it("updates when encounters is reset", function() {
      var container = jQuery("<div>");

      var encounterIndex = new Application.Views.Encounters.Index({
        collection: this.encounters,
        encounterShowsContainerSelector: container
      }).render();

      this.encounters.reset(new Application.Models.Encounter(
        {
          patient  : { display: "Patient Name 3" },
          provider : { display: "Doctor Name 3"  },
          id       : "a3"
        }
      ));

      var html = container.html();
      expect(html.match("Patient Name 3")).toBeTruthy("Patient Name 3 is absent");
      expect(html.match("Doctor Name 3")).toBeTruthy("Doctor Name 3 is absent");
    });
  });
});
