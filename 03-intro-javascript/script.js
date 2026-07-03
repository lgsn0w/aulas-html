// ============================================================
// Como o JavaScript funciona com o HTML
//
// O JS enxerga a página como uma árvore de elementos: o DOM.
// Para mexer em um elemento, primeiro você o "encontra" pelo ID,
// depois faz o que quiser com ele.
//
// document.getElementById("id-do-elemento")  → encontra o elemento
// elemento.textContent = "..."               → muda o texto
// elemento.style.propriedade = "..."         → muda o estilo
// ============================================================


// --- EXEMPLO 1: mudar texto ---
// A função é chamada pelo onclick="mudarTexto()" no botão do HTML.

function mudarTexto() {
  const paragrafo = document.getElementById("texto-exemplo");
  paragrafo.textContent = "Funcionou! O JavaScript mudou esse texto.";
}


// --- EXEMPLO 2: mudar cor de fundo ---
// Cada clique percorre uma lista de cores.

const cores = ["#f0a500", "#2d6a4f", "#c94040", "#3a5fa0", "#ddd"];
let indiceCor = 0;

function mudarCor() {
  const caixa = document.getElementById("caixa-cor");
  indiceCor = (indiceCor + 1) % cores.length; // vai circulando pela lista
  caixa.style.backgroundColor = cores[indiceCor];
}


// --- EXEMPLO 3: contador ---
// Uma variável guarda o valor; o span mostra na tela.

let contagem = 0;

function incrementar() {
  contagem = contagem + 1;
  document.getElementById("contador").textContent = contagem;
}

function zerar() {
  contagem = 0;
  document.getElementById("contador").textContent = contagem;
}


// --- EXEMPLO 4: ler o que o usuário digitou ---
// .value pega o texto de um <input>.

function cumprimentar() {
  const campo = document.getElementById("campo-nome");
  const nome = campo.value;

  const resposta = document.getElementById("resposta-nome");

  if (nome === "") {
    resposta.textContent = "Digite seu nome primeiro!";
  } else {
    resposta.textContent = "Olá, " + nome + "! Seja bem-vindo(a).";
  }
}
