<p><img width="600px" src="https://raw.githubusercontent.com/jeffwcx/post.css/master/docs/logo.svg" alt="logo"></p>

<p>
    <a href="https://github.com/jeffwcx/ohu-mobile/actions?query=branch%3Amaster" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/jeffwcx/post.css/.github/workflows/ci.yml?branch=master&style=for-the-badge" alt="CI" /></a>
    <a href="https://npm.im/post-style"><img src="https://img.shields.io/npm/v/post-style?style=for-the-badge" alt="Version" /></a>
    <a href="https://github.com/jeffwcx/post.css/blob/develop/LICENSE"><img src="https://img.shields.io/github/license/jeffwcx/post.css?style=for-the-badge" alt="License" /></a>
    <img src="http://img.badgesize.io/https://unpkg.com/post-style/lib/post.min.css?style=for-the-badge&compression=gzip&label=gzip" alt="gzip" />
    
</p>

### English | [中文](https://github.com/jeffwcx/post.css/blob/master/README-zh_CN.md) 

`post.css` is an extensible CSS style library used to beautify markdown documents (when converted to HTML). It provides multiple themes that can be accessed at [post-css.vercel.app](https://post-css.vercel.app) to choose your favorite theme.

## Features
+ Provides two themes: orange (default) and ice blue
+ Dark mode
+ Supports CSS variable customization

## Stylesheet

| Theme | Link |
| ----- | ----- |
| Full version (dev) | [https://unpkg.com/post-style/lib/post.css](https://unpkg.com/post-style/lib/post.css) |
| Full version (prod) | [https://unpkg.com/post-style/lib/post.min.css](https://unpkg.com/post-style/lib/post.min.css) |
| Default theme only (dev) | [https://unpkg.com/post-style/lib/post.default.css](https://unpkg.com/post-style/lib/post.default.css) |
| Default theme only (prod) | [https://unpkg.com/post-style/lib/post.default.min.css](https://unpkg.com/post-style/lib/post.default.min.css) |
| Default dark theme only (dev) | [https://unpkg.com/post-style/lib/post.dark.css](https://unpkg.com/post-style/lib/post.dark.css) |
| Default dark theme only (prod) | [https://unpkg.com/post-style/lib/post.dark.min.css](https://unpkg.com/post-style/lib/post.dark.min.css) |
| Ice blue theme only (dev) | [https://unpkg.com/post-style/lib/post.blue.css](https://unpkg.com/post-style/lib/post.blue.css) |
| Ice blue theme only (prod) | [https://unpkg.com/post-style/lib/post.blue.min.css](https://unpkg.com/post-style/lib/post.blue.min.css) |
| Ice blue dark theme only (dev) | [https://unpkg.com/post-style/lib/post.blue.dark.css](https://unpkg.com/post-style/lib/post.blue.dark.css) |
| Ice blue dark theme only (prod) | [https://unpkg.com/post-style/lib/post.blue.dark.min.css](https://unpkg.com/post-style/lib/post.blue.dark.min.css) |

## How to Use

### Use the `<link>` tag to import the full version

```html
<!-- CDN -->
<link rel="stylesheet" href="https://unpkg.com/post-style/lib/post.min.css">
```

Use the `.markdown-body` class directly

```html
<article class="markdown-body">
HTML document...
</article>
```

Dark mode

```html
<article class="markdown-body theme-dark">
HTML document...
</article>
```

Use the ice blue theme

```html
<article class="markdown-body theme-blue">
HTML document...
</article>
```

Ice blue dark mode

```html
<article class="markdown-body theme-blue-dark">
HTML document...
</article>
```

### Using `post.css` via NPM

```
npm i -D post-style
```

To import `post.css` in your `js` files (using a bundling tool such as Webpack):

```js
// Import the CSS file
import 'post-style/lib/post.css';
```
```js
// Import the SCSS file
import 'post-style';
```

In your `scss` files, you can import Post-Style directly using `@import`. This method allows you to customize some variables:

------

## How to Customize

### Using SCSS Variables

Use `$post-theme` to customize the theme:

```scss
// Style theme parameters
$post-theme: $post-theme-default;
// Root selector
$post-selector: ".markdown-body";
// Use only the default theme
@import "~post-style/src/default.scss";
// Use only the default dark theme
// @import "~post-style/src/dark.scss";
// Use only the blue theme
// @import "~post-style/src/blue.scss";
// Use only the dark blue theme
// @import "~post-style/src/blue-dark.scss";
```

The full `$post-theme-default` variable is as follows:

```scss
$default-font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
$default-font-family-code: monospace, Menlo, Monaco, "Courier New";
$post-theme-default: (
  "color-scheme": light,
  "color-primary": #f7c600,
  "color-primary-bg": #fadd7a,
  "color-primary-text": #f6bc00,
  "color-text": #141414,
  "color-text-secondary": #8c8c8c,
  "color-on-primary": #ffffff,
  "color-on-primary-bg": #262626,
  "color-bg": transparent,
  "font-size-base": 16px,
  "font-size-h1": 3em,
  "font-size-h2": 2.25em,
  "font-size-h3": 1.5em,
  "font-size-h4": 1.25em,
  "font-size-h5": 1.125em,
  "font-size-h6": 1em,
  "font-family": $default-font-family,
  "font-family-code": $default-font-family-code,

  // Quote
  "blockquote-text-color": #8c8c8c,
  "blockquote-symbol-content": "'“'",
  "blockquote-symbol-color": rgba(140, 140, 140, .5),
  "blockquote-symbol-size": 60px,
  "blockquote-symbol-bg": transparent,
  
  // Table
  "table-border-color": #d9d9d9,
  "table-bg": #fafafa,

  // Inline code
  "code-text-color": #141414,
  "code-bg-color": #fceaaf,

  // Code block
  "codeblock-bg": #434343,
  "codeblock-text-color": #fff,
  "codeblock-font-family": $default-font-family-code,
  "codeblock-font-size": 1em,

  // Divider
  "hr-height": 4px,
  "hr-bg": #f0f0f0,

  // Link 
  "link-text-color": #f6bc00,
  "link-code-text-color": #f6bc00,

  // List
  "list-bg-color": #fceaaf,

  // Paragraph
  "p-font-size": 1.125em,

  // Table
  "table-border-color": #d9d9d9,
  "table-bg": #fafafa,

  // Code highlight
  "highlight-text-color": #fff
);
```

So, you can create a similar map to implement a theme:

```scss
$post-theme-custom: (...);
```
Directly override to complete skin change:

```scss
$post-theme: $post-theme-custom;
@import "~post-style";
```

Or modify several parameters:

```scss
@use "sass:map";
$post-theme: map.merge($post-theme, (
  // Modify the base font size
  "font-size-base": 15px
)); // style theme
@import "~post-style";
```

### Customization through CSS variables

All keys of `$post-theme` have CSS variables, just add `--post-` in front of the variable to use the CSS variable:

```css
.markdown-body {
  --post-font-size-base: 15px;
}
```

## How to contribute

+ Fork the project
+ Start development
```bash
git clone https://github.com/yourname/post.css.git
cd post.css
pnpm i
# Create a branch
git checkout -b my-new-feature
# Develop
pnpm dev
# Build
pnpm build
# Build demo website
pnpm build-site
```
+ Commit changes to your branch `git commit -am 'Add some feature'`
+ Push your branch `git push origin my-new-feature`
+ Submit a pull request
