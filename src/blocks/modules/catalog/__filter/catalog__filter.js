import $ from "jquery";

$(document).ready(function() {

    $('body').on('click', '.catalog__mobile-btn', function() {
        $('body .catalog__filter ').toggleClass('open');
        $('body').toggleClass('overflow-hidden');
        $('html').toggleClass('overflow-hidden');
    });

    $('body').on('click', '.catalog__filter-close-link', function() {
        $('body .catalog__filter ').toggleClass('open');
        $('body').toggleClass('overflow-hidden');
        $('html').toggleClass('overflow-hidden');
    });

});
