// ===== CARROSSEL DE IMAGENS =====

const imagens = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9195e7d5-496f-494a-bfc1-e07485fd706c/df988j7-162e099f-06b1-4224-866f-7740855b4741.png/v1/fill/w_719,h_1112,q_70,strp/spiderman_4_by_jt525pro_df988j7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk3OSIsInBhdGgiOiJcL2ZcLzkxOTVlN2Q1LTQ5NmYtNDk0YS1iZmMxLWUwNzQ4NWZkNzA2Y1wvZGY5ODhqNy0xNjJlMDk5Zi0wNmIxLTQyMjQtODY2Zi03NzQwODU1YjQ3NDEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kPYvF0JP7Z0RrBRld8f_vUflI4EB5MoxbopmvwF4aAM ", "https://observatoriodocinema.com.br/wp-content/uploads/2017/07/Tobey-Maguire-Spider-Man-Civil-War.jpg","https://tse4.mm.bing.net/th/id/OIP.efqAH-cN_svcIpGv_S7L4wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3","https://sampi.net.br/dir-arquivo-imagem/2021/07/Primeiro-Homem-Aranha.jpg", "https://www.un.uniaodosherois.com.br/images/posts/2663-tobey-maguire-fala-sobre-seu-retorno-como-homem-aranha-tb.jpg","" 

];

let atual = 0;

const img = document.getElementById("imagem");
const proxima = document.getElementById("proxima");
const anterior = document.getElementById("anterior");

if (proxima && anterior && img) {

    proxima.onclick = function () {

        atual++;

        if (atual >= imagens.length) {
            atual = 0;
        }

        img.src = imagens[atual];

    };


    anterior.onclick = function () {

        atual--;

        if (atual < 0) {
            atual = imagens.length - 1;
        }

        img.src = imagens[atual];

    };

}


// ===== MODO ESCURO =====

function trocarTema(){

    document.body.classList.toggle("dark");

function escolher(nome) {
    document.getElementById("resposta").innerHTML = nome;

}
  //====Botão Curtir-cada poste um clik==
let curtidas1 = 3
let botaoCurtir1 = document.getElementById('curtir-1')
let contagemCurtir1 = document.getElementById('contagem-1')

function alternarCurtida1() {
  if (botaoCurtir1.classList.contains('curtido')) {
    curtidas1 = curtidas1 - 1
    botaoCurtir1.classList.remove('curtido')
  } else {
    curtidas1 = curtidas1 + 1
    botaoCurtir1.classList.add('curtido')
  }
  contagemCurtir1.innerText = curtidas1
}

let curtidas3 = 12
let botaoCurtir3 = document.getElementById('curtir-3')
let contagemCurtir3 = document.getElementById('contagem-3')

function alternarCurtida3() {
  if (botaoCurtir3.classList.contains('curtido')) {
    curtidas3 = curtidas3 - 1
    botaoCurtir3.classList.remove('curtido')
  } else {
    curtidas3 = curtidas3 + 1
    botaoCurtir3.classList.add('curtido')
  }
  contagemCurtir3.innerText = curtidas3
}

let curtidas4 = 9
let botaoCurtir4 = document.getElementById('curtir-4')
let contagemCurtir4 = document.getElementById('contagem-4')

function alternarCurtida4() {
  if (botaoCurtir4.classList.contains('curtido')) {
    curtidas4 = curtidas4 - 1
    botaoCurtir4.classList.remove('curtido')
  } else {
    curtidas4 = curtidas4 + 1
    botaoCurtir4.classList.add('curtido')
  }
  contagemCurtir4.innerText = curtidas4
}

botaoCurtir1.addEventListener('click', alternarCurtida1)
botaoCurtir2.addEventListener('click', alternarCurtida2)
botaoCurtir3.addEventListener('click', alternarCurtida3)
botaoCurtir4.addEventListener('click', alternarCurtida4)

// FORMULÁRIO DE CONTATO — validar e mostrar mensagem de sucesso
// ============================================================

let campoNome = document.getElementById('campo-nome')
let campoEmail = document.getElementById('campo-email')
let campoMensagem = document.getElementById('campo-mensagem')

let erroNome = document.getElementById('erro-nome')
let erroEmail = document.getElementById('erro-email')
let erroMensagem = document.getElementById('erro-mensagem')

let botaoEnviar = document.getElementById('botao-enviar')
let mensagemSucesso = document.getElementById('mensagem-sucesso')

function enviarFormulario() {
  let tudoPreenchido = true

  // nome
  if (campoNome.value === '') {
    erroNome.classList.add('mostrar')
    tudoPreenchido = false
  } else {
    erroNome.classList.remove('mostrar')
  }

  // email
  if (campoEmail.value === '') {
    erroEmail.classList.add('mostrar')
    tudoPreenchido = false
  } else {
    erroEmail.classList.remove('mostrar')
  }

  // mensagem
  if (campoMensagem.value === '') {
    erroMensagem.classList.add('mostrar')
    tudoPreenchido = false
  } else {
    erroMensagem.classList.remove('mostrar')
  }

  // só envia se os 3 campos estiverem ok
  if (tudoPreenchido === true) {
    campoNome.value = ''
    campoEmail.value = ''
    campoMensagem.value = ''
    mensagemSucesso.classList.add('mostrar')
  }
}

botaoEnviar.addEventListener('click', enviarFormulario)





}