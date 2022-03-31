---
title: Styling SVGs
description: We will style SVGs with CSS on html pages.
date: 2022-03-10T15:00:00.000Z
released: true
homework:
  - title: SVGs from a Code Perspective
    tasks:
      - title: MDN article on SVGs
        link: https://developer.mozilla.org/en-US/docs/Web/SVG
      - title: SVG Basics from a Code Perspective
        link: https://www.freecodecamp.org/news/svg-basics-what-are-scalable-vector-graphics-and-how-do-you-use-them/
      - title: SVG's can do that? (Video 38min)
        link: https://www.youtube.com/watch?v=4laPOtTRteI
        description: Sarah Drasner demonstrates some cool things that you can do with SVGs in web development at a conference.
  - title: SVG viewport and the viewBox
    tasks: 
      - title: What are SVG viewport and viewBox?
        link: https://www.youtube.com/watch?v=TBYJ2V1jAlA
      - title: Scaling SVG Elements
        link: https://wattenberger.com/guide/scaling-svg
  - title: SVG Gists
    tasks: 
      - title: Getting Started
        link: https://gist.github.com/acidtone/ea248e3207b06cfdf861bdec06816fb9
      - title: Three ways to insert an SVG
        link: https://gist.github.com/acidtone/90c99bbd1825f591586d05e5419d711f
      - title: Clipping problems with viewBox
        link: https://gist.github.com/acidtone/1180c12d207234f9a053eedda981ddf9
---

## Housekeeping
- The Obi-Wan trailer looks promising.
- Submit a response to Ash's Slack Poll if you haven't already.

---

## 1. SVG Basics
### Materials
- [What Is an SVG File? SVG Image and Tags Explained](https://www.freecodecamp.org/news/svg-basics-what-are-scalable-vector-graphics-and-how-do-you-use-them/)
- Gist: [Getting Started](https://gist.github.com/acidtone/ea248e3207b06cfdf861bdec06816fb9)

**[Slides: Scalable Vector Graphics](https://sait-wbdv.github.io/slides/w22/cpnt262/svgs.html)**

## 2. Demo: Exporting SVGs
### Materials
- Optimization Tool: [SVG OMG](https://jakearchibald.github.io/svgomg/)
- SVGs
    - [Browser Therapy Logo](https://github.com/sait-wbdv/sample-code/blob/master/assets/images/logos/browser-therapy.svg)
    - [No Bugs icon](https://github.com/sait-wbdv/sample-code/blob/master/assets/images/logos/no-bugs.svg)
    - [Skully Pinball Mascot](https://github.com/sait-wbdv/sample-code/blob/master/assets/images/logos/skully.svg) (not optimized)

### Activity: Optimize Skully
The third "Skully" logo ws exported from Illustrator and is not optimized for web. Use [SVG OMG](https://jakearchibald.github.io/svgomg/) to fix this.

## 3. Inline SVGs in HTML
### Activity: Styling SVGs
- [Add a colour scheme to a pinball diagram](https://gist.github.com/acidtone/118f11cd417a7b20fb4f6976f36767a1) ([Codepen](https://codepen.io/acidtone/pen/QWGERKm))

---

## Lab Time
- Assignments
- Using CSS, create a dark mode version of an inline SVG.
    - Sample SVG: [Browser Therapy Logo](https://github.com/sait-wbdv/sample-code/blob/master/assets/images/logos/browser-therapy.svg)
- Animate an SVG with vanilla CSS
    - [Example Codepen](https://codepen.io/acidtone/pen/YzpWbeN)
- Install an SVG animation library
    - [Greensock](https://greensock.com/)
    - [Animejs](https://animejs.com/)

<home-work :home-work="homework">
</home-work>
