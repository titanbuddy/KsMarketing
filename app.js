const burger = document.querySelector('.burger');
const navLink = document.querySelector('nav .links');
const linksDropdown = document.querySelector('.links-dropdown');
const societyLink = document.querySelector('.society-link a');
societyLink.addEventListener('click', () => {
    linksDropdown.classList.toggle('dropdown-appear')
});
burger.addEventListener('click', ()=> {
    navLink.classList.toggle('nav-active');
    
});