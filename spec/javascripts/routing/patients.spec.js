describe("Patients routing", function() {
  beforeEach(function() {
    this.router = new Application.Routers.Patients();
    this.routeSpy = jasmine.createSpy('routeSpy');
    try {
      Backbone.history.start({silent:true, pushState:true});
    } catch(e) {}
    this.router.navigate("elsewhere");

    var patientsCollection = new Backbone.Collection();
    var patientsModels = [new Backbone.Model()];
    this.patientsCollectionStub = spyOn(Application.Collections, "Patients").andReturn(patientsCollection)
    this.patientsCollectionFetchStub = spyOn(patientsCollection, "fetch").andReturn({models: patientsModels});
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

