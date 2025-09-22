// Array que armazena os nomes
let amigos = [];

// Seletores principais
let campoNome = document.querySelector('#campo-nome');
let listaAmigos = document.querySelector('#lista-amigos');
let resultado = document.querySelector('#resultado');

// Função genérica para exibir texto em um elemento
function exibirTextoNaTela(seletor, texto) {
  let elemento = document.querySelector(seletor);
  elemento.textContent = texto;
}

// Adiciona um novo amigo ao array
function adicionarAmigo() {
  let nome = campoNome.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  amigos.push(nome);
  console.log("Lista de amigos atualizada:", amigos);

  campoNome.value = "";
  atualizarLista();
}

// Atualiza a lista HTML exibida
function atualizarLista() {
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];

    // Alternar riscado
    li.onclick = () => li.classList.toggle("completed");

    // Botão de excluir
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      removerAmigo(i);
    };

    li.appendChild(deleteBtn);
    listaAmigos.appendChild(li);
  }
}

// Remove amigo da lista
function removerAmigo(indice) {
  amigos.splice(indice, 1);
  console.log("Amigo removido. Lista agora:", amigos);
  atualizarLista();
}

// Gera índice aleatório (função com retorno)
function gerarIndiceAleatorio() {
  return Math.floor(Math.random() * amigos.length);
}

// Sorteia um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  let indice = gerarIndiceAleatorio();
  let sorteado = amigos[indice];

  exibirTextoNaTela('#resultado', `🎉 O amigo sorteado é: ${sorteado}`);
  console.log("Amigo sorteado:", sorteado);
}
