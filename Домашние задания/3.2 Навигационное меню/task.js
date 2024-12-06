const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        const menuItem = link.closest('.menu__item');
        const subMenu = menuItem.querySelector('.menu_sub');
        if (subMenu) {
            event.preventDefault();
            const activeMenus = menuItem.closest('.menu').querySelectorAll('.menu_sub.menu_active');
            activeMenus.forEach((menu) => {
                if (menu !== subMenu) {
                    menu.classList.remove('menu_active');
                }
            });
            subMenu.classList.toggle('menu_active');
        }
    });
});