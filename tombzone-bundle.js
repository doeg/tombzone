(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = [
    {
        name: "weeping angel",
        startRow: 11,
        startCol: 12,
        maxWidth: 16,
        template: [
            ['                  _  /)                   '],
            ['                 mo / )                   '],
            ['                 |/)\\)                    '],
            ['                  /\\_                     '],
            ['                  \\__|=                   '],
            ['                 (    )                   '],
            ['                 __)(__                   '],
            ['           _____/      \\\\_____            '],
            ['          |                  ||           '],
            ['          |    † R.I.P. †    ||           '],
            ['          |                  ||           '],
            ['          | ################ ||           '],
            ['          |                  ||           '],
            ['  *       | *   **    * **   |**      **  '],
            ['   \\))ejm97/.,(//,,..,,\\||(,,.,\\\\,.((//   ']
          ],
    }
];

},{}],2:[function(require,module,exports){
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



},{"./templates":1}]},{},[2]);
