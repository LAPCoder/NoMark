// NoMark transpiler
/* Syntax:
 * HTML:
 *
 * <!DOCTYPE html>
 * <html lang="en">
 *  <head>
 *   <meta charset="UTF-8">
 *   <title>Title</title>
 *   <script>
 *     var a = 1;
 *     console.log(a);
 *   </script>
 *  </head>
 *  <body>
 *   <script src="scripts.js"></script>
 *   <h1 id="1" class="2" name="3">Hello World</h1>
 *   <h2>Hello World</h2>
 *   <p>This is a paragraph</p>
 *   Outside text.
 *  </body>
 *  <!--
 *   comment
 *  -->
 *  <!-- no monoline comment -->
 * </html>
 *
 * NoMark (the indent is important like Python)
 * $ is script tag, & is style tag,
 * # is heading tag (md), . is class tag,
 * % is id tag, @ is name tag,
 * § is text tag (no markup or tag):
 *
 * !DOCTYPE html
 * html(lang=<|en|>)
 *   head
 *     meta(charset=<|UTF-8|>)
 *     title(<|Title|>)
 *     $<|
 *       var a = 1;
 *       console.log(a);
 *    |>
 *   body
 *    $(src=<|scripts.js|>)
 *    #%1.2@3 Hello World
 *    ## Hello World
 *    p
 *      §This is a paragraph
 *    §Outside text.
 *   -{comment
 *   comment}+
 *   --< monoline comment
 */
// Language: typescript
var input = document.getElementById('input');
var output = document.getElementById('result');
var button = document.getElementById('button');
var lines;
var tabSize;
// Event listeners
button.addEventListener('click', function () {
    lines = input.value.split('\n');
    tabSize = detectTabSize(lines);
    output.innerHTML = '';
    for (var i = 0; i < lines.length;) {
        var line = lines[i];
        console.log(line);
        var in_comment = false;
        var words = line.split(' ');
        for (var j = 0; j < words.length; j++) {
            var word = words[j];
            console.log(word);
        }
    }
});
// Functions
function detectTabSize(linesAll) {
    //! IMPORTANT: COPILOT IS BAD
    for (var i = 0; i < linesAll.length; i++) {
        if (linesAll[i][0].includes('\t')) {
            var j = 0;
            while (linesAll[i][j] === '\t')
                j++;
            console.info(j + " tab" + (j > 1 ? "s" : "") + " by indentation detected in your code.");
            return "\t".repeat(j);
        }
        else if (linesAll[i][0].includes(' ')) {
            var j = 0;
            while (linesAll[i][j] === ' ')
                j++;
            console.info(j + " space" + (j > 1 ? "s" : "") + " by indentation detected in your code.");
            return ' '.repeat(j);
        }
    }
    throw new Error("Could not detect tab size.\nAre you sure you have a tab in your code?");
}
