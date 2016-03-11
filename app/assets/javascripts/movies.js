(function(){

  var Movies = MovieApp.Movies = function(movies){
    this.movies = movies;

    this.elements = {
      movies: '#movies-target',
      modals: '#modals'
    },
    this.templates = {
      movies: '#movie-template',
      modals: '#movie-modal'
    }
  }

  Movies.prototype.filter = function(movie){
    var filtered = $.grep(MovieApp.movie_selection.showings.showings, function(showing){
      return showing.movie_id === movie;
    });

    var dates = new MovieApp.Showings(filtered);
    dates.renderDates();
    dates.renderTimes();

    var filtered_movies = $.grep(MovieApp.movie_selection.movies.movies, function(m){
      return m.id === movie;
    });
    var movies = new MovieApp.Movies(filtered_movies);
    movies.render();

    var filtered_cinemas = MovieApp.movie_selection.cinemas.cinemas.filter(function(cinema) {
        for(var i = 0; i< filtered.length; i++){
          if(filtered[i].cinema_id === cinema.id){
            return filtered[i];
          }
        }
    });
    var cinemas = new MovieApp.Cinemas(filtered_cinemas);
    cinemas.render();
    MovieApp.markerShow(cinemas.cinemas);

  }

  Movies.prototype.render = function(){
    var that = this;

    $(this.elements.movies).empty();

    this.movies.forEach(function(movie){
      var template = $(that.templates.movies).html();
      Mustache.parse(template);
      var rendered = Mustache.render(template, {
        id: movie.id,
        title: movie.title,
        length: movie.length,
        rating: movie.rating,
        country: movie.country,
        actor: movie.actor.replace(/[#\"[\]]/g, ''),
        summary: movie.summary,
        genre: movie.genre.replace(/[#\"[\]]/g, ''),
        trailer: movie.trailer,
        poster: movie.poster
      });
      $(that.elements.movies).append(rendered);

      var modal_template = $(that.templates.modals).html();
      Mustache.parse(modal_template);
      var modal_rendered = Mustache.render(modal_template,{
        id: movie.id,
        title: movie.title,
        trailer: movie.trailer
      });
      $(that.elements.modals).append(modal_rendered);
    }); 

    this.initSwiper();
  }

  Movies.prototype.initSwiper = function(){
    if(this.movies.length > 1){
      var swiper = new Swiper('.swiper-container',{
          direction: 'horizontal',
          autoplay: 10000,
          spaceBetween: 30,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          keyboardControl: true,
          speed: 800,
          observer:true,
          preloadImages: false,
          lazyLoading: true,
          lazyLoadingInPrevNext: true
      });
    }
  }

  // var Availability = MovieApp.Availability = function(lang){
  //   this.lang = lang;
  //   this.all = [];
  // }

  // Availability.prototype.fetchShowings = function(){

  //   var that = this;

  //   var show = function(response){
  //     that.all = response;
  //     that.renderMovies();
  //   }

  //   var movie_select = $.get('/languages/' + this.lang);
  //   movie_select.done(show);
  // }

  // Availability.prototype.filterDates = function(date){

  //   var showings = MovieApp.movie_selection.all.showings;

  //   var movies = $.grep(showings, function(showing, i){
  //     return showing.timestamp.split('T').shift() === date
  //   });

  //   var movies_selection = MovieApp.movie_selection.all.movies
  //   var new_movies = movies_selection.filter(function(movie) {
  //       for(var i = 0; i < movies.length; i++){
  //         if(movies[i].movie_id === movie.id){
  //           return movies[i];
  //         }
  //       }
  //   });

  //   var cinemas_selection = MovieApp.movie_selection.all.cinemas
  //   var new_cinemas = cinemas_selection.filter(function(cinema) {
  //       for(var i = 0; i < movies.length; i++){
  //         if(movies[i].cinema_id === cinema.id){
  //           return movies[i];
  //         }
  //       }
  //   });

  //   this.all.showings = movies;
  //   this.all.cinemas = new_cinemas;
  //   this.all.movies = new_movies;
  //   this.renderMovies();
  //   this.all.movies = movies_selection;
  //   this.all.cinemas = cinemas_selection;
  //   this.all.showings = showings;

  // }

  // Availability.prototype.filterMovies = function(movie){

  //   var showings = this.all.showings;
  //   var movies = this.all.movies;
  //   var cinemas = this.all.cinemas;

  //   var new_movie = $.grep(movies, function(nmovie){
  //     return nmovie.id === movie
  //   });

  //   var new_showings = $.grep(showings, function(showing){
  //     return showing.movie_id === movie
  //   });

  //   var new_cinemas = cinemas.filter(function(cinema){
  //     for(var i = 0; i < new_showings.length; i++){
  //       if(new_showings[i].cinema_id === cinema.id){
  //         return new_showings[i];
  //       }
  //     }
  //   });

  //   this.all.cinemas = new_cinemas;
  //   this.all.showings = new_showings;
  //   this.all.movies = new_movie;
  //   this.renderMovies();
  //   this.all.cinemas = cinemas;
  //   this.all.showings = showings;
  //   this.all.movies = movies;

  // }


  // Availability.prototype.filterCinemas = function(cinema){

  //   var cinemas = MovieApp.movie_selection.all.cinemas;
  //   var new_cinemas = $.grep(cinemas, function(ncinema){
  //     return ncinema.id === cinema;
  //   });

  //   var showings = MovieApp.movie_selection.all.showings;
  //   var new_showings = $.grep(showings, function(showing){
  //     return showing.cinema_id === cinema;
  //   });

  //   var movies = MovieApp.movie_selection.all.movies;
    // var new_movies = movies.filter(function(movie) {
    //     for(var i = 0; i< showings.length; i++){
    //       if(showings[i].movie_id === movie.id){
    //         return showings[i];
    //       }
    //     }
    // });
    
  //   this.all.movies = new_movies;
  //   this.renderMovies();
  //   this.all.cinemas = cinemas;
  //   this.all.movies = movies;

  // }


  // Availability.prototype.renderMovies = function(){
  //   var these_movies = ""
    
    // if(MovieApp.selected_movie.movie = {}){
    //   these_movies = this.all.movies
    // }else{
    //   these_movies = MovieApp.selected_movie.movie[0]
    // }

    // $('#movies-target').empty();
    // these_movies.forEach(function(movie){
    //   var template = $('#movie-template').html();
    //   Mustache.parse(template);
    //   var rendered = Mustache.render(template, {
    //     id: movie.id,
    //     title: movie.title,
    //     length: movie.length,
    //     rating: movie.rating,
    //     country: movie.country,
    //     actor: movie.actor.replace(/[#\"[\]]/g, ''),
    //     summary: movie.summary,
    //     genre: movie.genre.replace(/[#\"[\]]/g, ''),
    //     trailer: movie.trailer,
    //     poster: movie.poster
    //   });
    //   $('#movies-target').append(rendered);

    //   var modal_template = $('#movie-modal').html();
    //   Mustache.parse(modal_template);
    //   var modal_rendered = Mustache.render(modal_template,{
    //     id: movie.id,
    //     title: movie.title,
    //     trailer: movie.trailer
    //   });
    //   $('#modals').append(modal_rendered);
    // });    

  //   //BEGIN - Swiper Movies
    // if(these_movies.length > 1){
    //     var swiper = new Swiper('.swiper-container',{
    //         direction: 'horizontal',
    //         autoplay: 10000,
    //         spaceBetween: 30,
    //         pagination: '.swiper-pagination',
    //         paginationClickable: true,
    //         keyboardControl: true,
    //         speed: 800,
    //       observer:true,
    //       preloadImages: false,
    //       lazyLoading: true,
    //       lazyLoadingInPrevNext: true
    //     });
  //   }

  //   //END - Swiper Movies
    
  //   this.renderDates();

  // }

  // Availability.prototype.renderDates = function(){
  //   $('#date-picker').empty().removeClass('hasDatepicker');
  //   var selected_dates = [];

  //   this.all.showings.forEach(function(date){
  //     var time = date.timestamp.split('T').shift();
  //     selected_dates.push(time);
  //   });

  //   $('#date-picker').datepicker({
  //     dateFormat: "yy-mm-dd",
  //     weekStart: 1,
  //       altField: '#date-input',
  //       showOtherMonths: true,
  //       selectOtherMonths: true,
  //     beforeShowDay: function(date) {
  //         if($.inArray($.datepicker.formatDate('yy-mm-dd', date ), selected_dates) > -1)
  //         {
  //             return [true,"movie-available","movie-available"];
  //         }
  //         else
  //         {
  //             return [false,'not-available',"not-available"];

  //         }
  //     },
  //     onSelect: function(){
  //           value = $('#date-input').val();

  //           MovieApp.selected_movie.logDate(value);
  //           var wallet_value = new Date(value);
  //           var new_value = wallet_value.toString().split(' ').slice(0,3).toString().replace(/,/g, ' ');
  //           $('.date-wallet, .date-box').html(new_value);
            
  //           MovieApp.movie_selection.filterDates(value);
  //     }

  //   });

  //   this.renderCinemas();
  // }


  // Availability.prototype.renderCinemas = function(){

  //   $('#cinemas').empty();

  //   if (this.all.cinemas.length < 1){
  //     no_cinema = $('<h3>').html('No Cinemas')
  //     $('#cinemas').html(no_cinema);
  //   }else{
  //     this.all.cinemas.forEach(function(cinema){
  //       var template = $('#cinemas-template').html();
  //       Mustache.parse(template);
  //       var rendered = Mustache.render(template, {
  //         name: cinema.name,
  //         location: cinema.location,
  //         id: cinema.id
  //       });
  //       $('#cinemas').append(rendered);
  //     });
  //   }

  //   MovieApp.markerShow();

  //   this.renderTimes();
  // }


  // Availability.prototype.renderTimes = function(){

  //   this.all.showings.forEach(function(showing){

  //     time = new Date(showing.timestamp);
  //     timeString = (time.getHours() + 'h' + time.getMinutes()).toString();

  //     var template = $('#times-template').html();
  //     Mustache.parse(template);
  //     var rendered = Mustache.render(template, {
  //       time: timeString,
  //       datetime: showing.timestamp
  //     });
  //     $('.times-' + showing.cinema_id).append(rendered);
  //   });
  // }



})();