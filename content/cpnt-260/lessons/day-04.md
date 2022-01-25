---
title: Mobile First Design
description: Optimize a website for mobile and desktop
date: 2022-01-25T15:00:00.000Z
released: true
---

## Review

- Design Asset Review
  - Everyone will get a chance to briefly discuss some of the color and typography groupings that they put together.
    - Particularly address approaches to make your assets easy to use later
- Flexbox Questions
- debugging overflow (if you've had this issue on any of your activities, this will be a good time to go back to it and work on fixing it)
- Look at the [`flex`](https://css-tricks.com/almanac/properties/f/flex/) proprty

---

## VSCode Web Dev Workflow

- Optimize your workflow with good settings and plugins
  - live server plugin
  - prettier
  - format on save
- Practice deploying sites to github pages

### Codepen to Optimize and deploy on GH Pages

<iframe height="300" style="width: 100%;" scrolling="no" title="Star wars nav and cards" src="https://codepen.io/lilyx/embed/podzVLY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lilyx/pen/podzVLY">
  Star wars nav and cards</a> by lilyx (<a href="https://codepen.io/lilyx">@lilyx</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Topic 1: Flexbox card layouts

- We will follow up with the cards made in this codepen

### Notes

- Check out [Ash's Codepen](https://codepen.io/ashlyn-knox/pen/MWmxxbR) for a simple card layout
- Articles are a great tag for cards
- If you have clickable elements inside your cards, keep in mind how you want your interaction hierarchy to work.
- Does the user click on the whole card? or button inside the card?
- If you use a hover state to indicate that the card can be clicked on a desktop, how will you replace this visual breadcrumb for mobile users?

#### Further Reading

- [Mdn Card Design](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card)
- [Article on card designs](https://thenextweb.com/news/how-cards-are-taking-over-web-design)

---

## Topic 2: Adding Icons to your site

_Hamburger menus and many more_

### Notes

- To access fontawesome icons, include this in the head of your html
- `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">`
- You can also download the icons and store them in your assets
- set icons with `<i>` tag

- [Ash's Example](https://codepen.io/ashlyn-knox/pen/LYLWPBy)
  - this example is very raw and suitable for optimization. One way to practice would be to fork this pen and try optimizing it (adding smoother animations, better colors, spacing etc). Pull it apart and see what makes it work.

---

## Topic 3: Mobile First Design

_Media Queries and Breakpoints_

### Terminology

<dl>
<dt>breakpoint</dt>
<dd>The points where the layout shifts</dd>
<dt>media-query</dt>
<dd>Media queries are used to set major breakpoints. CSS declarations within a media query will only run under the conditions specified in the media query declaration. You can have multiple media-query declarations in a file.</dd>

### Notes

- Use this [guide on screen resolutions](https://mediag.com/blog/popular-screen-resolutions-designing-for-all/) to determine sensible breakpoints
- With modern layouts like flexbox and grid, media queries are less important for creating a responsive experience.
- Try to use them sparingly. Check out [this guide from css-tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/) on tips for using mobile queries
- we will be focusing on using media queries in css
- `@media media-type and (media-feature-rule) { /* styles here */ }`

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

---

## Lab Time

- [Card Activity](https://gist.github.com/lilyx13/eeee0b490f00e1cef8caf1f43598856e)
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
