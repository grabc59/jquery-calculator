'use strict';
$(document).ready(function() {
    var $screen = $('#screen');
    var calcInput = "";
    var currentIsOperator = false;
    var prevWasOperator = false;

    //////////////////////////////////////
    ////////// BUTTON LISTENER TEST
    //////////////////////////////////////
    $('.buttons').on('click', function(event) {
        // don't register clicks to the space between buttons (where target is the actual buttons container)
        // console.log(event.target, event.currentTarget);
        if (event.target !== event.currentTarget) {
          var $target = $(event.target);
          currentIsOperator = $target.hasClass("operator");
            if ($target.text() === "C") {
                calcInput = "";
            } else if (calcInput === "Error") {
                return;
            } else if (currentIsOperator && prevWasOperator) {
                calcInput = "Error";
                $screen.text(calcInput);
            } else {
                // at this point the entry will be added to the calculator input. to prepare for the next input, this input becomes the 'previous' input (the value of whether the 'current' was an operator passes to 'previous')
                prevWasOperator = currentIsOperator;
                switch ($target.text()) {
                    case "÷":
                        calcInput += "/";
                        break;
                    case "x":
                        calcInput += "*";
                        break;
                    case "+":
                        calcInput += "+";
                        break;
                    case "-":
                        calcInput += "-";
                        break;
                    case "=":
                        calcInput = eval(calcInput);
                        // don't treat 'equals' as an operator, set it to false. this allows operations to be done on a calculated result.
                        prevWasOperator = false;
                        break;
                    default:
                        calcInput += $target.text();
                }
            }
        }
        $screen.text(calcInput); // every time a button is clicked, update the screen with all input
    });
});
