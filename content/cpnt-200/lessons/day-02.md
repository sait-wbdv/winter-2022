---
day: Day 1
title: Content Organization and Schemas
description: An overview of CMS approaches with a focus on headless CMS and JAMstack development.
date: 2022-03-01T15:00:00.000Z
released: true
assignments:
  - assignment:
    type: Achievement
    name: Client Content Requirements
    link: /cpnt-200/assignments/achievements
    due: March 1
  - assignment:
    type: Assignment
    name: Site Map Organization
    link: /cpnt-200/assignments/assignment-1
    due: March 6
homework:
---

## Sitemaps and Website Organization

A sitemap can make or break a website. if terms are too long or not descriptive, it can cause confusion for end users, content editors, and developers.

### Generated Content

One of the great things about a cms is that you don't need to manually set up web pages for everything. A CMS allows you to automatically generate content.

- When planning out a site, you'll need to consider what pages are auto generated and which ones aren't
  - Generally pages like home, about etc are static, but can have auto generated content on them
  - Whereas pages such as a product page and articles will be generated dynamically
- How you approach organizing your pages will effect many things:
  - How well your site will grow
  - Comfortability to navigate
  - Maintainability
- While Planning a site and determining generated content (which will be the things you make in your cms), make sure to take some notes on content types. This can keep your productivity up.

### Tools

- [Figjam](https://miro.com/blog/how-to-create-a-sitemap/) is useful for planning out site maps and brainstorming. This can be used alongside of a normal figma file to provide a top level plan in a visually appealing way

### Resources

- [This article has some useful tips on planning a sitemap](https://miro.com/blog/how-to-create-a-sitemap/)

### Breakout Activity

- Set up a figjam file
  - Try mapping out some of the content from the [course website](https://sait-wbdv.netlify.app)
  - Experiment with color coding for page types
  - [see this figjam file as an example](https://www.figma.com/file/TMRzQ2nCinvCrJnZeMDHcm/Lush-Site-Map?node-id=0%3A1)

---

## Storyblok CMS Visual Editor

- Keep in mind that while we are creating content using Storyblok, a similar conceptual approach of structuring content will improve your workflow when using just about any CMS.
- Storyblok's approach seeks to balance having enough visuals to get you moving quickly and reduce the barrier to participate, while still requiring that you think about how you're structuring your content
  - Many drag and drop site builders will allow a person to get a way with some really bad habits when it comes to organizing content. If you take anything away from our work with storyblok - make it be a structured approach to setting up site content.

### Storyblok Terminology and Content Structure

- [Review this doc page for detailed information](https://www.storyblok.com/docs/guide/essentials/content-structures)
- Space
- Story
  - defined by a single content type
  - will have name, slug, published_date as default fields
  - stories are organized in collections with folders
- Component
  - Content Type
    - Templates for stories
    - Made up of fields and bloks
  - Blok
    - a nestable component
    - use these inside of content types

### In Class Example:

- A simple card content-type
- nested bloks to use in the card

### Schema

- A schema is how data is organized in storyblok. You'll find this term used in many other areas of development. For us, we are just thinking about it as the `json` structure of our data
- Example of a schema:

```
{
  "story": {
    "name": "John Doe",
    "created_at": "2022-02-25T16:46:31.969Z",
    "published_at": "2018-04-13T14:08:33.683Z",
    "id": 111444757,
    "uuid": "3a526768-1d22-447e-9ddd-f4158a035edd",
    "content": {
      "_uid": "81c6e3c4-4cad-485f-ae35-18958dcf4cd2",
      "name": "John Doe",
      "image": "//a.storyblok.com/f/43698/1000x1000/805c6425d4/img_round.png",
      "component": "author"
    },
    "slug": "john-doe",
    "full_slug": "authors/john-doe",
    "sort_by_date": null,
    "tag_list": [],
    "is_startpage": false,
    "parent_id": 111444748,
    "group_id": "dbc55ce3-1d8e-4901-8853-86c97c706551",
    "first_published_at": "2018-04-13T14:08:33.683Z"
  }
}
```

- [Schema configuration guide](https://www.storyblok.com/docs/schema-configuration)

### Breakout Activity: play with demo content

- Explore content type and nestable content schemas
- Try adding content using the demo storyblok's schema

---

## Lab Time

- Finish Achievement 1
- Start working on Assignment 1 when achievement 1 is completed

<home-work :home-work="homework">

- [Watch Videos from this playlist](https://www.youtube.com/watch?v=-fQB8FDYLSg&list=PLpiZ2xo9RFsbXq-HUn9AtKUoVB874oKf9)
  - They are all really short (max 5 min)
- Article: [Configuring your space](https://www.storyblok.com/docs/guide/essentials/space-configuration)
- Article: [The Richtext field](https://www.storyblok.com/docs/richtext-field)

</home-work>
