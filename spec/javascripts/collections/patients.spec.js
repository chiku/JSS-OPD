describe("Patients collection", function() {
  it("has the URL to fetch patients from", function() {
    var patients = new Application.Collections.Patients();
    expect(patients.url()).toEqual('/patients.json');
  });

  it("finds a patient via ID", function() {
    var attributes = {
      id: 50,
      name: "Foo",
      doctor_name: "Bar"
    };
    var patient = new Application.Models.Patient(attributes);
    var patients = new Application.Collections.Patients();
    patients.add(attributes);

    expect(patients.get(50).get("id")).toEqual(50);
    expect(patients.get(-1)).toBeUndefined();
  });

  it("orders by name", function() {
    var patientOne = new Application.Models.Patient({
      id: 1,
      name: "Xyz Abc",
      doctor_name: "Doctor A"
    });
    var patientTwo = new Application.Models.Patient({
      id: 1,
      name: "Abc Xyz",
      doctor_name: "Doctor B"
    });
    var patientThree = new Application.Models.Patient({
      id: 1,
      name: "ABc",
      doctor_name: "Doctor C"
    });
    var patients = new Application.Collections.Patients();
    patients.add([patientOne, patientTwo, patientThree]);

    expect(patients.at(0)).toBe(patientThree);
    expect(patients.at(1)).toBe(patientTwo);
    expect(patients.at(2)).toBe(patientOne);
  });

  describe("on fetching from server", function() {
    beforeEach(function() {
      this.fakeServer = createFakeServer();
    });

    afterEach(function() {
      this.fakeServer.stop();
    });

    it("parses the response", function() {
      var patients = new Application.Collections.Patients();
      patients.fetch();
      this.fakeServer.respond();

      expect(patients.length).toEqual(2);
      expect(patients.get(1).get('name')).toEqual("Patient Name 1");
      expect(patients.get(2).get('name')).toEqual("Patient Name 2");
    });
  });
});
