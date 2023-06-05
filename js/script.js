const navBtn = document.querySelector('.header__nav-btn');
const crossBtn = document.querySelector('.cross')
const asideMenu = document.querySelector('.aside-menu')
const asideMenuMobile = document.querySelector('.mobile__nav-btn')

navBtn.onclick = function() {
    asideMenu.classList.toggle('aside-menu__hidden');
}

crossBtn.onclick = function(){
    asideMenu.classList.toggle('aside-menu__hidden')
}

asideMenuMobile.onclick = function() {
    asideMenu.classList.toggle('aside-menu__hidden')
}