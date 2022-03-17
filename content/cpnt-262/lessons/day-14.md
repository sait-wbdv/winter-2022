---
title: Vue Data Binding
description: Learn how to bind data to html elements in vue
date: 2022-03-17T14:00:00.000Z
released: true
homework:
---

## [Achievement 1](/content/cpnt-262/assignments/): Create Vue Components

- Due: Sunday March 20 @ 11:59PM
- Focus: Creating Vue Components
- Syntax: Moustach syntax, v-bind, v-for, v-slot

## Morning Javascipt

- [Gist on Nested For Loops from Yesterday](https://gist.github.com/lilyx13/26f337154f7a7ecb0a94559dec7cfecb)
- [How to import javascript files and modules](https://gist.github.com/lilyx13/0fbb858a5e7cd327221c21a5e23a2b5a)
- [ForEach Array Method Example](https://gist.github.com/lilyx13/2148dda618ee59fae889106029a6aa22)

### Activity

#### Step 1

- create a javascript file with an array of data
- import it into another javascript file
- console.log the data

#### Step 2

- Iterate through an array of objects and only return 1 property from each object using `forEach()`
- use either module import/export syntax or module.exports/require syntax
- Then Try using the other version

---

## Vue-CLI

- There are a lot of ways to add vue to a project and to create a vue project
- [the vue-cli](https://cli.vuejs.org/)
- [The UI for the vue-cli](https://cli.vuejs.org/dev-guide/ui-api.html) (adds a clickable interface)
- Using vite
- Nuxt and other Vue based frameworks

### Today we are going to work with a pure vue experience using the cli

1. [install vue](https://cli.vuejs.org/guide/installation.html)
2. set up a project
   - using the cli
   - uisng the ui
3. Start creating things

#### Why when we are just using nuxt next week?

- It's good to get an idea of what vue is outside of a framework
- This will give you an opportunity to see vue in it's default environment
- Less dependencies
- Faster experimentation

## Activity: Install and set up a vue project

- [follow the insructions on vue's website](https://cli.vuejs.org/guide/installation.html)
- Look for where the `.vue` files are
- Test run the development server

---

## A short introduction conditional rendering with v-if/v-else

- This works just like regular if/else statements, but you put them in the `template`
- Use this for error handling.
- [Documentation](https://v2.vuejs.org/v2/guide/conditional.html)
- Be familiar with this concept as it will come in handy next week.

---

## How to Use Components

- [Vue Components Documentation](https://vuejs.org/guide/essentials/component-basics.html)
- Single File Components are nested within one another and on pages to build a website.
- Follow [the style guide](https://vuejs.org/style-guide/) on naming components
- You will need to use es6 import syntax to add components to vue files (in nuxt, this behaviour requires less work)

### Why components?

- components allow you to create reusable code (edit once, fix everywhere)
- They make it easier to spot errors
- They also make it easier to upgrade your code over time
- Modularity is awesome

### Activity

- Create a `TheHeader.vue` component and add it to an `app.vue` page
- Add a background image
- Add static text to the hero component (Page title, text)
- import `TheHeader.vue` onto the `app.vue` page
- Add some sample content to the page

---

## Props

- [Documentation](https://vuejs.org/guide/components/props.htm)
- Props are a convention in many frameworks, they refer to how variables are passed between parent and child components
- By using props, you can set a component's layout to be specific about how it displays information from the parent component
- Note that the options api and composition api use different syntax to define props
- Props are a **one way data flow** from parent to child (page to component)

### Tips

- When defining props, make sure to define their variable type (ie: string, array...)

### Activity

- Set up a prop on your `AppHeader.vue` component
- use it to take the page title and hero description text from the `app.vue` page

---

## Lab Time

### More Cool Javascript Stuff (main room demonstration)

- [.map() Docummentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [map gist](https://gist.github.com/lilyx13/efc642ac2af5423666f3403d2a6dff9e)

## Activities

- [Practice working with variables](https://github.com/Enyorose/vue-variable-activities-2)
  - This repo has a bunch of prompts in the code for achievemnts
- Practice Creating components for achievement 6
- Pass data from parent to child components

---

<home-work :home-work="homework">

- [Composition API Tutorial](https://sait-wbdv.slack.com/archives/D02ER6BBA59/p1647465698805469)
- [Computed Properties](https://vuejs.org/guide/essentials/computed.html)
- Video: [Computed Properties](https://www.youtube.com/watch?v=cx2WnT_sckA)

</home-work>
