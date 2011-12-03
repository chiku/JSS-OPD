describe("Patient model", function() {
  var patient = new Application.Models.Patient({
    name: 'Patient',
    doctor_name: 'Doctor',
    id: 101
  });

  describe("on instantiating", function() {
    it("has a name", function() {
      expect(patient.get('name')).toEqual('Patient');
    });
  
    it("has a doctor", function() {
      expect(patient.get('doctor_name')).toEqual('Doctor');
    });

    it("has an ID", function() {
      expect(patient.get('id')).toEqual(101);
    });

    it("has a URL", function() {
      expect(patient.url()).toEqual("/patients/101.json");
    });
  });
});
