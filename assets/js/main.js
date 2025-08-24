// ScrollReveal animations
ScrollReveal().reveal('.hero-text', {
  duration: 1000,
  origin: 'left',
  distance: '50px'
});

ScrollReveal().reveal('.hero-img', {
  duration: 1000,
  origin: 'right',
  distance: '50px'
});

ScrollReveal().reveal('.card', {
  duration: 1000,
  interval: 200,
  origin: 'bottom',
  distance: '40px'
});

ScrollReveal().reveal('.contact-flex', {
  duration: 1000,
  origin: 'bottom',
  distance: '60px'
});


window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  if (window.scrollY > 10) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
