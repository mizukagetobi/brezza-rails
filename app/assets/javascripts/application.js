// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery/jquery-3.1.1.min.js
//= require jquery_ujs
//= require bootstrap-sprockets
//= require metisMenu/jquery.metisMenu.js
//= require pace/pace.min.js
//= require slimscroll/jquery.slimscroll.min.js
//= require steps/jquery.steps.min.js
//= require validate/jquery.validate.min.js
//= require wow
//= require mixitup
//= require bootstrap-colorpicker
//= require jquery.minicolors
//= require select2
//= require turbolinks
//= require_tree .



/*=============================================================================
            Funcion para Igualar el Tamaño de 2 o mas Elementos
=============================================================================*/

function alturasIguales(elemento){
        $('.chosen-select').chosen({width: "100%"});

    var altura_elemento_base = 0;

    jQuery(elemento).each(function() {
            jQuery(this).height('auto');
    });

    jQuery(elemento).each(function() {
        if(altura_elemento_base < jQuery(this).height()){
            altura_elemento_base = jQuery(this).height();
        }
    });

    jQuery(elemento).each(function() {
        jQuery(this).height(altura_elemento_base);
    });
}

/*=============================================================================
            Funcion para slider testimonio
=============================================================================*/


$(document).ready(function () {
  //rotation speed and timer
  var speed = 5000;
  
  var run = setInterval(rotate, speed);
  var slides = $('.slide');
  var container = $('#slides ul');
  var elm = container.find(':first-child').prop("tagName");
  var item_width = container.width();
  var previous = 'prev'; //id of previous button
  var next = 'next'; //id of next button
  slides.width(item_width); //set the slides to the correct pixel width
  container.parent().width(item_width);
  container.width(slides.length * item_width); //set the slides container to the correct total width
  container.find(elm + ':first').before(container.find(elm + ':last'));
  resetSlides();
  
  
  //if user clicked on prev button
  
  $('#buttons a').click(function (e) {
    //slide the item
    
    if (container.is(':animated')) {
      return false;
    }
    if (e.target.id == previous) {
      container.stop().animate({
        'left': 0
      }, 1500, function () {
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();
      });
    }
    
    if (e.target.id == next) {
      container.stop().animate({
        'left': item_width * -2
      }, 1500, function () {
        container.find(elm + ':last').after(container.find(elm + ':first'));
        resetSlides();
      });
    }
    
    //cancel the link behavior      
    return false;
    
  });
  
  //if mouse hover, pause the auto rotation, otherwise rotate it  
  container.parent().mouseenter(function () {
    clearInterval(run);
  }).mouseleave(function () {
    run = setInterval(rotate, speed);
  });
  
  
  function resetSlides() {
    //and adjust the container so current is in the frame
    container.css({
      'left': -1 * item_width
    });
  }
  
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
  $('#next').click();
}