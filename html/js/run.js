$(document).ready(function () {
    $("[class$='wrong_message']").hide();

    $('.all_menu').click(function () {
        $(this).toggleClass('active');
        $('.mega_menu').slideToggle(200);
    });


    //Header
    if (window.innerWidth < 1024) {
        $('#header .header-nav .all_menu a').click(function () {
            $('body').toggleClass('lock');
        });
        $('#header .mega_menu #mega_gnb li .tit').click(function () {
            $(this).parent().toggleClass('active')
        });
    }

    $(window).resize(function () {
        if (window.innerWidth < 1024) {
            $('#header .mega_menu #mega_gnb li .tit').click(function () {
                $(this).parent().toggleClass('active')
            });
        }
    });

    function snb() {

        if (window.innerWidth < 768) {
            //snb
            $('.list_wrap .snb .tit').click(function () {
                $(this).toggleClass('active');
                $(this).next().toggleClass('active');
            });

            $(".snb > ul > li > a").click(function () {
                if ($(this).next().is(":hidden")) {
                    $(".snb ul li ul").hide();
                    $(this).next().show();
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active')
                } else {
                    $(".snb ul li ul").hide();
                    $(this).parent().removeClass('active');
                }
            });
        } else {
            /* 좌측메뉴 */
            $(".snb > ul > li > a").click(function () {
                if ($(this).next().is(":hidden")) {
                    $(".snb ul li ul").hide();
                    $(this).next().show();
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active')
                } else {
                    $(".snb ul li ul").hide();
                    $(this).parent().removeClass('active');
                }
            });

            $(".snb > ul > li > ul a").click(function () {
                $(this).parent().addClass('active');
                $(this).parent().removeClass('active');
            });
        }

    }

    snb();
    $(window).resize(snb);

    /*메인 비쥬얼*/
    function updSwiperNumericPagination() {
        this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">0' + (this.realIndex + 1) + '</span><span class="total">0' + this.el.slidesQuantity + "</span>";
    }

    $(".visual").each(function () {
        this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

        var mySwiper = new Swiper('.visual', {
            speed: 3000,
            spaceBetween: 30,
            loop: false,
            autoHeight: true,
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
    var swiper = new Swiper('.lecture_list02.slide01 .swiper-container', {
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
                slidesPerView: 'auto',

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
            501: {
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
            481: {
                slidesPerView: 1,
            },
            280: {
                slidesPerView: 1,
            },
        }
    });

    /*찜하기 버튼*/
    /*$('.like').click(function () {
        $(this).toggleClass('active')
    });*/

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
    $('.more_area .more_btn').click(function () {
        $(this).next().show();
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e) {
        var more_area = $(".more_cont");
        if (more_area.has(e.target).length === 0) {
            more_area.fadeOut(200);
        }
    });
    /* 첨부파일 */
    $('.fileInput').change(function () {
        var numfiles = $(this)[0].files.length;
        var parent = $(this).closest('.input-file');
        parent.find('ins').remove();
        for (i = 0; i < numfiles; i++) {
            parent.append('<ins>' + $(this)[0].files[i].name + '</ins>')
        }
    });

    /* faq */
    $('.faq_wrap .tit a').click(function () {
        $(this).parent().parent().next().find('div').slideToggle("200");
        $(this).parent().parent().next().toggleClass('active')
    });




    //스크롤 이동
    $('.go_review a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    /* 공유하기 */
    $('.share > a').click(function () {
        $('.share_layer').fadeToggle(100);
    });


    /*툴팁*/
    $('.qa_wrap a').mouseenter(function () {
        $(this).next().fadeIn(100);
    });
    $('.qa_wrap a').mouseleave(function () {
        $(this).next().fadeOut(100);
    });

    /*$('.like_btn').click(function(){
       $(this).toggleClass('active') 
    });*/

    /* 수강후기 더보기 btn */
    $(".lv_review_list .item").slice(0, 5).css("display", "flex"); // 초기갯수
    $("#load").click(function (e) { // 클릭시 more
        $(".pageCnt").text(parseInt($(".pageCnt").text()) + 5);
        e.preventDefault();
        $(".lv_review_list .item:hidden").slice(0, 5).fadeIn(200).css('display', 'flex'); // 클릭시 more 갯수 지저정
        if ($(".lv_review_list .item:hidden").length == 0) { // 컨텐츠 남아있는지 확인
            $('#load').fadeOut(100);
        }
    });


    var swiper = new Swiper('.lv_slide .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.lv_slide .lt_swiper-button-next',
            prevEl: '.lv_slide .lt_swiper-button-prev',
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

    // a href='#' 클릭 무시 스크립트
    $('a[href="#"]').click(function (ignore) {
        ignore.preventDefault();
    });


    /* 강의실 슬라이드 */
    var swiper = new Swiper('.lvr_slide .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.lvr_slide .lt_swiper-button-next',
            prevEl: '.lvr_slide .lt_swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
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



    // input file
    const dt = new DataTransfer(); // Permet de manipuler les fichiers de l'input file

    $("#attachment").on('change', function (e) {
        for (var i = 0; i < this.files.length; i++) {
            let fileBloc = $('<span/>', {
                    class: 'file-block'
                }),
                fileName = $('<span/>', {
                    class: 'name',
                    text: this.files.item(i).name
                });
            fileBloc.prepend('<span class="file-delete"><span class="del">삭제</span></span>')
                .prepend(fileName);
            $("#filesList > #files-names").append(fileBloc);
        };
        for (let file of this.files) {
            dt.items.add(file);
        }
        this.files = dt.files;

        $('span.file-delete').click(function () {
            let name = $(this).next('span.name').text();
            $(this).parent().remove();
            for (let i = 0; i < dt.items.length; i++) {
                if (name === dt.items[i].getAsFile().name) {
                    dt.items.remove(i);
                    continue;
                }
            }
            document.getElementById('attachment').files = dt.files;
        });
    });

    var videoElements = document.querySelectorAll('.customVideo');
    var progressBarElements = document.querySelectorAll('.progressBar');
    var playButtons = document.querySelectorAll('.playButton');
    var videoContainers = document.querySelectorAll('.video_area');


    $('.hot_lecture').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        speed: 200,
        centerPadding: '30px',
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1024, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3,
                    centerPadding: '0',
                }
					},
				]
    });

    // 페이지 로드 시 활성 슬라이드의 비디오를 재생
    var initialSlide = $('.hot_lecture .slick-current .video_area');
    initialSlide.addClass('active');
    var initialVideo = initialSlide.find('video.customVideo')[0];

    // 슬라이드가 변경될 때 비디오 관리
    $('.hot_lecture').on('afterChange', function (event, slick, currentSlide) {
        // 모든 슬라이드의 video_area에서 active 클래스를 제거합니다.
        $('.video_area').removeClass('active');

        // 현재 활성 슬라이드의 video_area에 active 클래스를 추가합니다.
        var currentVideoArea = $('.slick-current .video_area');
        currentVideoArea.addClass('active');

        // 모든 비디오를 일시 중지합니다.
        $('video.customVideo').each(function (index, video) {
            video.pause();
        });

    });

    // 슬라이더 변경 시 이벤트를 통해 이전 슬라이드에 클래스 추가
    $('.hot_lecture').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // 모든 슬라이드에서 클래스 제거
        $('.slick-slide').removeClass('prev-slide');

        // 이전 슬라이드에 클래스 추가
        var prevSlideIndex = nextSlide - 1;
        if (prevSlideIndex < 0) {
            prevSlideIndex = slick.slideCount - 1; // 마지막 슬라이드로 이동
        }
        $('.slick-slide[data-slick-index="' + prevSlideIndex + '"]').addClass('prev-slide');
    });

    var initialSlideIndex = $('.hot_lecture').slick('slickCurrentSlide'); // 현재 슬라이드의 인덱스 가져오기
    var prevSlideIndex = initialSlideIndex - 1;
    if (prevSlideIndex < 0) {
        prevSlideIndex = $('.hot_lecture').slick('getSlick').slideCount - 1; // 마지막 슬라이드로 이동
    }
    $('.slick-slide[data-slick-index="' + prevSlideIndex + '"]').addClass('prev-slide');



    // 각 비디오 및 관련 이벤트 처리
    videoElements.forEach(function (video, index) {
        video.addEventListener('play', function () {
            videoContainers[index].classList.remove('active');
        });

        video.addEventListener('pause', function () {
            videoContainers[index].classList.add('active');
        });

        video.addEventListener('ended', function () {
            playButtons[index].innerText = 'Play';
        });

        video.addEventListener('click', function () {
            toggleVideo(video, playButtons[index]);
        });

        playButtons[index].addEventListener('click', function () {
            toggleVideo(video, playButtons[index]);
        });
    });

    // 비디오 프로그래스 바
    videoElements.forEach(function (video, index) {
        video.addEventListener('timeupdate', function () {
            var progress = (100 / video.duration) * video.currentTime;
            progressBarElements[index].style.width = progress + '%';
        });

        progressBarElements[index].addEventListener('click', function (e) {
            var goToTime = (e.offsetX / progressBarElements[index].offsetWidth) * video.duration;
            video.currentTime = goToTime;
        });
    });

    function toggleVideo(video, playButton) {
        if (video.paused || video.ended) {
            video.play();
            playButton.innerText = 'Pause';
        } else {
            video.pause();
            playButton.innerText = 'Play';
        }
    }

    var heightArray = $(".empower_wrap>div .box").map(function () {

        return $(this).height();

    }).get();

    var maxHeight = Math.max.apply(Math, heightArray);

    $(".empower_wrap>div .box").height(maxHeight + 50);


    var gnbOffset = $('#gnb-wrap').offset();
    var dw = $(document).width();


    $('#newHeader .h_search').on('click', function () {
        $('.modal_search_wrapper').show();
        $('.search_menu').show();
        $('.search_menu input[type="text"]').focus();
    });

    $('.h_mobile_close').click(function () {
        $('.h_mobile').removeClass('show');
        $('.h_menu').removeClass('active');
    });

    $('.btn_search_close').click(function () {
        $('.modal_search_wrapper').hide();
        $('.search_menu').hide();
    });

    $('.footer_btn').click(function () {
        $(this).toggleClass('active');
        var footerWrap = $('.footer_wrap');

        footerWrap.slideToggle(300, function () {
            if (footerWrap.is(':visible')) {
                // Scroll to the bottom of the screen
                $('html, body').animate({
                    scrollTop: $(document).height()
                }, 300);
            }
        });
    });

    if (window.innerWidth < 1024) {
        $('.empower_wrap').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
        });

        $(".empower_wrap>div .box").css('height', 'auto');

        $('.lecture_list02.slide02 .item').hide();
        $(".lecture_list02.slide02 .item").slice(0, 4).css("display", "block");
        $(".m_more").click(function (e) {
            e.preventDefault();
            $(".lecture_list02.slide02 .item:hidden").slice(0, 5).fadeIn(200).css('display', 'block'); // 클릭시 more 갯수 지저정
            if ($(".lecture_list02.slide02 .item:hidden").length == 0) { // 컨텐츠 남아있는지 확인
                $('.m_more').fadeOut(100); // 컨텐츠 없을 시 버튼 사라짐
            }
        });
    } else {


        var swiper = new Swiper('.lecture_list02.slide02 .swiper-container', {
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
                501: {
                    slidesPerView: 1,
                },
                280: {
                    slidesPerView: 1,
                },
            }
        });
    }




});

