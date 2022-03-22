---
title:
description: Description here
date: 2022-03-23T14:00:00.000Z
released: false
---

## Intro to Nuxt

- NuxtJS is a frontend framework that uses VueJS
- It can be used to create:
  - Server Side Rendered (SSR) Pages
    - backend server sends data to frontend page (traditional page)
  - Static Site Generation (SSG)
    - Web page content is built and then hosted statically
  - Progressive Web Apps
    - A client side rendered web application
- Nuxt 2, Nuxt Bridge, Nuxt 3
  - Nuxt 2: stable version
  - Nuxt Bridge: adds some features from Nuxt 3 to Nuxt 2
  - Nuxt 3: Currently in Public Beta Version
- We will use Nuxt 2 as there are more available resources

### NuxtJS Resources

- [Offical Docs](https://nuxtjs.org/docs/get-started/installation)
- [Tutorials](https://nuxtjs.org/tutorials)
- [Traversy Video](https://www.youtube.com/watch?v=ltzlhAxJr74) **note that this tutorial is focused on SSR**

---

## Nuxt Setup (review)

- Use the create nuxt-app command as noted on the documentation
  - npm, npx, and yarn are all good options
  - [Create Nuxt App Docs](https://github.com/nuxt/create-nuxt-app/blob/master/README.md)
- Going through the prompt:
  - _Make sure to press space to select options_
  - Follow [Ash's guide](https://gist.github.com/lilyx13/db43759b547b7cf909d4167d0577d482)
  - If you use Nuxt with Strapi, select `axios` instead of `content` during setup

### Nuxt Tour Gists

- [Nuxt Project Structure](https://gist.github.com/lilyx13/4c973750fb63713d04f7d2f64fa20223)
- [Nuxt Navigation](https://gist.github.com/lilyx13/3ae4627f079929978634d9d84b776f35)
- [Nuxt Pages](https://gist.github.com/lilyx13/b4dfac6b3f0c3a5c98dee24a6d44eb72)

## Creating Pages with Nuxt

- You can create web pages in your `pages/` folder, the nuxt router will generate your the routes for you

---

## Using Vue in Nuxt

- Nuxt is a framework built around vue, so all valid vue code is valid nuxt code.

### Layouts

- One thing that nuxt offers is a convenient way to set up default layouts
  - This allows you to have multiple complete layouts within which to add your page content
    - Use layouts for things like:
      - Nav
      - Header
      - Footer
      - `<Nuxt />`
      - side bars
      - A group of pages with a local nav (for posts)
  - the namespace `default.vue` does not need to be registered
  - if you create a `default.vue` layout, it will be automatically applied to all pages unless they are specified to do otherwise

### Activity: Create 2 different layouts (15min)

- 1 default layout
- 1 layout that includes content different from the default (could be for a gallery, contact page, page with a local navigation)

---

## Vue Router

- [Vue Router: Documentation](https://router.vuejs.org/)
- [Nuxt Router: Documentation](https://nuxtjs.org/docs/features/file-system-routing)
- Nuxt and vue have excellent routers that build your routes for you.
- You can access the router by using `this.$router` syntax in your scripts

### Activity: console log your route information

- In the script tags on each page, console.log the route
- Experiment changing the names of different pages in your `pages/` folder
  - See how your routes change

## Lab Time
