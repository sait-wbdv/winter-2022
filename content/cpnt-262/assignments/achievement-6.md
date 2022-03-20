---
title: CPNT-262 Achievement 6 - Vue Components
description: Create vue components for a consistent page layout
---

- Due: Wednesday, March 23
- Weight: 5% of the final mark

## Learning Outcomes

This achievement will me marked out of **5 points** where you will:

- **2 points**: Presence of Components
- **1 point**: Navigation data stored in script tag
- **1 point**: Proper use of a v-for
- **1 point**: Document this activity in a Code Journal section of the project README (see last step in the [Instructions](#instructions)).

---

## Instructions

1. Create a nuxt 2 project with `npx create-nuxt-app cpnt-262-achievement-6`
   - you can create this using the vue cli instead of nuxt if you want.
2. Create a navigation component and hero component
   - In your nav component, use a v-for to create nav links to 5 pages (including the index)
   - your links should all be stored in the script tags in an array
   - In your header component, include a v-slot as a place to add content on the page
3. In your hero component, make use of a full screen height hero image.
   - the image must be stored in your project
4. In the `pages/` folder, create 4 web pages other than the `index.vue`, inside them add a `template` tag that contains your navigation component and an h1 stating which page it inside the header component
5. Also add a footer component that has copyright info displayed statically
6. Create a code journal and discuss anything challenging that you encountered

---

## Submission

1. Create a GitHub repo of your project;
2. Download a ZIP of the project;
3. In Brightspace, submit your ZIP and include the following as a comment in your submission:
   - a link to your GitHub repo;