$(window).resize(function () {
    
     if (window.innerWidth < 1024) {
        $('.empower_wrap').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
        });

        $(".empower_wrap>div .box").css('height', 'auto');

        $('.lecture_list02.slide02 .item').hide();
        $(".lecture_list02.slide02 .item").slice(0, 4).css("display", "block");
        $(".m_more").click(function (e) {
            e.preventDefault();
            $(".lecture_list02.slide02 .item:hidden").slice(0, 5).fadeIn(200).css('display', 'block'); // 클릭시 more 갯수 지저정
            if ($(".lecture_list02.slide02 .item:hidden").length == 0) { // 컨텐츠 남아있는지 확인
                $('.m_more').fadeOut(100); // 컨텐츠 없을 시 버튼 사라짐
            }
        });
    } else {


        var swiper = new Swiper('.lecture_list02.slide02 .swiper-container', {
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
                501: {
                    slidesPerView: 1,
                },
                280: {
                    slidesPerView: 1,
                },
            }
        });
    }

    var heightArray = $(".empower_wrap>div .box").map(function () {

        return $(this).height();

    }).get();

    var maxHeight = Math.max.apply(Math, heightArray)

    $(".empower_wrap>div .box").height(maxHeight + 50);
})


/* 팝업 */
function openModal(modalname) {
    document.get
    $("." + modalname).show();
    $('body').addClass('not_scroll');
    $('.shadow').show();
}

