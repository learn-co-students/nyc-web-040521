class OwnersController < ApplicationController

    before_action :find_owner, only: [:show, :update, :destroy]

    # after_action :after_run(@results)

    def index
        # puts "Index action!!"
        # byebug
        # puts "End of action!!"
        # @name = "Vidhi" # to show in rails view

        # @results = Owner.all
        owners = Owner.all
        render json: owners

        # after_run(results)
    end
    
    def show
        # byebug
        # owner = Owner.find(params[:id])
        # owner = Owner.find_by(username: params[:user_name])
        render json: @owner
    end

    def create
        # byebug
        owner = Owner.create(owner_params)
        render json: owner
    end

    def update
        # byebug
        # owner = Owner.find(params[:id])
        # owner = find_owner
        @owner.update(owner_params)
        render json: @owner
    end

    def destroy
        # byebug
        @owner.destroy
        render json: "Owner Deleted!!"
    end

    private

    def find_owner
        @owner = Owner.find(params[:id])
    end

    def owner_params
        params.permit(:name, :age)
    end

    # def after_run(results)
    #     # puts "After Action!!!"
    #     render json: results
    # end 

end
