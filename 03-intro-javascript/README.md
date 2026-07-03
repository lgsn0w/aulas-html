# Aula 03: Primeiros Passos com JavaScript

JavaScript é a linguagem que faz a página **reagir** ao usuário — cliques, digitação, animações, tudo que "acontece" depois que o HTML carregou.

---

## Como conectar o JavaScript ao HTML

Coloque a tag `<script>` **no final do `<body>`**, antes de `</body>`:

```html
<body>
  <!-- todo o seu HTML aqui -->

  <script src="script.js"></script>
</body>
```

> **Por que no final?** O navegador lê o HTML de cima para baixo. Se o `<script>` vier antes dos elementos, o JS tenta encontrar coisas que ainda não existem na página.

---

## O DOM — o que é isso?

DOM = *Document Object Model*. É como o navegador enxerga a página: uma árvore de elementos que o JavaScript pode encontrar e modificar.

```
document
└── html
    ├── head
    └── body
        ├── header
        └── main
            ├── section
            │   ├── h2
            │   └── p  ← getElementById("meu-id") chega aqui
            └── section
```

---

## Encontrar um elemento

```js
const elemento = document.getElementById("id-do-elemento");
```

O elemento precisa ter um `id` no HTML:

```html
<p id="id-do-elemento">Texto aqui</p>
```

---

## Mudar o texto de um elemento

```js
const paragrafo = document.getElementById("meu-texto");
paragrafo.textContent = "Novo texto!";
```

---

## Mudar o estilo via JS

```js
const caixa = document.getElementById("minha-caixa");
caixa.style.backgroundColor = "red";
caixa.style.fontSize = "24px";
```

As propriedades CSS viram camelCase no JS: `background-color` → `backgroundColor`.

---

## Chamar uma função com um clique

No HTML, use o atributo `onclick`:

```html
<button onclick="minhaFuncao()">Clique aqui</button>
```

No JS, defina a função:

```js
function minhaFuncao() {
  // o que acontece ao clicar
  alert("Clicou!");
}
```

---

## Ler o que o usuário digitou

```html
<input type="text" id="campo" />
<button onclick="lerValor()">Enviar</button>
```

```js
function lerValor() {
  const campo = document.getElementById("campo");
  const texto = campo.value; // .value pega o que está digitado
  alert("Você digitou: " + texto);
}
```

---

## Variáveis — guardar valores

```js
let contador = 0;      // pode mudar depois

contador = contador + 1; // agora é 1
```

---

## Condição (if/else)

```js
if (nome === "") {
  alert("Campo vazio!");
} else {
  alert("Olá, " + nome);
}
```

---

## Arquivos desta aula

| Arquivo | O quê é |
|---|---|
| `aula_javascript_fundamentos.pptx` | Slides da aula |
| `index.html` | Página com 4 exemplos interativos comentados |
| `style.css` | Estilo da página de exemplos |
| `script.js` | JavaScript dos 4 exemplos, todo comentado |
