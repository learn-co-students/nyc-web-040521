class ToysController < ApplicationController

    def index
        toys = Toy.all
        render json: toys
    end

    def create
        # byebug
        toy = Toy.create(toy_params)
        # render json: {toy: toy, message: "Toy created!!"}
        render json: toy, only: [:id, :name, :image, :likes]

    end

    def update
        toy = Toy.find(params[:id])
        toy.update(toy_params)
        render json: toy
    end

    def destroy
        toy = Toy.find(params[:id])
        toy.destroy
        render json: {message: "Toy is donated!!"}
    end

    def details
        # byebug
        toys = if params[:isaac]
                    Toy.find_by(name: params[:isaac])
                else
                    Toy.all
                end
        
        render json: toys

    end

    def mostLikes
        byebug
        toy = Toy.most_likes(params[:likes])
        render json: toy
    end

    private

    def toy_params
        params.permit(:name, :image, :likes)
    end
end
