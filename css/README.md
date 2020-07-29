# CSS Workshop 🎨

> Make your website cooler

Estimated completion time: 1.5 - 2 hours

<br>
<br>

## Table of content <a name="table"></a>

1. [What is Cascading Style Sheet?](#what)

   1.1 [Big Picture](#bigpicture)

2. [Writing our first css](#firstcss)
3. [CSS Selectors](#selectors)
4. [Properties](#properties)
5. [Different way that you can inject css](#ways)
6. [Class and ID](#classid)
7. [CSS Selectors deeper dive](#selectors2)
8. [Properties deeper dive](#properties2)
9. [Project](#project)
10. [Conclusion](#conclusion)

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
<h1
  style="font-family:sans-serif;
color:red;"
>
  Hello World!
</h1>
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

---

And.... congrats! This is our first small module of the day!

[Click here to navigate back to table of content](#table)

<br>
<br>

## Big picture <a name="bigpicture"></a>

Essentially, css is only about 2 things:

**Selectors** { **Properties** }

- Selectors are the way to let the browser know that this only applies to certain HTML Elements.

- Properties are the properties that you want to override.

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
      h1 {
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

So just like any normal HTML tag, the `<style>` tag is a tag that let you define you styling. It tells the browser that, whenever you see this tag, whatever inside as the content is a cascading stylesheet!

There are more kind of CSS Selectors out there, but we will introduce it to you later.

## Properties <a name="properties"><a>

By default, the browser will have all the properties set by themselves, if you would like to override it, you may add it in the `{}`

In the last example, you shown you how you can override the `color` and `font-family` properites of the `<h1>` tags

Again, you may refer to [w3schools css section](https://www.w3schools.com/css/default.asp) to know other kind of properties you can override.

<br>
<br>

## Different way that you can inject css <a name="ways"></a>

There are in total 3 ways you can inject your css:

1. Inline styling
2. Embedded styling
3. External styling

We will explain them one by one.

### Inline styling

This has the highest precedence, which means whenever there is a conflict, browser will choose whatever inside as the highest order.

Let's recall an example we made just now:

```html
<h1
  style="font-family:sans-serif;
color:red;"
>
  Hello World!
</h1>
```

Output:

![firstcss-3](/css/assets/firstcss-3.jpg)

This is essentially an inline styling, we inject the `style` directly into the HTML element itself.

### Embedded styling

Let's also recall the `<style>` tag we wrote just now:

```html
<html>
  <head>
    <title>My first html website with css</title>
    <style>
      h1 {
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

This is essentially the embedded styling, we put all the `style` that was supposed to be inside the HTML element, into the `<head>` tag.

So I mentioned whenever there is a conflict, browser will always take the inline styling as the highest precendence, embedded styling come after.

Let's actually make out a conflict:

```html
<html>
  <head>
    <title>My first html website with css</title>
    <style>
      h1 {
        font-family: sans-serif;
        color: red;
      }
    </style>
  </head>
  <body>
    <h1 style="color:blue;">Hello world!</h1>
    <h1>This is my first website with css!</h1>
    <h1>CSS enable you to do fancy stuff</h1>
    <h1>And it is the only way you can style your HTML document</h1>
  </body>
</html>
```

output:

![ways-1](/css/assets/ways-1.jpg)

As we can see from the output, the `Hello world!` follow this inline styling instead of embedded styling ( the `<style>` tag)

### External styling

When we develop the website further and further, it's actually a best practice to separate them into different files, for better project management.

Imagine you have a 200 hundreds lines of CSS code, together with another 300 hundreds lines of HTML code... It's a disaster.

External styling is essentially just migrate all your CSS code into another `.css` file.

We can do this by:

1. Create a new file, called `style.css` at your `index.html`'s folder ( Can be any name, by convention it's `style.css` )

   ![ways-2](/css/assets/ways-2.jpg)

2. Cut in the css code we have in the `<style>` into the file ( remember to delete the `<style>` tag in `index.html` )

   ![ways-3](/css/assets/ways-3.jpg)

3. Now if we reload the code, we won't see any styling applied, that's because we haven't import the file. In order for us to import, we can use the `<link>` tag, you can refer to [here](https://www.w3schools.com/tags/tag_link.asp#:~:text=The%20tag%20defines%20the,element%2C%20it%20contains%20attributes%20only.) for more information about `<link>` tag.

Complete code:

#### HTML (index.html)

```html
<html>
  <head>
    <title>My first html website with css</title>
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <h1 style="color: blue;">Hello world!</h1>
    <h1>This is my first website with css!</h1>
    <h1>CSS enable you to do fancy stuff</h1>
    <h1>And it is the only way you can style your HTML document</h1>
  </body>
</html>
```

#### CSS (style.css)

```css
h1 {
  font-family: sans-serif;
  color: red;
}
```

output:

![ways-1](/css/assets/ways-1.jpg)

Now we had learned ways to manage our css!

<br>
<br>

## Class and ID <a name="classid"></a>

Let's think of a scenario where we need to have certain groups of `<h1>` tags to be **red** colors, certain groups to be **blue** and by default it's **green** color.

We can have a direct solution like: Using **inline styling** for the red, blue `<h1>` tags, and using **embedded styling** to style default `<h1>` tags, because inline styling has higher precendence, so browser will override the css written in inline styling way instead of the embedded styling.

Is that a good solution? Sounds bad.

In this case, we can utilize the another HTML elements' attributes: **class** and **id**

It's pretty straight forward:

- Class: think of it like grouping up bunch of elements
- ID: it's an unique id attached to the element, we use this when we want to have only that one single element to have different styling

Let's write out the code!

In this example we will remove all the previous css stuffs we had written, to start over again

```html
<html>
  <head>
    <title>My first html website with css</title>
  </head>

  <body>
    <h1 id="blue">Hello world!</h1>
    <h1 class="red">This is my first website with css!</h1>
    <h1 class="red">CSS enable you to do fancy stuff</h1>
    <h1>And it is the only way you can style your HTML document</h1>
  </body>
</html>
```

In the above code, we can see that I had added the `id` attribute and `class` attribute, let's continue with the css, we are going to use **embedded styling** for the sake of easiness.

```html
<html>
  <head>
    <title>My first html website with css</title>
    <style>
      #blue {
        color: blue;
      }
      .red {
        color: red;
      }
      h1 {
        color: green;
      }
    </style>
  </head>

  <body>
    <h1 id="blue">Hello world!</h1>
    <h1 class="red">This is my first website with css!</h1>
    <h1 class="red">CSS enable you to do fancy stuff</h1>
    <h1>And it is the only way you can style your HTML document</h1>
  </body>
</html>
```

Here come the CSS Selectors:

- Class selectors: `.red`
- ID selectors: `#blue`

By adding `.` and `#`, we tell browser that find all the the elements with the class attribute of "red", and style it

- `.<class name>` is for finding all the elements with the class name
- `#<id name>` is for finding all the elements with the id name.
- `<html element name>` is for finding all the element that you specified.

It's consider a best practice to always use class and id instead of default styling, as class and id can be reused.

```html
<html>
  <head>
    <title>My first html website with css</title>
    <style>
      #blue {
        color: blue;
      }
      .red {
        color: red;
      }
      h1 {
        color: green;
      }
    </style>
  </head>

  <body>
    <h1 id="blue">Hello world!</h1>
    <h1 class="red">This is my first website with css!</h1>
    <h1 class="red">CSS enable you to do fancy stuff</h1>
    <h1>And it is the only way you can style your HTML document</h1>

    <p class="red">I am a paragraph tag but I am using the class red styling</p>
  </body>
</html>
```

Output:

![classid-1](/css/assets/classid-1.jpg)

There are tonnes of fancy selectors out there that you can use, to check'em out [here](https://www.w3schools.com/cssref/css_selectors.asp) 😎!

<br>
<br>

### Properties deeper dive <a name="properties2"></a>

So we had been using some pretty boring styling, just colors and font is not going to make you a good-looking website.

Generally, we have 4 kinds of css properties:

1. Typography
2. Color
3. Layout
4. Effect

We had been using `color` and `typography` properties just now, let's explore other as well!

#### Layout

This is a **BIG** topic.

Most of the web developers stuck mostly at this point.

I believe I cannot cover everything in this single workshop, so I am going to introduce you only 2 things (1 on the recording as it will be too lengthy to write it here):

1. Box Model
2. Flex (Covered in the recording)

##### Box model

![properties2-1](/css/assets/properties2-1.png)

All of the element will have this box model.

Let's open up our inspect tool in browser and highlight on one of any of the element:

![properties2-2](/css/assets/properties2-2.jpg)

You can see that there are orange area between your `<h1>` tags, theses are called `margin`.

So essentially think of all of your html element as houses.

- Margin: the distance between your house and my house
- Padding: the distance between your house and your fences, still counted as your area.
- Border: Your fences
- Content: Your actual house

Let's start and adjusting these properties to see the changes!

```html
<html>
  <head>
    <title>My first html website with css</title>
    <style>
      #blue {
        color: blue;
        margin-bottom: 100px;
      }
      .red {
        color: red;
        padding-left: 100px;
      }
      h1 {
        color: green;
        border: 1px solid black;
      }
    </style>
  </head>

  <body>
    <h1 id="blue">Hello world!</h1>
    <h1 class="red">This is my first website with css!</h1>
    <h1 class="red">CSS enable you to do fancy stuff</h1>
    <h1>And it is the only way you can style your HTML document</h1>

    <p class="red">I am a paragraph tag but I am using the class red styling</p>
  </body>
</html>
```

Output:

![properties2-3](/css/assets/properties2-3.jpg)

\*\* Don't worry if you box is different length than I, it's because of the browser screen size.

Now we can see that we had added `margin` and `padding` to the elements, you may explore more about those two properties if you will.

##### Flex

I am not going to write it out in this documentation as it will be too lengthy.

But if you would like to explore, I do suggest you to read out these few resources, probably only take you about 30 - 45 minutes:

1. [CSS Complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
2. [My favourite YouTube Channel's Flexbox in 100 seconds](https://www.youtube.com/watch?v=K74l26pE4YA) - More to an introduction
3. [Flexbox tutorial by Academind](https://www.youtube.com/watch?v=siKKg8Y_tQY) (Around 35 minutes) - Complete guide

<br>
<br>

## Project <a name="project"></a>

Finally! You had came this far!
Let's try to create this project, we gonna reuse the project we did in the last session too, to build your own portfolio webpage

you may download it [here](/html/project/index.html), but it's best to reuse your own one.

Output:

![project](/css/assets/project.jpg)

Complete code:

[HTML](/css/project/index.html)

[CSS](/css/project/style.css)

That's it 🥳

<br>
<br>

## Conclusion <a name="conclusion"></a>

There is no way to be a CSS Master within 1 workshop, even experienced developer needs weeks and months of practice to get to understand how CSS works.

There are already a lot of online resources, especially YouTube, no joke but most of the question that you have, probably there is already someone who already uploaded a tutorial, lecture on YouTube.

That's how I personally learned too 👀, to be a developer, learning how to curate resources and how to Google ( Not everyone really knows how to query their results... ) is a crucially imporant skillset.

But with that being said, do ask any question to us if you have any!

If not, see you on the next workshop!
