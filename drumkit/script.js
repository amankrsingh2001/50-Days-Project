const piano = document.querySelectorAll(".piano");

piano.forEach((piano) => {
  window.addEventListener("keydown", (e) => {
    if (e.key === piano.dataset.key) {
      const audio = piano.querySelector("audio");
      audio.play();
    }
    if (e.key === " ") {
      const audio = piano.querySelector("audio");
      audio.pause();
    }
  });
});

piano.forEach((piano) => {
  piano.addEventListener("click", (e) => {
    const audio = piano.querySelector("audio");
    audio.play();
  });
});
