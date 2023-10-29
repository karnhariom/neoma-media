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
    // y: 150,
    // x: 70,
    duration: 2,
    delay: 2,
    // scale: 5x
});

$('.hero').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });