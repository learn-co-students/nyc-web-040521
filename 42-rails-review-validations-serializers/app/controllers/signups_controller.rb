class SignupsController < ApplicationController

    def create
        signup = Signup.new(signup_params)

        if signup.valid?
            signup.save
            render json: signup
        else
            render json: {errors: signup.errors.full_messages}
        end
    end

    private

    def signup_params
        params.permit(:camper_id, :activity_id, :time)
    end
end
