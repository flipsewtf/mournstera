# Mournstera | Astro project

I'm diving into Astro as a complete beginner (my JavaScript skills are basic at best
and tainted by bad Tumblr habits).

This is basically a playground for learning and figuring out how to make the web bend
to my will without breaking down crying in the process. It also happens to be my
personal blog.

Built with [Astro](https://astro.build).

---

## Getting started

_Note to self, since I will forget._

```powershell
npm install
npm run dev
```

---

## Cheatsheet

Stepping out of the Tumblr sandbox was.. an experience. Here's some stuff to keep me sane.

### Workflow

- Always open **the root folder of the repo** in VSCode (e.g., `GitHub\mournstera`),
  not the parent GitHub folder.
- VSCode's Source Control panel will then track only **that repo**, keeping changes,
  commits, and branches isolated. Opening the parent folder with multiple repos can
  mix changes and make commits confusing.
- Each repo folder is self-contained: commit, push, pull, etc., only affects that repo.

### Astro commands

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site for deployment            |
| `npm run preview` | Preview the production build locally     |
| `rm -r -fo dist`     | Delete the build folder                  |

> Always preview before pushing updates goddamnit.

#### Vite cache

If something looks broken and shouldn't be, clear Vite's cache:

```powershell
rm -r -fo node_modules/.vite
```

#### Lucide icons

```astro
import {HandMetal} from '@lucide/astro';
```

### Frontmatter

#### Timestamps

Always include the timezone offset in frontmatter dates — Astro uses it to sort
and display dates correctly.

| Season        | Offset   | Example                     |
| ------------- | -------- | --------------------------- |
| Winter (CET)  | `+01:00` | `2025-12-08T13:30:00+01:00` |
| Summer (CEST) | `+02:00` | `2025-06-08T13:30:00+02:00` |

#### Strings with colons or special characters

Use template literals (backticks) for frontmatter values that contain colons or
quotes, otherwise the YAML parser reads the colon as a key/value separator and
breaks.

```yaml
title: `My Post: A Fancy Story`
```

### Code comments

| Comment                    | What it does                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `// @ts-nocheck`           | Tells VSCode to ignore TypeScript warnings in a JS file (e.g., "possibly null"). Check the code first before reaching for this. |
| `<!-- prettier-ignore -->` | Stops Prettier from reformatting the next line. Work towards not needing it.                                                    |

### Convert px to rem

`16px = 1rem`. Formula: divide the px value by 16.

So `20px ÷ 16 = 1.25rem`.

---

## Licence

Do whatever you want with the code. Please don't steal my writing or designs.
