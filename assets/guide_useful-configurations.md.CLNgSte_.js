import{_ as i,c as t,m as a,a as e,J as d,a8 as o,o as r,G as c}from"./chunks/framework.kpza2nAE.js";const _=JSON.parse('{"title":"配置项","description":"","frontmatter":{},"headers":[],"relativePath":"guide/useful-configurations.md","filePath":"guide/useful-configurations.md","lastUpdated":1701937342000}'),s={name:"guide/useful-configurations.md"},n=o('<h1 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h1><p>本节介绍了主插件(<code>chatluna</code>)可用的配置项。对于其他插件或适配器的配置项，请参考对应的文档。</p><h2 id="bot-配置" tabindex="-1">Bot 配置 <a class="header-anchor" href="#bot-配置" aria-label="Permalink to &quot;Bot 配置&quot;">​</a></h2><h3 id="botname" tabindex="-1">botName <a class="header-anchor" href="#botname" aria-label="Permalink to &quot;botName&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>香草</code></li></ul><p>Bot 的昵称，该昵称可用于下方的<a href="#isnickname">关键词唤醒</a>对话。</p><h3 id="isnickname" tabindex="-1">isNickName <a class="header-anchor" href="#isnickname" aria-label="Permalink to &quot;isNickName&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否可从昵称唤醒对话。当开启后，如发出的消息开头含有 <a href="#botname">botName</a> 属性，将自动触发对话。</p><h2 id="回复选项" tabindex="-1">回复选项 <a class="header-anchor" href="#回复选项" aria-label="Permalink to &quot;回复选项&quot;">​</a></h2><h3 id="allowprivate" tabindex="-1">allowPrivate <a class="header-anchor" href="#allowprivate" aria-label="Permalink to &quot;allowPrivate&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否能在私聊中调用 ChatLuna，开启后将可以在私聊中通过命令调用 ChatLuna。</p><h3 id="allowatreply" tabindex="-1">allowAtReply <a class="header-anchor" href="#allowatreply" aria-label="Permalink to &quot;allowAtReply&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>当 @Bot 时是否响应回复，开启后将会在 @Bot 时触发回复。</p><h3 id="isreplywithat" tabindex="-1">isReplyWithAt <a class="header-anchor" href="#isreplywithat" aria-label="Permalink to &quot;isReplyWithAt&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>Bot 回复时是否引用原消息回复。开启后 Bot 的回复都会引用原触发消息。</p><h3 id="isforwardmsg" tabindex="-1">isForwardMsg <a class="header-anchor" href="#isforwardmsg" aria-label="Permalink to &quot;isForwardMsg&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否让消息以转发消息的形式发送。开启后，当 Bot 回复时，将会回复一个转发消息组。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>目前支持该功能的聊天平台可能很少或接近没有，在未来我们可能会删除该配置项。</p></div><h3 id="privatechatwithoutcommand" tabindex="-1">privateChatWithoutCommand <a class="header-anchor" href="#privatechatwithoutcommand" aria-label="Permalink to &quot;privateChatWithoutCommand&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否能直接不调用任何命令在私聊里和 Bot 对话。</p><p>开启后，在私聊里的其他非命令调用都会被识别成和 Bot 对话，触发对话。</p><h3 id="msgcooldown" tabindex="-1">msgCooldown <a class="header-anchor" href="#msgcooldown" aria-label="Permalink to &quot;msgCooldown&quot;">​</a></h3><ul><li>类型：<code>number</code></li><li>默认值：<code>5</code></li><li>最小值：<code>1</code></li><li>最大值：<code>3600</code></li><li>单位：<code>秒(s)</code></li></ul><p>全局冷却时间，开启后，在该时间内，Bot 不会响应任何消息。</p><h3 id="outputmode" tabindex="-1">outputMode <a class="header-anchor" href="#outputmode" aria-label="Permalink to &quot;outputMode&quot;">​</a></h3><ul><li><p>类型：<code>&#39;raw&#39;|&#39;text&#39;|&#39;image&#39;|&#39;voice&#39;|&#39;mixed-image&#39;|&#39;mixed-voice&#39;</code></p></li><li><p>插件会把模型生成的回复文本基于选中的输出格式进行渲染。下面是每个选项的介绍:</p><ul><li><p><code>raw</code>：输出模型生成的原始文本。</p></li><li><p><code>text</code>：将模型生成的文本渲染成 Koishi 支持的 Markdown 格式后发送</p></li><li><p><code>image</code>：将模型生成的文本渲染成图片后发送（图片里为模型原文本）</p><p>该选项需要你的 Koishi 在运行提供了 puppeteer 服务的插件。我们需要 puppeteer 渲染 html 文件。</p></li><li><p><code>voice</code>：将模型生成的文本转化成语音后发送（语音里为模型原文本）</p><p>该选项需要你的 Koishi 在运行提供了 vits 服务的插件。我们需要 vits 服务将文本转化成语音文件。</p></li><li><p><code>mixed-image</code>: 基于 Markdown 语法识别，对于某些 Markdown 语法（如列表，代码块）会渲染图片，其他的某些 Markdown 语法（如纯文本的自然段）会直接作为文本发送。</p><p>和 <code>image</code> 选项一样，该选项需要你的 Koishi 在运行提供了 puppeteer 服务的插件。</p></li><li><p><code>mixed-voice</code>: 将模型生成的文本同时渲染成 Markdown 格式和语音后发送。</p><p>和 <code>voice</code> 选项一样，该选项需要你的 Koishi 在运行提供了 vits 服务的插件。</p></li></ul></li><li><p>默认值：<code>&#39;text&#39;</code></p></li></ul><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如你开启了<a href="#bot-配置">流式传输</a>，那么输出格式请直接选择默认的 <code>text</code>。 否则可能出现意想不到的渲染结果。</p></div><h3 id="splitmessage" tabindex="-1">splitMessage <a class="header-anchor" href="#splitmessage" aria-label="Permalink to &quot;splitMessage&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>切割消息发送。</p><p>开启后会将模型生成的文本基于 Markdown 语法切割成多个文本块，发送成多条消息。 配合<a href="#bot-配置">流式传输</a>使用，可实现更优的体验。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>本选项开启后，<a href="#outputmode">outputMode</a> 选项只推荐设置为 <code>text</code>。 并且引用消息回复可能会无效。</p></div><h3 id="censor" tabindex="-1">censor <a class="header-anchor" href="#censor" aria-label="Permalink to &quot;censor&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>文本审核。</p><p>开启后会对模型生成的文本进行文本审核，基于 Koishi 的 <a href="https://censor.koishi.chat" target="_blank" rel="noreferrer">censor</a> 服务。</p><h3 id="sendthinkingmessage" tabindex="-1">sendThinkingMessage <a class="header-anchor" href="#sendthinkingmessage" aria-label="Permalink to &quot;sendThinkingMessage&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>当模型生成耗时过长时发送一条消息。</p><p>可用于提示用户模型正在生成回复，同时也能知道前方队列的排队情况。</p><h3 id="sendthinkingmessagetimeout" tabindex="-1">sendThinkingMessageTimeout <a class="header-anchor" href="#sendthinkingmessagetimeout" aria-label="Permalink to &quot;sendThinkingMessageTimeout&quot;">​</a></h3><ul><li>类型：<code>number</code></li><li>默认值：<code>15000</code></li><li>单位：毫秒（ms）</li></ul><p>当经过该时间后模型仍在生成文本时，基于<a href="#sendthinkingmessage"><code>sendThinkingMessage</code></a> 选项的状态发送一条消息。</p><p>消息的内容基于下面<a href="#thinkingmessage"><code>thinkingMessage</code></a>设定的内容。</p><h3 id="thinkingmessage" tabindex="-1">thinkingMessage <a class="header-anchor" href="#thinkingmessage" aria-label="Permalink to &quot;thinkingMessage&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>我还在思考中，前面还有 {count} 条消息等着我回复呢，稍等一下哦~</code></li></ul><p>耗时过长的消息发送提示内容。</p><p>对于 <code>{count}</code> 占位符，会自动替换成当前队列中等待回复的消息数量。</p><h3 id="randomreplyfrequency" tabindex="-1">randomReplyFrequency <a class="header-anchor" href="#randomreplyfrequency" aria-label="Permalink to &quot;randomReplyFrequency&quot;">​</a></h3><ul><li>类型：<code>number</code></li><li>默认值：<code>0.0</code></li><li>最大值：<code>1.0</code></li></ul><p>随机回复频率。</p><p>插件会对每条消息，生成一个随机数，当该随机数小于该频率时，会触发随机回复。</p><h2 id="对话选项" tabindex="-1">对话选项 <a class="header-anchor" href="#对话选项" aria-label="Permalink to &quot;对话选项&quot;">​</a></h2><h3 id="longmemory" tabindex="-1">longMemory <a class="header-anchor" href="#longmemory" aria-label="Permalink to &quot;longMemory&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>长期记忆支持。基于向量数据库和 embeddings，开启后会尝试索引你的对话历史，将这些信息提供给模型，来模拟人类的记忆。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>目前模型的生成重复性仍未解决，该功能可能并非想象中的那么有效。 在使用前还需要配置好 <a href="#defaultembeddings"><code>defaultEmbeddings</code></a> 和 <a href="#defaultvectorstore"><code>defaultVectorStore</code></a></p></div><h3 id="blacklist" tabindex="-1">blackList <a class="header-anchor" href="#blacklist" aria-label="Permalink to &quot;blackList&quot;">​</a></h3><ul><li>类型：<code>koishi 计算属性</code></li><li>默认值：``</li></ul><p>黑名单列表。可以选择对群，用户或平台开启。只需在满足对于条件的分支上打开开关即可。</p><p>该列表为全局机制，进入该名单的用户或平台将无法使用 ChatLuna 的各项功能。（扩展插件除外）</p><h3 id="blocktext" tabindex="-1">blockText <a class="header-anchor" href="#blocktext" aria-label="Permalink to &quot;blockText&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>哎呀(ｷ｀ﾟДﾟ´)!!，你怎么被拉入黑名单了呢？要不你去问问我的主人吧。</code></li></ul><p>被拉黑的用户操作时会发送的回复。</p><h3 id="messagecount" tabindex="-1">messageCount <a class="header-anchor" href="#messagecount" aria-label="Permalink to &quot;messageCount&quot;">​</a></h3><ul><li>类型: <code>number</code></li><li>默认值：<code>40</code></li><li>最小值: <code>10</code></li><li>最大值: <code>100</code></li></ul><p>数据库里存储的单个对话的最大消息数量，超出后会自动删除最久远的历史聊天消息。</p><h3 id="streamresponse" tabindex="-1">streamResponse <a class="header-anchor" href="#streamresponse" aria-label="Permalink to &quot;streamResponse&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>流式响应。开启后将使用流式响应，类似 ChatGPT 的打字机效果。对于不支持的平台，会自动进行分句多段发送。</p><h3 id="showthoughtmessage" tabindex="-1">showThoughtMessage <a class="header-anchor" href="#showthoughtmessage" aria-label="Permalink to &quot;showThoughtMessage&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>使用插件模式时是否显示模型调用工具的过程。</p><h3 id="historymode" tabindex="-1">historyMode <a class="header-anchor" href="#historymode" aria-label="Permalink to &quot;historyMode&quot;">​</a></h3><ul><li>类型: <code>default</code> | <code>summary</code></li><li>默认值: <code>default</code></li></ul><p>历史聊天的模式，可选：</p><ul><li>default: 默认模式，将历史消息原封不动的发送给模型。</li><li>summary: 摘要模式，只发送一条历史消息，其内容为模型总结的历史消息的摘要。</li></ul><p>使用 <code>summary</code> 模式时更能节省 token，但是也可能会遇到未知的 bug，连续对话效果不好。 使用 <code>default</code> 模式时对话效果更佳，兼容性也最好。</p><h2 id="模型选项" tabindex="-1">模型选项 <a class="header-anchor" href="#模型选项" aria-label="Permalink to &quot;模型选项&quot;">​</a></h2><h3 id="defaultembeddings" tabindex="-1">defaultEmbeddings <a class="header-anchor" href="#defaultembeddings" aria-label="Permalink to &quot;defaultEmbeddings&quot;">​</a></h3><p>ChatLuna 默认使用的嵌入向量模型。</p><p>可用于长期记忆，知识库。</p><h3 id="defaultvectorstore" tabindex="-1">defaultVectorStore <a class="header-anchor" href="#defaultvectorstore" aria-label="Permalink to &quot;defaultVectorStore&quot;">​</a></h3><p>ChatLuna 默认使用的向量数据库。</p><p>用于长期记忆，知识库。</p><h2 id="模版房间选项" tabindex="-1">模版房间选项 <a class="header-anchor" href="#模版房间选项" aria-label="Permalink to &quot;模版房间选项&quot;">​</a></h2><h3 id="defaultchatmode" tabindex="-1">defaultChatMode <a class="header-anchor" href="#defaultchatmode" aria-label="Permalink to &quot;defaultChatMode&quot;">​</a></h3><ul><li>类型: <code>chat</code> | <code>browsing</code> | <code>plugin</code> ...</li><li>默认值: <code>chat</code></li></ul><p>模版克隆房间里默认使用的聊天模式。</p><p>由于 ChatLuna 扩展开放了该接口，因此任何插件都可以编写自己的聊天模式相关链接入到 ChatLuna 中。 下面只介绍 ChatLuna 内置的几个聊天模式：</p><ul><li>chat: 普通聊天模式，支持预设和长期记忆，没有联网权限。</li><li>browsing: 浏览模式，支持预设和长期记忆，可以通过与用户的聊天内容从网络上搜索信息。</li><li>plugin: 插件模式，支持预设，不支持长期记忆，模型可以调用各种工具如网络搜索插件，可以自主获取网络上的消息和执行某些操作。</li></ul><h3 id="defaultmodel" tabindex="-1">defaultModel <a class="header-anchor" href="#defaultmodel" aria-label="Permalink to &quot;defaultModel&quot;">​</a></h3><p>模版克隆房间里默认使用的模型。</p><p>如想接入模型，可以查看目录里的 <a href="./../guide/configure-model-platform/introduction.html">模型平台</a></p><h3 id="defaultpreset" tabindex="-1">defaultPreset <a class="header-anchor" href="#defaultpreset" aria-label="Permalink to &quot;defaultPreset&quot;">​</a></h3><p>模版克隆房间里默认使用的预设。</p><p>如需了解预设，可查看 <a href="./../guide/preset-system/introduction.html">预设</a>\\</p><h2 id="杂项" tabindex="-1">杂项 <a class="header-anchor" href="#杂项" aria-label="Permalink to &quot;杂项&quot;">​</a></h2>',104),h={id:"authsystem",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#authsystem","aria-label":'Permalink to "authSystem <Badge type="warning" text="实验性" />"'},"​",-1),p=o('<ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>配额组和其相关的用户系统。</p><p>如需了解，可查看 <a href="./../guide/session-related/concurrency-limit.html">配额组和用户系统</a></p><h3 id="isproxy" tabindex="-1">isProxy <a class="header-anchor" href="#isproxy" aria-label="Permalink to &quot;isProxy&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>是否开启代理模式。</p><p>开启后所有 ChatLuna 相关的请求都会通过设置的代理服务器进行转发。</p><p>推荐所有国内用户开启该配置项配置代理。</p><h3 id="isdebug" tabindex="-1">isDebug <a class="header-anchor" href="#isdebug" aria-label="Permalink to &quot;isDebug&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li></ul><p>调试模式。</p><p>开启后将会输出更多的调试 log。</p><h2 id="代理设置" tabindex="-1">代理设置 <a class="header-anchor" href="#代理设置" aria-label="Permalink to &quot;代理设置&quot;">​</a></h2><h3 id="proxyaddress" tabindex="-1">proxyAddress <a class="header-anchor" href="#proxyaddress" aria-label="Permalink to &quot;proxyAddress&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>代理地址。需要附上端口信息。</p><p>目前支持 HTTP(s) / SOCKS5 代理。</p><p>请注意格式，填写好地址。如 <code>http://127.0.0.1:7890</code>。</p>',18);function m(b,f,g,k,q,x){const l=c("Badge");return r(),t("div",null,[n,a("h3",h,[e("authSystem "),d(l,{type:"warning",text:"实验性"}),e(),u]),p])}const y=i(s,[["render",m]]);export{_ as __pageData,y as default};
