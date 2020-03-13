import $ from "jquery";

$(document).ready(function() {

    $('body').on('click', '.burger-menu', function() {
        $(this).parents('.header').toggleClass('open');
        $('body').toggleClass('overflow-hidden');
        $('html').toggleClass('overflow-hidden');
    });

});
