---
title: Git Overview
description:
terminology:
    
---

## What is Git?
> Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems). 
- from [Wikipedia](https://en.wikipedia.org/wiki/Git)

## Why do we use it?
- **To download projects** to our systems. 
    - Try cloning the following to a `read-only` directory in your workspace:
        ```html
        $ git clone <clone-link>`
        ```
        - After cloning is complete, you will need to `cd` into the directory.
    - Example repos
        - [WBDV Winter 2022 website](https://github.com/sait-wbdv/winter-2022)
        - [Font Awesome](https://github.com/FortAwesome/Font-Awesome) - a collection of openly-licensed icons
        - [Reveal JS](https://github.com/hakimel/reveal.js/) - a framework for building slides in the browser

- **Code backups**: Git allows you to take snapshots of a directory (commits) which we can rollback to in case we royally screw up.
- **Syncing code**: If you work on two machines, like a home laptop and office system, you can use Git to sync your projects.
- **Collaboration with teammates**: Git allows multiple developers to work on the same file at the same time. Conflicts will happen but Git helps resolve them.
- **Deployment**: In industry, we use Git to sync our project code with a server to make it live.

## How does it work?
- At the end of the day, Git keeps track of *each line of code* in your project, including:
    - who created it.
    - every change made to it
    - who made each of those changes and when

## First-time Setup
- [Install Git](https://gist.github.com/acidtone/badeb5c8339648239fa0da9fc6a0abbd)
- [Set your identity](https://gist.github.com/acidtone/6ca4c62d88570732d3760904ef965e4d)
- Optional(?): [Set up your SSH keys](https://gist.github.com/acidtone/dd9ae11a238e9f14ad0b066298f35dc5)

## Extras
- [`vim` cheat sheet](https://devhints.io/vim)
- [Publish a webpage with Git and GitHub Pages](https://gist.github.com/acidtone/5d45f96bc11fada75038e552f9ba1a5c)
- [Create a merge conflict](https://gist.github.com/acidtone/d8c2e285c9b25fcb7443a4f0f4e4b4e6)
    - merge conflicts often happen in team environments but this is an activity to help you practice resolving conflicts by yourself.

        ![Screencap of a merge conflict in VS Code](/assets/images/library/merge-conflict.png "Screencap of a merge conflict in VS Code")

- Pair programming with Git: [Commit catch](https://gist.github.com/acidtone/3a7ff64489b4fc641f0b96be8edd561d)


## Common Errors
- [Troubleshooting common errors](https://gist.github.com/acidtone/ffb0268f5f717df9631eb0c8b48e97e7)
- Forgetting the `-m "commit message"` portion of a commit will open `vim` (or whatever command line text editor is set up) and you'll see a screen like this:
    ![Forgot a commit message](/assets/images/library/forgot-commit-message.png)

    - If this happens, it's easiest to just quit `vim` by typing `:q!` (see: [`vim` cheat sheet](https://devhints.io/vim))