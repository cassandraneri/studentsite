document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function() {
        if (menunav.getAttribute('data-navstate') === 'open') {
            // if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            //else (if false) do this:
            menunav.setAttribute('data-navstate', 'open');
        };

});


    //STICKY NAV LINKS TOGGLE MENU NAV
    const stickynavlinks = document.querySelectorAll(".sticky nav a");
    const stickyheader = document.querySelector(".sticky");
    let j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function () {
            stickyheader.setAttribute('data-navstate', 'closed');
        };
    };

});

const swiper = new Swiper('.swiper', {
    // Optional parameters
  slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });