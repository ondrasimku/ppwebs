let contactUs = document.getElementById('contact-us');
let chatting = document.getElementById('chatting');
let design = document.getElementById('design');
let coding = document.getElementById('coding');
let done = document.getElementById('done');

let leftHeader = document.getElementById('left-header');
let leftHeaderLine = document.getElementById('left-header-line');
let leftText = document.getElementById('left-text');

let icons = document.getElementsByClassName('process__time-line__icon');
let arrows = document.getElementsByClassName('process__time-line__arrow');

for (let i = 0; i < icons.length; ++i) {
    icons[i].addEventListener('click', () => {
        // Unmark active icons
        for (let y = i + 1; y < icons.length; ++y) {
            icons[y].classList.remove('active');
        }
        // Unmark active arrows
        for (let y = i - 1; y < arrows.length; ++y) {
            if (y < 0)
                continue;
            arrows[y].classList.remove('active');
        }
        // Mark icons
        for (let y = 0; y <= i; ++y) {
            icons[y].classList.add('active');
        }
        // Mark arrows
        for (let y = i - 1; y >= 0; --y) {
            arrows[y].classList.add('active');
        }
    });
}


contactUs.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#1 &nbsp;KONTAKTUJETE NÁS`;
    leftText.innerHTML = `Gratulujeme! rozhodli jste se pro první krok k úspěšnému podnikání. 
    Váš první krok začíná zde na webu, kontaktujte nás pomocí telefonního čísla, emailu, nebo formuláře. 
    My se vám obratem ozveme a domluvíme si s vámi schůzku, kde se vás budeme ptát na vaše cíle, konkurenci a plány.`;
    await showLeft();
});

chatting.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#2 &nbsp;VYŘEŠÍME NÁLEŽITOSTI`;
    leftText.innerHTML = `Ozveme se vám zpět a domluvíme se, jaký druh komunikace 
    vám bude nejvíce vyhovovat (osobní schůzky, telefonní hovory, online meetingy, emaily, etc.). 
    Poté se vás budeme ptát. Na váš produkt, vaši cílovou 
    skupinu, konkurenci, preferovaný design a mnoho dalšího. Až si budeme jistí, že toho víme vše potřebné, 
    pustíme se do designování vašeho webu`;
    await showLeft();
});

design.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#3 &nbsp;NAVRHNEME DESIGN`;
    leftText.innerHTML = `Jakmile skončí schůzka pustíme se do návrhu vašeho webu, a co nejdříve 
    se na vás obrátíme s první prototypem. Poté se domluvíme na tom, co vám na webu vyhovuje, 
    a co byste naopak chtěli jinak. Přetvoříme design podle vašich požadavků a návrh vám opět 
    zašleme, takto budeme postupovat, dokud nebudete s designem webu spokojení.`;
    await showLeft();
});

coding.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#4 &nbsp;GARGULÁK TO NAPROGRAMUJE`;
    leftText.innerHTML = `Ovládá php, v nějaké fázi. takže zhruba ví jak to funguje celé, nejčastěji php používá u Wordpresů. Plus chápe dotazy do databáze pomocí Mysql.
    BEM je metodologie zápisu tříd do html tagů. Může klidně použít je-li to vaším přáním. Ovládá HTML5 a CSS3. Poradí si s jakýmkoliv designem a někdy je nutné si vzít 
    trochu času na rozmyšlení, prostě to vymyslet. Kod má vždy zformátovaný.`;
    await showLeft();
});

done.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#5 &nbsp;DONE`;
    leftText.innerHTML = `Swag`;
    await showLeft();
});

async function hideLeft() {
    leftHeader.style.opacity = "0";
    leftText.style.opacity = "0";
    leftHeaderLine.style.opacity = "0";
    await new Promise(r => setTimeout(r, 300));
}

async function showLeft() {
    leftHeader.style.opacity = "1";
    leftText.style.opacity = "1";
    leftHeaderLine.style.opacity = "1";
}

