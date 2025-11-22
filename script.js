// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Effect for Product Cards
const productCards = document.querySelectorAll('.product-card');

const revealCard = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const cardObserver = new IntersectionObserver(revealCard, {
    root: null, // viewport
    threshold: 0.1, // 10% of the item visible
    rootMargin: '0px'
});

productCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    cardObserver.observe(card);
});

// Placeholder for Carousel/Slider (as mentioned in Body Konten Utama)
// This would typically involve a library like Swiper.js or custom logic
// For now, this is just a comment to indicate where it would go.
console.log('Carousel/Slider functionality would be implemented here.');

// Placeholder for Lazy Loading Images (as mentioned in Body Konten Utama)
// Modern browsers handle `loading="lazy"` attribute natively.
// For older browsers or more control, Intersection Observer can be used.
// Example:
// const lazyImages = document.querySelectorAll('img[data-src]');
// const loadImages = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.src = entry.target.dataset.src;
//             entry.target.removeAttribute('data-src');
//             observer.unobserve(entry.target);
//         }
//     });
// };
// const imageObserver = new IntersectionObserver(loadImages, {
//     root: null,
//     threshold: 0
// });
// lazyImages.forEach(img => imageObserver.observe(img));
console.log('Image lazy loading is handled natively by `loading="lazy"` attribute or could be enhanced with Intersection Observer.');
