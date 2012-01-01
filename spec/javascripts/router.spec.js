describe("Patients", function() {
  describe("router", function() {
    beforeEach(function() {
      this.router = new Application.Router();
      this.routeSpy = jasmine.createSpy('routeSpy');
      spyOn(Application.Views.Patients.Index.prototype, "attachContentToCleanContainer");

      try {
        Backbone.history.start({silent:true, pushState:true});
      } catch(e) {}

      this.router.navigate("elsewhere");
    });

    afterEach(function() {
      this.router.navigate("");
    });

    it("fires patients index for '' URL", function() {
      this.router.bind("route:index", this.routeSpy);
      this.router.navigate("", true);
      expect(this.routeSpy).toHaveBeenCalledWith();
      expect(this.routeSpy.callCount).toEqual(1);
    });

    it("fires patients index for 'patients.json' URL", function() {
      this.router.bind("route:index", this.routeSpy);
      this.router.navigate("patients", true);
      expect(this.routeSpy).toHaveBeenCalledWith();
      expect(this.routeSpy.callCount).toEqual(1);
    });

    it("fires patients show for 'patients/1.json' URL", function() {
      this.router.bind("route:show", this.routeSpy);
      this.router.navigate("patients/1", true);
      expect(this.routeSpy).toHaveBeenCalledWith("1");
      expect(this.routeSpy.callCount).toEqual(1);
    });
  });

  describe("for index", function() {
    it("attaches patients details to DOM", function() {
      var fakeSever = createFakeSuccessServer();
      var attachContentStub = spyOn(Application.Views.Patients.Index.prototype, "attachContentToCleanContainer");
      var router = new Application.Router();

      router.index();
      fakeSever.respond();

      expect(attachContentStub).toHaveBeenCalled();
      fakeSever.stop();
    });
  });
});
