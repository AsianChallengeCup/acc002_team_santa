import React from 'react';
import ReactDOM from 'react-dom/client'; // ここを変更
import './styles/index.css';
import App from './App';

// ReactDOM.render を ReactDOM.createRoot に変更
const root = ReactDOM.createRoot(document.getElementById('root')); // ここを変更
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
