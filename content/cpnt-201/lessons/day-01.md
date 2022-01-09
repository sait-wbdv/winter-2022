---
title: VS Code, READMEs and the Command Line
description: The command line is one of the first tools you'll be learning as a dev. Your friends and family will think you're hacking the NSA when you're really just listing directory contents.
date: 2022-01-11T15:00:00.000Z
released: true
homework:
  - title: Pre-requisites
    tasks:
      - title: Git installed
        link: https://git-scm.com/download/win
        description: Windows users will need Git Bash (or similar bash terminal), which is installed with Git. The Command Prompt is not recommended. Mac and Unix use bash terminals by default.
  - title: Files, directories and the command line
    tasks:
      - title: Files, directories and naming conventions
        link: https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984
        description: A big part of being an effective coder is keeping your development workspace tidy. Following good conventions is a great start towards that goal.
      - title: Command line basics
        link: https://gist.github.com/acidtone/316d2bd9cf59f841684dbd68ffc3ee95
        description: A quick summary of the `pwd`, `ls` and `cd` terminal commands.
  - title: Extras (optional)
    tasks:
      - title: Basic and Essential Command Lines Every Web Designers Should Grasp
        link: https://www.hongkiat.com/blog/web-designers-essential-command-lines/
        description: 
      - title: VS Code's Integrated Terminal
        link: https://code.visualstudio.com/docs/editor/integrated-terminal
        description: 

---


<homeWork :home-work="homework">
</homeWork>

---

## Terminology


## VS Code setup
### Configuration
- Set indents to `2 spaces`
### Recommended extensions
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)

## Command line basics
### Materials
- Gist: [Command line basics](https://gist.github.com/acidtone/316d2bd9cf59f841684dbd68ffc3ee95)
    - Optional: [Basic & Essential Command Lines Every Web Designers Should Grasp](https://www.hongkiat.com/blog/web-designers-essential-command-lines/)
    - Optional: [VS Code's Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)

### Activity: Follow the white rabbit
A command line challenge:
1. Download or clone [this directory] into your workspace
2. Navigate to the root of this directory in your terminal
3. There is an image of a white rabbit somewhere in this directory. Navigate to it using the `pwd`, `cd` and `ls` commands.
4. Daily: Take a screencap of your terminal history with a `ls` showing that you're in the same directory as the white rabbit image.