let cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});

let menuItems = document.getElementsByClassName('navbar__menu__item');
let firstActive = null;

for(let menuItem of menuItems) {
    if(menuItem.children[0].className === "navbar__menu__item__circle active")
        firstActive = menuItem.children[0];
    menuItem.addEventListener('mouseover', (event)=>{
        cursor.style.transform = 'scale(3.5)';
        cursor.style.mixBlendMode = 'multiply';
        if(menuItem.children[0] === firstActive)
            return;
        menuItem.children[0].className = "navbar__menu__item__circle active";
        firstActive.className = "navbar__menu__item__circle";
    });
    menuItem.addEventListener('mouseout', (event)=>{
        cursor.style.transform = '';
        cursor.style.mixBlendMode = 'normal';
        menuItem.children[0].className = "navbar__menu__item__circle";
        firstActive.className = "navbar__menu__item__circle active";
    });
}