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

    $('body .catalog__filter-form').on('change input', 'input', function() {
        catalogFormValidation($('body .catalog__filter-form'));
    });

    $('body .catalog__filter-form').on('click', '.catalog__filter-btn[type="reset"]', function() {
        $('body .catalog__filter-form').toggleClass('not-empty');
    });

    function catalogFormValidation($this) {
        var isEmpty = true;

        $this.find("input").each(function() {
            var element = $(this);

            if (!element.val().length == 0 || element.prop("checked") == true ) {
                isEmpty = false;
            }
        });

        if (!isEmpty) {
            $('body .catalog__filter-form').addClass('not-empty');
        } else {
            $('body .catalog__filter-form').removeClass('not-empty');
        }


    }
});
