(function ($) {
    "use strict";

    //mobile
//     mean-menu (mobile)
//    $('#mobile').meanmenu({
//        meanMenuContainer: '.mobile',
//        meanScreenWidth: "991",
//        meanMenuOpen: "<span></span><span></span><span></span>",
//    });

    //wow
    new WOW().init();


    //pop-up video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });


    //   Radial Progress
    //    circle-1
    $('#circle-1').circleProgress({
        value: 0.25,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(25 * progress) + '<i>%</i>');
    });

    //    circle-2
    $('#circle-2').circleProgress({
        value: 0.89,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(89 * progress) + '<i>%</i>');
    });

    //    circle-3
    $('#circle-3').circleProgress({
        value: 0.70,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(70 * progress) + '<i>%</i>');
    });

    //    circle-4
    $('#circle-4').circleProgress({
        value: 0.66,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(66 * progress) + '<i>%</i>');
    });
        //    circle-5
    $('#circle-5').circleProgress({
        value: 0.95,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(95 * progress) + '<i>%</i>');
    });

        //    circle-6
    $('#circle-6').circleProgress({
        value: 0.50,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(50 * progress) + '<i>%</i>');
    });

        //    circle-7
    $('#circle-7').circleProgress({
        value: 0.66,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(66 * progress) + '<i>%</i>');
    });

        //    circle-8
    $('#circle-8').circleProgress({
        value: 0.45,
        size: 120,
        thickness: 10,
        duration: 5000,
        fill: "#ffb400",
        emptyFill: "#252525",
        startAngle: -Math.PI/2,
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.circle-inner').html(Math.round(45 * progress) + '<i>%</i>');
    });





    //    hover
    $(function () {

        $(' #da-thumbs > li ').each(function () {
            $(this).hoverdir();
        });

    });


    //    loader

  $(".sidemenu").fly_sidemenu({
    btnContent: "=", // This option let you define what appears inside the side menu button. You can add your custom icon here. This option accepts all HTML tags. The default value is "=" string.
    position: "left", // This option will let you define where the sidebar will appear on the page. Available options are "top", "left", "right", "bottom". The default value is "left"
    customSelector: "li", // In case you do not want to use lists, simply define your own css selector here. The default value is "li".
    hideButton: false // You can disable the auto creation of toggle button by changing this to true. The default value is false.
  });
    
    
    
    
    
    
    
//    mobile
    $(".navigation").navigation({
  type: "reveal",
  gravity: "left",
  maxWidth: "10000px"
});
    
    
    
    
    
    
    
    
    
    




})(jQuery);
