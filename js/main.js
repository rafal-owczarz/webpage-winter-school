const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

const videos = gsap.utils.toArray('.courses');
gsap.set(videos, {
  opacity: 0
});

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: 'top center',
    end: 'bottom center',
    // markers: true,
    onEnter: () => {
      gsap.to(video, {
        opacity: 1
      });
    },
  });
});