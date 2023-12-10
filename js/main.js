
// import { closePage, openPage } from './lightbox.js';


(() => {


  //hamburger menu
  
  const hamButton = document.querySelector('#button');
  const burgerCon = document.querySelector('#burger-con');
  
	function hamburgerMenu() {
		burgerCon.classList.toggle('slide-toggle');
		hamButton.classList.toggle('expanded');
	};


  hamButton.addEventListener('click', hamburgerMenu, false);


//about me page image animation
  
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.registerPlugin(ScrollToPlugin);

//   const workImg = document.querySelector(".work-image");
//   const lifeImg = document.querySelector(".life-image");

// gsap.to(workImg, {
//       duration: 1, // 动画持续时间（秒）
//       left: '0', // 将照片从右侧移动到左侧显示
//       ease: 'power2.out' // 缓动效果，可以根据需要调整
//     });

//     // 网页滚动动画示例（假设要对整个页面的滚动添加动画）
//     gsap.to(window, {
//       scrollTrigger: {
//         trigger: "#self-intro",
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: true // 可以根据需要调整
//       },
//       // 添加滚动动画效果，例如改变背景颜色或元素位置
//       x: "20%", ease: Bounce.easeOut// 这里是示例，可以根据需要修改
//     });
  

  
  // gsap.to(photo, {
  //     duration: 1, // 动画持续时间（秒）
  //     left: '0', // 将照片从右侧移动到左侧显示
  //     ease: 'power2.out' // 缓动效果，可以根据需要调整
  //   });
  
  
  // gsap.to(workImg, 3,
	// 	{scrollTrigger: {
	// 		trigger: "#self-intro",
  //           toggleActions: "restart pause reverse none",
  //           markers: true,
  //           start: "top center",
  //           end:"bottom center"
	// 	}, 
  //     x: "20%", ease: Bounce.easeOut
	// 	});
  




  //thanks page close button
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
  
})();