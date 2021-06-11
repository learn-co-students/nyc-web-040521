require 'rails_helper'

RSpec.describe Camper, type: :model do
  
  describe "relationships" do
      
    let(:camper) { Camper.create(name: 'Caitlin', age: 8) }
    let(:activity) { Activity.create(name: 'Archery', difficulty: 2) }

    it 'can access the associated signups' do
      signup = Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)

      expect(camper.signups).to include(signup)
    end

    it 'can access the associated activities' do
      Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)

      expect(camper.activities).to include(activity)
    end
  
  end

  describe "validations" do

    it "must have a name" do
      expect(Camper.create(name: 'Caitlin', age: 8)).to be_valid
      expect(Camper.create(age: 8)).to be_invalid
    end

    it "must have a age between 8 and 18" do
      expect(Camper.create(name: 'Caitlin', age: 8)).to be_valid
      expect(Camper.create(name: 'Caitlin', age: 18)).to be_valid
      expect(Camper.create(name: 'Caitlin', age: 28)).to be_invalid
      expect(Camper.create(name: 'Caitlin', age: 2)).to be_invalid
    end

  end

end
