import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.4719a631.js";const b=JSON.parse('{"title":"koishi-plugin-chathub-lmsys-adapter","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure-model-platform/lmsys.md","filePath":"guide/configure-model-platform/lmsys.md","lastUpdated":1689603088000}'),d={name:"guide/configure-model-platform/lmsys.md"},l=r('<h1 id="koishi-plugin-chathub-lmsys-adapter" tabindex="-1">koishi-plugin-chathub-lmsys-adapter <a class="header-anchor" href="#koishi-plugin-chathub-lmsys-adapter" aria-label="Permalink to &quot;koishi-plugin-chathub-lmsys-adapter&quot;">​</a></h1><p><a href="https://www.npmjs.com/package/@dingyi222666/koishi-plugin-chathub-lmsys-adapter" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@dingyi222666/koishi-plugin-chathub-lmsys-adapter/next" alt="npm"></a></p><blockquote><p>这是一个适用于 <a href="https://github.com/ChatHubLab/chathub" target="_blank" rel="noreferrer">ChatHub</a> 的 <a href="https://lmsys.org/" target="_blank" rel="noreferrer">lmsys(Large Model Systems Organization)</a> 适配器插件，可以让你轻松地使用一些开源的对话模型。</p></blockquote><p>本章节将介绍如何使用本插件来实现与 lmsys 的聊天互动。本章节包括以下内容：</p><ul><li><a href="#如何使用">如何使用？</a></li><li><a href="#常见问题">常见问题</a></li><li><a href="#配置项">配置项</a></li></ul><h2 id="如何使用" tabindex="-1">如何使用？ <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用？&quot;">​</a></h2><ol><li>在插件市场安装本插件(<code>chathub-lmsys-adapter</code>)，并确保安装了本插件所依赖的前置插件。</li><li>如果你在国内环境，需要设置代理，请在<code>chathub</code>主插件的设置里开启代理(请求设置 -&gt; isProxy，请求设置 -&gt; proxyAddress)。</li><li>完成后，你可以在设置里选择你想要的模型作为默认模型，然后就可以开始和模型聊天了。</li></ol><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="什么是-lmsys" tabindex="-1">什么是 lmsys？ <a class="header-anchor" href="#什么是-lmsys" aria-label="Permalink to &quot;什么是 lmsys？&quot;">​</a></h3><p>lmsys 是一个提供大规模对话模型服务的组织，它支持一些开源的对话模型，如 GPT-3、GPT-Neo、GPT-J 等。你可以在 <a href="https://lmsys.org/" target="_blank" rel="noreferrer">lmsys 官网</a> 了解更多信息。</p><h3 id="如何获取-lmsys-的-api-密钥" tabindex="-1">如何获取 lmsys 的 API 密钥？ <a class="header-anchor" href="#如何获取-lmsys-的-api-密钥" aria-label="Permalink to &quot;如何获取 lmsys 的 API 密钥？&quot;">​</a></h3><p>你需要在 <a href="https://lmsys.org/" target="_blank" rel="noreferrer">lmsys 官网</a> 注册一个账号，并申请一个 API 密钥。你可以在 <a href="https://docs.lmsys.org/" target="_blank" rel="noreferrer">lmsys 文档</a> 查看如何申请和使用 API 密钥。</p><h3 id="如何选择不同的对话模型" tabindex="-1">如何选择不同的对话模型？ <a class="header-anchor" href="#如何选择不同的对话模型" aria-label="Permalink to &quot;如何选择不同的对话模型？&quot;">​</a></h3><p>你可以使用 <a href="/guide/useful-commands.html#模型列表"><code>chathub.listmodel</code></a> 或 <a href="/guide/useful-commands.html#模型列表"><code>模型列表</code></a> 查看可用的模型列表。</p><p>接下来，你可以使用 <a href="/guide/useful-commands.html#设置模型"><code>chathub.setmodel</code></a> 或 <a href="/guide/useful-commands.html#设置模型"><code>切换模型</code></a> 命令设置聊天模型。</p><p>例如，如果你想要使用 vicuna 模型，你可以输入 <code>切换模型 lmsys/vicuna</code>。</p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><p>介绍 <code>koishi-plugin-chathub-lmsys-adapter</code> 插件的配置项，以及它们的含义和作用。</p><h3 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-label="Permalink to &quot;全局设置&quot;">​</a></h3><table><thead><tr><th>配置项</th><th>类型</th><th>必填</th><th>默认值</th><th>作用</th></tr></thead><tbody><tr><td>chatConcurrentMaxSize</td><td><code>number</code></td><td>否</td><td><code>1</code></td><td>设置当前适配器适配的模型的最大并发聊天数</td></tr><tr><td>chatTimeLimit</td><td><code>number</code> 或 <code>Computed&lt;Awaitable&lt;number&gt;&gt;</code></td><td>否</td><td><code>20</code></td><td>设置每小时的调用限额（次数）</td></tr><tr><td>timeout</td><td><code>number</code></td><td>否</td><td><code>200000</code></td><td>设置请求超时时间（毫秒）</td></tr><tr><td>maxRetries</td><td><code>number</code></td><td>否</td><td><code>3</code></td><td>设置模型请求失败后的最大重试次数</td></tr></tbody></table><h3 id="对话设置" tabindex="-1">对话设置 <a class="header-anchor" href="#对话设置" aria-label="Permalink to &quot;对话设置&quot;">​</a></h3><h4 id="formatmessages" tabindex="-1">formatMessages <a class="header-anchor" href="#formatmessages" aria-label="Permalink to &quot;formatMessages&quot;">​</a></h4><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li><li>描述：是否使用历史聊天消息作为对话模型的上下文。如果为 <code>true</code>，则会将用户和模型之间的最近几条消息拼接成一个字符串，作为对话模型的输入。如果为 <code>false</code>，则只会将用户的当前消息作为对话模型的输入。</li></ul><hr><p>总结：</p><p>本章节介绍了如何使用 <code>koishi-plugin-chathub-lmsys-adapter</code> 插件来实现与 lmsys 的聊天互动。本章节包括了以下内容：</p><ul><li>如何安装和配置本插件</li><li>如何解决一些常见问题</li><li>如何定制本插件的配置项</li></ul><p>希望本章节对你有所帮助，如果你有任何问题或建议，请随时联系我们。谢谢！</p>',28),o=[l];function s(i,h,c,m,n,u){return a(),t("div",null,o)}const f=e(d,[["render",s]]);export{b as __pageData,f as default};