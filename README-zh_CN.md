
<p align="center"><img width="600px" src="https://raw.githubusercontent.com/jeffwcx/post.css/master/docs/logo.svg" alt="logo"></p>

<p align="center">
    <a href="https://github.com/jeffwcx/ohu-mobile/actions?query=branch%3Amaster" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/jeffwcx/post.css/.github/workflows/ci.yml?branch=master&style=for-the-badge" alt="CI" /></a>
    <a href="https://npm.im/post-style"><img src="https://img.shields.io/npm/v/post-style?style=for-the-badge" alt="Version" /></a>
</p>


### 中文 | [English](https://github.com/jeffwcx/post.css/blob/master/README.md)

`post.css`是可扩展的CSS样式库，用于美化用markdown文档(转为html后). 提供多种主题，可以访问[post-css.vercel.app](https://post-css.vercel.app)选择你喜爱的主题

## 使用

### 使用`<link>` 标签引入

```html
<!-- cdn -->
<link rel="stylesheet" href="https://unpkg.com/post-style/lib/post.min.css">
```
直接使用类名 `.markdown`
```html
<article class="markdown">
html文档...
</article>
```




### 通过npm引入

```
npm i -D post-style
```

在`js`中引入(使用webpack等打包工具)

```js
# 引入css
import 'post-style/lib/post.css';
```
```js
# 引入scss文件
import 'post-style';
```


在`scss`文件中可通过 `@import` 直接引入，此种方法可以覆盖一些变量来做定制
```scss
$post-theme: $post-theme-default; // 样式主题
$post-class: "markdown"; // 更改类名
@import "~post-style";
```

完整的`$post-theme-default`变量如下：

```scss
$default-font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
$default-font-family-code: monospace, Menlo, Monaco, "Courier New";
$post-theme-default: (
  "color-primary": #f7c600,
  "color-primary-bg": #fadd7a,
  "color-primary-text": #f6bc00,
  "color-text": #141414,
  "color-text-secondary": #8c8c8c,
  "color-on-primary": #ffffff,
  "color-on-primary-bg": #262626,
  "font-size-xs": 12px,
  "font-size-sm": 14px,
  "font-size-base": 16px,
  "font-size-md": 18px,
  "font-size-lg": 20px,
  "font-size-xl": 24px,
  "font-size-2xl": 28px,
  "font-family": $default-font-family,
  "font-family-code": $default-font-family-code
);
```
所以可以通过创建一个类似的`map`来实现一个主题：

```scss
$post-theme-self: (
  "color-primary": as you like,
  "color-primary-bg": as you like,
  "color-primary-text": as you like,
  "color-text": as you like,
  "color-text-secondary": as you like,
  "color-on-primary": as you like,
  "color-on-primary-bg": as you like,
  "font-size-xs": as you like,
  "font-size-sm": as you like,
  "font-size-base": as you like,
  "font-size-md": as you like,
  "font-size-lg": as you like,
  "font-size-xl": as you like,
  "font-size-2xl": as you like,
  "font-family": as you like,
  "font-family-code": as you like
);
```
直接覆盖即可完成换肤

```scss
$post-theme: $post-theme-self; // 样式主题
@import "~post-style";
```

