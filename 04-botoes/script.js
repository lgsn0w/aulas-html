// ============================================================
// Aula 04 — Botões e Interatividade
//
// Cada função está ligada a um botão pelo atributo onclick="" no HTML.
// Leia os comentários de cada função para entender o que está acontecendo.
// ============================================================


// ────────────────────────────────────────────────────────────
// EXEMPLO 1 — Modo escuro / claro
// classList.toggle(classe)
//
// classList é a lista de classes CSS de um elemento.
// .toggle("dark") faz o seguinte:
//   - Se "dark" NÃO está na lista → adiciona
//   - Se "dark" JÁ está na lista  → remove
// Isso equivale a um interruptor de liga/desliga.
// ────────────────────────────────────────────────────────────

function alternarTema() {
  document.body.classList.toggle("dark");

  // Troca o texto do botão dependendo do estado atual
  const btn = document.getElementById("btn-tema");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}


// ────────────────────────────────────────────────────────────
// EXEMPLO 2 — Revelar habilidades ocultas
// querySelectorAll + loop + classList.remove
//
// querySelectorAll(".oculto") encontra TODOS os elementos
// que têm a classe "oculto" dentro da seção de habilidades.
// Removemos a classe "oculto" de cada um para exibi-los.
// ────────────────────────────────────────────────────────────

function revelarHabilidades() {
  // Pega todos os <li class="oculto"> dentro da lista de habilidades
  const itensOcultos = document.querySelectorAll(".lista-habilidades .oculto");

  if (itensOcultos.length > 0) {
    // Ainda tem itens escondidos: revela todos
    itensOcultos.forEach(function(item) {
      item.classList.remove("oculto");
    });

    // Atualiza o texto do botão
    const btn = event.target;
    btn.textContent = "− Ver menos habilidades";
  } else {
    // Todos já estão visíveis: esconde de novo
    const todosItens = document.querySelectorAll(".lista-habilidades li");
    // Esconde só os últimos 3 (os que foram revelados)
    const quantidadeParaOcultar = 3;
    const total = todosItens.length;
    for (let i = total - quantidadeParaOcultar; i < total; i++) {
      todosItens[i].classList.add("oculto");
    }

    const btn = event.target;
    btn.textContent = "+ Ver mais habilidades";
  }
}


// ────────────────────────────────────────────────────────────
// EXEMPLO 3 — Mostrar / ocultar projeto extra
// style.display vs classList — duas formas de mostrar/ocultar
//
// Aqui usamos classList.toggle no card diretamente.
// O botão troca entre dois textos usando uma variável de controle.
// ────────────────────────────────────────────────────────────

function alternarProjetos() {
  const projetoExtra = document.getElementById("projeto-extra");
  const btn = document.getElementById("btn-projetos");

  projetoExtra.classList.toggle("oculto");

  if (projetoExtra.classList.contains("oculto")) {
    btn.textContent = "+ Ver mais projetos";
  } else {
    btn.textContent = "− Ver menos projetos";
  }
}


// ────────────────────────────────────────────────────────────
// EXEMPLO 4 — Copiar email para a área de transferência
// navigator.clipboard.writeText()
//
// A API Clipboard copia texto sem precisar selecionar nada.
// É assíncrona: .then() executa quando a cópia terminar.
// ────────────────────────────────────────────────────────────

function copiarEmail() {
  const email = document.getElementById("texto-email").textContent;
  const btn = event.target;

  navigator.clipboard.writeText(email).then(function() {
    // Dá feedback visual trocando o texto do botão por 2 segundos
    btn.textContent = "✅ Copiado!";
    setTimeout(function() {
      btn.textContent = "📋 Copiar";
    }, 2000); // 2000 milissegundos = 2 segundos
  });
}


// ────────────────────────────────────────────────────────────
// EXEMPLO 5 — Contador com reset
// Variável fora da função guarda o estado entre cliques.
// Atualizar textContent do <span> mostra o novo valor.
// ────────────────────────────────────────────────────────────

let contagemInteresse = 0; // variável "vive" fora da função para persistir

function registrarInteresse() {
  contagemInteresse = contagemInteresse + 1;
  document.getElementById("contador").textContent = contagemInteresse;
}

function zerarContador() {
  contagemInteresse = 0;
  document.getElementById("contador").textContent = 0;
}


// ────────────────────────────────────────────────────────────
// EXEMPLO 6 — Botão "Voltar ao topo"
// window.scrollTo() rola a página até uma posição.
// O evento "scroll" escuta quando o usuário rola a página.
// ────────────────────────────────────────────────────────────

function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // "smooth" faz a rolagem ser animada
  });
}

// Mostra o botão só quando o usuário rolou mais de 300px
window.addEventListener("scroll", function() {
  const btnTopo = document.getElementById("btn-topo");
  if (window.scrollY > 300) {
    btnTopo.style.display = "block"; // aparece
  } else {
    btnTopo.style.display = "none";  // some
  }
});
