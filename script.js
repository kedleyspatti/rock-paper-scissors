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
                alert("Jogador Humano ganhou!");
                return true
            } else {
                alert("Computador ganhou!");
                return true
            }
        } else {
            return false
        }
}

function game() {

        if (verifyIfTheresWinner()) {
            return alert("Fim de jogo!");
        }

        computersChoice = getComputerChoice();

        // Screen Draw situations first, and follows the game if not:
        if (playersChoice == computersChoice) {
            alert("Empate!");
        } else {

            if (playersChoice == "pedra") {
                if (computersChoice == "tesoura") {
                    alert("Pedra destroi tesoura!");
                    playerOnePoints++;
                } else {
                    alert("Papel destroi pedra!");
                    playerTwoPoints++;
                }
            }

            if (playersChoice == "papel") {
                if (computersChoice == "pedra") {
                    alert("Papel destroi pedra!");
                    playerOnePoints++;
                } else {
                    alert("Tesoura destroi papel!");
                    playerTwoPoints++;
                }
            }

            if (playersChoice == "tesoura") {
                if (computersChoice == "papel") {
                    alert("Tesoura destroi papel!");
                    playerOnePoints++;
                } else {
                    alert("Pedra destroi tesoura!");
                    playerTwoPoints++;
                }
            }
        }
}

// Start the Page.
alert("Bem-vindo ao Joken Po!");

// Evetns creation:
let gameButton = document.querySelector('#div-buttons');

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