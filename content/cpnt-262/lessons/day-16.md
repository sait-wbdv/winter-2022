---
title: NuxtJS
description: We will go into detail on how the nuxt framework works
date: 2022-03-22T14:00:00.000Z
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

## Nuxt Setup

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

- You can create static pages in your `pages/` folder, the nuxt router will generate your routes

---

## Lab Time

-
