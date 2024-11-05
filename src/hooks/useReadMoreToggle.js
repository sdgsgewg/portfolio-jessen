const useReadMoreToggle = () => {
  const toggleText = (id) => {
    const moreText = document.querySelector(`.moreText[data-id="${id}"]`);
    const button = document.querySelector(`.toggleButton[data-id="${id}"]`);

    if (moreText.style.display === "none") {
      moreText.style.display = "inline"; // Show the additional text
      button.textContent = "Read Less"; // Change button text
    } else {
      moreText.style.display = "none"; // Hide the additional text
      button.textContent = "Read More"; // Change button text
    }
  };

  return toggleText;
};

export default useReadMoreToggle;
