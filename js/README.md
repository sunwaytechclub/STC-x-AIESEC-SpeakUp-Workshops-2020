# JS Workshop ⚙

> Make your painting interactable

Estimated completion time: 1.5 - 2 hours

<br>
<br>

## Table of content <a name="table"></a>

1. [JavaScript in browser](#intro)
2. [Javascript as a programming language](#outside-browser)
3. [A short walkthrough for programming](#programming)
4. [Data types](#datatypes)
5. [Conditional statement](#conditional)
6. [Collection of data](#collection)
7. [Loop](#loop)
8. [Function](#function)
9. [Intro to object](#object)
10. [Project](#project)
11. [Conclusion](#conclusion)

## JavaScript in browser <a name="intro"></a>

> JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme and Self. Netscape, for a time, made the best browser in the world and enjoyed market dominance.

--- [A brief history of JavaScript by Ben Aston](https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17#:~:text=JavaScript%20was%20created%20by%20Brendan,by%20Java%2C%20Scheme%20and%20Self.&text=Netscape%2C%20for%20a%20time%2C%20made,world%20and%20enjoyed%20market%20dominance.)

JavaScript wasn't a general-purpose programming language --- it is a scripting language for browser only.

What it means is essentially it was never meant to go out from the browser, the only purpose was only for you to add a behavior layer on your browser, like getting data from the server periodically

Using JavaScript, you are able to get your HTML element, and manipulate the styling, attributes of the element.

Although there are some alternative to manipulate your element with other languages (like Java Applet, etc), but the only officially marketed language is JavaScript.

Fun fact: JavaScript has nothing to do with Java, other than the name itself is similiar, nothing is 🤣.

## JavaScript as a programming language <a name="outside-browser"></a>

With the introduction of [Node.js](), JavaScript is finally able to run outside of the browser, and emerged to be one of the most popular language nowadays.

> Node.js was written initially by Ryan Dahl in 2009, about thirteen years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web. The initial release supported only Linux and Mac OS X. Its development and maintenance was led by Dahl and later sponsored by Joyent.

--- [Wikipedia](https://en.wikipedia.org/wiki/Node.js#:~:text=Node.js%20was%20written%20initially,and%20later%20sponsored%20by%20Joyent.)

But why? Why do we need JavaScript to be able to run outside of the browser?

Well, because it allows Front-end developer to be able to work on Back-end too, without the language barrier.

And another main reason we have JavaScript outside of the browser is because JavaScript has asynchronous behavior by default. It is an advance topic hence I am not going to cover in this workshop.

With the current state of the art, JavaScript had already became a language that can do everything: from web development, to Artificial Intelligence (thou almost no AI expert is using that to research, but it has some libraries that migrated from Python)

Without further ado, let's start learning JavaScript!

<br>
<br>

## A short walkthrough for programming <a name="programming"></a>

Programming, or rather, Computer Science, it's all about data.

Data can be in any form: Number, word, a paragraph of words, etc.

Programming is about how we can handling the data, generally, we can only perform 4 types of operation to a data, say with an example of a number, for naming convention, we called it `x`:

- Create: create the number, say `let x = 1`
- Read: get the number
- Update: mutate the number, say `x = 2` (notice without the keyword `let`)
- Delete: delete the number, say `delete x`

We called these 4 operatins **CRUD** (Create, Read, Update, Delete).

Do keep that in mind: Programming is all about how you process the data.

\*\* Note: There is no 1 concept to rule them all, this is just an opinion, not a fact, some may argue but for the sake of getting started and learning the big picture, this is good enough. Do have a chat with me if you think it otherwise 😎!

### Example

We all learned mathematic before, programming is a derivative of mathematic, hence you will see a lot of intersection between mathematic and programming

But do you need to be super good at math to learn programming? Nope.

Let's take an example:

```text
Nick just bought 5 apples, he gave 1 to his friend.
Few days later, he realized all his apples were rotten, so he threw it away.
When his friend ask how many apples he left, Nick answered 0.
```

Pretty straightforward, from the example above we can see all the 4 types of operation (CRUD):

- Nick just bought 5 apples: **Create**
- Nick gave 1 apple to his friend: **Update**
- All the apples were rotten so he threw it away: **Delete**
- His friend ask how many apples he left: **Read**

If we put it in a fancy way, write it in JavaScript:

```javascript
// create
let apples = 5;

// update
apples = apples - 1;

// delete
apples = undefined;

// read, print it out in our inspect tool
console.log(apples);
```

If you couldn't understand, just keep 1 thing in mind: **Programming is about how you can process the data.**

it's better to hands-on and let you see the output of the above code right?

In this session, we will be using JavaScript only in the browser.

In order for us to have JavaScript in the browser, we can write out code in the holy `<script>` tag!

```html
<html>
    <head>
        <title>My first website with JavaScript!</title>
    </head>
    <body>
        <script>
            // create
            let apples = 5;

            // update
            apples = apples - 1;

            // read, print it out in our inspect tool
            console.log(apples);

            // delete
            apples = undefined;

            // read, print it out in our inspect tool
            console.log(apples);
        </script>
    <body>
</html>
```

Open up your inspect tool:

![programming-1](/js/assets/programming-1.jpg)

We can see that we have `4` and `undefined` printed on the `console` tab!

Don't worry if you don't understand it yet, we will explain further later.

<br>
<br>

## Data types <a name="datatypes"></a>

Let's recall this sentence again:

> Programming is all about how you process the data.

-- by me 🤣

Look around yourself, you are living in a world with full of data (not matrix haha).

My laptop battery level is a data, my bottle's water level is also a data.

There are a lot of different type of data, be it a number (water level like litres, etc), a word (your name), etc.

In JavaScript specifically, we have:

1. String - a series of words like "Rain Chai".
2. Number - Integer or decimal number like 1, 1.1, 2.2
3. Boolean - it can only be `true` or `false`, useful for cases like `let isLoggedIn = true;`
4. Undefined - it's a state for a variable, it stands for "this variable is not defined, does not have any data.", you can think of it like void, it's empty. You will only use this in a more advance case, don't worry if you can't understand it now.

You may refer to [w3schools JavaScript documentation](https://www.w3schools.com/js/js_datatypes.asp) for more information.

#### Variable

It's better to name our data, in our last example, we called it `apples`, it can be any other names that you think is most suited for your cases.

We called these names `variable`, it's just like `x`, `y` in mathematic, nothing fancy, I can call it `IamNotX` or `IamNotY`, doesn't matters.

For us to assign a data into a variable we can use the keywords `let`:

```javascript
let apples = 5;
```

Notice the syntax is:

\<keywords\> \<variable name\> = \<data\> ;

This is used for the creation of the variable the **Create** part of the CRUD operations.

There are some names you can't use for variable, because the browser reserved some names (or keywords) for the browser to understand what operation you want to do.

In our case, `let` is a keyword, it tells browser that whenever you see this keyword, it means I am creating a new variable.

We can't do something like:

```javascript
let let = 1;
```

but we can do:

```javascript
let letThisBecomeVariable = "Yay";
```

Do note that you **cannot** have spaces in between for your variables, below are a few examples that is **invalid** for naming the variable:

1. Spaces

   `let this is the apple = 5;`

2. Number as the first character

   `let 5apples = 5;`

3. Symbols other than `_` and `$` as the first character

   `let @thisIsVariable = 5;`

[Here are a list of keywords in JavaScript](https://www.w3schools.com/js/js_reserved.asp), if you have some free time, do take a look into each of them.

#### Operators

Just like in math, we can have `+`, `-`, `×`, and `÷`, we have it in programming as well:

- `+` is `+` in JavaScript
- `-` is `-` in JavaScript
- `*` is `×` in JavaScript
- `/` is `÷` in JavaScript

`=` in JavaScript stands for assignment, not the equal in mathematic, `let x = 1;` in this case is assigning `1` into `x`

We had wrote an example of Update in CRUD in our last example:

```javascript
apples = apples - 1;
```

In programming, we always have \<variable\> = \<value\>, so whatever on the right side will always get assign into the left side variable.

A more detail breakdown is as below:

1. Current state of `apples` is 5
2. Right side: `apples - 1` is like saying `5 - 1`, hence it is 4 on the right side
3. Left side: `apples`, so the value (4) on the right side will get assign into variable `apples` again
4. Now, `apples` become 4

There are few more operators in JavaScript:

- `**` is exponentiation in JavaScript, like `2**3` will return you `8` ( 2 to the power of 3 )
- `++` a shorthand for increment, like `apples++` will have the same effect as `apples = apples + 1`
- `--` a shorthand for decrement, like `apples--` will have the same effect as `apples = apples - 1`

Using all the shorthand, we can achieve the same effect with lesser code:

```html
<html>
    <head>
        <title>My first website with JavaScript!</title>
    </head>
    <body>
        <script>
            // create
            let apples = 5;

            // update, decrement 1
            apples --;

            // read, print it out in our inspect tool
            console.log(apples);
        </script>
    <body>
</html>
```

Do feel free to play around with other operators! [Here is a list of operators](https://www.w3schools.com/js/js_operators.asp)

<br>
<br>

## Conditional statement <a name="conditional"></a>

Say we set up a scenario:

```text
Nick has 5 apples, he wanted to give one of them to his friend,
but his friend can choose to accept it or not, if he accepted,
then Nick's apples amount will decrease 1,
else, Nick's apples amount remain the same.
```

We can implement the above logic by using another keywords: `if-else`

```javascript
let apples = 5;
let friendAccept = true;

if (friendAccept == true) {
  apples--;
} else {
  // do nothing
}
console.log(apples);
```

Output:

`4`

Now let's try to let the friend refuse to accept the apple:

```javascript
let apples = 5;
let friendAccept = false;

if (friendAccept == true) {
  apples--;
} else {
  // do nothing
}
console.log(apples);
```

Output:

`5`

### Breakdown

1. We have a variable called `friendAccept`, which is a boolean variable ( can only stored true or false).

   `if` statement's syntax is as follow

   `if(<condition>) { <operation> }`

   if whatever inside the bracket, the (\<condition\>) is true, then execute whatever operation is in the curly braces.

2. We then write out a `if` statement that, if `friendAccept` is equal to `true`, then execute the operation.

   the `==` is a logical operator, different with `=`, `==` stands for **equal**, `=` is assignment.

   There are a few other logical operators, like:

   - `!=` is **not equal**: `apples != 1` will return true, because apples is **not equal** to 1, but is equal to 5
   - `&&` is **and**: `apples == 5 && friendAccept` this is saying "if apples is equal to 5 and friendAccept is true, then return true"
   - `||` is **or**: `apples == 5 || friendAccept` this is saying "if apples is equal to 5 or friendAccept is equal to true, then return true"

   you may check it out [here](https://www.w3schools.com/js/js_comparisons.asp) for more kinds of operators

   If you don't understand the use cases yet, don't be worried, we will be using those a lot in the future and you will get yourself be more familiar with it.

3. The `friendAccept` is `true`, hence the if block is executed, it output `4`

4. We then change the `friendAccept` into `false`, we refresh the page again and in this case it output `5`, because `friendAccept` is **not equal** to `true`.

I do strongly suggest you to head on [w3schools exercises](https://www.w3schools.com/js/js_if_else.asp) to practice a few times on how to use this `if-else` statement, as it's one of the building blocks for all kind of programs.

<br>
<br>

## Collection of data <a name="collection"></a>

A collection of data is basically, well, a collection of data 🤣

We have a fancy term for it thou, it's called `data structure`, how the **structure** of the group of data you have looks like.

It is used to group data together in certain ways, so that we can access it easily in future.

```javascript
let NickFriends = ["Rain Chai", "Frankey", "Marcus"];
```

In the example above, we have a variable called `NickFriends` that is used to store all his friends' name.

There are few types of data structures:

- Array, `let NickFriends = ["Rain Chai","Frankey","Marcus"];`, it's just like list, essentailly storing the data in a sequential way, we can access them using number, like if I want "the first item in the list", we can access it like `NickFriends[0]`, the `[0]` here stands for **First item in the array**

  In computer science, everything started from 0, not 1.

- Object:

```javascript
let Nick = {
  firstName: "Nick Hong",
  lastName: "Ding",
  age: 21,
  eyeColor: "dark brown",
};
```

This itself worth to be a topic, which I will be covering it later on.

So... what can we do with data structure? well, data structure itself can't do anything, recall what we had always stated earlier?

> Programming is all about how you process the data.

Grouping data together allow us to process data in a more easier way.

## Loop <a name="loop"></a>

Let's take a scenario:

```text
Nick has 5 apples, he wanted to give it to all his friends,
but his friends can choose to accept it or not, if he accepted,
then Nick's apples amount will decrease 1,
else, Nick's apples amount remain the same.
```

It's almost the same from the `if-else` example, but we added a "For all of his friends" statement.

1. Let's setup the first logic, **create** a variable called `apples` and set it to 5.

   ```javascript
   let apples = 5;
   ```

2. Create a list of Nick's friends

   ```javascript
   let NickFriends = ["Rain Chai", "Frankey", "Marcus"];
   ```

   We will be using String to indicate it for now, later on we might want to use `object` instead.

3. Complete code

   ```javascript
   let apples = 5;
   let NickFriends = ["Rain Chai", "Frankey", "Marcus"];
   let friendAccept = true;
   ```

Now we had done the setup, is time for us to think out the solution! We can have these few ways to solve "For each of his friends, give 1 apple":

1. Manually type it out

   ```javascript
   // if friend accepted and NickFriends[0] does exists
   if (friendAccept == true && NickFriends[0]) {
     apples--;
   }
   if (friendAccept == true && NickFriends[1]) {
     apples--;
   }
   if (friendAccept == true && NickFriends[2]) {
     apples--;
   }
   ```

   This approach seems doable, and it will have the expected behavior.

   But what if Nick has like 100 friends? We will have to copy paste them out one by one everytime.

   In this case, it's better to tell the JavaScript that "Hey this is a list, can you help me to loop through them with this logic?"

2. Smarter, use a for loop

### For loop

In that example, using a for loop is a perfect case:

```javascript
for (let index = 0; index < NickFriends.length; index++) {
  if (friendAccept) {
    apples--;
  }
}
```

Using the code above, we are able to scale the list infinitely, either it be 100 or even 1000, the logic **for each** item in the list will be the same.

#### For loop Breakdown

- syntax of a for loop

  ```javascript
  for (\<Counter variable name\>; \<Conditional statement\>; \<counter manipulation\>){
    \<logic\>
  }
  ```

  In the browser execution:

  1. The browser sees a `for` keyword, hence he knows it's a for loop
  2. The browser first assign a variable as the counter at the start of the loop, you named it, in our case, it's `index`
  3. The browser check if the **Conditional statement** return `true`, in our case, we check if `index is smaller than the length of the nick friends list`

     - `<` means smaller
     - `>` means larger
     - `<=` means smaller or equal
     - `>=` means larger or equal

  4. If the **Conditional statement** is `true`, the browser execute the **logic**

     if it is `false`, the browser simply stop looping anymore.

  5. After executing the logic, the browser will execute the last part of the for loop, the browser will manipulate the counter variable ( the `index` ), be it increment or decrement. You can specify whatever execution you want to do/

  In a nut shell:

  if **Conditional statement** is `true`, execute the logic, else stop looping. If it is `true`, then execute the counter manipulation.
