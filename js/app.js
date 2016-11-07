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
                // calcInput = "";
                $screen.val("");
            } else if (calcInput === "Error") {
                return;
            } else if (currentIsOperator && prevWasOperator) {
                $screen.val("Error");
                // calcInput = "Error";
                // $screen.text(calcInput);
            } else {
                // at this point the entry will be added to the calculator input. to prepare for the next input, this input becomes the 'previous' input (the value of whether the 'current' was an operator passes to 'previous')
                prevWasOperator = currentIsOperator;
                switch ($target.text()) {
                    case "÷":
                        // calcInput += "/";
                        $screen.val($screen.val() + "/");
                        break;
                    case "x":
                        // calcInput += "*";
                        $screen.val($screen.val() + "*");
                        break;
                    case "+":
                        // calcInput += "+";
                        $screen.val($screen.val() + "+");
                        break;
                    case "-":
                        // calcInput += "-";
                        $screen.val($screen.val() + "-");
                        break;
                    case "=":
                        // calcInput = eval(calcInput);
                        $screen.val(eval($screen.val()));
                        // don't treat 'equals' as an operator, set it to false. this allows operations to be done on a calculated result.
                        prevWasOperator = false;
                        break;
                    default:
                        // calcInput += $target.text();
                        $screen.val($screen.val() + $target.text());
                }
            }
        }
        // $screen.text(calcInput); // every time a button is clicked, update the screen with all input
    });



////////////////////////////
/////// KEYBOARD EVENTS
////////////////////////////
    $(window).keydown(function (e) {
       var key = e.which;
       if (key === 13) { // enter
         $screen.val(eval($screen.val()));
         prevWasOperator = false;
       } else if (key === 27) { // esc
         $screen.val("");
       }
    });

});
