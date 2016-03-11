require_relative './movie_list.rb'
class AddMovie
  def initialize(list)
    @movie_list = list
    @movies = []
    create
  end

  def create
    @movie_list.list.each do |movie|
      case movie[:country]
        when "EE.UU."
          language = "english"
        when  "Irlanda"
          language = "english"
        when "Canadá"
          language = "english"
        when "Reino Unido"
          language = "english"
        when "Francia"
          language = "french"
        when "España"
          language = "spanish"
        when "Colombia"
          language = "spanish"
        else
          language = "other"
      end

      m = Movie.create!(poster: movie[:poster], title: movie[:original_title] || movie[:title], 
        rating: movie[:rating].to_i, user_rating: movie[:user_rating].to_i,
        length: movie[:length], actor: movie[:actor], summary: movie[:summary],
        genre: movie[:genre], country: movie[:country], trailer: movie[:trailer], language: language)
    end

  end
end