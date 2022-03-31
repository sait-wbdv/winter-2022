---
title: Vue Props, Conditionals, and Computed Properties
description: We will look at computed and method properties and how to use them with data
date: 2022-03-21T14:00:00.000Z
released: true
homework:
---

## [Achievement 1: Create Vue Components](/cpnt-262/assignments/achievement-6/)

- Due: Wednesday March 23 @ 11:59PM
- Focus: Creating Vue Components
- Syntax: Moustach syntax, v-bind, v-for, v-slot
- Task: Create, style, and test a few vue components

---

## Morning Javascript: `.map()`

- Very similar to `.forEach()`
- Used to return content from a modified array **without** effecting the original array
- [.map() Docummentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [map gist](https://gist.github.com/lilyx13/efc642ac2af5423666f3403d2a6dff9e)
- **tip**: you can use `.map()` for filtering by using conditionals, but `.filter()` is better suited for that task.

### Use Cases

- changing values of multiple items in an array
  - ie: adding gst to a list of products
- create a more complex array based off of a simpler array
  - ie: turn an array of strings into an array of objects

---

## Props Review

- Use props to pass information from parent components to child components
- props are **one way binding** for 2 way binding, use `v-model`
- [Documentation](https://vuejs.org/guide/components/props.html#props)

### Activity: Card Component (15Min)

- Fork Jessica's [Card Component Activity](https://github.com/Enyorose/vue-component-activity)
- Verify that the card component works
  - Make necessary changes if it doesn't
- Use a scratch pad to plan out a similar card (add 1+ extra item of content to it)

---

## Vue Conditionals

- Use `v-if`, `v-else-if`, and `v-else` for error handling in your content rendering
- [Gist with options api examples](https://gist.github.com/lilyx13/b76a2f92cff897e0edbb60de59b58dec)
- [Documentation](https://vuejs.org/api/built-in-directives.html#v-if)

### In class Example

- Add v-if to the `homework` component on the course website for increased flexibility

### Activity (20min)

- Add v-if v-else to a your card from the previous activity
  - set it to handle incorrect or absent data
  - Test it to make sure it works
    - do this by adding content for a second card in your `App.vue` file
    - render both cards

---

## Computed Properties

- Use computed properties in your `script` tag to avoid adding logic to your template
- computed properties are less reactive and resource hungry than `methods`
- Use them for things like:
  - organizing a list by A-Z **or** Z-A
  - making calculations
  - modifying template content
- To use a computed property, simply add it's name to the `{{ }}` where you would put a normal variable's name
- Try it out [in the vue playground link on this page](https://vuejs.org/guide/essentials/computed.html)

### Activity

- Add our examples from the grocery cart this morning
- Render the cart items before tax and after tax in two separate lists

---

## Lab Time

- Work on Achievemnts
- Practice using map, computed, props, or v-if/else
- Learn cool stuff with Tony

---

<home-work :home-work="homework">

## For March 22

- Read: [Components Basics Documentation](https://vuejs.org/guide/essentials/component-basics.html)
- Watch: [Computed Properties vs Methods](https://www.youtube.com/watch?v=9SM-eeD_wlM)
- Read: [Vue Event Handling](https://vuejs.org/guide/essentials/event-handling.html)
- Read: [Tips on planning components for a vue project](https://gist.github.com/lilyx13/79bf3fc3b5fe354de8f829cf069e4690)
  </home-work>
