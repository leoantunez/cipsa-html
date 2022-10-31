$(document).ready(function(){
    $( "#tabs" ).tabs();
    $('.carousel').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
    });
    $(".enlace_menu").mouseover(function(evt){
        $(this).animate({ deg: -10 },
            {
              duration: 100,
              step: function(now) {
                $(this).css({
                     transform: 'rotate(' + now + 'deg)' ,
                     boxShadow: '1px 1px 1px #000'
                });
              }
        });
    });

    $(".enlace_menu").mouseleave(function(evt){
        $(this).animate({ deg: 0 },
            {
              duration: 100,
              step: function(now) {
                $(this).css({ 
                    transform: 'rotate(' + now + 'deg)' ,
                    boxShadow: 'none'
                });
              }
        });
    });

    $( "#accordion" ).accordion();
    $( ".datepicker" ).datepicker({
      dateFormat: "dd-mm-yy",
      onSelect: function(fecha){
        $("#fecha").val(fecha);
      }
    });
});