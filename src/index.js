import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyled } from './style';
import { GlobalIconStyled }  from './statics/iconfont/iconfont'
import App from './App';
ReactDOM.render(
  <React.StrictMode>
      <GlobalIconStyled/>
      <GlobalStyled/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
