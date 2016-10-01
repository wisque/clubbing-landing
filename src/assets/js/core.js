(function($, window, document) {
    'use strict';
    
    $(document).ready(function() {
        $(".menulink a").click(function() {
            $("#menu").stop(true, true).slideToggle('fast');
        });
        
        resize_intro();
        
        $(".hero").stop(true, true).fadeIn('fast');
        $(".form-box").stop(true, true).fadeIn('fast');
        $(".shadow").stop(true, true).fadeIn('fast');
    });

    $(window).resize(function () {
        resize_intro();
    });

    function resize_intro(){
        var page_height =  $(window).height();
        var content_height =  $('#content').height();
        
        if ($('#top').height() < (page_height)) {
            var top_margin = (page_height - $('#top').height()) / 2;
            if ($(window).width() > 770) {
                $("#top").css('margin-top',(top_margin+15)+'px');
                $("#top").css('margin-bottom',(top_margin)+'px');
                $(".flexslider .slides > li").css('height',(content_height)+'px');
            }
        } else {
            $("#top").css('margin-top','0px');
            $("#top").css('margin-bottom','0px');
            $(".flexslider .slides > li").css('height','300px');
        }
    }

})(jQuery, window, document);