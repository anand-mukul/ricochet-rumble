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

aboutAnimination();
