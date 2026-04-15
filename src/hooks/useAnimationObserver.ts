import { useEffect } from "react";

const useAnimationObserver = (
  animationClass: string,
  className: string,
): void => {
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