function close_pop(flag) {
    $('.popup').hide();
    $('body').removeClass('not_scroll');
    $('.shadow').hide();
};


/*윈도우창 닫기*/
function closeWindow() {
    window.close();
}

// gnb menu
function allMenu() {
    if (window.innerWidth < 860) {
        $('.h_mobile').toggleClass('show');
    } else {
        $('.h_gnb_bg').stop().slideToggle(300);
        $('.h_menu').toggleClass('active');
    }
}
$(document).mouseup(function (e) {
    var navMenu = $(".h_gnb_bg");
    var navBg = $('.h_ui');
    var navBtn = $('.h_menu');
    if (navMenu.has(e.target).length === 0 && navBg.has(e.target).length === 0) {
        navMenu.stop().slideUp(300);
        navBtn.removeClass('active');
    }
});



//자동완성 스크립트
function onSearch(type, keycode) {
    //1입력 방지 20200610
    var srchTxt = $("#srchTxt").val();
    if (srchTxt == "1") {
        return false;
    }

    var code = keycode.keyCode; // 키보드 이벤트 키 값
    var nLenth = $("#srchTxt").val().trim().length;
    if (nLenth != '') {
        var index = 0; // index 설정값
        var originTag = jQuery('input[name=srchTxt]').val(); // 최초 입력한 검색어
        var len = jQuery('#autoComplete > ul > li').length; // 검색된 리스트 수
        if (len > 0) { // 검색된 리스트가 하나라도 있는 경우

            if (code == 40) { // ↓ 키 눌렀을 때

            } else if (code == 38) { // ↑ 키 눌렀을 때

            } else {
                if ($("#autoWordFlag").val() == 'Y') {
                    onAutoSearch();
                }
            }
        } else {
            if ($("#autoWordFlag").val() == 'Y') {
                onAutoSearch();
            }
        }
        /* if ($("#autoWordFlag").val() == 'Y') {
        	onAutoSearch();
        } */
    } else {
        $("#autoComplete").hide();
        $("#wordList li").remove();
    }
}

