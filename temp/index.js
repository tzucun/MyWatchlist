let currentSlide = 0;
const images = document.querySelectorAll('.big-img > img');
const totalSlides = images.length;
const imagesContainer = document.querySelector('.images');

// Recommended images with titles and synopses
const recommendedData = [
    [
        { src: 'images/image1.jpg', title: 'Ao No Hako', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image2.jpg', title: 'Ao No Hako 2', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image3.jpg', title: 'Ao No Hako 3', synopsis: 'The series focuses on Taiki Inomata...' }
    ],
    [
        { src: 'images/image2.jpg', title: 'Takagi-San', synopsis: 'Nakiri Ayame is a female Japanese Virtual YouTuber...' },
        { src: 'images/image3.jpg', title: 'Nakiri Ayame', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image4.jpg', title: 'Ho-kago Tea Time', synopsis: 'The series focuses on Taiki Inomata...' }
    ],
    [
        { src: 'images/image3.jpg', title: 'Nakiri Ayame', synopsis: 'Nakiri Ayame is a female Japanese Virtual YouTuber...' },
        { src: 'images/image4.jpg', title: 'Ho-kago Tea Time', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image5.jpg', title: 'Ao No Hako', synopsis: 'The series focuses on Taiki Inomata...' }
    ],
    [
        { src: 'images/image4.jpg', title: 'Takagi-San', synopsis: 'Nakiri Ayame is a female Japanese Virtual YouTuber...' },
        { src: 'images/image5.jpg', title: 'Nakiri Ayame', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image6.jpg', title: 'Ho-kago Tea Time', synopsis: 'The series focuses on Taiki Inomata...' }
    ],
    [
        { src: 'images/image5.jpg', title: 'Takagi-San', synopsis: 'Nakiri Ayame is a female Japanese Virtual YouTuber...' },
        { src: 'images/image6.jpg', title: 'Nakiri Ayame', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image1.jpg', title: 'Ho-kago Tea Time', synopsis: 'The series focuses on Taiki Inomata...' }
    ],
    [
        { src: 'images/image6.jpg', title: 'Takagi-San', synopsis: 'Nakiri Ayame is a female Japanese Virtual YouTuber...' },
        { src: 'images/image1.jpg', title: 'Nakiri Ayame', synopsis: 'The series focuses on Taiki Inomata...' },
        { src: 'images/image2.jpg', title: 'Ho-kago Tea Time', synopsis: 'The series focuses on Taiki Inomata...' }
    ],
    // Add more entries for other slides...
];

// Set the width of the images container based on the number of images
imagesContainer.style.width = `${totalSlides * 100}%`;

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
    const recommendedCards = document.querySelectorAll('.moovies .card');
    recommendedData[slideIndex].forEach((data, index) => {
        const card = recommendedCards[index];
        card.querySelector('img').src = data.src;
        card.querySelector('.rec-title').textContent = data.title;
        card.querySelector('.rec-synopsis').textContent = data.synopsis;
    });
}

  
const swiper = new Swiper('.ft-sliders', {
    loop : true,
    slidesPerView: 3,
    spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nexta",
        prevEl: ".preva",
      },
});
  
// Optional: Auto-slide every 5 seconds
// setInterval(nextSlide, 5000);
