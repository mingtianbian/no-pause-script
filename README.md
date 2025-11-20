# 切屏不暂停 (Keep Playing · No Pause)

📦 GitHub 仓库地址： [https://github.com/mingtianbian/no-pause-script](https://github.com/mingtianbian/no-pause-script)  
👤 作者：明天扁  

[![Install directly](https://img.shields.io/badge/安装脚本-点击这里-brightgreen)](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)

## 📖 简介
这是一个 **用户脚本 (UserScript)**，用于阻止网页在切出标签页或窗口时自动暂停视频。  
适合在使用视频网站时希望 **后台播放 / 切屏不中断** 的场景。

## ✨ 功能
- 永远让网页以为页面处于「可见」状态  
- 屏蔽 `visibilitychange` / `blur` 等事件监听  
- 阻止网页主动调用 `pause()` 来暂停视频  
- 提供调试开关，可以临时允许暂停  

## 🚀 安装方法
1. 确保浏览器已安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)。  
2. 点击下方链接即可一键安装：  
   👉 [点此安装脚本](https://raw.githubusercontent.com/mingtianbian/no-pause-script/main/cut-screen-no-pause.user.js)  
3. 刷新需要使用的视频页面，脚本会自动生效。

## ⚙️ 使用说明
- 安装后网页会认为你一直在前台，切换标签页或窗口不会再触发暂停。  
- 控制台提供调试方法：
  ```js
  // 临时允许视频暂停（例如手动点击暂停时）
  window.__preventVisibilityPause.allowPause(true)

  // 恢复阻止暂停
  window.__preventVisibilityPause.allowPause(false)