$('body').on('click', function (e) {
    var clickTarget = e.target;
    if ($(clickTarget).closest('.search-input-wrap').length == 0) {
        $("#autoComplete").hide();
    }
});

//자동완성 단어 조회
function onAutoSearch() {
    //onAutoSearchDelete();
    $.ajax({
        url: "/search.jsp",
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        data: {
            "srchType": "05",
            "srchTxt": $("#srchTxt").val(),
            "currentPageNo": "1",
            "limit": "10"
        },
        success: (
            function (obj) {
                onAutoSearchCallBack(obj);
            }
        ),
        error: (
            function (errMsg) {
                //alert("처리 중 문제가 발생하였습니다.");
            }
        )
    });
}

function onAutoSearchCallBack(obj) {
    if (obj.totalCount > 0) {
        $("#autoComplete").show();

        var list = obj.list;
        var li = "";
        var srchTxt = $("#srchTxt").val();
        for (var i = 0, nCnt = list.length; i < nCnt; i++) {
            var data = list[i][0];
            li += "<li><a href=\"#none\"  onclick=\"setSearchText('" + data + "')\" onmouseover=\"onAutoPreview('" + data + "')\" title=\"" + data + " 이동\">" + replaceAll(data, srchTxt, "<strong>" + srchTxt + "</strong>") + "</a></li>\n";
        }

        if (li != "")
            $("#wordList").html(li);
    } else {
        $("#autoComplete").hide();
        onAutoSearchDelete()
    }
}

