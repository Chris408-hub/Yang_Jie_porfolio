// aboutMePage.js



  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const navLinks = document.querySelectorAll("#main-header nav ul li a");

  function scrollLink(e) {
    e.preventDefault();
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
