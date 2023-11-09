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
    scrollTrigger: ".introvideo",
    scale: .5,
    duration: 3
});

gsap.from(".circle3 .setcount", {
    opacity: 0,
    delay: 4
});

gsap.from(".circle2 .setcount", {
    opacity: 0,
    delay: 5
});

gsap.from(".circle4 .setcount", {
    opacity: 0,
    delay: 10
});



const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause-button');

videoContainer?.addEventListener('mouseenter', () => {
    playPauseButton.style.display = 'grid';
});

videoContainer?.addEventListener('mousemove', (e) => {
    const x = e.clientX - videoContainer.getBoundingClientRect().left - 25;
    const y = e.clientY - videoContainer.getBoundingClientRect().top - 35;
    playPauseButton.style.left = `${x}px`;
    playPauseButton.style.top = `${y}px`;
});

videoContainer?.addEventListener('mouseleave', () => {
    playPauseButton.style.display = 'none';
});

playPauseButton?.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="fi fi-rr-pause"></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="fi fi-rr-play"></i>';
    }
});

// video button movement 


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

gsap.to(".ltastr", {
    scrollTrigger: {
        trigger: ".ltastr",
        scrub: 3,
        start: "500px bottom",
        end: "bottom top"
    },

    // y: 700,
    yPercent: 90,
    ease: "none"
});

gsap.to(".aline", {
    scrollTrigger: {
        trigger: ".aline",
        scrub: 3,
        start: "500px bottom",
        end: "bottom top"
    },
    backgroundColor: 'black'
});


// client logo amimation 

gsap.from(".l_box img", {
    scrollTrigger: ".l_box img",
    y: -50,
    duration: 3,
    scrub: 1
});

// testimonial section 

var swiper = new Swiper(".revSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".logoswiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    // mousewheel: true,
});

var hamburger = document.querySelector(".hamburger")
var navmenu = document.querySelector(".navmneu")

hamburger.addEventListener("click", openmenu);

function openmenu() {
    navmenu.classList.toggle("navopen");
}
