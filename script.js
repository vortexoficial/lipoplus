// =======================================
// SCRIPT DO LOADER (DO SITE DE REFERÊNCIA)
// =======================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Tempo do loader (2.5s)
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');
            // Remove o loader da DOM após a animação
            setTimeout(() => {
                if (loader) loader.remove();
            }, 400); 
        }
    }, 1500); 
});


// =======================================
// SCRIPTS DA PÁGINA (SCROLL E FADE-IN)
// =======================================
document.addEventListener('DOMContentLoaded', () => {

    // =======================================
    // 1. SCROLL SUAVE PARA ÂNCORAS
    // =======================================
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =======================================
    // 2. ANIMAÇÃO DE FADE-IN AO ROLAR
    // =======================================
    
    const sectionsToAnimate = document.querySelectorAll('.section-padding');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // =======================================
    // 3. NOVO: SCRIPT FAQ ACCORDION
    // =======================================
    const allFaqQuestions = document.querySelectorAll('.faq-question');
    
    allFaqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement; // .faq-item
            const answer = question.nextElementSibling; // .faq-answer

            // Verifica se o item clicado já está ativo
            if (item.classList.contains('active')) {
                // Se sim, remove a classe 'active' e recolhe a resposta
                item.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                // Se não, adiciona a classe 'active' e expande a resposta
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
    // --- FIM FAQ ---

});