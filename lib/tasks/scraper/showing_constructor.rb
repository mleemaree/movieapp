require_relative './movie_list.rb'

class AddShowings
  def initialize(movie_list, url)
    @movie_list = movie_list
    @url = url
    @mechanize = Mechanize.new
    @showing_links = []
    @showings = []
    search
  end


  def search
    page = @mechanize.get(@url)
    cinema = page.search('.mcnt').xpath('.//h1').text

    page.search('#days').xpath('.//a').each do |s_link|
      @showing_links << s_link.attributes["href"].text
    end
    add_showing
  end

  def add_showing
    @nodes = []
    @showing_links.each do |link|
      page = @mechanize.get(link)
      cinema = page.search('.mcnt').xpath('.//h1').text

      case cinema
        when "Yelmo Cines Icaria"
          cinema_id = 1
        when "Renoir Floridablanca"
          cinema_id = 2
        when "Verdi"
          cinema_id = 3
        when "Phenomena Experience"
          cinema_id = 4
        when "Méliès Cinemes"
          cinema_id = 5
        when "Cinemes Texas"
          cinema_id = 6
        when "Cinema Maldà"
          cinema_id = 7
        when "Balmes Multicines"
          cinema_id = 9
        when "Verdi Park"
          cinema_id = 10
        else
          cinema_id = nil   
      end

      page.search('.lfilmbc').each do |node| 
        @nodes << node
      end

      @nodes.each do |node|
        title = node.xpath('.//h4/a').text
        movie = Movie.all.find{ |m| m[:title] == title }
        times = node.search('.showtimes')
        times.each do |t|
          time = t.search('[itemprop="startDate"]').attr('content').value.split(' ').first
          if movie != nil && cinema_id != nil && time != nil
            Showing.find_or_create_by!(movie_id: movie[:id], cinema_id: cinema_id, timestamp: time)
          end
        end
      end
    end
  end
end