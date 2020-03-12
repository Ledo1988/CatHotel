import $ from "jquery";
import jQuery from "jquery";

$(document).ready(function() {

    (function($) {
        "use strict";

        $.fn.numericFlexboxSorting = function(options) {
            const settings = $.extend({
                elToSort: ".catalog__items .catalog__item"
            }, options);

            const $select = this;
            const ascOrder = (a, b) => a - b;
            const descOrder = (a, b) => b - a;

            $select.find('.header-sort__btn').on("click", () => {
                if (!$(this).parents('.header-sort__list-item').hasClass('active') && $(this).parents('.header-sort').hasClass('active')) {
                    const selectedOption = $select.find(".header-sort__list-item.active .header-sort__btn").attr("data-sort");
                    sortColumns(settings.elToSort, selectedOption);
                }

            });

            function sortColumns(el, opt) {
                const attr = "data-" + opt.split(":")[0];
                const sortMethod = (opt.indexOf("asc") > 0) ? ascOrder : descOrder;
                const sign = (opt.indexOf("asc") > 0) ? "" : "-";
                const sortArray = $(el).map((i, el) => parseFloat($(el).attr(attr).replace(/,/g, '.'))).sort(sortMethod);


                for (let i = 0; i < sortArray.length; i++) {
                    if (parseInt(sortArray[i]) != sortArray[i]) {
                        sortArray[i] = sortArray[i].toFixed(2).toString().replace(".", ",");
                        $(el).filter(`[${attr}="${sortArray[i]}"]`).css("order", sign + parseInt(sortArray[i].replace(",", "")),
							"-ms-flex-order", sign + parseInt(sortArray[i].replace(",", "")));
                    } else {
                        $(el).filter(`[${attr}="${sortArray[i]}"]`).css("order", sign + sortArray[i], "-ms-flex-order", sign + sortArray[i]);
                    }


                }
            }

            return $select;
        };
    })(jQuery);

    $(".header-sort__list").numericFlexboxSorting();

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
