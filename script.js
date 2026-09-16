document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // --- Header scroll effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(15, 23, 42, 0.9)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(15, 23, 42, 0.7)';
        }
    });

    // --- Form Validation ---
    const form = document.getElementById('contact-form');
    const nombreInput = document.getElementById('nombre');
    const nombreError = document.getElementById('nombre-error');
    const successMsg = document.getElementById('success-msg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const nombreValue = nombreInput.value.trim();

        if (nombreValue.length < 2) {
            nombreError.style.display = 'block';
            nombreInput.style.borderColor = 'var(--error)';
            isValid = false;
        } else {
            nombreError.style.display = 'none';
            nombreInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }

        if (isValid) {
            successMsg.style.display = 'block';
            form.reset();
            nombreInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 6000);
        } else {
            successMsg.style.display = 'none';
        }
    });

    nombreInput.addEventListener('input', () => {
        if (nombreInput.value.trim().length >= 2) {
            nombreError.style.display = 'none';
            nombreInput.style.borderColor = 'var(--primary)';
        }
    });
});
