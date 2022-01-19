---
title: Into to HTML
description: Today we will cover the basic technologies of the web and how they work together. We will also start out with the basics of writing html and css.
date: 2022-01-20T15:00:00.000Z
released: true
homework:
  - title: Basic HTML
    tasks:
      - title: Webpage Structure
        link: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure
      - title: Why, how, and when to use semantic html
        link: https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria
  - title: Web Design
    tasks:
      - title: Modern Layouts  Getting Out of Our Ruts
        link: https://www.youtube.com/watch?v=jreccgYLfx8
        description: In this video, Jen Simmons gives great insights into layout and modern css technologies used to create interesting web designs.
      - title: Mdn Navigation Section
        link: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
        description: docs on how to make a site nav
  - title: Typography
    tasks:
      - title: Font Loading Strategies
        link: https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/
        description: glance through this article for different ideas on loading fonts into a web page
      - title: Google fonts
        link: https://fonts.google.com/
        description: We will be using google fonts for most of our websites
terms:
  - HTML
  - CSS
  - JS
  - DOM
  - Interaction Cost
---

<home-work :home-work="homework"></home-work>

---

### [Activity 1: Wiki Article](https://gist.github.com/lilyx13/7371f05b2deb3862eb4ca54e27c21299)

- Due: Friday Jan 21 @11:59pm
- Weight: 4% of course mark

---

## Topic 1: HTML, CSS, and JavaScript

<terms-list :search-terms="terms"></terms-list>

### Tool Time

[Firefox devtools](https://developer.mozilla.org/en-US/docs/Tools)
: browser based devtools for firefox. Especially good for examining css styling.

### Notes

- A good workflow is to create your content (html) -> Then style it (css) -> Then make it interactive (js)
  - While some initial styling can be helpful, a design can end up really messy if you don't start with unstyled content first
  - This approach also helps write readable css. Naming conventions and container hierarchy can become chaotic when doing both at the same time

---

## Topic 2: Site Layout and Semantic HTML

HTML is the primary language of the web. It can be written manually, or generated dynamically. As a web developer, you will be doing a bit of both depending on your tool set.

Semantic html is html that structures content based on the semantic meaning of the content. This makes code easier to work on, it is also helpful for screen readers and digital web crawlers.

Your html will consist of container elements (`div`, `article`, `section`, `header`, `footer`...) and content elements (paragraphs, images, headers, links...). As we learn how to use these tags, we will be working towards a component oriented approach. This will lay groundwork for using frontend frameworks such as vue, react, or svelte.

For now, the most important thing is to become familiar with how to structure content and to practice creating common ui elements.

### Tool Time

- [Codepen](https://codepen.io)
  - A browser based frontend development environment for publicly creating and sharing design ideas.
- [Lorem Ipsum](https://loremipsum.io/generator/)
  - A generator for placeholder text.
- [Lorem Picsum](https://picsum.photos/)
  - A random image generator for placeholder images.

### Notes

- Container tags
  - use `div` when the only reason for adding a container around content is to style it
  - otherwise choose between `main`, `header`, `footer`, `nav`, `section`, `article`
  - Container guidelines
    - `main`
      - generally only use 1 main tag, this is the primary content of your page, it can contain any of the other tags.
      - you can put the page level `header` inside of it our outside of it
    - `header`
      - you can use this more than once, each section or article can have a header with a heading in it
    - `nav`
      - use this for navigation links
        - either put links directly in a nav, or put links in a list inside of a nav (both are acceptable but using the `ul` with a set of `li` tags is more conventional)
    - `footer`
      - this goes at the bottom of your page, it can be in or out of the `main` tag. Put copyright info in here (there are lots of ways to use a footer but this is the bare minimum)
    - `article`
      - Use an article for content that can stand on it's own.
      - it should have a heading text tag
      - The content in an article such as a blog post should relate to the outer content
      - [docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
    - `section`
      - A general section of a document, should contain a heading text tag
      - An article or main are good examples of container that have a couple section tags
      - While an article can be taken out of it's containing content and still make sense, a section tag wouldn't make sense if taken out of the containing context
      - [docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
    - `div`
      - a generic container tag, use this for when you are just styling content and there is no other reason to put it into a container
- Important HTML content tags
  - `h1-h3` headings
    - most common depth of headings
  - `p` paragraph text
  - `a` links
  - `ul` and `ol` for lists
  - `strong`, `em` bold and italics

### Breakout Activity

- In groups find a couple of websites and explore their code using the devtools
- Look for elements discussed in class
- Identify 1 element that we havent yet discussed
- Questions:
  - How are elements organized?
  - Does the site use semantic html tags?
  - Does this relate to how you visualize web content being organized?
- Be prepared for class discussion after breakouts

---

## Topic 3: Style with CSS

### Terminology

<dl>
  <dt>Selectors</dt>
  <dd>Define elements that css rules are applied to. [Review the 5 types of selectors here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
  <dt>Declarations</dt>
  <dd>These are the rules used to stylize elements. They consist of a property and a value. [More information can be found here](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)</dd>
</dl>

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

### Breakout Activity

- We will breakout into groups of 2 (this will be your pair code team for the afternoon)
- Find a wiki article to recreate
- Use comments to plan html with pseudo code
- After breakout, we will have a brief class discussion on how you approached planning your code

---

## Lab Time

- Work on Wiki Page
- Experiment creating other codepens

