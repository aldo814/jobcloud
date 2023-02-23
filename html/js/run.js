
        $(document).ready(function(){
$('.all_menu').click(function() {
            $(this).toggleClass('active');
            $('.mega_menu').slideToggle();
        });

        $('.gnb').mouseenter(function() {
            $('.all_menu').toggleClass('active');
            $('.mega_menu').slideDown();
        });
        $('.gnb').mouseleave(function() {
            $('.all_menu').toggleClass('active');
            $('.mega_menu').slideUp();
        });


        if (window.innerWidth < 1024) {
            $('#header .header-nav .all_menu a').click(function() {
                $('body').toggleClass('lock');
            });
        }


        /*메인 비쥬얼*/
        function updSwiperNumericPagination() {
            this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">0' + this.el.slidesQuantity + "</span>";
        }

        $(".visual").each(function() {
            this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

            var mySwiper = new Swiper('.visual', {
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
                    slideChange: updSwiperNumericPagination
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });

            $('.wrap-autoplay-control > .swiper-button-pause').click(function() {
                $(this).hide();
                mySwiper.autoplay.stop();
                $('.wrap-autoplay-control > .swiper-button-play').show()

            });

            $('.wrap-autoplay-control > .swiper-button-play').click(function() {
                $(this).hide();
                mySwiper.autoplay.start();
                $('.wrap-autoplay-control > .swiper-button-pause').show();
            });

        });

        /* 인기 강좌 슬라이드*/
        var swiper = new Swiper('.slide01 .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.slide01 .lt_swiper-button-next',
                prevEl: '.slide01 .lt_swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                },
            }
        });

        var swiper = new Swiper('.slide02 .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.slide02 .lt_swiper-button-next',
                prevEl: '.slide02 .lt_swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                },
            }
        });

        var swiper = new Swiper('.slide03 .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.slide03 .lt_swiper-button-next',
                prevEl: '.slide03 .lt_swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                },
            }
        });

        var swiper = new Swiper('.review_area .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.review_area .lt_swiper-button-next',
                prevEl: '.review_area .lt_swiper-button-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                },
            }
        });

        /*찜하기 버튼*/
        $('.lecture_list .like').click(function() {
            $(this).toggleClass('active')
        });
            
            });