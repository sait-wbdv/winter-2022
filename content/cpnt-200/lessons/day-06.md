---
title: Netlify
description: Before we begin to set up components, we will learn to deploy a frontend to netlify
date: 2022-03-07T15:00:00.000Z
released: true
assignments:
  - assignment:
    type: Achievement
    name: Assignment 2 - Components
    link: /cpnt-200/assignments/assignment-2
    due: March 13
---

## Assignment Review

- Nuxt Deployment Main Issues:
  - Nested projects (not inherently wrong but will require different steps at deployment)
  - configuration errors with setting up nuxt modules
  - incorrectly scaffolded
  - build bugs

## Component Building Check In

- Nested Components
- Content Types vs Components

---

## Web Hosting and Deployment

Whether a website is static, a web application, a LAMP stack, JAMstack or other, it needs to be hosted somewhere.

- [Read this gist for some information on hosting options](https://gist.github.com/lilyx13/0cc934de36c615073a48b319c9958bfd)

### [Breakout Activity (15min)](https://gist.github.com/lilyx13/f7fd84859f0a3056d9065e7c4fd51f9e)

- Research a web hosting platform

#### Debrief

- Discuss key takeaways that you learned
- Discuss use cases of your platform
- What questions were you able to answer with their documentation?
- What questions do you have after doing this activity?

---

## JAMstack hosting on Netlify

- Netlify was the first company to produce a hosting service designed specifically for jamstack. It integrates tightly with github and other git forges.
- Once your git hosted frontend is connected to netlify, you'll be able to make updates to your site simply by pushing your git commits.
- Netlify offers extensive function to websites through their [serverless functions](https://docs.netlify.com/functions/overview/)

#### [Bookmark This Page](https://docs.netlify.com)

- It's netlify's documentation, it offers plenty of information on how to host a site on netlify

---

## The Netlify Admin Panel

- After you create an account with netlify, you will be greeted with an admin panel from which you will manage your projects.
- [Netlify Getting Started Doc](https://docs.netlify.com/get-started/)
- [Specific info about nuxt on Netlify](https://docs.netlify.com/configure-builds/common-configurations/nuxt/)

### Breakout Activity: Deploy a nuxtjs + netlify starter template

1. [Find the template at this link](https://app.netlify.com/start-with-template)
2. Follow the instructions provided to set it up to your github account
3. Deploy the site live to netlify following [these instructions](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

---

## Connect Nuxt to Storyblok using an API key

- [Follow these instructions](https://gist.github.com/lilyx13/03a8a0bda19524bfa89bd2d5f2ef7612)
- You will use different API keys for your development and production environments
- This is how information is transmitted between the CMS and the Frontend

---

## Lab Time

- Breakout Rooms:
  - Make sure that you are able to deploy to netlify
  - Work on assignments

### Announcement: If 90% of the class can submit a link to the nuxt template deployed to netlify by the end of lab time, We will start at 9am on March 8

- Submit link in the netlify box in brightspace (not for grades)
