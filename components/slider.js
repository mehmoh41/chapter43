// import "./style.css";
// import $ from "jquery";
// import { gsap } from "gsap";
// var global;
// global.jQuery = $;

// (function($) {
//   $(document).ready(function(e) {
//     homeCarousel();
//   });

//   var homeCarousel = function() {
//     var circle = document.getElementById("circle");
//     var button = document.getElementById("timer-btn");
//     var allImgs = $(".bg-imgs > div");
//     var allDots = $(".dots li");
//     var currentStep = 0;
//     var tl = gsap.timeline();
//     var intervalTimer;
//     var timeLeft;
//     var wholeTime = 8;
//     var isPaused = false;
//     var isStarted = false;
//     var radius = 28;
//     var initialOffset = Math.PI * 2 * radius;

//     if (circle) {
//       wholeTime = parseInt(circle.dataset.time, 10);
//       animateTimer();
//       pauseTimer();
//     }

//     button.addEventListener("click", pauseTimer);

//     function animateTimer() {
//       tl.to("#circle", {
//         duration: wholeTime,
//         startAt: {
//           strokeDashoffset: initialOffset
//         },
//         strokeDashoffset: 0,
//         repeat: -1,
//         ease: "linear",
//         onComplete: tl.invalidate
//       });
//     }

//     function changeBackground() {
//       allImgs.fadeOut(800);
//       allImgs.eq(currentStep).fadeIn(800);
//       allDots.removeClass("active");
//       allDots.eq(currentStep).addClass("active");
//     }

//     allDots.on("click", function() {
//       var btnIndex = $(this).index();
//       currentStep = btnIndex;
//       changeBackground();
//       clearInterval(intervalTimer);
//       isStarted = false;
//       isPaused = false;
//       tl.pause(0);
//       pauseTimer();
//     });

//     $(".dots li")
//       .eq(0)
//       .addClass("active");

//     function timer(seconds) {
//       var remainTime = Date.now() + seconds * 1000;

//       intervalTimer = setInterval(function() {
//         timeLeft = ((remainTime - Date.now()) / 1000).toFixed(2);

//         if (timeLeft <= 0) {
//           tl.restart();
//           clearInterval(intervalTimer);
//           isStarted = false;
//           currentStep = currentStep + 1 < allImgs.length ? currentStep + 1 : 0;
//           pauseTimer();
//           changeBackground();
//           return;
//         }
//       }, 10);
//     }

//     function pauseTimer() {
//       if (isStarted === false) {
//         timer(wholeTime);
//         isStarted = true;
//         button.classList.remove("play");
//         button.classList.add("pause");
//         tl.paused(false);
//       } else if (isPaused) {
//         button.classList.remove("play");
//         button.classList.add("pause");
//         timer(timeLeft);
//         isPaused = isPaused ? false : true;
//         tl.paused(isPaused);
//       } else {
//         button.classList.remove("pause");
//         button.classList.add("play");
//         clearInterval(intervalTimer);
//         isPaused = isPaused ? false : true;
//         tl.paused(isPaused);
//       }
//     }
//   };
// })(jQuery);
