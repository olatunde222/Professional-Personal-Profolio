const hambuger = document.querySelector(".header .nav-bar .nav-list .hambuger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
// const header = document.querySelector(".header .container");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = 'rgba(211, 16, 211, 0.884)'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})


menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hambuger.classList.toggle('active');
        mobile_menu.classList.toggle('active')
    });
})