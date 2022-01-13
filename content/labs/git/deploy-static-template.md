---
title: Deploy a static website to GitHub Pages
description: 
---
In this Lab, you will find and deploy a free (optional) static website template to GiHub pages.

## Pre-requisites
- [Git installed](https://gist.github.com/acidtone/badeb5c8339648239fa0da9fc6a0abbd) and [configured](https://gist.github.com/acidtone/6ca4c62d88570732d3760904ef965e4d)
- free [GitHub account created](https://github.com/)

## Instructions
1. Search for a "[free static website template](https://www.google.com/search?q=free+static+website+template)" online.
2. Download the template files to your workspace.
3. Navigate to the root of the template folder using the terminal.
4. Initialize a new repo:
    
    ```html
    $ git init
    ```

5. Add all the template files to the staging area:

    ```html
    $ git add --all
    ```

    - You can also use `git add .`

6. Commit changes:

    ```html
    $ git commit -m "Initial commit"
    ```

7. Customize the template by making any changes to page titles, headings and/or navigation as you see fit.
8. Add and commit your changes as you did on Steps 5 and 6.
9. When you're ready, push your changes to GitHub:
    1. Create an empty repo on GitHub. DO NOT initialize with a README file (or license, gitignore files);
    2. You will be taken to an empty repo with sample commands to copy/paste;
    3. Copy the code listed under: "`…or push an existing repository from the command line`"
    4. Paste the code into your terminal and hit enter.
    5. Refresh your GitHub repo and you should see the new files from your remote repo!