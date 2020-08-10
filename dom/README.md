# DOM Workshop ⚙

> Accessing your document object model

Estimated completion time: 1.5 - 2 hours

<br>
<br>

## Table of content <a name="table"></a>

1. [Document object model revision](#intro)
2. [Accessing document object model with JavaScript](#dom-access)
3. [CRUD Operation with Document Object Model](#crud)
4. [Project](#project)
5. [Conclusion](#conclusion)

[> Redirect to final project](/project)

[> Go to top](/dom)

<!-- Cover onclick, button, apples -->

## Document Object Model revision <a name="intro"></a>

Let's recall again what a Document Object Model looks like:

![dom](/dom/assets/dom.png)

It's just like a family tree structure, nothing fancy!

And let's recall what an object data type is in JavaScript:

![object](/dom/assets/object.png)

Code:

```javascript
let Nick = {
    apples : 5,
    name: "Ding Nick Hong",
    friends: ["Rain","Frankey"]
}
```

Document object model is the structure of the whole document (the HTML file), we can access it using JavaScript.

But the question is... why would we want to access to the Document Object Model?

Well, because when we started develop our website / web app, we will need to dynamically update the data in those elements too, like:

Make a button that on clicked, show an alert popup.

In that case, we don't have this behavior enabled any of the HTML tags, so we will need to use JavaScript.

we can do this by simply add the JavaScript in the button:

```javascript
<button onclick="alert('i am an alert');">click me<button>
```

<br>
<br>

## Accessing document object model with JavaScript <a name="dom-access"></a>

Accessing the document object model is simple:

```javascript
console.log(document);
```

`document` is a global variable that created by browser, which means I do not need to define `let document = something`, because the browser had already did that for me. We can see the output should be similar like this:

![access-1](/dom/assets/access-1.jpg)

We can even select the `body` tag! Because `document` is an object, remember how we can get the value of any object? The syntax is `<object>.<key>`

```javascript
console.log(document.body);
```

Now you should see something like this

![access-2](/dom/assets/access-2.jpg)

Congrats! You had just access to the document object model!

There are few ways we can select an element specifically, because we definitely do not want to write `document.body.div.p.span`...

Fret not! There are few **functions** we can use to select an element, just like the **CSS Selectors**!

### Ways to access to the elements

1. `document.getElementById()` - getting the element by the ID of the element

    1.1 Example

```html
<h1 id="coolH1"></h1>
```

```javascript
document.getElementById("coolH1")
```

2. `document.getElementByClassName()` - getting the element by the class of the element, note this will select the first that match not all the elements with the class name

```html
<h1 class="coolH1"></h1>
```

```javascript
document.getElementByClassName("coolH1")
```

3. `document.getElementByTagName()` - getting the element by the tag name

```html
<h1></h1>
```

```javascript
document.getElementByTagName("h1")
```

4. `document.querySelector()` - getting the element by putting in **CSS Selectors**

```html
<h1 class="coolH1"></h1>
```

```javascript
document.querySelector("h1.coolH1")
```

They are all similar to our **CSS Selectors**, so if you are not familiar with CSS Selectors, do take a read!

In this workshop however, we will only be using `querySelector` for convenient's sake, in the real life application, you might want to choose appropiate function, like the performance of using `getElementById` can be twice as fast as `querySelector` [https://gomakethings.com/javascript-selector-performance/] (https://gomakethings.com/javascript-selector-performance/)

<br>
<br>

## CRUD Operation with Document Object Model (aka Document Object Model Manipulation) <a name="crud"></a>

Do you still remember this famous quote?

> Programming is all about how you process the data.

-- by me 🤣

It's the same for Document Object Model as well! We can read / get the element ( `document.querySelector`, etc ), update the element, create new element or delete an element. It's CRUD operation.

CRUD Stands for:

- Create (C)
- Read (R)
- Update (U)
- Delete (D)
I am going to show you how we can use JavaScript to do this.

Before that, this will be the HTML code will be using later:

```html
<html>

<head>
    <title>dom dom dom</title>
    <style>
        .red {
            color: red;
        }

        #blue {
            color: blue;
        }
    </style>
</head>

<body>
    <div>
        <p>I am default paragraph</p>
        <p class="red">I am red 1</p>
        <p class="red">I am red 2</p>
        <p id="blue">I am blue</p>
    </div>

    <body>

</html>
```

### Read / Get the HTML Element

We can use other functions like `document.getElementById`, but for this workshop I will be only using `document.querySelector`

Let's try to get the blue paragraph and read the text of the paragraph:

```javascript
let blue_paragraph = document.querySelector("#blue");
console.log(blue_paragraph.innerText);
```

`document.querySelector` will return the HTML Element **object**, in this **object**, there are a lot of keys / properties we can access, such as:

- the_element.innerText = the text of the element
- the_element.style = the style of the element, return a style object
- the_element.parentNode = the parent of this element in the document object model

You can read through all other [here](https://www.w3schools.com/jsref/dom_obj_all.asp)

### Update the HTML ELement

Now, we already have the `blue_paragraph` HTML Element ready, we can try to update the text of the element like this:

```javascript
blue_paragraph.innerText = "I am a new blue paragraph text!";
```

You can even update the style of the element!

```javascript
blue_paragraph.style.color = "#3399ff"; // lighter blue
```

Most of the keys / properties you had seen [here](https://www.w3schools.com/jsref/dom_obj_all.asp) can be updated, that's the power of `document`!

### Create new HTML Element

Let's try to add more red paragraph! We can utilize the `document.createElement` function to create new HTML Element.

```javascript
let body = document.body;
for (let i = 0 ; i < 3; i ++){
    let new_red_paragraph = document.createElement('p');
    new_red_paragraph.className = 'red';

    body.appendChild(new_red_paragraph);
}
```

You can, of course create other kind of element too! Like `img`, any!

### Delete HTML Element

To delete, we can utilize `the_element.remove()` function, let's try to delete all the red paragraphs

```javascript
let red_paragraphs = document.querySelectorAll('.red');

for (let i = 0; i < red_paragraphs.length; i++){
    red_paragraphs[i].remove();
}
```

Very easily, you can delete everything!

<br>
<br>

## Project <a name="project"></a>

Is time to practice and solidify our knowledge!

This is what we will be building:

3 buttons that will create new paragraph, update all paragraphs' text, and delete all paragraphs

Complete code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dom dom dom</title>
</head>

<body>

    <button onclick="create();">create</button>
    <button onclick="updateAll();">update</button>
    <button onclick="deleteAll();">delete</button>


    <div id="content"></div>

    <script>
        let content = document.querySelector('#content');
        function create() {
            let new_paragraph = document.createElement('p');
            new_paragraph.innerText = "OwO";
            content.appendChild(new_paragraph);
        }

        function updateAll() {
            let paragraphs = document.querySelectorAll('p');

            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].innerText = "I am new paragraph!";
            }
        }

        function deleteAll() {
            let paragraphs = document.querySelectorAll('p');

            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].remove();
            }
        }

    </script>
</body>

</html>
```

<br>
<br>

## Conclusion <a name="conclusion"></a>

> With great power comes great responsibility

--- by the coolest spider's uncle

There are a lot more of what we can manipulate for the document object model, do feel free to explore by yourself!

[> Redirect to Final project Workshop](/project)

[> Go to top](/dom)
