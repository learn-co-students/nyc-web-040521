class Api::V1::UsersController < ApplicationController

    skip_before_action :logged_in?, only: [:create, :login]

    def create
        # byebug
        user = User.create(user_params)
        # render json: user
        render json: {username: user.username, token: encode_token({user_id: user.id})}
    end

    def login
        # byebug
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            # render json: {user: UserSerializer.new(user), token: encode_token({user_id: user.id})}
            render json: {username: user.username, token: encode_token({user_id: user.id})}

        else
            render json: {error: "username or password is not correct!!"}
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
