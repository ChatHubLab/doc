# 快速上手

在本节中，我们将指导你如何安装和配置 ChatHub，让你能快速地体验与 AI 模型的对话。

## 安装 Koishi

在使用 ChatHub 之前，你需要确保 [Node.js](https://nodejs.org/en) 版本在 v18 以上。

你可以使用 `node -v` 命令检查 Node.js 版本。

然后按照 [Koishi 官方文档](https://koishi.chat/zh-CN/) 来安装 Koishi。

## 配置聊天平台

安装 Koishi 后，你需要选择一个聊天平台来接入机器人，或使用 [沙盒环境](https://koishi.chat/zh-CN/manual/console/sandbox.html) 测试。

如你选择使用沙盒环境，可以直接跳到 [下一步](/guide/getting-started.html#安装前置依赖插件)。

如你选择接入实际的聊天平台，请参考以下链接：

- [接入 QQ](https://forum.koishi.xyz/t/topic/2502/1)
- [接入其他聊天平台](https://koishi.chat/zh-CN/manual/console/adapter.html)

## 安装前置依赖插件

接下来需要安装 ChatHub 的必要前置依赖插件，这些插件为 ChatHub 提供了基础的服务。

### 数据库插件

ChatHub 需要一个提供 `database` 服务的插件来存储会话信息等持久化数据。

我们推荐使用 `database-sqlite`，它自带在大部分 Koishi 环境里，轻量且开箱即用。

你也可以安装并配置其他在 Koishi 插件市场上的数据库插件，如 MySQL、MongoDB 等。

### 缓存插件

ChatHub 还需要一个提供 `cache` 服务的插件来存储某些临时配置。

我们推荐使用 `cache-database`，它几乎不需要配置。

需要注意，`cache` 服务版本需要 v2.0.0-alpha.0+。

### 可选插件

- `puppeteer` 插件：用于网页截图和本地 HTML 渲染。
- `censor` 服务插件：用于回复内容过滤。注意，有的插件不审核文本信息，请注意识别。
- `vits` 服务插件：用于语音合成。我们推荐使用 `open-vits`。

## 安装 ChatHub 主插件

搜索并安装 `@dingyi222666/chathub` 插件，这是 ChatHub 的主插件。
::: warning 注意
主插件本身不包含任何平台适配，后面还需要安装平台适配插件。
:::

## 安装平台适配插件

搜索并安装你需要的平台的适配插件，例如 `@dingyi222666/chathub-newbing-adapter`。

你可同时安装多个平台的适配插件，并通过命令切换。

## 配置主插件

进入主插件配置页面，以下是一些重要的配置项，其他配置项可在 [配置项](/guide/useful-configurations) 了解到：

- [`isProxy`](/guide/useful-configurations#代理设置)：是否使用代理，对国内用户**强烈推荐**开启。
- [`proxyAddress`](/guide/useful-configurations#代理设置)：代理地址，格式为 `http://host:port`。
- [`msgCooldown`](/guide/useful-configurations#回复选项)：全局冷却时间，避免请求过于频繁。
- [`outputMode`](/guide/useful-configurations#回复选项)：回复的输出格式，支持语音、文本、图片等。

## 配置模型平台

以 New Bing 为例，进入平台适配插件配置页面：

- [`cookie（可选）`](/guide/configure-model-platform/bing-chat.html#请求设置)：填写 New Bing 账号的 cookie。

配置好后启用相关插件即可。

::: warning 注意
如果你在国内环境使用，需要设置代理，请在`chathub`主插件的设置里设置代理(请求设置 -> [`isProxy`](/guide/useful-configurations#代理设置)，请求设置 -> [`proxyAddress`](/guide/useful-configurations#代理设置))。

:::

可以使用 [`chathub.listmodel`](/guide/useful-commands#模型列表) 或 [`模型列表`](/guide/useful-commands#模型列表) 查看已启用的平台。

## 设置默认模型

使用 [`chathub.setmodel`](/guide/useful-commands#设置模型) 或 [`切换模型`](/guide/useful-commands#设置模型) 命令设置默认聊天模型。

## 开始聊天

最后使用 [`chathub.chat`](/guide/useful-commands#模型对话) 或 [`聊天`](/guide/useful-commands#模型对话) 命令和设置好的 AI 模型聊天。

通过以上步骤，你已经配置好了 ChatHub，并且可以和 AI 模型聊天了。

接下来可以在下面的章节学习到更多的配置和使用方法。