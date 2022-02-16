---
title: Tailwind CSS
description: In this class, we will be covering how to use tailwindcss in a project.Using these tools, we will get first hand practice using npm packages
date: 2022-02-23T15:00:00.000Z
released: false
homework:
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

### Basic Concepts

#### Breakout: A Tailwind Experiment

- 15 Min
- **Steps**
  - Fork [this repo](), it has a completely unstylized webpage
  - Add tailwind to the head of the html page using a cdn
  - Style the content with tailwind directly in your html
    - text
    - layout
    - colors
  - **TIP** Keep the [tailwind docs](https://tailwindcss.com/) open next to your editor, use `Ctrl K` to quick search for the code you need
    - Also, many tailwind utilities are the same as css properties, or very similar.
      - ie: set display to flex by adding `class="flex"`, and then make it flex-column by writing `class="flex flex-col` --> Directly in your html
- **Resources**
  - [Review this documentation](https://tailwindcss.com/docs/installation/play-cdn) for information on how to add tailwind to a project
  - [Make sure to add the tailwind intellisense plugin to vscode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Configure Tailwind as an NPM Dependency

Most npm packages require some level of configuration to make them work in a project. This will vary from package to package and also project to project. The most important takeaway here is to familiarize yourself with using docs to properly set up an npm package in your project - and in a way that enhances our project.

#### Breakout Session: Tailwind Setup

- Steps:
  - Fork and clone [this repository]()
  - Set it up as an npm project by running `npm init` **in the root project folder**
  - Follow the steps on the [Tailwind Website](https://tailwindcss.com/docs/installation)
    - **TIP** use `npx tailwindcss init --full` to generate a full set of stylings to work from
    - add `@layer base` etc to a normal css file
  - Verify that your tailwind styles work by adding some obvious changes
  - Push your repo

#### Tailwind Configuration

- Steps:

  - Add fonts to the `tailwind.config.js` file
  - Add 2 colors to the `tailwind.config.js` file
  - Add default font styles inside `@layer base {}` in your css file
  - to use tailwind properties in your css file, add them with `@apply`

- Example:

```
@layer base {
  h1 {
    @apply text-3xl font-bold text-center text-blue-500 hover:text-blue-700;
  }
}
```

- Resources:
  - [Tailwind Docs Configuration Page](https://tailwindcss.com/docs/configuration)
  - [How to use `@apply` and `@layer`](https://tailwindcss.com/docs/functions-and-directives#layer)
  - [Ashlyn's Tailwind Config Gist](https://gist.github.com/lilyx13/f1c82147032f0b11a1ea8e6c36c681f6)

### Useful links

These are a collection of doc pages from tailwind's website that you will likely find useful.

- [Tailwind pseudo class dictionary](https://tailwindcss.com/docs/hover-focus-and-other-states#disabled)
- [Tailwind built in dark mode](https://tailwindcss.com/docs/dark-mode)
