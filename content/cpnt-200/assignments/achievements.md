---
title: CPNT 200 Achievements
descriptions: small activities
weight: 20%
---

## Achievements

- Client content requirements achievement (5%)
- Paired schema achievement (5%)
- REST query achievement (5%)
- Netlify deployment achievement (5%)

## Client Content Requirements Achievement

- Due: End of Class February 28th
- Weight: 5%

For this achievement, you will be getting into the mind of a client and how they might be perceiving content types. As we are only just starting to learn about schemas and how content is organized in a cms, this will help you understand how you assume data to be organized and grouped prior to building schemas. It will also help you learn to interpret the needs of a non-tech-savvy client.

You will submit a document file that contains a set of content requirements. Later in the week, you will pair up with someone else in the class and build schemas of each other's content requirements in storyblok.

### Instructions

1. in word or google docs document, write a short (2-5 sentence) overview of what the site is for and what kinds of content you anticipate being able to edit.
   - ie: a clothing company, a personal blog, a skin care company, a band website...
   - ie: blog post, product, image gallery, tour dates, card, article, section...
2. Find examples of 3 content types somewhere on the web and take screen shots of them (these are meant as visual inspiration).
   - store these images in a folder that will be submitted along with your document
3. In your document, outline your functionality and content requirements for each content type.
   - Remember to write from a client perspective and not as a developer
4. Zip the folder of screen shots and the document describing your content requirements and submit the zipped file to brightspace

- for a 0.5 bonus, submit a sharable link to a document in the text submission of brightspace

### Rubric (5pts)

- 1 point for overview
- 1 point for description of each content type (3pts)
- 1 point for images that provide visuals of the content types

---

## Paired Schema Achievement

- Due: Wednesday March 2 @ 11:59PM
- Weight: 5%

For this achievement, you will be grouped into pairs and will attempt to build a storyblok content type component **one** of the content type requirements created by your team member (if they did not complete the 1st achievement, then you will build components for your own achievement 1).

- **important** Your component must make use of nested blok components for full marks.
- for this assignment, you will submit:
  - a screen cap of each finished component's ui from the content editor.
  - a formatted `.json` file of the content type's schema

### Instructions

- prep: copy the text describing the content type that you are creating from your partner's doc file into a `README.md` file.
  - make any planning notes in this file

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

## Netlify Deployment Achievement

- Due: Wednesday March 9th @ 11:59PM
- Weight: 5%

For this achievement, you will be writing a small set of instructions for yourself inside your storyblok cms. This is a research focused assignment that is intended for you to practice filtering essential information from online resources on web development.

### Instructions

1. Create a simple storyblok component named `article`. If you already have a component like this, use that one.
2. Look up a tutorial video on youtube for deploying websites to netlify (prioritize ones that focus on nuxt)
3. Watch the video and take notes on information that stands out to you in your cms.
   - Make sure to properly attribute the video referenced in your article. the reference should be it's own field and **not** just as text in your article.
4. Copy the schema of your article into a `.json` file in vscode and make sure that it is formatted
5. Submit the json file to brightspace

### Rubric (5pts)

- 1 point for submitting the filled out schema correctly
- 1 point for a correctly used reference field
- 3 points for your article
  - article content (2)
  - grammer and writing quality (1)
