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

    /*********************************************************/
    /* start positions arrows in portfolio slider   */
    /********************************************************/
        $(".portfolioSlider .owl-nav").insertAfter(".portfolioText__entry");
    /*********************************************************/
    /* end positions arrows in portfolio slider   */
    /********************************************************/

    /*********************************************************/
    /* start adding background to the header during scrolling  */
    /********************************************************/
        $(window).scroll(function() {
            if ($(document).scrollTop() > 129) {
                $(".header").addClass("header-activ");
            } else {
                $(".header").removeClass("header-activ");
            }
        });
    /*********************************************************/
    /* end adding background to the header during scrolling  */
    /********************************************************/

    /*********************************************************/
    /* start  menu  */
    /********************************************************/

        function creatingContentInMenu() {
            $(".navList li a").clone().removeClass("navList__link").appendTo(".slidebar");
            $(".slidebar a").each(function(){
                $(this).wrap("<li></li>");
            });
            $(".slidebar li").wrapAll("<ul class='slidebarList'></ul>");
            $(".headerInner__col .btn").clone().text('Записаться онлайн').appendTo(".slidebar");
            $(".headerInner__col .phone").clone().appendTo(".slidebar");
            $(".slidebar .btn,.slidebar .phone").wrapAll("<div class='slidebarBottom'></div>");
            $('<li><a class="activ" href="#" title="">Главная</a></li>').prependTo(".slidebarList");
        }
        function deletingContentInMenu() {
            $(".slidebar").children().not($( ".cloze-slidebar,.icon-logo-medium" )).remove();
        }

        var controller = new slidebars();
        controller.init();

        // Mobile only
        var windowWidth,
            mobileOnly = function () {
                windowWidth = $(window).width();
                if (windowWidth > 1024) {
                    deletingContentInMenu();
                    controller.close('slidebar');
                }
            };
        mobileOnly();
        $(window).on('resize', mobileOnly);

        $('.js-open-menu').on('click', function (e) {
            e.stopPropagation();
            creatingContentInMenu();
            if ( windowWidth < 1025 ) {
                controller.open('slidebar');
            }
        });
        $('.cloze-slidebar').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            deletingContentInMenu();
            controller.close('slidebar');
        } );
    /*********************************************************/
    /* start  menu  */
    /********************************************************/


    /*********************************************************/
    /* start change text on button  and portfolio title  */
    /********************************************************/
    changeText();
    $(window).resize(changeText);
    function changeText(){
        if ($(window).width() <= 767) {
            $(".headerInner__col--2 .btn").text('Запись');
            $(".portfolioText__title").prependTo(".portfolioWrap");
           $(".portfolioText__entry").insertBefore(".portfolioList");
        }
        else {
           $(".headerInner__col--2 .btn").text('Записаться онлайн');
           $(".portfolioText__entry").insertBefore(".portfolioText .owl-nav");
            $(".portfolioText__title").insertBefore(".portfolioText__entry");
        }
    }

    /*********************************************************/
    /* end change text on button  */
    /********************************************************/


})(jQuery);