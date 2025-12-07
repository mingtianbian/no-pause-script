# Lecture continue sans pause lors du changement d’onglet (Keep Playing · No Pause)

[🇨🇳 中文](README.md) | [🇺🇸 English](README.en.md) | [🇯🇵 日本語](README.ja.md) | [🇷🇺 Русский](README.ru.md) | 🇫🇷 **Français**

---

📦 Dépôt GitHub : [https://github.com/mingtianbian/no-pause-script](https://github.com/mingtianbian/no-pause-script)  
👤 Auteur : mingtianbian

[![Install directly](https://img.shields.io/badge/Installer%20le%20script-Cliquez%20ici-brightgreen)](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)

## 📖 Présentation
Il s'agit d'un **script utilisateur (UserScript)** qui empêche les sites Web de mettre automatiquement les vidéos en pause lors du changement d’onglet ou de fenêtre.  
Idéal pour les scénarios de **lecture en arrière-plan / lecture ininterrompue**.

## ✨ Fonctions
- Force les sites Web à considérer la page comme « visible »
- Bloque les écouteurs d’événements `visibilitychange` / `blur`
- Empêche les sites d’appeler `pause()` pour arrêter la vidéo
- Fournit un interrupteur de débogage pour autoriser temporairement la pause

## 🚀 Installation
1. Assurez-vous que [Violentmonkey](https://violentmonkey.github.io/) ou [Tampermonkey](https://www.tampermonkey.net/) est installé dans votre navigateur。
2. Cliquez sur le lien ci-dessous pour installer le script：  
   👉 [Cliquez ici pour installer](https://github.com/mingtianbian/no-pause-script/raw/refs/heads/main/main/cut-screen-no-pause.user.js)
3. Actualisez la page vidéo, le script prendra effet automatiquement。

## ⚙️ Utilisation
- Après l’installation, le site pensera toujours que la page est au premier plan, et le changement d’onglet ou de fenêtre ne mettra plus la vidéo en pause。
- Des commandes de débogage sont disponibles dans la console：
  ```js
  // Autoriser temporairement la mise en pause de la vidéo (par exemple lors d'une pause manuelle)
  window.__preventVisibilityPause.allowPause(true)

  // Réactiver le blocage de la pause
  window.__preventVisibilityPause.allowPause(false)
