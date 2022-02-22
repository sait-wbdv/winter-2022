---
title: Tailwind CSS
description: In this class, we will be covering how to use tailwindcss in a project.Using these tools, we will get first hand practice using npm packages
date: 2022-02-22T15:00:00.000Z
released: true
homework:
  - title: Tailwind
    tasks:
      - title: Tailwind CSS Editor Setup
        link: https://tailwindcss.com/docs/editor-setup
        description: This provides useful information on how to set up your code editor for working with tailwind.
      - title: Tailwind CSS Utility Class Concept
        link: https://tailwindcss.com/docs/utility-first
        description: Intro to the utility first philosophy of tailwind. This page also discusses some of the benefits of using a utility first approach.
      - title: Tailwind Hover, Focus, and Other States
        link: https://tailwindcss.com/docs/hover-focus-and-other-states
        description: This page addresses how tailwind handles states such as hover. It also introduces how tailwind handles breakpoints. This is a long article, I recommend skimming it for familiarity and then coming back to it when you can apply some of the concepts.
      - title: Responsive Design in Tailwind
        link: https://tailwindcss.com/docs/responsive-design
        description: This article covers how to create responsive designs by using tailwind's breakpoints.
---

## What is a CSS Framework?

CSS Frameworks are designed to make styling content easier and more maintainable. Technology and design are both fast moving fields and in web development, developers need to be able to respond to changes in branding and design concepts with minimal breaking changes and tech debt.

Frameworks such as tailwind aim to make styling web content easier, there are many different options that you have and they all have different workflows and goals.

### Popular CSS Frameworks

- [Tailwind CSS](https://tailwindcss.com/): Utility first css, highly customizable
- [Bootstrap](https://getbootstrap.com/): Component focused, lots of pre-built components, backed by twitter
- [Bulma](https://bulma.io/): No Javascript, fairly easy to learn
- [Uikit](https://getuikit.com/): Minimalism, not very customizable
- [Vuetify](https://vuetifyjs.com/en/): Vue Ui library, material design, vue focused

### Difference Between a CSS Framework and CSS Preprocessors

You'll come across these terms often:

- SASS
- SCSS
- LESS
- Stylus

These are all css pre-processors and **not** css frameworks. They are used to extend css with additional functionality such as nested classes, mixins, and conditional logic.

While they are not css frameworks, they can be used with frameworks if you so desire. Just remember that more packages means more dependencies and more configuration to make everything work right.

---

## Tailwind CSS

This is a utility class framework which means that the stylesheet is not component focused.

### Basic Concepts

- [Utility First Fundamentals](https://tailwindcss.com/docs/utility-first)
  - utility classes are used to style content
  - component concepts occur at content level, not stylesheet level
- [Responsive design](https://tailwindcss.com/docs/responsive-design)
  - Tailwind is mobile first, so when setting breakpoints, the smallest size is default and you add larger breakpoints for changes
- [Theme Configuration](https://tailwindcss.com/docs/theme)
  - Less of a concept and more of a method
    - Tailwind uses a well structured configuration to define utility styles
    - In your configuration, you set your default sizes, hover shades, colors... mostly everything
    - You can also use `@layer base{}` in a css file to generate your own base styles - this is especially helpful for fonts
- Aggressive Reset
  - Tailwind has a pretty intense reset
  - It removes all base styles so you have complete control
- **When does tailwind excel?**
  - When you're using a templating system or framework where your content code is organized into small reusable **components**. These often have **scoped** styles which means that any css added to them is only relevant inside the component.

#### Breakout: A Tailwind Experiment [15min]

- [Link to activity](https://gist.github.com/lilyx13/84400e9d8feb8a1940d5c67044b73077)

---

## Configuring Tailwind

### Tailwind as an NPM Dependency

Most npm packages require some level of configuration to make them work in a project. This will vary from package to package and also project to project. The most important takeaway here is to familiarize yourself with using docs to properly set up an npm package in your project - and in a way that enhances our project.

- Add tailwind to a project with `npm install`
  - [see the docs](https://tailwindcss.com/docs/installation)

#### Breakout Session: Tailwind Setup (10min)

- [Activity Link](https://gist.github.com/lilyx13/2ed0c859ce72a24a59f2e1c54c0778d4)

#### Tailwind Configuration (10min)

- Resources:
  - [Tailwind Docs Configuration Page](https://tailwindcss.com/docs/configuration)
  - [How to use `@apply` and `@layer`](https://tailwindcss.com/docs/functions-and-directives#layer)
  - [Ashlyn's Tailwind Config Gist](https://gist.github.com/lilyx13/f1c82147032f0b11a1ea8e6c36c681f6)

### Useful links

These are a collection of doc pages from tailwind's website that you will likely find useful.

- [Tailwind pseudo class dictionary](https://tailwindcss.com/docs/hover-focus-and-other-states#disabled)
- [Tailwind built in dark mode](https://tailwindcss.com/docs/dark-mode)

---

## Lab Time

- Main Room: Add tailwind to the course page (Demo)
- Activity: Continue experimenting with tailwind in your fork of the provided repo from earlier
  - recommended if you feel like you need a bit more practice
- Assignment 3: Start working on your assignment 3
  - recommended if tailwind is coming fairly easy to you

<home-work :home-work="homework"></home-work>
