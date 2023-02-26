<p><img width="600px" src="https://raw.githubusercontent.com/jeffwcx/post.css/master/docs/logo.svg" alt="logo"></p>

<p>
    <a href="https://github.com/jeffwcx/ohu-mobile/actions?query=branch%3Amaster" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/jeffwcx/post.css/.github/workflows/ci.yml?branch=master&style=for-the-badge" alt="CI" /></a>
    <a href="https://npm.im/post-style"><img src="https://img.shields.io/npm/v/post-style?style=for-the-badge" alt="Version" /></a>
    <a href="https://github.com/jeffwcx/post.css/blob/develop/LICENSE"><img src="https://img.shields.io/github/license/jeffwcx/post.css?style=for-the-badge" alt="License" /></a>
    <img src="http://img.badgesize.io/https://unpkg.com/post-style/lib/post.min.css?style=for-the-badge&compression=gzip&label=gzip" alt="gzip" />
    
</p>

### 中文 | [English](https://github.com/jeffwcx/post.css/blob/master/README.md)

`post.css`是可扩展的CSS样式库，用于美化用markdown文档(转为html后). 提供多种主题，可以访问[post-css.vercel.app](https://post-css.vercel.app)选择你喜爱的主题

## 特性
+ 提供橘黄（默认）及冰蓝两种主题
+ 暗黑模式
+ 支持CSS变量定制


## 样式表

| 主题 | 链接 |
| ----- | ----- |
| 完整版(dev) | [https://unpkg.com/post-style/lib/post.css](https://unpkg.com/post-style/lib/post.css) |
| 完整版(prod) | [https://unpkg.com/post-style/lib/post.min.css](https://unpkg.com/post-style/lib/post.min.css) |
| 只有默认主题(dev) | [https://unpkg.com/post-style/lib/post.default.css](https://unpkg.com/post-style/lib/post.default.css) |
| 只有默认主题(prod) | [https://unpkg.com/post-style/lib/post.default.min.css](https://unpkg.com/post-style/lib/post.default.min.css) |
| 只有默认暗黑主题(dev) | [https://unpkg.com/post-style/lib/post.dark.css](https://unpkg.com/post-style/lib/post.dark.css) |
| 只有默认暗黑主题(prod) | [https://unpkg.com/post-style/lib/post.dark.min.css](https://unpkg.com/post-style/lib/post.dark.min.css) |
| 只有冰蓝主题(dev) | [https://unpkg.com/post-style/lib/post.blue.css](https://unpkg.com/post-style/lib/post.blue.css) |
| 只有冰蓝主题(prod) | [https://unpkg.com/post-style/lib/post.blue.min.css](https://unpkg.com/post-style/lib/post.blue.min.css) |
| 只有冰蓝暗黑主题(dev) | [https://unpkg.com/post-style/lib/post.blue.dark.css](https://unpkg.com/post-style/lib/post.blue.dark.css) |
| 只有冰蓝暗黑主题(prod) | [https://unpkg.com/post-style/lib/post.blue.dark.min.css](https://unpkg.com/post-style/lib/post.blue.dark.min.css) |


## 如何使用

### 使用`<link>` 标签引入完整版

```html
<!-- cdn -->
<link rel="stylesheet" href="https://unpkg.com/post-style/lib/post.min.css">
```
直接使用类名 `.markdown-body`
```html
<article class="markdown-body">
html文档...
</article>
```

暗黑模式

```html
<article class="markdown-body theme-dark">
html文档...
</article>
```

使用冰蓝主题

```html
<article class="markdown-body theme-blue">
html文档...
</article>
```

冰蓝暗黑模式

```html
<article class="markdown-body theme-blue-dark">
html文档...
</article>
```


### 通过npm引入使用

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

------

## 如何定制

### 使用SCSS变量定制

使用`$post-theme`可完成换肤
```scss
// 样式主题参数
$post-theme: $post-theme-default;
// 根选择器 
$post-selector: ".markdown-body";
// 只使用默认主题
@import "~post-style/src/default.scss";
// 只使用默认暗黑主题
// @import "~post-style/src/dark.scss";
// 只使用冰蓝主题
// @import "~post-style/src/blue.scss";
// 只使用冰蓝暗黑主题
// @import "~post-style/src/blue-dark.scss";
```

完整的`$post-theme-default`变量如下：

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

  // 引用参数
  "blockquote-text-color": #8c8c8c,
  "blockquote-symbol-content": "'“'",
  "blockquote-symbol-color": rgba(140, 140, 140, .5),
  "blockquote-symbol-size": 60px,
  "blockquote-symbol-bg": transparent,
  
  // 表格参数
  "table-border-color": #d9d9d9,
  "table-bg": #fafafa,

  // 行内代码参数
  "code-text-color": #141414,
  "code-bg-color": #fceaaf,

  // 块代码参数
  "codeblock-bg": #434343,
  "codeblock-text-color": #fff,
  "codeblock-font-family": $default-font-family-code,
  "codeblock-font-size": 1em,

  // 分割线参数
  "hr-height": 4px,
  "hr-bg": #f0f0f0,

  // 链接参数
  "link-text-color": #f6bc00,
  "link-code-text-color": #f6bc00,

  // 列表参数
  "list-bg-color": #fceaaf,

  // 段落参数
  "p-font-size": 1.125em,

  // 表格参数
  "table-border-color": #d9d9d9,
  "table-bg": #fafafa,

  // 代码高光参数
  "highlight-text-color": #fff
);
```
所以可以通过创建一个类似的`map`来实现一个主题：

```scss
$post-theme-custom: (...);
```
直接覆盖即可完成换肤

```scss
$post-theme: $post-theme-custom;
@import "~post-style";
```

或是修改几个参数
```scss
@use "sass:map";
$post-theme: map.merge($post-theme, (
  // 修改基础字体大小
  "font-size-base": 15px
)); // 样式主题
@import "~post-style";
```

### 通过CSS变量定制

`$post-theme` 有的参数CSS变量都有，只需要在变量前加`--post-`即可使用CSS变量
```css
.markdown-body {
  --post-font-size-base: 15px;
}
```

## 如何贡献

+ fork项目

+ 开始开发
```bash
git clone https://github.com/yourname/post.css.git
cd post.css
pnpm i
# 创建分支
git checkout -b my-new-feature
# 开发
pnpm dev
# 构建
pnpm build
# 构建demo网站
pnpm build-site
```

+ 提交到分支 `git commit -am 'Add some feature'`
+ 推送分支 `git push origin my-new-feature`
+ 提交Pull Request

