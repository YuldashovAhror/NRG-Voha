if(sessionStorage.getItem('loader')) {
    $('.preloader').hide()
}

sessionStorage.setItem('loader', true)

$('.preloader__logo').css('opacity', '1')

setTimeout(() => {
    $('.preloader__text').css('opacity', '1')
}, 600)


$(window).on('load', () => {

    $('.preloader').fadeOut(800)

    let rootFont = parseInt($(':root').css('font-size'))


    //_________HEADER_________

    let scroll = $(window).scrollTop()
    let headerHeight = $('.header').height()
    scroll > headerHeight ? $('.header').addClass('header-fixed') : $('.header').removeClass('header-fixed')

    $(window).scroll(() => {
        scroll = $(window).scrollTop()
        scroll > headerHeight ? $('.header').addClass('header-fixed') : $('.header').removeClass('header-fixed')


        // nature leaf 

        $('.nature-leaf').css('transform', `translateY(-${scroll/100}rem)`)

        // hall rings 

        $('.hall-rings').css('transform', `translateY(-${scroll/200}rem)`)

    })

    $('.main__arrow').click(e => {
        e.preventDefault()
        window.scrollTo({top: $('.main').height() + 50, behavior: 'smooth'})
    })


    $('.header__menu').click(function() {
        $('.menu').fadeIn(500)
        $('.menu').addClass('show')
    })

    $('.menu__close').click(function() {
        $('.menu').removeClass('show')
        $('.menu').fadeOut(500)
    })

    $('.menu').click(e => {
        let div = $(".menu-content")
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
                $('.menu').removeClass('show') 
                $('.menu').fadeOut(500)
        }
    })

    $('.menu__list a').click(function() {
        $('.menu').removeClass('show')
        $('.menu').fadeOut(500)
    })
    

    //_______WELCOME__________

    $('.welcome-carousel').owlCarousel({
        dots: false,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        center: true,
        autoWidth: true,
    })


    $('.welcome .arrow-left').click(() => {
        $('.welcome-carousel').trigger('prev.owl.carousel', [700]);
    })
    
    $('.welcome .arrow-right').click(() => {
        $('.welcome-carousel').trigger('next.owl.carousel', [700]);  
    })

    
    //_______DESIGN__________


    $('.design-carousel').owlCarousel({
        dots: false,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        center: true,
        autoWidth: true,
    })


    $('.design .arrow-left').click(() => {
        $('.design-carousel').trigger('prev.owl.carousel', [700]);
    })
    
    $('.design .arrow-right').click(() => {
        $('.design-carousel').trigger('next.owl.carousel', [700]);  
    })


    //_______PLANS________

    let showPlan = (i) => {
        let src = $('.plans-thumbs__item').eq(i).find('img').attr('src')
        $('.plans-thumbs__item').removeClass('current')
        $('.plans-thumbs__item').eq(i).addClass('current')
        $('.plans-main img').attr('src', src)
    }

    showPlan(0)

    $('.plans-thumbs__item').click(function() {
        let index = $(this).index()
        showPlan(index)
    })
    

    //________FUNC__________

    if($(window).width() < 768 || ('ontouchstart' in window)) {
        $('.func-item').click(function() {
            if($(this).hasClass('active')) {
                $('.func-item').removeClass('active')
            } else {
                $('.func-item').removeClass('active')
                $(this).addClass('active')
            }
        })
    } else {
        $('.func-item').hover(function() {
            $(this).addClass('active')
        }, function() {
            $('.func-item').removeClass('active')
        })
    }


    


    // __________GOTOP__________

    $('.footer__top').click((e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    })

    //_______FORM__________



    $('.form_tel').inputmask("+\\9\\98 99 999 99 99")


    $('.form_name').on('keydown', function(e) {
        const key = e.key;
        if (!/^[a-zA-Zа-яА-Я\s]*$/.test(key)) {
            e.preventDefault();
        }
    })


    //__________WOW____________


    new WOW({
        offset: 50,
        mobile: false, 
    }).init();





    
    //__________MAP_____________


    ymaps.ready(mapStart);
    function mapStart() {
        var map = new ymaps.Map("map", {
            center: [41.301641, 69.258947],
            zoom: 13,
        }, {
            searchControlProvider: 'yandex#search'
        });

        map.geoObjects
        .add(new ymaps.Placemark([41.291465181207, 69.280308311625], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [34, 41],
        })).add(new ymaps.Placemark([41.309499, 69.240216], {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [34, 41],
        }))

    }
})