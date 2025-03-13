import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';

const Popup = () => {
  return (
    <div className="popup-container">
      <h1>SATC3 Chrome Homes 2</h1>
      <p>Chrome拡張機能のデモです</p>
      <button className="popup-button">
        クリックしてくださいな
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
); 