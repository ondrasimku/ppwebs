let menuItems = document.getElementsByClassName('navbar__menu__item');

let firstActive = null;

for(let menuItem of menuItems) {
    if(menuItem.firstChild.className === "navbar__menu__item__circle active")
        firstActive = menuItem.firstChild;
    menuItem.addEventListener('mouseover', (event)=>{
        if(menuItem.firstChild === firstActive)
            return;
        menuItem.firstChild.className = "navbar__menu__item__circle active";
        firstActive.className = "navbar__menu__item__circle";
    });
    menuItem.addEventListener('mouseout', (event)=>{
        menuItem.firstChild.className = "navbar__menu__item__circle";
        firstActive.className = "navbar__menu__item__circle active";
    });
}