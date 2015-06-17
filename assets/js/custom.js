/* Write here your custom javascript codes */
var App = function () {

        initSliders: function () {

            jQuery('#awards-flexslider').flexslider({
                animation: "slide",
                easing: "swing",
                animationLoop: true,
                itemWidth: 1,
                itemMargin: 1,
                minItems: 2,
                maxItems: 6,
                controlNav: false,
                directionNav: false,
                move: 2,
                pauseOnHover: true
            });
        }

}();