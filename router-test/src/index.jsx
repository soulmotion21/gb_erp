import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { hot } from 'react-hot-loader/root';
// import './index.css';

const Hot = hot(Root);

ReactDOM.render(<Hot />, document.getElementById('root'));
