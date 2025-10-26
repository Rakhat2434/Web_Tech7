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
      $('#dynamic-image').attr('src', 'https://avatars.mds.yandex.net/i?id=59eb6c673adb53e420917e798635d1b2a1c70a86-2959863-images-thumbs&n=13');
      $('#dynamic-image').attr('alt', 'Changed Image');
      imageToggle = true;
    } else {
      $('#dynamic-image').attr('src', 'https://avatars.mds.yandex.net/i?id=3603f564fc432b15f064309af00b22f727d27655-16497261-images-thumbs&n=13');
      $('#dynamic-image').attr('alt', 'Another Image');
      imageToggle = false;
    }
  });  
  $('#btn-reset-image').click(function() {
    $('#dynamic-image').attr({
      'src': 'https://avatars.mds.yandex.net/i?id=3603f564fc432b15f064309af00b22f727d27655-16497261-images-thumbs&n=13',
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
