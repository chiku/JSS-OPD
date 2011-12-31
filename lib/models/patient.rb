require 'json'

class Patient
  attr_reader :id, :name, :doctor_name, :sex, :appointment_time

  def initialize(id)
    @id               = id
    @name             = "Patient Name #{10 - id}"
    @doctor_name      = "Doctor Name #{id}"
    @sex              = (id % 2).zero? ? 'M' : 'F'
    @appointment_time = Time.now - id * 1800
  end

  def self.find(id)
    Patient.new id
  end

  def self.all
    p1 = Patient.new 1
    p2 = Patient.new 2
    p3 = Patient.new 3

    [p1, p2, p3]
  end

  def to_json(*args)
    {
      :name             => name,
      :doctor_name      => doctor_name,
      :id               => id,
      :sex              => sex,
      :appointment_time => appointment_time.strftime("%d/%b/%Y at %I:%M %p")
    }.to_json
  end
end
