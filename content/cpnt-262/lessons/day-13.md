---
title: Intro to VueJS
description: Description here
date: 2022-03-16T14:00:00.000Z
released: true
homework:
---

---

## Frontend Frameworks

- Frontend Frameworks are designed to make complex websites and applications easier to create. They offer many advances over traditional vanilla html + css + js.
- [Check out Mozillas Documentation on what a frontend framework is](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- Frontend Frameworks can be used for:
  - [Single Page Applications -- SPA](https://en.wikipedia.org/wiki/Single-page_application) loads website on the client side
  - [Server Side Rendered -- SSR](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction) loads website on the server first
  - [Static Site Generation](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/) A static prebuilt site is served to the user (SSG like Nuxt will then 'rehydrate' on the client side, providing a dynamic experience)
- Popular Frameworks:
  - [React](https://reactjs.org/) (Facebook)
  - [Angular](https://angular.io/) (Google)
  - [Vue](https://vuejs.org/) (Independent/Community)
  - [Svelte](https://svelte.dev/) (Independent/Community)

### Why are we using Vue?

- Vue has a rich ecosystem with lots to offer
- It tends to be easier to learn from vanilla html and javascript
- It's more mature then Svelte
- It's got great documentation and a vibrant community

### What's the difference between Vue and Nuxt?

- Nuxt is built using Vue. It is a Vue Framework that offers a lot of functionality built into it
- Vue is the essential core of [Nuxt](https://nuxtjs.org), just like React is the essential core of [Next](https://nextjs.org/)
- Nuxt provides project organization, build tool setup, and an easy way to handle modules and plugins, it also offers static site generation out of the box

### Do I have to stick with one framework?

- Not at all!
  - The goal is that with our basics in Vue and Nuxt, you'll develop a familiarity with general principles common to other frontend frameworks and will be able to pick one that suits your programming style and philosophy

### Vue and Vscode?

- Try using the [volar extension](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- Some work might be needed to get eslint and prettier to work with volar
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) is another exellent (but slightly older) extension for vue
  - it can be set to work well with prettier

---

## VueJS: How to add it to a project

### Progressive Adoption/Usage

- Vue can be added to a project _progressively_ by adding it to javascript or html pages [see this **without build tools** example](https://vuejs.org/guide/quick-start.html#without-build-tools)
  - This gives you the ability to add a bit of vue to a project without needing build tools
  - It also allows you to use just a minimal amount of vue syntax in an otherwise non vue project
- We will be using Single File Components, however it's worth while to try adding vue syntax to existing non vue projects or codepens to see the flexibility this framework gives you

### With Build Tools/Single File Components

- This is likely the way that you will most often encounter vue
- You've already seen a version of this by using [NuxtJS](https://nuxtjs.org/), Vue has it's own build tools, cli, and gui for setting up projects.
- You can also use [vite](https://vitejs.dev/) which is an alternative build tool to webpack
- A vue project is built around using single file components
  - These include the `script`, `template`, and `style` code blocks

#### Anatomy of a Single File Component

```
<template>

<!-- Write HTML here -->

</template>

<script setup>

// Write Javascript here

</script>

<style scoped>

/* Write CSS here */

<style>
```

- All 3 are not always required.
- using `style scoped`, you can keep your css variables bound at the component level, which increases modularity of your code
- You can rearrange the tags in any order.
  - it's common to see template - script - style. However some developers are placing the script tag ahead of template. It's up to you which style you prefer

#### activity: Experiment with a vue SFC

- [vue sfc practice space](https://sfc.vuejs.org)
- Add variables to the script tag just like you would in javascript
- Try rendering them in the template tag by using moustache syntax `{{ variableName }}`

---

### Vue Directives Basics

- Vue has a set of templating directives that you can use to add content to a web page. There are lots and they are all useful for different things. Today we will cover a couple basics to get you started
- [Directives List](https://vuejs.org/api/built-in-directives.html)

#### [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind)

- This is one of the most important. it allows you to bind data to html properties such as `src` in an img tag
- You can also use it to bind styles [v-bind css](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css)
- It can be written out as `v-bind:src="variableName"` or by using the shorthand `:` as in `:src="variableName`
- Example:

```
<img :src="cat.photo" :alt="cat.description" />
```

#### [v-for](https://vuejs.org/api/built-in-directives.html#v-for)

- Use v-for to render a loop of information
- It **must** have a key added. which should be the name of the iterator + .id
- example (will print out a list of hero names providing that `heroes` exists as a list)

```
<ul>
  <li v-for="hero in heroes" :key="hero.id">
  {{ hero.name }}
  </li>
</ul>
```

#### [v-slot](https://vuejs.org/api/built-in-directives.html#v-slot)

- This allows you to create space inside a component for extra content to be added in specific uses
- In your component, you use a `v-slot` to tell the component what to do with the extra info

---

## Vue Composition API vs Options API

- When you look up Vue documentation and examples, you'll find two distinct types of syntax being used. One is the **options api** and the other is the **composition api**.
- The Options API is older and will be eventually replaced by the composition api
- They are both useful ways of structuring the logic for your code. They handle your variables, functions, and props.
- [API Reference Appendix](https://vuejs.org/api/)
- **In this class we will default to the composition api**

### Comparative Example

- Options API

```
<script>
export default {
  data() {
    variableKey: 'Variable Value'
  }
}
</script>
```

- Composition API

```
<script setup>
const variableKey = 'Variable Value'
</script>
```

### Activity: Refactor data from the options api to the composition api

#### Part 1

- Navigate to the [vue tutorial space](https://vuejs.org/tutorial/#step-1)
- Select SFC and Composition API
- Add a couple of variables inside a script tag
  - Start of with simple string variables
- render them using moustache syntax

#### Part 2

- Open another tab with the vuejs tutorial space in it
- Select SFC and Options API
- Try to recreate the data binding from your first example using options api syntax

---

## Places to Use Vue

- In a codepen single file component (least setup)
- In the two spaces provided on the vue site (some setup, specific uses)
- In a non sfc component (some setup)
- In a vue project (more setup)
- In a nuxt project (most setup)

---

## Lab Time

- Try working through [vue's tutorial](https://vuejs.org/tutorial/#step-1) (more structure)
- Try refactoring a past activity in codepen into vue
- Work on assignments

---

<home-work :home-work="homework">

### Vue Syntax

- [v-if/else](https://vuejs.org/api/built-in-directives.html#v-if)
- [v-on](https://vuejs.org/api/built-in-directives.html#v-on)
- [props](https://vuejs.org/guide/components/props.html#props)

### Vue Concepts

- Video: [props](https://www.youtube.com/watch?v=W2j7CjQI2y4)
- [Conditional rendering](https://v2.vuejs.org/v2/guide/conditional.html)
- [Components Basics](https://vuejs.org/guide/essentials/component-basics.html)

- [Slots](https://vuejs.org/guide/components/slots.html)

</home-work>
