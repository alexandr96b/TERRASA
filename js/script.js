$(document).ready(function () {


$(".b-menu__wrap a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
  scrollSpeed: 1500,
  offset: 80,
  highlightSelector:".b-nav a",
  forceSingleHighlight: true
});

$('.b-production-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    variableWidth: false,
    adaptiveHeight: true,
    arrows: true,
     appendArrows: '.b-production-nav',
    nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
    prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',   
    dots: false
});


$('.b-reviews-slider > .row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
  prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,   
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.b-blocks-content > .row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: true,
  appendArrows: '.b-blocks-nav',
  nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
  prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,  
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.menu-icon').click(function(){
  $('.b-menu').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-menu ul li a").length) {
    $('.b-menu').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});


$(".b-menu ul li a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 830){
        $('.b-header').addClass('active');
     } else if(scrolledpx < 831){
      $('.b-header').removeClass('active');
     }

  });







// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(55.772643, 37.678384), // ZP

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
    position: new google.maps.LatLng(55.772643, 37.678384),
    map: map,
/*    title: 'Snazzy!',
            icon: {
        url: "images/logo.svg",
        scaledSize: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(40, 80)
    }
*/
    }); 
}








});



