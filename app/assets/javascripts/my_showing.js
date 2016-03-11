var MyShowing = MovieApp.MyShowing = function(lang){
  this.lang = lang;
  this.date = '';
  this.cinema = {};
  this.movie = {};
}

MyShowing.prototype.logDate = function(date){
  this.date = date;
}

MyShowing.prototype.logCinema = function(cinema){
  this.cinema = cinema;
}

MyShowing.prototype.logMovie = function(movie){
  this.movie = movie;
}