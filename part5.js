$(document).ready(function() {
  console.log("Part 5: Bouncing Ball Project loaded!");
  
  const containerWidth = $('#ball-container').width();
  const containerHeight = $('#ball-container').height();
  const ballSize = 60;
  let isAnimating = false;
  
  // Task 11: Bouncing Ball Animation
  
  // Start Animation - Horizontal bounce
  $('#btn-start').click(function() {
    if (isAnimating) return;
    isAnimating = true;
    
    $('#ball')
      // Move right
      .animate({
        left: (containerWidth - ballSize) + 'px'
      }, 2000, 'swing')
      // Bounce back left
      .animate({
        left: '20px'
      }, 2000, 'swing', function() {
        isAnimating = false;
      });
  });
  
  // Bounce Vertical
  $('#btn-bounce-vertical').click(function() {
    if (isAnimating) return;
    isAnimating = true;
    
    $('#ball')
      // Bounce down
      .animate({
        top: (containerHeight - ballSize) + 'px'
      }, 1000, 'swing')
      // Bounce up
      .animate({
        top: '20px'
      }, 1000, 'swing')
      // Bounce down again
      .animate({
        top: (containerHeight - ballSize) + 'px'
      }, 1000, 'swing')
      // Return to top
      .animate({
        top: '20px'
      }, 1000, 'swing', function() {
        isAnimating = false;
      });
  });
  
  // Bounce Diagonal
  $('#btn-bounce-diagonal').click(function() {
    if (isAnimating) return;
    isAnimating = true;
    
    $('#ball')
      // Move to bottom-right
      .animate({
        left: (containerWidth - ballSize) + 'px',
        top: (containerHeight - ballSize) + 'px'
      }, 2000, 'swing')
      // Bounce to top-left
      .animate({
        left: '20px',
        top: '20px'
      }, 2000, 'swing', function() {
        isAnimating = false;
      });
  });
  
  // Continuous Bounce Loop
  $('#btn-continuous').click(function() {
    if (isAnimating) return;
    isAnimating = true;
    
    function continuousBounce() {
      if (!isAnimating) return;
      
      $('#ball')
        .animate({ left: (containerWidth - ballSize) + 'px' }, 1500)
        .animate({ 
          left: (containerWidth - ballSize) + 'px',
          top: (containerHeight - ballSize) + 'px'
        }, 1500)
        .animate({ left: '20px', top: (containerHeight - ballSize) + 'px' }, 1500)
        .animate({ left: '20px', top: '20px' }, 1500, function() {
          if (isAnimating) {
            continuousBounce();
          }
        });
    }
    
    continuousBounce();
  });
  
  // Stop Animation
  $('#btn-stop').click(function() {
    isAnimating = false;
    $('#ball').stop(true, false);
  });
  
  // Reset Ball Position
  $('#btn-reset').click(function() {
    isAnimating = false;
    $('#ball').stop(true, true).css({
      left: '20px',
      top: '20px'
    });
  });
});