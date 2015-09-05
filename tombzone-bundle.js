(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {
    "weeping angel": {
        name: "weeping angel",
        startRow: 11,
        startCol: 12,
        maxWidth: 17,
        ascii: [
            '                  _  /)                   ',
            '                 mo / )                   ',
            '                 |/)\\)                    ',
            '                  /\\_                     ',
            '                  \\__|=                   ',
            '                 (    )                   ',
            '                 __)(__                   ',
            '           _____/      \\\\_____            ',
            '          |                   ||           ',
            '          |     + R.I.P. +    ||           ',
            '          |                   ||           ',
            '          |                   ||           ',
            '          |                   ||           ',
            '  *       | *   **    * **    |**      **  ',
            '   \\))ejm97/.,(//,,..,,\\||(,,.,\\\\,.((//   '
          ],
    },

    "archangel": {
        name: "archangel",
        startRow: 9,
        startCol: 12,
        maxWidth: 16,
        ascii: [
            '                (\\  _  /)               ',
            '                ( \\ O / )               ',
            '                 (// \\\\)                ',
            '                    X                   ',
            '                   / \\                  ',
            '                  /___\\                 ',
            '           _____/      \\\\_____          ',
            '          |         +         ||         ',
            '          |                   ||         ',
            '          |                   ||         ',
            '          |                   ||         ',
            '          |  _     ___   _    ||         ',
            '          | | \\     |   | \\   ||         ',
            '          | |  |    |   |  |  ||         ',
            '          | |_/     |   |_/   ||         ',
            '          | | \\     |   |     ||         ',
            '          | |  \\    |   |     ||         ',
            '          | |   \\. _|_. | .   ||         ',
            '          |                   ||         ',
            '  *     * | *   **    * **    |**     **',
            '   \\))ejm\\(/.,(//,,..,,\\||(,,.,\\\\,.((// ',
        ],
    },

    "little one": {
        name: "little one",
        startRow: 3,
        startCol: 7,
        maxWidth: 5,
        ascii: [
            '       _____      ',
            '     //  +  \\     ',
            '    ||  RIP  |    ',
            '    ||       |    ',
            '    ||       |    ',
            '   \\||/\\/\\//\\|/   ',
        ],
    }
};

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

    "use strict"

    var templates = require("./templates");

    var input;
    var output;
    var templateSelect;
    var epitaphInput;

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
        var epitaph = epitaphInput.innerText;

        if (!epitaph.trim()) return template.ascii;

        var lines = splitStringIntoLines(epitaph, template.maxWidth);

        var ascii = [];
        for (var i = 0; i < template.ascii.length; i++) {
            ascii[i] = template.ascii[i].slice(0);
        }

        // Pad the lines to be equal
        // TODO

        // Insert the epitaph into the template string
        var currentRow = template.startRow;
        var startCol = template.startCol;
        var asciiTemplate = ascii.splice(template.startRow, 1)[0];

        for (var currentLine = 0; currentLine < lines.length; currentLine++) {
            var line = lines[currentLine];
            var endCol = startCol + line.length;

            var newLine = asciiTemplate.substring(0, startCol) + line + asciiTemplate.substring(endCol);
            ascii.splice(currentRow++, 0, newLine);
        }

        return ascii;
    }

    /**
     * @param {string} str
     * @param {int} maxLength - inclusive
     * @returns {string[]}
     */
    function splitStringIntoLines(str, maxLength) {

        // Use any line breaks given by the user
        var lines = str.split('\n');
        var newLines = [];

        // For each line, split into multiple lines if it exceeds the max length
        for (var currentLine = 0; currentLine < lines.length; currentLine++) {
            var line = lines[currentLine];

            if (line.length <= maxLength) {
                newLines.push(line);
            } else {

                var splitLines = line.split(/\s+/);
                for (var s = 0; s < splitLines.length; s++) {
                    newLines.push(splitLines[s]);
                }
            }
        }

        return newLines;
    }

    /**
     * @param {string[]} tombstone
     */
    function draw(tombstone) {

        var width = tombstone[0].length + "ch";
        output.setAttribute("style","width:" + width);
        output.innerText = '';

        for (var l = 0; l < tombstone.length; l++) {
            var line = tombstone[l];

            var p = document.createElement("div");
            p.innerText = line;
            output.appendChild(p);
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
        epitaphInput.focus();

        templateSelect = document.getElementById("template");
        onFormChange();
    });
})();



},{"./templates":1}]},{},[2]);
