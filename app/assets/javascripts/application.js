// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require fullpage.js/dist/jquery.fullpage.min.js
//= require fullpage.js/vendors/jquery.easings.min.js
//= require fullpage.js/vendors/jquery.slimscroll.min.js
//= require Swiper/dist/js/swiper.js
//= require jquery-ui/jquery-ui.min.js
//= require bootstrap/dist/js/bootstrap.min.js
//= require mustache.js/mustache.min.js
//= require_tree .


$(function(){
  if (window.location.hash != "") {
    alert('choose a language');
    window.location.hash = "";
  }
//BEGIN - Fullpage JS

$('#fullpage').fullpage({
    anchors:['language-anchor', 'menu', 'movies-anchor', 'dates-anchor', 'cinema-anchor'],
    loopHorizontal: false,
    controlArrows: false,
    scrollingSpeed: 800,
    continuousVertical: false,
    normalScrollElements: '#cinemas-wrapper',
    onLeave: function(index, nextIndex, direction) {

      $('#menu-section').on('mousewheel',function(event, delta, deltaX, deltaY) {
        event.preventDefault();
        //use whichever component (deltaX or deltaY) that has the largest absolute value
        // deltaX needs negated to have natural scroll motion
        var singleDelta = (Math.abs(deltaX)>Math.abs(deltaY)) ? (-1 * deltaX) : deltaY;

        this.scrollLeft -= (singleDelta * 1.5);
        console.log(singleDelta);  
    });

    //     if(index == 2 && !sliding) {

    //         if(eo.wheelDeltaX < 100 && scope.item.swipedLeft) {

    //             sliding = true;
    //             $.fn.fullpage.moveSlideRight();
    //             slideIndex++;
    //             return false;

    //         } else if(eo.wheelDeltaX < -100 && !scope.item.swipedLeft) {

    //             sliding = true;
    //             $.fn.fullpage.moveSlideLeft();
    //             slideIndex--;
    //             return false;

    //         }

    //     } else if(sliding) {

    //         return false;

    //     }

    },

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

        sliding = false;

    }
});

$('#fullpage').delay(500).removeClass('loading');

$.fn.fullpage.setAllowScrolling(false);
$.fn.fullpage.setKeyboardScrolling(false);

//END - Fullpage JS

var urlBase = "localhost:3000"

if(window.location.href !== urlBase + "#menu/menu-anchor"){
  $('#wallet').addClass('see-me');
}




});




