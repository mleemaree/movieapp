require 'mechanize'
require 'pry'
require 'themoviedb'
require_relative './movie_list.rb'
require_relative './showing_constructor.rb'
require_relative './add_movie.rb'

class MovieConstructor
  def initialize(url)
    @url = url
    @movies = []
    @mechanize = Mechanize.new
    @nodes = []
    search_basic
  end

  def movies
    @movies
  end

  def search_basic
    page = @mechanize.get(@url)
    cinema = page.search('.mcnt').xpath('.//h1').text
    showing_links = []

    page.search('.lfilmb').each do |node| 
      @nodes << node
    end
    page.search('#days').xpath('.//a').each do |s_link|
      showing_links << s_link.attributes["href"].text
    end

    @nodes.each do |node|
      movie = {}
      actors = []
      showings = []

      movie[:title] = node.xpath('.//h4/a').text
      movie[:link] = node.xpath('.//h4/a/@href').text
      info = node.css('.info').text.split(' | ')
      cast = node.css('.cast').xpath('a').each do |actor|
        actors << actor.text
      end
      user_rating = node.css('.nota').text
      dates = node.css('[itemprop="startDate"]').each do |showing|
        showings << showing.attributes["content"].text
      end

      movie[:actor] = actors
      movie[:length] = info[0]
      movie[:country] = info[1]
      movie[:genre] = info[2]
      movie[:rating] = info[3]
      movie[:user_rating] = user_rating
      movie[:showings] = showings
      movie[:cinema] = cinema

      @movies << movie
    end
    search_link
  end

  def search_link
    @movies.each do |movie|
      mechanize = Mechanize.new
      page = mechanize.get(movie[:link])

      page.search('.infoc2').each do |node|
        genres = []

        year = node.css('.sdest').text.gsub!("Año: ", "")
        title = node.xpath('.//p[position() = 3]').text.gsub!("Título original: ", "")
        gs = node.xpath('.//p[position() = 7]').text.gsub!("Género:", "")
          if gs != nil 
            gs.split(",").each do |genre|
              genres << genre
            end
          end

        movie[:original_title] = title
        genres != nil ? movie[:genre] = genres : movie[:genre]
        movie[:year] = year
      end
    end
    search_tmdb
  end

  def search_tmdb
    api_key = 'c7d5e0590d3c7d030a066809d9f9652c' 
    Tmdb::Api.key(api_key)
    @movies.each do |movie|

      found = Tmdb::Movie.find(movie[:title])
      
      if found != []
        if found[0].overview != nil ? summary = found[0].overview : summary = ""
          summary = found[0].overview
        else
          summary = ""
        end

        if found[0].backdrop_path != nil
          poster = 'http://image.tmdb.org/t/p/original/' + found[0].backdrop_path
        elsif found[0].poster_path != nil
          poster = 'http://image.tmdb.org/t/p/original/' + found[0].poster_path
        else
          poster = ""
        end

        movie[:summary] = summary
        movie[:poster] = poster
        movie[:tmdb_id] = found[0].id 
      end
    end
    get_trailer
  end

  def get_trailer
    @movies.each do |movie|
      trailer = Tmdb::Movie.trailers(movie[:tmdb_id])
      if trailer["youtube"] == [] || trailer["youtube"] == nil
        movie[:trailer] = "https://youtube.com/embed/N4OPr_QxoFg"
      else
        movie[:trailer] = 'https://www.youtube.com/embed/' + trailer["youtube"].first["source"]
      end
    end
  end
end










