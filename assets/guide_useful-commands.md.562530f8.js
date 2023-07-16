import{_ as e,o as t,c as a,V as s}from"./chunks/framework.d3b95951.js";const m=JSON.parse('{"title":"指令列表","description":"","frontmatter":{},"headers":[],"relativePath":"guide/useful-commands.md","filePath":"guide/useful-commands.md","lastUpdated":1689483803000}'),o={name:"guide/useful-commands.md"},c=s('<h1 id="指令列表" tabindex="-1">指令列表 <a class="header-anchor" href="#指令列表" aria-label="Permalink to &quot;指令列表&quot;">​</a></h1><p>本章节介绍了 <code>chathub</code> 模块提供的所有命令，以及它们的用法和参数。这些命令可以在聊天中使用，以控制聊天链的行为和配置。</p><h2 id="chathub" tabindex="-1">chathub <a class="header-anchor" href="#chathub" aria-label="Permalink to &quot;chathub&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub</span></span></code></pre></div><p>该命令用于查看所有子命令，需要至少 1 级权限。该命令有以下子命令，可以用来控制不同的聊天功能和配置。</p><div class="tip custom-block"><p class="custom-block-title">用户权限</p><p>基于 Koishi 内部默认的 <a href="https://koishi.chat/zh-CN/manual/usage/permission.html#%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90" target="_blank" rel="noreferrer">权限系统</a>，它为每个用户赋予了一个权限等级。</p></div><h3 id="交互式对话" tabindex="-1">交互式对话 <a class="header-anchor" href="#交互式对话" aria-label="Permalink to &quot;交互式对话&quot;">​</a></h3><ul><li><a href="/guide/useful-commands.html#chathub-chat"><code>chathub.chat</code></a>: 开始和模型进行对话</li><li><a href="/guide/useful-commands.html#chathub-voice"><code>chathub.voice</code></a>: 和模型进行对话并输出为语音</li></ul><h3 id="会话管理" tabindex="-1">会话管理 <a class="header-anchor" href="#会话管理" aria-label="Permalink to &quot;会话管理&quot;">​</a></h3><ul><li><a href="/guide/useful-commands.html#chathub-queryconverstion"><code>chathub.queryconverstion</code></a>: 查询会话列表</li><li><a href="/guide/useful-commands.html#chathub-deleteconverstaion"><code>chathub.deleteconverstaion</code></a>: 删除会话</li><li><a href="/guide/useful-commands.html#chathub-deleteallconverstaion"><code>chathub.deleteallconverstaion</code></a>: 删除和你相关的所有会话</li><li><a href="/guide/useful-commands.html#chathub-reset"><code>chathub.reset</code></a>: 重置会话记录</li></ul><h3 id="模型管理" tabindex="-1">模型管理 <a class="header-anchor" href="#模型管理" aria-label="Permalink to &quot;模型管理&quot;">​</a></h3><ul><li><a href="/guide/useful-commands.html#chathub-listmodel"><code>chathub.listmodel</code></a>: 列出所有目前支持的模型</li><li><a href="/guide/useful-commands.html#chathub-setmodel"><code>chathub.setmodel</code></a>: 设置当前默认使用的模型</li></ul><h3 id="嵌入模型和向量存储管理" tabindex="-1">嵌入模型和向量存储管理 <a class="header-anchor" href="#嵌入模型和向量存储管理" aria-label="Permalink to &quot;嵌入模型和向量存储管理&quot;">​</a></h3><ul><li><a href="/guide/useful-commands.html#chathub-listembeddings"><code>chathub.listembeddings</code></a>: 列出所有目前支持的嵌入模型</li><li><a href="/guide/useful-commands.html#chathub-setembeddings"><code>chathub.setembeddings</code></a>: 设置默认使用的嵌入模型</li><li><a href="/guide/useful-commands.html#chathub-listvectorstore"><code>chathub.listvectorStore</code></a>: 列出所有目前支持的向量数据库</li><li><a href="/guide/useful-commands.html#chathub-setvectorstore"><code>chathub.setvectorstore</code></a>: 设置默认使用的向量数据库</li></ul><h3 id="预设管理" tabindex="-1">预设管理 <a class="header-anchor" href="#预设管理" aria-label="Permalink to &quot;预设管理&quot;">​</a></h3><ul><li><a href="/guide/useful-commands.html#chathub-listpreset"><code>chathub.listpreset</code></a>: 列出所有目前支持的预设</li><li><a href="/guide/useful-commands.html#chathub-setpreset"><code>chathub.setpreset</code></a>: 设置当前使用的预设</li><li><a href="/guide/useful-commands.html#chathub-resetpreset"><code>chathub.resetpreset</code></a>: 重置为默认使用的预设 (chatgpt 预设)</li><li><a href="/guide/useful-commands.html#chathub-addpreset"><code>chathub.addpreset</code></a>: 添加一个预设</li><li><a href="/guide/useful-commands.html#chathub-deletepreset"><code>chathub.deletepreset</code></a>: 删除一个预设</li></ul><h3 id="数据管理" tabindex="-1">数据管理 <a class="header-anchor" href="#数据管理" aria-label="Permalink to &quot;数据管理&quot;">​</a></h3><ul><li><a href="/guide/useful-commands.html#chathub-wipe"><code>chathub.wipe</code></a>: 清空 chathub 的所有使用数据</li><li><a href="/guide/useful-commands.html#chathub-listchatmode"><code>chathub.listchatmode</code></a>: 列出目前支持的聊天模式</li></ul><h2 id="chathub-子命令" tabindex="-1">chathub 子命令 <a class="header-anchor" href="#chathub-子命令" aria-label="Permalink to &quot;chathub 子命令&quot;">​</a></h2><h3 id="交互式对话-1" tabindex="-1">交互式对话 <a class="header-anchor" href="#交互式对话-1" aria-label="Permalink to &quot;交互式对话&quot;">​</a></h3><h4 id="chathub-chat" tabindex="-1">chathub.chat <a class="header-anchor" href="#chathub-chat" aria-label="Permalink to &quot;chathub.chat&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.chat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">message:tex</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于发送文本消息给模型，并接收模型的回复，需要至少 1 级权限。执行后会根据当前的聊天模式和模型，生成一条回复消息，并显示在聊天界面上。</p><p>该子命令有一个必选参数 <code>&lt;message:text&gt;</code>，表示要发送给模型的文本内容。如果文本内容为空或无效，会返回一个错误信息。</p><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-c &lt;chatMode:string&gt;</td><td>选择聊天模式，可以是 <code>Balanced</code>、<code>Creative</code> 或 <code>Precise</code></td><td>1</td></tr><tr><td>-m &lt;model:string&gt;</td><td>选择聊天模型，可以是 <code>chatgpt</code>、<code>chatgpt2</code> 或 <code>chatgpt3</code></td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>聊天</code>，可以用来替代 <code>chathub.chat</code>。</p><h4 id="chathub-voice" tabindex="-1">chathub.voice <a class="header-anchor" href="#chathub-voice" aria-label="Permalink to &quot;chathub.voice&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.voice</span><span style="color:#A6ACCD;"> [model:string] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">message:text</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于发送文本消息给模型，并接收模型的回复，并将回复转换为语音，需要至少 1 级权限。执行后会根据当前的聊天模式和模型，生成一条回复消息，并调用语音服务将其转换为语音文件，并播放在聊天界面上。</p><p>该子命令有两个参数:</p><ul><li><code>[model:string]</code>:表示要切换到的模型名称。如果不指定，则保持当前模型不变。如果指定了该参数，则必须在其后加上一个空格，然后再输入文本内容。</li><li><code>&lt;message:text&gt;</code>:表示要发送给模型的文本内容。如果没有指定 model 参数，则使用 message 参数作为消息内容。如果文本内容为空或无效，会返回一个错误信息。</li></ul><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-c &lt;chatMode:string&gt;</td><td>选择聊天模式（目前还不可用）</td><td>1</td></tr><tr><td>-s &lt;speakerId:number&gt;</td><td>语音服务的目标人物的ID，可以是 0、1、2 或 3</td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>转语音聊天</code>，可以用来替代 <code>chathub.voice</code>。</p><h3 id="会话管理-1" tabindex="-1">会话管理 <a class="header-anchor" href="#会话管理-1" aria-label="Permalink to &quot;会话管理&quot;">​</a></h3><h4 id="chathub-queryconverstion" tabindex="-1">chathub.queryconverstion <a class="header-anchor" href="#chathub-queryconverstion" aria-label="Permalink to &quot;chathub.queryconverstion&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.queryconverstion</span><span style="color:#A6ACCD;"> [model:string]</span></span></code></pre></div><p>该子命令用于查询会话列表，需要至少 1 级权限。执行后会返回一个列表，显示所有与当前用户相关的会话及其信息。</p><p>该子命令有一个可选参数 <code>[model:string]</code>，表示要查询的模型名称。如果不指定，则查询所有模型的会话。</p><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-m &lt;model:string&gt;</td><td>选择模型，可以是 <code>chatgpt</code>、<code>chatgpt2</code> 或 <code>chatgpt3</code></td><td>1</td></tr><tr><td>-c &lt;chatMode:string&gt;</td><td>选择聊天模式，可以是 <code>Balanced</code>、<code>Creative</code> 或 <code>Precise</code></td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>会话列表</code>，可以用来替代 <code>chathub.queryconverstion</code>。</p><h4 id="chathub-deleteconverstaion" tabindex="-1">chathub.deleteconverstaion <a class="header-anchor" href="#chathub-deleteconverstaion" aria-label="Permalink to &quot;chathub.deleteconverstaion&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.deleteconverstaion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">id:strin</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于删除会话，需要至少 1 级权限。执行后会根据指定的会话 ID，从数据库中删除对应的会话记录，并重置聊天状态。</p><p>该子命令有一个必选参数 <code>&lt;id:string&gt;</code>，表示要删除的会话 ID。如果不存在该 ID 的会话，会返回一个错误信息。</p><p>该子命令没有可选参数。</p><p>该子命令还有一个别名 <code>删除会话</code>，可以用来替代 <code>chathub.deleteconverstaion</code>。</p><h4 id="chathub-deleteallconverstaion" tabindex="-1">chathub.deleteallconverstaion <a class="header-anchor" href="#chathub-deleteallconverstaion" aria-label="Permalink to &quot;chathub.deleteallconverstaion&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.deleteallconverstaion</span></span></code></pre></div><p>该子命令用于删除和你相关的所有会话，需要至少 3 级权限。执行后会从数据库中删除所有与当前用户相关的会话记录，并重置聊天状态。</p><p>该子命令没有参数。</p><p>该子命令还有一个别名 <code>删除所有会话</code>，可以用来替代 <code>chathub.deleteallconverstaion</code>。</p><h4 id="chathub-reset" tabindex="-1">chathub.reset <a class="header-anchor" href="#chathub-reset" aria-label="Permalink to &quot;chathub.reset&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.reset</span><span style="color:#A6ACCD;"> [model:string]</span></span></code></pre></div><p>该子命令用于重置会话记录（注意不会清除长期记忆），需要至少 1 级权限。执行后会清空当前会话的聊天历史，并重新初始化聊天链的状态。</p><p>该子命令有一个可选参数 <code>[model:string]</code>，表示要重置为的模型名称。如果不指定，则保持当前模型不变。</p><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-c &lt;chatMode:string&gt;</td><td>选择聊天模式，可以是 <code>Balanced</code>、<code>Creative</code> 或 <code>Precise</code></td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>重置会话</code>，可以用来替代 <code>chathub.reset</code>。</p><h3 id="模型管理-1" tabindex="-1">模型管理 <a class="header-anchor" href="#模型管理-1" aria-label="Permalink to &quot;模型管理&quot;">​</a></h3><h4 id="chathub-listmodel" tabindex="-1">chathub.listmodel <a class="header-anchor" href="#chathub-listmodel" aria-label="Permalink to &quot;chathub.listmodel&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.listmodel</span></span></code></pre></div><p>该子命令用于列出所有目前支持的模型，需要至少 1 级权限。模型是聊天链的核心组件，负责生成聊天内容。目前支持的模型有 <code>chatgpt</code>、<code>chatgpt2</code> 和 <code>chatgpt3</code>。</p><p>该子命令没有参数，执行后会返回一个列表，显示所有可用的模型及其简介。</p><p>该子命令还有一个别名 <code>模型列表</code>，可以用来替代 <code>chathub.listmodel</code>。</p><h4 id="chathub-setmodel" tabindex="-1">chathub.setmodel <a class="header-anchor" href="#chathub-setmodel" aria-label="Permalink to &quot;chathub.setmodel&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.setmodel</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">mode</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于设置当前群聊/私聊默认使用的模型，需要至少 1 级权限。执行后会根据指定的模型名称，修改聊天链的配置，并重置聊天状态。</p><p>该子命令有一个必选参数 <code>&lt;model&gt;</code>，表示要切换到的模型名称。如果不存在该名称的模型，会返回一个错误信息。</p><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-g</td><td>也设置为全局会话默认的模型？如果指定了该参数，则所有新建的会话都会使用该模型</td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>切换模型</code>，可以用来替代 <code>chathub.setmodel</code>。</p><h3 id="嵌入模型和向量存储管理-1" tabindex="-1">嵌入模型和向量存储管理 <a class="header-anchor" href="#嵌入模型和向量存储管理-1" aria-label="Permalink to &quot;嵌入模型和向量存储管理&quot;">​</a></h3><h4 id="chathub-listembeddings" tabindex="-1">chathub.listembeddings <a class="header-anchor" href="#chathub-listembeddings" aria-label="Permalink to &quot;chathub.listembeddings&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.listembeddings</span></span></code></pre></div><p>该子命令用于列出所有目前支持的嵌入模型，需要至少 1 级权限。嵌入模型是一种将文本转换为向量的方法，可以用来计算文本之间的相似度或语义关系。目前支持的嵌入模型有 <code>bert</code>、<code>word2vec</code> 和 <code>fasttext</code>。</p><p>该子命令没有参数，执行后会返回一个列表，显示所有可用的嵌入模型及其简介。</p><p>该子命令还有一个别名 <code>嵌入模型列表</code>，可以用来替代 <code>chathub.listembeddings</code>。</p><h4 id="chathub-listvectorstore" tabindex="-1">chathub.listvectorStore <a class="header-anchor" href="#chathub-listvectorstore" aria-label="Permalink to &quot;chathub.listvectorStore&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.listvectorStore</span></span></code></pre></div><p>该子命令用于列出所有目前支持的向量数据库，需要至少 1 级权限。向量数据库是一种存储和查询向量的工具，可以用来快速检索与给定向量最相似的向量。目前支持的向量数据库有 <code>faiss</code>、<code>annoy</code> 和 <code>nmslib</code>。</p><p>该子命令没有参数，执行后会返回一个列表，显示所有可用的向量数据库及其简介。</p><p>该子命令还有一个别名 <code>向量数据库列表</code>，可以用来替代 <code>chathub.listvectorStore</code>。</p><h4 id="chathub-setembeddings" tabindex="-1">chathub.setembeddings <a class="header-anchor" href="#chathub-setembeddings" aria-label="Permalink to &quot;chathub.setembeddings&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.setembeddings</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">embeddings:strin</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于设置默认使用的嵌入模型，需要至少 1 级权限。执行后会根据指定的嵌入模型名称，修改聊天链的配置，并重置聊天状态。</p><p>该子命令有一个必选参数 <code>&lt;embeddings:string&gt;</code>，表示要切换到的嵌入模型名称。如果不存在该名称的嵌入模型，会返回一个错误信息。</p><p>该子命令没有可选参数。</p><p>该子命令还有一个别名 <code>设置嵌入模型</code>，可以用来替代 <code>chathub.setembeddings</code>。</p><h4 id="chathub-setvectorstore" tabindex="-1">chathub.setvectorstore <a class="header-anchor" href="#chathub-setvectorstore" aria-label="Permalink to &quot;chathub.setvectorstore&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.setvectorstore</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">vectorStore:strin</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于设置默认使用的向量数据库，需要至少 1 级权限。执行后会根据指定的向量数据库名称，修改聊天链的配置，并重置聊天状态。</p><p>该子命令有一个必选参数 <code>&lt;vectorStore:string&gt;</code>，表示要切换到的向量数据库名称。如果不存在该名称的向量数据库，会返回一个错误信息。</p><p>该子命令没有可选参数。</p><p>该子命令还有一个别名 <code>设置向量数据库</code>，可以用来替代 <code>chathub.setvectorstore</code>。</p><h3 id="预设管理-1" tabindex="-1">预设管理 <a class="header-anchor" href="#预设管理-1" aria-label="Permalink to &quot;预设管理&quot;">​</a></h3><h4 id="chathub-listpreset" tabindex="-1">chathub.listpreset <a class="header-anchor" href="#chathub-listpreset" aria-label="Permalink to &quot;chathub.listpreset&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.listpreset</span></span></code></pre></div><p>该子命令用于列出所有目前支持的预设，需要至少 1 级权限。预设是一组聊天链的参数，包括聊天模式、模型名称等，可以方便地切换不同的聊天场景。</p><p>该子命令没有参数，执行后会返回一个列表，显示所有可用的预设及其对应的参数。</p><p>该子命令还有一个别名 <code>预设列表</code>，可以用来替代 <code>chathub.listpreset</code>。</p><h4 id="chathub-setpreset" tabindex="-1">chathub.setpreset <a class="header-anchor" href="#chathub-setpreset" aria-label="Permalink to &quot;chathub.setpreset&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.setpreset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">preset:strin</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于设置当前使用的预设，需要至少 1 级权限。执行后会根据指定的预设名称，修改聊天链的参数，并重置聊天状态。</p><p>该子命令有一个必选参数 <code>&lt;preset:string&gt;</code>，表示要切换到的预设名称。如果不存在该名称的预设，会返回一个错误信息。</p><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-c &lt;chatMode:string&gt;</td><td>选择聊天模式，可以是 <code>Balanced</code>、<code>Creative</code> 或 <code>Precise</code></td><td>1</td></tr><tr><td>-m &lt;model:string&gt;</td><td>切换的目标模型，可以是 <code>chatgpt</code>、<code>chatgpt2</code> 或 <code>chatgpt3</code></td><td>1</td></tr><tr><td>-g</td><td>也设置为全局会话默认的预设？如果指定了该参数，则所有新建的会话都会使用该预设</td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>切换预设</code>，可以用来替代 <code>chathub.setpreset</code>。</p><h4 id="chathub-resetpreset" tabindex="-1">chathub.resetpreset <a class="header-anchor" href="#chathub-resetpreset" aria-label="Permalink to &quot;chathub.resetpreset&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.resetpreset</span><span style="color:#A6ACCD;"> [model:string]</span></span></code></pre></div><p>该子命令用于重置为默认使用的预设（chatgpt预设），需要至少 1 级权限。执行后会将聊天链的参数恢复为默认值，并重置聊天状态。</p><p>该子命令有一个可选参数 <code>[model:string]</code>，表示要重置为的模型名称。如果不指定，则默认为 <code>chatgpt</code>。</p><p>该子命令还有以下可选参数:</p><table><thead><tr><th>参数</th><th>说明</th><th>权限</th></tr></thead><tbody><tr><td>-c &lt;chatMode:string&gt;</td><td>选择聊天模式，可以是 <code>Balanced</code>、<code>Creative</code> 或 <code>Precise</code></td><td>1</td></tr></tbody></table><p>该子命令还有一个别名 <code>重置预设</code>，可以用来替代 <code>chathub.resetpreset</code>。</p><h4 id="chathub-addpreset" tabindex="-1">chathub.addpreset <a class="header-anchor" href="#chathub-addpreset" aria-label="Permalink to &quot;chathub.addpreset&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.addpreset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">preset:strin</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于添加一个预设，需要至少 1 级权限。执行后会根据当前聊天链的参数，创建一个新的预设，并保存到配置文件中。</p><p>该子命令有一个必选参数 <code>&lt;preset:string&gt;</code>，表示要添加的预设名称。如果已存在同名的预设，会返回一个错误信息。</p><p>该子命令没有可选参数。</p><p>该子命令还有一个别名 <code>添加预设</code>，可以用来替代 <code>chathub.addpreset</code>。</p><h4 id="chathub-deletepreset" tabindex="-1">chathub.deletepreset <a class="header-anchor" href="#chathub-deletepreset" aria-label="Permalink to &quot;chathub.deletepreset&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.deletepreset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">preset:strin</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>该子命令用于删除一个预设，需要至少 1 级权限。执行后会根据指定的预设名称，从配置文件中删除对应的预设，并重置聊天状态。</p><p>该子命令有一个必选参数 <code>&lt;preset:string&gt;</code>，表示要删除的预设名称。如果不存在该名称的预设，会返回一个错误信息。</p><p>该子命令没有可选参数。</p><p>该子命令还有一个别名 <code>删除预设</code>，可以用来替代 <code>chathub.deletepreset</code>。</p><h3 id="数据管理-1" tabindex="-1">数据管理 <a class="header-anchor" href="#数据管理-1" aria-label="Permalink to &quot;数据管理&quot;">​</a></h3><h4 id="chathub-wipe" tabindex="-1">chathub.wipe <a class="header-anchor" href="#chathub-wipe" aria-label="Permalink to &quot;chathub.wipe&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.wipe</span></span></code></pre></div><p>该子命令用于清空 chathub 的所有使用数据，需要至少 3 级权限。执行后会删除数据库中的所有会话记录、预设配置、长期记忆等数据，并重置聊天状态。</p><p>该子命令没有参数。</p><p>该子命令还有一个别名 <code>双清 chathub</code>，可以用来替代 <code>chathub.wipe</code>。</p><h4 id="chathub-listchatmode" tabindex="-1">chathub.listchatmode <a class="header-anchor" href="#chathub-listchatmode" aria-label="Permalink to &quot;chathub.listchatmode&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chathub.listchatmode</span></span></code></pre></div><p>该子命令用于列出目前支持的聊天模式，需要至少 1 级权限。聊天模式是一种控制聊天链行为的方式，可以影响聊天内容的风格和质量。目前支持的聊天模式有:</p><ul><li><code>Balanced</code>:平衡模式，适合大多数场景，既不太创造性也不太精确。</li><li><code>Creative</code>:创造性模式，适合寻求新奇和惊喜的场景，更加灵活和有趣，但可能不太准确。</li><li><code>Precise</code>:精确模式，适合寻求准确和专业的场景，更加严谨和合理，但可能不太有趣。</li></ul><p>该子命令没有参数，执行后会返回一个列表，显示所有可用的聊天模式及其简介。</p><p>该子命令还有一个别名 <code>聊天模式列表</code>，可以用来替代 <code>chathub.listchatmode</code>。</p>',141),l=[c];function h(d,n,r,p,i,u){return t(),a("div",null,l)}const g=e(o,[["render",h]]);export{m as __pageData,g as default};