require 'rails_helper'

RSpec.describe Signup, type: :model do

  let(:camper) { Camper.create(name: 'Caitlin', age: 8) }
  let(:activity) { Activity.create(name: 'Archery', difficulty: 2) }

  describe "relationships" do
    
    it 'can access the associated camper' do
      signup = Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)

      expect(signup.camper).to eq(camper)
    end

    it 'can access the associated activity' do
      signup = Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)

      expect(signup.activity).to eq(activity)
    end
  
  end

  describe "validations" do

    it "must have a time between 0 and 23" do
      expect(Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)).to be_valid
      expect(Signup.create(camper_id: camper.id, activity_id: activity.id, time: 0)).to be_valid
      expect(Signup.create(camper_id: camper.id, activity_id: activity.id, time: 23)).to be_valid
      expect(Signup.create(camper_id: camper.id, activity_id: activity.id, time: 24)).to be_invalid
      expect(Signup.create(camper_id: camper.id, activity_id: activity.id)).to be_invalid
    end

  end

end
