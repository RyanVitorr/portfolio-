
const nav = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu');

const b1 = document.getElementById('b-1');
const b2 = document.getElementById('b-2');
const b3 = document.getElementById('b-3');

/* mostrar/esconder nav-bar */

menu.addEventListener("click", () => {
    mostrarNav();

    animacaoMenu();
});

function mostrarNav() {
    if (nav.style.display == '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = '';
    }
}

function animacaoMenu() {
    if (b1.style.transform == '' && b2.style.opacity == '' && b3.style.transform == '') {
        b1.style.transform = 'translateY(8px) rotate(45deg)';
        b2.style.opacity = '0';
        b3.style.transform = 'translateY(-8px) rotate(-45deg)';
    }else {
        b1.style.transform = '';  
        b2.style.opacity = ''; 
        b3.style.transform = '';
    }
    
}

const card1 = document.getElementById('card1');
const cardH = document.getElementById('text-card1');

function mostrarHabilidade() {
   
    cardH.innerText = '80%';
}