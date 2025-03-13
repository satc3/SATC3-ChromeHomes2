import React from 'react';
import { createRoot } from 'react-dom/client';
import './content.css';

// コンテンツスクリプトのメイン処理
console.log('コンテンツスクリプトが読み込まれました');

// Reactコンポーネント
const ContentApp = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`content-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="content-panel">
        <h2>SATC3 Chrome Homes 2</h2>
        <p>このパネルはウェブページに挿入されています</p>
        <button onClick={toggleVisibility}>閉じる</button>
      </div>
    </div>
  );
};

// ページにボタンを挿入
const createButton = () => {
  const button = document.createElement('button');
  button.textContent = 'SATC3 パネルを開く';
  button.className = 'satc3-toggle-button';
  button.addEventListener('click', () => {
    const event = new CustomEvent('toggleSATC3Panel');
    document.dispatchEvent(event);
  });
  
  document.body.appendChild(button);
};

// Reactコンポーネントをマウント
const mountReactApp = () => {
  const container = document.createElement('div');
  container.id = 'satc3-content-root';
  document.body.appendChild(container);
  
  const root = createRoot(container);
  root.render(<ContentApp />);
  
  // カスタムイベントリスナー
  document.addEventListener('toggleSATC3Panel', () => {
    const overlay = document.querySelector('.content-overlay');
    if (overlay) {
      overlay.classList.toggle('visible');
    }
  });
};

// DOMが読み込まれたら実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    createButton();
    mountReactApp();
  });
} else {
  createButton();
  mountReactApp();
} 