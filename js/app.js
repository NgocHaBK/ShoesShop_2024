const emove = document.querySelectorAll(".shoes");
let xValue = 0,
  yValue = 0;
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  emove.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-30% + ${
      -xValue * speedx
    }px)) translateY(calc(-30% + ${-yValue * speedy}px))`;
  });
});
