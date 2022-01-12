---
title: Git Overview
description:
terminology: 
---

## 1. What is Git?
- Git is version control software that help a software team manage changes to source code over time.
- See: [Git Terminology]({{ '/takeaways/git/terminology/' | url }})

## Why do we use it?
- *To download projects* to our systems. 
    - Try cloning the following to a `read-only` directory in your workspace using `git clone <clone-link>`:
        - [WBDV Winter 2022 website](https://github.com/sait-wbdv/winter-2022)
        - [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
        - 
- *Code backups*: Git allows you to take snapshots of a directory (commits) which we can rollback to in case we royally screw up.
- *Syncing code*: If you work on two machines, like a home laptop and office system, you can use Git to sync your projects.
- *Collaboration with teammates*: Git allows multiple developers to work on the same file at the same time. Conflicts will happen but Git helps resolve them.
- *Deployment*: In industry, we use Git to sync our project code with a server to make it live.

## How does it work?
- At the end of the day, Git keeps track of *each line of code* in your project, including:
    - who created it.
    - every change made to it
    - who made each of those changes and when