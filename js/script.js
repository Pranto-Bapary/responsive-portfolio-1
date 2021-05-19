/*---------------
Preloader
--------------*/
$(window).on('load', function () {
  $('.preloader').fadeOut('slow');
});

/*----------------------
Navigation On Scroll
-----------------------*/
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
});

/*------------------
Hamburger Menu
 ------------------*/
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navigation.classList.toggle('active');
});

/*-------------------
Close Menu On Click
--------------------*/
navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navigation.classList.remove('active');

  });
});

/*-------------------
Scroll to Top
-------------------*/
$(window).scroll(() => {
  if ($(this).scrollTop() > 200) {
    $('.topBtn').fadeIn();
  } else {
    $('.topBtn').fadeOut();
  }
});

$('.topBtn').click(() => {
  $('html, body').animate({
    scrollTop: 0
  }, 0);
});

/*-------------------
Reveal Animation
-------------------*/
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
s
/*----------------------
Active Link in Navbar
----------------------*/
$(document).on('click', '.navigation a', function () {
  $(this).addClass('active').siblings().removeClass('active');
});