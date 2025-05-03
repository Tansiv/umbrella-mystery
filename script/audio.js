// audio.js – handles sound effects

const SoundManager = (function () {
    const audioFiles = {
      click: new Audio("assets/audio/mouse-click-331781.mp3"),
      rain: new Audio("assets/audio/Rain_Loop.mp3"),
      unlock: new Audio("assets/audio/whisper_unlock.mp3"),
    };
  
    // Loop rain sound
    audioFiles.rain.loop = true;
  
    // Set volume
    audioFiles.click.volume = 0.4;
    audioFiles.rain.volume = 0.3;
    audioFiles.unlock.volume = 0.6;
  
    return {
      clickChime() {
        audioFiles.click.currentTime = 0;
        audioFiles.click.play();
      },
      playRain() {
        audioFiles.rain.play();
      },
      stopRain() {
        audioFiles.rain.pause();
        audioFiles.rain.currentTime = 0;
      },
      playUnlock() {
        audioFiles.unlock.currentTime = 0;
        audioFiles.unlock.play();
      }
    };
  })();
  