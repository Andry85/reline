(function($){


    /*********************************************************/
    /* start document slider   */
    /********************************************************/
    $('.documentsSlider .owl-carousel').owlCarousel({
        autoHeight:true,
        nav: true,
        responsive:{
            0:{
                items: 1
            },
            992:{
                items:3,
                margin: 20
            }
        }
    });
    /*********************************************************/
    /* end document slider  */
    /********************************************************/

    /*********************************************************/
    /* start portfolio slider   */
    /********************************************************/
    $('.portfolioSlider .owl-carousel').owlCarousel({
        autoHeight:true,
        nav: true,
        items: 1,
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter //When the translation of the stage has finished.
    });
    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index + 1;     // Position of the current item
        $('#portfolioSliderCounter').html(+item+"/"+items)
    }
    /*********************************************************/
    /* end portfolio slider  */
    /********************************************************/

    /*********************************************************/
    /* start gallery   */
    /********************************************************/
    $(".thumbs li a").click(function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $(this).parents(".portfolioSlider__item").children('figure').children('img').attr('src', $href);
        $(this).parent().addClass("thumbs__list--activ").siblings("li").removeClass("thumbs__list--activ");
    });
    /*********************************************************/
    /* end gallery   */
    /********************************************************/


    $(".portfolioSlider .owl-nav").insertAfter(".portfolioText__entry");

    $(window).scroll(function() {
        if ($(document).scrollTop() > 129) {
            $(".header").addClass("header-activ");
        } else {
            $(".header").removeClass("header-activ");
        }
    });




})(jQuery);