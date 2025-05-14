import React from 'react';

export const initAnimations = () => {
  const handleScroll = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.85;
      
      if (elementPosition < screenPosition) {
        element.classList.add('appear');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once on load
  setTimeout(handleScroll, 100);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};