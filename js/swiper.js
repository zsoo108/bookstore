      var mainSwiper = new Swiper('.mySwiper', {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
          
          navigation: {
            nextEl: '#slider .swiper-button-next',
            prevEl: '#slider .swiper-button-prev',
          },

          autoplay: {
            delay:3000,
            disableOnInteraction:false,
          },
      });

      var section1Swiper = new Swiper('.section1Swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,

        navigation: {
          nextEl: '#section1 .swiper-button-next',
          prevEl: '#section1 .swiper-button-prev',
        },
        on: {
            init: function() {
              updateSection1Buttons(this);
          },
            slideChange: function () {
              updateSection1Buttons(this);
          }
        }
      });

      function updateSection1Buttons(swiper) {
          const prev = document.querySelector('#section1 .swiper-button-prev');
          const next = document.querySelector('#section1 .swiper-button-next');

          if (swiper.activeIndex === 0) {
            // 첫 번째 페이지
            prev.style.display = 'none';
            next.style.display = 'flex';
          } else {
            // 두 번째 페이지
            prev.style.display = 'flex';
            next.style.display = 'none';
          }
      }

      

      
      var sectionSwiper = new Swiper('.s1Swiper', {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 5,
        
        navigation: {
        nextEl: '#section2 .swiper-button-next',
        prevEl: '#section2 .swiper-button-prev',
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      function toggleBusiness() {
        const info = document.getElementById("businessInfo");

        if(info.style.display === "none") {
          info.style.display = "block";
        }else{
          info.style.display = "none";
        }
      }
