$(document).ready(function() {
  console.log("Part 4: Animations loaded!");
  
  // Task 8: Basic Animation - increase size and change position
  $('#btn-animate-basic').click(function() {
    $('#box1').animate({
      width: '150px',
      height: '150px',
      left: '200px',
      top: '100px'
    }, 1000);
  });
  
  $('#btn-reset-basic').click(function() {
    $('#box1').css({
      width: '100px',
      height: '100px',
      left: '20px',
      top: '20px'
    });
  });
  
  // Task 9: Sequential Animations - chain animations step by step
  $('#btn-animate-sequence').click(function() {
    $('#box2')
      // Move right
      .animate({
        left: '300px'
      }, 800)
      // Move down
      .animate({
        top: '130px'
      }, 800)
      // Shrink
      .animate({
        width: '50px',
        height: '50px'
      }, 800)
      // Return to original
      .animate({
        left: '20px',
        top: '20px',
        width: '100px',
        height: '100px'
      }, 1000);
  });
  
  $('#btn-reset-sequence').click(function() {
    $('#box2').stop(true, true).css({
      width: '100px',
      height: '100px',
      left: '20px',
      top: '20px'
    });
  });
  
  // Task 10: Combined Animation - opacity, size, and movement together
  $('#btn-animate-combined').click(function() {
    $('#box3').animate({
      opacity: '0.3',
      width: '200px',
      height: '200px',
      left: '250px',
      top: '30px',
      borderRadius: '50%'
    }, 1500, function() {
      // Animation complete callback
      $(this).animate({
        opacity: '1',
        width: '100px',
        height: '100px',
        left: '20px',
        top: '20px',
        borderRadius: '8px'
      }, 1500);
    });
  });
  
  $('#btn-reset-combined').click(function() {
    $('#box3').stop(true, true).css({
      opacity: '1',
      width: '100px',
      height: '100px',
      left: '20px',
      top: '20px',
      borderRadius: '8px'
    });
  });
});