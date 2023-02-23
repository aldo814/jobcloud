
          $('.all_menu').click(function(){
       $(this).toggleClass('active');
        $('.mega_menu').slideToggle();
    });
        
        function updSwiperNumericPagination() {
            this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">0' + this.el.slidesQuantity + "</span>";
        }

        $(".visual").each(function() {
            // Getting slides quantity before slider clones them
            this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

            // Swiper initialization
            new Swiper(this, {
                speed: 800,
                spaceBetween: 30, 
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                },
                loop: true,
                on: {
                    init: updSwiperNumericPagination,
                    init: function() {
                        thisSlide = this;
                        autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
                        autoPlayBtn.addEventListener('click', (e) => {
                            autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                            if (autoPlayState === 'false') {
                                autoPlayBtn.setAttribute('aria-pressed', 'true');
                               
                            } else if (autoPlayState === 'true') {
                                autoPlayBtn.setAttribute('aria-pressed', 'false');
                                thisSlide.autoplay.start();
                                
                            };
                        });
                    },
                    slideChange: updSwiperNumericPagination
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
          
            $('.wrap-autoplay-control > button').click(function(){
               $(this).toggleClass('active') 
            });
          
        });