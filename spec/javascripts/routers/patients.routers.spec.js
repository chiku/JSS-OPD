describe("Patients routing", function() {
  describe("for index", function() {
    afterEach(function() {
      this.fakeSever.stop();
    });

    it("creates patients index view on success", function() {
      var router = new Application.Routers.Patients();

      var patientsIndexViewStub = spyOn(Application.Views.Patients, "Index");
      this.fakeSever = createFakeServer();

      router.index();
      this.fakeSever.respond();
      expect(patientsIndexViewStub).toHaveBeenCalled();
    });

    it("doesn't create patients index view on failure", function() {
      var router = new Application.Routers.Patients();

      var patientsIndexViewStub = spyOn(Application.Views.Patients, "Index");
      this.fakeSever = createFakeErrorServer();

      router.index();
      this.fakeSever.respond();
      expect(patientsIndexViewStub).not.toHaveBeenCalled();
    });
  });
});

