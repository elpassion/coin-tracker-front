window.onload = function () {

    var $form = $('form#betaForm'),
        url = 'https://script.google.com/macros/s/AKfycbx82s4QnMa2B4IKtNd-7Th-zcoiezfIRCk8X6RJrmVYplcp4w/exec';

    $('#submitFormButton').on('click', function (e) {
        e.preventDefault();
        console.log($form.serializeObject());
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
        });
    })

    var $window = $(window);
    var $elem = $(".animation");

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    var animate = function () {
        if (isScrolledIntoView($elem, $window)) {
            if ($elem.is(":animated") === true || parseInt($elem.css("opacity")) === 1) {
                return
            }
            var marginTop = parseInt($elem.css("margin-top").replace(/[^-\d\.]/g, ''));
            $elem.css({"margin-top": marginTop + 50 + "px"});
            $elem.stop(true, true).animate({
                opacity: 1,
                'margin-top': marginTop + "px"
            }, 200);
        } else {
            if ($elem.is(":animated") === true || parseInt($elem.css("opacity")) === 0) {
                return
            }
            var marginTop = parseInt($elem.css("margin-top").replace(/[^-\d\.]/g, ''));
            $elem.stop(true, true).animate({
                opacity: 0,
                'margin-top': marginTop + 50 + "px"
            }, 200, function () {
                $elem.css({"margin-top": marginTop + "px"});
            });
        }
    };

    $(window).bind('scroll', function () {
        animate();
    });

    var delay = 250;
    var timeout = null;
    $(window).bind('scroll', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            animate();
        }, delay);
    });
};
