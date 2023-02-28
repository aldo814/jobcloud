$(document).ready(function () {
    $('.all_menu').click(function () {
        $(this).toggleClass('active');
        $('.mega_menu').slideToggle(300);
    });



    if (window.innerWidth < 1024) {
        $('#header .header-nav .all_menu a').click(function () {
            $('body').toggleClass('lock');
        });
    }


    /*메인 비쥬얼*/
    function updSwiperNumericPagination() {
        this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">0' + this.el.slidesQuantity + "</span>";
    }

    $(".visual").each(function () {
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

        $('.wrap-autoplay-control > .swiper-button-pause').click(function () {
            $(this).hide();
            mySwiper.autoplay.stop();
            $('.wrap-autoplay-control > .swiper-button-play').show()

        });

        $('.wrap-autoplay-control > .swiper-button-play').click(function () {
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
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
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
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
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
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
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
    $('.like').click(function () {
        $(this).toggleClass('active')
    });

    /* 탭메뉴 */
    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $(".tab_container").each(function () {
        $(this).children(".tabs li:first").addClass("active"); //Activate first tab
        $(this).children(".tab_content").first().show();
    });
    //탭메뉴 클릭 이벤트
    $(".tabs li a").click(function () {

        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
    
    /* 메뉴 더보기 */
    $('.more_area .more_btn').click(function(){
        $(this).next().show();
    });
    
    // 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
	var more_area = $(".more_cont");
	if(more_area.has(e.target).length === 0){
		more_area.fadeOut(200);
	}
});


});
