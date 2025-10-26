$(document).ready(function() {
  console.log("Part 3: DOM Manipulation loaded!");
  
  let itemCounter = 4;
  
  // Task 5: Add & Remove Elements - append(), prepend(), remove()
  $('#btn-append').click(function() {
    $('#item-list').append('<li>New Item ' + itemCounter + ' (Appended)</li>');
    itemCounter++;
  });
  
  $('#btn-prepend').click(function() {
    $('#item-list').prepend('<li>New Item ' + itemCounter + ' (Prepended)</li>');
    itemCounter++;
  });
  
  $('#btn-remove').click(function() {
    $('#item-list li:last').remove();
  });
  
  // Task 6: Modifying Attributes - attr()
  let imageToggle = false;

  $('#btn-change-image').click(function() {
    if (!imageToggle) {
      $('#dynamic-image').attr('src', 'https://via.placeholder.com/300x200/ff9800/ffffff?text=Changed+Image');
      $('#dynamic-image').attr('alt', 'Changed Image');
      imageToggle = true;
    } else {
      $('#dynamic-image').attr('src', 'https://via.placeholder.com/300x200/4caf50/ffffff?text=Another+Image');
      $('#dynamic-image').attr('alt', 'Another Image');
      imageToggle = false;
    }
  });  
  $('#btn-reset-image').click(function() {
    $('#dynamic-image').attr({
      'src': 'https://via.placeholder.com/300x200/0066cc/ffffff?text=Original+Image',
      'alt': 'Dynamic Image'
    });
    imageToggle = false;
  });
  $('#btn-change-link').click(function() {
    $('#dynamic-link').attr('href', 'https://google.com');
    $('#dynamic-link').text('Visit Google');
  });
  $('#btn-reset-link').click(function() {
    $('#dynamic-link').attr('href', 'https://jquery.com');
    $('#dynamic-link').text('Visit jQuery Website');
  });
  
  // Task 7: Form Interaction - val(), text() for live input display
  $('#name-input').on('input', function() {
    let nameValue = $(this).val();
    if (nameValue) {
      $('#name-display').text('Name: ' + nameValue);
    } else {
      $('#name-display').text('Name: (not entered yet)');
    }
  });
  
  $('#email-input').on('input', function() {
    let emailValue = $(this).val();
    if (emailValue) {
      $('#email-display').text('Email: ' + emailValue);
    } else {
      $('#email-display').text('Email: (not entered yet)');
    }
  });
});