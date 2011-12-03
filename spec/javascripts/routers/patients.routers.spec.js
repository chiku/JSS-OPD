describe("Patients routing", function() {
  describe("for index", function() {
    it("creates patients index view on success", function() {
      var fakeSever = createFakeSuccessServer();
      var patientsIndexViewStub = spyOn(Application.Views.Patients, "Index");
      var router = new Application.Routers.Patients();

      router.index();
      fakeSever.respond();

      expect(patientsIndexViewStub).toHaveBeenCalled();
      fakeSever.stop();
    });

    it("creates patients index error view on failure", function() {
      var fakeSever = createFakeErrorServer();
      var patientsIndexFailureViewStub = spyOn(Application.Views.Patients, "IndexError");
      var router = new Application.Routers.Patients();

      router.index();
      fakeSever.respond();

      expect(patientsIndexFailureViewStub).toHaveBeenCalled();
      fakeSever.stop();
    });
  });
});

