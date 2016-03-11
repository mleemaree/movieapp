class MoviesController < ApplicationController
  require 'rubygems'
  require 'mechanize'
  require 'pp'
  def index
    movies = Movie.all
    render json: movies
  end

  def show
    movie = Movie.find_by id: params[:id]
    render json: movie
  end

  def scraper
    mechanize = Mechanize.new
    page = mechanize.get('http://www.ecartelera.com/cines/95,0,1.html')
    page.search('.lfilmb').each do |node| 
      
    end
  end

  def scraper_show
    # mechanize = Mechanize.new
    # page = mechanize.get('http://www.ecartelera.com/peliculas/13-horas-los-soldados-secretos-de-bengasi/')
    # @print = page.at('.infoc2').each{|node| node}
  end
end
