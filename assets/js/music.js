 document.addEventListener("DOMContentLoaded", function() {

    var audio = new Audio('path/to/your/audio-file.mp3');

    audio.play();

    window.addEventListener("beforeunload", function() {
      audio.pause();
    });
  });
