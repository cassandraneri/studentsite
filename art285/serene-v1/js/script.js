document.addEventListener('DOMContentLoaded', function () {

    // OPEN AND CLOSE SITE NAV MENU
    const mysitenav = document.querySelector('.site-nav');
    const mymenubutton = document.querySelector('.menu-button');
    mymenubutton.onclick = function () {
        if (mysitenav.getAttribute('data-navstate') === 'closed') {
            mysitenav.setAttribute('data-navstate','open');
        } else {
            mysitenav.setAttribute('data-navstate','closed');
        };
    }; 

    // SCROLL TRIGGERED ANIMATION
    let options = {
        threshold: .25
      }
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
        });
    }, options);
  
    document.querySelectorAll(".scroll-triggered").forEach((el) => {
        myobserver.observe(el);
    });
    
});