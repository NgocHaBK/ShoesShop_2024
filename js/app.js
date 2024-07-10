// banner shoes
const bd_element = document.getElementById("bg_move");
const motion_element = document.getElementById("shoes");

bd_element.addEventListener("mousemove", (e) => {
  let x = 20 - e.clientX * 0.1;
  let y = 20 - e.clientY * 0.1;

  motion_element.style.transform = `translate(${x}px,${y}px)`;
});

const bd1_element = document.getElementById("bg_move1");
const motion_element1 = document.getElementById("shoes1");
bd1_element.addEventListener("mousemove", (e) => {
  let x = 20 - e.clientX * 0.1;
  let y = 20 - e.clientY * 0.1;
  motion_element1.style.transform = `translate(${x}px,${y}px)`;
});
const bd2_element = document.getElementById("bg_move2");
const motion_element2 = document.getElementById("shoes2");
bd2_element.addEventListener("mousemove", (e) => {
  let x = 20 - e.clientX * 0.1;
  let y = 20 - e.clientY * 0.1;
  motion_element2.style.transform = `translate(${x}px,${y}px)`;
});

window.onload = function () {
  let slides = document.getElementsByClassName("banner_item");

  function addActive(slide) {
    slide.classList.add("active");
  }

  function removeActive(slide) {
    slide.classList.remove("active");
  }

  addActive(slides[0]);
  setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        setTimeout(removeActive, 350, slides[i]);
        break;
      }
      if (slides[i].classList.contains("active")) {
        setTimeout(removeActive, 350, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 1500);
};
// sale shoes
window.onload = function () {
  let slides = document.getElementsByClassName("sale_item");

  function addActive(slide) {
    slide.classList.add("active");
  }

  function removeActive(slide) {
    slide.classList.remove("active");
  }

  addActive(slides[0]);
  setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        setTimeout(removeActive, 350, slides[i]);
        break;
      }
      if (slides[i].classList.contains("active")) {
        setTimeout(removeActive, 350, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 1500);
};
