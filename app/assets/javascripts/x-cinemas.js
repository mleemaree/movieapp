(function(){

	var Cinemas = MovieApp.Cinemas = function(cinemas){
		this.cinemas = cinemas
		this.elements = {
			cinemas: '#cinemas'
		},
		this.templates = {
			cinemas: '#cinemas-template'
		}
	}

  Cinemas.prototype.render = function(){
  	var that = this;

    if (this.cinemas.length < 1){
      no_cinema = $('<h3>').html('No Cinemas')
      $(this.elements.cinemas).html(no_cinema);
    }else{
      this.cinemas.forEach(function(cinema){
        var template = $(that.templates.cinemas).html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, {
          name: cinema.name,
          location: cinema.location,
          id: cinema.id
        });
        $(that.elements.cinemas).append(rendered);
      });
    }
    
    MovieApp.markerShow();
  }

})();