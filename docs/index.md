---
layout: home

title: Koishi ChatHub Doc
editLink: true

hero:
  name: Koishi ChatHub
  text: 使用教程 & 开发指南
  tagline: 提供多平台语言模型聊天服务，可选多种输出格式，另配高度可扩展插件系统
  actions:
    - theme: brand
      text: 了解更多
      link: /guide/introduction
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/ChatHubLab/chathub 

features:
  - icon: 🛠️
    title: 快速部署 
<<<<<<< HEAD
    details: 无需编写任何复杂配置文件，安装相关插件后，在 Koishi Web UI 上即可配置。
=======
    details: 无需编写复杂配置文件，安装相关插件，在 Koishi 控制面板上进行简单配置后即可使用。
>>>>>>> 353e6d0 (docs: update readme)
  - icon: 🌻
    title: 多平台模型接入
    details: 支持 OpenAI (API)、Bing Chat、文心一言（API）等平台，仍将继续接入更多平台。
  - icon: 🔩
    title: 高扩展性
    details: 拥有中间件系统、多平台模型接入，丰富的 API 等，便于开发者使用或扩展。
---

<script setup>

import { onMounted } from 'vue';
import { fetchReleaseTag } from '.vitepress/utils/fetchReleaseTag.js';

onMounted(() => {
  fetchReleaseTag()
})

</script>
