function startCountdown() {
    const targetDate = new Date('2025-01-31T18:00:00');
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    function updateCountdown() {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            clearInterval(interval);
            countdownElements.days.textContent = '0';
            countdownElements.hours.textContent = '0';
            countdownElements.minutes.textContent = '0';
            countdownElements.seconds.textContent = '0';
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElements.days.textContent = days;
        countdownElements.hours.textContent = hours;
        countdownElements.minutes.textContent = minutes;
        countdownElements.seconds.textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

document.addEventListener('DOMContentLoaded', startCountdown);

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll("img");
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 3000); // Cambia la imagen cada 3 segundos
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Reinicia la animación
                }
            });
        },
        {
            threshold: 0.1, // Activar cuando el 10% del elemento sea visible
        }
    );

    fadeInElements.forEach(el => observer.observe(el));
});
