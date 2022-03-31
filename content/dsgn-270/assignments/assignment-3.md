---
title: DSGN 270  Assignment 3 - SVG Logo Design
description: Create a logo using an svg. Optimize it and deploy it to a web page
---

- Due: Wednesday March 16
- Weight: 20%

## Scenario

You have been hired to create an svg logo for a client's website. The client wants the logo to be able to be able to have both monochrome and coloured versions. You have complete creative control over the design.

## Instructions

For your proof of concept, you must supply 2 versions of your design. They must be optimized using [svgomg](https://jakearchibald.github.io/svgomg/).

- Version Options:
  - Position of text in relation to image
  - Monochrome and coloured
  - Design Variations

You must also supply an html page that shows your logo variations in use.

- One version must be added directly onto the html page
  - The SVG elements need to be styled using css
- The second version must be added using an `img` tag

---

## Marking Criteria

This assignment will be marked out of 20 points, which will be given for each of the following:

### Logo Design: 5 points

- No extraneous paths
- Makes use of boolean groups
- Is an identifiable logo
    - A guideline for design: a logo with at least 3 closed paths

### Design Variations: 5 points

- SVG code quality
- Uses one of the variations specified in the instructions
    - Variations should be distinct and non-trivial

### SVG in HTML: 5 points

- CSS is used to style paths
- Colour styled using css
- Use at least 1 other css property to enhance your design on a web page
- Logos should be responsive
    - All logos should be entirely visible when the page loads without the need to scroll.

### Documentation: 5 points
- README file that includes:
  - Description of your design concept **important**
- Journal Entry describing your process/journey completing the assignment
  - Comments, observations
  - Problems encountered
  - Screencaps of progress, inspiration and mood boards

## General
Points will be deducted for:
- not following file and directory conventions
    - CSS in a dedicated `/assets/css` directory
    - Images (including svg) in a dedicated `/assets/images` directory
    - Javascript in a dedicated `/assets/js` directory
- General code quality
- Logos that are similar to the ones provided in class

---

## Submission Instructions

In order to receive a grade:

1. Submit your assignment as a repo named `dsgn270-a3`, with:
   - The text of your assignment saved in a `README.md` file in the root of your project;
   - Your name, course title and assignment title at the top of the page;
2. Zip your assignment and submit it to Brightspace.
3. As a comment to your submission, include:
   - a link to your GitHub repo;
   - a link to the live GH Pages site;
