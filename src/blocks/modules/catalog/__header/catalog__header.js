import $ from "jquery";

$(document).ready(function() {

    $('body').on('click', '.header-sort__btn', function () {
        $(this).parents('.header-sort').find('.header-sort__list-item').removeClass('active');
        $(this).parents('.header-sort__list-item').addClass('active');
        $(this).parents('.header-sort').toggleClass('active');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.header-sort,.header-sort__btn').length) {
            if ($('.header-sort').hasClass('active')) {
                $('.header-sort').removeClass('active');
            }
        }
    });
});
