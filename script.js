const videoContainer = document.querySelector("#video-container");
const playBtn = document.querySelector("#play");

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const videoContainerAnimation = () => {
    videoContainer.addEventListener("mouseenter", function () {
      gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
      });
    });
  
    videoContainer.addEventListener("mouseleave", function () {
      gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
      });
    });
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(playBtn, {
        left: dets.x-60,
        top: dets.y-90,
      });
    });
  };
videoContainerAnimation();

const loadingAnimation = () => {
  gsap.from("#page1 h1", {
    y: 90,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.3,
  });
};
loadingAnimation();
  

document.addEventListener("mousemove", (details) => {
  gsap.to("#cursor", {
    left: details.x,
    top: details.y,
  });
});

const product = document.querySelectorAll(".child");
product.forEach(function (items) {
  items.addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: `translate(-50%, -50%) scale(1)`,
    });
  });
  items.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: `translate(-50%, -50%) scale(0)`,
    });
  });
});