function onAutoSearchDelete() {
    $("#wordList li").remove();
}

function onAutoSearchClose(e) {
    $("#autoComplete").hide();
}

function onAutoSearchNone() {
    var autoWordFlag = $("#autoWordFlag").val();
    if (autoWordFlag == "Y") {
        onAutoSearchDelete();
        onAutoPreviewDelete();
        $("#autoWordFlag").val("N");
        $("#autoSearchBtn").html("자동완성 켜기");
    } else {
        $("#autoWordFlag").val("Y");
        onAutoSearch();
        $("#autoSearchBtn").html("자동완성 끄기");
    }
}

function onAutoPreview(srchTxt) {
    onAutoPreviewDelete();
    if ($("#autoPreviewFlag").val() == "Y") {
        $("#subSrchTxt").val(srchTxt);
        $.ajax({
            url: "/search.jsp",
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            dataType: "json",
            data: {
                "srchType": "06",
                "srchTxt": srchTxt,
                "currentPageNo": "1",
                "limit": "2"
            },
            success: (
                function (obj) {
                    onAutoPreviewCallBack(obj);
                }
            ),
            error: (
                function (errMsg) {
                    //alert("처리 중 문제가 발생하였습니다.");
                }
            )
        });
    }
}

function onAutoPreviewCallBack(obj) {
    if (obj.totalCount > 0) {

        var list = obj.list;
        var li = "";
        var srchSubTxt = $("#subSrchTxt").val();
        for (var i = 0, nCnt = list.length; i < nCnt; i++) {
            var data = list[i];
            var seq = data.seq;
            var mainTitle = data.main_title;
            var encptFileNm = data.encpt_file_nm;
            var imgSrc = "<span></span>";
            if (encptFileNm != "") {
                imgSrc = "<img src=\"/file/image.do?filePath=" + encptFileNm + "\" alt=\"썸네일 이미지\" style=\"height:50px; width:50px;\"/>";
            }
            li += "<li><a href=\"#none\" onclick=\"onSearchView('" + data.seq + "')\" title=\"" + mainTitle + " 이동\">" + imgSrc + replaceAll(mainTitle, srchSubTxt, "<strong>" + srchSubTxt + "</strong>") + "</a></li>\n";
        }

        if (li != "")
            $("#previewList").html(li);
    } else {
        onAutoPreviewDelete()
    }
    $("#subSrchTxt").val("");
}

function onAutoPreviewDelete() {
    $("#previewList li").remove();
}

function onAutoPreviewNone() {
    var autoPreviewFlag = $("#autoPreviewFlag").val();
    if (autoPreviewFlag == "Y") {
        onAutoPreviewDelete();
        $("#autoPreviewFlag").val("N");
        $("#autoPreviewBtn").html("미리보기 켜기");
    } else {
        $("#autoPreviewFlag").val("Y");
        $("#autoPreviewBtn").html("미리보기 끄기");
    }
}
