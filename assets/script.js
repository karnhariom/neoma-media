gsap.from(".area1", {
    rotate: 10,
    duration: 2
});

gsap.from(".area2", {
    rotate: -10,
    duration: 2
});

gsap.from(".earth-image", {
    opacity: 0,
    duration: 2,
    delay: 2,
});

gsap.from(".introvideo", {
    scrollTrigger: ".introvideo", // start the animation when ".box" enters the viewport (once)
    scale: .5,
    duration: 3
});

gsap.from(".innerrocket", {
    scrollTrigger: {
        trigger: ".innerrocket",
        scrub: true,
        start: "top bottom",
        end: "top top"
    },

    xPercent: -800,
    y: -500,
    transformOrigin: "left right",
    ease: "none"
});

var swiper = new Swiper(".revSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });