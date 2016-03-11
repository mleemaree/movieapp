class CinemasController < ApplicationController
  def index
    cinemas = Cinema.all
    render json: cinemas
  end

  def show
    cinema = Cinema.find_by(params[:id])
    render json: cinema
  end
end
