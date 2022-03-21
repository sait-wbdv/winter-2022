---
title: CPNT-262 Achievement 6 - Vue Components
description: Create vue components for a consistent page layout
---

- Due: Wednesday, March 23
- Weight: 5% of the final mark

## Learning Outcomes

This achievement will me marked out of **5 points** where you will:

- **2 points**: Component setup and style
- **1 point**: Use of v-bind and slot
- **1 point**: Proper use of a v-for and data variables
- **1 point**: Document this activity in a Code Journal section of the project README (see last step in the [Instructions](#instructions)).

---

## Instructions

1. Create a nuxt or vue project named `cpnt-262-achievement-6`
2. Create a header component
   - Use moustache syntax to render information that is stored in the script tag of the component (do not write it statically)
   - use a `slot` to add more flexibility to the content
     - Add either an image or some text from the parent page
   - Use the header component on the `App.vue` or `index.vue` page
3. Create a list component
   - on your `App.vue` or `index.vue` page, create an array with information to populate your component
   - render your content with a `v-for`
4. Create a footer component
   - Your copyright information should be stored inside your footer component
5. Create a code journal and discuss anything challenging that you encountered

- **Bonus Point** Create a computed property that renders a modified version of the list created in step 3

---

## Submission

1. Create a GitHub repo of your project;
2. Download a ZIP of the project;
3. In Brightspace, submit your ZIP and include the following as a comment in your submission:
   - a link to your GitHub repo;

### Notes

- Do not push node_modules
- No forking other people's repos
- Options API and Composition API syntax are accepted
- Style your components with any css approach that you want
- Follow [VueJS naming conventions](https://v2.vuejs.org/v2/style-guide/?redirect=true)
  - These guidelines give some room for flexibility, use what makes sense to you
  - **hard rule** 2+ word component names
