require_relative './movie_constructor.rb'
require 'pry'
require 'json'

class MovieList
  def initialize(cinemas)
    @cinemas = cinemas
    @movie_list = []
    create
  end

  def create
    @cinemas.each do |cinema|
      cinema.movies.each do |movie|
        if @movie_list.include?(movie) == false
          @movie_list << movie
        end
      end
    end
  end

  def list
    @movie_list
  end
end