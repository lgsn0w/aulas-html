// ===== CARROSSEL DE IMAGENS =====

const imagens = [
    "https://th.bing.com/th/id/R.4a25736f38d1b0d71aceff35c561c7d6?rik=P2XTdNbqGxP%2f4w&riu=http%3a%2f%2fwww.aranhahomem.com%2fimages%2fpictures%2fhomem-aranha-3.jpg&ehk=baQu0PDdOlGoChaVxpi4f5YbS7q%2fTNi9NqPEi4pKqKs%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4a25736f38d1b0d71aceff35c561c7d6?rik=P2XTdNbqGxP%2f4w&riu=http%3a%2f%2fwww.aranhahomem.com%2fimages%2fpictures%2fhomem-aranha-3.jpg&ehk=baQu0PDdOlGoChaVxpi4f5YbS7q%2fTNi9NqPEi4pKqKs%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4a25736f38d1b0d71aceff35c561c7d6?rik=P2XTdNbqGxP%2f4w&riu=http%3a%2f%2fwww.aranhahomem.com%2fimages%2fpictures%2fhomem-aranha-3.jpg&ehk=baQu0PDdOlGoChaVxpi4f5YbS7q%2fTNi9NqPEi4pKqKs%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4a25736f38d1b0d71aceff35c561c7d6?rik=P2XTdNbqGxP%2f4w&riu=http%3a%2f%2fwww.aranhahomem.com%2fimages%2fpictures%2fhomem-aranha-3.jpg&ehk=baQu0PDdOlGoChaVxpi4f5YbS7q%2fTNi9NqPEi4pKqKs%3d&risl=&pid=ImgRaw&r=0"
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

}