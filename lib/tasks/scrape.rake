require_relative './scraper/movie_constructor.rb'

task :scrape => :environment do
  cinemas = [
    yelmo = 'http://www.ecartelera.com/cines/95,0,1.html',
    texas = 'http://www.ecartelera.com/cines/cinemes-texas/',
    floridablanca = 'http://www.ecartelera.com/cines/110,0,1.html',
    verdiHD = 'http://www.ecartelera.com/cines/114,0,1.html',
    verdipark = 'http://www.ecartelera.com/cines/115,0,1.html',
    malda = 'http://www.ecartelera.com/cines/cinema-malda/',
    melies = 'http://www.ecartelera.com/cines/106,0,1.html',
    phenomena = 'http://www.ecartelera.com/cines/107,0,1.html',
    balmes = 'http://www.ecartelera.com/cines/balmes-multicines/'
  ]

  cines = []

  cinemas.each do |cinema|
    cines << MovieConstructor.new(cinema)
  end

  movie_list = MovieList.new(cines)

  movies = AddMovie.new(movie_list)

  cinemas.each do |cinema|
    showings = AddShowings.new(movie_list, cinema)
  end

end