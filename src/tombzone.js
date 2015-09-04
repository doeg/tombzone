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
    var templateSelect;
    var epitaphInput;

    var template;
    // var epitaph;
    var tombstone;

    /**
     * Update the tombstone whenever the template or tombstone text changes.
     */
    function onFormChange(e) {
        var tombstone = parse();
        draw(tombstone);
    }

    function parse() {
        var templateID = templateSelect.options[templateSelect.selectedIndex].value;
        var template = templates[templateID];
        var epitaph = epitaphInput.value;

        // Insert the epitaph into the epitaph zone

        // Pad the lines


        return template.ascii
    }

    function draw(tombstone) {
        for (var l = 0; l < tombstone.length; l++) {
            var line = tombstone[l];
            console.log(line);
        }
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

        templateSelect = document.getElementById("template");
    });
})();


