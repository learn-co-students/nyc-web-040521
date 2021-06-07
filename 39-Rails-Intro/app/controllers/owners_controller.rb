class OwnersController < ApplicationController

    def index
        # puts "Index action!!"
        # byebug
        # puts "End of action!!"
        # @name = "Vidhi" # to show in rails view

        owners = Owner.all
        render json: owners
    end
end
