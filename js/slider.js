const glide1 = document.getElementById("glide1");
const glide2 = document.getElementById("glide2");
const glide3 = document.getElementById("glide3");

if (glide1)
  new Glide(glide1, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    hoverpause: true,
    gap: 30,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

if (glide2)
  new Glide(glide2, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    hoverpause: true,
    gap: 30,
    // autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();

if (glide3)
  new Glide(glide3, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    hoverpause: true,
    gap: 30,
    // autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
