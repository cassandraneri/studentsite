document.addEventListener('DOMContentLoaded', function() {

/* TOGGLE NAV MOBILE MENU FOR SMALL SCREENS */
const menubuton = document.querySelector('.menu-button');
const menunav = document.querySelector('.toggle-nav');
menubuton.addEventListener('click', function() {
   if (menunav.getAttribute('data-navstate') === 'open') {
       /* if true do this */
       menunav.setAttribute('data-navstate', 'closed');
   } else {
       /* else (if false) do this */
       menunav.setAttribute('data-navstate', 'open');
   };
});

/* STICKY NAV SCROLL LINKS FOR SINGLE PAGE SITES */
var acc = document.querySelectorAll('.accordian');
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].getElementsByTagName('h4')[0].onclick = function () {
        this.parentElement.classList.toggle("open");
    }
}
});