function countDouwn(seconds) {
    const timer = document.getElementById('timer');
    let remainingTime = parseInt(timer.textContent, 10);

    function updateTimer() {
        timer.textContent = remainingTime;

        if (remainingTime < 0) {
            alert('Вы победили в конкурсе!')
            return;
        }
        remainingTime--;
        setTimeout(updateTimer, 1000);
    }
    updateTimer();
}

countDouwn();
