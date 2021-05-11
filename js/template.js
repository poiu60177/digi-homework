const menu_btn = document.querySelector('.navbar-toggler.my-orderreset')
const menu = document.querySelector('.navbar-collapse')
menu.classList.remove('show')
toggleBtn()
function toggleBtn() {

    if (menu.classList.contains('show')) {

        menu_btn.innerHTML = `<i class="fas fa-bars"></i>`
    } else {

        menu_btn.innerHTML = ` <i class="fas fa-times"></i>`
    }

}
menu_btn.addEventListener('click', toggleBtn)