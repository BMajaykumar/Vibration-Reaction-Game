let startTime;
let timeoutID;

function startGame() {
    const startButton = document.getElementById('startButton');
    const reactionButton = document.getElementById('reactionButton');
    const message = document.getElementById('message');

    message.textContent = '';
    startButton.disabled = true;
    reactionButton.disabled = true;

    const countdown = document.createElement('p');
    countdown.textContent = 'Get ready...';
    message.appendChild(countdown);

    // Start countdown before enabling reaction button
    setTimeout(() => {
        message.removeChild(countdown);

        // Enable vibration if supported
        if (navigator.vibrate) {
            navigator.vibrate([500,400,500]); // Vibrate pattern
        }

        startTime = new Date().getTime();
        reactionButton.disabled = false;

        // Set timeout for reaction time
        timeoutID = setTimeout(() => {
            react();
        }, 2000); // Adjust timeout as needed (2 seconds for demo)
    }, 3000); // 3-second countdown before starting game
}

function react() {
    const reactionButton = document.getElementById('reactionButton');
    const startButton = document.getElementById('startButton');
    const message = document.getElementById('message');

    const reactionTime = new Date().getTime() - startTime;

    // Display reaction time message based on reaction time
    if (reactionTime < 100) {
        message.textContent = `🚀 Superhuman reaction! (${reactionTime} ms)`;
    } else if (reactionTime < 250) {
        message.textContent = `👍 Excellent reaction! (${reactionTime} ms)`;
    } else if (reactionTime < 500) {
        message.textContent = `🎉 Good reaction! (${reactionTime} ms)`;
    } else if (reactionTime < 1000) {
        message.textContent = `😅 Slow reaction... (${reactionTime} ms)`;
    } else {
        message.textContent = `😒 Try agin...)`;
    }

    // Enable start button again
    startButton.disabled = false;
    reactionButton.disabled = true;
}
