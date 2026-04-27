// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle with animation
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');

menuBtn?.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('open');
  
  // Change menu icon
  if (mobileNav.classList.contains('open')) {
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
  } else {
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
  }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('#mobileNav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('open');
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { 
      e.target.classList.add('show'); 
      obs.unobserve(e.target); 
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => obs.observe(el));

// Animate on scroll for elements
const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute('data-delay') || 0;
      setTimeout(() => {
        entry.target.classList.add('animated');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateOnScroll.forEach(el => observer.observe(el));

// Gallery carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const dots = document.querySelectorAll('.galeri-dot');
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  currentSlide = (n + totalSlides) % totalSlides;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Next/previous buttons
document.getElementById('next-btn')?.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

document.getElementById('prev-btn')?.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// Dot indicators
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Remove pulse (if you later add) on click
const waPill = document.getElementById('waPill');
waPill?.addEventListener('click', () => waPill.classList.remove('pulse'));