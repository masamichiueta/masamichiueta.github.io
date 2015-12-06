$(function() {
  
  $(window).on('resize', function() {
    
    //Show PC navigation for PC
    if ($('.sn-logo').css('display') === 'block') {
      
      var menustate = $('#dn-menustate');
      var nav = $('#nav');
      
      //CheckBox
      if (menustate.prop('checked')) {
        
        //Add notransition class temporary
        nav.addClass('notransition');
        menustate.prop('checked', false);
        nav[0].offsetHeight;
        nav.removeClass('notransition');
      } 
      
      //Anchor
      if (window.location.hash === '#dn-menustate') {
        
        //Add notransition class temporary
        nav.addClass('notransition');
        window.location.hash = '#';
        nav[0].offsetHeight;
        nav.removeClass('notransition');
      }
    }
    
  });
  
});