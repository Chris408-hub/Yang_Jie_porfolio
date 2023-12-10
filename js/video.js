
// videoControls.js

function videoControls() {
  const video = document.querySelector('#myVideo');
  const playButton = document.querySelector('#playButton');
  const pauseButton = document.querySelector('#pauseButton');
  const restartButton = document.querySelector('#restartButton');

  playButton.addEventListener('click', function () {
    video.play();
  });

  pauseButton.addEventListener('click', function () {
    video.pause();
  });

  restartButton.addEventListener('click', function () {
    video.currentTime = 0;
    video.play();
  });
}

videoControls();