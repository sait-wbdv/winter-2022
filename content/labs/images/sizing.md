---
title: Image Sizing
description: 
---

## Objective
Create small, medium and large images sizes from a full-sized source image.

## Prerequisites
- Image editor installed
- Openly licensed source images to work on. You can use [Lorem Picsum](https://picsum.photos/images) or [other directory of images](/library/open-content#images-and-icons).
- Empty folder structure to store your images

    ```html
    /images/
      ├─ source/
        ├─ image-1.jpg
        ├─ image-2.png
        └─ image-3.jpg
      ├─ full
      ├─ lg
      ├─ md
      └─ sm
    ```

## Instructions
Using the your source images you will create:
1. Find a few "source" images and save them in your `source` directory.
2. Using an image editor of your choice, make any corrections to the image (colour correction, remove imperfections, etc) and save the full sized image to your `full` directory.
3. Large image size:
    1. Using an image editor of your choice, create a large version of your file. You can decided what "large" is but it's usually wider than `1500px`. 
    2. Save this file in the `large`/`lg` directory.
4. Medium image size:
    1. Create a medium version of your file, usually between `750px` and `1000px`.
    2. Save this file in the `medium`/`md` directory.
5. Small image size:
    1. Create a small version of your file, usually around `500px`.
    2. Save this file in the `small`/`sm` directory.
