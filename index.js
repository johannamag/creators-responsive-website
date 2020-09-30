function handleNav() {
  const nav = document.getElementById("main-nav");
  const ham = document.getElementById("hamburger");

  if (!nav.classList.contains("main-nav--active")) {
    nav.classList.add("main-nav--active");
    ham.classList.add("hamburger--active");
  } else {
    nav.classList.remove("main-nav--active");
    ham.classList.remove("hamburger--active");
  }
}
