// (function(){

// Showing.prototype.renderMovies = function(){
//     var that = this;
//     this.all.movies.forEach(function(movie){
//       var template = $('#movie-template').html();
//       Mustache.parse(template);
//       var rendered = Mustache.render(template, {
//         id: movie.id,
//         title: movie.title,
//         rating: movie.rating,
//         length: movie.length,
//         actor: movie.actor.replace(/[#\"[\]]/g, ''),
//         summary: movie.summary,
//         genre: movie.genre.replace(/[#\"[\]]/g, ''),
//         trailer: movie.trailer,
//         poster: 'assets/' + movie.poster
//       });
//       $('#movies-target').append(rendered);
//     });    

//     //BEGIN - Swiper Movies

//         var swiper = new Swiper('.swiper-container',{
//             direction: 'horizontal',
//             autoplay: 10000,
//             spaceBetween: 30,
//             keyboardControl: true,
//             speed: 1000,
//             loop:true
//         });


//     //END - Swiper Movies
    


//     //if movie is selected
//     this.renderDates();

//   }

// })();