---
layout: '../../layouts/snippet.astro'
title: 'How to use Git Revert'
slug: git-revert
author: Andrius Lima
category: 'snippet'
tags: ['git']
date: 2025/02/02
modified: 02/02/2025
description: 'Code snippets about how to use git revert'
---
The `git revert` command expects a list of commit references.

The changes made by each commit will be reverted and a new commit will be made with the message: `Revert "[REVERTED COMMIT MSG]"`

This command expects your working tree to be clean, if you want to throw away your local changes checkout `git reset`

The command might me misleading.
It does not revert the actual commit - as in, it does not remove the commit from your git history.
It creates a **new commit** that revert the changes from the specified commits.

## Command options
```bash
git revert <commit>... [--[no-]edit] [-n] [-m <parent-number>] [-s] [-S[<keyid>]] 
```

## To revert the last commit
```bash
git revert HEAD
```
The command above will:
1. Get the changes from the latest commit.
2. Reverse the changes.
3. Commit the reversed changes.

## Nice options to use
### Edit message
```bash
git revert HEAD --edit
```
This option will open your editor and prompts you to edit the revert commit message.

### Stage changes
```bash
git revert HEAD --no-commit
```
This option will not create a new commit. It will leave the reverse changes in your working tree.

## Resources

Checkout the official [documentation](https://git-scm.com/docs/git-revert) for full details