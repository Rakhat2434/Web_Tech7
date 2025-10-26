$(document).ready(function() {
  console.log("Part 2: jQuery Effects loaded!");
  
  // Task 2: Visibility Methods - hide(), show(), toggle()
  $('#btn-hide').click(function() {
    $('#demo-paragraph').hide(500); 
  });
  
  $('#btn-show').click(function() {
    $('#demo-paragraph').show(500);
  });
  
  $('#btn-toggle').click(function() {
    $('#demo-paragraph').toggle(500);
  });
  
  // Task 3: Fade Methods - fadeIn(), fadeOut(), fadeToggle(), fadeTo()
  $('#btn-fadein').click(function() {
    $('#demo-image').fadeIn(1000);
  });
  
  $('#btn-fadeout').click(function() {
    $('#demo-image').fadeOut(1000);
  });
  
  $('#btn-fadetoggle').click(function() {
    $('#demo-image').fadeToggle(1000);
  });
  
  $('#btn-fadeto').click(function() {
    $('#demo-image').fadeTo(1000, 0.5); // Fade to 50% opacity
  });
  
  // Task 4: Slide Methods - slideUp(), slideDown(), slideToggle()
  $('#btn-slide').click(function() {
    $('.collapsible-panel').slideToggle(600);
  });
  
  $('#btn-slidedown').click(function() {
    $('.collapsible-panel').slideDown(600);
  });
  
  $('#btn-slideup').click(function() {
    $('.collapsible-panel').slideUp(600);
  });
});