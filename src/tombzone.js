/**
 *   ,                 ,,            ,
 *  ||                 ||           ||                        '
 * =||=  /'\\ \\/\\/\\ ||/|,  _-_, =||=  /'\\ \\/\\  _-_     \\  _-_,
 *  ||  || || || || || || || ||_.   ||  || || || || || \\    || ||_.
 *  ||  || || || || || || |'  ~ ||  ||  || || || || ||/      ||  ~ ||
 *  \\, \\,/  \\ \\ \\ \\/   ,-_-   \\, \\,/  \\ \\ \\,/  <> || ,-_-
 *                                                           |;
 *  Extremely spooky tombstones, all shapes and sizes.       /
 *  http://tomb.zone
 */

(function tombzone() {

    "use strict"

    var templates = require("./templates");

    var input;
    var output;
    var epitaphInput;

    var template;
    // var epitaph;
    var tombstone;

    /**
     * Update the tombstone whenever the template or tombstone text changes.
     */
    function onFormChange(e) {
        parse();
        draw();
    }

    function parse() {
        console.log();
        console.log("parsing");
        console.log("~~~~~~~");

        var epitaph = epitaphInput.value;
        console.log(epitaph);

    }

    function draw() {
        console.log();
        console.log("drawing");
        console.log("~~~~~~~");
    }

    document.addEventListener("DOMContentLoaded", function(e) {

        input = document.getElementById("input");
        output = document.getElementById("output");

        // Bind change listener to ALL form inputs
        var formInputs = input.querySelectorAll("input,select,textarea");
        for (var i = 0; i < formInputs.length; i++) {
           formInputs[i].onchange = onFormChange;
        }

        // Make sure we bind to both keyup and onchange for the epitaph text
        epitaphInput = document.getElementById("epitaph");
        epitaphInput.onkeyup = onFormChange;
        epitaphInput.onblur = onFormChange;
    });
})();


