const countdownInterval = setInterval(updateCountdown, 1000);
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const current_date = new Date()  
    const selected_date = new Date(`${current_date.getFullYear()}-05-20.`)

    const current_date_str = current_date.toDateString()
    const selected_date_str = selected_date.toDateString()
    
    let time_difference = selected_date - current_date;
    
    if (time_difference <= 0) {
        selected_date.setFullYear(current_date.getFullYear() + 1)     
        time_difference = selected_date - current_date;
    }    
    
    if (current_date_str == selected_date_str) {
        countdownElement.textContent = '¡Hora de hacer desmadre!';
    } else {
        const days = Math.floor(time_difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time_difference % (1000 * 60)) / 1000);

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
        } else{
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
        }
    }
}
