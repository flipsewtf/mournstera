---
title: 'Markdown References'
pubDate: 2025-12-06T15:45:00+01:00
lastUpdated: 2025-12-18T15:45:00+01:00
description: 'A short-term memory aid for a brain that refuses to retain syntax.'
author: 'Flipse'
# image:
#     url: '/images/blog/desk1.webp'
#     alt: 'Cozy desk workspace.'
tags: ['references', 'markdown']
---

This is a collection of Markdown examples I will forget approximately three minutes after using them.
It is mostly copied from Astro’s official example, with commentary added by someone who knows more than me.

## Headings

Markdown supports six levels of headings.
You will only ever need two of them, but here are all six anyway.

# H1 — Reserved for regret and page titles

## H2 — The one you actually use

### H3 — When things get serious

#### H4 — This is probably too much

##### H5 — Why are we here

###### H6 — Please stop

## Paragraphs

This is a paragraph. It exists to contain thoughts, filler text, and excuses for why this post exists.

This text means nothing and exists solely to demonstrate that Markdown paragraphs do not care about your intentions, your feelings, or motivations.

If you leave a blank line, Markdown considers it a new paragraph.
If you forget the blank line, Markdown silently judges you.  
if you need a `<br>` make two spacings after.

## Images

### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Output

![blog image placeholder](/images/blog/desk1.webp)

If the image doesn’t load, at least the alt text will politely explain what _should_ have been there. For blog/garden posts, please use /public folder for images.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Syntax

```markdown
> This sounds important.
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don’t communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Said by someone who definitely remembers Markdown better than I do.

## Tables

Tables look impressive and are immediately annoying to maintain.. I will without a doubt not ever need this.

| Thing  | Looks Useful | Actually Is |
| ------ | ------------ | ----------- |
| Tables | Yes          | Sometimes   |

## Code Blocks

Markdown supports fenced code blocks.
Yes, you _will_ forget how many backticks you need.

Strikethrough (GFM):

~~This was a bad idea~~

Task lists (GFM):

- [x] Pretend to be organised
- [ ] Actually be organised

Automatic links:

<https://example.com>

<email@example.com>

### Syntax Example

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
````

### Output

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

## List Types

Lists are simple, right up until they aren’t.

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- One thing
- Another thing
- Yet another thing

### Nested Lists

- Fruit
    - Apple
    - Orange
    - Banana
- Dairy
    - Milk
    - Cheese

1. First item
2. Second item
    1. Apple
    2. Orange
    3. Banana
3. Third item

## Other Elements — abbr, sub, sup, kbd, mark

These exist, and you will forget about them until the exact moment you need them.

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
