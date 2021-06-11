class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities, only: [:id, :name, :difficulty]
    end

    def destroy
        # activity = Activity.find_by(id: params[:id])
        activity = Activity.find(params[:id])
        
        if activity
            activity.destroy
            render json: {}, status: 204
        else
            render json: {"error": "Activity not found"}, status: 404
        end
    end
end
