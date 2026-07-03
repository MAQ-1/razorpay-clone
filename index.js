// Load the GSAP script
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js';
document.head.appendChild(script);

// Check if the GSAP object is available
if (window.gsap) {
  // Animate the welcome message using GSAP
  gsap.from('.welcome', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.5,
  });
} else {
  // Display the welcome message without animation if the GSAP script fails to load
  const welcomeMessage = document.querySelector('.welcome');
  welcomeMessage.style.display = 'block';
}