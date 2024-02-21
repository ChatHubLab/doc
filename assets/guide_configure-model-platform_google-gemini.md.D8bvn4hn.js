import{_ as e,c as o,o as a,a8 as i}from"./chunks/framework.kpza2nAE.js";const t="/assets/plugin_gemini_pic_1.Upg2y9oh.png",l="/assets/plugin_gemini_config_1.RqvPd1rh.png",r="/assets/plugin_gemini_config_2.nblWpdbD.png",b=JSON.parse('{"title":"Google gemini","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure-model-platform/google-gemini.md","filePath":"guide/configure-model-platform/google-gemini.md","lastUpdated":1703486972000}'),n={name:"guide/configure-model-platform/google-gemini.md"},s=i('<h1 id="google-gemini" tabindex="-1">Google gemini <a class="header-anchor" href="#google-gemini" aria-label="Permalink to &quot;Google gemini&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>Google gemini 是谷歌在 2023 年年底宣布推出其认为规模最大、功能最强大的人工智能模型。</p><p>Google 目前推出了免费的 <code>gemini-pro</code> 模型，快去试试吧！</p><p>本适配器不支持 <code>plugin</code> 聊天模式，不能让模型调用本地插件工具。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>前往插件市场，搜索 <code>chatluna-google-gemini-adapter</code>，安装即可。</p><p><img src="'+t+'" alt="images"></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>在配置之前，请先前往 <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noreferrer">Google AI Studio</a> 获取 Google AI Studio 平台的 <code>API KEY</code>。</p><p>如使用为其他代理平台（转发接口，API-ADAPTER），还需额外获取 API host 地址。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>未来我们可能会录制官方教程，敬请期待。</p></div><p>获取到 <code>API KEY</code> 后，转到 <code>gemini-adapter</code> 的配置页面。</p><p>默认插件有一个空的适配项，填入你的 <code>API KEY</code> 即可。</p><p><img src="'+l+'" alt="images"></p><p>记得点击右上角的保存按钮。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在 gemini 适配器的配置页面，点击运行按钮，如无误，你应该看不到任何错误 log，那即可转到 ChatLuna 的主插件页面。</p><p>在主插件页面，下划到 <a href="./../useful-configurations.html#模版房间选项">模版房间选项</a>，查看 <a href="./../useful-configurations.html#defaultmodel">defaultModel</a> 的选项里是否含有 <code>gemini</code> 模型，如果有，则说明你已经成功地接入了 Google 平台。</p><p><img src="'+r+'" alt="images"></p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="_1-国内平台如何接入" tabindex="-1">1. 国内平台如何接入？ <a class="header-anchor" href="#_1-国内平台如何接入" aria-label="Permalink to &quot;1. 国内平台如何接入？&quot;">​</a></h3><p>国内平台接入 Google 官方的接口，需要代理设置，前往主插件的配置页面，开启 <a href="./../useful-configurations.md/#isproxy">代理模式</a>，然后配置 <a href="./../useful-configurations.html#proxyaddress">代理地址</a>。</p>',23),c=[s];function d(p,g,m,h,u,_){return a(),o("div",null,c)}const P=e(n,[["render",d]]);export{b as __pageData,P as default};
