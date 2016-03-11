class DatesController < ApplicationController
  def show
    date = Showing.all.select{|showing| showing.timestamp.to_s.split(' ').first == params[:id]}
    render json: date
  end
end
