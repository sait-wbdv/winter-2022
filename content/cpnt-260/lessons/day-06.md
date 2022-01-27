---
title: CSS Grid
description: We will start using css grid for layouts. Today we will also follow up with using background-images
date: 2022-01-27T15:00:00.000Z
released: true
homework:
  - title: CSS Grid
    tasks:
      - title: CSS Grid Guide
        link: https://css-tricks.com/snippets/css/complete-guide-grid/
      - title: CSS Grid 9 Biggest Mistakes (Video)
        link: https://www.youtube.com/watch?v=0Gr1XSyxZy0
      - title: Flexbox and Grid Together
        link: https://www.youtube.com/watch?v=dQHtT47eH0M
      - title: CSS Grid Tutorial (Video 30min*)
        link: https://www.youtube.com/watch?v=rg7Fvvl3taU
      - title: Grid Garden (Game)
        link: https://cssgridgarden.com/
  - title: Forms
    tasks:
      - title: MDN Forms Info
        link: https://developer.mozilla.org/en-US/docs/Learn/Forms
      - title: Tips for Writing Great Forms
        link: https://css-tricks.com/tips-for-creating-great-web-forms/
---

## Lab [Activity: 404 Error Page](https://gist.github.com/lilyx13/a66987daff43634eabd1903d33c3a9dd)

- Due: Friday January 28 @ 11:59PM
- Goals:
  - Apply a background image
  - Experiment with layout
    - positioning over a background image
    - using grid and or flexbox to make interesting layouts
  - Build a 404 error page that you can use in future assignments (if it doesn't match the website)

## CSS Grid: Introduction

- CSS Grid Provides a diverse set of options to organize content into responsive grid layouts
- You can nest grids within one another
- CSS Grid is like flexbox and can be used with flexbox
  - Use CSS Grid to organize containers that have content in them
    - Then use Flexbox to position elements inside of their containers

### Usage Notes

- use `display: grid` to create grid
- `grid-template-columns` is one of the most used declarations for grid
- `fr` units are used to set grid items to a declared fraction of available space
- `minmax()` is used to declare a minimum and maximum size of grid item
- [repeat syntax](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>)
  - `auto-fit`, `auto-fill` are particularly useful for flexible layouts
  - Often using a rigidly sized parent element can be useful for setting the grid row's max width
- [Tony's grid starter code gist](https://gist.github.com/acidtone/d946ea7147e60568d7f8262b5e7be449)
- [Complex Grid Design](https://codepen.io/ashlyn-knox/pen/eYWbdZV)

### Resources for getting a grid layout off the ground

- [Build a Classic Layout Fast in CSS Grid](https://youtu.be/KOvGeFUHAC0) by Mirian Suzanne
- [Easy Layouts with CSS Grid](https://youtu.be/tFKrK4eAiUQ)
- [Read Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid by example layout sample code](https://gridbyexample.com/patterns/)

### Breakout Session

- [Experiment Using CSS Grid](https://gist.github.com/lilyx13/fefe332cb4a0a4dc9fc0c20daccb3d3d)

---

## Background Images

- Important Syntax:
  - `background-image: url("");` is used to assign a background image to an element in css
  - `background-position: ;` is used to set where the position is aligned
    - [Review options here](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
  - `background-size: ;` handles how the image will fit in it's available space. It handles the aspect ratio
    - [review this documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
  - `background` is a shorthand css property to declare the above properties in 1 statement

---

## Lab Time

- Work on [Activity: 404 Error Page](https://gist.github.com/lilyx13/a66987daff43634eabd1903d33c3a9dd)
- Work on [Assignment 2](/cpnt-260/assignments/assignment-2)
- Continue Experimenting with CSS Grid

<home-work :home-work="homework"></home-work>
