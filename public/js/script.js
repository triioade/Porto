document.addEventListener("DOMContentLoaded", function () {
  // Scroll Up/Down
  const scrollUpBtn = document.getElementById("scrollUp");
  const scrollDownBtn = document.getElementById("scrollDown");

  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", function () {
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
    });
  }

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", function () {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });
  }

  // Hapus ketik
  const typedTextElement = document.getElementById("typed-output");
  const textArray = ["Trio Ade Pamungkas ", "Teknik Informatika "];
  let arrayIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let hasStartedTyping = false;

  function type() {
    const currentText = textArray[arrayIndex];
    let minChars = currentText.startsWith("T") ? 1 : 0;

    if (isDeleting) {
      typedTextElement.textContent = currentText.substring(
        0,
        Math.max(charIndex--, minChars)
      );
    } else {
      typedTextElement.textContent = currentText.substring(0, charIndex++);
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      delay = 500;
      isDeleting = true;
    } else if (isDeleting && charIndex === minChars) {
      isDeleting = false;
      arrayIndex = (arrayIndex + 1) % textArray.length;
      delay = 200;
    }

    setTimeout(type, delay);
  }

  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {
    heroContent.addEventListener("animationend", () => {
      if (!hasStartedTyping) {
        hasStartedTyping = true;
        setTimeout(type, 200);
      }
    });
  }

  // Toggle Mode
  const modeToggle = document.getElementById("mode-toggle");
  const modeImage = document.getElementById("mode-image");

  if (modeToggle && modeImage) {
    modeToggle.addEventListener("click", function () {
      if (document.body.classList.contains("white-mode")) {
        modeImage.src = "2.png";
        document.body.classList.remove("white-mode");
      } else {
        modeImage.src = "1.png";
        document.body.classList.add("white-mode");
      }
    });
  }

  // AOS Animation
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});
