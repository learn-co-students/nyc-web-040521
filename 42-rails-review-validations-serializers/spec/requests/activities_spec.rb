require 'rails_helper'

RSpec.describe "Activities", type: :request do
  before do
    camper1 = Camper.create(name: 'Caitlin', age: 8)
    camper2 = Camper.create(name: 'Lizzie', age: 9)
    activity1 = Activity.create(name: 'Archery', difficulty: 2)
    activity2 = Activity.create(name: 'Swimming', difficulty: 3)
    Signup.create(camper_id: camper1.id, activity_id: activity1.id, time: 11)
    Signup.create(camper_id: camper1.id, activity_id: activity2.id, time: 12)
    Signup.create(camper_id: camper2.id, activity_id: activity2.id, time: 11)
  end

  describe "GET /activities" do
    it 'returns an array of all activities' do
      get '/activities'

      expect(response.body).to include_json([
        {
          id: a_kind_of(Integer),
          name: "Archery",
          difficulty: 2
        },
        {
          id: a_kind_of(Integer),
          name: "Swimming",
          difficulty: 3
        }
      ])
    end

    it 'returns a status of 200 (OK)' do
      get '/activities'

      expect(response).to have_http_status(:ok)
    end
  end

  describe "DELETE /activities/:id" do

    context "with a valid ID" do

      it "deletes the Activity" do
        expect { delete "/activities/#{Activity.first.id}" }.to change(Activity, :count).by(-1)
      end

      it "deletes the associated Signups" do
        count = Activity.first.signups.count
        expect { delete "/activities/#{Activity.first.id}" }.to change(Signup, :count).by(-count)
      end

    end

    context "with an invalid ID" do
      
      it "returns an error message" do
        delete "/activities/bad_id"

        expect(response.body).to include_json({
          error: "Activity not found"
        })
      end
      
      it "returns the appropriate HTTP status code" do
        delete "/activities/bad_id"

        expect(response).to have_http_status(:not_found)
      end

    end

  end
end
