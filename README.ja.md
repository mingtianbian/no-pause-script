# 画面切り替え時の自動一時停止を無効化 (Keep Playing · No Pause)

[🇨🇳 中文](README.md) | [🇺🇸 English](README.en.md) | 🇯🇵 **日本語** | [🇷🇺 Русский](README.ru.md) | [🇫🇷 Français](README.fr.md)

---

📦 GitHub リポジトリ: [https://github.com/mingtianbian/no-pause-script](https://github.com/mingtianbian/no-pause-script)  
👤 作者:mingtianbian

[![Install directly](https://img.shields.io/badge/インストール-ここをクリック-brightgreen)](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)

## 📖 はじめに
これは、タブやウィンドウを切り替えた際に動画が自動的に一時停止するのを防ぐ **ユーザースクリプト (UserScript)** です。  
動画サイトを利用する際、**バックグラウンド再生** や **作業用BGM** として動画を流し続けたい場合に最適です。

## ✨ 機能
- 常にページが「表示中（アクティブ）」であるとWebサイトに認識させます
- `visibilitychange` や `blur` などのイベントリスナーをブロックします
- Webサイトが `pause()` を呼び出して動画を停止させるのを防ぎます
- デバッグスイッチを提供し、必要に応じて一時停止を許可することも可能です

## 🚀 インストール方法
1. ブラウザに [Violentmonkey](https://violentmonkey.github.io/) または [Tampermonkey](https://www.tampermonkey.net/) がインストールされていることを確認してください。
2. 以下のリンクをクリックしてスクリプトをインストールします：
   👉 [インストールはこちら](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)
3. 対象の動画ページを再読み込み（リフレッシュ）すると、スクリプトが自動的に有効になります。

## ⚙️ 使用方法
- インストール後、Webサイトは常にページが最前面にあると認識するため、タブやウィンドウを切り替えても一時停止しなくなります。
- コンソールで以下のデバッグ用コマンドを使用できます：
  ```js
  // 一時的に動画の停止を許可する（手動で一時停止したい場合など）
  window.__preventVisibilityPause.allowPause(true)

  // 再び停止をブロックする（デフォルト状態に戻す）
  window.__preventVisibilityPause.allowPause(false)