# CSS Workshop 🎨
> Make your website cooler

Estimated completion time: 1.5 - 2 hours

<br>
<br>

## Table of content <a name="table"></a>

1. [What is Cascading Style Sheet?](#what)
2. [Writing our first css](#firstcss)
3. [CSS Selectors](#selectors)
4. [Different way that you can inject css](#ways)
5. [Properties](#properties)
6. [Category of CSS properties](#category)
7. [Project](#project)
8. [Conclusion](#conclusion)

## What is Cascading Style Sheet (CSS) 🤔<a name="what"></a>

It's is basically a document that specify, how to style (e.g., fonts, colors, spacing...) the HTML tags in custom way.

## Writing our first css 💪 <a name="firstcss"></a>

Let's open Visual Studio Code, create a file called "index.html" with the following Document Object Model:

![firstcss-1](/css/assets/firstcss-1.png)

Complete code:

```html
<html>
    <head>
        <title>My first html website with css</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

Output:

![firstcss-2](/css/assets/firstcss-2.jpg)

If you had fogotten how to write html, don't worry 😎, you can always refer back to our [HTML Workshop](/html)

Now the probably not everyone loves a Serif font, how about we change it to another font family?

Remember the [Attributes](/html#attributes) for HTML Tag? There is an attribute called `style`!

> HTML attributes provide additional information about HTML elements

Let's add a `style` attribute to our `<h1>` tag, with the property of `font-family`:

```html
<h1 style="font-family:sans-serif;">Hello World!</h1>
```

We can be a bit more fancy! Let's change it to red color as well!

```html
<h1 style="font-family:sans-serif;
color:red;">Hello World!</h1>
```

Output:

![firstcss-3](/css/assets/firstcss-3.jpg)

We made it! 🥳

### Concepts Behind style attribute

Let's break down what we did just now:

1. We added a style attribute to the `<h1>` tag we have
2. We changed 2 properties:

    - [font-family](https://www.w3schools.com/cssref/#cssproperties:~:text=font%2Dfamily%09Specifies%20the%20font%20family%20for%20text) - Specifies the font family for text
    - [color](https://www.w3schools.com/cssref/#cssproperties:~:text=color%09Sets%20the%20color%20of%20text) - Sets the color of text

3. Refresh the page

When we specify the `style` attribute for the HTML tag, the browser will notice it and uses whatever properties you mentioned inside as the way to render it.

The browser will use the default styling for any property that you did not specify, you can find out more about what properties you can override [here](https://www.w3schools.com/cssref/)!

----
And.... congrats! This is our first small module of the day!

[Click here to navigate back to table of content](#table)

<br>
<br>

## CSS Selectors <a name="selectors"></a>

Let's duplicate a few `<h1>` tag to populate the website:

Document Object Model:

![/css/assets/selectors-1.png](/css/assets/selectors-1.png)

Complete code:

```html
<html>
    <head>
        <title>My first html website with css</title>
    </head>
    <body>
        <h1>Hello world!</h1>
        <h1>This is my first website with css!</h1>
        <h1>CSS enable you to do fancy stuff</h1>
        <h1>And it is the only way you can style your HTML document</h1>
    </body>
</html>
```

Output:

![firstcss-4](/css/assets/firstcss-4.jpg)

So right now, if I want to style all the `<h1>` tag above, the way we did just now is to add a `style` attribute to the tag directly, but wouldn't that be tedious if we have like 20 `<h1>` tags in our HTML document, and we style it one by one?

Remember...programmers are lazy and we hate repeatitive code 😡.

Let me introduce a better way... Let's use the `<style>` tag!

- `<style>` - The tag is used to define style information (CSS) for a document. Inside the `<style>` tag you specify how HTML tags should render in a browser.

Document Object Model:

![/css/assets/selectors-2.png](/css/assets/selectors-2.png)

Complete code:

```html
<html>
    <head>
        <title>My first html website with css</title>
        <style>
            h1{
                font-family: sans-serif;
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Hello world!</h1>
        <h1>This is my first website with css!</h1>
        <h1>CSS enable you to do fancy stuff</h1>
        <h1>And it is the only way you can style your HTML document</h1>
    </body>
</html>
```

Output:

![selectors-3](/css/assets/selectors-3.jpg)

### Concepts Behind style tag

Let's break down what we did just now:

1. We added a `<style>` tag at the `<head>` tag, do you still recall the functionality of a `<head>` tag?

    - `<head>` - The tag is a container for metadata (data about data), Metadata is data about the HTML document. Metadata is not displayed. Metadata typically define the document title, character set, styles, scripts, and other meta information.
    - `<style>` - The tag is used to define style information (CSS) for a document.

2. We use `h1 {}` to style the `<h1>` tag

    - This is the syntax behind a CSS Selector, in order for us to let the browser now that we want to apply custom `font-family` and `color` values, we have to tell the browser which HTML tag we are targeting. We will talk about different kind of selectors later.
    - The format is: `<YOUR SELECTOR>` `{ <property>: <value> ; }`
    - The `;` here specify the end of the value.

3. Refresh the page
