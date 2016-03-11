if(window.MovieApp === undefined){
  window.MovieApp = {};
}

MovieApp.movie_selection = {};
MovieApp.selected_movie = {};

$(function(){

  $('.language-select').click(function(e){
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);

    $('#date-picker').empty().removeClass('hasDatepicker');

    var lang = $(this).data('lang');
    MovieApp.movie_selection = new MovieApp(lang);
    MovieApp.movie_selection.fetchShowings();
    MovieApp.selected_movie = new MovieApp.MyShowing(lang);

    $('.lang-wallet, .lang-box').html(lang);
  });

  //BEGIN - Datepicker JQuery

  $('#date-input').change(function(){
      $('#date-picker').datepicker('setDate', $(this).val());
  });

  //END - Datepicker

  $('#cinemas').on('click', '.marker-title', function(){
  
    var cinema = $(this).data('marker');
    var name = $(this).data('title');
    $('.cinema-wallet, .cinema-box').html(name);

    MovieApp.movie_selection.filterCinemas(cinema);

    c = $.grep(MovieApp.movie_selection.all.cinemas, function(c){ return c.id === cinema});
    MovieApp.selected_movie.logCinema(c);

  },color);

  function color(){ 

    if(MovieApp.selected_movie.movie !== ""){
      $('.cinema-info').not(this)
        .removeClass('marker-visible')
                .find('ul')
                .children()
                .addClass('hidden');

      $(this).parent()
        .addClass('marker-visible')
                .find('ul')
                .children()
                .removeClass('hidden');
        }
    }

  $('.cinema-wrapper').on('click', 'button', function(){
    time = $(this).data('show');
    $('.time-wallet, .time-box').html(time);
  });


  $('.title-wrapper').on('click', '.trailer', function(){
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-vid"),
            videoSRCauto = videoSRC + "?autoplay=1&vq=hd720";

        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });

        $('.modal').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
       $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $(theModal + ' iframe').attr('src', videoSRC);
        }
    });
  });

  $('.title-wrapper').on('click', '.select', function(){
    $('#cinemas').empty();
    var that = this;
    $.grep(MovieApp.movie_selection.movies.movies, function(movie){
      if(movie.id === $(that).data('id')){
        $('.movie-wallet, .movie-box').html(movie.title);
      }
    });

    var movie = $(this).data('id');
    
    MovieApp.movie_selection.movies.filter(movie);

    m = $.grep(MovieApp.movie_selection.movies.movies, function(m){return m.id === movie});
    MovieApp.selected_movie.logMovie(m);
  });




});