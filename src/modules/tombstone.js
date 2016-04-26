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
import _ from 'lodash';
import templates from '../templates';

/**
 * @param {string} str
 * @param {int} maxLength - inclusive
 * @returns {string[]}
 */
export function splitStringIntoLines(str, maxLength) {

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

export function makeTombstone(templateKey, epitaph) {
  const template = _.get(templates, templateKey);

  if (!epitaph.trim()) {
    return template.ascii;
  }

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
