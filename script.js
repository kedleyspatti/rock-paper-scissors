
let playersChoice = "";
let computersChoice = "";
let opcionesJogo = ["pedra", "papel", "tesoura"];
let playerOnePoints = 0;
let playerTwoPoints = 0;
let drawCounter = 0;
let gameCounter = 0;

let spanPartidas = document.createElement('span');
let spanHuman = document.createElement('span');
let spanComputer = document.createElement('span');
let spanDraw = document.createElement('span');
spanPartidas.classList.toggle('span-partidas');
spanHuman.classList.toggle('span-human');
spanComputer.classList.toggle('span-computer');
spanDraw.classList.toggle('span-draw');
spanDraw.textContent = `${drawCounter}`;
spanHuman.textContent = `${playerOnePoints}`;
spanComputer.textContent = `${playerTwoPoints}`;
spanDraw.textContent = `${drawCounter}`;


// FUNCTIONS:
function announcesPoints(divTarget) {
    divTarget.appendChild(document.createTextNode(`Partida: ${gameCounter} | Humano: `))
    divTarget.appendChild(spanHuman);
    divTarget.appendChild(document.createTextNode(` | Computador: `));
    divTarget.appendChild(spanComputer);
    divTarget.appendChild(document.createTextNode(` | Empates: `));
    divTarget.appendChild(spanDraw);
}

function updatePointsSpans() {
    spanHuman.textContent = `${playerOnePoints}`;
    spanComputer.textContent = `${playerTwoPoints}`;
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
                announcesPoints(divPoints);
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

    gameCounter += 1;

    computersChoice = getComputerChoice();

    // Screen Draw situations first, and follows the game if not:
    if (playersChoice == computersChoice) {
        drawCounter += 1;
        divResults.textContent = 'Empate!';
        spanDraw.textContent = `${drawCounter}`;
        announcesPoints(divPoints);
    } else {
        switch (playersChoice) {
            case 'pedra':
                if (computersChoice == "tesoura") {
                    playerOnePoints++;
                    divResults.textContent = 'Pedra destroi tesoura, humano ganhou!';
                    updatePointsSpans()
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Papel destroi pedra, computador ganhou!';
                    updatePointsSpans()
                }
                break;

            case 'papel':
                if (computersChoice == "pedra") {
                    playerOnePoints++;
                    divResults.textContent = 'Papel destroi pedra, humano ganhou!';
                    updatePointsSpans()
                    
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Tesoura destroi papel, computador ganhou!';
                    updatePointsSpans()
                    
                }
                break;

            case 'tesoura':
                if (computersChoice == "papel") {
                    playerOnePoints++;
                    updatePointsSpans()
                    divResults.textContent = 'Tesoura destroi papel, humano ganhou!';
                } else {
                    playerTwoPoints++;
                    updatePointsSpans()
                    divResults.textContent = 'Pedra destroi tesoura, computador ganhou!';
                }
                break;
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
    divPoints.textContent = '';

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
    spanDraw.textContent = `${drawCounter}`;
    updatePointsSpans()
});