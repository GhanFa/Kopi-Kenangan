// elemen tombol pada nav
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

// toggle class active hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu diklik
hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active shopping cart
const ShoppingCart = document.querySelector(".shopping-cart");
shoppingCartButton.onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  e.preventDefault();
};

// tutup  ketika klik diluar elemen
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !shoppingCartButton.contains(e.target) &&
    !ShoppingCart.contains(e.target)
  ) {
    ShoppingCart.classList.remove("active");
  }
});

const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const itemDetailModal = document.querySelector(".modal");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
    alert("tombol detail");
  };
});
document.querySelector(".close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
