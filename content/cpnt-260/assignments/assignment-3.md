---
title: CPNT-260 Assignment 3
description: Create a gallery page. You can have a gallery that focuses on a topic of your choice. you can use flexbox or grid. You page must also include social media icons in the footer or header
weight: 15%
due: 2022-02-03T23:59:00.000Z
---

## Details

Create an image gallery. Potential topics are: portfolio gallery, travel images, products, hairstyles, animals. Content should be something that you have fun with, grades will focus on code quality and responsiveness of your layout. You must also include social media icons (font-awesome, material.io, or line-awesome) in either your header or footer (they don't need to connect to anything).

## Marking Rubric

This assignment is worth 15 points.

### Site UI **2pts**

- Header
- Indicates current page with an h1
- Footer
  - Copyright information (Copyright symbol, name, year)
- Navigation
  _there should be 3-5 links in your nav_
  - uses nav tag
  - links set to href="#"
  - link title ideas:
    - contact
    - support
  - links to your previous assignment pages
    - if the stylesheet is very different from your assignment 2, include your a1 stylesheet and only link it to the about page.
  - **for this assignment, the navigation must be responsive**
- you can reuse UI from past assignments but will need to change links so that they work.

### Page Content **5pts**

#### Responsive Gallery

- Single column on mobile, 3+ columns on desktop
- gallery can be done in flex or grid
- Gallery should be centered in it's container
- **No** media queries
- 6 to 12 gallery items

#### Gallery figures (use figures for gallery items)

- Semantic images using figure and figcaption
  - figcaption should include title or image description and photo credit
  - fig-caption should have a `min-width` to preserve line length
- images should use `img` tag and have proper `alt` text
  - note, if you use any functional images (such as links), then the alt text should describe the function and not the picture
- Preserve image aspect ratio

### General Requirements **5pts**

- Include a README markdown file in your project that includes the following information:
  - Course Title
  - Author name
  - Links to:
    - Github Repo
    - Github Pages Site
  - Reflection
    - Note 1 technical issue you had while creating this
      - How did you approach solving it
  - Attributions for code or assets that are not your own

#### Code quality and design requirements

- Page uses proper semantic elements
- Code indentation is 2 spaces per indent
- Follow best practices/logical file naming conventions
- paragraph text line lenght is <= 75ch
- no horizontal scroll and overflow on page

### Flare **3pts**

- Style that goes beyond basic responsive requirements
- examples:
  - set a colour scheme
  - create a layout with more than 1 column of content
  - `hover` css classes added to denote interaction with site elements
- **Please add a note to what line in your css or html your instructor can see the code for your flare.**

---

## Submission Requirements

- Push this assignment to a repo named cpnt260-a3.
- ZIP all files required for the site to operate and upload to Brightspace.
- Leave a link to the following as a comment in your Brightspace submission (this is duplicated in your readme but comes in handy sometimes):
- GH repo
- GH Pages site
