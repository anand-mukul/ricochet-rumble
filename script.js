const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBottom = document.getElementById("nav-bottom");

hamburgerMenu.addEventListener("click", function () {
  navBottom.classList.toggle("active");
});

hamburgerMenu.addEventListener("touchstart", function () {
  navBottom.classList.toggle("active");
});

function aboutAnimination() {
  var aboutRightListAll = document.querySelectorAll(".about-right-list");
  aboutRightListAll.forEach(function (hover) {
    hover.addEventListener("mouseenter", handleHover);
    hover.addEventListener("mouseleave", handleLeave);
    hover.addEventListener("mousemove", handleMove);

    hover.addEventListener("touchstart", handleHover);
    hover.addEventListener("touchend", handleLeave);
    hover.addEventListener("touchmove", handleMove);
  });

  function handleHover() {
    gsap.to(this.childNodes[3], { opacity: 1, scale: 1 });
  }

  function handleLeave() {
    gsap.to(this.childNodes[3], { opacity: 0, scale: 0 });
  }

  function handleMove(dets) {
    var touch = dets.touches ? dets.touches[0] : dets;
    gsap.to(this.childNodes[3], {
      x: touch.clientX - this.getBoundingClientRect().x - 50,
      y: touch.clientY - this.getBoundingClientRect().y - 85,
      duration: 0.5,
      ease: "power2.out",
    });
  }
}

function rulesVideo() {
  var rulesCenter = document.querySelector("#rules-video-center");
  var video = document.querySelector("#rules video");

  function playVideo() {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  }

  function pauseVideo() {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  }

  rulesCenter.addEventListener("click", playVideo);
  rulesCenter.addEventListener("touchstart", playVideo);
  video.addEventListener("click", pauseVideo);
  video.addEventListener("touchstart", pauseVideo);
}

aboutAnimination();
rulesVideo();
