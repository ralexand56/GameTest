import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body, html {
    font-family: 'Century Gothic', Arial, sans-serif;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #e2edff;
  }
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
