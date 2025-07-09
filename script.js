

      // Typing animation for the text

const sentences = [
      "Frontend Designer.",
      "Web Designer.",
    ];

    let sentenceIndex = 0;
    let charIndex = 0;
    const speed = 100;        // speed of typing
    const pause = 1500;       // pause before next sentence

    function typeSentence() {
      const current = sentences[sentenceIndex];
      if (charIndex <= current.length) {
        document.getElementById("text").textContent = current.substring(0, charIndex);
        charIndex++;
        setTimeout(typeSentence, speed);
      } else {
        setTimeout(() => {
          charIndex = 0;
          sentenceIndex = (sentenceIndex + 1) % sentences.length;
          typeSentence();
        }, pause);
      }
    }

    typeSentence(); // start the animation


        // Hamburger menu functionality

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); // this triggers
});