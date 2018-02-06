class BarsController < ApplicationController
  def search
    bar_results = Bar.find_bar(params[:query])
    render json: bar_results
  end
end
