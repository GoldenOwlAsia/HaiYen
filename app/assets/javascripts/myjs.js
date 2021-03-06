$('document').ready(function() {
    //Scroll
    $(window).scroll(function(){

      // if ($(this).scrollTop() > 1) {
      //   $('.header-section').css('position','fixed');
      // } else {
      //   $('.header-section').css('position','static');
      // }
    });

    //Navbar Responsive
    $('.navbar').click(function(){
      $('.menu-content').slideToggle();
    });

    // BUTTON LEFT RIGHT SLIDER IMAGE 
    var autoNext = setInterval(setAuto,5000); 

    var current_slider = 1;
    var numIMG = $('.image-bg > img').size();


    $('.img-content').mousemove(function(e){
      el = $(this);
      var index = $(this).parents('.image-element-mechan').index() + 1;
      $('.image-element-mechan:nth-child(' + index + ') > .img-content > .box').css({
          'display':'block',
          'left': e.pageX - el.offset().left,
          'top': e.pageY - el.offset().top,
      });
    });
     
    $('.img-content').mouseleave(function(){
      var index = $(this).parents('.image-element-mechan').index() + 1;
      $('.image-element-mechan:nth-child(' + index + ') > .img-content > .box').css({
          'display':'none'
      });
    })

    //FUNCTION
    function setAuto(){
      $('.image-bg > img:nth-child(' + current_slider + ')').animate({'margin-left':'-100%'}, 1000);
      $('.image-content:nth-child(' + current_slider + ')').animate({'opacity':'0'}, 0);
      current_slider = current_slider + 1;
      if(current_slider > numIMG){
        current_slider = 1;
      }
      $('.image-bg > img:nth-child(' + current_slider + ')').css({'margin-left':'100%'});
      $('.image-bg > img:nth-child(' + current_slider + ')').animate({'margin-left':'0px'}, 1000);
      $('.image-content:nth-child(' + current_slider + ')').delay(1000).animate({'opacity':'1'}, 1000);
    }
});

