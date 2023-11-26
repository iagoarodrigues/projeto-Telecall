/* MODO NOTURNO*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode"); 
}

/* MODO BAIXA VISAO*/
// function letra() {
//     var acessivel = document.body;
//     acessivel.classList.toggle("acessivel");
// }



/* VOLTAR AO TOPO*/
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para IE, Firefox, Chrome, Opera, Safari
}

/* Exibir ou ocultar o botão de volta ao topo com base no rolar da página*/
window.onscroll = function() { mostrarOcultarBotao(); };

function mostrarOcultarBotao() {
    var botao = document.getElementById("btnVoltarTopo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
}