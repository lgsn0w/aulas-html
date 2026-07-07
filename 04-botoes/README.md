# Aula 04: Botões e Interatividade

Nesta aula conectamos botões HTML a funções JavaScript para fazer a página reagir ao usuário. O exemplo usa a mesma estrutura de portfólio da Aula 02, atualizada com 6 tipos diferentes de interação.

---

## O elemento `<button>`

Até agora usávamos `<a class="btn">` para simular botões. O elemento correto para **ações** (que não navegam para outra página) é o `<button>`:

```html
<!-- Use <a> quando vai navegar para outro lugar -->
<a href="https://github.com">Meu GitHub</a>

<!-- Use <button> quando vai executar uma ação na página -->
<button onclick="minhaFuncao()">Clique aqui</button>
```

| | `<a>` | `<button>` |
|---|---|---|
| **Para quê** | Navegar / abrir link | Executar ação no JS |
| **Atributo principal** | `href` | `onclick` |
| **Semântica** | Link | Botão |

---

## Conectando botão ao JavaScript

No HTML, `onclick` chama uma função quando o botão é clicado:

```html
<button onclick="mostrarMensagem()">Clique</button>
```

No JS, defina a função com o mesmo nome:

```js
function mostrarMensagem() {
  alert("Olá!");
}
```

---

## O que foi feito nesta aula

### Exemplo 1 — Modo escuro (`classList.toggle`)

`classList` é a lista de classes CSS de um elemento. `.toggle()` funciona como um interruptor:

```js
document.body.classList.toggle("dark");
// Se "dark" não está → adiciona
// Se "dark" já está  → remove
```

No CSS, `body.dark` redefine as cores:

```css
body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark section {
  background-color: #1e1e1e;
}
```

**Outros métodos de classList:**

| Método | O que faz |
|---|---|
| `.add("classe")` | Adiciona a classe |
| `.remove("classe")` | Remove a classe |
| `.toggle("classe")` | Adiciona se não tem, remove se tem |
| `.contains("classe")` | Retorna `true` ou `false` |

---

### Exemplo 2 — Revelar itens ocultos (`querySelectorAll` + loop)

Para selecionar **vários elementos de uma vez**, use `querySelectorAll`:

```js
// Encontra TODOS os <li> com a classe "oculto" dentro da lista
const itens = document.querySelectorAll(".lista-habilidades .oculto");

// Percorre cada um e remove a classe
itens.forEach(function(item) {
  item.classList.remove("oculto");
});
```

A diferença entre `getElementById` e `querySelectorAll`:

| | `getElementById` | `querySelectorAll` |
|---|---|---|
| **Busca por** | ID único | Qualquer seletor CSS |
| **Retorna** | Um elemento | Lista de elementos |
| **Exemplo** | `getElementById("titulo")` | `querySelectorAll(".oculto")` |

---

### Exemplo 3 — Mostrar/ocultar com troca de texto no botão

```js
const card = document.getElementById("projeto-extra");
const btn = document.getElementById("btn-projetos");

card.classList.toggle("oculto");

// Troca o texto do botão conforme o estado
if (card.classList.contains("oculto")) {
  btn.textContent = "+ Ver mais projetos";
} else {
  btn.textContent = "− Ver menos projetos";
}
```

A classe `.oculto` no CSS simplesmente aplica `display: none`:

```css
.oculto {
  display: none;
}
```

---

### Exemplo 4 — Copiar para a área de transferência

```js
const texto = document.getElementById("texto-email").textContent;

navigator.clipboard.writeText(texto).then(function() {
  // Executa DEPOIS que a cópia terminar
  alert("Copiado!");
});
```

> `navigator.clipboard` é uma API moderna do navegador. O `.then()` é necessário porque copiar para a área de transferência é uma operação **assíncrona** (o JS não espera ela terminar para continuar).

**Feedback com `setTimeout`:**

```js
btn.textContent = "✅ Copiado!";

setTimeout(function() {
  btn.textContent = "📋 Copiar"; // volta ao texto original depois de 2s
}, 2000); // 2000ms = 2 segundos
```

---

### Exemplo 5 — Contador com reset

Variáveis declaradas **fora** das funções persistem entre cliques:

```js
let contagem = 0; // persiste enquanto a página estiver aberta

function incrementar() {
  contagem = contagem + 1;
  document.getElementById("contador").textContent = contagem;
}

function zerar() {
  contagem = 0;
  document.getElementById("contador").textContent = 0;
}
```

Se a variável fosse declarada **dentro** da função, ela seria zerada a cada clique:

```js
function incrementar() {
  let contagem = 0; // ❌ recomeça do zero toda vez
  contagem = contagem + 1;
}
```

---

### Exemplo 6 — Voltar ao topo + evento de scroll

```js
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
```

`behavior: "smooth"` faz a rolagem ser animada em vez de pular direto.

Para mostrar/esconder o botão conforme o scroll:

```js
window.addEventListener("scroll", function() {
  const btn = document.getElementById("btn-topo");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
```

`addEventListener("scroll", ...)` escuta um evento — aqui, toda vez que o usuário rola a página, a função é chamada.

---

## Botão fixo na tela (`position: fixed`)

Os botões de tema e topo ficam fixos mesmo ao rolar:

```css
#btn-tema {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100; /* fica na frente de outros elementos */
}
```

| Valor de `position` | Comportamento |
|---|---|
| `static` | Padrão — segue o fluxo normal |
| `relative` | Se move em relação à posição original |
| `absolute` | Se posiciona em relação ao pai mais próximo com `position` |
| `fixed` | Fica fixo na janela, ignora o scroll |

---

## Arquivos desta aula

| Arquivo | O que é |
|---|---|
| `aula_javascript_botoes_simples.pptx` | Slides da aula |
| `index.html` | Portfólio com os 6 exemplos de botões comentados |
| `style.css` | CSS da Aula 02 atualizado com estilos de botões e modo escuro |
| `script.js` | JavaScript dos 6 exemplos, todo comentado |

---

## Entrega

Coloque seu arquivo na pasta `respostas/seu-nome/`.
