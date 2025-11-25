# Keep Playing (No Pause)

[🇨🇳 中文](README.md) | 🇺🇸 **English** | [🇯🇵 日本語](README.ja.md)

---

📦 GitHub Repository: [https://github.com/mingtianbian/no-pause-script](https://github.com/mingtianbian/no-pause-script)
👤 Author:mingtianbian

[![Install directly](https://img.shields.io/badge/Install-Click%20Here-brightgreen)](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)

## 📖 Introduction
This is a **UserScript** designed to prevent websites from pausing videos automatically when you switch tabs or windows.
It is useful if you want **background playback / uninterrupted video** while multitasking.

## ✨ Features
- Force websites to always treat the page as "visible"
- Block `visibilitychange`, `blur`, and similar events
- Prevent websites from programmatically calling `pause()` on media elements
- Provide a debug switch to temporarily allow pausing if needed

## 🚀 Installation
1. Make sure your browser has [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) installed.
2. Click the link below to install the script:
   👉 [Click here to install](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)
3. Refresh the video page, and the script will automatically take effect.

## ⚙️ Usage
- After installation, websites will always think the page is in the foreground, so switching tabs/windows won’t pause the video.
- Debug options are available in the console:
  ```js
  // Temporarily allow video pausing (e.g., when you pause manually)
  window.__preventVisibilityPause.allowPause(true)

  // Re-enable pause blocking
  window.__preventVisibilityPause.allowPause(false)
