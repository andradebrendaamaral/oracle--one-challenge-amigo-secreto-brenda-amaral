function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();
  if (nome !== '') {
    amigos.push(nome);
    input.value = '';
    mostrarAmigos();
  }
}

function mostrarAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  if (amigos.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
  } else {
    resultado.innerHTML = `<li>Não há amigos na lista</li>`;
  }
}

let amigos = [];

// Função para exibir mensagem de boas-vindas
alert('Bem-vindo ao jogo do número secreto');

// Função para verificar o chute do usuário
function verificarChute() {
  let chute = prompt('Escolha um número entre 1 e 100');
  let numeroSecreto = gerarNumeroAleatorio(1, 100);
  if (parseInt(chute) === numeroSecreto) {
    alert(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
  } else if (parseInt(chute) > numeroSecreto) {
    alert('Tente um número menor.');
  } else {
    alert('Tente um número maior.');
  }
}

// Função para gerar um número aleatório dentro de um intervalo
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para limpar o campo de entrada
function limparCampo() {
  document.getElementById('amigo').value = '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  amigos = [];
  mostrarAmigos();
  limparCampo();
  exibirMensagemInicial();
}

// Função para exibir mensagem inicial
function exibirMensagemInicial() {
  const mensagem = 'Bem-vindo ao jogo do amigo secreto! Digite os nomes dos seus amigos.';
  console.log(mensagem);
  alert(mensagem);
}
