require File.join(File.expand_path(File.dirname(__FILE__)), '..', 'spec_helper')
require File.join(File.expand_path(File.dirname(__FILE__)), '..', '..', 'lib', 'models', 'patient.rb')

describe Patient do
  let :patient do
    Patient.new 10
  end

  it "has a name" do
    patient.name.must_equal "Patient Name 10"
  end

  it "has a doctor" do
    patient.doctor_name.must_equal "Doctor Name 10"
  end

  it "has an ID" do
    patient.id.must_equal 10
  end

  describe "JSON representation" do
    let :decoded_json do
      json = patient.to_json
      decoded_json = JSON.load json
    end

    it "has a name" do
      decoded_json['name'].must_equal patient.name
    end

    it "has a doctor" do
      decoded_json['doctor_name'].must_equal patient.doctor_name
    end

    it "has an ID" do
      decoded_json['id'].must_equal patient.id
    end
  end

  it "can be found by ID" do
    Patient.find(50).id.must_equal 50
  end

  it "can be listed" do
    Patient.all.count.must_equal 3
  end
end

