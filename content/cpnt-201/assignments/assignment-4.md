---
title: Assignment 4 - Nuxt Framework Setup
description: For this assignment, you will set up
weight: 20%
date: 2022-02-22T23:59:00.000Z
---

- Due:
- Weight: 20%

## Instructions

In groups of 2, you will set up and configure a nuxt 2 project. NPM adds an extra level of complexity to a git workflow, you will both be required to add 2 of the specified modules to the project as well as 1 extra npm package (nuxt module or other).

You will be required to submit a minimum of 8 git commits which must be documented in your individual submission.

### Steps

- Initialize a nuxt 2 project
- Add the following modules:

  - [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
  - [Nuxt Storyblok](https://github.com/storyblok/storyblok-nuxt)
  - [Nuxt Image](https://image.nuxtjs.org/)
  - [Nuxt Composition Api](https://composition-api.nuxtjs.org/)
  - Each of you must choose 1 other nuxt module or npm package and add it to the project.
    - easier: [nuxt modules](https://modules.nuxtjs.org/)
    - harder: [other npm packages](https://www.npmjs.com/)

- Add the nuxt modules to either the `buildModules` or `modules` objects in the `nuxt.config.js` file as per their documentation
  - note: for storyblok, the doc asks for a key, you don't need this yet.

### Background Info

[Nuxt](https://nuxtjs.org/) is a javascript frontend framework built around [vuejs](https://vuejs.org/) that is used to build websites and web applications.

We will be using nuxt in cpnt-262. This assignment should give you a basic idea of what to look for when configuring a frontend framework. You may also run into package incompatibilities that need to be resolved, this is a common aspect of dev work in many fields.

---

## Rubric

- **Bonus Points**
  - npm security vulnerabilities resolved

### NPM Project Setup (5pts)

- node modules are added to gitignore and are not in the remote repo
- package.json is properly set up
- scripts all work
- All specified npm packages have been installed

### Nuxt Configuration (3pts)

- all specified nuxt modules are added correctly based on their docs
- document errors that you encountered in your readme
- add commented links to each module's documentation along with the module in the `nuxt.config.js` file

### Git Commits (5pts)

- 10 commits each (0.5pts/commit)
  - tips:
    - commit often
    - don't push broken code
    - pull before you push
    - communicate

### Individually added npm package (2pts)

- added package to the package.json file
  - if it's a nuxt module, add it to the `nuxt.config.js` file
- put a link to the doc page for your module in your readme

### General Requirements (5)

- Project has a `README.md` file in the root of the repo
- both of your names with links to your github accounts
  - ie: [First Last](https:/github.com/your-gh-account)
- the commit hashs for your commits
  - **only do this for your own fork**
- the link to your npm package that you added
- A short description of why you chose this package.

  ## Submission Instructions

  - Submit a zipped folder of your repo to brightspace
  - Zipped folder must **not** include `node_modules`
  - Submit repo link to **your fork** of the project
