---
title: 'Markdown Syntax'
pubDate: 2026-03-30T19:20:00+02:00
lastUpdated: 2026-03-31T15:45:00+02:00
description: 'A memory aid for my brain that refuses to retain syntax, at times.'
author: 'Flipse'
image:
    url: '/assets/images/blog/markdown-hero.webp'
    alt: 'Cozy desk workspace.'
kind: notes
tags:
    - markdown
    - workflow
---

This is a collection of Markdown examples I will forget approximately three minutes after using them.

## Headings

Markdown supports six levels of headings.
You will only ever need two of them, but here are all six anyway.

`## H1` hey h1 is only for the big one.

`## H2` — The one you actually use.

### H3 — and sometimes When things get serious

#### H4 — This is not gonna happen

##### H5 — Why are we here

###### H6 — Please stop

## Paragraphs

This is a paragraph. It exists to contain thoughts, filler text, and excuses for why this post exists.

This text means nothing and exists solely to demonstrate that Markdown paragraphs do not care about your intentions or feelings.

If you leave a blank line, Markdown considers it a new paragraph.
If you forget the blank line, Markdown silently does not care.
if you need a `<br>` make two spacings after.

## Images

### Syntax

```markdown
![Alt text](/assets/images/blog/me_blog_test.gif)
```

![Alt text](/assets/images/blog/me_blog_test.gif)

If the image doesn’t load, at least the alt text will politely explain what _should_ have been there. For garden posts use /public folder for images.

## Blockquotes

The fancy blockquote. With a citation, within a `cite` element.

#### Syntax

```markdown
> This sounds important.
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> This sounds important.
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

#### Syntax

```markdown
> I think more people need to make out.<br>
> — <cite>Josh Homme [^1]</cite>
```

#### Output

> I think more people need to make out.<br>
> — <cite>Josh Homme [^1]</cite>

[^1]: I agree.

## Tables

Tables are annoying to maintain.. I will without a doubt not ever need this. unless..

| Thing  | Looks Useful | Actually Is |
| ------ | ------------ | ----------- |
| Tables | Yes          | Sometimes   |

## Code Blocks

Markdown supports fenced code blocks. You _will_ forget how many backticks are needed.

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

Lists are simple, right up until they aren’t. You're not gonna use nested lists because your brain won't handle that.

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

## Other Elements

abbr, sub, sup, kbd, mark. These exist, and you will forget about them until the exact moment you need them.

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
