const pathName = location.pathname;
const home = document.getElementById("home");
const products = document.getElementById("products");
const aboutUs = document.getElementById("about-us");

if (pathName === "/index.html") {
  home.classList.add("active");
  products.classList.remove("active");
  aboutUs.classList.remove("active");
} else if (pathName === "/products.html") {
  home.classList.remove("active");
  products.classList.add("active");
  aboutUs.classList.remove("active");
} else if (pathName === "/about-us.html") {
  home.classList.remove("active");
  products.classList.remove("active");
  aboutUs.classList.add("active");
} else {
  home.classList.remove("active");
  products.classList.remove("active");
  aboutUs.classList.remove("active");
}
