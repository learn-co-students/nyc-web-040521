class DogsController < ApplicationController

    before_action :find_dog, only: [:show, :update, :destroy]

    def index
        dogs = Dog.all
        render json: owners
    end
    
    def show
        render json: @dog
    end

    def create
        dog = Dog.create(dog_params)
        render json: dog
    end

    def update
        @dog.update(dog_params)
        render json: @dog
    end

    def destroy
        @dog.destroy
        render json: "dog Deleted!!"
    end

    private

    def find_dog
        @dog = Dog.find(params[:id])
    end

    def dog_params
        params.permit(:name, :age, :breed, :owner_id)
    end

end
