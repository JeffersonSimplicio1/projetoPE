console.log("JavaScript do ProjetoPE carregado!");

const botao = document.getElementById("btMenu"); // Encontra o botão do html com o id "btMenu"
const menuHamburguer = document.getElementById("menu");

function alternarMenu(){
    
    menuHamburguer.classList.toggle("menu-aberto");
    if (menuHamburguer.classList.contains("menu-aberto")){
        botao.innerText = "✕";
    } else{
        botao.innerText = "☰";
    }
    
}
botao.addEventListener("click", alternarMenu); // Quando clicar no botão ele vai chamar a função alterarMenu que por sua vez, vai exibir o menu ou esconder.
