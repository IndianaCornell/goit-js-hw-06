## Task 1

In HTML, there is a list of categories, `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Write a script that:

- Counts and logs to the console the number of categories in `ul#categories` (`li.item` elements).
- For each `li.item`, logs the `<h2>` text and the number of nested `<li>`.

**Expected output in console:**
```
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

---

## Task 2

In HTML:

```html
<ul id="ingredients"></ul>
```

In JavaScript:

```js
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```

Write a script that:

- Creates a `<li>` for each item using `document.createElement()`.
- Adds text content and class `item`.
- Inserts all items into `ul#ingredients` in one operation.

---

## Task 3

In HTML:

```html
<ul class="gallery"></ul>
```

In JavaScript:

```js
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```

Write a script that:

- Uses template strings and `insertAdjacentHTML()` to insert `<li><img></li>` elements.
- Inserts all items in one operation.
- Adds basic gallery styling using Flexbox or Grid.

---

## Task 4

In HTML:

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

Write a script that:

- Creates a `counterValue` variable initialized to 0.
- Adds click listeners to buttons to increment/decrement the value.
- Updates the interface with the current value.

---

## Task 5

In HTML:

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

Write a script that:

- Substitutes the current input value into `#name-output` on `input` event.
- Displays `"Anonymous"` if the input is empty.

---

## Task 6

In HTML:

```html
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

In CSS:

```css
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

Write a script that:

- Checks the number of characters on `blur` event.
- Adds class `valid` if the number is correct, or `invalid` if not.

---

## Task 7

In HTML:

```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

Write a script that:

- Updates `font-size` of `#text` inline when the range slider changes value.

---

## Task 8

In HTML:

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

Write a script that:

- Prevents page reload on submit.
- Validates all fields are filled. If not, shows alert.
- Collects form data into an object and logs it.
- Resets the form using `reset()`.

---

## Task 9

In HTML:

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

In JavaScript:

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

Write a script that:

- Changes `body` background color to random color on button click.
- Updates `<span class="color">` with the new color value.

---

## Task 10 (optional)

In HTML:

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

In JavaScript:

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

Write two functions:

- `createBoxes(amount)` — creates `amount` `<div>` elements of increasing size (+10px each) with random background colors.
- `destroyBoxes()` — removes all created boxes from `#boxes`.

```js
// Box 1: 30x30px
// Box 2: 40x40px
// ...
```
