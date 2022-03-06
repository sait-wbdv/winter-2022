---
title: Vue Data Binding
description: Learn how to bind data to html elements in vue
date: 2022-03-17T14:00:00.000Z
released: false
---

## Vue-CLI

- Learning Objective: Use the vue ui to create a simple vue project.
- activity: add components created during last class to a simple vue project

## Build a Page out of Components

- Learning Objective: How to create pages with reusable components
- activity: Combine components onto a page from last class

### Component Naming Conventions

- [Documentation](https://v2.vuejs.org/v2/style-guide/#Priority-B-Rules-Strongly-Recommended-Improving-Readability)
- Use 2 word minimum naming conventions
- Use PascalCase to name your components

#### Reusable App Level Components

- Components should use 2 word naming conventions
  - ie: `AppCard.vue` or `BaseCard.vue` instead of `Card.vue`
- Pick a prefix for all your generic or top level components and then use specific prefix's for other components
  - Recommended Generic Prefixes:
    - `App`, `Base` or `V`
  - In practice:
    - `AppCard.vue` vs `ProductCard.vue`
      - the `AppCard` would be for general uses, but the `ProductCard` would specifically be set up for products
- These components are presentational, they make sure of slots and are designed to orgnize how content is **presented**

#### Breakout Activity:

- Create files for common site content and naming them using one of the above specified prefixes.
  - Look at a previous assignment or a favourite web page and find content that is presentationally the same but the content is different
  - Use this as direction for creating components
- Don't worry about adding content to them. At this point just create them

### Non Reusable Components

- Components that will not accept props and not be reused should be prefixed with `The`.
  - These components would only be used once on a page and will be the same all the time.
  - examples:
    - `TheHero.vue`
    - `TheFooter.vue`
    - `TheHeader.vue`

#### Breakout activity

- Create a component that would be used once on a page and would always have the same information in it
- Add html to the component in a `template` tag

---

## Vue Properties

### Computed Properties

- Learning Objectives: How to alter data with computed properties.
- activity: use array methods

## Event Handling

- Learning Objectives: How to attach events with vue syntax
- activity: make a button that can change the order of a list of content based on different conditions (a-z, z-a, ranked by stars or date)

---

## Lab Time
