class UbersController < ApplicationController
  def search
    uber_results = Uber.find_uber(params[:query])
    render json: uber_results
  end
end