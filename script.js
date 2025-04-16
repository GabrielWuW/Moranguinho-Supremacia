document.addEventListener('DOMContentLoaded', () => {
    // Todas as chaves em minúsculo para padronizar
    const dadosPersonagens = {
        "biscoitinho": {
            nome: "🍪 Biscoitinho 🍪",
            descricao: "EXCELENTE COZINHEIRA. Ela é muito engraçada e tagarela, tem uma grande fábrica de biscoitos, e inventa várias experiências, apesar de ser um pouco medrosa, e compartilha com os seus amigos os seus biscoitos, e é a melhor da Laranjinha, sua cor é azul, e faz aniversário no dia 11 de julho"
        },
        "laranjinha": {
            nome: "🍊 Laranjinha 🍊",
            descricao: "Laranjinha é uma amiga de moranguinho, ela é um pouco tímida, mais é muito carinhosa e amorosa, e é uma pessoa especial que está pronta a dar a mãozinha e ajudar quem precisa, ela tem uma casa na árvore, sua cor é laranja e faz aniversário no dia 27 de junho"
        },
        "limaozinho": {
            nome: "🍋 Limãozinho 🍋",
            descricao: "Limãozinho é o personagem original, ele anda de skate por todas as direções."
        },
        "uvinha": {
            nome: "🍇 Uvinha 🍇",
            descricao: "Uvinha é uma artista inteligente que ela faz os bolos mais lindos que você já viu. ela se diverte fazendo bolos de tamanho e tamanho, é perfeicionista, e ás vezes ela pode não fazer as coisas que gosta, ou pensa que está sendo ofendida, quando as coisas não dá certo no seu jeito, ela pode ser bem pessimista, ou até as vezes causar problemas, sua cor favorita é roxo, e faz aniversário no dia de 10 de outubro"
        }
    };

    const personagens = document.querySelectorAll('.amigo');
    const nomeElemento = document.querySelector('.nome');
    const descElemento = document.querySelector('.desc');

    function atualizarInformacoes(img) {
        const src = img.getAttribute('src');
        const nomeArquivo = src.substring(src.lastIndexOf('/') + 1).split('.')[0].toLowerCase();
    
        if (dadosPersonagens[nomeArquivo]) {
            const containerInfo = document.querySelector('.container_informacoes');
            containerInfo.classList.remove('fade-in-up');
            void containerInfo.offsetWidth;
            containerInfo.classList.add('fade-in-up');

            nomeElemento.textContent = dadosPersonagens[nomeArquivo].nome;
            descElemento.textContent = dadosPersonagens[nomeArquivo].descricao;
        }
    }    

    personagens.forEach(img => {
        img.addEventListener('click', () => {
            atualizarInformacoes(img);
        });
    });

    if (personagens.length > 0) {
        atualizarInformacoes(personagens[0]);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const balaoTexto = document.querySelector('.caixa p');
    const botoes = document.querySelectorAll('.botoes button');

    const respostas = {
        "resposta1": "Oi docinho! Eu sou a moranguinho! Sua nova MELHOR amiga para sempre 🍓🍓🍓",
        "resposta2": "Claro! Lembre-se sempre aqueles que desobedecem as regras, são tratados como a escória, mas aqueles que abandonam seus amigos são piores que a escória!",
        "resposta3": "Onde eu moro? bem... isso é uma pergunta meio estranha pra se fazer a um personagem ficticio, mas eu moro em um lugar chamado Morangolandia 🍓🍓🍓",
        "resposta4": "238 litros mais ou menos demora uns 14 horas 52 minutos para dissolver totalmente, mas não tenho certeza não sou formada em química....",
    };

    function escreverTextoComEfeito(texto) {
        balaoTexto.textContent = "";
        let index = 0;

        const intervalo = setInterval(() => {
            balaoTexto.textContent += texto.charAt(index);
            index++;

            if (index >= texto.length) {
                clearInterval(intervalo);
            }
        }, 10);
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const valorBotao = botao.value;
            const resposta = respostas[valorBotao];

            if (resposta) {
                escreverTextoComEfeito(resposta);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('header a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
