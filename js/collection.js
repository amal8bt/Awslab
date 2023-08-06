 jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------


    // -------------------------------------------------------------

    //Initiat WOW JS
    new WOW().init();
    //scroll arrow bottom

    $('.scroll-bottom').click(function(){
       $('html, body').animate({scrollTop:678},'50');
   });

       //Search Box (Header)
   jQuery('.search').click(function () {
    if(jQuery('.search-btn').hasClass('fa-search')){
      jQuery('.search-open').fadeIn(500);
      jQuery('.search-btn').removeClass('fa-search');
      jQuery('.search-btn').addClass('fa-times');
    } else {
      jQuery('.search-open').fadeOut(500);
      jQuery('.search-btn').addClass('fa-search');
      jQuery('.search-btn').removeClass('fa-times');
    }   
  }); 


 
    // -------------------------------------------------------------

    //---------------------------------------------------------------
    
    (function () {
    
        /* initialize shuffle plugin */
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    
    }());   
    
// -------------------------------------------------------------
//                ADD CLASS
// -------------------------------------------------------------


$(window).scroll(function(){ 
  if ($(this).scrollTop() >670){      
    $('.who-we-are').addClass("menu-fix");
  } else{
    $('.who-we-are').removeClass("menu-fix");
  }
});


    //-------------------------------------------------------
    // counter
    //-------------------------------------------------------
 (function () {
        $('.counter').counterUp({
            delay: 2,
            time: 3000
        });

    })();



});



// owl

    // -------------------------------------------------------------
    // testimonail carosel
    // -------------------------------------------------------------

    (function () {
        $('#owl-example').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            dots:false,
            responsive:{
                320:{
                    items:2
                },
                480:{
                    items:3
                },
                768:{
                    items:4
                },
                992:{
                    items:6
                }
            }
        });

      var owl = $('#owl-example');
      owl.owlCarousel();
      // Go to the next item
      $('.testimonial-items-navigation .next').click(function() {
          owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.testimonial-items-navigation .prev').click(function() {
          // With optional speed parameter
          // Parameters has to be in square bracket '[]'
          owl.trigger('prev.owl.carousel', [300]);
      })

    }());


   jQuery(document).ready(function ($) {
    
    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
        $('.back-to-top').fadeOut(duration);
      }
    });

    $('.back-to-top').click(function (event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
    })

   $( ".dropdown" ).hover(function() {
    $( this ).toggleClass( "open");
    $(".dropdown-menu").animate({top: "22px"}, function(){$(".dropdown-menu").animate({top: "15px"});});
    });


  });


//Rs-PLUGIN
jQuery(document).ready(function() {
                
                    
                                
                    jQuery('.tp-banner').show().revolution(
                    {
                        dottedOverlay:"none",
                        delay:16000,
                        startwidth:1170,
                        startheight:670,
                        hideThumbs:200,
                        
                        thumbWidth:100,
                        thumbHeight:50,
                        thumbAmount:5,
                        
                        navigationType:"none",
                        navigationArrows:"solo",
                        navigationStyle:"preview4",
                        
                        touchenabled:"on",
                        onHoverStop:"off",
                        
                        swipe_velocity: 0.7,
                        swipe_min_touches: 1,
                        swipe_max_touches: 1,
                        drag_block_vertical: false,
                                                
                                                parallax:"mouse",
                        parallaxBgFreeze:"on",
                        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
                                                
                        keyboardNavigation:"off",
                        
                        navigationHAlign:"center",
                        navigationVAlign:"bottom",
                        navigationHOffset:0,
                        navigationVOffset:20,

                        soloArrowLeftHalign:"left",
                        soloArrowLeftValign:"center",
                        soloArrowLeftHOffset:20,
                        soloArrowLeftVOffset:0,

                        soloArrowRightHalign:"right",
                        soloArrowRightValign:"center",
                        soloArrowRightHOffset:20,
                        soloArrowRightVOffset:0,
                                
                        shadow:0,
                        fullWidth:"on",
                        fullScreen:"off",

                        spinner:"spinner4",
                        
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,

                        shuffle:"off",
                        
                        autoHeight:"off",                       
                        forceFullWidth:"off",                       
                                                
                                                
                                                
                        hideThumbsOnMobile:"off",
                        hideNavDelayOnMobile:1500,                      
                        hideBulletsOnMobile:"off",
                        hideArrowsOnMobile:"off",
                        hideThumbsUnderResolution:0,
                        
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        startWithSlide:0,
                        videoJsPath:"rs-plugin/videojs/",
                        fullScreenOffsetContainer: ""   
                    });
                    
                    
                    
                                    
                });



//////// -- mmenu -- /////////

$(function() {
                var $menu = $('nav#menu'),
                    $html = $('html, body');

                $menu.mmenu({
                    dragOpen: true
                });

                $menu.find( 'li > a' ).on(
                    'click',
                    function( e )
                    {
                        var href = $(this).attr( 'href' );

                        //  if the clicked link is linked to an anchor, scroll the page to that anchor 
                        if ( href.slice( 0, 1 ) == '#' )
                        {
                            $menu.one(
                                'closed.mm',
                                function()
                                {
                                    setTimeout(
                                        function()
                                        {
                                            $html.animate({
                                                scrollTop: $( href ).offset().top
                                            }); 
                                        }, 10
                                    );  
                                }
                            );
                        }
                    }
                );
            });


