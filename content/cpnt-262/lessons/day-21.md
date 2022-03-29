---
title: Nuxt Dynamic Routing and Storyblok Integration
description: Description here
date: 2022-03-29T14:00:00.000Z
released: true
---

## [Assignment 3: Multipage Website](/cpnt-262/assignments/assignment-3/)

- Group Assignment
- Weight: 30%
- Due: Friday April 8 @ 11:59PM

## Morning Javascript: Sort

- [Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- This method sorts elements in an array.
  - With this you can add functionality to sort a list of information by different parameters at the click of a button

### Activity

1. Sort an array of numbers
   - Create an array of numbers
   - use sort syntax to order them from lowest to highest
2. Sort strings alphabetically
   - Add a bunch of words to an array,
   - Sort it and return an arranged array to a new variable

- [Stackoverflow article](https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript)

---

## Nuxt Router

- We have been learning how to add api's to your router
- Use `$router` syntax to access routes
- Create apis in the server folder and render them as pages

### Activities

- Print out information from the router on each page (to test)
- Create an api and navigate to it with the url `localhost:3000/api/route`

---

## API Fetching on the Backend

- Create an entry in your api folder and set it up to fetch data from an api
- On a given web page, fetch the content from your api so that you can display it
- When you're comfortable with the API's syntax, try adding an `input` field that uses `v-model` to make it responsive to searches

---

## Data Fetching with Storyblok

- When using Nuxt 3, make sure to [install storyblok properly](https://www.storyblok.com/mp/storyblok-meets-vue3-nuxt3)
- Use dynamic pages to render your storyblok content
- Follow instructions on these pages for info on doing this in nuxt 3
  - [SushiWuut Tutorial](https://vuedose.tips/nuxt-3-storyblok-sushi-website)
  - [Storyblok: Access your data](https://www.storyblok.com/docs/guide/essentials/accessing-data)
  - **[Storyblok/Nuxt Module](https://github.com/storyblok/storyblok-nuxt)**
