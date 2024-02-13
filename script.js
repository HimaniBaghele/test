const navigation =
 document.querySelectorAll('.primary-navigation');

 const navigationHeight = navigation.offsetHeight;
 document.documentElement.style.setProperty(
  "--scroll-padding", navigationHeight + "px");
  

function showSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.right = "0";
    // console.log("yes");
  }

  function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.right = "-700px";
  }

//   var currentSlide = 0;
// var slides = document.getElementsByClassName('slide');

// function showSlide(n) {
//   if (n >= slides.length-1) {
//     currentSlide = 0;
//   } else if (n < 0) {
//     currentSlide = slides.length - 1;
//   } else {
//     currentSlide = n;
//   }
  
//   for (var i = 0; i < slides.length-1; i++) {
//     slides[i].style.display = 'none';
//   }
  
//   slides[currentSlide].style.display = 'block';
// }

// function changeSlide(n) {
//   showSlide(currentSlide + n);
// }

// changeSlide(currentSlide);


// for logo
let currentImage1;

function enlargeImage1(target) {
  if (target.tagName === "IMG") {
    const imageContainerr = target.parentElement;

    if (currentImage1) {
      currentImage1.classList.remove("center");
      console.log("sdfgh");
    }

    imageContainerr.classList.add("center");
    currentImage1 = imageContainerr;
    console.log(imageContainerr);
  }
  
 
}



// // Javascript for image slider autoplay navigation
// var repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   var repeater = () => {
//     setTimeout(function(){
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       });

//     slides[i].classList.add('active');
//     btns[i].classList.add('active');
//     i++;

//     if(slides.length == i){
//       i = 0;
//     }
//     if(i >= slides.length){
//       return;
//     }
//     repeater();
//   }, 10000);
//   }
//   repeater();
// }
// repeat();

window.onload = function() {
  // Trigger the animation when the page finishes loading
  document.querySelector('.robo').style.animation = 'slide-in 1s ease-in-out forwards';
};







// document.addEventListener("DOMContentLoaded", function() {
//   var secondSection = document.getElementById("section3");
//   var animatedDiv = document.createElement("div");
//   animatedDiv.className = "animated-div";
//   secondSection.appendChild(animatedDiv);

//   var handleScroll = function() {
//     var rect = secondSection.getBoundingClientRect();
//     var windowHeight = window.innerHeight || document.documentElement.clientHeight;
//     if (rect.top <= windowHeight && rect.bottom >= 0) {
//       animatedDiv.style.right = "170px";
//       animatedDiv.style.top = "130px";
//     } else {
//       animatedDiv.style.right = "-50%";
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   console.log("yes");

  
// } );

// document.addEventListener("DOMContentLoaded", function() {
//   var secondSection = document.getElementById("section3");
//   var leavescome = document.createElement("div");
//   leavescome.className = "leavescome";
//   secondSection.appendChild(leavescome);

//   var handleScroll = function() {
//     var rect = secondSection.getBoundingClientRect();
//     var windowHeight = window.innerHeight || document.documentElement.clientHeight;
//     if (rect.top <= windowHeight && rect.bottom >= 0) {
//      leavescome.style.left = "0";
//       leavescome.style.top = "16%";
//     } else {
//       leavescome.style.left = "-1000%";
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   console.log("black");

  
// } );


  // if (rect.top <= windowHeight && rect.bottom >= 0) {
  //   document.getElementById("leavescome").style.left = "0";
  //   document.getElementById("leavescome").style.top = "16%";

  //   } else {
  //    document.getElementById("leavescome").style.left = "-1000%";
  //   }


  // slide js  carousal

  // const slides = document.querySelectorAll('.slideshow-slide');
  //   const pointers = document.querySelectorAll('.slideshow-pointer');
  //   const section = document.querySelector('section');
  //   const sectionIndex = Array.from(document.querySelectorAll('section')).indexOf(section);

  //   let currentSlide = 0;

  //   function showSlide(slideIndex) {
  //     if (slideIndex < 0 || slideIndex >= slides.length) {
  //       return;
  //     }

  //     slides[currentSlide].classList.remove('active');
  //     pointers[currentSlide].classList.remove('active');

  //     currentSlide = slideIndex;

  //     slides[currentSlide].classList.add('active');
  //     pointers[currentSlide].classList.add('active');
  //   }

  //   function nextSlide() {
  //     const nextSlideIndex = (currentSlide + 1) % slides.length;
  //     showSlide(nextSlideIndex);

  //     if (nextSlideIndex === 0) {
  //       // Go to the next section when the slideshow is complete
  //       const nextSection = document.querySelectorAll('section')[sectionIndex + 1];
  //       if (nextSection) {
  //         nextSection.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }
  //   }

  //   setInterval(nextSlide, 3000);



  

  // function nextSlide() {
  //   const nextSlideIndex = (currentSlide + 1) % slides.length;
  //   showSlide(nextSlideIndex);

  //   if (nextSlideIndex === 0) {
  //     // Go to the next section when the slideshow is complete
  //     const nextSection = document.querySelectorAll('section3')[sectionIndex + 1];
  //     if (nextSection) {
  //       nextSection.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }

  // setInterval(nextSlide, 3000);


  document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('#carouselExampleCaptions');
    var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 2000, // Set the desired interval in milliseconds
      ride: true
    });
  });

  $(document).ready(function() {
    $('#carouselExampleCaptions').carousel({
      interval: 2000, // Set the desired interval in milliseconds
      ride: true
    });
  });


  // window.addEventListener('scroll', reveal);
  // function reveal() {
  //   var reveals = document.querySelectorAll('.reveal');
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var revealTop = reveals[i].getBoundingClientRect().top;
  //     var revealPoint = 150;

  //     if (revealTop < windowHeight - revealPoint) {
  //       reveals[i].classList.add('active');
  //     } else {
  //       reveals[i].classList.remove('active');
  //     }
  //   }
  // }

