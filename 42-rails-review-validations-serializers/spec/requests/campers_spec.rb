require 'rails_helper'

RSpec.describe "Campers", type: :request do
  before do
    camper1 = Camper.create(name: 'Caitlin', age: 8)
    camper2 = Camper.create(name: 'Lizzie', age: 9)
    activity1 = Activity.create(name: 'Archery', difficulty: 2)
    activity2 = Activity.create(name: 'Swimming', difficulty: 3)
    Signup.create(camper_id: camper1.id, activity_id: activity1.id, time: 11)
    Signup.create(camper_id: camper1.id, activity_id: activity2.id, time: 12)
    Signup.create(camper_id: camper2.id, activity_id: activity2.id, time: 11)
  end

  describe "GET /campers" do
    it 'returns an array of all campers' do
      get '/campers'

      expect(response.body).to include_json([
        {
          id: a_kind_of(Integer),
          name: "Caitlin",
          age: 8
        },
        {
          id: a_kind_of(Integer),
          name: "Lizzie",
          age: 9
        }
      ])
    end

    it 'returns a status of 200 (OK)' do
      get '/campers'
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET /campers/:id" do
    
    context "with a valid ID" do

      it "returns the matching camper with their associated activities" do
        get "/campers/#{Camper.first.id}"
        expect(response.body).to include_json({
          id: a_kind_of(Integer),
          name: "Caitlin",
          age: 8,
          activities: [
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
          ]
        })
      end

      it 'returns a status of 200 (OK)' do
        get "/campers/#{Camper.first.id}"
        expect(response).to have_http_status(:ok)
      end
      
    end

    context "with an invalid ID" do
      
      it "returns an error message" do
        get "/campers/bad_id"
        expect(response.body).to include_json({
          error: "Camper not found"
        })
      end
      
      it "returns the appropriate HTTP status code" do
        get "/campers/bad_id"
        expect(response).to have_http_status(:not_found)
      end

    end

  end

  describe "POST /campers" do
    
    context "with valid data" do
      let!(:camper_params) { { name: "Zoe", age: 11 } }

      it 'creates a new Camper' do
        expect { post '/campers', params: camper_params }.to change(Camper, :count).by(1)
      end

      it 'returns the associated Camper data' do
        post '/campers', params: camper_params

        expect(response.body).to include_json({
          id: a_kind_of(Integer),
          name: "Zoe", 
          age: 11
        })
      end

      it 'returns a status code of 201 (created)' do
        post '/campers', params: camper_params

        expect(response).to have_http_status(:created)
      end

    end

    context "with invalid data" do
      let!(:camper_params) { { age: 11 } }

      it 'does not create a new Camper' do
        expect { post '/campers', params: camper_params }.to change(Camper, :count).by(0)
      end

      it 'returns the error messages' do
        post '/campers', params: camper_params

        expect(response.body).to include_json({
          errors: a_kind_of(Array)
        })
      end

      it 'returns a status code of 422 (Unprocessable Entity)' do
        post '/campers', params: camper_params
  
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

end
