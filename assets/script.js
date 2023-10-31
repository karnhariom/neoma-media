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
        scrub: 3,
        start: "500px bottom",
        end: "bottom top"
    },

    xPercent: -800,
    y: -500,
    transformOrigin: "left right",
    ease: "none"
});

// video button movement 
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause-button');

videoContainer.addEventListener('mouseenter', () => {
    playPauseButton.style.display = 'grid';
});

videoContainer.addEventListener('mousemove', (e) => {
    const x = e.clientX - videoContainer.getBoundingClientRect().left -25;
    const y = e.clientY - videoContainer.getBoundingClientRect().top -35;
    playPauseButton.style.left = `${x}px`;
    playPauseButton.style.top = `${y}px`;
});

videoContainer.addEventListener('mouseleave', () => {
    playPauseButton.style.display = 'none';
});

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fi fi-rr-pause"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fi fi-rr-play"></i>';
    }
});


// testimonial section 

var swiper = new Swiper(".revSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });