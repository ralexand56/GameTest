import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body, html {
    font-family: 'Century Gothic', Arial, sans-serif;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #e2edff;
  }

  .item {
    border-radius: 5px;
    background: lightblue;
    list-style: none;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 3px;
    font-weight: bold;
    color: #fff;
    font-family: 'Century Gothic';
  }
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
