require File.join(File.expand_path(File.dirname(__FILE__)), '..', 'spec_helper')

describe Patient do
  let :patient do
    Patient.new 10
  end

  it "has a name" do
    patient.name.should == "Patient Name 10"
  end

  it "has a doctor" do
    patient.doctor_name.should == "Doctor Name 10"
  end

  it "has an ID" do
    patient.id.should == 10
  end

  describe "JSON representation" do
    let :decoded_json do
      json = patient.to_json
      decoded_json = JSON.load json
    end

    it "has a name" do
      decoded_json['name'].should == patient.name
    end

    it "has a doctor" do
      decoded_json['doctor_name'].should == patient.doctor_name
    end

    it "has an ID" do
      decoded_json['id'].should == patient.id
    end

    it "has a sex" do
      ['M', 'F'].should be_include(decoded_json['sex'])
    end

    it "has an appointment time" do
      decoded_json['appointment_time'].should_not be_empty
    end
  end

  it "can be found by ID" do
    Patient.find(50).id.should == 50
  end

  it "can be listed" do
    Patient.all.count.should == 3
  end
end

