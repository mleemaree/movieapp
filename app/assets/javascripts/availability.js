// (function(){

// var Availability = MovieApp.Availability = function(lang){
// 	this.lang = lang;
// 	this.movies = new Movies();
// 	this.cinemas = new Cinemas();
// 	this.showings = new Showings();
// }


// var Available = MovieApp.Available = function(lang){
//   this.lang = lang;
//   this.movies = [];
//   this.cinemas = [];
//   this.showings = [];
// }

// Available.prototype.fetch = function(){
//   var that = this;

//   var show = function(response){
//     that.movies = response.movies;
//     that.cinemas = response.cinemas;
//     that.showings = response.showings;
//     that.render();
//   }

//   var movie_select = $.get('/languages/' + this.lang);
//   movie_select.done(show);
// }

// Available.prototype.render = function(){
//   var movies = {
//     template: '#movie-template',
//     element: '#movies-target'
//   };

//   var modals = {
//     template: '#movie-modal',
//     element: '#modals'
//   };

//   parse: function(){
//     // Mustache.parse(this.templates.movies.html());
//     // Mustace.parse(this.templates.modals.html());
//   },

  // renderMovies: function(){
  //   var rendered_movies = Mustache.render(movies.template, {
  //     id: movie.id,
  //     title: movie.title,
  //     rating: movie.rating,
  //     length: movie.length,
  //     actor: movie.actor.replace(/[#\"[\]]/g, ''),
  //     summary: movie.summary,
  //     genre: movie.genre.replace(/[#\"[\]]/g, ''),
  //     trailer: movie.trailer,
  //     poster: 'assets/' + movie.poster
  //   });
  // },

  // renderModals: function(){
  //   var rendered_modals = Mustache.render(modals.template,{
  //     id: movie.id,
  //     title: movie.title,
  //     trailer: movie.trailer
  //   });
  // },

  // append: function(){
  //   movies.element.append(rendered_movies);
  //   modals.element.append(rendered_modals);
  // }

// }


// })();