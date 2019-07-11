
$(document).ready(function () {

   $("button#call_back-pop").click(function() {
    $(".popup_callback").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});

$("span#call_back-pop").click(function() {
    $(".popup_callback").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    $(".cost-layout").click(function() {
    $(".popup_callback").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    $(".block--more--1").click(function() {
    $(".popup_showroom").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
}); 
    
    $(".get-approval").click(function() {
    $(".popup_get-approval").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
}); 
    $(".show-room").click(function() {
    $(".popup_showroom").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    $(".block--more--2").click(function() {
    $(".popup_premium").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
     
    $(".sells-btn").click(function() {
    $(".popup_like").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
}); 


    $(".discounts1").click(function() {
    $(".popup_promo-list").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    $(".btn-all-discounts").click(function() {
    $(".popup_promo-item").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    
    
    $(".mortgage").click(function() {
    $(".popup_mortgage").addClass("show-block"); 
    $(".overlay-m").addClass("show-block");
});
    
    
    $(".close-pop-up").click(function() {
    $(".popup_callback").removeClass("show-block"); 
    $(".popup_showroom").removeClass("show-block"); 
    $(".popup_promo-item").removeClass("show-block"); 
    $(".popup_mortgage").removeClass("show-block"); 
    $(".popup_premium").removeClass("show-block"); 
    $(".overlay-m").removeClass("show-block");
    $(".popup_like").removeClass("show-block"); 
    $(".popup_promo-list").removeClass("show-block");
    $(".popup_get-approval").removeClass("show-block"); 
});
    $(".overlay-m").click(function() {
    $(".popup_callback").removeClass("show-block"); 
    $(".popup_showroom").removeClass("show-block"); 
    $(".popup_promo-item").removeClass("show-block"); 
    $(".popup_mortgage").removeClass("show-block"); 
    $(".popup_premium").removeClass("show-block"); 
    $(".overlay-m").removeClass("show-block");
    $(".popup_like").removeClass("show-block"); 
    $(".popup_promo-list").removeClass("show-block");
    $(".popup_get-approval").removeClass("show-block"); 
      $(".mobile-menu").removeClass("show-block");
});
    

    
    
    $(".menu").click(function() {
    $(".mobile-menu").addClass("show-block");
    $(".overlay-m").addClass("show-block");
    $(".mobile-menu").removeClass("none-block");
    $(".overlay-m").removeClass("none-block")
});
    
    
   
    
    $(".close-mobile-menu").click(function() {
    $(".mobile-menu").addClass("none-block");
    $(".overlay-m").addClass("none-block")
});
    
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});  

  
   
        
    $(".img--magazine").mouseover(function(){
        $(".download--presentation01").css({"transition": "0.3s ease-out", "box-shadow": "0 1px 5px 0 rgba(0,14,63,.25)", "transform": "scale(1.05)"});
         $(".img--magazine").css({"transition": "0.3s ease-out", "transform": "scale(1.05)"});
    });
      
    $(".img--magazine").mouseout(function(){
        $(".download--presentation01").css({"transition": "0.3s ease-out", "box-shadow": "none", "transform": "scale(1)"});
         $(".img--magazine").css({"transition": "0.3s ease-out", "transform": "scale(1)"});
    });
     
        
    $(".download--presentation01").mouseover(function(){
        $(".download--presentation01").css({"transition": "0.3s ease-out", "box-shadow": "0 1px 5px 0 rgba(0,14,63,.25)", "transform": "scale(1.05)"});
         $(".img--magazine").css({"transition": "0.3s ease-out", "transform": "scale(1.05)"});
    });
      
    $(".download--presentation01").mouseout(function(){
        $(".download--presentation01").css({"transition": "0.3s ease-out", "box-shadow": "none", "transform": "scale(1)"});
         $(".img--magazine").css({"transition": "0.3s ease-out", "transform": "scale(1)"});
    });
     

    //tabs
    //tabs
    //tabs
    //tabs
    
        (function($) {
$(function() {
 
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
 
});
})(jQuery);
    
    (function($) {
$(function() {
 
  $('ul.tabs__caption1').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active1').siblings().removeClass('active1')
      .closest('div.tabs-1r').find('div.tabs__content1').removeClass('active1').eq($(this).index()).addClass('active1');
  });
 
});
})(jQuery);
     //tabs
    //tabs
    //tabs
    //tabs   
    
});