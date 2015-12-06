$(function() {
  
  $(window).on('resize', function() {

    if ($('.sn-logo').css('display') === 'block') {
      
      var menustate = $('#dn-menustate');
 
      if (menustate.prop('checked')) {
        menustate.prop('checked', false);
      } 
      
      if (window.location.hash === '#dn-menustate') {
        window.location.hash = '#';
      }
    }
    
  });
  
});