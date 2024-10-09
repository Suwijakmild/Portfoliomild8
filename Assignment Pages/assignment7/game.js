window.onload = function () {
    document.getElementById('start').addEventListener('click', startGame);
};

function startGame() {
    alert("Ready!");
    createBoxes();
    startTimer();
}

function startTimer() {
    const TIMER_INTERVAL = 1000;
    let remainingTime = 30; // 0.5 minutes = 30 seconds
    const clockDisplay = document.getElementById('clock');
    const timer = setInterval(() => {
        remainingTime--;
        clockDisplay.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Game Over!");
            resetGame();
        }

        if (document.querySelectorAll("#layer .square").length === 0) {
            clearInterval(timer);
            alert("You Win!");
        }
    }, TIMER_INTERVAL);
}

function createBoxes() {
    const numBoxes = parseInt(document.getElementById('numbox').value);
    const gameLayer = document.getElementById('layer');
    const boxColor = document.getElementById('color').value;

    for (let i = 0; i < numBoxes; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add('square', boxColor);
        newBox.id = `box${i}`;
        newBox.style.left = `${Math.random() * (500 - 25)}px`;
        newBox.style.top = `${Math.random() * (500 - 25)}px`;
        gameLayer.appendChild(newBox);

        newBox.addEventListener('click', () => {
            newBox.remove();
        });
    }
}

function resetGame() {
    document.querySelectorAll("#layer .square").forEach(box => box.remove());
}
