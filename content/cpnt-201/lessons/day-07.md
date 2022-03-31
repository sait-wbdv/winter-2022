---
title: Node Project Management
description: We will follow up with our work using tailwind by customizing site content, and then we will look at how to organize and manage a node project by exploring nuxtjs.
date: 2022-02-24T15:00:00.000Z
released: true
homework:
---

## [CPNT-201 Assignment 4](/cpnt-201/assignments/assignment-4)

- Due: Tuesday March 1st @ 11:59PM
- Objective: Install and set up a NuxtJS instance
- Goal: Practice using npm packages that come with their own cli for scaffolding a project

---

## Tailwind Follow Up

- Goal: To create a responsive card layout for [the courses page](https://sait-wbdv.netlify.app/courses)

### Breakout Session: Tailwind Practice (15min)

- Verify working configuration and build scripts
- Add responsive breakpoints to a tailwind project from last class (sm, md, lg)
- Add pseudo states

---

## Code Formatting and Linting

- Code Linter: Used to analyze code for errors and bugs. Can be used to enforce style as well
  - [eslint](https://eslint.org/)
  - linters can be set to use popular style guides
    - [style guide review](https://betterprogramming.pub/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7)
- Code Formatter:
  - [prettier](https://prettier.io/)
- You can use one or the other, **or** put them together. But if you use them together, you need to so some extra work to get them to work properly.

### Activity: Set up ESLint and Prettier

- [instructions](https://gist.github.com/lilyx13/94b786a87c5ed52e81382cd467542ae4)
- try using with a copy of one of your javascript assignments

---

## NPM Package CLI Setup

- Learning Objective: common practices with npm packages
- Activity: scaffold a basic nuxt 2 project using the nuxt-cli

### NPX and NPM

- NPX is used to execute packages without installing binaries
- NPM is use to install packages and can be used to run packages as well.
- [Free Code Camp Information on the difference](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)

#### A note on yarn

- [yarn](https://yarnpkg.com/)
- You'll see yarn in a lot of documentation. Yarn is another package manager that can be used with npm. node requires npm but you can also install yarn and use it. many developers prefer this. We will be using npm.

### Initialize and set up projects

- [Tailwind](https://tailwindcss.com/docs/installation)
- [Nuxt 2](https://nuxtjs.org/docs/get-started/installation/)
- Follow steps outlined in the documentation
- Select from options provided
  - if you're unsure of what the options mean, take a moment to google your options
- add [tailwind nuxt module](https://tailwindcss.nuxtjs.org/)

---

## NPM Debugging

### Know How to Respond to Errors

- [Common NodeJS Errors](https://docs.npmjs.com/common-errors)
- Some common causes of problems
  - not installing packages
  - not running command from the right directory
  - improperly configured packages
  - package incompatabilities

### Activity

- In pairs, Review errors that you may have come across when setting up nuxt
  - if you did not encounter any errors during setup, try forcing the above noted causes
    1. try to run `npm run dev` after deleting the `node_modules/` folder
    2. try running `npm run dev` from any folder other than the root of the folder
    3. delete either `tailwind.config.js` or `nuxt.config.js` and then try to run a relevant build script

### NPM Security Vulnerabilities

- Run `npm audit` to find security vulnerabilities
- [Gist with instructions on fixing security vulnerabilities](https://gist.github.com/lilyx13/52a4356d5cb7eee315d71493c693b59b)

#### [Steps to fix vulnerabilities](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)

1. run audit
2. check for mitigating factors
3. update dependencies
4. fix fulnerabilities

---

## Lab Time

- Assignment 4 pair setup and work
- Main Room:
  - Optimizing courses page design
  - Picking next page to enhance
  - Follow up demonstrations of using linting tools

<home-work :home-work="homework">

## CPNT-200 Initial Reading

- [Read about JAMstack](https://jamstack.org/what-is-jamstack/)
- [What is a headless cms in 5 minutes](https://www.storyblok.com/tp/headless-cms-explained)

</home-work>
