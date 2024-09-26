let bar = document.querySelector(".bar");
let barActive = document.querySelector(".bar-active");

bar.addEventListener("click", () => {
  bar.classList.toggle("bar-active");
  document.querySelector(".nav-links").classList.toggle("nav-active");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.querySelector("header").style.boxShadow =
      "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  } else {
    document.querySelector("header").style.boxShadow = "none";
  }
});

document.getElementById("home").addEventListener("mousemove", (event) => {
  let home = document.getElementById("home");
  if (event.clientX < 300) {
    home.style.transform = "translateX(10px)";
  } else if (event.clientX > 1200) {
    home.style.transform = "translateX(-10px)";
  } else if (event.clientY < 300) {
    home.style.transform = "translateY(10px)";
  } else if (event.clientY > 600) {
    home.style.transform = "translateY(-10px)";
  } else {
    home.style.transform = "translate(0px, 0px)";
  }
});

anime({
  targets: ".main-text span",
  translateY: -50,
  delay: anime.stagger(100), // delay starts at 500ms then increase by 100ms for each elements.
  loop: true,
  direction: "alternate",
});
