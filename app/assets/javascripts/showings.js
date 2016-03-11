(function(){

	var Showings = MovieApp.Showings = function(showings){
		var that = this;
		this.elements = {
	    	dates: '#date-picker',
	    	times: '.times-'
	   	},
	    this.templates = {
	    	times: '#times-template'
	    }

		this.showings = showings;
		this.dates = [];
		this.showings.forEach(function(date){
	      var d = date.timestamp.split('T').shift();
	      that.dates.push(d);
	    });
	}

	Showings.prototype.filter = function(day){
		var filtered = $.grep(MovieApp.movie_selection.showings.showings, function(showing){
        	return showing.timestamp.split('T').shift() == day;
        });

        var date = new MovieApp.Showings(filtered);
        date.renderDates();
        date.renderTimes();
        
	}

	Showings.prototype.renderDates = function(){
		var that = this;
		var dates = this.dates;
		$(this.elements.dates).datepicker({
	        dateFormat: "yy-mm-dd",
	        weekStart: 1,
	          altField: '#date-input',
	        onSelect: function(){
	           var day = $('#date-input').val();
	           that.filter(day);
	        },
	        beforeShowDay: function(date) {
		      if($.inArray($.datepicker.formatDate('yy-mm-dd', date ), dates) > -1){
		        return [true,"movie-available","movie-available"];
		      } else {
		        return [false,'not-available',"not-available"];
		      }
	        }
	   	});
	}

	Showings.prototype.renderTimes = function(){
		var that = this;
		this.showings.forEach(function(showing){
			var time = showing.timestamp.split('T').pop();

			var template = $(that.templates.times).html();
		      Mustache.parse(template);
		      var rendered = Mustache.render(template, {
		        time: time,
		        datetime: showing.timestamp
		    });
		    $(that.elements.times + showing.cinema_id).append(rendered);
		});
	}

})();