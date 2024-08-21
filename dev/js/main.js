'use strict';

import { setupScrolltopBtn as setupScrolltopBtn } from './scroll-top-btn.js';
import { setupChatbotBtn as setupChatbotBtn } from './chatbot.js'
import { setupCarousselFct as setupCarousselFct } from './caroussel.js'



document.addEventListener('DOMContentLoaded', function () {
  // Setting up scrolltop button ...
  setupScrolltopBtn('scroll-top-button', 300);

  // Setting chatbot trigger ...
  setupChatbotBtn();

  // Setting caroussel functionality ...
  setupCarousselFct();
});


/**
 * Automatically collapse the Bootstrap navbar when a nav item is clicked on mobile devices
 * TODO:
 * -- PUT THIS IN ITS OWN FILE WHENEVER POSSIBLE
 */
$(document).ready(function() {
  // Select all nav items
  $('.navbar-collapse .nav-item').on('click', function() {
    // Check if the navbar is expanded (visible)
    var $navbar = $('.navbar-collapse');
    if ($navbar.hasClass('show')) {
      // Collapse the navbar
      $navbar.collapse('hide');
    }
  });
});


/**
 * This function adds/removes a class to the nav when the page scrolls past a threshold
 * TODO: 
 * -- PUT THIS IN ITS OWN FILE WHENEVER POSSIBLE
 */
document.addEventListener('DOMContentLoaded', function () { 
  const navigation = document.querySelector('#main-nav'); // Change 'nav' to your navigation element selector
  const threshold = 100; // Set your desired scroll threshold in pixels
  const activeClass = 'navbar-masked'; // Set the class to add/remove

  function handleScroll() {
      if (window.scrollY > threshold) {
          navigation.classList.add(activeClass);
      } else {
          navigation.classList.remove(activeClass);
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Check scroll position on page load
  handleScroll();
});


