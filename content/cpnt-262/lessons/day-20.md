---
title: Vue/Nuxt Data Fetching
description: Description here
date: 2022-03-28T14:00:00.000Z
released: true
homework:
---

### [Achievement 8](/cpnt-262/assignments/achievement-8)

- Due: March 31 @ 11:59PM
- Fetch and display data from an api

### Nuxt 3 Resource

- [Nuxt 3 Abbreviated Guide](https://gist.github.com/lilyx13/59068feba277c73cc2a4be7a15ec6f59)

## Morning Javascript: Async/Await

- [Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- This is a review of asynchronous javascript which will be needed to fetch data from storyblok
- [async/await tutorial](https://javascript.info/async-await)

### Activity: Async/Await Call

---

## Fetch with Vue 3 Composition API

- [Syntax Gist](https://gist.github.com/lilyx13/2316a7efb667d59ffe2b97b7542e1add)
- Make use of `ref()`
- Render data from an api on a vue web page
- Be cognizant about what you are returning, console.log to verify that you're getting the content that you expect (if things aren't working, this is likely your first area to check)

### Activity: Fetch using `ref()` 15min

- Use the Disney API, Dog API, or any other that you've had success with previously **or** that you would like to try out.

## Fetch Data in Nuxt 3

- [Gist](https://gist.github.com/lilyx13/18145fcb60949bf4a45eedd7125a5645)
- Nuxt 3 uses `useAsyncData` and `useFetch`, which function very similarly to Nuxt 2's `asyncData` and `fetch`
- [Review Documentation](https://v3.nuxtjs.org/docs/usage/data-fetching/)
- Note that with storyblok, you should use their build in data fetching component

### Activity

- [See Activities in Gist](https://gist.github.com/lilyx13/18145fcb60949bf4a45eedd7125a5645)

---

## Nuxt Routing

- [nuxt-link](https://v3.nuxtjs.org/docs/usage/nuxt-link)
  - Nuxt has a built in component for local links. This is built on the `vue-router`, but the major difference is that the tag `<NuxtLink to=""></NuxtLink> is used
  - You can use Pascal case or kebab-case to declare the nuxt-link. You can also bind `:to`
- [Vue Router Documentation](https://router.vuejs.org/guide/#javascript)

## Nuxt Nitro Server

- Nuxt will look in the `server/api` directory for api endpoints
- We've seen some examples from earlier today, while we won't go into detail. This offers a bit of insight into how SSR pages are rendered and how to set up a backend routing system

---

## Lab Time

- Work on Assignments

<home-work :home-work="homework">

## Dynamic Routing

- [Documentation](https://v3.nuxtjs.org/docs/directory-structure/pages/)
- [v-model for 2 way binding](https://vuejs.org/api/built-in-directives.html#v-model)
- [v-model search text](https://vuejs.org/guide/components/events.html#usage-with-v-model)

</home-work>
