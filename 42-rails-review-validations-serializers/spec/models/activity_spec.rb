require 'rails_helper'

RSpec.describe Activity, type: :model do

  describe "relationships" do
      
    let(:camper) { Camper.create(name: 'Caitlin', age: 8) }
    let(:activity) { Activity.create(name: 'Archery', difficulty: 2) }

    it 'can access the associated signups' do
      signup = Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)

      expect(activity.signups).to include(signup)
    end

    it 'can access the associated campers' do
      Signup.create(camper_id: camper.id, activity_id: activity.id, time: 11)

      expect(activity.campers).to include(camper)
    end
  
  end

end
