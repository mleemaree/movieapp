class ShowingsController < ApplicationController
  def index
    @showings = Showing.all
    @movies = Movie.all
    @cinemas = Cinema.all
  end

  # def show
  #   showing = Showing.find_by(params[:id]) || 
  #   Showing.find_by(params[:timestamp]) ||  
  #   Showing.find_by(params[:cinema_id]) || 
  #   Showing.find_by(params[:movie_id])
  #   render json: showing
  # end
end
