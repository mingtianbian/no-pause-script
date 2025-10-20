// ==UserScript==
// @name         Keep Playing (No Pause)
// @name:zh-CN   切屏不暂停
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  阻止网页在切出标签页时暂停视频，让你可以后台继续播放
// @description:zh-CN  阻止网页在切出标签页时暂停视频，让你可以后台继续播放
// @run-at       document-start
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  try {
    // ----- 1) 覆盖 document.hidden / visibilityState -----
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: function () { return false; } // 永远可见
    });
    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      get: function () { return 'visible'; } // 永远认为是 visible
    });

    // ----- 2) 屏蔽通过 addEventListener 注册的 visibilitychange / blur / pagehide 等事件 -----
    const origDocAdd = Document.prototype.addEventListener;
    Document.prototype.addEventListener = function (type, listener, options) {
      if (type === 'visibilitychange' || type === 'webkitvisibilitychange' || type === 'blur' || type === 'pagehide') {
        // 忽略注册（等同于页面不会收到这些事件）
        return;
      }
      return origDocAdd.call(this, type, listener, options);
    };

    const origWinAdd = Window.prototype.addEventListener;
    Window.prototype.addEventListener = function (type, listener, options) {
      if (type === 'visibilitychange' || type === 'blur' || type === 'pagehide' || type === 'focusout') {
        return;
      }
      return origWinAdd.call(this, type, listener, options);
    };

    // 也清空 onvisibilitychange/onblur 等直接赋值回调
    try { Object.defineProperty(document, 'onvisibilitychange', { configurable: true, set: function(){} , get: function(){ return null; } }); } catch(e){}
    try { Object.defineProperty(window, 'onblur', { configurable: true, set: function(){} , get: function(){ return null; } }); } catch(e){}

    // ----- 3) 拦截媒体元素的 pause() 调用（防止 JS 主动暂停视频） -----
    const origPause = HTMLMediaElement.prototype.pause;
    HTMLMediaElement.prototype.pause = function () {
      // 如果页面显式希望我们暂停（例如用户点击），应该允许。这里用调用栈粗略判断：
      const stack = (new Error()).stack || '';
      // 如果是浏览器内核(rare)或用户手动触发的调用，可能包含 "EventListener" 之类；此处为简单策略：阻止来自页面脚本的 pause，
      // 但仍允许通过元素的 dataset 或自定义标记强制暂停（可按需改）
      // 如果需要临时允许暂停，可以在控制台执行: HTMLMediaElement.prototype._allowPause = true
      if (HTMLMediaElement.prototype._allowPause) {
        return origPause.apply(this, arguments);
      }
      // 否则忽略 pause（不抛错）
      console.debug('[PreventPause] blocked pause() call');
      return Promise.resolve(); // 有些站点依赖返回值
    };

    // 提供一个方便的全局开关（在控制台输入切换）
    window.__preventVisibilityPause = {
      enabled: true,
      allowPause: function (on) { HTMLMediaElement.prototype._allowPause = !!on; console.log('allowPause=', !!on); }
    };

    // ----- 4) 阻止 pagehide / visibilitychange 事件实际触发（保险） -----
    const pushEvent = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      if (type === 'visibilitychange' || type === 'webkitvisibilitychange' || type === 'pagehide' || type === 'blur') {
        return; // 不注册
      }
      return pushEvent.call(this, type, listener, options);
    };

    console.log('[PreventVisibilityPause] active — document will appear visible and pause() calls are blocked. Use window.__preventVisibilityPause.allowPause(true) to re-enable pause().');
  } catch (err) {
    console.error('PreventVisibilityPause setup failed', err);
  }
})();
