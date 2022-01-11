---
title: Setting up your class workspace
description: 
---
Web development (all software development, actually) requires you to work with a lot of files. In this program, we don't prescribe (i.e. tell you how to do it) how you should organize your files and projects but here we list some tips and best practices.

Choose a system that works for you but be consistent!

See: [Files, directories and naming conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)

## SAIT-WBDV Workspace
It's recommended that you create a dedicated directory (workspace) for the code and materials you will be creating in this program. This directory can be placed in your `Documents` directory:

```html
/Users/your-username/Documents/sait-wbdv/
  ├─ assignments/
  ├─ code-journal/
  ├─ in-class/
  └─ projects/
```

### Assignments
You should bee your assignments separate from all other code. You can put them all into an `assignments` folder or maybe create parent directories for each course. It's up to you.

```html
/sait-wbdv/assignments/
  ├─ cpnt-200/
  ├─ cpnt-201/
  ├─ cpnt-260/
    ├─ a1/
      ├─ css/
      ├─ images/
      ├─ js/
      └─ index.html
    ├─ a2/
    ├─ a3/
    └─ a4/
  └─ etc/
```
### Code Journal
A large portion of your mark for each course will be submissions for your code journal.

```html
/sait-wbdv/code-journal/
  └─ README.md
```

Note: Placing all your journal entries in a single `README.md` is a good start but you may separate entries by date if you wish.

### Daily in-class code
In this program, you will be creating "throw-away" code each day (experiments, challenges, pair coding), it often makes sense to organize your code by date so it doesn't get in the way of your longer-term projects:

```html
/sait-wbdv/in-class/
  ├─ 2021-01-12-intro-to-git/
    ├─ hello-world/
    ├─ my-first-website/
    └─ etc/
  ├─ 2021-01-13-ux-for-devs/
  ├─ 2021-01-14-ui-for-devs/
  └─ 2021-01-17-etc-etc/
```

### Class/personal/work Projects
It's recommended that you create a dedicated workspace folder for your projects. If you have multiple contexts (i.e. personal vs work) that deal with code, you can make a separate folder for each.

```html
/sait-wbdv/projects/
  ├─ portfolio-website/
    ├─ css/
    ├─ images/
    ├─ js/
    └─ index.html
  ├─ cool-idea-1/
  ├─ flexbox-experiment
  └─ moms-baking-website/
```

