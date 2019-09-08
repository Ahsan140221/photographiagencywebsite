$(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');

    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }

    });


    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }


    });

    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');

        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }

    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');

    });


    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position);
        if (position >= 5500) {
            $('.card-one').addClass('movefromLeft');
            $('.card-two').addClass('movefromBottom');
            $('.card-three').addClass('movefromRight');
        } else {
            $('.card-one').removeClass('movefromLeft');
            $('.card-two').removeClass('movefromBottom');
            $('.card-three').removeClass('movefromRight');
        }


    });


    $(function () {

        $("a.smooth").click(function (event) {
            event.preventDefault();
            var section = $(this).attr("href");
    
            $('html,body').animate({
    
                scrollTop: $(section).offset().top - 60
                
    
            }, 1250, "easeInOutExpo");
    
        });
    
    });

   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

});