---
title: Mobile First Design
description: Description here
date: 2022-01-25T15:00:00.000Z
released: false
---

## Tropy of the day: Mobile first webpage with hamburger menu

## Review

- Flexbox Questions
- debugging overflow (if you've had this issue on any of your activities, this will be a good time to go back to it and work on fixing it)
- Apply starter flexbox and styling to [today's codepen](https://codepen.io/ashlyn-knox/pen/ExXRrLY) as a class
- Form follow up: add `fieldset` to forms
- Look at the [`flex`](https://css-tricks.com/almanac/properties/f/flex/) proprty

---

## Overview

1. Plan it out

- Mobile First Design

1. Brute force

- Card Design
- Hamburger menu and icons

1. Walkthrough
2. Optimize/Test

---

## Topic 1: Mobile First Design

_Media Queries and Breakpoints_

### Terminology

breakpoint
: The points where the layout shifts
media-query
: Media queries are used to set major breakpoints. CSS declarations within a media query will only run under the conditions specified in the media query declaration. You can have multiple media-query declarations in a file.

### Notes

- Use this [guide on screen resolutions](https://mediag.com/blog/popular-screen-resolutions-designing-for-all/) to determine sensible breakpoints
- With modern layouts like flexbox and grid, media queries are less important for creating a responsive experience.
- Try to use them sparingly. Check out [this guide from css-tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/) on tips for using mobile queries
- we will be focusing on using media queries in css

#### Media Query Gists

- [Media Query Mobile First](https://gist.github.com/lilyx13/fa4da2064d0173358bf0e7dd8b8dfa5d)
- [Mobile First](https://gist.github.com/acidtone/8b22888818aa6f81653ab0858ad4c418)
- [Desktop First](https://gist.github.com/acidtone/0f9c31e820f29511fc2671063fd71c58)
- [Mobile First and Orientation](https://gist.github.com/acidtone/6aeb476a3c9bbc9788ce1ebc958b98d1)

## Activity: Add media queries to a page

- Use one of your previously made pages or create a new one
- make the navigation and one other thing function differently at a mobile screen size
- the nav menu needs to completely change layout to vertical and not flex when resizing the screen
- Other content to try to change could be:
- how sections are positions around one another (do something that cannot be achieved with `flex-wrap`)

## Topic 2: Flexbox card layouts

_How to make easy and responsive cards_

### Notes

- Check out [Ash's Codepen](https://codepen.io/ashlyn-knox/pen/MWmxxbR) for a simple card layout
- Articles are a great tag for cards
- If you have clickable elements inside your cards, keep in mind how you want your interaction hierarchy to work.
- Does the user click on the whole card? or button inside the card?
- If you use a hover state to indicate that the card can be clicked on a desktop, how will you replace this visual breadcrumb for mobile users?

#### Code

- `@media media-type and (media-feature-rule) { /* styles here */ }`

#### Further Reading

- [Mdn Card Design](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card)
- [Article on card designs](https://thenextweb.com/news/how-cards-are-taking-over-web-design)

---

## Topic 3: Adding Icons to your site

_Hamburger menus and many more_

### Notes

- To access fontawesome icons, include this in the head of your html
- `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">`
- You can also download the icons and store them in your assets
- set icons with `<i>` tag

## Activity: [Add Icons and create a hamburger menu]({{ '/activities/html-css/media-query-breakpoints/' | url }})

- [Ash's Example](https://codepen.io/ashlyn-knox/pen/LYLWPBy)

---

## Walkthrough

- Discuss file naming conventions
- style.css
- index.html
- Discuss Submission content for graded assignments
- Color theme practicing
- Apply a color theme that you like to your design
  - this can happen early or later depending on if you are starting with a clear brand/theme or are starting with quick placeholders
  - take a color scheme that you like:
    - could be from a game
    - movie
    - clothing line
    - band
    - Your house
  - Apply the theme to your design
    - use the dropper tool to find exact hexcodes or hsl() values.

---

## Lab Time

- Explore media queries, font-awesome icons, and flexbox
- Enhance previous designs
- Create a card layout with flexbox

---

## Homework for next day

- Read [Mdn CSS Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
- Play [CSS Grid Garden](https://cssgridgarden.com/)
- Watch [Easy Layouts with CSS Grid](https://www.youtube.com/watch?v=tFKrK4eAiUQ)
- Watch Jen Simmons on [The basics of grid](https://www.youtube.com/watch?v=FEnRpy9Xfes)
- Watch Jen Simmons on [Using Flexbox and CSS Grid together](https://youtu.be/dQHtT47eH0M)

---

## Tool Time (For help with submissions)

- Command line zipping (Windows)
- [CLI 7-zip](https://nodogmablog.bryanhogan.net/2021/08/zipping-files-from-command-line-with-windows-10/)
  - If you want to try zipping files from the command line, it can save a lot of time. You have to add 7zip to git bash
  - the tutorial linked above describes how to do this
- NOTE: 7-zip also has a GUI (graphical user interface) version. Use if this is a preferred method.
- Command line zipping (Mac, Linux)
- Unix systems have the zip command built in. This can be used for most situations.
- Check out instructions in [this tutorial](https://www.ezyzip.com/how-to-zip-files-mac.html)
- Basic Syntax: `zip archive.zip filename`
  - archive.zip can be named anything, depends on what you want your zip folder to be called
  - You can declare multiple files
  - If you want to zip an entire directory, you need to use the recusive flag `-r` - ex: `zip -r archive.zip directory/`
    }
