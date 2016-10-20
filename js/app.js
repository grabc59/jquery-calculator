'use strict';
$( document ).ready(function() {
  var $screen = $('#screen');
  var calcInput = "";
  $screen.text(calcInput);

//////////////////////////////////////
////////// BUTTON LISTENER TEST
//////////////////////////////////////
  $('#buttons-container').on('click', function(event) {
    var $target = $(event.target);
    if ($target.text() === "C") {
        clearScreen();
    } else if (calcInput === "Error") {
        // Do not allow input other than "clear" on error
        return;
      } else {
      switch ($target.text()) {
        case "÷":
            operatorCheck($target);
            if (calcInput === "Error") {
              return;
            } else {
              calcInput += "/";
            }
          break;
        case "x":
          operatorCheck($target);
          if (calcInput === "Error") {
            return;
          } else {
            calcInput += "*";
          }
            break;
        case "+":
          operatorCheck($target);
          if (calcInput === "Error") {
            return;
          } else {
            calcInput += "+";
          }
          break;
        case "-":
        operatorCheck($target);
        if (calcInput === "Error") {
          return;
        } else {
          calcInput += "-";
        }
          break;
        case "=":
        operatorCheck($target);
        if (calcInput === "Error") {
          return;
        } else {
          calcInput = eval(calcInput);
        }
          break;
        default:
          if (calcInput === "Error") {
            return;
          } else {
            calcInput += $target.text(); // add the current target text to the stored calcInput variable. Intended to be numbers.
          }
      }
    }
  // console.log(calcInput);
  $screen.text(calcInput); // every time a button is clicked, update the screen with all input

});

//////////////////////////////////////
////////// SCREEN TEST
//////////////////////////////////////
// $('#screen').text('hello');

//////////////////////////////////////
////////// CLEARSCREEN
//////////////////////////////////////
function clearScreen() {
  calcInput = "";
}


//////////////////////////////////////
////////// CHECK FOR MULTIPLE OPERATORS
//////////////////////////////////////
  function operatorCheck($target) {
    var operators = ["+", "-", "*", "/"];
    var lastChar = calcInput.slice(calcInput.length-1)
    for (var i = 0; i < operators.length; i++) {
      if (lastChar === operators[i]) {
        calcInput = "Error";
        $screen.text(calcInput);
      }
    }
  }
});