//////// -- loader -- /////////

setTimeout(function(){ $('.loader').fadeOut(); }, 3000);


//////// -- Smooth scroll -- /////////

smoothScroll.init({
      speed: 2000,
      easing: 'easeInOutCubic',
      offset: 0,
      updateURL: true,
      callbackBefore: function ( toggle, anchor ) {},
      callbackAfter: function ( toggle, anchor ) {}
    });



    (function ($) {
        "use strict";
    
        
        /*[ Back to top ]
        ===========================================================*/
        var windowH = $(window).height()/2;
    
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > windowH) {
                $("#myBtn").css('display','flex');
            } else {
                $("#myBtn").css('display','none');
            }
        });
    
        $('#myBtn').on("click", function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    
    
        /*[ Show header dropdown ]
        ===========================================================*/
        $('.js-show-header-dropdown').on('click', function(){
            $(this).parent().find('.header-dropdown')
        });
    
        var menu = $('.js-show-header-dropdown');
        var sub_menu_is_showed = -1;
    
        for(var i=0; i<menu.length; i++){
            $(menu[i]).on('click', function(){ 
                
                    if(jQuery.inArray( this, menu ) == sub_menu_is_showed){
                        $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                        sub_menu_is_showed = -1;
                    }
                    else {
                        for (var i = 0; i < menu.length; i++) {
                            $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
                        }
    
                        $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');
                        sub_menu_is_showed = jQuery.inArray( this, menu );
                    }
            });
        }
    
        $(".js-show-header-dropdown, .header-dropdown").click(function(event){
            event.stopPropagation();
        });
    
        $(window).on("click", function(){
            for (var i = 0; i < menu.length; i++) {
                $(menu[i]).parent().find('.header-dropdown').removeClass("show-header-dropdown");
            }
            sub_menu_is_showed = -1;
        });
    
    
         /*[ Fixed Header ]
        ===========================================================*/
        var posWrapHeader = $('.topbar').height();
        var header = $('.container-menu-header');
    
        $(window).on('scroll',function(){
    
            if($(this).scrollTop() >= posWrapHeader) {
                $('.header1').addClass('fixed-header');
                $(header).css('top',-posWrapHeader); 
    
            }  
            else {
                var x = - $(this).scrollTop(); 
                $(header).css('top',x); 
                $('.header1').removeClass('fixed-header');
            } 
    
            if($(this).scrollTop() >= 200 && $(window).width() > 992) {
                $('.fixed-header2').addClass('show-fixed-header2');
                $('.header2').css('visibility','hidden'); 
                $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");
                
            }  
            else {
                $('.fixed-header2').removeClass('show-fixed-header2');
                $('.header2').css('visibility','visible'); 
                $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
            } 
    
        });
        
        /*[ Show menu mobile ]
        ===========================================================*/
        $('.btn-show-menu-mobile').on('click', function(){
            $(this).toggleClass('is-active');
            $('.wrap-side-menu').slideToggle();
        });
    
        var arrowMainMenu = $('.arrow-main-menu');
    
        for(var i=0; i<arrowMainMenu.length; i++){
            $(arrowMainMenu[i]).on('click', function(){
                $(this).parent().find('.sub-menu').slideToggle();
                $(this).toggleClass('turn-arrow');
            })
        }
    
        $(window).resize(function(){
            if($(window).width() >= 992){
                if($('.wrap-side-menu').css('display') == 'block'){
                    $('.wrap-side-menu').css('display','none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }
                if($('.sub-menu').css('display') == 'block'){
                    $('.sub-menu').css('display','none');
                    $('.arrow-main-menu').removeClass('turn-arrow');
                }
            }
        });
    
    
        /*[ remove top noti ]
        ===========================================================*/
        $('.btn-romove-top-noti').on('click', function(){
            $(this).parent().remove();
        })
    
    
        /*[ Block2 button wishlist ]
        ===========================================================*/
        $('.block2-btn-addwishlist').on('click', function(e){
            e.preventDefault();
            $(this).addClass('block2-btn-towishlist');
            $(this).removeClass('block2-btn-addwishlist');
            $(this).off('click');
        });
    
        /*[ +/- num product ]
        ===========================================================*/
        $('.btn-num-product-down').on('click', function(e){
            e.preventDefault();
            var numProduct = Number($(this).next().val());
            if(numProduct > 1) $(this).next().val(numProduct - 1);
        });
    
        $('.btn-num-product-up').on('click', function(e){
            e.preventDefault();
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });
    
    
        /*[ Show content Product detail ]
        ===========================================================*/
        $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');
        $('.active-dropdown-content .dropdown-content').slideToggle('fast');
    
        $('.js-toggle-dropdown-content').on('click', function(){
            $(this).toggleClass('show-dropdown-content');
            $(this).parent().find('.dropdown-content').slideToggle('fast');
        });
    
    
        /*[ Play video 01]
        ===========================================================*/
        var srcOld = $('.video-mo-01').children('iframe').attr('src');
    
        $('[data-target="#modal-video-01"]').on('click',function(){
            $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";
    
            setTimeout(function(){
                $('.video-mo-01').css('opacity','1');
            },300);      
        });
    
        $('[data-dismiss="modal"]').on('click',function(){
            $('.video-mo-01').children('iframe')[0].src = srcOld;
            $('.video-mo-01').css('opacity','0');
        });
    
    })(jQuery);