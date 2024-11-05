document.getElementById('startBtn').addEventListener('click', () => {
    const timeInput = document.getElementById('timeInput');
    const timerDisplay = document.getElementById('timer');
    let time = parseInt(timeInput.value);

    if (isNaN(time) || time <= 0) {
        alert('Введите корректное время (целое число больше 0)');
        return;
    }

    timerDisplay.textContent = time + ' секунд';

    const interval = setInterval(() => {
        time -= 1;
        if (time > 0) {
            timerDisplay.textContent = time + ' секунд';
        } else {
            clearInterval(interval);
            timerDisplay.textContent = 'Время вышло';

            // Добавляем воспроизведение звука
            const audio = new Audio('knopka-inoplanetnogo-pribora1.mp3');
            audio.play();
        }
    }, 1000);
});
