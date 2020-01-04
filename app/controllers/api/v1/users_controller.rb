class Api::V1::UsersController < ApplicationController
  def index
    users = User.all

    @users = users.map(&:to_resource)
    render json: @users
  end
end