describe("Patients routing", function() {
  describe("for index", function() {
    it("attaches patients details to DOM", function() {
      var fakeSever = createFakeSuccessServer();
      var attachContentStub = spyOn(Application.Views.Patients.Index.prototype, "attachContentToCleanContainer");
      var router = new Application.Routers.Patients();

      router.index();
      fakeSever.respond();

      expect(attachContentStub).toHaveBeenCalled();
      fakeSever.stop();
    });
  });
});
