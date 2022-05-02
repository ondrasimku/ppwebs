let currentActiveItem   = document.getElementsByClassName('navbar__menu__item active')[0];
let cursor              = document.getElementById('cursor');

function headerLogic() {
    document.getElementById('open-menu').addEventListener('click', ()=>{
        let navbar = document.getElementById('navbar');
        navbar.className = "navbar--active";
        navbar.style.opacity = "1";
        console.log("click");
    });

    document.getElementById('close-menu').addEventListener('click', ()=>{
        let navbar = document.getElementById('navbar');
        navbar.className = "navbar";
    });
    //
    let menuItems = document.getElementsByClassName('navbar__menu__item');
    let currentActiveCircle = document.getElementsByClassName('navbar__menu__item__circle active')[0];
    console.log(currentActiveCircle);
    for(let menuItem of menuItems) {
        menuItem.addEventListener('click', ()=>{
            setActiveItem(menuItem);
        });
        menuItem.addEventListener('mouseover', (event)=>{
            itemMouseOver(menuItem);
        });

        menuItem.addEventListener('mouseout', (event)=>{
            itemMouseOut(menuItem);
        });
    }

    if(window.screen.width <= 1110)
        return;

    // Moves cursor div to position of mouse pointer
    document.addEventListener('mousemove', (event) => {
        cursor.style.left = event.pageX + 'px';
        cursor.style.top = event.pageY + 'px';
    });
}

// switches activated items, make the new one bold and shows it's circle
function setActiveItem(newItem) {
    console.log(newItem);
    currentActiveItem.children[0].className = "navbar__menu__item__circle";
    newItem.children[0].className = "navbar__menu__item__circle active"; // set circle as active
    currentActiveItem.className = "navbar__menu__item"; // unmark active item
    newItem.className = "navbar__menu__item active";
    currentActiveItem = newItem;
}

function itemMouseOver(item) {
    cursor.style.transform = 'scale(3.5)';
    cursor.style.mixBlendMode = 'multiply';
    if(item === currentActiveItem)
        return;
    item.children[0].className = "navbar__menu__item__circle active";
    currentActiveItem.children[0].className = "navbar__menu__item__circle";
}

function itemMouseOut(item) {
    cursor.style.transform = '';
    cursor.style.mixBlendMode = 'normal';
    if(item === currentActiveItem)
        return;
    item.children[0].className = "navbar__menu__item__circle";
    currentActiveItem.children[0].className = "navbar__menu__item__circle active";
}

headerLogic();

function scrollToElementByClass(className) {
    let element = document.getElementsByClassName(className)[0];
    console.log(element);
    scroll({
        top: element.offsetTop-100,
        behavior: 'smooth',
    });
}


/*
window.addEventListener("click", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
});*/