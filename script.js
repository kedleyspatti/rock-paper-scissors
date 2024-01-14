/* 
Falta fazer:
- Mudar a lógica da game() para eliminar of if e colocar o switch-case no lugar. (Esta em uma branch - trylogic)
*/

let playersChoice = "";
let computersChoice = "";
let opcionesJogo = ["pedra", "papel", "tesoura"];
let playerOnePoints = 0;
let playerTwoPoints = 0;
let a = 0;


function announcesPoints(divTarget) {
    return divTarget.textContent = `Humano: ${playerOnePoints}  |  Computador: ${playerTwoPoints}`;
}


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
                divResults.textContent = 'Humano ganhou!';
                announcesPoints(divPoints);
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
                    playerOnePoints++;
                    divResults.textContent = 'Pedra destroi tesoura, humano ganhou!';
                    announcesPoints(divPoints);
                    
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Papel destroi pedra, computador ganhou!';
                    announcesPoints(divPoints);
                }
            }

            if (playersChoice == "papel") {
                if (computersChoice == "pedra") {
                    playerOnePoints++;
                    divResults.textContent = 'Papel destroi pedra, humano ganhou!';
                    announcesPoints(divPoints);
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Tesoura destroi papel, computador ganhou!';
                    announcesPoints(divPoints);
                }
            }

            if (playersChoice == "tesoura") {
                if (computersChoice == "papel") {
                    playerOnePoints++;
                    divResults.textContent = 'Tesoura destroi papel, humano ganhou!';
                    announcesPoints(divPoints);
                } else {
                    playerTwoPoints++;
                    divResults.textContent = 'Pedra destroi tesoura, computador ganhou!';
                    announcesPoints(divPoints);
                }
            }
        }
}

// Start the Page.
// alert("Bem-vindo ao Joken Po!");

// Events creation:
let gameButton = document.querySelector('#div-buttons');
let divResults = document.querySelector('#div-result');
let divPoints = document.querySelector('#points');
let restartButton = document.querySelector('#button-restart');

    // Cliques nas opções de humano.
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
    divResults.textContent = '';
    divPoints.textContent = '';
});