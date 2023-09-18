const menu = document.getElementById("menu");
const nav = document.getElementById("principal-nav");
const body = document.getElementsByTagName("body");
const navNome = document.querySelectorAll(".nav-nome");
const botaoInicio = document.getElementById("botao-inicio");

menu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    if(nav.style.display == '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = '';
    }
   
});

navNome.forEach((navegando) => {
    navegando.addEventListener("click", () => {
        nav.style.display = '';
        menu.classList.toggle("ativo");
    })
});