(function ($) {
Drupal.behaviors.gs = {
attach: function(context, settings) {
    $(".pop").click(function(){
        $('#formonsite-form').css("display","block");
    });
        
    $("#formonsite-form .close").click(
        function(){$('#formonsite-form').css("display","none");
    });
}
};
})(jQuery);