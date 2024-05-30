$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay: true,
      autoplayTimeout: 3000, 
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });
      // // // Функция для листания картинок снизу
       window.onscroll = function() {scrollFunction()};  
     
      function scrollFunction() {  
      let homeSection = document.getElementById("home"); 
      let scrollTopBtn = document.getElementById("scrollTopBtn"); 
       if (window.pageYOffset > 200) {  
         scrollTopBtn.style.display = "block";  
       } else {  
           scrollTopBtn.style.display = "none";  
   }  
       }  
     document.getElementById("scrollTopBtn").addEventListener('click', function() {  
      document.body.scrollTop = 0;  
     document.documentElement.scrollTop = 0;  
       }); 