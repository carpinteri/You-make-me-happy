
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const liz = { x: 200, y: 300, width: 50, height: 100, color: "black", happiness: 0 };
const alejandro = { x: 600, y: 300, width: 50, height: 100, color: "brown" };

function drawCharacter(character, name) {
    ctx.fillStyle = character.color;
    ctx.fillRect(character.x, character.y, character.width, character.height);
    ctx.fillStyle = "white";
    ctx.fillText(name, character.x, character.y - 10);
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCharacter(liz, "Liz");
    drawCharacter(alejandro, "Alejandro");
}

function giveGift(gift) {
    let message = "";
    if (gift === "flowers") {
        message = "Liz smiles. She loves the flowers!";
        liz.happiness += 1;
    } else if (gift === "food") {
        message = "Liz enjoys the food. She's feeling cared for!";
        liz.happiness += 1;
    } else if (gift === "cuddles") {
        message = "Liz feels loved. She hugs you back!";
        liz.happiness += 1;
    }

    if (liz.happiness >= 3) {
        message = "Liz bursts into laughter! You made her day!";
        showCredits();
    }

    document.getElementById("message").innerText = message;
    drawScene();
}

function showCredits() {
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.font = "24px Arial";
        ctx.fillText("Te amo, me haces muy feliz aunque seas una cascarrabias.", 50, canvas.height / 2);
    }, 1000);
}

// Inicializar el juego
ctx.font = "14px Arial";
drawScene();
