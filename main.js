 
//     let lastScrollY = window.scrollY;

//     window.addEventListener('scroll', function () {
//       const navbar = document.querySelector('.navbar');

//       if (window.scrollY > lastScrollY && window.scrollY > 50) {
//         navbar.classList.add('hide');  // scrolling down
//       } else {
//         navbar.classList.remove('hide'); // scrolling up
//       }

//       lastScrollY = window.scrollY; // last scroll position
//     });
  
   
   
   
//    // Improved IntersectionObserver for replayable animation
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     }, {
//       threshold: 0.2 // Trigger when 20% visible
//     });

    // document.querySelectorAll('.intro').forEach((el) => observer.observe(el));
  
    // window.addEventListener('load', () => {
    //   document.body.classList.add('page-loaded');
    // });
  



