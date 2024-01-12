let playersChoice = "";
let computersChoice = "";
let opcionesJogo = ["pedra", "papel", "tesoura"];
let playerOnePoints = 0;
let playerTwoPoints = 0;
let a = 0;


function getComputerChoice() {
    let diferencia = 3;
    let aleatorio = Math.random();
    aleatorio = Math.floor( aleatorio * diferencia);
    aleatorio = aleatorio + 1;
    let opcionEligida = opcionesJogo[aleatorio - 1];
    return opcionEligida
}

function verifyIfTheresWinner() {
    if (playerOnePoints == 3 || playerTwoPoints == 3) {
            if (playerOnePoints == 3) {
                divResults.textContent = 'Jogador Humano ganhou!';
                return true
            } else {
                divResults.textContent = 'Computador ganhou!';
                return true
            }
        } else {
            return false
        }
}

function game() {

        if (verifyIfTheresWinner()) {
            return
        }

        computersChoice = getComputerChoice();

        // Screen Draw situations first, and follows the game if not:
        if (playersChoice == computersChoice) {
            divResults.textContent = 'Empate!';
        } else {

            if (playersChoice == "pedra") {
                if (computersChoice == "tesoura") {
                    divResults.textContent = 'Pedra destroi tesoura, jogador ganhou!';
                    playerOnePoints++;
                } else {
                    divResults.textContent = 'Papel destroi pedra, computador ganhou!';
                    playerTwoPoints++;
                }
            }

            if (playersChoice == "papel") {
                if (computersChoice == "pedra") {
                    divResults.textContent = 'Papel destroi pedra, jogador ganhou!';
                    playerOnePoints++;
                } else {
                    divResults.textContent = 'Tesoura destroi papel, computador ganhou!';
                    playerTwoPoints++;
                }
            }

            if (playersChoice == "tesoura") {
                if (computersChoice == "papel") {
                    divResults.textContent = 'Tesoura destroi papel, jogador ganhou!';
                    playerOnePoints++;
                } else {
                    divResults.textContent = 'Pedra destroi tesoura, computador ganhou!';
                    playerTwoPoints++;
                }
            }
        }
}

// Start the Page.
// alert("Bem-vindo ao Joken Po!");

// Events creation:
let gameButton = document.querySelector('#div-buttons');
let divResults = document.querySelector('#div-result');
let restartButton = document.querySelector('#button-restart');

    // Cliques nas opções de jogador.
gameButton.addEventListener('click', (e) => {
    let targetButton = e.target;

    switch (targetButton.id) {
        case 'button-rock':
            playersChoice = 'pedra';
            game();
            break;

        case 'button-paper':
            playersChoice = 'papel';
            game();
            break;

        case 'button-scisor':
            playersChoice = 'tesoura';
            game();
            break
    }
});

    // Clique no botão restart.
restartButton.addEventListener('click', (e) => {
    playerOnePoints = 0;
    playerTwoPoints = 0;
    divResults.innerText = '';
});