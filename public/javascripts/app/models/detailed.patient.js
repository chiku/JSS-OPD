Application.Models.DetailedPatient = Application.Models.Patient.extend({
  defaults: {
    name             : '',
    doctor_name      : '',
    id               : '0',
    sex              : '-',
    appointment_time : 'Not set'
  }
});
