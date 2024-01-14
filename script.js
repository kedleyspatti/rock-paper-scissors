
let playersChoice = "";
let computersChoice = "";
let opcionesJogo = ["pedra", "papel", "tesoura"];
let playerOnePoints = 0;
let playerTwoPoints = 0;
let drawCounter = 0;
let gameCounter = 0;


// FUNCTIONS:
function announcesPoints(divTarget) {
    return divTarget.textContent = `Partida: ${gameCounter} | Humano: ${playerOnePoints}  |  Computador: ${playerTwoPoints} | Empate: ${drawCounter}`;
}

function getComputerChoice() {
    let diferencia = 3;
    let aleatorio = Math.random();
    aleatorio = Math.floor( aleatorio * diferencia);
    aleatorio = aleatorio + 1;
    let opcionEligida = opcionesJogo[aleatorio - 1];
    return opcionEligida
}

function resetChoices() {
    computersChoice = '';
    playersChoice = '';
}

function verifyIfTheresWinner() {
    if (playerOnePoints == 3 || playerTwoPoints == 3) {
            if (playerOnePoints == 3) {
                divResults.textContent = 'Humano venceu!';
                announcesPoints(divPoints);
                return true
            } else {
                divResults.textContent = 'Computador venceu!';
                return true
            }
        } else {
            return false
        }
}

function game() {

    gameCounter += 1;

    if (verifyIfTheresWinner()) {
        return
    }

    computersChoice = getComputerChoice();

    // Screen Draw situations first, and follows the game if not:
    if (playersChoice == computersChoice) {
        divResults.textContent = 'Empate!';
        drawCounter += 1;
        announcesPoints(divPoints);
    } else {
        switch (playersChoice) {
            case 'pedra':
                if (computersChoice == "tesoura") {
                    playerOnePoints++;
                    divResults.textContent = 'Pedra destroi tesoura, humano ganhou!';
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Papel destroi pedra, computador ganhou!';
                }
                break;

            case 'papel':
                if (computersChoice == "pedra") {
                    playerOnePoints++;
                    divResults.textContent = 'Papel destroi pedra, humano ganhou!';
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Tesoura destroi papel, computador ganhou!';
                }

            case 'tesoura':
                if (computersChoice == "papel") {
                    playerOnePoints++;
                    divResults.textContent = 'Tesoura destroi papel, humano ganhou!';
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Pedra destroi tesoura, computador ganhou!';
                }
        }
        announcesPoints(divPoints);
        resetChoices();    
    }
}


// EVENTS CREATION:
let gameButton = document.querySelector('#div-buttons');
let divResults = document.querySelector('#div-result');
let divPoints = document.querySelector('#div-points');
let restartButton = document.querySelector('#button-restart');


// LISTENERS CREATION:
    // Selections Buttons:
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

    // Restart Buttom.
restartButton.addEventListener('click', (e) => {
    playerOnePoints = 0;
    playerTwoPoints = 0;
    drawCounter = 0;
    gameCounter = 0;
    divResults.textContent = '';
    divPoints.textContent = '';
});