describe("Detailed Pateint model", function() {
  var patient = new Application.Models.DetailedPatient();

  it("has a default name", function() {
    expect(patient.get('name')).toEqual('');
  });

  it("has a default doctor name", function() {
    expect(patient.get('doctor_name')).toEqual('');
  });

  it("has a default sex", function() {
    expect(patient.get('sex')).toEqual('-');
  });

  it("has a default ID", function() {
    expect(patient.get('id')).toEqual('0');
  });

  it("has a appointment time", function() {
    expect(patient.get('appointment_time')).not.toBeUndefined();
  });
});
