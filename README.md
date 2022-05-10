# NoMark

A programming language to replage HTML, XML, SVG, PHP...

The syntax is simple and easy to learn.
If you know Markdown and HTML, XML, SVG or PHP, you use NoMark without learning anything new.

**FOR THE MOMENT, THE LANGUAGE DOES NOT WORK.**

## Syntax

NoMark supports functions and loops.

### NoMark

Importants points:

* The indent is important like Python;
* `$` is the script tag;
* `&` is style tag *and* attribute;
* `#` is heading tag (like in Markdown); the title must be separated by a space, but the class, id and name mustn't be separated;
* `.` is class attribute;
* `%` is id attribute;
* `@` is name attribute;
* Other attributes are beetween `(` and `)`;
* `§` is text tag (no markup or tag); the text must be separated by a space;
* `<|` and `|>` are the start and end of a string;

> File: text.html.nmk

```nomark
!DOCTYPE html
html(lang=<|en|>)

    -{comment
    comment}+
    --< monoline comment

    head
        meta(charset=<|UTF-8|>)
        title(<|Title|>)
        $<|
            var a = 1;
            console.log(a);
        |>
    body
        $(src=<|scripts.js|>)
        #%1.2@3 Hello World
        ## Hello World
        p
            § This is a paragraph
        § Outside text.

        --< Function declaration
        [myFunction(myParam)]{
            --< Function body
            div
                -{ 
                The parameters is beetween '|' and '|'.
                When you want to use a parameter,
                you must add '{' and '}' before and after
                where the parameter is used.
                If the parameter is given, the inside of
                the braces and the parameter will be displayed.
                Otherwise, the inner braces will be removed.
                }+

                {### Hello World |myParam|}
                p
                    § {|myParam|}
        }

        --< A test of our function:
        [myFunction](myParam=<|test|>)

        --< OK, now we can use our function in a loop:

        --< Loop declaration: the loop will be executed 4 times:
        (4){
            --< Loop body
            [myFunction](myParam=/0/)
            -{                   ^~~
                This number is the index of the loop.
            }+
        }

```

### HTML

Result in HTML (I delete some comments):

> File: text.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <!-- 
   comment 
    -->
    <!-- no monoline comment -->
        <meta charset="UTF-8">
        <title>Title</title>
        <script>
            var a = 1;
            console.log(a);
        </script>
    </head>
    <body>
        <script src="scripts.js"></script>
        <h1 id="1" class="2" name="3">Hello World</h1>
        <h2>Hello World</h2>
        <p>This is a paragraph</p>
        Outside text.

        <div>
            <h3>Hello World test</h3>
            <p>test</p>
        </div>

        <div>
            <h3>Hello World 1</h3>
            <p>1</p>
        </div>
        <div>
            <h3>Hello World 2</h3>
            <p>2</p>
        </div>
        <div>
            <h3>Hello World 3</h3>
            <p>3</p>
        </div>
        <div>
            <h3>Hello World 4</h3>
            <p>4</p>
        </div>
    </body>
</html>
```
