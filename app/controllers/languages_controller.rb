class LanguagesController < ApplicationController
  def show
    @cinemas = []
    @showings = []
    @movies = Movie.all.select{|m| m.language.downcase == params[:id]}
    @movies.each do |movie|
      movie.cinemas.each do |cinema|
        if @cinemas.include?(cinema) == false
          @cinemas << cinema
        end
      end
    end
    @movies.each do |movie|
      movie.showings.each do |showing|
        @showings << showing
      end
    end
  end
end
