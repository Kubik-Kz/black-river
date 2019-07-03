
  

// new WOW().init();








$("#button1").click(function(){
  $(".popup2").toggleClass("show-block");
  $(".overlay1").toggleClass("show-block");
});




$(".close__form").click(function(){
    $(".success").toggleClass("none__form");
    $(".overlay").toggleClass("none__form");
});
$(".overlay").click(function(){
    $(".success").toggleClass("none__form");
    $(".overlay").toggleClass("none__form");
});





$(".video-poop").click(function(){
  $(".popup1").toggleClass("show-block");
  $(".overlay1").toggleClass("show-block");
    
    
});


$(".close-success").click(function(){
  $(".pop_up-window").removeClass("visible");  
  $(".overlay1").addClass("none-block");  
  $(".overlay1").removeClass("show-block");
   
});


$(".close-popup-x").click(function(){
  $(".popup1").toggleClass("none-block");  
  $(".popup1").removeClass("show-block");
  $(".popup2").toggleClass("none-block");  
  $(".popup2").removeClass("show-block");  
  $(".overlay1").addClass("none-block");
  $(".overlay1").removeClass("show-block");
    
    
});



  // Accepts any class name



  $( function() {
    $( "#accordion" ).accordion({
     
    heightStyle: "content"
    });
  } );
  