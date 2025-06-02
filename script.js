const audio = document.getElementById('audio');
const playBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent || 0;
});

progress.addEventListener('input', () => {
  const time = (progress.value / 100) * audio.duration;
  audio.currentTime = time;
});