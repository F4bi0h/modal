/*
1- Abrir modal
2- Fechar modal
3 - escurecer fundo ao abrir modal
4 - 3 tamanhos de modal
5 - Fechar ao clicar fora da modal
*/

let modal1 = document.getElementById('modal1')
let modal2 = document.getElementById('modal2')
let modal3 = document.getElementById('modal3')
let escurecerTela = document.getElementById('area-modal')


function abrirModal1() {
    modal1.style.display = 'block'
    escurecerTela.style.background = '#06568F'

}

function abrirModal2() {
    modal2.style.display = 'block'
    escurecerTela.style.background = '#06568F'

}

function abrirModal3() {
    modal3.style.display = 'block'
    escurecerTela.style.background = '#06568F'

}


function fecharModal() {
    modal1.style.display = 'none'
    modal2.style.display = 'none'
    modal3.style.display = 'none'
    escurecerTela.style.background = '#1488DB'
}