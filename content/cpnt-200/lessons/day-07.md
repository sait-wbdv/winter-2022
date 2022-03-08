---
title: Storyblok on the Frontend
description: How to create components on the frontend
date: 2022-03-08T15:00:00.000Z
released: true
assignments:
  - assignment:
    type: Achievement
    name: Storyblok Nuxt Component
    link: /cpnt-200/assignments/achievements
    due: March 11
  - assignment:
    type: Writing Assignment
    name: Blog Post 2
    link: /cpnt-200/assignments/writing-assignments
    due: March 14
homework:
---

## Goal of the Day

- Take a component approach to setting up a cms and it's frontend components
- This will provide a framework for content to use in 262.
- This will also help accomplish assignment 2
- The site that we will make will be for a tech blog

---

## Component Templates

- In Storyblok, we create the content for our components. Afterwards we need to start planning the component structure on our frontend.
- We need to divide out site into base ui components and content components
- Then we will need to determine which information is the same across the site (ie a footer or topbar) and what content is structurally the same but shows different information
- At this point, we will use static content in our frontend component templates to just get an idea of how we are generating these.
  - We will revisit async functions to set all of our content up to render dynamically in 262-p2

### Components in Vue

- use PascalCase to name components (ie: `AppHeader.vue`)
- render variables with mustache syntax
- render static content just like in html
- put html content inside template tags
- only 1 root element in each template

```
<template>
<div>
  <h1>This is how you create a vue template</h1>
</div>
</template>
```

- use script tags in the same file for variables if you want an extra challenge and then render in the template

```
<template>
<div>
  <h1>{{ pageTitle }}</h1>
</div>
</template>
<script setup>
const pageTitle = 'This is a Title'
return { pageTitle }
</script>
```

---

### Components

This is a short list of common components that you'll need to make for a blog site

- Hero
- Navigation
- Page
- Footer
- Header
- Card
- Article
- Post
- Image
- Tag Cloud

---

#### Create Blog Post Component Content

- post
- post ui elements
- post code block
- post media blocks

##### Activities

- Create storyblok components for your blog post
- Create a vue component to plan the layout for the blog post

#### Create Navigation and Header components

- site hero
- page headers
- navigation

##### Activities

- Create storyblok components for your blog post
- Create a vue component to plan the layout for the blog post

### Key Takeaways

- In modern web development, everything is a component (for most approaches). This allows you to make reusable pieces that are easy to maintain

---

## Storyblok Pages

- Create folders for categories
- an index page in each folder can be created for the root of that category
- These will be used to generate pages on the frontend (code once, deploy lots)

---

## Lab Time

- Debug with Facilitators
- Work on Assignments
