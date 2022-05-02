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
    leftText.innerHTML = `Stačí vyplnit krátký kontaktní formulář, který nám řekne základní informace 
    o vaší webové aplikaci, kterou potřebujete vytvořit. Jakmile víme o vaší poptávce bude dobré se 
    ještě poznat a vše probrat, abychom si ujasnili všechny detaily a celkový cíl vaší nové aplikace.`;
    await showLeft();
});

chatting.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#2 &nbsp;NAPÍŠEME KRILOVI`;
    leftText.innerHTML = `Ledový mám srdce
Pičo ledový mám pocity
Pochyby mám o tom píčo
Že to dávno nejsi ty

Zmrdi si, už dovolují
Vylejzi, vylejzaj z ulity
Dávno není holka
Holka dělá jenom cavyky

Kluk se mění v holku
Hoe mu nastavila pokyny
Kluk už není kluk vole
Kluk je tak z poloviny

Lidi co bývali znamení
Dnes mě chtěli potopit
Zmrdi dáva, dávaj ready
Chtějí mě snad asi pobavit
Říkám nemůžeš mě zničit
Nemůžeš mě zastavit
Když mám v ruce mic
Tak se všichni musí posadit

Vidím všude obrazy
Všude vidím vize
Slyším taky hlasy
Ale, ale je vyplá televize

Tenhle příběh není o vole
Ani žádný knize
Musím jít na výslech
To psaní je v dopise

Všechny vzpomínky, jsou pryč
Je to dávno pase
Jako malej kluk mi říkal
Že skončím v base

Slyším to od rodiny znovu zas
A slyším to furt dokola dva roky v kuse
Makal jsem pro rodinu
No usínal jsem v buse

Z práce je dennodenně mise
Dávám cannabis
Píčo zelený mám plíce
A nejdelší jsou rady`;
    await showLeft();
});

design.addEventListener('click', async () => {
    await hideLeft();
    leftHeader.innerHTML = `#3 &nbsp;NAVRHNEME DESIGN`;
    leftText.innerHTML = `Kdyz je obsazino tak du rysovat na damskej
Kdyz vyprcam kundu je vyprcana jak stranskej
A kdyz motam buka tak sou dlouhy jak dvanactky
Uz mi neni osmnact ale v kapse 18K<br><br>
Sorry mamo delam spinavej rap muj spinavej zivot ma stavu jak grap
Fresh jak zmrd obcas horkej az tak ze ti pokrivi ten xicht jak slap
Furt du nahoru step by step a na dne drinku krystal jak strep
Castokrat vidim dvojmo stejne se pokazdy trefim na stred`;
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

