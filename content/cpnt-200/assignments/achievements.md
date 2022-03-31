---
title: CPNT 200 Achievements
descriptions: small activities
weight: 15% Total
due:
  - assign:
    name: Achievement 1
    date:
  - assign:
    name: Achievement 2
    date: March 2
  - assign:
    name: Achievement 3
    date: March 7
  - assign:
    name: Achievement 4
    date: March 11
---

## Achievements

- Client Content Requirements Achievement (5%)
- Client Focused Schema Achievement (5%)
- REST Query Achievement (5%)
- Connect Storyblok to Nuxt (5%)

## Client Content Requirements Achievement

- Due: Tuesday February 29th @ 11:59PM
- Weight: 5%

For this achievement, you will be getting into the mind of a client and how they might be perceiving content types. As we are only just starting to learn about schemas and how content is organized in a cms, this will help you understand how you assume data to be organized and grouped prior to building schemas. It will also help you learn to interpret the needs of a non-tech-savvy client.

You will submit a document file that contains a set of content requirements. Later in the week, you will pair up with someone else in the class and build schemas of each other's content requirements in storyblok.

### Instructions

1. in word or google docs document, write a short (2-5 sentences) overview of what the site is for and what kinds of content you anticipate being able to edit.
   - ie: a clothing company, a personal blog, a skin care company, a band website...
   - ie: blog post, product, image gallery, tour dates, card, article, section...
2. Find examples of a content type somewhere on the web and take a screen shots of it (this is meant as visual inspiration).
3. In your document, outline your functionality and content requirements for each content type.
   - Remember to write from a client perspective and not as a developer
4. Zip the folder of screen shots and the document describing your content requirements and submit the zipped file to brightspace

- for a 0.5 bonus, submit a sharable link to a document in the text submission of brightspace

### Rubric (5pts)

- 1 point for overview
- 1 point for description of each content type (3pts)
- 1 point for screen shot

---

## Client Focused Schema Achievement

- Due: Wednesday March 3 @ 11:59PM
- Weight: 5%

For this achievement, you will be grouped into pairs and will attempt to build a storyblok content type component based on your partner's requirements from achievement 1. If your partner did not complete the first achievement or doesn't have any ideas of a content requirement that they can give you on the fly, Let Ashlyn know and you will be provided one.

- for this assignment, you will submit:
  - a screen cap of the finished component's ui from the content editor.
  - a formatted `.json` file of the content type's schema
  - Readme file with notes on your partner's component requirements.

### Instructions

- prep: copy the text describing the content type that you are creating from your partner's doc file into a `README.md` file.
  - make any planning notes in this file
  - notes on challenges that you faced

1. Create a new empty space in storyblok
2. Create a new content type and give it an accurate name
3. Create nestable bloks of reusable content fields
4. Add fields to the content type that do not need to be in a nested blok
5. Make sure your fields have correct descriptions and labels
6. Copy the schema's json and put it in a `content-type-name.json` file in vscode (make sure it's correctly formatted)
7. Take screen shots of the content editor ui of your component
   - capture the editor ui (schema)
   - capture the config
8. Put the readme, json file, and screen shot in a folder and zip it for submission

### Rubric (5pts)

- Content Type (2pts)
  - set as a content type
  - not nestable
- Schema Fields (3pts)
  - nested bloks used for groups of fields
  - correct types are chosen
  - descriptions added to fields
- Readme file must be present (-1pt if not there)

---

## Rest Query Achievement

- Due: Monday March 7 @ 11:59PM
- Weight: 5%

Using postman, make 5 queries from a space set up using storyblok's demo content. Submit a `README.md` file with code snippits of the queries that you used

### Rubric (5pts)

- 1 point per properly constructed query

---

## Storyblok Nuxt Component Achievement (5pts)

- Due: Friday March 11 @ 11:59PM
- Weight: 5%

### Goal

Create 3 vue components that correspond to storyblok json components

### Instructions

1. fork the provided repo
2. clone your fork to your desktop
3. create 3 components in storyblok
4. create 3 corresponding components in nuxt (in the components folder)
5. use html and whatever css approach that you like to add some basic styling
6. name content in template in a way that will help you add dynamic content later
7. submit the vue files and the corresponding storyblok schema in `.json`.

- Bonus: declare variables that will be dynamically generated from storyblok in the `script` tags as is shown in class. Render their information using mustache syntax ` {{ variableName }}`

#### Submission instructions

- zip the component .vue files and .json and submit the zipped folder to brightspace

### Rubric

- styled components
- content in vue components are named consistently with components in storyblok
- components follow described naming convention
- extra point: use of variables from script tags
