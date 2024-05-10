function aboutAnimination() {
  var aboutRightListAll = document.querySelectorAll(".about-right-list");
  aboutRightListAll.forEach(function (hover) {
    hover.addEventListener("mouseenter", function () {
      gsap.to(hover.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    hover.addEventListener("mouseleave", function () {
      gsap.to(hover.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    hover.addEventListener("mousemove", function (dets) {
      gsap.to(hover.childNodes[3], {
        x: dets.x - hover.getBoundingClientRect().x - 50,
        y: dets.y - hover.getBoundingClientRect().y - 85,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
}

function rulesVideo() {
  var rulesCenter = document.querySelector("#rules-video-center");
  var video = document.querySelector("#rules video");
  rulesCenter.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

aboutAnimination();
rulesVideo();
