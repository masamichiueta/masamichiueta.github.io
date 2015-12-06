$(function() {
  
  console.log('Hello, I\'m Masmaichi');
  
  $(window).on('resize', function() {

    if ($('.sn-logo').css('display') === 'block') {
      console.log('pc');
    } else {
      console.log('tablet, phone');
    }
    
  });
  
});