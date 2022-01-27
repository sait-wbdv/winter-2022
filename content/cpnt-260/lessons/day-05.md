---
title: Web Design Patterns
description: We will be working with flexbox and breakpoints to make mobile first layouts.
date: 2022-01-26T15:00:00.000Z
released: true
---

## [Assignment 2: Product/Services/Info Page](/cpnt-260/assignments/assignment-1)

- Due Sunday January 30 @ 11:59PM

---

## Review of Breakpoints

- When you set media query breakpoints, you need to set your default styles to either **mobile** or **desktop** first.
  - At the bottom of your code, set your media queries to handle the non-default layout.

### Mobile First CSS

- Conceptualize as building content outwards
  - key strategies:
    - anything that you want hidden on a phone set `display: none;` on anything that shouldn't be visible on a phone
    - set up the css for your hamburger menu
    - make sure content is visible and feels natural
- In your breakpoint, set content that was hidden on mobile to be visible
- Use this in your declaration

```
@media screen and (min-width: 400px) {
  .class-name {
    display: block
  }
}
```

### Desktop First CSS

- Visualize as using media queries to cut down your content to make it's essential content feel complete
- Use media queries to hide content
- Use media queries to change items that are wider horizontal than vertical to look good on mobile
  - note that this can often be achieved by flexbox and css grid
- Switch to a hamburger layout

### Breakout Session

- Add mobile breakpoints to one of your previous codepens
- Or create a new layout

---

## How to make a mobile navigation

- Mobile Navigations Use breakpoints to switch between layouts.
- There are a few different approaches to do this that all have their merits.
- [Instructions](https://gist.github.com/lilyx13/f730c3466dcd9aa11d0d1b8f7d261f49)

### Here are a couple Examples

- [Check out Kevin Powel on Hamburger Menus](https://www.youtube.com/watch?v=b3OKONiAA80) - note that this one uses JS
- [Pure CSS Dropdown Menu](https://codepen.io/mutedblues/pen/MmPNPG)
- [Basic Slide out Navigation](https://codepen.io/lilyx/pen/LYLWPBy). Also uses a minor amount of JS
  - bugged for practice fixing and tweaking styles
- A quick google search will reveal how many different approaches there really are [Youtube Search Result](https://www.youtube.com/results?search_query=css+hamburger+menu)

---

## Use CSS to Style Images

- foreground images use `<img src="" alt="" />` in the html
  - [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
  - [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) is used to set how an image will fill it's space
- background images use `background-image: url("");` in the css declarations
  - [Mdn documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
  - [CSS Tricks Article](https://css-tricks.com/perfect-full-page-background-image/)

---

## Lab Time

- [Hamburger Menu](https://gist.github.com/lilyx13/f730c3466dcd9aa11d0d1b8f7d261f49)

  - **(recommendation)** Work on this for practice adding extra functionality to your page. This is a second step after the css breakpoint activity.

- [CSS Breakpoint Activity](https://gist.github.com/lilyx13/cd2bdd1e81b790dc5188f7d040cda111)

  - **(recommendation)** Take some time to work on this if today's content needs a bit more practice

- [Image activity](https://gist.github.com/lilyx13/7cf695121df71107c5e9003835b33e94)

  - **(recommendation)** Work on this for practice to enhance the visual content of your web pages

- [Work on Assignment 2](/cpnt-260/assignments/assignment-2)

  - **(recommendation)** Go straight to this if you are feeling comfortable with today's content
