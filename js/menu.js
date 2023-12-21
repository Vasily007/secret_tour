window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu__btn');
    const menuList = document.querySelector('.menu__list');
    
    menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('menu__list_active');
        if (menuList.classList.contains('menu__list_active')) {
            menuBtn.innerHTML = "";
            menuBtn.innerHTML = '&#10006;';
        } else {
            menuBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
            `;
        }
    });
});