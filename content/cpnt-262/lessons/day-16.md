---
title: Vue Event Handling and Lifecycle Hooks
description:
date: 2022-03-22T14:00:00.000Z
released: true
---

## Morning Javascript Adventures

- `.reduce()`
  - This one is great for adding all the values of an array together
  - It can also flatten arrays
  - It can also group information from arrays of objects
- [Gist](https://gist.github.com/lilyx13/279dcb2a10697068bea8b18ad93eca33)

### Activity: Use Reduce to sum all the values from yesterday's grocery list

- [Try a few of the activities in this gist](https://gist.github.com/lilyx13/279dcb2a10697068bea8b18ad93eca33)

---

## Component Planning

- Review [This gist on organizing components](https://gist.github.com/lilyx13/79bf3fc3b5fe354de8f829cf069e4690)
- Review the [Vue Style Guide](https://v2.vuejs.org/v2/style-guide/?redirect=true)

### Demonstration

- Plan out components based on [cassie codes' website](https://www.cassie.codes/)
  - We won't be making a clone of her site, just following it for visual direction
  - You will want to do this with a mockup

### Activity: Create components based on a design mockup (20min)

- If you don't have one that you want to use, Ash can provide a figma file to work with
- Apply the namespace ideas examined in the demonstration

---

## Event Handling

- [Documentation](https://vuejs.org/guide/essentials/event-handling.html)
- [v-on gist](https://gist.github.com/lilyx13/74543137780c1958f01e9b470a3cb13b) with notes on how to use `v-on`
- `v-on` is used to listen to DOM events and trigger a javascript handler (often a function)
- syntax: `v-on:click="handler"`
  - or shortened as`@click="handler`
- Use this for any buttons on a page
  - set the handler to be a function
- This can be used with the [`ref()`](https://vuejs.org/guide/essentials/template-refs.html) to make variables more reactive

### Activity: Make a button that calculates all of the groceries

- [Instructions](https://gist.github.com/lilyx13/b410645e7560a096a37f89b57724619f)

### Event Modifiers

- To stop a form from being submitted when using a `<button>`, or to stop other default behaviour, use `.prevent`
  - `@click.prevent="myFunction`
  - Check out the other event modifiers
    - `@click.once` - will only trigger once
    - `@click.passive` - great for touch events
  - Key modifiers allow for effecting how an event handler is triggered
  - You can specify specific keys using key aliases and key modifiers

---

## Lifecycle Hooks

- Lifecycle hooks are common to javascript frameworks. They are the steps for when different parts of the site are initialized.
- This [diagram](https://vuejs.org/guide/essentials/lifecycle.html) shows the order of which the lifecycle hooks are initialized
- `onMounted()` can be made use of when fetching content

### Activity: console.log a message when `onMounted()` is initialized

- copy the example off of the above noted lifecycle page

---

## Lab Time

- Work on Achievement
- Main Room: Refactor Course Site Code
