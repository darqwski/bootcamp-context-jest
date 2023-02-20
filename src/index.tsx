import React from 'react';
import ReactDOM from 'react-dom/client';
import './application/index.css';
import App from './application/App';
import DogContextManager from "./application/context/DogContextManager";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <DogContextManager>
        <App />
    </DogContextManager>
);
