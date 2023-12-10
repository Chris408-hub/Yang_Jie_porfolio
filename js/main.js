(() => {


  //hamburger menu
  
const hamButton = document.querySelector('.hamburger-button');
const burgerCon = document.querySelector('#burger-con');

function hamburgerMenu() {
    burgerCon.classList.toggle('slide-toggle');
    hamButton.classList.toggle('expanded');
}

hamButton.addEventListener('click', hamburgerMenu, false);






})();