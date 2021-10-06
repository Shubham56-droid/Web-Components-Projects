$(function(){
    $('#iphone-slide').bxSlider({
      auto: true,
      mode: 'horizontal',	
      speed: 700,	
      nextText: '',
      prevText: '',
      hideControlOnEnd: true
    });
  });	
  
 
  $(function(){
    $('#screenslide').bxSlider({
      auto: false,
      mode: 'horizontal',	
      speed: 700,	
      nextText: '<div id="next"></div>',
      prevText: '<div id="prev"></div>',
      infiniteLoop: false,
      hideControlOnEnd: false
    });
  });	
  
  
  
  $(function(){
    $('.testimonials').bxSlider({
      auto: true,
      mode: 'fade',	
      nextText: '',
      prevText: '',
      speed: 2000,	
      hideControlOnEnd: true
    });
  });	