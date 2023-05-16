## 暗色/亮色模式

### window.matchMedia('(prefers-color-scheme: dark)')

这是一个 JavaScript API，用于检测用户的首选颜色方案是否为暗色模式。以下是一个示例代码块，演示如何使用 "window.matchMedia('(prefers-color-scheme: dark)')"：
```ts

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (darkModeMediaQuery.matches) {
  // 用户首选颜色方案为暗色模式
  console.log('Dark mode is enabled');
} else {
  // 用户首选颜色方案为浅色模式
  console.log('Light mode is enabled');
}
```
在上面的代码中，我们首先定义了一个名为 "darkModeMediaQuery" 的变量，它使用 "window.matchMedia" 方法来检测用户的首选颜色方案是否为暗色模式。然后，我们使用 "matches" 属性来检查查询是否匹配。如果匹配，我们输出 "Dark mode is enabled"，否则输出 "Light mode is enabled"

