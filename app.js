// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the calculator screen element
    var screen = document.querySelector('.screen');
  
    // Get all the number buttons
    var numberButtons = document.querySelectorAll('.btn.white-btn');
  
    // Get all the operator buttons
    var operatorButtons = document.querySelectorAll('.btn.yellow-btn');
  
    // Get the equal button
    var equalButton = document.querySelector('.btn-equal');
  
    // Get the clear button
    var clearButton = document.querySelector('.btn-clear');
  
    // Add event listener to each number button
    numberButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Append the clicked number to the screen value
        screen.value += button.dataset.num;
      });
    });
  
    // Add event listener to each operator button
    operatorButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Append the clicked operator to the screen value
        screen.value += button.dataset.num;
      });
    });
  
    // Add event listener to the equal button
    equalButton.addEventListener('click', function() {
      try {
        // Evaluate the expression on the screen and display the result
        screen.value = eval(screen.value);
      } catch (error) {
        // Handle any errors that may occur during evaluation
        screen.value = 'Error';
      }
    });
  
    // Add event listener to the clear button
    clearButton.addEventListener('click', function() {
      // Clear the screen value
      screen.value = '';
    });
  
  });
  