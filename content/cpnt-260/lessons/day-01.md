---
title: Into to HTML
<<<<<<< HEAD
description: Description here
date: 2022-01-20T15:00:00.000Z
=======
description: Today we will cover the basic technologies of the web and how they work together. We will also start out with the basics of writing html and css.
date: 2022-01-19T15:00:00.000Z
>>>>>>> 303196a (added all old lessons directly from fall 2021)
released: false
homework:
---

## Trophy of the day: A wiki page

- Create an html wiki page on a topic of your choice.
- Examples:
  - A current interest
  - A group or organization
  - A concept or theory
  - A game or sport
- [Wiki pages in the wild](https://aelieve.com/rankings/websites/category/reference/best-wiki-sites/)

## Assignment: FreeCodeCamp HTML and CSS

- **Due: September 19 11:59pm**
- [Assignment Link]({{ '/assignments/cpnt260/freecodecamp-assignment/' | url }})
- Complete:
  - Responsive Web Design: Basic HTML and HTML5 (28 questions)
  - Responsive Web Design: Basic CSS (44 questions)
  - [FreeCodeCamp Course Link](https://www.freecodecamp.org/learn/responsive-web-design/)

---

## Overview

1. Plan it out

- Overview of HTML, CSS, JavaScript
- Exploring web page code
- Questions

2. Brute force

- Site Layout and Semantic HTML
  - Style using CSS
  - continued from 270 Day 4

3. Walkthrough

- Code review
  - add comments
  - check for errors

4. Optimize/Test
   - Improve code

---

## Topic 1: HTML, CSS, and JavaScript

### Key Terms

HTML (HyperText Markup Language)
: The standard language for documents that will be displayed on the web. It uses tags to structure and describe types of information. **The content**
CSS (Cascading Style Sheets)
: A stylesheet language that is used to design how web content will be displayed. It includes colour, layout, fonts etc. Separates the design rules from the content for maintainable code. **How content looks**
JS (JavaScript)
: A multi-paradigm scripting/programming language that enables websites with advanced interactive features. Originally a frontend browser focused language, it has now been extended to be a backend language. **content interactivity**
DOM (Document Object Model)
: A programming interface for web documents. It creates a representation of a web page that can be manipulated by scripting languages (such as javascript or php).

### Tool Time

[Firefox devtools](https://developer.mozilla.org/en-US/docs/Tools)
: browser based devtools for firefox. Especially good for examining css styling.

### Notes

- A good workflow is to create your content (html) -> Then style it (css) -> Then make it interactive (js)
  - While some initial styling can be helpful, a design can end up really messy if you don't start with unstyled content first
  - This approach also helps write readable css. Naming conventions and container hierarchy can become chaotic when doing both at the same time

---

## Topic 2: Site Layout and Semantic HTML

-Creating the content of the web

### Terminology

Body
: The part of the HTML document where your content goes
Elements
: The building block of html content. Each element is defined by an opening and closing tag.
Head
: The metadata of a document including links to stylesheets and javascript
Nesting
: The parent - child relationship between elements. Placing content elements such as images and text inside containing elements such as articles and sections.
Tags
: These describe how to format content as elements.
Semantic HTML
: Semantic HTML is markup that describes meaning as well as presentation.

### Tool Time

[Codepen](https://codepen.io)
: A browser based frontend development environment for publicly creating and sharing design ideas.
[Lorem Ipsum](https://loremipsum.io/generator/)
: A generator for placeholder text.
[Lorem Picsum](https://picsum.photos/)
: A random image generator for placeholder images.

### Notes

- Important HTML content tags
  - `h1-h3` headings
    - most common depth of headings
  - `p` paragraph text
  - `a` links
  - `strong`, `em` bold and italics (do not use `b` for bold)
  - `ul` and `ol` for lists

---

### Activity 1: [Create a wiki page: Part 1]({{ '/activities/html-css/wiki-page/' | url }})

---

## Topic 3: Style with CSS

_Stylizing the web_

### Terminology

Selectors
: Define elements that css rules are applied to. [Review the 5 types of selectors here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
Declarations
: These are the rules used to stylize elements. They consist of a property and a value. [More information can be found here](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

### Notes

- A lot of bugs are causes by style inheritence, when your layouts/designs are breaking, walk through where each element is getting it's styling from
- setting classes is a good default strategy.
  - Tend towards using `id` for overriding styles, form fields, and javascript manipulation.
  - be careful when styling elements directly. Depending on how many pages are using a given css file, this can lead to unpredictable results
- Use whitespace and clear naming conventions that will make sense in the future.
  -When you're doing your walkthrough, it can be a good practice to consider "Is this the best name for this label?"
  - consider if you were to look at it in 2 months, would it still make sense, take note on inconsistencies in your labeling methodology and perfect a consistent system in your optimize state
- Use comments to section off your code
  - also, if you have very long css files, it can be worthwhile to throw a small overview with line numbers at the top for quick editing later.
    - use multiline comment titles like this to give yourself some buffer room for line number changes from edits.
    - This example would give you 5 lines of wiggle room where nothing else is going on. so if you search for the line number noted in your overview and it's changed by a couple lines because of other edits and not updating, it won't be as much of a hassle
      `/*********/ /* title */ /*********/`

#### Selectors

- Elements are the html tags themselves, this is the easiest level to override
- Classes are added to html elements to give style, these styles override element defaults and custom settings
- Ids are more specific than classes, an id will override a class
- Anything with the `!important` tag will override all previous stylings. Try to avoid using this

### Activity 2: [Stylize your wiki page: Part 2]({{ '/activities/html-css/wiki-page/' | url}})

---

## Walkthrough

- Code review
- Bug Hunting
- Discussion
- Comment and plan code changes

---

## Optimize

_End of Day Activity_

- Implement changes noted in comments
- Do any extra challenges
- Validate Code
- Deploy and Submit

---

## Prep for next class

- Read [Mdn article on page structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- Read [Why, How, and When to Use Semantic HTML and ARIA](https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/)
- Watch [Modern Layouts: Getting Out of Our Ruts](https://www.youtube.com/watch?v=jreccgYLfx8)
  - This video gets into some higher level theory and history about web dev and site design. We will be covering some of the syntax she addresses midway through CPNT 260.
- Read [MDN article on color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

---
