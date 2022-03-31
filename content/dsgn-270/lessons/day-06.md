---
title: Figma Mockup Design
description: Description here
date: 2022-03-11T15:00:00.000Z
released: true
homework:
  - title: Design Systems
    tasks:
      - title: Figma Design System Overview (more theoretical)
        link: https://www.toptal.com/designers/figma/figma-design-system
      - title: Creating a design system in Figma (more practical)
        link: https://uxdesign.cc/creating-a-design-system-in-figma-cbd01b0d2424
  - title: Components
    tasks:
      - title: Kevin Powell Figma Components (37min video)
        link: https://www.youtube.com/watch?v=hnx5UWaP_jo
---

## Design Systems

A design system is very useful for creating mockups and prototypes quickly and consistently. A design system is a set of rules regarding visual elements such as: color, typography, spacing, border radius, and pseudo states.

A design system also include commonly used components such as buttons, cards, panels. Just like with the style assets, you can take a very structured approach to your components, or you can set up a minimal system. It depends on the scope of the project.

We are going to create a design system in Figma. These will be applied to both our mockups as well as our actual code. This is possible by using Figma plugins to export stylesheets based on our design systems.

### Important Plugins

- [StyleList](https://www.figma.com/community/plugin/927255248672920500/StyleList-%E2%80%93-text-and-color-styles): Create text and color styles
- [Color Designer](https://www.figma.com/community/plugin/739475857305927370/Color-Designer)]: Another color palette generator
- [Color Scheme](https://www.figma.com/community/plugin/815841134222084922/Color-Scheme): Similar to StyleList for color generation
- [CSS Export](https://designcode.io/figma-handbook-exporting-css-codes): Export Vanilla CSS
- [Figma Tailwind](https://www.figma.com/community/plugin/785619431629077634/Figma-Tailwindcss): Export a Tailwind Configuration
- [Tailwind Import](https://www.figma.com/community/plugin/738806869514947558/Tailwind-CSS): Import a tailwind configuration file into Figma

---

## Design System Setup

- [Figma Design System Best Practices](https://www.figma.com/best-practices/components-styles-and-shared-libraries/)

1. Pick colors and generate variations
2. Pick typography and generate variations
3. Create a couple simple components to generate:
   - border-radius
   - effect styles

### Activity: Create a color scheme for your design system (15min)

- Use one of the above specified, or any other color palette generator
- Create a color palette that includes
  - a primary color
  - a secondary color
  - grayscale shades
- Set between 5 - 10 variations

### Activity: Create a Typography Scheme for your design system (15min)

- [Extra Reading: Typography](https://www.figma.com/resources/learn-design/typography/)
- Choose 2 fonts
  - Heading
  - Body Text
- Set up all of your font variations
  - Label them based on html font names or based on utility class styles

### Debrief

- Show off your work
- Ask questions
- Learn from one another

---

## Components

It's good to learn how components work by building your own first. However for fast production of mockups, you can use prebuilt component UI libraries. When you get to the development phase, this speed can be continued by using corresponding css frameworks.
o

- [Short doc on making a component in figma](https://help.figma.com/hc/en-us/articles/360038663154)

### Activity: Create your own components (15Min)

- Create and save a button component
  - Set the border radius
  - Set a variation (solid and outline versions)
  - Save the component and use it in a different file
- Component needs to be saved and reusable from assets

### UI Kits to try

Keep in mind that many of these will have a limited free version and a premium full version

- [Official Tailwind CSS for Figma](https://www.figma.com/community/file/958383439532195363)
- [Tailwind CSS UI Kit](https://www.figma.com/community/file/768809027799962739)
- [Bootstrap 4 UI Kit](https://www.figma.com/community/file/832800692655327277)
- [Figma IOS UI Kit](https://www.figma.com/community/file/809487622678629513)
- [Material Design UI Kit](https://www.figma.com/community/file/880534892514982400)

### Activity: Create a page component(15min)

- Choose one of the following:
  - Hero
  - 3 Card Layout
  - Gallery
  - Panel

### Debrief Discussion

- Review work as a group
- Discuss UI kit experiences
- Make sure everyone can create components

---

## Content Plugins

- [Icons8 Icons](https://www.figma.com/community/plugin/791103617505812222/Icons8-Free-Icons)
- [Font Awesome Icons](https://www.figma.com/community/plugin/774202616885508874/Font-Awesome-Icons)
- [LottieFiles](https://www.figma.com/community/plugin/809860933081065308/LottieFiles)
- [Unsplash](https://www.figma.com/community/plugin/738454987945972471/Unsplash)
- [Lorem Ipsum](https://www.figma.com/community/plugin/736000994034548392/Lorem-ipsum)

---

## Lab time

### Sleep in Activity: Create a Design System

- Due: 11:59PM Today

- Your design system must include:
  - a color scheme
  - typography
  - shadow
  - border radius
  - components:
    - a button

#### Submission

- Create a team
  = Add the Design System file to your team
- Publish as a library
- Share an editable link in your submission to Brightspace

### Optional Activity: Create a web page mockup using a UI Kit

- It must have the following sections of content
  - Top bar
  - Header/Hero
  - Section of Content
  - Footer
- Create either a desktop layout, or a mobile layout
- You can design a page from scratch, or you can follow a webpage that already exists as inspiration
- Placeholder text and images are ok
  - It must use actual Images

<homework :home-work="homework">

- [Video: Figma Design System 55min](https://www.youtube.com/watch?v=EK-pHkc5EL4)

 </homework>
