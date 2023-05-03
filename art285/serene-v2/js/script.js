var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-next-button",
		prevEl: ".swiper-prev-button"
	},
	effect: "fade",
	loop: "infinite",
	pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        }
});

swiper.on('slideChange', function(sld) {
	document.body.setAttribute('data-sld', sld.realIndex);
})

//ripple btn
const rippleBtn = document.getElementById("ripple");
let ripples = document.createElement("span");
let cleartimeout;

//if want this effect when clicked then just add click insted of mouseover event
rippleBtn.addEventListener("mouseover", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  cleartimeout = setTimeout(() => {
    ripples.remove();
  }, 1000);
});

rippleBtn.addEventListener("mouseout", function () {
  ripples.remove(cleartimeout);
});
