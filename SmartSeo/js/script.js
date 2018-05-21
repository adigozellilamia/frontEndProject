$(document).ready(function () {
    $('#firstCarousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
    });
    $('#secondCarousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 3,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            800: {
                items: 3
            }
        }
    })

    $("#secondCarousel .case-content").hover(function () {
        $(this).find(".hover").toggleClass("hoverActive");
        $(this).find("h4").toggleClass("h4Active");
        $(this).find("p").toggleClass("h4Active");
        $(this).find("a").toggleClass("h4Active");
    });

    $('#thirdCarousel').owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
    });

    var testimonialCarousel = $('#testimonial-carousel');
    testimonialCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
    });
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $(".section-3-about .esas").hover(function () {
        $(this).find(".hover").toggleClass("hoverActive");
        $(this).find("h4").toggleClass("h4Active");
        $(this).find("p").toggleClass("h4Active");
        $(this).find("a").toggleClass("h4Active");
    })




    $(".section4 .esas").hover(function () {
        $(this).find(".hover").toggleClass("hoverActive");
        $(this).find("h4").toggleClass("h4Active");
        $(this).find("p").toggleClass("h4Active");
    })

$(".narmin-accardion .panel-group a").click(function(){
    if($(this).hasClass("accardionActive")==false){
    $(".narmin-accardion .accardionActive").removeClass("accardionActive");
    $(".narmin-accardion .changed").removeClass("changed");
    $(this).addClass("accardionActive");
    $(this).addClass("changed");
} else {
    $(".narmin-accardion .accardionActive").removeClass("accardionActive");
    $(".narmin-accardion .changed").removeClass("changed");
    $(this).removeClass("accardionActive"); 
    $(this).removeClass("changed");
}
});
        



    

});