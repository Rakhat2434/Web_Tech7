// Task 0: Setup - Document ready function
$(document).ready(function() {
  console.log("jQuery is ready!");
  // Task 1: Selectors & CSS
  $('#btn-text').click(function() {
    $('#demo-id p').text('Text content changed using .text()!');
    $('.demo-class p').text('Class selector also changed!');
    $('.demo-tag').text('Paragraph text updated via jQuery!');
  });
  
  $('#btn-html').click(function() {
    $('#demo-id').html('<p><strong>HTML</strong> content changed with <em>.html()</em>!</p>');
    $('.demo-class').html('<p>Now with <span style="color: red;">colored text</span>!</p>');
    $('#output').html('<p><strong>Success!</strong> HTML content modified using jQuery selectors.</p>');
  });
  
  $('#btn-css').click(function() {
    
    $('#demo-id').css({
      'background-color': '#ffeb3b',
      'padding': '15px',
      'border-radius': '8px',
      'border': '2px solid #fbc02d'
    });
    
    // Select by class and change CSS
    $('.demo-class').css({
      'background-color': '#e1bee7',
      'padding': '15px',
      'border-radius': '8px',
      'color': '#4a148c'
    });
    
    // Select by tag and change CSS
    $('.demo-tag').css({
      'font-size': '18px',
      'color': '#d32f2f',
      'font-weight': 'bold',
      'background-color': '#ffcdd2',
      'padding': '10px',
      'border-radius': '6px'
    });
    
    $('#output').html('<p><strong>Styles Applied!</strong> CSS changed using .css() method.</p>');
  });
  
  // Reset All
  $('#btn-reset').click(function() {
    $('#demo-id').html('<p>This element has ID "demo-id"</p>').css({
      'background-color': '',
      'padding': '',
      'border-radius': '',
      'border': ''
    });
    
    $('.demo-class').html('<p>This element has class "demo-class"</p>').css({
      'background-color': '',
      'padding': '',
      'border-radius': '',
      'color': ''
    });
    
    $('.demo-tag').text('This is a paragraph with class "demo-tag"').css({
      'font-size': '',
      'color': '',
      'font-weight': '',
      'background-color': '',
      'padding': '',
      'border-radius': ''
    });
    
    $('#output').html('<p><strong>Output area:</strong> Click buttons to see jQuery in action!</p>');
  });
});