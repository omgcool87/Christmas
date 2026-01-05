let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const track = document.querySelector('.carousel-track');

function updateCarousel() {
    // 核心邏輯：往左移動百分比 = 索引值 * 100
    gsap.to(track, {
        xPercent: -currentIndex * 100,
        duration: 0.6,
        ease: "power2.inOut"
    });
}

document.querySelector('#nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // 循環回到第一張
    }
    updateCarousel();
});

document.querySelector('#prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // 循環到最後一張
    }
    updateCarousel();
});