---
title: Galleries, Flex + Grid
description: This lesson will bring together everything that we have been working on with flexbox and grid.
date: 2022-01-31T15:00:00.000Z
released: true
homework:
  - title: Gallery Resources
    tasks:
      - title: Adaptive Photo Layout
        link: https://css-tricks.com/adaptive-photo-layout-with-flexbox/
      - title: Seamless Responsive Photo Grid
        link: https://css-tricks.com/seamless-responsive-photo-grid/
  - title: Flex and Grid
    tasks:
      - title: Jen Simmons Labs
        link: https://labs.jensimmons.com/
      - title: Common Issues with Flex and Grid
        link: https://www.youtube.com/watch?v=s3wHkfMz8oE
      - title: Easy Gallery with CSS Grid
        link: https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/
---

## Morning Updates

- The last 3 days have been reorganized to prep everyone for the final 2 assignments
- Bring questions from your code journals to class over the last 3 days.
  - This is not necessary. But if you've got outstanding questions, morning review is a great time to discuss them

---

### [Assignment 3](/cpnt-260/assignments/assignment-3/)

- Due Thursday February 3rd @ 11:59PM
- Objective: Build an Image Gallery Page
  - Gallery items should use `figure` tag and `figcaption`
  - Add social media icons and static reaction icons to your page

---

### Form Building Pair Coding Debrief

1. Go around the room and commeont on something that impacted you while pair coding. (Everyone Discuss)
   - for example:
     - Did this effect your perspective on how to code?
     - Did you prefer driving or navigating?
     - Did this exercise bring you to approach coding in a different way?
2. As a group, create a list of pointers to help improve pair coding in the future. (Popcorn Discussion)
   - Things that occured to either during or in reflection of your pair code experience to make future pair coding sessions better.

---

### Today's Topics

- Topic 1: Responsive Galleries
- Topic 2: Flex **vs** Grid
- Topic 3: Flex **and** Grid
- Lab Time

---

## Topic 1: Responsive Galleries

When building an image gallery, there are a few ways that you can approach it. This will be dependent on your project requirements.

### How to use the Figure Tag

- [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
- [Example](https://codepen.io/lilyx/pen/powepMZ) By Ash using CSS Grid

#### Basic Syntax and Notes

```
<figure class="gallery-item">
<!-- img here -->
  <img src="path-to-file/file.jpg" alt="descibe the image" />

  <figcaption>
<!-- desciption here -->
  </figcaption>

</figure>
```

- The Figure wraps the image and it's description
- You can put multiple things in the figcaption
- If you don't want to always show the caption info, you can make it only visible on **hover** or **active** states

### Gallery File Structure

- As this course continues, it will be increasingly important to organize your files properly
- Assets such as images should be well organized and named
  - ie: no filenames like the defaults fom pexels. cut down t a simple image title. No spaces, and potentially with size in the tile

#### Example

```
assets/
  images/
    red-canoe-2500w.jpg
    magenta-mountain-800-1500.jpg
    purple-cat.jpg
```

- Each of these examples are acceptable naming formats
  - no uppercase
  - 1 example states just the width, the other has width and height, and the last is just describing image

---

## Topic 2: Flexbox vs CSS Grid

- These layout systems solve problems differently and will make some things easier than others
- If you want a layout that centers the gallery items on a last line. use flexbox
- If you want more control of the image layout in your gallery, use grid
- [Check out this Jen Simmons Video](https://www.youtube.com/watch?v=hs3piaN4b5I)

## Topic 3: Flexbox and Grid

- A great way to use flexbox and grid together is to use flebox to organize content **inside** of grid items
- For Example:

```
<section class="grid-container">

  <div class="flex-container">
  <!-- Contents Here -->
  </div>

  <div class="flex-container">
  <!-- Contents Here -->
  </div>
</section>
```

- [Example in Codepen](https://codepen.io/lilyx/pen/LYOGVmV)

---

## Lab Time

- Work on assignment 3

<home-work :home-work="homework">

### Hero Sections

- If you have not yet reviewed the homework from [Friday](/cpnt-260/lessons/day-07/). Do so for tomorrow

</home-work>
