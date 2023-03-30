// JavaScript Code

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.navbar', {
duration: 2000,
origin: 'bottom'
});

sr.reveal('.hero', {
duration: 2000,
origin: 'top',
distance: '300px'
});

sr.reveal('.services', {
duration: 2000,
origin: 'bottom',
distance: '300px',
viewFactor: 0.2
});

sr.reveal('.testimonial', {
duration: 2000,
origin: 'bottom',
distance: '300px',
viewFactor: 0.2
});

sr.reveal('.info-left', {
duration: 2000,
origin: 'left',
distance: '300px',
viewFactor: 0.2
});

sr.reveal('.info-right', {
duration: 2000,
origin: 'right',
distance: '300px',
viewFactor: 0.2
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(e) {
if (this.hash !== '') {
e.preventDefault();

const hash = this.hash;

$('html, body').animate(
  {
    scrollTop: $(hash).offset().top - 100
  },
  800
);
}
});

// Navbar Background
$(window).scroll(function() {
if ($(window).scrollTop() > 50) {
$('#navbar').css('background-color', '#333');
} else {
$('#navbar').css('background-color', 'transparent');
}
});

// Counter Up
$('.counter').counterUp({
delay: 10,
time: 2000
});

// Owl Carousel
$('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: true
},
600: {
items: 3,
nav: false
},
1000: {
items: 5,
nav: true,
loop: false
}
}
});

// Video Play
$(function() {
// Auto play modal video
$(".video").click(function () {
var theModal = $(this).data("target"),
videoSRC = $(this).attr("data-video"),
videoSRCauto = videoSRC +
"?modestbranding=1&rel=0&controls=0&autoplay=1";
$(theModal + ' iframe').attr('src', videoSRCauto);
$(theModal + ' button.close').click(function () {
$(theModal + ' iframe').attr('src', videoSRC);
});
});
});

// Contact Form
$(function () {
$('#contact-form').submit(function (e) {
e.preventDefault();
$('.alert').remove();
var name = $('#name').val();
var email = $('#email').val();
var message = $('#message').val();
var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
function isValidEmail(emailAddress) {
var pattern = /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/;
return pattern.test(emailAddress);
};
if (name == '' || !isValidEmail(email) || message == '') {
$('#contact-form').append('<div class="alert alert-danger">Please fill in all fields correctly.</div>');
} else {
$.ajax({
type: "POST",
url: "email.php",
data: dataString,
success: function () {
$('#contact-form').append('<div class="alert alert-success">Message sent successfully!</div>');
$('#name').val('');
$('#email').val('');
$('#message').val('');
}
});
}
return false;
});
});
// Smooth scrolling for internal links
$(function () {
    $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: target.offset().top
    }, 1000);
    }
    });
    });
    
    // Navbar scroll behavior
    $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
    navbar.addClass('navbar-scrolled');
    } else {
    navbar.removeClass('navbar-scrolled');
    }
    });
    
    // Testimonials slider
    $(document).ready(function () {
    $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    });
    });
    
    // Counters
    $(document).ready(function () {
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    });
    
    // Mobile menu
    $(document).ready(function () {
    $('.menu-toggle').click(function () {
    $(this).toggleClass('open');
    $('.navbar-collapse').toggleClass('show');
    });
    });
    
    // Back to top button
    $(document).ready(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('#back-to-top').fadeIn();
    } else {
    $('#back-to-top').fadeOut();
    }
    });
    $('#back-to-top').click(function () {
    $('html, body').animate({
    scrollTop: 0
    }, 1000);
    return false;
    });
    });

    function scrollToId(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      }
      