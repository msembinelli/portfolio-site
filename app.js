var main = function() {
    $(".btn-projects").click(function() {
        $('html,body').animate({
                scrollTop: $(".proj").offset().top
            },
            'slow');
    });
    $(".btn-about").click(function() {
        $('html,body').animate({
                scrollTop: $(".bio").offset().top
            },
            'slow');
    });
    $('#myCarousel').carousel({
        interval: 10000
    });
    $('.carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
};

$(document).ready(main);
