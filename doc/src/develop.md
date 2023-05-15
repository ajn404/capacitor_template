## build

### 添加 rollup 插件

```shell
npm install --save-dev rollup-plugin-visualizer
```

vite.config.ts

```ts
import {visualizer} from 'rollup-plugin-visualizer';
...
export default defineConfig({
    plugins: [ visualizer() as PluginOption],
})
```

## dev

### 关于 eslint 和 prettier

"eslint" 是一个 JavaScript 代码检查工具，它可以帮助您发现代码中的错误、潜在的问题和不规范的代码风格。它可以根据您的配置文件中的规则来检查代码，并在发现问题时发出警告或错误。您可以使用 "eslint" 来确保您的代码符合特定的代码风格指南，例如 Airbnb、Google 或 Standard。
"prettier" 是一个代码格式化工具，它可以自动格式化您的代码，使其符合一定的代码风格。它可以自动调整缩进、换行符、引号等，并确保代码在不同的编辑器和环境中具有一致的外观。与 "eslint" 不同，"prettier" 不会检查代码中的错误或潜在问题，它只会格式化代码。
因此，"eslint" 和 "prettier" 的主要区别在于它们的功能。"eslint" 用于检查代码中的错误和潜在问题，并确保代码符合特定的代码风格指南，而 "prettier" 则用于格式化代码，使其具有一致的外观。当然，您可以将它们结合使用，以确保您的代码既符合规范，又具有一致的外观。


### 使用unplugin 收集 ionic组件和src/components下的组件

```ts
import Components from 'unplugin-vue-components/vite';
export default defineConfig({
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
      deep: true,
      resolvers: [
        //收集@ionic/vue的组件
        (componentName) => {
          if (componentName.startsWith('Ion'))
            return { name: componentName, from: '@ionic/vue' };
        },
      ],
    }),
})
```