'use strict'

const loginContainer = document.getElementById('login-container');

// para realizar o evento abaixo, necessita-se de uma variável
// classList permite manipular uma classe css
// quando o botão de cadastro é acionado, a classe move aparece no comando html em login-container
// 'toggle' adiciona ou remove o move dentro do comando html, realizando assim a movimentação dos layers
const moveOverlay = () => loginContainer.classList.toggle('move')


// EXPLICAÇÃO: addEventListener('click', aqui fica o que ele fará ou qual situação ele irá acionar ao click)
// Pegou o botão e adicionou um evento por clique para mover o lay laranja
document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)