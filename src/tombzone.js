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

    var templates = require("./templates");

    var input;
    var output;

    var template;
    var tombstone;

    /**
     * Update the tombstone whenever the template or tombstone text changes.
     */
    function onFormChange(e) {
        parse();
        draw();
    }

    function parse() {
        console.log("parsing");
    }

    function draw() {
        console.log("drawing");
    }

    document.addEventListener("DOMContentLoaded", function(e) {

        input = document.getElementById('input');
        output = document.getElementById('output');

        var formInputs = input.querySelectorAll('input,select');
        for (i = 0; i < formInputs.length; i++) {
           formInputs[i].onchange = onFormChange;
        }

    });

})();


