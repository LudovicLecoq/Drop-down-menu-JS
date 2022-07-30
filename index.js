const btnTriggerMenu = document.querySelector('.trigger-menu');


btnTriggerMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle("show");
})