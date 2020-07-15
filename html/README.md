# HTML Workshop 🏚
> The backbone of a website

## Table of content <a name="table"></a>

1. [Getting started](#getting-started)
2. [Tags](#tags)

<br>
<br>

## Getting started <a name="getting-started"></a>

When it comes to the internet, nothing is more basic than Hypertext Markup Language — known informally by almost everyone on the web as HTML.

Think of the whole Web development as building a house 🏚,

To build a 🏚, we need:

- A (or more) brick(s) 🧱!

![brick](/html/assets/brick.jpg)

- Paint 🖌!

![Paint](/html/assets/paint.jpg)

- Door, switches, etc

![Door](/html/assets/door.jpg) 🚪

Each of them corresponding to:

- Hyper text markup language (HTML)
  - The structure of the website
- Cascading Style Sheet (CSS)
  - The look and feel of the website
- Javascript (JS) - To open the door
  - The behaviours of the website (when you click the button, do actions)

We are focusing on building the structure of the house (The website), which will be the HTML.

Just a quick peak into how HTML looks like:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

In the example above, you can see that there are multiple `< >` with text in it, these are called **tags**

<br>
<br>

## Tags

Tags are like the lego block for html, generally, you can think of tags like the punctuation in english, we have ", !, ?, etc. But we only have `< >` in html as the only "punctuation".

### Exercise🎽

It's better to action than speaking, why not we start our first hands-on of the workshop?

Are you ready 💃? Grab a coffee if you want!

#### General step break down

1. Create a file called `index.html` in your desktop (or any place!)
2. Open your Visual Studio Code and open the html file.
3. Type `<h1> I am a heading! </h1>`
4. Save it
5. Go to your file explorer / Finder and double click the file
6. Tadaaaa

[Click here to skip the detailed step breakdown and go to look at the concept behind](#tags-concept)

#### Detailed step breakdown

1. Create a file called `index.html` in your desktop (or any place!)

    1.1 Create a txt file
    ![1](/html/assets/tags-1.0.PNG)

    1.2 Name it to `index.html`
    ![2](/html/assets/tags-1.1.PNG)

    1.3 You should see the icon of it became your favourite browser icon
    ![3](/html/assets/tags-1.2.PNG)

2. Open your Visual Studio Code and open the html file.

    2.1 Open your Visual Studio Code
    ![1](/html/assets/tags-2.1.jpg)

    2.2 Click on `file` and choose `Open File...`
    ![2](/html/assets/tags-2.2.jpg)

    2.3 Navigate to the `index.html` file you had just created and click `open`

    2.4 You should now see it open the empty `index.html` file
    ![3](/html/assets/tags-2.3.jpg)

3. Type `<h1> I am a heading! </h1>`
  ![1](/html/assets/tags-3.1.jpg)

4. Save it

    4.1 Press `ctrl` + `s` to save, or go to `File` > `Save`

    *Hint: If you see a white dot beside the file name on the tab, it means it is not saved.

5. Go to your file explorer / Finder and double click the file
  ![1](/html/assets/tags-5.1.jpg)
  Ta daaaa
  ![2](/html/assets/tags-5.2.jpg)

### Concepts Behind <a name="tags-concept"></a>

Let's recall the example code we had before:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

Now, we have all these `<>` stuffs there, the primarily reason why we have it is to specify the opening and closing of the content for the browser to know, for example:

<br>

browser: `<h1>`? Oh he means what comes after is the heading text! I should render it as a heading text!

browser: *Render `This is a Heading` as heading text*

browser: `</h1>`? Oh he means this is the end of the content, I should stop render the following stuffs as heading text.

Now, let's break this down further

- `<!DOCTYPE html>` - To let the browser know this is a html file
- `<html></html>` - To let the browser know whatever content in this tag are html elements
- `<head></head>` - Browser will take elements inside as as [metadata](https://www.w3schools.com/tags/tag_head.asp#:~:text=The%20element%20is%20a,scripts%2C%20and%20other%20meta%20information.), don't worry about this yet, we will see this in later.
- `<body></body>` - Browser will render elements in this tag into the screen (Which is what you see in the exercise just now)
- `<title></title>` - Browser will use this as the title of the website, which will shown at your browser tab.
- `<h1></h1>` - Browser will take content in this tag as heading text, do be aware there are other sizes too like `<h2>`,`<h3>`,`<h4>`,`<h5>`.
- `<p></p>` - Browser will take content in this tag as paragraph text.

There are a tons of html tags out there, you can see it [here](https://www.w3schools.com/TAGS/default.ASP)

But do you need to remember all like how we remember all like the periodic table?

You don't need to! Just take some of the [most commonly used html tags](https://www.geeksforgeeks.org/most-commonly-used-tags-in-html/) in mind, when you need it, just Google it and find it out!

[See, I am not the only one who tell you don't remember everything of it](https://www.quora.com/Do-I-have-to-memorize-all-the-codes-of-HTML-and-CSS-to-become-a-web-developer#:~:text=A%20Big%20no.,syntax%2C%20layout%2C%20and%20styling.)

### Summary

Tags are just like our double quotation mark, you tell the browser where it starts, where it ends, and what is the content.

### Challenge

Try to copy this code, replace with what you have in your `index.html` with Visual Studio Code, save it and reload on your browser!

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

Remember, you can always ask us at [Facebook](https://www.facebook.com/sunwaytechclub) or even open an issue [here](https://github.com/sunwaytechclub/STC-x-AIESEC-SpeakUp-Workshops-2020/issues), I will respond to you as fast as possible!

----
And.... congrats! You had just completed one module!

> “The first step is the most important. It is the most crucial and the most effective as it will initiate the direction you have chosen.”

― Steve Backley, The Champion in all of Us: 12 Rules for Success

If you feel you need to take a short break☕, do so! But do remember to come back within 5 minutes!

[Click here to navigate back to table of content](#table)