const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.images');



botoescarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click',() => {
        

        desativarBotaoSelecionado();


        selecionarBotao(botao);
        

        esconderImagemAtiva();

        mostrarImagemFundo(indice);
    })
})
        

 


function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('selecionada');
}

function selecionarBotao(botao) {
    botao.classList.add('selected');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.selecionada');
    imagemAtiva.classList.remove('selecionada');
}

function desativarBotaoSelecionado() {
    const botaoselecionado = document.querySelector('.selected');
    botaoselecionado.classList.remove('selected');
}
   