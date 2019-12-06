$('.burger').click(function(){
    $('span:nth-child(1)').toggleClass('first');
    $('span:nth-child(2)').toggleClass('middle');
    $('span:nth-child(3)').toggleClass('last');
    $('.mobile-menu').toggleClass('mobile-menu-active');
  });


$('.mobile-menu a').click(function() {
    $('.mobile-menu').removeClass('mobile-menu-active');
});