'use strict';

import { handleViewportChange as handleViewportChange } from './videoBannerAccessibility.js';
import { setElementSticky as setElementSticky } from './sticky-nav.js';
import { setupScrolltopBtn as setupScrolltopBtn } from './scroll-top-btn.js';
import { setupChatbotBtn as setupChatbotBtn } from './chatbot.js'
import { setupCarousselFct as setupCarousselFct } from './caroussel.js'



document.addEventListener('DOMContentLoaded', function () {
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  /**
   * Hide/reveal DOM elements to accessible technologies based on media queries
   */
  // 1) Initial check
  handleViewportChange(mediaQuery);  
  // 2) Listen for changes in the viewport width
  mediaQuery.addListener(handleViewportChange);


  // Setting up sticky nav ...
  // setElementSticky('main-nav');

  // Setting up scrolltop button ...
  setupScrolltopBtn('scroll-top-button', 300);

  // Setting chatbot trigger ...
  setupChatbotBtn();

  // Setting caroussel functionality ...
  setupCarousselFct();
});


/**
 * TODO:
 * -- PUT THIS IN ITS OWN FILE WHENEVER POSSIBLE
 */
document.addEventListener('DOMContentLoaded', function () {

  // This function adds/removes a class to the nav when the page scrolls past a threshold
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


