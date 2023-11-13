const countdownInterval = setInterval(updateCountdown, 1000);
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const currentDate = new Date();
    const selectedDate = new Date("2024-05-20.");
    const timeDifference = selectedDate - currentDate;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = '¡Hora de hacer desmadre!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        if (days == 1 && hours == 1 && minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minuto, ${seconds} segundo`;
        } else if (hours == 1 && minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minuto, ${seconds} segundo`;
        } else if (days == 1 && hours == 1 && minutes == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minuto, ${seconds} segundos`;
        } else if (days == 1 && hours == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minutos, ${seconds} segundo`;
        } else if (days == 1 && minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minuto, ${seconds} segundo`;
        } else if (days == 1 && hours == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minutos, ${seconds} segundos`;
        } else if (days == 1 && minutes == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minuto, ${seconds} segundos`;
        } else if (days == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minutos, ${seconds} segundo`;
        } else if (hours == 1 && minutes == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minuto, ${seconds} segundos`;
        } else if (hours == 1 && seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minutos, ${seconds} segundo`;
        } else if (minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minuto, ${seconds} segundo`;
        } else if (seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundo`;
        } else if (minutes == 1) {
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minuto, ${seconds} segundos`;
        } else if (hours == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minutos, ${seconds} segundos`;
        } else if (days == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
        }
    }
}

