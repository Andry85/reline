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
            1025:{
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

    /*********************************************************/
    /* start  menu  */
    /********************************************************/
    $(".navList li a").clone().removeClass("navList__link").appendTo(".slidebar");
    $(".slidebar a").each(function(){
        $(this).wrap("<li></li>");
    });
    $(".slidebar li").wrapAll("<ul class='slidebarList'></ul>");
    $(".headerInner__col .btn").clone().appendTo(".slidebar");
    $(".headerInner__col .phone").clone().appendTo(".slidebar");
    $(".slidebar .btn,.slidebar .phone").wrapAll("<div class='slidebarBottom'></div>");
    $('<li><a class="activ" href="#" title="">Главная</a></li>').prependTo(".slidebarList");

    var controller = new slidebars();
    controller.init();

    // Mobile only
    var windowWidth,
        mobileOnly = function () {
            windowWidth = $( window ).width();
            if ( windowWidth > 1024 ) {
                controller.close( 'slidebar' );
            }
        };
    mobileOnly();
    $(window).on( 'resize', mobileOnly );

    $( '.js-toggle-menu' ).on( 'click', function (e) {
        e.stopPropagation();
        if ( windowWidth < 1025 ) {
            controller.toggle('slidebar');
        }
    } );
    $( '.cloze-slidebar' ).on( 'click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        controller.close('slidebar');
    } );
    /*********************************************************/
    /* start  menu  */
    /********************************************************/




})(jQuery);