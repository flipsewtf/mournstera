---
title: 'Cheatsheet'
pubDate: 2025-12-17T13:30:00+01:00
description: 'Notes and reminders.'
author: 'Flipse'
# always /public in blog/garden posts
# image:
#     url: '/images/blog/image-file.webp'
#     alt: 'alt-text'
tags: ['references']
---

Stepping out of the Tumblr sandbox was.. an experience. Here's some stuff to keep me sane.

## Workflow

- Always open **the root folder of the repo** in VSCode (e.g., `GitHub\mournstera` and not the parent GitHub folder.

- VSCode's Source Control panel will then track only **that repo**, keeping changes, commits, and branches isolated.

- Opening the parent folder with multiple repos can mix changes and make commits confusing. Each repo folder is self-contained: commit, push, pull, etc., only affects that repo.

## Astro

- Run the dev server while working: `npm run dev` view at localhost:4321

- Build site for deployment `npm run build`

- Preview the production build locally `npm run preview`

- Delete the build folder `rm -rf dist`

> always Preview before pushing updates goddamnit

## Frontmatter

#### Timestamp

Always include +01:00 (winter) or +02:00 (summer) in frontmatter.

**Winter (CET)**

`2025-12-08T13:30:00+01:00`

**Summer (CEST)**

`2025-06-08T13:30:00+02:00`

#### Use template literals (backticks)

So Astro reads it as part of the string and not as the end of it.

#### SVGs

- svg files need `aria-hidden="true" focusable="false"` if decorative.

## Convert px to rem

converts px to rem in brain.

    16px = 1rem

    20 / 16 = 1.25rem.

    1px = 0.0625rem;
    2px = 0.125rem;
    3px = 0.1875rem;
    4px = 0.25rem;
    5px = 0.3125rem;
    6px = 0.375rem;
    7px = 0.4375rem;
    8px = 0.5rem;
    9px = 0.5625rem;
    10px = 0.625rem;
    11px = 0.6875rem;
    12px = 0.75rem;
    13px = 0.8125rem;
    14px = 0.875rem;
    15px = 0.9375rem;
    16px = 1rem;
    17px = 1.0625rem;
    18px = 1.125rem;
    19px = 1.1875rem;
    20px = 1.25rem;
    21px = 1.3125rem;
    22px = 1.375rem;
    23px = 1.4375rem;
    24px = 1.5rem;
    25px = 1.5625rem;
    25px = 1.625rem;
    32px = 2rem;

## Code comments

`// @ts-nocheck` tells VSCode to ignore TypeScript-style warnings in this JS file, like "possibly null" errors. But check code before doing so please.

`<!-- prettier-ignore -->` tells Prettier to not wrap that line that your ocd-filled corner of your brain hates. Please work towards not relying on it.
