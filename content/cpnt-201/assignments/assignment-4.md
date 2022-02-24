---
title: Assignment 4 - Nuxt Framework Setup
description: For this assignment, you will set up a basic nuxt project in a github repo
weight: 20%
date: 2022-02-22T23:59:00.000Z
---

- Due: Tuesday March 1 @ 11:59PM
- Weight: 20%

## Instructions

For this assignment, you will set up and configure a nuxt 2 project. You will be required to add specific npm packages to your project (these ones are all nuxt modules). You will also be required to make a minimum of 10 git commits throughout your project.

### Steps

- Initialize a nuxt 2 project
- Add the following modules:
  - [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
  - [Nuxt Storyblok](https://github.com/storyblok/storyblok-nuxt)
  - [Nuxt Image](https://image.nuxtjs.org/)
  - Choose another module to install from: [nuxt modules](https://modules.nuxtjs.org/)
- Add the nuxt modules to either the `buildModules` or `modules` objects in the `nuxt.config.js` file as per their documentation
  - note: for storyblok, the doc asks for a key, you don't need this yet.

### Background Info

[Nuxt](https://nuxtjs.org/) is a javascript frontend framework built around [vuejs](https://vuejs.org/) that is used to build websites and web applications.

We will be using nuxt in cpnt-262. This assignment should give you a basic idea of what to look for when configuring a frontend framework. You may also run into package incompatibilities that need to be resolved, this is a common aspect of dev work.

---

## Rubric

### NPM Project Setup (5pts)

- node modules are added to gitignore and are not in the remote repo
- package.json is properly set up
- scripts all work
- All specified npm packages have been installed

### Nuxt Modules (2pts)

- Modules added to the package.json file
- Modules are set up following the guidelines on their respective documentation

### Nuxt Configuration (3pts)

- all specified nuxt modules are added correctly based on their docs
- document errors that you encountered in your readme
- add commented links to each module's documentation along with the module in the `nuxt.config.js` file

### Git Commits (5pts)

- 10 commits (0.5pts/commit)
  - create in relation to specific tasks while setting up your repo
  - reflect specifics about your commit in the message
- Copy the messages and hashes into your readme in an ordered list
- You can have more than 10 commits, but only 10 need to be documented.

### General Requirements (5)

- Project has a `README.md` file in the root of the repo
  - ie: [First Last](https:/github.com/your-gh-account)
- the link to your npm package that you added
- A short description of why you chose this package.
- Ordered list of git commit messages

### Bonus Point (1)

- npm security vulnerabilities resolved

## Submission Instructions

- Submit a zipped folder of your repo to brightspace
- Zipped folder must **not** include `node_modules`
- Submit repo link
