let currentSlide = 0;
const images = document.querySelectorAll('.big-img > img');
const totalSlides = images.length;
const imagesContainer = document.querySelector('.images');
const recommendedImages = [
    ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'],
    ['images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'],
    ['images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'],
    ['images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg'],
    ['images/image5.jpg', 'images/image6.jpg', 'images/image1.jpg'],
    ['images/image6.jpg', 'images/image1.jpg', 'images/image2.jpg']
];

// Set the width of the images container based on the number of images
imagesContainer.style.width = `${totalSlides * 100}%`; // Each image takes 100% of the container width

function showSlide(index) {
    // Adjust the index to wrap around
    currentSlide = (index + totalSlides) % totalSlides;

    // Calculate the new transform value
    const offset = -currentSlide * (100 / totalSlides); // Each image takes 100% of the width
    imagesContainer.style.transform = `translateX(${offset}%)`;

    // Update recommended images
    updateRecommendedImages(currentSlide);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Update the recommended images based on the current slide
function updateRecommendedImages(slideIndex) {
    const recommendedCards = document.querySelectorAll('.moovies .card img');
    recommendedImages[slideIndex].forEach((src, index) => {
        recommendedCards[index].src = src;
    });
}

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
