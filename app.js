let amigos = [];

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

