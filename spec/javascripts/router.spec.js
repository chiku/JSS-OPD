describe("Encounters", function() {
  "use strict";

  describe("router", function() {
    beforeEach(function() {
      this.router = new Application.Router();
      this.routeSpy = jasmine.createSpy('routeSpy');
      spyOn(Application.Views.Encounters.Index.prototype, "attachContentToCleanContainer");

      try {
        Backbone.history.start({silent:true, pushState:true});
      } catch(e) {}

      this.router.navigate("elsewhere");
    });

    afterEach(function() {
      this.router.navigate("");
    });

    it("fires encounters index for '' URL", function() {
      this.router.bind("route:index", this.routeSpy);
      this.router.navigate("", true);
      expect(this.routeSpy).toHaveBeenCalledWith();
      expect(this.routeSpy.callCount).toEqual(1);
    });

    it("fires encounters index for 'encounters.json' URL", function() {
      this.router.bind("route:index", this.routeSpy);
      this.router.navigate("encounters", true);
      expect(this.routeSpy).toHaveBeenCalledWith();
      expect(this.routeSpy.callCount).toEqual(1);
    });

    it("fires patients show for 'encounters/1.json' URL", function() {
      this.router.bind("route:show", this.routeSpy);
      this.router.navigate("patients/1", true);
      expect(this.routeSpy).toHaveBeenCalledWith("1");
      expect(this.routeSpy.callCount).toEqual(1);
    });
  });

  describe("for index", function() {
    it("attaches encounters details to DOM", function() {
      var fakeSever = createFakeEncounterSuccessServer();
      var attachContentStub = spyOn(Application.Views.Encounters.Index.prototype, "attachContentToCleanContainer");
      var router = new Application.Router();

      router.index();
      fakeSever.respond();

      expect(attachContentStub).toHaveBeenCalled();
      fakeSever.stop();
    });
  });
});
