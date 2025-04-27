const pathName = location.pathname;
const home = document.getElementById("home");
const products = document.getElementById("products");
const aboutUs = document.getElementById("about-us");

console.log(pathName);

if (pathName === "/telefondukkanim/index.html" && pathName === "/") {
  home.classList.add("active");
  products.classList.remove("active");
  aboutUs.classList.remove("active");
} else if (pathName === "/telefondukkanim/products.html") {
  home.classList.remove("active");
  products.classList.add("active");
  aboutUs.classList.remove("active");
} else if (pathName === "/telefondukkanim/about-us.html") {
  home.classList.remove("active");
  products.classList.remove("active");
  aboutUs.classList.add("active");
} else {
  home.classList.remove("active");
  products.classList.remove("active");
  aboutUs.classList.remove("active");
}
