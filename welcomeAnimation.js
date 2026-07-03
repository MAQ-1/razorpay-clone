/* Import GSAP */
import { TimelineLite } from 'gsap';

/* Create a timeline animation for the welcome text */
const welcomeTextAnimation = () => {
  const welcomeText = document.querySelector('.welcome-text');

  const timeline = new TimelineLite();

  timeline
   .from(welcomeText, 1, { opacity: 0, y: 50 })
   .to(welcomeText, 1, { opacity: 1, y: 0 })
   .from(welcomeText, 1, { opacity: 1, y: 0 })
   .to(welcomeText, 1, { opacity: 0, y: 50 });
};

/* Call the animation function on page load */
document.addEventListener('DOMContentLoaded', welcomeTextAnimation);