import{_ as a,o as e,c as t,Q as o}from"./chunks/framework.4719a631.js";const i="/assets/plugin_market_pic1.b6f77459.png",r="/assets/plugin_newbing_pic1.3b0231bb.png",s="/assets/plugin_template_room.c476f68f.png",_=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1700331163000}'),l={name:"guide/getting-started.md"},h=o('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><p>本节，我们将指导你如何安装与配置 ChatLuna，让你能快速的和模型进行对话。</p><h2 id="安装-koishi" tabindex="-1">安装 Koishi <a class="header-anchor" href="#安装-koishi" aria-label="Permalink to &quot;安装 Koishi&quot;">​</a></h2><p>在使用 ChatLuna 之前，你需要确保 <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">Node.js</a> 版本在 v18 以上。</p><p>你可以使用 <code>node -v</code> 命令检查 Node.js 版本。</p><p>按照 <a href="https://koishi.chat/zh-CN/" target="_blank" rel="noreferrer">Koishi 官方文档</a> 来安装 Koishi。</p><h2 id="配置聊天平台" tabindex="-1">配置聊天平台 <a class="header-anchor" href="#配置聊天平台" aria-label="Permalink to &quot;配置聊天平台&quot;">​</a></h2><p>安装 Koishi 后，你需要选择一个聊天平台来接入机器人，或使用 <a href="https://koishi.chat/zh-CN/manual/console/sandbox.html" target="_blank" rel="noreferrer">沙盒环境</a> 测试。</p><p>如你选择使用沙盒环境，可以直接跳到 <a href="/guide/getting-started.html#安装前置依赖插件">下一步</a>。</p><p>如你选择接入实际的聊天平台，请参考以下链接：</p><ul><li><a href="https://koishi.chat/zh-CN/manual/console/adapter.html" target="_blank" rel="noreferrer">接入其他聊天平台</a></li></ul><h2 id="安装前置依赖插件" tabindex="-1">安装前置依赖插件 <a class="header-anchor" href="#安装前置依赖插件" aria-label="Permalink to &quot;安装前置依赖插件&quot;">​</a></h2><p>安装 ChatLuna 的必要前置依赖插件，这些插件为 ChatLuna 提供了基础的服务。</p><h3 id="数据库插件" tabindex="-1">数据库插件 <a class="header-anchor" href="#数据库插件" aria-label="Permalink to &quot;数据库插件&quot;">​</a></h3><p>ChatLuna 需要 <code>database</code> 服务，用于存储会话信息等持久化数据。</p><p>我们推荐使用 <code>database-sqlite</code>，它自带在大部分 Koishi 环境里，轻量且开箱即用。</p><p>你也可以安装并配置其他在 Koishi 插件市场上的数据库插件，如 MySQL、MongoDB 等。</p><h3 id="缓存插件" tabindex="-1">缓存插件 <a class="header-anchor" href="#缓存插件" aria-label="Permalink to &quot;缓存插件&quot;">​</a></h3><p>ChatLuna 还需要 <code>cache</code> 服务，用于存储某些临时配置。</p><p>我们推荐使用 <code>cache-database</code>，它几乎不需要配置。</p><h3 id="可选插件" tabindex="-1">可选插件 <a class="header-anchor" href="#可选插件" aria-label="Permalink to &quot;可选插件&quot;">​</a></h3><ul><li><code>puppeteer</code> 插件：用于渲染模型发送内容。</li><li><code>censor</code> 服务插件：用于回复内容过滤。注意，有的插件不审核文本信息，请注意识别。</li><li><code>vits</code> 服务插件：用于渲染模型回复，生成语音。</li></ul><h2 id="安装-chatluna-主插件" tabindex="-1">安装 ChatLuna 主插件 <a class="header-anchor" href="#安装-chatluna-主插件" aria-label="Permalink to &quot;安装 ChatLuna 主插件&quot;">​</a></h2><p>搜索并安装 <code>chatluna</code> 插件，这是 ChatLuna 的主插件。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>主插件本身不包含任何模型平台适配，后面还需要安装平台适配插件。</p></div><h2 id="安装模型适配器" tabindex="-1">安装模型适配器 <a class="header-anchor" href="#安装模型适配器" aria-label="Permalink to &quot;安装模型适配器&quot;">​</a></h2><p>安装你需要平台的模型适配器。在插件市场输入 ChatLuna + adapter 搜索。然后选择你需要的适配器安装。</p><p><img src="'+i+'" alt="image"></p><p>你可同时安装多个平台的模型适配器，后续可通过模版房间配置或房间里的模型配置项切换。</p><h2 id="配置主插件" tabindex="-1">配置主插件 <a class="header-anchor" href="#配置主插件" aria-label="Permalink to &quot;配置主插件&quot;">​</a></h2><p>进入主插件配置页面，以下是一些重要的配置项，其他配置项可在 <a href="/guide/useful-configurations.html">配置项</a> 了解到：</p><ul><li><a href="/guide/useful-configurations.html#代理设置"><code>isProxy</code></a>：是否使用代理，对国内用户<strong>强烈推荐</strong>开启。</li><li><a href="/guide/useful-configurations.html#代理设置"><code>proxyAddress</code></a>：代理地址，格式为 <code>http://host:port</code>。</li><li><a href="/guide/useful-configurations.html#回复选项"><code>outputMode</code></a>：回复的输出格式，支持语音、文本、图片等。</li></ul><h2 id="配置模型适配器" tabindex="-1">配置模型适配器 <a class="header-anchor" href="#配置模型适配器" aria-label="Permalink to &quot;配置模型适配器&quot;">​</a></h2><p>以 New Bing 为例，进入模型适配器的插件配置页面：</p><p><img src="'+r+'" alt="images"></p><p>在 cookies 配置项，点击添加项目，然后填写你<a href="/guild/useful-configurations.html">获取</a>来的 cookie。</p><p>填写完后右上角保存配置，启用插件即可。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果你在国内环境使用，需要设置代理，请在<code>ChatLuna</code>主插件的设置里设置代理(请求设置 -&gt; <a href="/guide/useful-configurations.html#代理设置"><code>isProxy</code></a>，请求设置 -&gt; <a href="/guide/useful-configurations.html#代理设置"><code>proxyAddress</code></a>)。</p></div><p>可使用 <a href="/guide/useful-commands.html#模型列表"><code>chatluna.model.list</code></a>查看已启用的平台。</p><h2 id="设置模版房间配置" tabindex="-1">设置模版房间配置 <a class="header-anchor" href="#设置模版房间配置" aria-label="Permalink to &quot;设置模版房间配置&quot;">​</a></h2><p>在控制面板里可设置模版房间的相关配置，如图所示：</p><p><img src="'+s+'" alt="images"></p><p>设置好模型，聊天模式和预设，右上角保存后即完成配置。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>对于初次使用 ChatLuna 的新手，我们推荐直接使用模型克隆房间。当你对 ChatLuna 有深入了解后，才推荐使用自定义的房间系统。</p></div><h2 id="开始聊天" tabindex="-1">开始聊天 <a class="header-anchor" href="#开始聊天" aria-label="Permalink to &quot;开始聊天&quot;">​</a></h2><p>最后使用 <a href="/guide/useful-commands.html#模型对话"><code>chatluna.chat.text</code></a> 命令开始和模型聊天。</p><p>通过以上步骤，你已经配置好了 ChatLuna，并且可以和模型聊天了。</p><p>接下来你可以在下面的章节学习到更多的配置和使用方法。</p>',48),c=[h];function n(d,p,u,m,f,g){return e(),t("div",null,c)}const k=a(l,[["render",n]]);export{_ as __pageData,k as default};
