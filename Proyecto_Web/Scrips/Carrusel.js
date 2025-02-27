let index = 0;

function showSlide() {
    const carousel = document.getElementById('carousel');
    const totalSlides = document.querySelectorAll('.carousel img').length;
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    carousel.style.transform = `translateX(-${index * 33.33}%)`;
    updateDots();
}

function nextSlide() { 
    index++; 
    showSlide(); 
}

function prevSlide() { 
    index--; 
    showSlide(); 
}

function setSlide(slideIndex) { 
    index = slideIndex; 
    showSlide(); 
}

function updateDots() {
    const dots = document.querySelectorAll('.dots span');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Desplazamiento automático cada 3 segundos
setInterval(() => {
    nextSlide();
}, 3000);