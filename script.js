
let year = new Date().getFullYear();

document.querySelector('#footer-year').innerText = year;

let menubar = document.querySelector('.menu-bar');
let menuList = document.querySelector('.menu-list');
let menuRemoveBar = document.querySelector('.menu-remove-bar');

function showMenu(){
  menubar.style.display = 'none';
  menuList.style.display = 'block';
}

function closeMenu(){
  menuRemoveBar.style.display = 'none';
  menubar.style.display = 'block';
  menuList.remove();
}

menubar.onclick = () => {
  showMenu();
}

menuRemoveBar.onclick = () => {
  closeMenu();
}