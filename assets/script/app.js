let $ = document.querySelector.bind(document);
const player = $("#player");
const obstaculo = $("#obstaculo");
const pontos = $("#pontos");
const gameOver = $("#gameOver");
const reseta = $("#botao");
const recorde = $("#recorde");
const trilha = $("#audioTrilha");
const audioGameOver = $("#audioGameOver");
const audioPontos = $("#audioPontos");

let score = 0;
let verificadorDeUnidade = false;
let verificadorDeGameOver = false;


const jump = () => {    
    player.classList.add('jump')

    setTimeout(() => {
        player.classList.remove('jump')
    }, 600);
}

const loop = setInterval(() => {
    const posicaoObstaculo = obstaculo.offsetLeft;
    const posicaoPlayerString = window.getComputedStyle(player).bottom.replace('px', '');
    const posicaoPlayer = Number(posicaoPlayerString); 

    const paraObstaculo = () => {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${posicaoObstaculo}px`;
    }
    const paraPlayer = () => {
        player.style.animation = 'none';
        player.src = "assets/imgs/game-over.png";
        player.style.bottom = `${posicaoPlayer}px`;
        player.style.left = '75px'
        player.style.width = "100px"
    }
    const atualizaPlacar = () => {
            score++;
            pontos.textContent = `PONTOS: ${score}`;
            verificadorDeUnidade = true;
            audioPontos.play();
            console.log(score);
    }
    const fimDeJogo = () => {
        gameOver.classList.remove('hidden');
        gameOver.classList.add('gameOver');
        audioGameOver.play();
        reseta.classList.remove("hidden"); 
        reseta.classList.add("botao"); 
    }

    const registraRecorde = () => {

    }

    if(posicaoObstaculo <= 180 && posicaoPlayer <= 180 && posicaoObstaculo >= 10 && verificadorDeGameOver == false) {
        paraObstaculo();
        paraPlayer();
        fimDeJogo();
        registraRecorde();
        verificadorDeGameOver = true;
    } else if (posicaoObstaculo <= 20 && posicaoObstaculo >= 0 && verificadorDeUnidade == false) {         
        atualizaPlacar();
    } else if (posicaoPlayer <= 0 && verificadorDeUnidade == true) {
        verificadorDeUnidade = false;
    }

}, 10)

document.addEventListener('keydown', jump);

document.addEventListener('keydown', tocaSom);

function tocaSom() {
    trilha.play();
}
