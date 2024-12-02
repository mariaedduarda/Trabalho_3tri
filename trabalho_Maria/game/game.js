// Função para embaralhar um array de forma aleatória (usando o algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}

// Cartas do jogo (10 pares de cartas para totalizar 20 cartas)
const cards = [
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🦁' },
    { id: 4, value: '🐢' },
    { id: 5, value: '🦋' },
    { id: 6, value: '🐷' },
    { id: 7, value: '🦄' },
    { id: 8, value: '🐰' },
    { id: 9, value: '🦑' },
    { id: 10, value: '🦉' },
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🦁' },
    { id: 4, value: '🐢' },
    { id: 5, value: '🦋' },
    { id: 6, value: '🐷' },
    { id: 7, value: '🦄' },
    { id: 8, value: '🐰' },
    { id: 9, value: '🦑' },
    { id: 10, value: '🦉' }
];

// Embaralha as cartas
shuffleArray(cards);

// Selecionando o tabuleiro
const board = document.querySelector('.memory-board');

// Função para criar as cartas no tabuleiro
function createCards() {
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        
        // Criando a parte da frente e a parte de trás da carta
        const front = document.createElement('div');
        front.classList.add('card-front');
        front.textContent = card.value;  // Valor da carta
        
        const back = document.createElement('div');
        back.classList.add('card-back');
        
        // Inserindo as partes dentro da carta
        cardElement.appendChild(front);
        cardElement.appendChild(back);
        
        // Adicionando o evento de clique para virar a carta
        cardElement.addEventListener('click', () => flipCard(cardElement));
        
        // Adicionando a carta ao tabuleiro
        board.appendChild(cardElement);
    });
}

// Função para virar a carta
let flippedCards = [];
function flipCard(cardElement) {
    if (flippedCards.length < 2 && !cardElement.classList.contains('is-flipped')) {
        cardElement.classList.add('is-flipped');
        flippedCards.push(cardElement);
        
        // Verificando se duas cartas foram viradas
        if (flippedCards.length === 2) {
            setTimeout(() => {
                const [card1, card2] = flippedCards;
                const value1 = card1.querySelector('.card-front').textContent;
                const value2 = card2.querySelector('.card-front').textContent;
                
                if (value1 !== value2) {
                    card1.classList.remove('is-flipped');
                    card2.classList.remove('is-flipped');
                }
                flippedCards = [];
            }, 1000);
        }
    }
}

// Inicializando o jogo criando as cartas no tabuleiro
createCards();
