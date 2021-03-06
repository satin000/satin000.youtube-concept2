const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
    
     
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
   
  });

  
  const swiper2 = new Swiper('.channel-2-slider', {
    // Optional parameters
    
    loop: true,
    slidesPerView: 1,  
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      },
      
    },
    
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-2-button-next',
      prevEl: '.channel-2-button-prev',
    },
  
   
  });

  const swiper3 = new Swiper('.channel-3-slider', {
    // Optional parameters
    
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-3-button-next',
      prevEl: '.channel-3-button-prev',
    },
  
   
  });

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');


});


if(document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();
}