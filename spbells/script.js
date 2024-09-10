document.addEventListener('DOMContentLoaded', function () {
    // ------------------ Carrusel Infinito ------------------
    const carrusel = document.querySelector('.carrusel-items');
    if (carrusel) {
        const items = Array.from(carrusel.children); // Hacemos una copia estática de los elementos
        const totalItems = items.length;

        // Duplicamos los elementos una sola vez
        for (let i = 0; i < totalItems; i++) {
            let clone = items[i].cloneNode(true);
            carrusel.appendChild(clone);
        }
    }

    // ------------------ Diapositiva Móvil ------------------
    const imagesMobile = document.querySelectorAll('.diapositiva-mobile img');
    let currentImageIndexMobile = 0;
    const totalImagesMobile = imagesMobile.length;

    if (totalImagesMobile > 0) {
        function showNextImageMobile() {
            imagesMobile[currentImageIndexMobile].classList.remove('active');
            currentImageIndexMobile = (currentImageIndexMobile + 1) % totalImagesMobile;
            imagesMobile[currentImageIndexMobile].classList.add('active');
        }
        imagesMobile[currentImageIndexMobile].classList.add('active');
        setInterval(showNextImageMobile, 3000);
    }

    // ------------------ Diapositiva PC ------------------
    const imagesPC = document.querySelectorAll('.diapositiva-pc img');
    let currentImageIndexPC = 0;
    const totalImagesPC = imagesPC.length;

    if (totalImagesPC > 0) {
        function showNextImagePC() {
            imagesPC[currentImageIndexPC].classList.remove('active');
            currentImageIndexPC = (currentImageIndexPC + 1) % totalImagesPC;
            imagesPC[currentImageIndexPC].classList.add('active');
        }
        imagesPC[currentImageIndexPC].classList.add('active');
        setInterval(showNextImagePC, 3000);
    }

    // ------------------ Control de Scroll con Menu Toggle ------------------
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        });
    }

    // ------------------ Carrusel Manual ------------------
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Inicia el carrusel con la primera imagen
    if (slides.length > 0) {
        showSlide(currentSlide);
    }

    // Asignar eventos a los botones del carrusel
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }
});