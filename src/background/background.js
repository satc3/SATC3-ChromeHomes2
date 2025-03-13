/* global chrome */
// バックグラウンドスクリプト
console.log('バックグラウンドスクリプトが読み込まれました');

// 拡張機能がインストールされたときのイベントリスナー
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('拡張機能がインストールされました');
  } else if (details.reason === 'update') {
    console.log('拡張機能が更新されました');
  }
});

// メッセージリスナーの例
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('メッセージを受信しました:', message);
  
  if (message.type === 'GREETING') {
    sendResponse({ response: 'こんにちは！' });
  }
  
  return true; // 非同期レスポンスのために必要
}); 