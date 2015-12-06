$(function() {
  
  $(window).on('resize', function() {
    
    //Show PC navigation for PC
    if ($('.sn-logo').css('display') === 'block') {
      
      var menustate = $('#dn-menustate');
      
      //CheckBox
      if (menustate.prop('checked')) {
        
        //Add notransition class temporary
        $('#nav').addClass('notransition');
        menustate.prop('checked', false);
        $('#nav').removeClass('notransition');
      } 
      
      //Anchor
      if (window.location.hash === '#dn-menustate') {
        
        //Add notransition class temporary
        $('#nav').addClass('notransition');
        window.location.hash = '#';
        $('#nav').removeClass('notransition');
      }
    }
    
  });
  
});