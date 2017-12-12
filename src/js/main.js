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
        $('.portfolioWrap .owl-carousel').owlCarousel({
            autoHeight:true,
            nav: true,
            items: 1,
            onInitialized: counter, //When the plugin has initialized.
            onTranslated: counter, //When the translation of the stage has finished.
        });
        function counter(event) {
            moveelements();
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
            $('#portfolioSliderCounter').html(+item+"/"+items);


        }
        
        function moveelements() {
            $('.owl-carousel--portfolio .owl-nav').prependTo('.owl-item.active .controls');
            $('#portfolioSliderCounter').appendTo('.owl-item.active .controls');
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

        var controller = new slidebars();
        controller.init();

        // Mobile only
        var windowWidth,
            mobileOnly = function () {
                windowWidth = $(window).width();
                if (windowWidth > 1024) {
                    controller.close('slidebar');
                }
            };
        mobileOnly();
        $(window).on('resize', mobileOnly);

        $('.js-open-menu').on('click', function (e) {
            e.stopPropagation();
            if ( windowWidth < 1025 ) {
                controller.open('slidebar');
            }
        });
        $('.cloze-slidebar').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
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
            var parentelement =  $('.owl-carousel--portfolio .portfolioWrap__item');
            if ($(window).width() <= 767) {
                $(".headerInner__col--2 .btn").text('Запись');
                parentelement.find('.portfolioText__title').each(function(){
                    $(this).parents('.portfolioWrap__item').prepend($(this));
                });
                parentelement.find('.portfolioText__entry').each(function(){
                    $(this).parents('.portfolioWrap__item').find('.controls').insertBefore($(this));
                });
            }
            else {
               $(".headerInner__col--2 .btn").text('Записаться онлайн');
                parentelement.find('.portfolioText__title').each(function(){
                     $(this).parents('.portfolioWrap__item').find('.portfolioText').prepend($(this));
                 });
                parentelement.find('.portfolioText__entry').each(function(){
                     $(this).parents('.portfolioWrap__item').find('.controls').insertAfter($(this));
                 });
            }
        }
    /*********************************************************/
    /* end change text on button  */
    /********************************************************/


})(jQuery);