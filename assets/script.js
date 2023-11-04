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

const ctl = gsap.timeline();

ctl.to(".circle2 .setcont1", {
    rotate: 180,
    scrollTrigger: {
        pin: true,
        trigger: ".appr_grp",
        scrub: 5,
        scroller: "body",
        // pin: true
    },
});


// client logo amimation 

gsap.from(".l_box img", {
    scrollTrigger: ".l_box img",
    y: -50,
    duration: 3,
    scrub: 1
});


// video button movement 
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


// testimonial section 

var swiper = new Swiper(".revSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var hamburger = document.querySelector(".hamburger")
var navmenu = document.querySelector(".navmneu")

hamburger.addEventListener("click", openmenu);

function openmenu() {
    navmenu.classList.toggle("navopen");
}

jQuery('.odometer').appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
        var countNumber = jQuery(this).attr("data-count");
        jQuery(this).html(countNumber);
    });
});