// src/hooks/useAnimationObserver.js
import { useEffect } from "react";

const useAnimationObserver = (animationClass, className) => {
  useEffect(() => {
    const elements = document.querySelectorAll(className);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    // Cleanup the observer on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [animationClass, className]); // Dependencies for the useEffect
};

export default useAnimationObserver;
