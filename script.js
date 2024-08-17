let crsr = document.querySelector("#cursor");
let b = document.querySelector("#cursor-blur");
const loadMoreElements = document.querySelectorAll(".load-more");

document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  b.style.left = dets.x - 200 + "px";
  b.style.top = dets.y - 200 + "px";
});

gsap.to("#nav", {
  backgroundColor: "black",
  height: "120px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

loadMoreElements.forEach((loadMore) => {
  const h4 = loadMore.querySelector("h4");

  loadMore.addEventListener("mouseenter", () => {
    gsap.fromTo(
      h4,
      { y: -50 }, // Start position (50px above)
      { y: 0, duration: 0.5, ease: "power2.out" } // End position (original position)
    );
  });
});

Shery.imageEffect(".imgContainer", {
  style: 6,
  // debug: true,
  gooey: true,
  config: {
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.61, range: [0, 1] },
    zindex: { value: "99", range: [-9999999, 9999999] },
    aspect: { value: 0.746682187099226 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.39, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.76, range: [0, 10] },
    metaball: { value: 0.38, range: [0, 2] },
    discard_threshold: { value: 0.39, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.46, range: [0, 2] },
    noise_scale: { value: 4.58, range: [0, 100] },
  },
});

document.querySelectorAll(".hover-word").forEach((word) => {
  word.addEventListener("mouseenter", function () {
    const imageSrc = this.getAttribute("data-image");
    const hoverImage = document.getElementById("hover-image");
    hoverImage.src = imageSrc;
    hoverImage.style.display = "block";

    gsap.to(hoverImage, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  word.addEventListener("mouseleave", function () {
    const hoverImage = document.getElementById("hover-image");

    gsap.to(hoverImage, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => {
        hoverImage.style.display = "none";
      },
    });
  });
});

Shery.makeMagnet("#nav h4", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue >= 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%";

    let delay = Math.floor(Math.random() * 100) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();

// startLoader();

// gsap.to(".counter", 0.25, {
//   delay : 3.5,
//   opacity : 0,
// });

// gsap.to(".bar", 1.5, {
//   delay : 3.5,
//   height : 0,
//   stagger  : {
//     amount : 0.5,
//   },
//   ease : "power4.inOut",
// })

let tl = gsap.timeline();

tl.to(".counter", 0.25, {
  delay: 3,
  opacity: 0,
});

tl.from("#nav img", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});

tl.from("#nav h4", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});

tl.from(".up", {
  y: 1200,
  duration: 1,
  stagger: 0.4,
});

function lenis() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenis();

