// thanksPage.js

function thanksPage() {
  const thanksBtn = document.querySelector('#close-btn');
  const openBtn = document.querySelector('#message-btn');
  const lightbox = document.querySelector('#thanks-light-box');

  function closePage() {
    lightbox.style.display = 'none';
  }

  function openPage() {
    lightbox.style.display = 'block';
  }

  openBtn.addEventListener('click', openPage);
  thanksBtn.addEventListener('click', closePage);
}

thanksPage();
