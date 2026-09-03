      // 메인
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

      // 지금 많이 읽고있는 작품
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

      // 오늘 리디 발견
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

      // 베스트
      var bestseleerSwiper = new Swiper('.bestsellerSwiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,

        navigation: {
          nextEl: '#bestseller .swiper-button-next',
          prevEl: '#bestseller .swiper-button-prev',
        },
        on: {
            init: function() {
              updatebestsellerButtons(this);
          },
            slideChange: function () {
              updatebestsellerButtons(this);
          }
        }
      });

      function updatebestsellerButtons(swiper) {
        const prev = document.querySelector('#bestseller .swiper-button-prev');
        const next = document.querySelector('#bestseller .swiper-button-next');

        if (swiper.isBeginning) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }

        if (swiper.isEnd) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
        }

      // 지금, 리디에서만! 선출간 신작
      var nowridiSwiper = new Swiper('.nowridiSwiper', {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 8,

        navigation: {
            nextEl: '#nowridi .swiper-button-next',
            prevEl: '#nowridi .swiper-button-prev',
        },


        on: {
            init: function() {
                updateNowridiButtons(this);
            },

            slideChange: function() {
                updateNowridiButtons(this);
            }
        }
    });


    function updateNowridiButtons(swiper) {
        const prev = document.querySelector('#nowridi .swiper-button-prev');
        const next = document.querySelector('#nowridi .swiper-button-next');

        if (swiper.isBeginning) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }

        if (swiper.isEnd) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
    }

    // 새로 나온 작품
    var newworkSwiper = new Swiper(".newworkSwiper", {
    slidesPerView: 6,
    spaceBetween: 4,
    navigation: {
        nextEl: "#newwork .swiper-button-next",
        prevEl: "#newwork .swiper-button-prev",
    },
    allowTouchMove: false
    });
    const newworkPrev = document.querySelector(
    "#newwork .swiper-button-prev"
    );
    const newworkNext = document.querySelector(
        "#newwork .swiper-button-next"
    );

    let newworkPage = 1;

    function updateNewworkPage() {

        if (newworkPage === 1) {
            newworkSwiper.slideTo(0);
            newworkPrev.style.display = "none";
            newworkNext.style.display = "flex";

        } 
    
        else if (newworkPage === 2) {
            newworkSwiper.slideTo(6);
            newworkPrev.style.display = "flex";
            newworkNext.style.display = "flex";
        } 
    
        else if (newworkPage === 3) {
            newworkSwiper.slideTo(10);
            newworkPrev.style.display = "flex";
            newworkNext.style.display = "none";
        }
    }

    newworkNext.addEventListener("click", function () {
        if (newworkPage < 3) {
            newworkPage++;
            updateNewworkPage();
        }
    });

    newworkPrev.addEventListener("click", function () {

        if (newworkPage > 1) {
            newworkPage--;
            updateNewworkPage();
        }
    });

    updateNewworkPage();

    // 오디세이랑 함께 보면 좋아요!
    var odysseySwiper = new Swiper(".odysseySwiper", {
    slidesPerView: 6,
    spaceBetween: 2,
    navigation: {
        nextEl: "#odyssey .swiper-button-next",
        prevEl: "#odyssey .swiper-button-prev",
    },
    allowTouchMove: false
    });
    const odysseyPrev = document.querySelector(
        "#odyssey .swiper-button-prev"
    );
    const odysseyNext = document.querySelector(
        "#odyssey .swiper-button-next"
    );

    let odysseyPage = 1;

    function updateOdysseyPage() {

        if (odysseyPage === 1) {
            odysseySwiper.slideTo(0);
            odysseyPrev.style.display = "none";
            odysseyNext.style.display = "flex";

        } 
    
        else if (odysseyPage === 2) {
            odysseySwiper.slideTo(2);
            odysseyPrev.style.display = "flex";
            odysseyNext.style.display = "none";
        }
    }

    odysseyNext.addEventListener("click", function () {
        if (odysseyPage === 1) {
        odysseyPage = 2;
        updateOdysseyPage();
        }
    });

    odysseyPrev.addEventListener("click", function () {

        if (odysseyPage === 2) {
        odysseyPage = 1;
        updateOdysseyPage();
        }
    });
    updateOdysseyPage();

    // 히가시노 게이고
    var keigoSwiper = new Swiper(".keigoSwiper", {
    slidesPerView: 6,
    spaceBetween: 2,
    navigation: {
        nextEl: "#keigo .swiper-button-next",
        prevEl: "#keigo .swiper-button-prev",
    },
    allowTouchMove: false
    });
    const keigoPrev = document.querySelector(
        "#keigo .swiper-button-prev"
    );
    const keigoNext = document.querySelector(
        "#keigo .swiper-button-next"
    );

    let keigoPage = 1;

    function updateKeigoPage() {

        if (keigoPage === 1) {
            keigoSwiper.slideTo(0);
            keigoPrev.style.display = "none";
            keigoNext.style.display = "flex";

        } 
    
        else if (keigoPage === 2) {
            keigoSwiper.slideTo(2);
            keigoPrev.style.display = "flex";
            keigoNext.style.display = "none";
        }
    }

    keigoNext.addEventListener("click", function () {
        if (keigoPage === 1) {
        keigoPage = 2;
        updateKeigoPage();
        }
    });

    keigoPrev.addEventListener("click", function () {

        if (keigoPage === 2) {
        keigoPage = 1;
        updateKeigoPage();
        }
    });
    updateKeigoPage();

    // 지금, 리디에서만 볼수 있는 도서
    var onlyridiSwiper = new Swiper(".onlyridiSwiper", {
    slidesPerView: 6,
    spaceBetween: 2,
    allowTouchMove: false,
    navigation: {
        nextEl: "#onlyridi .swiper-button-next",
        prevEl: "#onlyridi .swiper-button-prev",
    },
    allowTouchMove: false
    });
    const onlyridiPrev = document.querySelector(
        "#onlyridi .swiper-button-prev"
    );
    const onlyridiNext = document.querySelector(
        "#onlyridi .swiper-button-next"
    );

    let onlyridiPage = 1;

    function updateonlyridiPage() {

        if (onlyridiPage === 1) {
            onlyridiSwiper.slideTo(0);
            onlyridiPrev.style.display = "none";
            onlyridiNext.style.display = "flex";
        } 
    
        else if (onlyridiPage === 2) {
            onlyridiSwiper.slideTo(6);
            onlyridiPrev.style.display = "flex";
            onlyridiNext.style.display = "flex";
        }

        else if (onlyridiPage === 3) {

            onlyridiSwiper.slideTo(9);

            onlyridiPrev.style.display = "flex";
            onlyridiNext.style.display = "none";
        }
    }

    onlyridiNext.addEventListener("click", function () {
        if (onlyridiPage < 3) {
        onlyridiPage++;
        updateonlyridiPage();
        }
    });

    onlyridiPrev.addEventListener("click", function () {

        if (onlyridiPage > 1) {
        onlyridiPage --;
        updateonlyridiPage();
        }
    });
    updateonlyridiPage();