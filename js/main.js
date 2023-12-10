(() => {


  //hamburger menu
  
const hamButton = document.querySelector('.hamburger-button');
const burgerCon = document.querySelector('#burger-con');

function hamburgerMenu() {
    burgerCon.classList.toggle('slide-toggle');
    hamButton.classList.toggle('expanded');
}

  hamButton.addEventListener('click', hamburgerMenu, false);
  
// show and hide
    const allButton = document.querySelector('#all');
    const codeButton = document.querySelector('#code');
    const designButton = document.querySelector('#design');

    const allProjects = document.querySelectorAll('.gallery-box');
    const codeProjects = document.querySelectorAll('.code');
    const designProjects = document.querySelectorAll('.design');

    function hideAllProjects() {
        allProjects.forEach(project => {
            project.style.display = 'none';
        });
    }

    function showAllProjects() {
        allProjects.forEach(project => {
            project.style.display = 'block';
        });
    }

    function showCodeProjects() {
        hideAllProjects();
        codeProjects.forEach(project => {
            project.style.display = 'block';
        });
    }

    function showDesignProjects() {
        hideAllProjects();
        designProjects.forEach(project => {
            project.style.display = 'block';
        });
    }

    allButton.addEventListener('click', showAllProjects);
    codeButton.addEventListener('click', showCodeProjects);
    designButton.addEventListener('click', showDesignProjects);
  
// video 

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
  
  //thanks page close button
const thanksBtn = document.querySelector('#close-btn');
const openBtn = document.querySelector('#message-btn');
const lightbox = document.querySelector('#thanks-light-box');


function closePage() {
    lightbox.style.display = 'none';
    };

    
function openPage() {
      lightbox.style.display = 'block';
    };
  openBtn.addEventListener('click', openPage);
  thanksBtn.addEventListener('click', closePage);
  

  
  //about me page - greensock animation
  

  
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#main-header nav ul li a");

    function scrollLink(e) {
      e.preventDefault();
      console.log(e.currentTarget.hash);
      let selectedLink = e.currentTarget.hash;
      gsap.to(window, { duration: 1, scrollTo: { y: `${selectedLink}`, offsetY: 100 } });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", scrollLink);
    });

    gsap.to(".self-image", 3,
      {
        scale: 0.5,
        scrollTrigger: {
          trigger: ".self-image",
          toggleActions: "restart pause reverse none",
          markers: false,
          start: "top center",
          end: "bottom center",
          scrub: true
        },
        x: "20%", ease: Bounce.easeOut
      });
  








})();
