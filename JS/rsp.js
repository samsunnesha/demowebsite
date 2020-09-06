burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector(".nav-List")



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-classrsp')
    navList.classList.toggle('v-classrsp')
    navbar.classList.toggle('h-navrsp')

})