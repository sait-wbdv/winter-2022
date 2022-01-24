---
title: Flexbox Page Layout
description: We will be learning the ins and outs of flexbox and how to use it for layout.
date: 2022-01-24T15:00:00.000Z
released: true
---

### Today's Activity: [Navigation Bar](https://gist.github.com/lilyx13/b20b36f46354e74b1efafcfa5c170d1a)

## Review

- links and pathnames
- hierarchy
  - ul and headings
- image width
- syntax padding and spacing bugs

### Gist Notes for Review

- [Flex Nav Bar](https://gist.github.com/lilyx13/f9bd12f1b00627601fbc3a32f4a6bf7b)
- [Semantic Hierarchy](https://gist.github.com/lilyx13/be85b495d534d3482fd7e9b1680e282b)

### HTML and CSS Validators

Use These for your assignments and any code that you want to check.

- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

### Codepens from Wiki Activity

---

## Morning Project Prep Breakout Sessions 20min

- [Instructions](https://gist.github.com/lilyx13/21a63f15c264a0975d37cf2dadd2f01c)
- we will have a group discussion afterwards on assets found. Everyone should be ready to show and discuss their design concepts.

## Topic 1: Introduction to Flexbox

_Create responsive and interesting designs with flexbox_

### Terminology

<dl>
<dt>display</dt>
<dd>This property is used to set the layout of an element and its children. Read more in [this Mdn article](https://developer.mozilla.org/en-US/docs/Web/CSS/display)</dd>
<dt>main-axis</dt>
<dd>This is defined by the `flex-direction`. If your flex-direction is set to row _(this is the default)_, then the main axis is horizontal. If your flex-direction is set to column, then the main axis is vertical. - items are set along this axis by using `justify-content`</dd>
<dt>cross-axis</dt>
<dd>This is the other axis of a flex layout. It changes depending on your flex-direction - Items are positioned along this axis by using `align-items`</dd>
</dl>
### Notes

- [Tony's Flexbox header gist](https://gist.github.com/acidtone/1ff8aabed305f862c10f1ff6b8908a04)
  - Applied example of flexbox basics

---

## Topic 2: Position Elements in Flex Containers

_Arrange a site's content_

### Terminology

<dl>
<dt>flex container</dt>
<dd>: The parent element of flex items. A flex container can also be a flex item. Use properties such as `flex-wrap`, `flex-flow` etc to customize how the items in the container will be positioned and respond to one another.</dd>
<dt>flex item</dt>
<dd>: Children of flex containers. Use properties such as `flex-grow`, `flex-shrink`, `align-self` to customize how flex items look and function</dd>
</dl>

### Notes

- [Ashlyn's Flexbox Codepen](https://codepen.io/ashlyn-knox/pen/qBmzyrG)
  - Ignore the scss nesting for now, but we will be getting into that later in the program

---

## Topic 3: Site Navigation

- Navigation should use a `nav` tag.
- You can have more than one nav
- It is conventional to put an unordered list inside your nav for links, but not essential
- To link to content on the same page, add an `id` tag to the link location and specify it in your link
  - nav link = `<a href="#link-on-page">Link</a>`, then add the id to the element like: `<h2 id="link-on-page">Text</h2>`
- To open the link in a new tab use `target="_blank"` in your link tag
- A `nav` is often found inside a `header` or above a `header`. It depends on the site

<!--

### Topic 3: Simple Signup Forms

_Basics of creating forms_

### Notes

- use `form` tag for using interaction
- `input type="text"` will create a 1 line input field
- `input type="textarea"` will create a text box
- `label for="input-box-id"` for your input fields
- `button type="submit" will create a submit button`

#### Resources

- [Mdn Your first Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
  - For now we don't need to worry about sending form data to a web server.
- [Smashing Magazine article on form usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)
  -->

---

## Lab Time

- Work on [Navigation Bar Activity](https://gist.github.com/lilyx13/b20b36f46354e74b1efafcfa5c170d1a)

- Work on [assignment 1](/cpnt-260/assignments/assignment-1)

---

<home-work :home-work="homework">

## Mobile Design and Font Awesome Icons

- Read [Mdn Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- Read [Mdn Media Queries and Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/rwd_skills)
- Read [FreeCodeCamp Article](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)
  - Background theory
- Watch the first 10 minutes of [Are you writing css the wrong way?](https://youtu.be/0ohtVzCSHqs)
- Read [Font Awesome Icons Basic Use](https://fontawesome.com/v5.15/how-to-use/on-the-web/referencing-icons/basic-use)
- **Read [CSS tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
  - While the mdn docs are important to read, this page has a very comprehensive and attractively formatted layout
  - Everything in purple is about flex **containers**
  - Everything in yellow is about flex **items**

</home-work>
