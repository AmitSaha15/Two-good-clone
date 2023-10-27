function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation()

function navBarAnimation(){
  gsap.to("#nav-part1 svg",{
    transform: "translateY(-100%)",
    scrollTrigger:{
      trrigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub:true
    }
  })
  gsap.to("#nav-part2 #links",{
    transform: "translateY(-100%)",
    opacity:0,
    scrollTrigger:{
      trrigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub:true
    }
  })
}
navBarAnimation()


const videoContainerAnimation = () => {
  const videoContainer = document.querySelector("#video-container");
  const playBtn = document.querySelector("#play");
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
    stagger: 0.3
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.3
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