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

### Important Modules

- [Nuxt Content](https://content.nuxtjs.org/) (selected during setup, but can also install after)
  - Handles the CMS stuff
  - install with `npm install -D @nuxt/content
- [Nuxt Images](https://image.nuxtjs.org/) (must add to project)
  - Automatic and easy optimization of images
  - install with `npm install -D @nuxt/image
    - Then add to `buildModules`
- [Nuxt Router](https://nuxtjs.org/docs/get-started/routing/) (built in)
  - `NuxtLink` makes site navigation easy

#### Activity - Install and explore nuxt

- Install
- Run dev
- Look at the pages and components files
- Try adding content in any of the `template` tags
  - In vue, you can write plain html in the template tags

### nuxt.config.js

- This is where you will set up your modules and a lot of your defaults
- Review [the documentation](https://nuxtjs.org/docs/directory-structure/nuxt-config/)
- check that `components: true`, if it is set to false, you will have to manually import components
- you can set default image sizes if you are using @nuxt/image in here
- you can import sass/scss into here as well.
- If you are using an external stylesheet, decalre it in this file (see docs)

---

## Lab Time

-
