require 'json'

class Patient
  attr_reader :id, :name, :doctor_name

  def initialize(id)
    @id = id
    @name = "Patient Name #{id}"
    @doctor_name = "Doctor Name #{id}"
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
    {:name => name, :doctor_name => doctor_name, :id => id}.to_json
  end
end

