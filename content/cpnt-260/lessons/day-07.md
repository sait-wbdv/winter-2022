---
title: Gallery Layout and User Input I
description: During this class we will start using form content and we will learn how to make gallery layouts with grid and flexbox
date: 2022-01-28T15:00:00.000Z
released: true
homework:
  - title: Hero Sections
    tasks:
      - title: Elements of a Hero Section
        link: https://baw.agency/hero-section/
      - title: CSS Tricks Height and Hero Components
        link: https://css-tricks.com/fun-tip-use-calc-to-change-the-height-of-a-hero-component/
      - title: Viewport Article
        link: https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts
      - title: CSS Grid and Flexbox Together
        link: https://www.youtube.com/watch?v=dQHtT47eH0M
  - title: Gallery Design
    tasks:
      - title: The figure tag
        link: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
  - title: Transitions and Keyframes
    tasks:
      - title: Mdn Transitions
        link: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
      - title: CSS Tricks Keyframes
        link: https://css-tricks.com/almanac/properties/a/animation/
---

## Review and Announcements

---

## Forms and User Input Content

### Syntax for writing forms

- [Web forms Mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms)

#### Main groupings

- Wrap your form content in the `<form></form>` tags
- use `<fieldset></fieldset>` to group questions that share the same purpose
- inside your `fieldset` use `<legend></legend>` to describe the purpose of the group of fields

#### User Input types

- The `input` field has many types
  - text
  - radio buttons
  - checkboxes
  - datetime
  - email
  - color
  - date
  - tel
  - and more...
- Add a `label` to each input
- `input type="submit"` is used for the submit button

```
<label for="user-name">Input your User Name</label>
<input type="text" name="user-name">
```

- Dropdown Menus use `label`, `select`, and `option`.
  - make sure to set the value on the options. this is read by the computer
  - the text between the option tags is for the people reading

```
<label for="desserts">Food Choices</label>
<select name="desserts">
  <option value="cake">Cake</option>
  <option value="pie">Pie</option>
  <option value="ice-cream">Ice Cream</option>
  <option value="cupcake">Cupcake</option>
</select>
```

### Accessiblity and Forms

- [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
  - tabindex can be used to set how the user can tab through content. It is especially important for screen readers.
  - `tabindex = -1` will make something invisible to the tab key.
  - `tabindex = 0` is preferred in most cases. you can mess up the order that a user moves through content by having higher numbers
    - it's better to just have your content written in a logical sequence
  - avoid using tabindex on non-interactive content such as `div`
- `label`
  - it's important to correctly label your forms
    - `label`, `aria-label`, and `legend` all have particular use cases.
    - If a field does not need a visual label, use a `aria-label` as this will help screen readers
  - [Read more about labels](https://www.w3schools.com/accessibility/accessibility_labels.php)

### Creating Good Forms - Some Guiding Questions

- Forms are very intention specific, and more questions means more work for your user. Consider these questions when writing forms
  - For whom's benefit is the form?
    - ie: Optimizing a user's experience with tailored content, providng ways for users to express themself.
    - ie: Gathering user data in order to conduct research for app improvement
  - Is the data that your asking for necessary?
    - ie: is it legally required? will it be used for password recovery?
  - At what point will the user be filling this out?
    - ie: Do they have to sign in in order to access the main content?
    - ie: Is it going to be something they do at say checkout?
    - Is it a user survey?
  - What benefit is it to the user to do this?

### Breakout Session (20min)

- Meet in pairs for lab time pair coding
- Prep for collaborating in the afternoon. Some things that you can work on are:
  - Pick a topic and types of content
  - Do a quick search for form inspiration for layout
  - Pick a set of base colours to use for your design
    - shade of black
    - shade of white
    - primary color
    - secondary color
  - Write down your steps/plan of action
    - outline goals
    - outline in plain text what you want on your form (can put in comments)

---

## CSS Grid Page Layouts

- [CSS Grid Starter Layouts](https://css-tricks.com/snippets/css/css-grid-starter-layouts/)
- How to use [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)
  - these can be used to create section groupings across multiple columns and rows

---

## Lab Time: Pair Code 2 Hours

- [Activity: User Form](https://gist.github.com/lilyx13/4b5ceabc01d3c7c30818fd1652998c03)
  - Due: Februray 1st

### Lab Instructions

- Driver - Navigator dynamic
  - Driver has hands on keyboard and writes cde
  - Navigator tells the Driver what to code
- Switch off in 5-10 minute intervals (use a timer)
- Driver should follow navigators directions but can offer suggestions and ask questions
- Be respectful to one another
- Stick to your plan
- Happy Hacking!

### Outcome

- Each of you should have a code base that you can tweak and modify, or simply submit if you are happy with it for your 4th activity.
- Your experiences pair coding are great topics for code journals
- When you submit, make sure to reference your partner in your readme or on your submission

<home-work :home-work="homework">

### UI Research

- Search up hero sections and find designs that inspire you or bug you
  - We will do some group analysis on Monday
- Look up image galleries that you find visually interesting

</home-work>
