const year = new Date().getFullYear()
const menubar = document.querySelector(".menu-bar")
const menuList = document.querySelector(".menu-list")
const menuRemoveBar = document.querySelector(".menu-remove-bar")
const navItems = document.querySelector(".nav-bar-list")
const clickMe = navItems.querySelectorAll(".click-me")

function showMenu() {
  menubar.style.display = "none"
  menuList.style.display = "block"
}

function closeMenu() {
  menubar.style.display = "block"
  menuList.style.display = "none"
}

menuRemoveBar.addEventListener("click", () => {
  closeMenu()
})

menubar.addEventListener("click", () => {
  showMenu()
})

document.querySelector("#footer-year").innerText = year
