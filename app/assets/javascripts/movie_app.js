var MovieApp = function(lang){
    this.lang = lang;
    this.cinemas = {};
    this.movies = {};
    this.showings = {};
}

MovieApp.prototype.fetchShowings = function(){
	var that = this;
    var show = function(response){
      that.cinemas = new MovieApp.Cinemas(response.cinemas);
      that.movies = new MovieApp.Movies(response.movies);
      that.showings = new MovieApp.Showings(response.showings);
      that.render();
    }

    var movie_select = $.get('/languages/' + this.lang);
    movie_select.done(show);
}

MovieApp.prototype.render = function(){
  this.cinemas.render();
	this.movies.render();
  this.showings.renderDates();
  this.showings.renderTimes();
}