import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { hot } from 'react-hot-loader/root';
import '@fortawesome/fontawesome-free/js/all';
import '../resources/css/bootstrap.css';
import '../resources/css/ui.common.css';

const Hot = hot(Root);

ReactDOM.render(<Hot />, document.getElementById('root'));
