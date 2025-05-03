// main.js (Modular & Clean)

const PageEffects = {
    fadeInPage() {
      document.body.style.opacity = 0;
      setTimeout(() => {
        document.body.style.transition = "opacity 1.2s ease-in-out";
        document.body.style.opacity = 1;
      }, 50);
    }
  };
  
  const SoundToggle = {
    rain: null,
  
    init(rainElementId = "rainSound") {
      this.rain = document.getElementById(rainElementId);
      if (!this.rain) return;
  
      document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "m") {
          this.rain.muted = !this.rain.muted;
          alert(`Rain sound ${this.rain.muted ? "muted" : "unmuted"}`);
        }
      });
    }
  };
  
  // Run on page load
  document.addEventListener("DOMContentLoaded", () => {
    PageEffects.fadeInPage();
    SoundToggle.init();
  });