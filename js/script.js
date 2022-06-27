/*
1- Abrir modal
2- Fechar modal
3 - escurecer fundo ao abrir modal
4 - 3 tamanhos de modal
5 - Fechar ao clicar fora da modal
*/

function openModal(modal) {
    let openM = document.querySelector(modal)
    openM.style.display = 'block'
    document.getElementById('area-modal').style.background = '#06568F'
}

function closeModal(modal) {
    let closeM = document.querySelector(modal)
    closeM.style.display = 'none'
    document.getElementById('area-modal').style.background = '#1488DB'
}