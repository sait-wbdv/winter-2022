---
title: Storyblok Components
description: We will deploy storyblok to nuxt so that we can being to view our content
date: 2022-03-02T15:00:00.000Z
released: true
---

## Review of the Visual Editor

- We will follow [the storyblok doc page](https://www.storyblok.com/docs/guide/essentials/ui) that explains their ui

---

## Storyblok Component Building

At this stage, our components will just be collections of fields.

- Storyblok's documentation recommends two approaches to building components
  - 'Stay Big': For when your content creators should adhere to rigid schemas
    - this method is great for content that always uses the same layout
  - 'Be Small': Create smaller components that can be nested and reused
    - This is more time consuming but will offer flexibility and layout customization from the storyblok visual editor (after it's been configured with a frontend)
- Component organization: **Use Folders**

#### Documentation

- [Field Types](https://www.storyblok.com/docs/terminology/field-type)
- [Components](https://www.storyblok.com/docs/terminology/component)

---

### Breakout Session 1: Stay Big Component Builder (20min)

- Work in groups of 2-3
  - you can work collaboratively in the same space, or in your own spaces
- Create either a: blog post, card, hero section, FAQ sheet...
  - field ideas:
    - title
    - description
    - author
    - image(s)
    - rich text
    - tags

#### Breakout session debrief

- showcase your blog post component setup (1 person from each group)
- discuss benefits and limitation of your approach

---

## Building Nestable Components

- Create content components that are set up to take information
- Also create presentational components, that are used to arrange content components
- Finally, create larger components that make use of presentational and content components

---

### Connecting with a dev community

- Most big open source projects like nuxt and storyblok have discord, slack, and/or irc communities that are free to join
  - [check out the need help section](https://www.storyblok.com/tc/nuxtjs)
    - join the discord chanel
    - check out awesome storyblok
    - look at the github issues (sometimes we run into problems that are known issues and you can save a lot of time looking this up)

---

## Lab Time

- Main Room Sessions:
  - Debugging and extra help
  - Building Nuxt components for storyblok
- Breakout Rooms:
  - Work on assignments
