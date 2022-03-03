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
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var stickyheader = document.querySelector(".sticky");
    var j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function () {
            stickyheader.setAttribute('data-navstate', 'closed');
        };
    };

});