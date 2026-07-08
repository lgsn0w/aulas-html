function alternarTema() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("btn-tema");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}

let botaoAvaliar = document.getElementById('btn-avaliar')

function avaliar() {
  window.open('https://www.imdb.com/pt/title/tt0013442/?ref_=nv_sr_srsg_6_tt_6_nm_2_in_0_q_nosfe')
}
botaoAvaliar.addEventListener('click', avaliar)
