const images = document.querySelectorAll('.diapositiva img');
let currentImageIndex = 0;
const totalImages = images.length;

function showNextImage() {
    // Remove the 'active' class from the current image
    images[currentImageIndex].classList.remove('active');
    
    // Calculate the next image index
    currentImageIndex = (currentImageIndex + 1) % totalImages;

    // Add the 'active' class to the next image
    images[currentImageIndex].classList.add('active');
}

// Set the first image as active
images[currentImageIndex].classList.add('active');

// Change image every 3 seconds
setInterval(showNextImage, 3000);
