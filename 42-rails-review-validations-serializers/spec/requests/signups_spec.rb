require 'rails_helper'

RSpec.describe "Signups", type: :request do
  before do
    Camper.create(name: 'Caitlin', age: 8)
    Activity.create(name: 'Archery', difficulty: 2)
  end

  describe "POST /signups" do
    
    context "with valid data" do
      let!(:signup_params) { { camper_id: Camper.first.id, activity_id: Activity.first.id, time: 10 } }

      it 'creates a new Signup' do
        expect { post '/signups', params: signup_params }.to change(Signup, :count).by(1)
      end

      it 'returns the associated Activity data' do
        post '/signups', params: signup_params

        expect(response.body).to include_json({
          id: a_kind_of(Integer),
          name: "Archery",
          difficulty: 2
        })
      end

      it 'returns a status code of 201 (created)' do
        post '/signups', params: signup_params

        expect(response).to have_http_status(:created)
      end

    end

    context "with invalid data" do
      let!(:signup_params) { { camper_id: Camper.first.id, activity_id: Activity.first.id, time: 30 } }

      it 'does not create a new Signup' do
        expect { post '/signups', params: signup_params }.to change(Signup, :count).by(0)
      end

      it 'returns the error messages' do
        post '/signups', params: signup_params

        expect(response.body).to include_json({
          errors: a_kind_of(Array)
        })
      end

      it 'returns a status code of 422 (Unprocessable Entity)' do
        post '/signups', params: signup_params
  
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

end
