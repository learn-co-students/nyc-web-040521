class CampersController < ApplicationController

    def index
        campers = Camper.all
        render json: campers #, exclude: :activties
    end

    def show #"/campers/:id"
        # byebug
        camper = Camper.find(params[:id])

        if camper
            render json: camper #, only: [:name] #, include: :activities
        else
            render json: {"error": "Camper not found"}, status: 404
        end
    end

    def create
        # byebug
        camper = Camper.new(camper_params)

        if camper.valid?
            camper.save
            render json: camper
        else
            render json: {errors: camper.errors.full_messages}
        end

    end

    private

    def camper_params
        params.permit(:name, :age)
    end
end
