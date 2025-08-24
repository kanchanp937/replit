import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // <-- Import the Tailwind CSS file

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
