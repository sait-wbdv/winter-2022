---
title: Assignment 2 - Collaboration and merge conflicts
description: For this assignment, you will create a code journal that will serve store future journal entries (dailies) for the rest of this program.
weight: 20%
date: 2022-01-17T23:59:00.000Z
---

## Instructions
You instructor will assign partners for this assignment. If there is a group of 3, 

### 1. Git Collaboration
Find a partner and collaborate on a repository. 
1. Choose one person to create a new repository on GitHub;
2. Once the repo is created, the owner should [invite their partner as a Collaborator](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).
3. Once you both have access to the repo [play at least two rounds of commit catch](https://gist.github.com/acidtone/3a7ff64489b4fc641f0b96be8edd561d) while [pair programming](https://gist.github.com/acidtone/caa20b2520814a94240043c40301024a).

The goals and content of the repository and paired coding session are up to you. Some suggestions:
- [Customize a static html template](/labs/git/deploy-static-template)
- Collaborate on a joint journal entry
- Write a poem together
- Pick a topic to Google and compile the best search results

### 2. Resolve a merge conflict
While pair coding, each of you should resolve a merge conflict.
1. Both of you edit the same line of code;
2. One of you should push your changes first (or you can race);
3. The other partner will then have to pull code and resolve a merge conflict
    - Note: you can practice merge conflicts on your own by following this activity: [Create a merge conflict on purpose (by yourself)](https://gist.github.com/acidtone/d8c2e285c9b25fcb7443a4f0f4e4b4e6)
4. Repeat the process, having the other partner resolve a conflict.

## Submission Instructions
Note: Although you will complete this assignment with a partner(s), this will be marked as an individual assignment. Each you will have to upload a submission to Brightspace.

Once you've completed your pair-code session, each of you has resolved a merge conflict and pushed your up-to-date code to GitHub:
- Download a ZIP of the repo from GitHub and submit to Brightspace;
- As a comment on the submission:
    - add a link to the repo you created with your partner(s);
    - add a link to the specific commit that YOU pushed to resolve the conflict (it has two parents listed [like this one](https://github.com/sait-wbdv/hello-conflict/commit/3accba9e0ec9abdbd542fc3ee05cf680fd792115)).

## Marking Rubric
10 points will be given for each of the following criteria, for a total of 20 points for this assignment:
1. Repo with two collaborators
    - repo is named `cpnt200-a2`;
    - repo has an owner and with the other partner(s) listed as a collaborator(s);
    - repo contains at least two alternating commits (NOT including the resolved conflict below) from each partner (four commits at minimum; six for a group of three) within the same time period (i.e. during a pair coding session).
2. Merge Commit:
    - A link to the specific merge commit is provided with submission.
    - The commit has two parents.
    - The commit has the message "Resolved conflict".
    - The resolving commit was pushed by YOU (i.e. each of you needs to resolve a conflict to receive marks for their submission). 