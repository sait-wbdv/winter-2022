---
title: Headless Content Management Systems
description: An overview of CMS approaches with a focus on headless CMS and JAMstack development.
date: 2022-02-25T15:00:00.000Z
released: true
homework:
---

## What is Content Management

- Content management in web spaces is how website data and assets are stored, edited, and organized
- Content is organized in a database or schema

### Activity: Website Review
- Look at some websites that you like, try to find content patterns.

### Demonstration Activity
- Visually Recreate a page's content structures using figjam

## What is a CMS?

CMS's are used to organze content on websites. This includes text content like blogs and articles, images, videos, products, etc.

Traditional CMS's like Wordpress and Drupal are built on a LAMP stack. These types of sites still make up over 40% of websites on the internet.

However new types of CMS's are starting to emerge as well. The JAMStack has recently become a serious contender due to it's flexibility, developer friendliness, optimization, and security.

### Headless CMS vs Traditional CMS

- Headless CMS
  : The Content is separated from the frontend.

- There are many headless cms options.

  - [Storyblok](https://storyblok.com)
    - Visual Editor, stable, great features, SAAS, some price wall limits, vue based
  - [Sanity.io](https://www.sanity.io/)
    - Great range of free features, react built customizable ui, code to set up widgets
  - [Strapi CMS](https://strapi.io)
    - Very full featured, sql database default, deployed separately from frontend, most popular open source headless cms
  - [Ghost CMS](https://ghost.org/)
    - Beautiful editor, 14 day free trial

- Traditional CMS
  - Backend and frontend content are built together
  - Often uses a [LAMP stack](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>)
    - **L**inux: Operating System
    - **A**pache: HTTP Server
    - **M**ySQL: Relational Database
    - **P**HP/Perl/Python: Programming Language
  - Though other stacks such as WAMP or MAMP are also used.
- Examples includes:
  - [Wordpress](https://wordpress.org/)
  - [Drupal](https://drupal.org)

### Why Headless?

- We will be using a headless CMS because it is more flexible, secure, and developer friendly than traditional cms options.
- JAMstack allows for content editors and developers to be able to use tools that work best with their workflow.
- Headless CMS allows deployment of content to multiple frontends, this is more challenging with a traditional CMS

- [Jamstack vs Lampstack structure](https://jamstack.org/)
---

## JAMstack Overview

- **J**avascript: Language
- **A**PI: Content Delivery
- **M**arkup: Content

### Important Characteristics
- Scalable: Easier to scale by decoupling cms and frontend
- Fast Performance: Prebuilt static site
- More Secure: No Server Vulnerabilities
- Developer Experience: Designed to give dev and content editors best working environments

### Jamstack workflow
- [See this link](https://jamstack.wtf/#meaning)

### Activity
- Research different headless cms'

---

## Lab Time


<home-work :home-work="homework">

### Storyblok

- [Storyblok Introduction](https://www.storyblok.com/docs/guide/introduction)
- [Storyblok Schema](https://www.storyblok.com/docs/schema-configuration)
- [Video Storyblok Visual Editor](https://www.youtube.com/watch?v=6wmS2bNaQg8)
- [40 minute storyblok tutorial](https://www.youtube.com/watch?v=MVvW4dpNPFA)

### Jamstack
- [Best Practices](https://jamstack.org/best-practices/)
- [What is Jamstack and how do I get started?](https://www.freecodecamp.org/news/what-is-the-jamstack-and-how-do-i-host-my-website-on-it/)


</home-work>