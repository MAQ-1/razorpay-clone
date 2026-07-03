// import GSAP library
import { TweenLite } from 'gsap';

// select welcome section
const welcomeSection = document.getElementById('welcome');

// define animation
const animation = TweenLite.to(welcomeSection, 1, { opacity: 1, display: 'block' });

// add trigger to login and signup buttons
const loginButton = document.querySelector('#login-button');
const signupButton = document.querySelector('#signup-button');
loginButton.addEventListener('click', () => {
  animation.play();
});
signupButton.addEventListener('click', () => {
  animation.play();
});